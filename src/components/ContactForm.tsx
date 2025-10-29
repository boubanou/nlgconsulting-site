import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().max(2000).optional().or(z.literal("")),
  urgent: z.boolean().default(false),
  consent: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      urgent: false,
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;
    if (!siteKey || siteKey === "YOUR_RECAPTCHA_SITE_KEY_HERE") {
      toast.error("reCAPTCHA error", {
        description: "La protection reCAPTCHA n'est pas configurée. Réessayez plus tard.",
      });
      setIsSubmitting(false);
      return;
    }
    try {
      // Generate reCAPTCHA token with timeout and safety checks
      const recaptchaToken = await Promise.race<string>([
        new Promise<string>((resolve, reject) => {
          const grecaptcha = (window as any).grecaptcha;
          if (!grecaptcha || !grecaptcha.ready) {
            reject(new Error("reCAPTCHA not loaded"));
            return;
          }
          try {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(siteKey, { action: "submit" })
                .then(resolve)
                .catch(reject);
            });
          } catch (e) {
            reject(e as Error);
          }
        }),
        new Promise<string>((_, reject) =>
          setTimeout(() => reject(new Error("reCAPTCHA timeout")), 10000)
        ),
      ]);

      // Call edge function with CAPTCHA token
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || null,
          phone: data.phone || null,
          message: data.message || null,
          locale: i18n.language,
          urgent: data.urgent || false,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      toast.success(t("contact.success_title"), {
        description: t("contact.success_message"),
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error", {
        description: "Failed to submit form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form_name")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form_email")}</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form_company")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form_phone")}</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="FR"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form_message")}</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="urgent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{t("contact.form_urgent")}</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{t("contact.form_consent")}</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t("contact.form_submitting") : t("contact.form_submit")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

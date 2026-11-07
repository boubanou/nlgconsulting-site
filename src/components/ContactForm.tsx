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
import { hasVisitorAnalyticsConsent } from "@/lib/visitorIntent";
import { useLocation } from "react-router-dom";

const createContactSchema = (isFrench: boolean) => z.object({
  name: z.string().min(2, isFrench ? "Le nom doit contenir au moins 2 caractères." : "Name must be at least 2 characters"),
  email: z.string().email(isFrench ? "Adresse e-mail invalide." : "Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().max(2000, isFrench ? "Le message ne peut pas dépasser 2 000 caractères." : "Message must not exceed 2,000 characters").optional().or(z.literal("")),
  urgent: z.boolean().default(false),
  consent: z.boolean().refine((val) => val === true, isFrench ? "Vous devez accepter la politique de confidentialité." : "You must accept the privacy policy"),
});

type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { pathname } = useLocation();
  const isFrench = pathname.startsWith("/fr/");
  const locale = isFrench ? "fr" : "en";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(createContactSchema(isFrench)),
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

    try {
      const { data: result, error } = await supabase.functions.invoke("leads", {
        body: {
          name: data.name,
          email: data.email,
          company: data.company?.trim() || undefined,
          phone: data.phone || null,
          message: data.message?.trim() || undefined,
          locale,
          urgent: data.urgent || false,
        },
      });

      if (error || result?.ok !== true) {
        throw new Error(error?.message || "Failed to confirm lead submission");
      }

      // Record a GA4 conversion only after server-confirmed lead creation.
      // Do not transmit personal or free-text form fields to analytics.
      if (hasVisitorAnalyticsConsent() && typeof window.gtag === "function") {
        try {
          window.gtag("event", "generate_lead", {
            lead_type: "contact_form",
            form_language: locale,
          });
        } catch {
          // Analytics must never turn a successfully stored lead into a form error.
        }
      }

      toast.success(isFrench ? "Merci !" : "Thank You!", {
        description: isFrench ? "Votre demande a bien été envoyée. Nous vous répondrons rapidement." : "Your request has been sent. We'll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      if (hasVisitorAnalyticsConsent() && typeof window.gtag === "function") {
        try {
          window.gtag("event", "lead_submit_error", {
            lead_type: "contact_form",
            form_language: locale,
          });
        } catch {
          // Never interfere with the error shown to the visitor.
        }
      }
      console.error("Error submitting form:", error);
      toast.error(isFrench ? "Erreur" : "Error", {
        description: isFrench ? "Votre demande n'a pas pu être envoyée. Merci de réessayer." : "Failed to submit form. Please try again.",
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
                  <FormLabel>{isFrench ? "Nom complet" : "Name"}</FormLabel>
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
                  <FormLabel>{isFrench ? "Adresse e-mail" : "Email"}</FormLabel>
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
                  <FormLabel>{isFrench ? "Entreprise" : "Company"}</FormLabel>
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
                  <FormLabel>{isFrench ? "Téléphone" : "Phone"}</FormLabel>
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
                  <FormLabel>{isFrench ? "Message (facultatif)" : "Message (optional)"}</FormLabel>
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
                    <FormLabel>{isFrench ? "Demander à être rappelé rapidement" : "Request immediate callback"}</FormLabel>
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
                    <FormLabel>{isFrench ? "J’accepte le traitement de mes données personnelles afin de recevoir une réponse à ma demande, conformément à la politique de confidentialité." : "I consent to the processing of my personal data for the purpose of responding to my inquiry, as described in the Privacy Policy."}</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (isFrench ? "Envoi en cours..." : "Sending...") : (isFrench ? "Envoyer ma demande" : "Send")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

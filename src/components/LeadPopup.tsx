import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SESSION_STORAGE_KEY = "nlg-lead-popup-shown";
const POPUP_DELAY_MS = 30000; // 30 seconds

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const LeadPopup = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
  });

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (popupShown) return;

    // Show popup after delay
    const timer = setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPopup) {
        handleClose();
      }
    };

    if (showPopup) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);

    try {
      // Send to callbacks edge function
      const { error } = await supabase.functions.invoke("callbacks", {
        body: {
          phone: data.phone,
          note: `Name: ${data.name}, Email: ${data.email}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      });

      if (error) throw error;

      // Track with GA4
      if (typeof window.gtag === "function") {
        window.gtag("event", "lead_popup_submit", {
          form: "callback",
          site: "nlgconsulting",
        });
      }

      console.log("✅ Lead popup submission:", { name: data.name, email: data.email, phone: data.phone });

      toast.success(t("leadPopup.successMessage"));
      reset();
      handleClose();
    } catch (error) {
      console.error("Lead popup error:", error);
      toast.error(t("leadPopup.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      <Card
        className="w-full max-w-md p-6 space-y-4 bg-background shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-6 w-6 text-primary" />
            <h2 id="lead-popup-title" className="text-xl font-bold">
              {t("leadPopup.title")}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            aria-label={t("leadPopup.close")}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">{t("leadPopup.message")}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">{t("leadPopup.nameLabel")}</Label>
            <Input
              id="popup-name"
              {...register("name")}
              placeholder={t("leadPopup.namePlaceholder")}
              className={errors.name ? "border-destructive" : ""}
              autoFocus
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-email">{t("leadPopup.emailLabel")}</Label>
            <Input
              id="popup-email"
              type="email"
              {...register("email")}
              placeholder={t("leadPopup.emailPlaceholder")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-phone">{t("leadPopup.phoneLabel")}</Label>
            <Input
              id="popup-phone"
              type="tel"
              {...register("phone")}
              placeholder={t("leadPopup.phonePlaceholder")}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? t("leadPopup.submitting") : t("leadPopup.submitButton")}
            </Button>
            <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
              {t("leadPopup.laterButton")}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Phone as PhoneIcon } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SESSION_STORAGE_KEY = "nlg-lead-popup-shown";
const POPUP_DELAY_MS = 30000; // 30 seconds

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(1, "Phone number is required"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const LeadPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
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
      // Send to leads edge function with urgent flag for callback
      const { error } = await supabase.functions.invoke("leads", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          locale: "en",
          urgent: true, // Creates callback automatically
          message: "Our experts can call you and explain how to boost your lead generation.",
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

      toast.success("Thank you! We'll contact you very soon.");
      reset();
      handleClose();
    } catch (error) {
      console.error("Lead popup error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      <Card
        className="w-full max-w-md p-4 sm:p-6 space-y-3 sm:space-y-4 bg-background shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" />
          <h2 id="lead-popup-title" className="text-lg sm:text-xl font-bold">
            👋 Want a call back?
          </h2>
        </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            aria-label="Close"
            className="shrink-0"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground">Our experts can call you and explain how to boost your lead generation. Leave your details:</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="popup-name" className="text-sm">Full name</Label>
            <Input
              id="popup-name"
              {...register("name")}
              placeholder="John Doe"
              className={errors.name ? "border-destructive" : ""}
              autoFocus
            />
            {errors.name && (
              <p className="text-xs sm:text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="popup-email" className="text-sm">Email</Label>
            <Input
              id="popup-email"
              type="email"
              {...register("email")}
              placeholder="john@company.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-xs sm:text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="popup-phone" className="text-sm">Phone</Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  international
                  defaultCountry="FR"
                  placeholder="+1234567890"
                  className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.phone ? "border-destructive" : "border-input"
                  }`}
                />
              )}
            />
            {errors.phone && (
              <p className="text-xs sm:text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
            <Button type="submit" disabled={isSubmitting} className="w-full sm:flex-1 text-sm">
              {isSubmitting ? "Submitting..." : "Call me back now"}
            </Button>
            <Button type="button" variant="outline" onClick={handleClose} className="w-full sm:flex-1 text-sm">
              Maybe later
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

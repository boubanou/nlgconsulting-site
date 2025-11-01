import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CONSENT_STORAGE_KEY = "nlgconsent-v2";
const CONSENT_EXPIRY_DAYS = 180; // 6 months

interface ConsentState {
  analytics: boolean;
  timestamp: number;
}

export const CookieConsent = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    
    if (savedConsent) {
      try {
        const consent: ConsentState = JSON.parse(savedConsent);
        const expiryTime = consent.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
        
        if (Date.now() < expiryTime) {
          // Valid consent exists
          updateGtagConsent(consent.analytics);
          return;
        }
      } catch (e) {
        console.error("Error parsing consent:", e);
      }
    }
    
    // Show banner if no valid consent
    setShowBanner(true);
  }, []);

  const updateGtagConsent = (analyticsGranted: boolean) => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });

      // Initialize GA4 if consent granted
      if (analyticsGranted) {
        window.gtag("config", "G-GV1CDQJ1HB", {
          anonymize_ip: true,
          cookie_flags: "SameSite=None;Secure",
        });
        console.log("✅ GA4 (G-GV1CDQJ1HB) activated with consent");
      }
    }
  };

  const saveConsent = (analytics: boolean) => {
    const consent: ConsentState = {
      analytics,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    updateGtagConsent(analytics);
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true);
  };

  const handleDecline = () => {
    saveConsent(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleSaveCustom = () => {
    saveConsent(analyticsConsent);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:p-4 pointer-events-none">
      <Card className="w-full max-w-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 pointer-events-auto animate-fade-in bg-background/95 backdrop-blur-sm border-2 shadow-xl">
        {!showCustomize ? (
          <>
            <div className="flex justify-between items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{t("cookie.title")}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  {t("cookie.description")}{" "}
                  <Link to="/privacy-policy" className="underline hover:text-primary">
                    {t("cookie.policyLink")}
                  </Link>
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDecline}
                aria-label={t("cookie.close")}
                className="shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button onClick={handleAcceptAll} className="w-full sm:flex-1 text-sm">
                {t("cookie.acceptAll")}
              </Button>
              <Button onClick={handleDecline} variant="outline" className="w-full sm:flex-1 text-sm">
                {t("cookie.decline")}
              </Button>
              <Button onClick={handleCustomize} variant="secondary" className="w-full sm:flex-1 text-sm">
                {t("cookie.customize")}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-base sm:text-lg font-semibold">{t("cookie.customizeTitle")}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowCustomize(false)}
                  aria-label={t("cookie.back")}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{t("cookie.essential")}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t("cookie.essentialDesc")}</p>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">{t("cookie.required")}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{t("cookie.analytics")}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t("cookie.analyticsDesc")}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="w-5 h-5 accent-primary cursor-pointer shrink-0"
                    aria-label={t("cookie.analytics")}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button onClick={handleSaveCustom} className="w-full sm:flex-1 text-sm">
                {t("cookie.savePreferences")}
              </Button>
              <Button onClick={() => setShowCustomize(false)} variant="outline" className="w-full sm:flex-1 text-sm">
                {t("cookie.back")}
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

// Export function to open cookie preferences
export const openCookiePreferences = () => {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.location.reload();
};

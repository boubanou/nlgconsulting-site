import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { hasVisitorAnalyticsConsent, trackVisitorEvent } from "@/lib/visitorIntent";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CONSENT_STORAGE_KEY = "nlgconsent-v2";
const CONSENT_EXPIRY_DAYS = 180;

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (savedConsent) {
      try {
        const consent: ConsentState = JSON.parse(savedConsent);
        const expiryTime = consent.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
        if (Date.now() < expiryTime) {
          updateGtagConsent(consent.analytics, consent.marketing);
          setAnalyticsConsent(consent.analytics === true);
          setMarketingConsent(consent.marketing === true);
          return;
        }
      } catch (e) {
        console.error("Error parsing consent:", e);
      }
    }
    setShowBanner(true);
  }, []);

  useEffect(() => {
    if (!hasVisitorAnalyticsConsent()) return;
    trackVisitorEvent("page_view", {
      pathname: location.pathname,
    });
  }, [location.pathname]);

  const updateGtagConsent = (analyticsGranted: boolean, marketingGranted: boolean) => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: marketingGranted ? "granted" : "denied",
        ad_user_data: marketingGranted ? "granted" : "denied",
        ad_personalization: marketingGranted ? "granted" : "denied",
      });

      if (analyticsGranted) {
        window.gtag("config", "G-GV1CDQJ1HB", {
          anonymize_ip: true,
          cookie_flags: "SameSite=None;Secure",
        });
      }
    }
  };

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const consent: ConsentState = {
      analytics,
      marketing,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    updateGtagConsent(analytics, marketing);
    setShowBanner(false);
    setShowCustomize(false);
    if (analytics) {
      window.dispatchEvent(new Event("visitor-consent-change"));
      trackVisitorEvent("page_view", { consent_activated: true });
    }
  };

  const handleAcceptAll = () => saveConsent(true, true);
  const handleDecline = () => saveConsent(false, false);
  const handleCustomize = () => setShowCustomize(true);
  const handleSaveCustom = () => saveConsent(analyticsConsent, marketingConsent);

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-2 sm:p-4 pointer-events-none">
      <Card className="w-full max-w-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 pointer-events-auto animate-fade-in bg-background/95 backdrop-blur-sm border-2 shadow-xl">
        {!showCustomize ? (
          <>
            <div className="flex justify-between items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold mb-2">🍪 We use cookies</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Optional analytics help us understand how visitors use the site. Marketing cookies are used separately for campaign attribution and retargeting. You can accept, refuse or customize them according to our{" "}
                  <Link to="/privacy-policy" className="underline hover:text-primary">privacy policy</Link>.
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleDecline} aria-label="Close" className="shrink-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button onClick={handleAcceptAll} className="w-full sm:flex-1 text-sm">Accept all</Button>
              <Button onClick={handleDecline} variant="outline" className="w-full sm:flex-1 text-sm">Reject optional</Button>
              <Button onClick={handleCustomize} variant="secondary" className="w-full sm:flex-1 text-sm">Customize</Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-base sm:text-lg font-semibold">Cookie Preferences</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowCustomize(false)} aria-label="Back">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg gap-3">
                  <div>
                    <p className="font-medium text-sm">Essential cookies</p>
                    <p className="text-xs text-muted-foreground">Required for security and basic site functionality.</p>
                  </div>
                  <span className="text-xs font-semibold text-primary">Required</span>
                </div>
                <label className="flex items-center justify-between p-3 border rounded-lg gap-3 cursor-pointer">
                  <div>
                    <p className="font-medium text-sm">Analytics</p>
                    <p className="text-xs text-muted-foreground">Audience, navigation, engagement, sources and conversion events.</p>
                  </div>
                  <input type="checkbox" checked={analyticsConsent} onChange={(e) => setAnalyticsConsent(e.target.checked)} className="w-5 h-5 accent-primary" />
                </label>
                <label className="flex items-center justify-between p-3 border rounded-lg gap-3 cursor-pointer">
                  <div>
                    <p className="font-medium text-sm">Marketing & retargeting</p>
                    <p className="text-xs text-muted-foreground">Advertising attribution, campaign identifiers and retargeting preferences.</p>
                  </div>
                  <input type="checkbox" checked={marketingConsent} onChange={(e) => setMarketingConsent(e.target.checked)} className="w-5 h-5 accent-primary" />
                </label>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button onClick={handleSaveCustom} className="w-full sm:flex-1 text-sm">Save preferences</Button>
              <Button onClick={() => setShowCustomize(false)} variant="outline" className="w-full sm:flex-1 text-sm">Back</Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export const openCookiePreferences = () => {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.location.reload();
};

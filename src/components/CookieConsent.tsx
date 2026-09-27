import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { hasVisitorAnalyticsConsent, identifyVisitor, trackVisitorEvent } from "@/lib/visitorIntent";

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

function readSubmittedIdentity(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (...names: string[]) => {
    for (const name of names) {
      const value = data.get(name);
      if (typeof value === "string" && value.trim()) return value.trim().slice(0, 300);
    }
    return undefined;
  };
  return {
    email: get("email", "work_email", "business_email"),
    name: get("name", "full_name", "fullname", "first_name"),
    company: get("company", "company_name", "organization", "organisation"),
    phone: get("phone", "telephone", "tel"),
  };
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
    trackVisitorEvent("page_view", { pathname: location.pathname });
  }, [location.pathname]);

  useEffect(() => {
    if (!hasVisitorAnalyticsConsent()) return;
    const startedAt = Date.now();
    const sentScroll = new Set<number>();
    let maxScroll = 0;

    const onScroll = () => {
      const root = document.documentElement;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      const percent = Math.min(100, Math.round((window.scrollY / max) * 100));
      maxScroll = Math.max(maxScroll, percent);
      [25, 50, 75, 90].forEach((threshold) => {
        if (percent >= threshold && !sentScroll.has(threshold)) {
          sentScroll.add(threshold);
          trackVisitorEvent("scroll_depth", { percent: threshold }, threshold >= 75 ? 2 : 0);
        }
      });
    };

    const onClick = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest("a,button,[role='button']") as HTMLElement | null : null;
      if (!element) return;
      const anchor = element instanceof HTMLAnchorElement ? element : element.closest("a");
      const href = anchor?.getAttribute("href") || "";
      const external = Boolean(anchor?.hostname && anchor.hostname !== window.location.hostname);
      const data = { tag: element.tagName.toLowerCase(), href: href.slice(0, 300), external };
      if (/^(mailto:|tel:)/.test(href)) trackVisitorEvent("contact_click", data, 8);
      else if (/contact|book|demo|rendez-vous|pricing|quote/i.test(href)) trackVisitorEvent("high_intent_click", data, 10);
      else if (/\.(pdf|docx?|xlsx?|csv)(\?|$)/i.test(href)) trackVisitorEvent("download_click", data, 4);
      else if (external) trackVisitorEvent("outbound_click", data, 2);
    };

    const onFocus = (event: FocusEvent) => {
      const field = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      const form = field?.form;
      if (!form || form.dataset.intentStarted === "1") return;
      form.dataset.intentStarted = "1";
      trackVisitorEvent("form_start", { form_id: form.id || undefined }, 5);
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null;
      if (!form) return;
      const identity = readSubmittedIdentity(form);
      const identityFields = Object.entries(identity).filter(([, value]) => value).map(([key]) => key);
      trackVisitorEvent("form_submit", { form_id: form.id || undefined, identity_fields: identityFields }, 20);
      if (identity.email || identity.phone) identifyVisitor(identity);
    };

    const timers = [15, 30, 60, 120].map((seconds) => window.setTimeout(() => {
      if (document.visibilityState === "visible" && hasVisitorAnalyticsConsent()) {
        trackVisitorEvent("engaged_time", { seconds }, seconds >= 60 ? 2 : 0);
      }
    }, seconds * 1000));

    const onPageHide = () => trackVisitorEvent("page_exit", {
      seconds_on_page: Math.round((Date.now() - startedAt) / 1000),
      max_scroll_percent: maxScroll,
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick, true);
    document.addEventListener("focusin", onFocus, true);
    document.addEventListener("submit", onSubmit, true);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("focusin", onFocus, true);
      document.removeEventListener("submit", onSubmit, true);
      window.removeEventListener("pagehide", onPageHide);
      timers.forEach(clearTimeout);
    };
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
    const consent: ConsentState = { analytics, marketing, timestamp: Date.now() };
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
              <Button variant="ghost" size="icon" onClick={handleDecline} aria-label="Close" className="shrink-0"><X className="h-4 w-4" /></Button>
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
                <Button variant="ghost" size="icon" onClick={() => setShowCustomize(false)} aria-label="Back"><X className="h-4 w-4" /></Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg gap-3">
                  <div><p className="font-medium text-sm">Essential cookies</p><p className="text-xs text-muted-foreground">Required for security and basic site functionality.</p></div>
                  <span className="text-xs font-semibold text-primary">Required</span>
                </div>
                <label className="flex items-center justify-between p-3 border rounded-lg gap-3 cursor-pointer">
                  <div><p className="font-medium text-sm">Analytics</p><p className="text-xs text-muted-foreground">Audience, navigation, engagement, sources and conversion events.</p></div>
                  <input type="checkbox" checked={analyticsConsent} onChange={(e) => setAnalyticsConsent(e.target.checked)} className="w-5 h-5 accent-primary" />
                </label>
                <label className="flex items-center justify-between p-3 border rounded-lg gap-3 cursor-pointer">
                  <div><p className="font-medium text-sm">Marketing & retargeting</p><p className="text-xs text-muted-foreground">Advertising attribution, campaign identifiers and retargeting preferences.</p></div>
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

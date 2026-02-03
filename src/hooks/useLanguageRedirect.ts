import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LANGUAGE_REDIRECT_KEY = "nlg_language_redirect_done";

export const useLanguageRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run on first visit (check localStorage)
    if (localStorage.getItem(LANGUAGE_REDIRECT_KEY)) {
      return;
    }

    // Mark as done immediately to prevent multiple redirects
    localStorage.setItem(LANGUAGE_REDIRECT_KEY, "true");

    // Only redirect if on English pages (not already on /fr/*)
    if (location.pathname.startsWith("/fr")) {
      return;
    }

    // Skip redirect for admin, auth, and utility pages
    const skipPaths = ["/admin", "/auth", "/access-denied", "/web/terms", "/web/thank-you"];
    if (skipPaths.some(path => location.pathname.startsWith(path))) {
      return;
    }

    // Detect browser language
    const browserLang = navigator.language || (navigator as any).userLanguage || "";
    const isFrench = browserLang.toLowerCase().startsWith("fr");

    if (isFrench) {
      // Map English paths to French equivalents
      const pathMap: Record<string, string> = {
        "/": "/fr",
        "/about": "/fr/a-propos",
        "/sales": "/fr/vente",
        "/advisory": "/fr/conseil",
        "/ventures": "/fr/ventures",
        "/contact": "/fr/contact",
        "/book": "/fr/rendez-vous",
        "/privacy-policy": "/fr/politique-confidentialite",
        "/web": "/fr/site-internet",
      };

      const frenchPath = pathMap[location.pathname];
      if (frenchPath) {
        navigate(frenchPath, { replace: true });
      }
    }
  }, [location.pathname, navigate]);
};

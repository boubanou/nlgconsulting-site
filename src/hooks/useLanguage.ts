import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { seoRouteByPath } from "@/lib/seo-route-metadata";
import { insightAlternatePaths } from "@/lib/insight-alternate-paths";

export type Language = "en" | "fr";

// Never guess translated slugs by adding or removing "/fr": this previously
// generated 404s for articles and some sales landing pages.
const extraAlternates: Record<string, string> = {
  "/privacy-policy": "/fr/politique-confidentialite",
  "/fr/politique-confidentialite": "/privacy-policy",
  // The website service terms currently exist in English only.
  "/web/terms": "/fr/site-internet",
};

export function getAlternateLanguagePath(rawPath: string, targetLang: Language): string {
  const currentPath = rawPath.replace(/\/+$/, "") || "/";
  const currentLang: Language = /^\/fr(?:\/|$)/.test(currentPath) ? "fr" : "en";
  if (targetLang === currentLang) return currentPath;

  const insight = insightAlternatePaths[currentPath];
  if (insight && (/^\/fr(?:\/|$)/.test(insight) ? "fr" : "en") === targetLang) {
    return insight;
  }

  const seoAlternate = seoRouteByPath[currentPath]?.alternate;
  if (seoAlternate && seoRouteByPath[seoAlternate]?.lang === targetLang) {
    return seoAlternate;
  }

  const special = extraAlternates[currentPath];
  if (special) return special;

  // When no translated equivalent exists, link to the target-language home,
  // which is always a real page, rather than manufacturing a broken URL.
  return targetLang === "fr" ? "/fr" : "/";
}

export const useLanguage = () => {
  const location = useLocation();
  const language = useMemo<Language>(
    () => (/^\/fr(?:\/|$)/.test(location.pathname) ? "fr" : "en"),
    [location.pathname],
  );
  return {
    language,
    isEnglish: language === "en",
    isFrench: language === "fr",
    getAlternateUrl: (targetLang: Language) => getAlternateLanguagePath(location.pathname, targetLang),
    switchLanguageUrl: getAlternateLanguagePath(location.pathname, language === "en" ? "fr" : "en"),
    baseUrl: "https://www.nlgconsulting.co",
  };
};

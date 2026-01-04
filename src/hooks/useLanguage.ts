import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export type Language = "en" | "fr";

export const useLanguage = () => {
  const location = useLocation();
  
  const language = useMemo((): Language => {
    return location.pathname.startsWith("/fr") ? "fr" : "en";
  }, [location.pathname]);
  
  const isEnglish = language === "en";
  const isFrench = language === "fr";
  
  // Get the equivalent path in the other language
  const getAlternateUrl = (targetLang: Language): string => {
    const currentPath = location.pathname;
    
    if (targetLang === "fr") {
      // EN to FR
      if (currentPath === "/") return "/fr";
      if (currentPath === "/about") return "/fr/a-propos";
      if (currentPath === "/sales") return "/fr/vente";
      if (currentPath === "/advisory") return "/fr/conseil";
      if (currentPath === "/web") return "/fr/site-internet";
      if (currentPath === "/ventures") return "/fr/ventures";
      if (currentPath === "/contact") return "/fr/contact";
      if (currentPath === "/book") return "/fr/rendez-vous";
      if (currentPath === "/privacy-policy") return "/fr/politique-confidentialite";
      return `/fr${currentPath}`;
    } else {
      // FR to EN
      if (currentPath === "/fr" || currentPath === "/fr/") return "/";
      if (currentPath === "/fr/a-propos") return "/about";
      if (currentPath === "/fr/vente") return "/sales";
      if (currentPath === "/fr/conseil") return "/advisory";
      if (currentPath === "/fr/site-internet") return "/web";
      if (currentPath === "/fr/ventures") return "/ventures";
      if (currentPath === "/fr/contact") return "/contact";
      if (currentPath === "/fr/rendez-vous") return "/book";
      if (currentPath === "/fr/politique-confidentialite") return "/privacy-policy";
      return currentPath.replace("/fr", "") || "/";
    }
  };
  
  const switchLanguageUrl = getAlternateUrl(language === "en" ? "fr" : "en");
  
  return {
    language,
    isEnglish,
    isFrench,
    getAlternateUrl,
    switchLanguageUrl,
    baseUrl: "https://nlgconsulting.co"
  };
};

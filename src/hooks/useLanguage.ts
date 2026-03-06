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
      if (currentPath === "/services") return "/fr/services";
      if (currentPath === "/ai-lead-generation") return "/fr/generation-leads-ia";
      if (currentPath === "/saas-monetization") return "/fr/monetisation-saas";
      if (currentPath === "/go-to-market") return "/fr/strategie-go-to-market";
      if (currentPath === "/proptech-consulting") return "/fr/conseil-proptech";
      if (currentPath === "/marketing") return "/fr/marketing";
      if (currentPath === "/outsourced-sdr") return "/fr/sdr-externalise";
      if (currentPath === "/b2b-lead-generation-agency") return "/fr/agence-lead-generation-b2b";
      if (currentPath === "/appointment-setting") return "/fr/prise-de-rendez-vous-b2b";
      if (currentPath === "/go-to-market-consulting") return "/fr/strategie-go-to-market";
      if (currentPath === "/website-in-72-hours") return "/fr/site-web-en-72h";
      if (currentPath === "/ai-for-saas") return "/fr/ia-pour-saas";
      if (currentPath === "/ai-for-proptech") return "/fr/ia-pour-proptech";
      if (currentPath === "/ai-for-fintech") return "/fr/ia-pour-fintech";
      if (currentPath === "/ai-for-real-estate") return "/fr/ia-pour-immobilier";
      if (currentPath === "/ai-for-consulting-firms") return "/fr/ia-pour-cabinets-conseil";
      if (currentPath === "/ai-for-agencies") return "/fr/ia-pour-agences";
      if (currentPath === "/ai-for-b2b-services") return "/fr/ia-pour-services-b2b";
      if (currentPath === "/ai-consulting") return "/fr/conseil-ia";
      if (currentPath === "/ai-automation") return "/fr/automation-ia";
      if (currentPath === "/ai-agents-for-business") return "/fr/agents-ia-entreprise";
      if (currentPath === "/ai-marketing-automation") return "/fr/automation-marketing-ia";
      if (currentPath === "/ai-sales-automation") return "/fr/automation-commerciale-ia";
      if (currentPath === "/prompt-engineering-consulting") return "/fr/conseil-prompt-engineering";
      if (currentPath === "/outsourced-ai-implementation") return "/fr/implementation-ia-externalisee";
      if (currentPath === "/ai-training-for-teams") return "/fr/formation-ia-entreprise";
      if (currentPath === "/fractional-ai-consultant") return "/fr/consultant-ia-fractionnel";
      if (currentPath === "/best-ai-tools-for-business") return "/fr/meilleurs-outils-ia-entreprise";
      if (currentPath === "/how-to-automate-marketing-with-ai") return "/fr/automatiser-marketing-avec-ia";
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
      if (currentPath === "/fr/services") return "/services";
      if (currentPath === "/fr/generation-leads-ia") return "/ai-lead-generation";
      if (currentPath === "/fr/monetisation-saas") return "/saas-monetization";
      if (currentPath === "/fr/strategie-go-to-market") return "/go-to-market";
      if (currentPath === "/fr/conseil-proptech") return "/proptech-consulting";
      if (currentPath === "/fr/marketing") return "/marketing";
      if (currentPath === "/fr/sdr-externalise") return "/outsourced-sdr";
      if (currentPath === "/fr/agence-lead-generation-b2b") return "/b2b-lead-generation-agency";
      if (currentPath === "/fr/prise-de-rendez-vous-b2b") return "/appointment-setting";
      if (currentPath === "/fr/site-web-en-72h") return "/website-in-72-hours";
      if (currentPath === "/fr/ia-pour-saas") return "/ai-for-saas";
      if (currentPath === "/fr/ia-pour-proptech") return "/ai-for-proptech";
      if (currentPath === "/fr/ia-pour-fintech") return "/ai-for-fintech";
      if (currentPath === "/fr/ia-pour-immobilier") return "/ai-for-real-estate";
      if (currentPath === "/fr/ia-pour-cabinets-conseil") return "/ai-for-consulting-firms";
      if (currentPath === "/fr/ia-pour-agences") return "/ai-for-agencies";
      if (currentPath === "/fr/ia-pour-services-b2b") return "/ai-for-b2b-services";
      if (currentPath === "/fr/conseil-ia") return "/ai-consulting";
      if (currentPath === "/fr/automation-ia") return "/ai-automation";
      if (currentPath === "/fr/agents-ia-entreprise") return "/ai-agents-for-business";
      if (currentPath === "/fr/automation-marketing-ia") return "/ai-marketing-automation";
      if (currentPath === "/fr/automation-commerciale-ia") return "/ai-sales-automation";
      if (currentPath === "/fr/conseil-prompt-engineering") return "/prompt-engineering-consulting";
      if (currentPath === "/fr/implementation-ia-externalisee") return "/outsourced-ai-implementation";
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
    baseUrl: "https://www.nlgconsulting.co"
  };
};

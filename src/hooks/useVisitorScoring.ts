import { useState, useEffect, useCallback } from "react";

export type VisitorIntent = "website" | "sales" | "advisory" | "general";

interface VisitorScore {
  total: number;
  intent: VisitorIntent;
  intentScore: number;
  businessScore: number;
  actionScore: number;
  isBusinessVisitor: boolean;
  shouldEngage: boolean;
  engagementLevel: "silent" | "soft" | "pitch" | "push" | "close";
}

export interface VisitorData {
  device: "desktop" | "mobile" | "tablet";
  referrer: string;
  country: string;
  language: string;
  timezone: string;
  screenResolution: string;
  isReturning: boolean;
  pageViews: string[];
  ctaClicks: number;
  timeOnSite: number;
  chatOpened: boolean;
  sessionStart: number;
  // Collected contact info
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  gregoInteractions: number;
  lastInteraction?: string;
}

const STORAGE_KEY = "nlg_visitor_data";
const SESSION_KEY = "nlg_session_id";

const getStoredData = (): Partial<VisitorData> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveData = (data: VisitorData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Silent fail
  }
};

const getSessionId = (): string => {
  try {
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  } catch {
    return `${Date.now()}-anon`;
  }
};

const detectDevice = (): "desktop" | "mobile" | "tablet" => {
  const ua = navigator.userAgent.toLowerCase();
  if (/tablet|ipad|playbook|silk/.test(ua)) return "tablet";
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/.test(ua)) return "mobile";
  return "desktop";
};

const detectCountry = (): string => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Map timezone to approximate country
    if (tz.includes("Europe/Paris") || tz.includes("Europe/Monaco")) return "FR";
    if (tz.includes("Europe/London")) return "GB";
    if (tz.includes("Europe/Berlin") || tz.includes("Europe/Vienna")) return "DE";
    if (tz.includes("America/New_York") || tz.includes("America/Los_Angeles")) return "US";
    if (tz.includes("Europe/Brussels")) return "BE";
    if (tz.includes("Europe/Zurich")) return "CH";
    if (tz.includes("Europe/Amsterdam")) return "NL";
    return tz.split("/")[0] || "Unknown";
  } catch {
    return "Unknown";
  }
};

const detectIntent = (pageViews: string[], referrer: string): { intent: VisitorIntent; score: number } => {
  const webPages = pageViews.filter(p => p.includes("/web")).length;
  const salesPages = pageViews.filter(p => p.includes("/sales")).length;
  const advisoryPages = pageViews.filter(p => p.includes("/advisory") || p.includes("/about")).length;
  const venturesPages = pageViews.filter(p => p.includes("/ventures")).length;
  const bookPages = pageViews.filter(p => p.includes("/book") || p.includes("/contact")).length;
  
  // Check referrer for intent signals
  const referrerLower = referrer.toLowerCase();
  let referrerBonus = 0;
  let referrerIntent: VisitorIntent = "general";
  
  if (referrerLower.includes("google") || referrerLower.includes("bing")) {
    referrerBonus = 15;
  }
  if (referrerLower.includes("linkedin")) {
    referrerBonus = 20;
    referrerIntent = "advisory";
  }
  if (referrerLower.includes("producthunt") || referrerLower.includes("reddit")) {
    referrerBonus = 12;
    referrerIntent = "website";
  }
  
  // Determine dominant intent
  const scores: Record<VisitorIntent, number> = {
    website: webPages * 20 + (referrer.includes("web") ? 15 : 0),
    sales: salesPages * 18 + venturesPages * 10,
    advisory: advisoryPages * 15 + (referrerIntent === "advisory" ? 15 : 0),
    general: 5 + bookPages * 10
  };
  
  const maxIntent = (Object.entries(scores) as [VisitorIntent, number][]).reduce((a, b) => a[1] > b[1] ? a : b);
  const intentScore = Math.min(50, maxIntent[1] + referrerBonus);
  
  return { intent: maxIntent[0], score: intentScore };
};

const calculateBusinessScore = (data: VisitorData): number => {
  let score = 10; // Base score for visiting the site
  
  // Device: desktop indicates business user (boosted)
  if (data.device === "desktop") score += 15;
  else if (data.device === "tablet") score += 8;
  else score += 5;
  
  // Returning visitor - high intent signal
  if (data.isReturning) score += 10;
  
  // Traffic source signals
  const referrer = data.referrer.toLowerCase();
  if (referrer.includes("linkedin")) score += 12;
  else if (referrer.includes("google")) score += 8;
  else if (referrer.includes("direct") || !referrer) score += 5;
  
  // European timezone = target market
  if (data.timezone.includes("Europe")) score += 5;
  
  // Already provided contact info
  if (data.email) score += 10;
  if (data.phone) score += 8;
  
  return Math.min(35, score);
};

const calculateActionScore = (data: VisitorData): number => {
  let score = 0;
  
  // CTA clicks - strong intent
  score += Math.min(15, data.ctaClicks * 6);
  
  // Chat interactions
  score += Math.min(10, data.gregoInteractions * 3);
  
  // Multiple page views - exploring site
  if (data.pageViews.length >= 2) score += 5;
  if (data.pageViews.length >= 4) score += 8;
  
  // Time on site (1 point per 10 seconds, max 10)
  score += Math.min(10, Math.floor(data.timeOnSite / 10));
  
  // Visited high-intent pages
  const hasVisitedBook = data.pageViews.some(p => p.includes("/book"));
  const hasVisitedContact = data.pageViews.some(p => p.includes("/contact"));
  const hasVisitedWeb = data.pageViews.some(p => p.includes("/web"));
  
  if (hasVisitedBook) score += 15;
  if (hasVisitedContact) score += 12;
  if (hasVisitedWeb) score += 8;
  
  return Math.min(40, score);
};

export const useVisitorScoring = () => {
  const [visitorData, setVisitorData] = useState<VisitorData>(() => {
    const stored = getStoredData();
    const currentPath = window.location.pathname;
    
    return {
      device: detectDevice(),
      referrer: document.referrer || stored.referrer || "direct",
      country: detectCountry(),
      language: navigator.language || "en",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      isReturning: !!stored.pageViews?.length,
      pageViews: stored.pageViews 
        ? [...new Set([...stored.pageViews, currentPath])] 
        : [currentPath],
      ctaClicks: stored.ctaClicks || 0,
      timeOnSite: stored.timeOnSite || 0,
      chatOpened: stored.chatOpened || false,
      sessionStart: Date.now(),
      name: stored.name,
      email: stored.email,
      phone: stored.phone,
      company: stored.company,
      gregoInteractions: stored.gregoInteractions || 0,
      lastInteraction: stored.lastInteraction
    };
  });

  const [score, setScore] = useState<VisitorScore>({
    total: 0,
    intent: "general",
    intentScore: 0,
    businessScore: 0,
    actionScore: 0,
    isBusinessVisitor: false,
    shouldEngage: false,
    engagementLevel: "silent"
  });

  const [timeOnSite, setTimeOnSite] = useState(0);
  const [canEngage, setCanEngage] = useState(false);

  // Track time on site and 12-second trigger (faster activation for higher conversion)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
    }, 1000);

    // 12-second engagement permission trigger (reduced from 15s for faster GREGO activation)
    const engageTimer = setTimeout(() => {
      setCanEngage(true);
    }, 12000);

    return () => {
      clearInterval(interval);
      clearTimeout(engageTimer);
    };
  }, []);

  // Track page views on navigation
  useEffect(() => {
    const handleNavigation = () => {
      const newPath = window.location.pathname;
      setVisitorData(prev => ({
        ...prev,
        pageViews: [...new Set([...prev.pageViews, newPath])]
      }));
    };

    window.addEventListener("popstate", handleNavigation);
    
    // Also watch for pushState/replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleNavigation();
    };
    
    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleNavigation();
    };

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  // Calculate score when data changes
  useEffect(() => {
    const { intent, score: intentScore } = detectIntent(visitorData.pageViews, visitorData.referrer);
    const businessScore = calculateBusinessScore(visitorData);
    const actionScore = calculateActionScore(visitorData);
    const total = intentScore + businessScore + actionScore;

    // Determine engagement level based on score (aggressive thresholds for maximum conversion)
    let engagementLevel: VisitorScore["engagementLevel"];
    if (total < 20) engagementLevel = "silent";
    else if (total < 35) engagementLevel = "soft";
    else if (total < 50) engagementLevel = "pitch";
    else if (total < 65) engagementLevel = "push";
    else engagementLevel = "close";

    setScore({
      total,
      intent,
      intentScore,
      businessScore,
      actionScore,
      isBusinessVisitor: businessScore >= 15,
      shouldEngage: canEngage && total >= 20, // Lowered from 25 to 20 for faster engagement
      engagementLevel
    });

    // Save data
    saveData({ ...visitorData, timeOnSite });
  }, [visitorData, canEngage, timeOnSite]);

  const trackCTAClick = useCallback(() => {
    setVisitorData(prev => ({ ...prev, ctaClicks: prev.ctaClicks + 1 }));
  }, []);

  const trackChatOpen = useCallback(() => {
    setVisitorData(prev => ({ 
      ...prev, 
      chatOpened: true,
      gregoInteractions: prev.gregoInteractions + 1,
      lastInteraction: new Date().toISOString()
    }));
  }, []);

  const setContactInfo = useCallback((info: { name?: string; email?: string; phone?: string; company?: string }) => {
    setVisitorData(prev => {
      const updated = { ...prev, ...info };
      saveData(updated);
      return updated;
    });
  }, []);

  const getSessionId = useCallback(() => {
    return `${visitorData.sessionStart}-${visitorData.device}`;
  }, [visitorData.sessionStart, visitorData.device]);

  const getOpeningMessage = useCallback((): string | null => {
    if (!canEngage || score.total < 20) return null; // Lowered from 25 to 20 for faster activation

    const { intent, engagementLevel } = score;
    
    // Detect if we're on French pages
    const isFrench = window.location.pathname.startsWith('/fr');

    // French intent-specific openers
    const frenchOpeners: Record<VisitorIntent, Record<string, string>> = {
      website: {
        soft: "👋 Je vois que vous explorez nos services web. Nous créons des sites performants en 72 heures. Voulez-vous voir des exemples ?",
        pitch: "Vous regardez nos offres Studio. Nous avons livré plus de 50 sites optimisés conversion. Je peux vous montrer exactement ce qu'on ferait pour vous – intéressé ?",
        push: "Prêt à lancer un site qui convertit vraiment ? Je peux vous réserver un appel de 15 minutes pour cadrer votre projet.",
        close: "Laissez-moi vous réserver un appel stratégique – votre site peut être en ligne cette semaine. Demain, ça vous va ?"
      },
      sales: {
        soft: "👋 Vous cherchez à développer votre pipeline commercial ? Nous avons aidé des entreprises à passer de 0 à 30 RDV qualifiés par mois.",
        pitch: "Notre infrastructure Sales & BD a généré des millions en pipeline pour des startups et scale-ups. Quel est votre défi actuel en prospection ?",
        push: "Je vous recommande un Audit Commercial rapide – 15 minutes pour cartographier votre potentiel de croissance. Puis-je le réserver ?",
        close: "Planifions votre Audit Commercial. Cet appel seul pourrait transformer votre pipeline. Prêt ?"
      },
      advisory: {
        soft: "👋 Gregory Brenig accompagne des fondateurs depuis 15+ ans à scaler globalement. Avez-vous une décision stratégique à prendre ?",
        pitch: "Conseil stratégique par quelqu'un qui a construit et scalé plusieurs ventures. Quel défi vous empêche de dormir ?",
        push: "Un appel stratégique de 15 minutes avec Gregory pourrait vous faire gagner des mois. Voulez-vous que je réserve ?",
        close: "Laissez-moi vous donner accès direct à Gregory. Les fondateurs stratégiques n'attendent pas – on réserve ?"
      },
      general: {
        soft: "👋 Bienvenue chez NLG Consulting ! Sites web, développement commercial ou stratégie – je suis là pour vous guider.",
        pitch: "Nous aidons les entreprises à lancer rapidement, scaler les ventes et obtenir des conseils stratégiques. Qu'est-ce qui vous correspond le mieux ?",
        push: "Quel que soit votre projet, un appel de 15 minutes pourrait clarifier vos prochaines étapes. Voulez-vous que je le réserve ?",
        close: "Prêt à avancer ? Réservons un créneau avec notre équipe."
      }
    };

    // English intent-specific openers - direct and action-oriented
    const englishOpeners: Record<VisitorIntent, Record<string, string>> = {
      website: {
        soft: "👋 I noticed you're exploring our website services. We build revenue-ready sites in just 72 hours. Want to see some examples?",
        pitch: "You're looking at our Studio packages. We've delivered 50+ conversion-optimized websites. I can show you exactly what we'd build for you – interested?",
        push: "Ready to launch a website that actually converts? I can get you on a quick 15-minute call to scope your project right now.",
        close: "Let me book you a strategy call – we can have your website live this week. Does tomorrow work?"
      },
      sales: {
        soft: "👋 Looking to scale your sales pipeline? We've helped companies go from 0 to 30 qualified meetings per month.",
        pitch: "Our Sales & BD infrastructure has generated millions in pipeline for startups and scale-ups. What's your current outbound challenge?",
        push: "I'd recommend a quick Sales Audit call – 15 minutes to map your growth potential. Can I book that for you?",
        close: "Let's get you scheduled for a Sales Audit. This call alone could transform your pipeline. Ready?"
      },
      advisory: {
        soft: "👋 Gregory Brenig has 15+ years helping founders scale globally. Are you facing a strategic decision right now?",
        pitch: "Strategic advisory from someone who's built and scaled multiple ventures. What challenge is keeping you up at night?",
        push: "A 15-minute strategy call with Gregory could save you months. Want me to book it?",
        close: "Let me get you direct access to Gregory. Strategic founders don't wait – shall I book you in?"
      },
      general: {
        soft: "👋 Welcome to NLG Consulting! Whether it's websites, sales, or strategy – I'm here to help you find the right fit.",
        pitch: "We help businesses launch fast, scale sales, and get strategic guidance. Which sounds most relevant to your needs?",
        push: "Whatever you're working on, a 15-minute call could clarify your best next steps. Want me to book it?",
        close: "Ready to move forward? Let's get you on the calendar with our team."
      }
    };

    const openers = isFrench ? frenchOpeners : englishOpeners;

    return openers[intent][engagementLevel] || openers.general.soft;
  }, [score, canEngage]);

  const getRecommendedPage = useCallback((): { url: string; label: string } | null => {
    const { intent } = score;
    
    const recommendations: Record<VisitorIntent, { url: string; label: string }> = {
      website: { url: "/web", label: "Website Packages" },
      sales: { url: "/sales", label: "Sales & BD Services" },
      advisory: { url: "/advisory", label: "Strategic Advisory" },
      
      general: { url: "/book", label: "Book a Strategy Call" }
    };
    
    return recommendations[intent];
  }, [score]);

  const getBookingUrl = useCallback((): string => {
    return "https://calendly.com/greg-nlgconsulting/15min";
  }, []);

  return {
    score,
    canEngage,
    timeOnSite,
    visitorData,
    trackCTAClick,
    trackChatOpen,
    setContactInfo,
    getOpeningMessage,
    getRecommendedPage,
    getBookingUrl,
    getSessionId,
    visitorIntent: score.intent
  };
};

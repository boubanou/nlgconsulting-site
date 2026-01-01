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

interface VisitorData {
  device: "desktop" | "mobile" | "tablet";
  referrer: string;
  country: string;
  isReturning: boolean;
  pageViews: string[];
  ctaClicks: number;
  timeOnSite: number;
  chatOpened: boolean;
}

const STORAGE_KEY = "nlg_visitor_data";

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

const detectDevice = (): "desktop" | "mobile" | "tablet" => {
  const ua = navigator.userAgent.toLowerCase();
  if (/tablet|ipad|playbook|silk/.test(ua)) return "tablet";
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/.test(ua)) return "mobile";
  return "desktop";
};

const detectIntent = (pageViews: string[], referrer: string): { intent: VisitorIntent; score: number } => {
  const webPages = pageViews.filter(p => p.includes("/web")).length;
  const salesPages = pageViews.filter(p => p.includes("/sales")).length;
  const advisoryPages = pageViews.filter(p => p.includes("/advisory") || p.includes("/about")).length;
  
  // Check referrer for intent signals
  const referrerLower = referrer.toLowerCase();
  let referrerBonus = 0;
  let referrerIntent: VisitorIntent = "general";
  
  if (referrerLower.includes("google") || referrerLower.includes("bing")) {
    referrerBonus = 10;
    // Could check search terms if available
  }
  if (referrerLower.includes("linkedin")) {
    referrerBonus = 15;
    referrerIntent = "advisory";
  }
  
  // Determine dominant intent
  const scores = {
    website: webPages * 15 + (referrer.includes("web") ? 10 : 0),
    sales: salesPages * 15,
    advisory: advisoryPages * 12 + (referrerIntent === "advisory" ? 10 : 0),
    general: 5
  };
  
  const maxIntent = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);
  const intentScore = Math.min(50, maxIntent[1] + referrerBonus);
  
  return { intent: maxIntent[0] as VisitorIntent, score: intentScore };
};

const calculateBusinessScore = (data: VisitorData): number => {
  let score = 0;
  
  // Device: desktop indicates business user
  if (data.device === "desktop") score += 8;
  else if (data.device === "tablet") score += 5;
  
  // Returning visitor
  if (data.isReturning) score += 7;
  
  // Traffic source signals (simplified - would need analytics for full implementation)
  const referrer = data.referrer.toLowerCase();
  if (referrer.includes("linkedin")) score += 10;
  else if (referrer.includes("google")) score += 5;
  
  return Math.min(25, score);
};

const calculateActionScore = (data: VisitorData): number => {
  let score = 0;
  
  // CTA clicks
  score += Math.min(15, data.ctaClicks * 5);
  
  // Chat opened
  if (data.chatOpened) score += 5;
  
  // Multiple page views
  if (data.pageViews.length >= 3) score += 5;
  
  return Math.min(25, score);
};

export const useVisitorScoring = () => {
  const [visitorData, setVisitorData] = useState<VisitorData>(() => {
    const stored = getStoredData();
    const currentPath = window.location.pathname;
    
    return {
      device: detectDevice(),
      referrer: document.referrer,
      country: "", // Would need geo API
      isReturning: !!stored.pageViews?.length,
      pageViews: [...(stored.pageViews || []), currentPath],
      ctaClicks: stored.ctaClicks || 0,
      timeOnSite: stored.timeOnSite || 0,
      chatOpened: stored.chatOpened || false
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

  // Track time on site and 30-second trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
    }, 1000);

    // 30-second engagement permission trigger
    const engageTimer = setTimeout(() => {
      setCanEngage(true);
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(engageTimer);
    };
  }, []);

  // Track page views
  useEffect(() => {
    const handleNavigation = () => {
      setVisitorData(prev => ({
        ...prev,
        pageViews: [...prev.pageViews, window.location.pathname]
      }));
    };

    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  // Calculate score when data changes
  useEffect(() => {
    const { intent, score: intentScore } = detectIntent(visitorData.pageViews, visitorData.referrer);
    const businessScore = calculateBusinessScore(visitorData);
    const actionScore = calculateActionScore(visitorData);
    const total = intentScore + businessScore + actionScore;

    // Determine engagement level based on score
    let engagementLevel: VisitorScore["engagementLevel"];
    if (total < 40) engagementLevel = "silent";
    else if (total < 60) engagementLevel = "soft";
    else if (total < 75) engagementLevel = "pitch";
    else if (total < 90) engagementLevel = "push";
    else engagementLevel = "close";

    setScore({
      total,
      intent,
      intentScore,
      businessScore,
      actionScore,
      isBusinessVisitor: businessScore >= 15,
      shouldEngage: canEngage && total >= 40,
      engagementLevel
    });

    // Save data
    saveData({ ...visitorData, timeOnSite });
  }, [visitorData, canEngage, timeOnSite]);

  const trackCTAClick = useCallback(() => {
    setVisitorData(prev => ({ ...prev, ctaClicks: prev.ctaClicks + 1 }));
  }, []);

  const trackChatOpen = useCallback(() => {
    setVisitorData(prev => ({ ...prev, chatOpened: true }));
  }, []);

  const getOpeningMessage = useCallback((): string | null => {
    if (!canEngage || score.total < 40) return null;

    const { intent, engagementLevel } = score;

    // Intent-specific openers
    const openers: Record<VisitorIntent, Record<string, string>> = {
      website: {
        soft: "Looking for a website that actually converts? Our 72-hour delivery might be exactly what you need.",
        pitch: "I noticed you're exploring our website packages. Our Studio has delivered 50+ revenue-ready sites. Want to see what's possible for your business?",
        push: "Ready to launch a high-converting website in 72 hours? I can show you exactly how we'd approach your project.",
        close: "Let's get your website project started. I can book you a quick call with our team right now."
      },
      sales: {
        soft: "Scaling your outbound pipeline? We've helped companies go from 0 to 30 qualified meetings per month.",
        pitch: "Our Sales & BD team specializes in building predictable revenue engines. What's your current pipeline challenge?",
        push: "If you're serious about scaling sales, I'd recommend a quick strategy call. We've done this for 50+ companies.",
        close: "Let's get you booked for a sales audit. 15 minutes to map out your revenue growth potential."
      },
      advisory: {
        soft: "Scaling a business requires the right strategic guidance. That's exactly what we do at NLG.",
        pitch: "Gregory Brenig has 15+ years helping founders scale. What strategic challenge are you facing?",
        push: "A 15-minute strategy call could save you months of trial and error. Want me to set that up?",
        close: "Let's get you on the calendar with Gregory. Direct strategic guidance for founders."
      },
      general: {
        soft: "Welcome to NLG Consulting. I'm Grego—here to help you find exactly what you need.",
        pitch: "We help businesses launch websites fast, scale sales, and get strategic guidance. Which sounds most relevant?",
        push: "Whether it's a website, sales infrastructure, or strategy—we execute fast. What can I help with?",
        close: "Ready to take action? Book a quick call and let's discuss your goals."
      }
    };

    return openers[intent][engagementLevel] || openers.general.soft;
  }, [score, canEngage]);

  return {
    score,
    canEngage,
    timeOnSite,
    trackCTAClick,
    trackChatOpen,
    getOpeningMessage,
    visitorIntent: score.intent
  };
};

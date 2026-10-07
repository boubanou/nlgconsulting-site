import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Keyboard,
  Loader2,
  Mic,
  MicOff,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Lang = "en" | "fr";
type Mode = "idle" | "voice" | "text" | "processing" | "result";

type Recommendation = {
  key: string;
  title: string;
  description: string;
  route: string;
  score: number;
};

type VoiceProfile = {
  transcript: string;
  summary: string;
  recommendations: Recommendation[];
  language: Lang;
  createdAt: string;
};

const PROFILE_KEY = "nlg_voice_profile";
const INVITE_KEY = "nlg_voice_invite_seen";

const copy = {
  en: {
    new: "New",
    inviteTitle: "Talk to this website.",
    inviteText:
      "Introduce yourself, tell us what your business does and what you need. NLG will guide you directly to the most useful page.",
    inviteReturn: "Have another question? Talk to the site.",
    talk: "Talk to the site",
    write: "I prefer typing",
    close: "Close",
    introEyebrow: "NLG Voice Guide",
    firstTitle: "Introduce yourself and tell us what you need.",
    firstText:
      "Say who you are, what your business does, what is slowing you down, or what you want to improve. Speak naturally.",
    nextTitle: "Ask the site anything.",
    nextText:
      "Tell us what you are trying to understand, improve or find. We will guide you to the right place.",
    listening: "Listening…",
    listeningHint: "Speak naturally. Your words stay hidden while you talk.",
    validate: "Done — guide me",
    switchToText: "I prefer typing",
    typeTitle: "Tell the site what you need.",
    typePlaceholder:
      "Introduce yourself, explain what your business does and what you would like to improve…",
    analyse: "Guide me",
    backToVoice: "Use my voice",
    processing: "Finding the best place for you…",
    resultEyebrow: "Recommended next step",
    resultPrefix: "Based on what you told us, start here:",
    alreadyHere: "You are already on the most relevant page.",
    openPage: "Open the recommended page",
    stayHere: "Stay on this page",
    book: "Book a strategy call",
    askAgain: "Talk to the site again",
    privacy:
      "No audio file is saved by NLG in this experience. The browser transcribes your speech so the site can understand your request.",
    unsupported:
      "Voice input is not available in this browser. You can continue by typing instead.",
    denied:
      "Microphone access was not available. You can continue by typing instead.",
    emptyVoice:
      "I did not catch enough speech to guide you. Try again or switch to typing.",
    fallbackSummary:
      "I identified the most relevant NLG route based on what you described.",
  },
  fr: {
    new: "Nouveau",
    inviteTitle: "Parlez à ce site.",
    inviteText:
      "Présentez-vous, expliquez ce que fait votre entreprise et ce dont vous avez besoin. NLG vous guidera directement vers la page la plus utile.",
    inviteReturn: "Une autre question ? Parlez au site.",
    talk: "Parler au site",
    write: "Je préfère écrire",
    close: "Fermer",
    introEyebrow: "Guide vocal NLG",
    firstTitle: "Présentez-vous et expliquez-nous ce dont vous avez besoin.",
    firstText:
      "Dites qui vous êtes, ce que fait votre entreprise, ce qui vous ralentit ou ce que vous voulez améliorer. Parlez naturellement.",
    nextTitle: "Posez votre question au site.",
    nextText:
      "Expliquez ce que vous cherchez à comprendre, améliorer ou trouver. Le site vous guidera vers le bon endroit.",
    listening: "Je vous écoute…",
    listeningHint: "Parlez naturellement. Vos mots restent masqués pendant que vous parlez.",
    validate: "Terminer — guidez-moi",
    switchToText: "Je préfère écrire",
    typeTitle: "Expliquez au site ce dont vous avez besoin.",
    typePlaceholder:
      "Présentez-vous, expliquez ce que fait votre entreprise et ce que vous aimeriez améliorer…",
    analyse: "Guidez-moi",
    backToVoice: "Utiliser ma voix",
    processing: "Je cherche le meilleur endroit pour vous…",
    resultEyebrow: "Prochaine étape recommandée",
    resultPrefix: "D’après ce que vous m’avez expliqué, commencez ici :",
    alreadyHere: "Vous êtes déjà sur la page la plus pertinente.",
    openPage: "Ouvrir la page recommandée",
    stayHere: "Rester sur cette page",
    book: "Prendre un rendez-vous",
    askAgain: "Reparler au site",
    privacy:
      "NLG ne conserve pas le fichier audio. Votre navigateur peut traiter la voix via son service de reconnaissance ; le texte sert à vous guider.",
    unsupported:
      "La saisie vocale n’est pas disponible sur ce navigateur. Vous pouvez continuer en écrivant.",
    denied:
      "L’accès au microphone n’a pas été disponible. Vous pouvez continuer en écrivant.",
    emptyVoice:
      "Je n’ai pas capté assez de parole pour vous guider. Réessayez ou passez à l’écriture.",
    fallbackSummary:
      "J’ai identifié le parcours NLG le plus pertinent à partir de ce que vous m’avez expliqué.",
  },
};

const routes: Record<Lang, Array<Omit<Recommendation, "score"> & { keywords: string[] }>> = {
  en: [
    {
      key: "automation",
      title: "AI & Workflow Automation",
      description: "Reduce repetitive work, connect tools and remove manual friction from day-to-day operations.",
      route: "/ai-automation",
      keywords: [
        "automate", "automation", "manual", "repetitive", "workflow", "admin", "email",
        "report", "document", "invoice", "operations", "time", "hours", "process",
      ],
    },
    {
      key: "sales",
      title: "AI Sales & Revenue Systems",
      description: "Improve prospecting, follow-up, qualification, CRM discipline and conversion.",
      route: "/ai-sales-automation",
      keywords: [
        "sales", "lead", "leads", "prospect", "prospecting", "crm", "conversion", "pipeline",
        "follow-up", "revenue", "customers", "client", "closing", "outbound",
      ],
    },
    {
      key: "marketing",
      title: "AI Marketing Automation",
      description: "Build a more consistent acquisition and content engine with less manual effort.",
      route: "/ai-marketing-automation",
      keywords: [
        "marketing", "content", "linkedin", "newsletter", "social", "campaign", "seo",
        "traffic", "acquisition", "brand", "audience",
      ],
    },
    {
      key: "agents",
      title: "AI Agents for Business",
      description: "Use controlled AI agents for research, support, internal assistance and workflow execution.",
      route: "/ai-agents-for-business",
      keywords: ["agent", "agents", "assistant", "support", "knowledge", "research", "autonomous"],
    },
    {
      key: "website",
      title: "AI-Powered Website & Conversion",
      description: "Turn your website into a smarter conversion asset instead of a static brochure.",
      route: "/web",
      keywords: ["website", "site", "landing page", "conversion", "web", "redesign", "homepage"],
    },
    {
      key: "strategy",
      title: "AI Audit & Strategic Roadmap",
      description: "Map the best AI opportunities, prioritise ROI and build a practical implementation plan.",
      route: "/ai-consulting",
      keywords: [
        "strategy", "where to start", "not sure", "roadmap", "audit", "optimise", "optimize",
        "margin", "profit", "efficiency", "scale", "growth", "improve", "business",
      ],
    },
  ],
  fr: [
    {
      key: "automation",
      title: "IA & Automatisation des Workflows",
      description: "Réduisez le travail répétitif, connectez vos outils et retirez les frictions manuelles du quotidien.",
      route: "/fr/automation-ia",
      keywords: [
        "automatiser", "automatisation", "manuel", "manuelle", "répétitif", "workflow", "administratif",
        "email", "rapport", "document", "facture", "opérations", "temps", "heures", "processus",
      ],
    },
    {
      key: "sales",
      title: "IA Commerciale & Systèmes de Revenus",
      description: "Améliorez prospection, relances, qualification, CRM et conversion.",
      route: "/fr/automation-commerciale-ia",
      keywords: [
        "vente", "ventes", "lead", "leads", "prospect", "prospection", "crm", "conversion",
        "pipeline", "relance", "revenu", "chiffre", "clients", "client", "commercial",
      ],
    },
    {
      key: "marketing",
      title: "Automatisation Marketing IA",
      description: "Construisez une acquisition et une production de contenu plus régulières avec moins de travail manuel.",
      route: "/fr/automation-marketing-ia",
      keywords: [
        "marketing", "contenu", "linkedin", "newsletter", "social", "campagne", "seo",
        "trafic", "acquisition", "marque", "audience",
      ],
    },
    {
      key: "agents",
      title: "Agents IA pour l’Entreprise",
      description: "Déployez des agents contrôlés pour la recherche, le support, l’assistance interne et l’exécution de workflows.",
      route: "/fr/agents-ia-entreprise",
      keywords: ["agent", "agents", "assistant", "support", "connaissance", "recherche", "autonome"],
    },
    {
      key: "website",
      title: "Site IA & Conversion",
      description: "Transformez votre site en actif commercial intelligent plutôt qu’en simple vitrine.",
      route: "/fr/site-internet",
      keywords: ["site internet", "site web", "landing page", "conversion", "refonte", "web", "homepage"],
    },
    {
      key: "strategy",
      title: "Audit IA & Roadmap Stratégique",
      description: "Identifiez les meilleures opportunités IA, priorisez le ROI et construisez un plan d’implémentation concret.",
      route: "/fr/conseil-ia",
      keywords: [
        "stratégie", "commencer", "je ne sais pas", "roadmap", "audit", "optimiser",
        "marge", "rentabilité", "efficacité", "scaler", "croissance", "améliorer", "entreprise",
      ],
    },
  ],
};

const industryBoost = (text: string, lang: Lang, item: Recommendation) => {
  const lower = text.toLowerCase();
  if (item.key !== "strategy") return 0;

  const industryWords =
    lang === "fr"
      ? ["immobilier", "proptech", "fintech", "paiement", "finance", "saas", "logiciel", "cabinet", "conseil"]
      : ["real estate", "property", "proptech", "fintech", "payments", "finance", "saas", "software", "consulting"];

  return industryWords.some((word) => lower.includes(word)) ? 1 : 0;
};

const getPrimaryRecommendation = (text: string, lang: Lang): Recommendation => {
  const lower = text.toLowerCase();

  const scored = routes[lang].map((item) => {
    const keywordScore = item.keywords.reduce(
      (total, keyword) => total + (lower.includes(keyword) ? 2 : 0),
      0,
    );

    const recommendation: Recommendation = {
      key: item.key,
      title: item.title,
      description: item.description,
      route: item.route,
      score: keywordScore,
    };

    recommendation.score += industryBoost(text, lang, recommendation);
    return recommendation;
  });

  scored.sort((a, b) => b.score - a.score);

  if (!scored[0] || scored[0].score === 0) {
    const fallback = routes[lang].find((item) => item.key === "strategy")!;
    return { ...fallback, score: 1 };
  }

  return scored[0];
};

const cleanAIText = (text: string) =>
  text
    .replace(/\[ACTION\][\s\S]*?\[\/ACTION\]/g, "")
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => !/[€$£]|\b(?:USD|EUR|VAT|HT)\b/i.test(sentence))
    .slice(0, 2)
    .join(" ")
    .trim();

const GlobalVoiceGuide = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang: Lang = location.pathname.startsWith("/fr") ? "fr" : "en";
  const t = copy[lang];

  const [panelOpen, setPanelOpen] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [transcript, setTranscript] = useState("");
  const [interim, setInterim] = useState("");
  const [summary, setSummary] = useState("");
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [error, setError] = useState("");
  const [waveform, setWaveform] = useState<number[]>(Array.from({ length: 18 }, () => 18));
  const [seconds, setSeconds] = useState(0);

  const recognitionRef = useRef<any>(null);
  const finalTranscriptRef = useRef("");
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const listeningRef = useRef(false);
  const lastWaveUpdateRef = useRef(0);

  const isPublicPage =
    !location.pathname.startsWith("/admin") &&
    location.pathname !== "/auth" &&
    location.pathname !== "/access-denied";

  const isHome = location.pathname === "/" || location.pathname === "/fr";

  const hasProfile = useMemo(() => {
    try {
      return !!sessionStorage.getItem(PROFILE_KEY);
    } catch {
      return false;
    }
  }, [location.pathname]);

  const speechSupported = useMemo(() => {
    if (typeof window === "undefined") return false;
    return !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
  }, []);

  const track = (event: string, params: Record<string, string | number> = {}) => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", event, {
        site: "nlgconsulting",
        path: location.pathname,
        ...params,
      });
    }
  };

  useEffect(() => {
    if (!isPublicPage || !isHome || hasProfile) return;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(INVITE_KEY) === "true";
    } catch {
      // no-op
    }
    if (alreadySeen) return;

    const timer = window.setTimeout(() => {
      setInviteOpen(true);
      try {
        sessionStorage.setItem(INVITE_KEY, "true");
      } catch {
        // no-op
      }
      track("voice_guide_invite_show", { language: lang });
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [hasProfile, isHome, isPublicPage, lang]);

  useEffect(() => {
    const openVoice = () => {
      setInviteOpen(false);
      void startVoice();
    };
    const openText = () => {
      setInviteOpen(false);
      setPanelOpen(true);
      setMode("text");
      setError("");
    };

    window.addEventListener("nlg:open-voice-guide", openVoice);
    window.addEventListener("nlg:open-text-guide", openText);

    return () => {
      window.removeEventListener("nlg:open-voice-guide", openVoice);
      window.removeEventListener("nlg:open-text-guide", openText);
    };
  });

  useEffect(() => {
    let timer: number | undefined;
    if (mode === "voice") {
      setSeconds(0);
      timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [mode]);

  const stopVisualizer = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (audioContextRef.current) {
      void audioContextRef.current.close().catch(() => undefined);
      audioContextRef.current = null;
    }

    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setWaveform(Array.from({ length: 18 }, () => 18));
  };

  useEffect(() => {
    return () => {
      listeningRef.current = false;
      try {
        recognitionRef.current?.stop?.();
      } catch {
        // no-op
      }
      stopVisualizer();
    };
  }, []);

  const startVisualizer = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;

    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    const audioContext = new AudioCtx();
    audioContextRef.current = audioContext;

    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.7;
    source.connect(analyser);

    const data = new Uint8Array(analyser.frequencyBinCount);

    const draw = (timestamp: number) => {
      analyser.getByteFrequencyData(data);

      if (timestamp - lastWaveUpdateRef.current > 75) {
        lastWaveUpdateRef.current = timestamp;

        const bars = 18;
        const chunk = Math.max(1, Math.floor(data.length / bars));
        const next = Array.from({ length: bars }, (_, index) => {
          let total = 0;
          let count = 0;
          const start = index * chunk;
          const end = Math.min(data.length, start + chunk);

          for (let i = start; i < end; i += 1) {
            total += data[i];
            count += 1;
          }

          const average = count ? total / count : 0;
          return Math.max(12, Math.min(100, Math.round((average / 255) * 125)));
        });

        setWaveform(next);
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    animationFrameRef.current = requestAnimationFrame(draw);
  };

  const askGrego = async (text: string, primary: Recommendation) => {
    const chatUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/grego-chat`;

    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY) {
      return "";
    }

    const prompt =
      lang === "fr"
        ? `Tu es le moteur de navigation intelligent du site NLG Consulting. Le visiteur a dit : "${text}". Il est actuellement sur la page "${location.pathname}". La route recommandée par le moteur du site est "${primary.title}". Réponds en 2 phrases maximum, sans prix, sans jargon technique inutile, sans demander d'email et sans vente agressive. Reformule brièvement ce que tu comprends de son besoin puis explique pourquoi cette page est le meilleur endroit pour commencer.`
        : `You are the intelligent navigation engine for the NLG Consulting website. The visitor said: "${text}". They are currently on "${location.pathname}". The site engine recommends "${primary.title}". Answer in no more than 2 sentences, with no pricing, no unnecessary technical jargon, no request for contact details, and no aggressive sales language. Briefly reflect what you understood and explain why this is the best place to start.`;

    try {
      const response = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
          language: lang,
          visitorContext: {
            intent: "general",
            score: 55,
            engagementLevel: "soft",
            visitorData: {
              device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
              language: lang,
              pageViews: [location.pathname],
              isReturning: hasProfile,
            },
          },
        }),
      });

      if (!response.ok || !response.body) return "";

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let result = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;

          const payload = line.slice(6).trim();
          if (!payload || payload === "[DONE]") continue;

          try {
            const parsed = JSON.parse(payload);
            result += parsed.choices?.[0]?.delta?.content || "";
          } catch {
            // wait for the next chunk
          }
        }
      }

      return cleanAIText(result);
    } catch {
      return "";
    }
  };

  const analyse = async (rawText: string) => {
    const text = rawText.trim();

    if (!text) {
      setError(t.emptyVoice);
      setMode("text");
      return;
    }

    setMode("processing");
    setError("");

    const primary = getPrimaryRecommendation(text, lang);
    setRecommendation(primary);

    const aiSummary = await askGrego(text, primary);
    const finalSummary = aiSummary || t.fallbackSummary;
    setSummary(finalSummary);

    const profile: VoiceProfile = {
      transcript: text,
      summary: finalSummary,
      recommendations: [primary],
      language: lang,
      createdAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    } catch {
      // no-op
    }

    setMode("result");
    track("voice_guide_result", {
      language: lang,
      recommendation: primary.key,
    });
    // The website guides the visitor rather than presenting a directory of choices.
    if (location.pathname !== primary.route) {
      navigate(primary.route);
    }
  };

  const startVoice = async () => {
    setPanelOpen(true);
    setInviteOpen(false);
    setError("");

    if (!speechSupported || !navigator.mediaDevices?.getUserMedia) {
      setMode("text");
      setError(t.unsupported);
      return;
    }

    try {
      await startVisualizer();

      const Recognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new Recognition();
      recognition.lang = lang === "fr" ? "fr-FR" : "en-US";
      recognition.continuous = true;
      recognition.interimResults = true;

      finalTranscriptRef.current = "";
      setTranscript("");
      setInterim("");

      recognition.onresult = (event: any) => {
        let finalText = finalTranscriptRef.current;
        let interimText = "";

        for (let i = event.resultIndex; i < event.results.length; i += 1) {
          const chunk = event.results[i][0]?.transcript || "";
          if (event.results[i].isFinal) {
            finalText = `${finalText} ${chunk}`.trim();
          } else {
            interimText += chunk;
          }
        }

        finalTranscriptRef.current = finalText;
        setTranscript(finalText);
        setInterim(interimText);
      };

      recognition.onerror = (event: any) => {
        if (
          event.error === "not-allowed" ||
          event.error === "service-not-allowed" ||
          event.error === "audio-capture"
        ) {
          listeningRef.current = false;
          stopVisualizer();
          setMode("text");
          setError(t.denied);
        }
      };

      recognition.onend = () => {
        if (!listeningRef.current) return;
        try {
          recognition.start();
        } catch {
          // Some browsers do not permit immediate restart.
        }
      };

      recognitionRef.current = recognition;
      listeningRef.current = true;
      recognition.start();
      setMode("voice");

      track("voice_guide_mic_start", { language: lang });
    } catch {
      listeningRef.current = false;
      stopVisualizer();
      setMode("text");
      setError(t.denied);
    }
  };

  const finishVoice = async () => {
    listeningRef.current = false;

    try {
      recognitionRef.current?.stop?.();
    } catch {
      // no-op
    }

    stopVisualizer();

    const text = `${finalTranscriptRef.current} ${interim}`.trim();
    setTranscript(text);
    setInterim("");

    track("voice_guide_mic_stop", {
      language: lang,
      seconds,
      chars: text.length,
    });

    await analyse(text);
  };

  const switchToText = () => {
    listeningRef.current = false;

    try {
      recognitionRef.current?.stop?.();
    } catch {
      // no-op
    }

    stopVisualizer();
    setTranscript(finalTranscriptRef.current || transcript);
    setInterim("");
    setMode("text");
    setError("");
  };

  const reset = () => {
    listeningRef.current = false;

    try {
      recognitionRef.current?.stop?.();
    } catch {
      // no-op
    }

    stopVisualizer();
    finalTranscriptRef.current = "";
    setTranscript("");
    setInterim("");
    setSummary("");
    setRecommendation(null);
    setError("");
    setMode("idle");
  };

  const closePanel = () => {
    reset();
    setPanelOpen(false);
  };

  const openRecommendation = () => {
    if (!recommendation) return;

    track("voice_guide_navigation", {
      language: lang,
      destination: recommendation.route,
    });

    setPanelOpen(false);
    navigate(recommendation.route);
  };

  if (!isPublicPage) return null;

  const firstPrompt = !hasProfile;

  return (
    <>
      {inviteOpen && !panelOpen && (
        <div className="nlg-voice-invite fixed right-3 top-[84px] z-[70] w-[min(330px,calc(100vw-24px))] sm:right-5 sm:top-[92px]">
          <div className="rounded-2xl border border-primary/15 bg-background/95 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={startVoice}
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105"
                aria-label={t.talk}
              >
                <Mic className="h-4 w-4" />
              </button>

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground">
                    {t.new}
                  </span>
                  <span className="text-xs font-semibold text-foreground">{t.inviteTitle}</span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {hasProfile ? t.inviteReturn : t.inviteText}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={startVoice}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <Mic className="h-3.5 w-3.5" />
                    {t.talk}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setInviteOpen(false);
                      setPanelOpen(true);
                      setMode("text");
                    }}
                    className="text-[11px] text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {t.write}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInviteOpen(false)}
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={t.close}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {!panelOpen && (
        <button
          type="button"
          onClick={startVoice}
          className="nlg-voice-launcher fixed bottom-5 right-4 z-[65] inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/95 px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-xl backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-2xl sm:right-6"
          aria-label={t.talk}
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="absolute inset-0 rounded-full border border-primary/30 nlg-voice-pulse" />
            <Mic className="h-4 w-4" />
          </span>
          <span>{t.talk}</span>
        </button>
      )}

      {panelOpen && (
        <div className="fixed inset-x-3 bottom-3 z-[80] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[390px]">
          <div className="overflow-hidden rounded-[1.5rem] border border-primary/15 bg-background/95 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.introEyebrow}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {location.pathname}
                </p>
              </div>
              <button
                type="button"
                onClick={closePanel}
                className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={t.close}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {mode === "idle" && (
              <div className="p-5">
                <h2 className="text-lg font-semibold">
                  {firstPrompt ? t.firstTitle : t.nextTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {firstPrompt ? t.firstText : t.nextText}
                </p>

                <Button size="lg" className="mt-5 w-full rounded-xl" onClick={startVoice}>
                  <Mic className="mr-2 h-4 w-4" />
                  {t.talk}
                </Button>

                <button
                  type="button"
                  onClick={() => setMode("text")}
                  className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-foreground hover:underline"
                >
                  {t.write}
                </button>
              </div>
            )}

            {mode === "voice" && (
              <div className="p-5">
                <div className="text-center">
                  <h2 className="text-lg font-semibold">{t.listening}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">{firstPrompt ? t.firstText : t.nextText}</p>
                </div>

                <div className="mt-5 flex h-24 items-center justify-center gap-[5px] rounded-2xl border border-primary/10 bg-primary/[0.035] px-4">
                  {waveform.map((height, index) => (
                    <span
                      key={index}
                      className="w-[5px] rounded-full bg-primary transition-[height] duration-75"
                      style={{ height: `${Math.max(10, height)}%` }}
                    />
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                    {String(Math.floor(seconds / 60)).padStart(2, "0")}:
                    {String(seconds % 60).padStart(2, "0")}
                  </span>
                  <span className="max-w-[230px] text-right text-[10px] leading-tight">{t.privacy}</span>
                </div>

                {error && <p className="mt-3 text-xs text-destructive">{error}</p>}

                <Button
                  size="lg"
                  className="mt-5 w-full rounded-xl"
                  onClick={finishVoice}
                >
                  <MicOff className="mr-2 h-4 w-4" />
                  {t.validate}
                </Button>

                <button
                  type="button"
                  onClick={switchToText}
                  className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-foreground hover:underline"
                >
                  {t.switchToText}
                </button>
              </div>
            )}

            {mode === "text" && (
              <div className="p-5">
                <h2 className="text-lg font-semibold">{t.typeTitle}</h2>
                <Textarea
                  value={transcript}
                  onChange={(event) => setTranscript(event.target.value)}
                  placeholder={t.typePlaceholder}
                  className="mt-4 min-h-[145px] resize-none rounded-2xl border-primary/10 bg-background text-sm leading-relaxed"
                />

                {error && <p className="mt-3 text-xs text-destructive">{error}</p>}

                <Button
                  size="lg"
                  className="mt-4 w-full rounded-xl"
                  onClick={() => analyse(transcript)}
                  disabled={!transcript.trim()}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {t.analyse}
                </Button>

                <button
                  type="button"
                  onClick={startVoice}
                  className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-foreground hover:underline"
                >
                  <Mic className="mr-1 inline h-3.5 w-3.5" />
                  {t.backToVoice}
                </button>
              </div>
            )}

            {mode === "processing" && (
              <div className="flex min-h-[280px] flex-col items-center justify-center p-6 text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/5">
                  <div className="absolute inset-1 animate-ping rounded-full border border-primary/20" />
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{t.processing}</h2>
              </div>
            )}

            {mode === "result" && recommendation && (
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  {t.resultEyebrow}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{summary}</p>

                <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/[0.035] p-4">
                  <p className="text-xs text-muted-foreground">
                    {location.pathname === recommendation.route ? t.alreadyHere : t.resultPrefix}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold">{recommendation.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {recommendation.description}
                  </p>
                </div>

                {location.pathname !== recommendation.route && (
                  <Button
                    size="lg"
                    className="mt-4 w-full rounded-xl"
                    onClick={openRecommendation}
                  >
                    {t.openPage}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => {
                      setPanelOpen(false);
                      navigate(lang === "fr" ? "/fr/rendez-vous" : "/book");
                    }}
                  >
                    <Calendar className="mr-1.5 h-4 w-4" />
                    {t.book}
                  </Button>

                  <Button variant="outline" className="rounded-xl" onClick={reset}>
                    <RotateCcw className="mr-1.5 h-4 w-4" />
                    {t.askAgain}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalVoiceGuide;

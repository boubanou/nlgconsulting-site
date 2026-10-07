import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Keyboard, Loader2, Mic, MicOff, RotateCcw, Sparkles, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import BusinessValueEngine from "@/components/BusinessValueEngine";

type Lang = "en" | "fr";

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

type Props = {
  lang?: Lang;
};

const STORAGE_KEY = "nlg_voice_profile";

const copy = {
  en: {
    eyebrow: "Talk to the website",
    title: "Tell NLG about your business.",
    subtitle: "Speak naturally. Explain what your company does, what you want to improve, or where you think AI could help. The site will adapt itself to you.",
    mic: "Talk to NLG",
    stop: "Finish & analyse",
    typing: "I prefer typing",
    backToVoice: "Use my voice",
    placeholder: "Describe your business, what you want to improve, and where AI might help...",
    analyse: "Analyse my business",
    listening: "Listening… speak naturally",
    processing: "Understanding your business…",
    heard: "Here’s what we heard",
    resultTitle: "We found these opportunities for you",
    resultIntro: "Based on what you told us, these are the most relevant places to start.",
    open: "Explore this",
    book: "Book a strategy call",
    restart: "Start again",
    privacy: "NLG does not save an audio file in this experience. Only the text you submit is analysed.",
    unsupported: "Voice input is not supported in this browser. You can still type your answer.",
    micDenied: "Microphone access was not available. You can continue by typing instead.",
    fallbackSummary: "We found a few areas where AI, automation or growth systems could create more value in your business.",
  },
  fr: {
    eyebrow: "Parlez au site",
    title: "Présentez votre entreprise à NLG.",
    subtitle: "Parlez naturellement. Expliquez ce que fait votre entreprise, ce que vous voulez améliorer ou là où l’IA pourrait vous aider. Le site va s’adapter à vous.",
    mic: "Parler à NLG",
    stop: "Terminer & analyser",
    typing: "Je préfère écrire",
    backToVoice: "Utiliser ma voix",
    placeholder: "Décrivez votre entreprise, ce que vous voulez améliorer et là où l’IA pourrait vous aider...",
    analyse: "Analyser mon entreprise",
    listening: "Je vous écoute… parlez naturellement",
    processing: "Nous comprenons votre entreprise…",
    heard: "Voici ce que nous avons compris",
    resultTitle: "Nous avons trouvé ces opportunités pour vous",
    resultIntro: "D’après ce que vous nous avez expliqué, voici les meilleurs points de départ.",
    open: "Explorer",
    book: "Réserver un appel stratégique",
    restart: "Recommencer",
    privacy: "NLG ne sauvegarde pas de fichier audio dans cette expérience. Seul le texte que vous soumettez est analysé.",
    unsupported: "La saisie vocale n’est pas disponible sur ce navigateur. Vous pouvez écrire votre réponse.",
    micDenied: "L’accès au microphone n’a pas été disponible. Vous pouvez continuer en écrivant.",
    fallbackSummary: "Nous avons identifié plusieurs endroits où l’IA, l’automatisation ou les systèmes de croissance pourraient créer plus de valeur dans votre entreprise.",
  },
};

const routes: Record<Lang, Record<string, Omit<Recommendation, "score"> & { keywords: string[] }>> = {
  en: {
    automation: {
      key: "automation",
      title: "AI & Workflow Automation",
      description: "Reduce repetitive work, connect tools and make operations faster without adding complexity.",
      route: "/ai-automation",
      keywords: ["automate", "automation", "manual", "repetitive", "workflow", "admin", "email", "report", "document", "invoice", "operations", "time", "hours"],
    },
    sales: {
      key: "sales",
      title: "AI Sales & Revenue Systems",
      description: "Improve prospecting, follow-up, qualification, CRM discipline and conversion.",
      route: "/ai-sales-automation",
      keywords: ["sales", "lead", "leads", "prospect", "prospecting", "crm", "conversion", "pipeline", "follow-up", "revenue", "customers", "client"],
    },
    marketing: {
      key: "marketing",
      title: "AI Marketing Automation",
      description: "Create a more consistent acquisition and content engine with less manual effort.",
      route: "/ai-marketing-automation",
      keywords: ["marketing", "content", "linkedin", "newsletter", "social", "campaign", "seo", "traffic", "acquisition", "brand"],
    },
    strategy: {
      key: "strategy",
      title: "AI Audit & Strategic Roadmap",
      description: "Map the best AI opportunities, prioritise ROI and build a practical implementation plan.",
      route: "/ai-consulting",
      keywords: ["strategy", "where to start", "not sure", "roadmap", "audit", "optimise", "optimize", "margin", "profit", "efficiency", "scale", "growth"],
    },
    agents: {
      key: "agents",
      title: "AI Agents for Business",
      description: "Use controlled AI agents for research, support, workflow execution and internal assistance.",
      route: "/ai-agents-for-business",
      keywords: ["agent", "agents", "assistant", "support", "knowledge", "research", "autonomous"],
    },
    website: {
      key: "website",
      title: "AI-Powered Website & Conversion",
      description: "Turn your website into a smarter conversion asset rather than a static brochure.",
      route: "/web",
      keywords: ["website", "site", "landing page", "conversion", "web", "redesign"],
    },
  },
  fr: {
    automation: {
      key: "automation",
      title: "IA & Automatisation des Workflows",
      description: "Réduisez le travail répétitif, connectez vos outils et accélérez les opérations sans ajouter de complexité.",
      route: "/fr/automation-ia",
      keywords: ["automatiser", "automatisation", "manuel", "manuelle", "répétitif", "workflow", "administratif", "email", "rapport", "document", "facture", "opérations", "temps", "heures"],
    },
    sales: {
      key: "sales",
      title: "IA Commerciale & Systèmes de Revenus",
      description: "Améliorez prospection, relances, qualification, CRM et conversion.",
      route: "/fr/automation-commerciale-ia",
      keywords: ["vente", "ventes", "lead", "leads", "prospect", "prospection", "crm", "conversion", "pipeline", "relance", "revenu", "chiffre", "clients", "client"],
    },
    marketing: {
      key: "marketing",
      title: "Automatisation Marketing IA",
      description: "Construisez une acquisition et une production de contenu plus régulières avec moins de travail manuel.",
      route: "/fr/automation-marketing-ia",
      keywords: ["marketing", "contenu", "linkedin", "newsletter", "social", "campagne", "seo", "trafic", "acquisition", "marque"],
    },
    strategy: {
      key: "strategy",
      title: "Audit IA & Roadmap Stratégique",
      description: "Identifiez les meilleures opportunités IA, priorisez le ROI et construisez un plan d’implémentation concret.",
      route: "/fr/conseil-ia",
      keywords: ["stratégie", "commencer", "je ne sais pas", "roadmap", "audit", "optimiser", "marge", "rentabilité", "efficacité", "scaler", "croissance"],
    },
    agents: {
      key: "agents",
      title: "Agents IA pour l’Entreprise",
      description: "Déployez des agents contrôlés pour la recherche, le support, l’exécution de workflows et l’assistance interne.",
      route: "/fr/agents-ia-entreprise",
      keywords: ["agent", "agents", "assistant", "support", "connaissance", "recherche", "autonome"],
    },
    website: {
      key: "website",
      title: "Site IA & Conversion",
      description: "Transformez votre site en actif commercial intelligent plutôt qu’en simple vitrine.",
      route: "/fr/site-internet",
      keywords: ["site internet", "site web", "landing page", "conversion", "refonte", "web"],
    },
  },
};

const detectIndustryRoute = (text: string, lang: Lang): Recommendation | null => {
  const lower = text.toLowerCase();
  const industryMap = lang === "fr"
    ? [
        { match: ["immobilier", "proptech"], title: "IA pour l’Immobilier / PropTech", route: "/fr/ia-pour-proptech" },
        { match: ["fintech", "paiement", "finance"], title: "IA pour la FinTech", route: "/fr/ia-pour-fintech" },
        { match: ["saas", "logiciel"], title: "IA pour SaaS", route: "/fr/ia-pour-saas" },
        { match: ["cabinet", "conseil", "consulting"], title: "IA pour Cabinets de Conseil", route: "/fr/ia-pour-cabinets-conseil" },
      ]
    : [
        { match: ["real estate", "property", "proptech"], title: "AI for PropTech / Real Estate", route: "/ai-for-proptech" },
        { match: ["fintech", "payments", "finance"], title: "AI for FinTech", route: "/ai-for-fintech" },
        { match: ["saas", "software"], title: "AI for SaaS", route: "/ai-for-saas" },
        { match: ["consulting", "consultancy", "professional services"], title: "AI for Consulting Firms", route: "/ai-for-consulting-firms" },
      ];

  const found = industryMap.find((item) => item.match.some((keyword) => lower.includes(keyword)));
  if (!found) return null;

  return {
    key: "industry",
    title: found.title,
    description: lang === "fr"
      ? "Nous avons aussi une page sectorielle avec des cas d’usage et contraintes adaptés à votre environnement."
      : "We also have an industry page with use cases and constraints tailored to your environment.",
    route: found.route,
    score: 3,
  };
};

const getRecommendations = (text: string, lang: Lang): Recommendation[] => {
  const lower = text.toLowerCase();
  const scored = Object.values(routes[lang]).map((item) => {
    const score = item.keywords.reduce((total, keyword) => total + (lower.includes(keyword) ? 2 : 0), 0);
    return { key: item.key, title: item.title, description: item.description, route: item.route, score };
  });

  const industry = detectIndustryRoute(text, lang);
  const selected = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (selected.length === 0) {
    selected.push({
      key: "strategy",
      title: routes[lang].strategy.title,
      description: routes[lang].strategy.description,
      route: routes[lang].strategy.route,
      score: 1,
    });
  }

  if (industry && !selected.some((item) => item.route === industry.route)) {
    selected.splice(1, 0, industry);
  }

  return selected.slice(0, 3);
};

const cleanAIText = (text: string) => {
  return text
    .replace(/\[ACTION\][\s\S]*?\[\/ACTION\]/g, "")
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => !/[€$£]|\b(?:USD|EUR|VAT|HT)\b/i.test(sentence))
    .slice(0, 3)
    .join(" ")
    .trim();
};

const VoiceSiteConcierge = ({ lang = "en" }: Props) => {
  const t = copy[lang];
  const [mode, setMode] = useState<"idle" | "voice" | "text" | "processing" | "result">("idle");
  const [transcript, setTranscript] = useState("");
  const [interim, setInterim] = useState("");
  const [summary, setSummary] = useState("");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [error, setError] = useState("");
  const recognitionRef = useRef<any>(null);
  const finalTranscriptRef = useRef("");

  const speechSupported = useMemo(() => {
    if (typeof window === "undefined") return false;
    return !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
  }, []);

  useEffect(() => {
    return () => {
      try {
        recognitionRef.current?.stop?.();
      } catch {
        // no-op
      }
    };
  }, []);

  const track = (event: string, params: Record<string, string | number> = {}) => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", event, { site: "nlgconsulting", ...params });
    }
  };

  const askGrego = async (text: string, recs: Recommendation[]) => {
    const chatUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/grego-chat`;
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY) {
      return "";
    }

    const prompt = lang === "fr"
      ? `Tu es le moteur de personnalisation de la homepage NLG. Le visiteur vient de se présenter ainsi : "${text}". Réponds en 2 phrases maximum, sans prix, sans offre commerciale agressive, sans demander ses coordonnées. Résume ce que tu comprends et explique où l'IA, l'automatisation ou les systèmes de croissance peuvent créer de la valeur. Les recommandations déjà détectées sont : ${recs.map((r) => r.title).join(", ")}.`
      : `You are the personalization engine for the NLG homepage. The visitor just described their business like this: "${text}". Answer in no more than 2 sentences. Do not mention pricing, do not be aggressively salesy, and do not ask for contact details. Summarize what you understand and explain where AI, automation or growth systems could create value. The detected recommendations are: ${recs.map((r) => r.title).join(", ")}.`;

    try {
      const response = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
          language: lang,
          visitorContext: {
            intent: recs[0]?.key || "general",
            score: 55,
            engagementLevel: "soft",
            visitorData: {
              device: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
              language: lang,
              pageViews: [window.location.pathname],
              isReturning: false,
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

        let index: number;
        while ((index = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, index);
          buffer = buffer.slice(index + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            result += json.choices?.[0]?.delta?.content || "";
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
    if (!text) return;

    setMode("processing");
    setError("");
    track("voice_concierge_analyse", { language: lang, chars: text.length });

    const recs = getRecommendations(text, lang);
    setRecommendations(recs);

    const aiSummary = await askGrego(text, recs);
    const finalSummary = aiSummary || t.fallbackSummary;
    setSummary(finalSummary);

    const profile: VoiceProfile = {
      transcript: text,
      summary: finalSummary,
      recommendations: recs,
      language: lang,
      createdAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // no-op
    }

    setMode("result");
    track("voice_concierge_result", { language: lang, primary: recs[0]?.key || "strategy" });
  };

  const startVoice = async () => {
    setError("");
    if (!speechSupported) {
      setMode("text");
      setError(t.unsupported);
      return;
    }

    try {
      if (navigator.mediaDevices?.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((track) => track.stop());
      }

      const Recognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new Recognition();
      recognition.lang = lang === "fr" ? "fr-FR" : "en-US";
      recognition.continuous = true;
      recognition.interimResults = true;

      finalTranscriptRef.current = transcript;
      recognition.onresult = (event: any) => {
        let currentFinal = finalTranscriptRef.current;
        let currentInterim = "";

        for (let i = event.resultIndex; i < event.results.length; i += 1) {
          const chunk = event.results[i][0]?.transcript || "";
          if (event.results[i].isFinal) {
            currentFinal = `${currentFinal} ${chunk}`.trim();
          } else {
            currentInterim += chunk;
          }
        }

        finalTranscriptRef.current = currentFinal;
        setTranscript(currentFinal);
        setInterim(currentInterim);
      };

      recognition.onerror = (event: any) => {
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
          setError(t.micDenied);
          setMode("text");
        }
      };

      recognition.onend = () => {
        setInterim("");
      };

      recognitionRef.current = recognition;
      recognition.start();
      setMode("voice");
      track("voice_concierge_mic_start", { language: lang });
    } catch {
      setError(t.micDenied);
      setMode("text");
    }
  };

  const finishVoice = async () => {
    try {
      recognitionRef.current?.stop?.();
    } catch {
      // no-op
    }
    const text = `${finalTranscriptRef.current} ${interim}`.trim();
    setTranscript(text);
    setInterim("");
    track("voice_concierge_mic_stop", { language: lang, chars: text.length });
    await analyse(text);
  };

  const reset = () => {
    try {
      recognitionRef.current?.stop?.();
    } catch {
      // no-op
    }
    setTranscript("");
    setInterim("");
    finalTranscriptRef.current = "";
    setSummary("");
    setRecommendations([]);
    setError("");
    setMode("idle");
  };

  if (mode === "idle") {
    return (
      <div className="space-y-4">
        <BusinessValueEngine lang={lang} />
        <div className="rounded-2xl border border-primary/10 bg-background/95 p-4 text-center shadow-lg backdrop-blur sm:p-5">
          <div className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="h-4 w-4 text-secondary" />
            {t.eyebrow}
          </div>
          <h2 className="text-lg font-semibold sm:text-xl">{t.title}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{t.subtitle}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <Button size="lg" className="w-full rounded-xl" onClick={startVoice}>
              <Mic className="mr-2 h-4 w-4" /> {t.mic}
            </Button>
            <Button size="lg" variant="outline" className="w-full rounded-xl" onClick={() => setMode("text")}>
              <Keyboard className="mr-2 h-4 w-4" /> {t.typing}
            </Button>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">{t.privacy}</p>
        </div>
      </div>
    );
  }

  if (mode === "processing") {
    return (
      <div className="flex min-h-[460px] w-full flex-col items-center justify-center rounded-[1.75rem] border border-primary/10 bg-card p-8 text-center shadow-xl">
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-primary/15 bg-primary/5">
          <div className="absolute inset-2 animate-ping rounded-full border border-secondary/30" />
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold">{t.processing}</h2>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">{transcript}</p>
      </div>
    );
  }

  if (mode === "result") {
    return (
      <div className="w-full rounded-[1.75rem] border border-primary/10 bg-card p-4 shadow-xl sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">{t.heard}</p>
            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{transcript}</p>
          </div>
          <CheckCircle2 className="h-6 w-6 shrink-0 text-secondary" />
        </div>

        <div className="rounded-2xl border border-primary/10 bg-primary/[0.035] p-4">
          <p className="text-sm leading-relaxed text-foreground">{summary}</p>
        </div>

        <h2 className="mt-5 text-xl font-semibold sm:text-2xl">{t.resultTitle}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{t.resultIntro}</p>

        <div className="mt-4 space-y-2.5">
          {recommendations.map((rec, index) => (
            <Link
              key={`${rec.key}-${rec.route}`}
              to={rec.route}
              onClick={() => track("voice_concierge_recommendation_click", { language: lang, route: rec.route, rank: index + 1 })}
              className="group flex items-center gap-3 rounded-2xl border border-border p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[0.025] hover:shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/8 text-xs font-bold text-primary">{index + 1}</div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-foreground">{rec.title}</div>
                <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{rec.description}</div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <Button asChild size="lg" className="w-full rounded-xl">
            <Link to={lang === "fr" ? "/fr/rendez-vous" : "/book"} onClick={() => track("voice_concierge_booking_click", { language: lang })}>
              {t.book} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full rounded-xl" onClick={reset}>
            <RotateCcw className="mr-2 h-4 w-4" /> {t.restart}
          </Button>
        </div>
      </div>
    );
  }

  const isVoice = mode === "voice";

  return (
    <div className="w-full rounded-[1.75rem] border border-primary/10 bg-card p-4 shadow-xl sm:p-6">
      <div className="mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
        <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{isVoice ? t.listening : t.title}</h2>
      </div>

      {isVoice && (
        <div className="mb-5 flex h-16 items-center justify-center gap-1 rounded-2xl border border-primary/10 bg-primary/[0.035] px-4">
          {[16, 28, 40, 22, 46, 34, 18, 38, 26, 44, 20, 32].map((height, index) => (
            <span
              key={index}
              className="voice-wave-bar w-1 rounded-full bg-primary/70"
              style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }}
            />
          ))}
        </div>
      )}

      <Textarea
        value={isVoice ? `${transcript}${interim ? ` ${interim}` : ""}` : transcript}
        onChange={(event) => setTranscript(event.target.value)}
        readOnly={isVoice}
        placeholder={t.placeholder}
        className="min-h-[170px] resize-none rounded-2xl border-primary/10 bg-background text-sm leading-relaxed sm:min-h-[190px]"
      />

      {error && <p className="mt-3 text-xs text-destructive">{error}</p>}

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {isVoice ? (
          <>
            <Button size="lg" className="w-full rounded-xl" onClick={finishVoice} disabled={!transcript.trim() && !interim.trim()}>
              <MicOff className="mr-2 h-4 w-4" /> {t.stop}
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-xl" onClick={() => {
              try { recognitionRef.current?.stop?.(); } catch { /* no-op */ }
              setMode("text");
            }}>
              <Keyboard className="mr-2 h-4 w-4" /> {t.typing}
            </Button>
          </>
        ) : (
          <>
            <Button size="lg" className="w-full rounded-xl" onClick={() => analyse(transcript)} disabled={!transcript.trim()}>
              <Sparkles className="mr-2 h-4 w-4" /> {t.analyse}
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-xl" onClick={startVoice}>
              <Volume2 className="mr-2 h-4 w-4" /> {t.backToVoice}
            </Button>
          </>
        )}
      </div>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">{t.privacy}</p>
    </div>
  );
};

export default VoiceSiteConcierge;

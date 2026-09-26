import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Mail,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";

const SESSION_STORAGE_KEY = "nlg-ai-scanner-shown";
const POPUP_DELAY_MS = 18000;
const SALES_EMAIL = "greg@nlgconsulting.co";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type Lang = "en" | "fr";
type AnswerMap = Record<string, string>;

type Option = {
  value: string;
  label: string;
  score?: number;
};

type Question = {
  id: string;
  title: string;
  subtitle: string;
  options: Option[];
};

type Recommendation = {
  key: string;
  title: string;
  description: string;
  route: string;
  offer?: string;
};

const copy = {
  en: {
    eyebrow: "2-minute AI opportunity scan",
    introTitle: "Where could AI create the most leverage in your business?",
    introText:
      "Answer a few quick questions. No form, no phone number. You’ll get a practical recommendation and can email the diagnostic to NLG if it looks useful.",
    start: "Start the scan",
    later: "Not now",
    back: "Back",
    progress: "Question",
    of: "of",
    resultEyebrow: "Your NLG diagnostic",
    fitHigh: "Strong opportunity",
    fitMedium: "Good opportunity",
    fitLow: "Worth exploring",
    scoreLabel: "automation / growth readiness",
    nextStep: "Recommended next step",
    email: "Email this diagnostic to NLG",
    explore: "See the recommended solution",
    restart: "Restart scan",
    privacy: "Your answers stay in your browser unless you choose to email them.",
    emailSubject: "NLG AI Opportunity Diagnostic",
    emailIntro: "Hi Gregory,\n\nI completed the NLG AI Opportunity Scanner. Here is my diagnostic:",
    emailOutro: "\n\nI’d like your view on the best next step.\n",
    floating: "AI Opportunity Scan",
  },
  fr: {
    eyebrow: "Diagnostic opportunité IA · 2 minutes",
    introTitle: "Où l’IA peut-elle créer le plus de levier dans votre entreprise ?",
    introText:
      "Quelques choix rapides, sans formulaire ni téléphone. Vous obtenez une recommandation concrète et pouvez envoyer le diagnostic à NLG par email si elle vous paraît pertinente.",
    start: "Démarrer le diagnostic",
    later: "Pas maintenant",
    back: "Retour",
    progress: "Question",
    of: "sur",
    resultEyebrow: "Votre diagnostic NLG",
    fitHigh: "Forte opportunité",
    fitMedium: "Bonne opportunité",
    fitLow: "À explorer",
    scoreLabel: "niveau d’opportunité IA / croissance",
    nextStep: "Prochaine étape recommandée",
    email: "Envoyer ce diagnostic à NLG par email",
    explore: "Voir la solution recommandée",
    restart: "Recommencer",
    privacy: "Vos réponses restent dans votre navigateur sauf si vous choisissez de les envoyer par email.",
    emailSubject: "Diagnostic Opportunité IA NLG",
    emailIntro: "Bonjour Gregory,\n\nJ’ai complété le diagnostic interactif NLG. Voici mon résultat :",
    emailOutro: "\n\nJe voudrais votre avis sur la meilleure prochaine étape.\n",
    floating: "Diagnostic IA",
  },
} as const;

const questions: Record<Lang, Question[]> = {
  en: [
    {
      id: "goal",
      title: "What would create the most value right now?",
      subtitle: "Choose the outcome that matters most.",
      options: [
        { value: "automation", label: "Automate repetitive operations", score: 3 },
        { value: "pipeline", label: "Generate more qualified pipeline", score: 3 },
        { value: "sales", label: "Make sales / RevOps more efficient", score: 3 },
        { value: "strategy", label: "Build a practical AI roadmap", score: 2 },
        { value: "support", label: "Improve customer or internal support", score: 2 },
      ],
    },
    {
      id: "workflow",
      title: "Which workflow is the best candidate?",
      subtitle: "Pick the closest match — the recommendation will adapt.",
      options: [
        { value: "crm", label: "CRM, follow-ups & sales administration", score: 3 },
        { value: "leads", label: "Lead research, qualification & outreach", score: 3 },
        { value: "documents", label: "Documents, onboarding & approvals", score: 3 },
        { value: "reporting", label: "Reporting, analysis & recurring updates", score: 3 },
        { value: "support", label: "Customer support & knowledge retrieval", score: 2 },
        { value: "content", label: "Content, marketing & distribution", score: 2 },
      ],
    },
    {
      id: "frequency",
      title: "How often does this process happen?",
      subtitle: "Higher repetition usually means faster payback from automation.",
      options: [
        { value: "daily", label: "Many times every day", score: 4 },
        { value: "weekly", label: "Several times per week", score: 3 },
        { value: "monthly", label: "A few times per month", score: 2 },
        { value: "adhoc", label: "Mostly ad hoc", score: 1 },
      ],
    },
    {
      id: "state",
      title: "How is it handled today?",
      subtitle: "This tells us how much implementation work is likely needed.",
      options: [
        { value: "manual", label: "Mostly manual", score: 4 },
        { value: "fragmented", label: "Several tools, lots of copy/paste", score: 4 },
        { value: "partial", label: "Partly automated but unreliable", score: 3 },
        { value: "mature", label: "Already structured and automated", score: 1 },
      ],
    },
    {
      id: "industry",
      title: "Which environment is closest to yours?",
      subtitle: "Sector context changes the workflows and controls we recommend.",
      options: [
        { value: "saas", label: "SaaS / software", score: 2 },
        { value: "fintech", label: "FinTech / payments", score: 2 },
        { value: "proptech", label: "PropTech / real estate", score: 2 },
        { value: "services", label: "Consulting / professional services", score: 2 },
        { value: "other", label: "Other B2B company", score: 2 },
      ],
    },
    {
      id: "timing",
      title: "When would you want to act?",
      subtitle: "There’s no wrong answer — this adjusts the recommended next step.",
      options: [
        { value: "now", label: "Now / within 30 days", score: 4 },
        { value: "quarter", label: "This quarter", score: 3 },
        { value: "later", label: "Later this year", score: 2 },
        { value: "exploring", label: "I’m exploring for now", score: 1 },
      ],
    },
  ],
  fr: [
    {
      id: "goal",
      title: "Qu’est-ce qui créerait le plus de valeur maintenant ?",
      subtitle: "Choisissez le résultat le plus important pour vous.",
      options: [
        { value: "automation", label: "Automatiser des opérations répétitives", score: 3 },
        { value: "pipeline", label: "Générer plus de pipeline qualifié", score: 3 },
        { value: "sales", label: "Rendre les ventes / RevOps plus efficaces", score: 3 },
        { value: "strategy", label: "Construire une roadmap IA pragmatique", score: 2 },
        { value: "support", label: "Améliorer le support client ou interne", score: 2 },
      ],
    },
    {
      id: "workflow",
      title: "Quel workflow serait le meilleur candidat ?",
      subtitle: "Choisissez le plus proche — la recommandation s’adaptera.",
      options: [
        { value: "crm", label: "CRM, relances & administration commerciale", score: 3 },
        { value: "leads", label: "Recherche, qualification & prospection", score: 3 },
        { value: "documents", label: "Documents, onboarding & validations", score: 3 },
        { value: "reporting", label: "Reporting, analyse & mises à jour récurrentes", score: 3 },
        { value: "support", label: "Support client & recherche de connaissance", score: 2 },
        { value: "content", label: "Contenu, marketing & distribution", score: 2 },
      ],
    },
    {
      id: "frequency",
      title: "À quelle fréquence ce processus se répète-t-il ?",
      subtitle: "Plus il est fréquent, plus le potentiel d’automatisation est généralement élevé.",
      options: [
        { value: "daily", label: "Plusieurs fois par jour", score: 4 },
        { value: "weekly", label: "Plusieurs fois par semaine", score: 3 },
        { value: "monthly", label: "Quelques fois par mois", score: 2 },
        { value: "adhoc", label: "Principalement au cas par cas", score: 1 },
      ],
    },
    {
      id: "state",
      title: "Comment est-il géré aujourd’hui ?",
      subtitle: "Cela permet d’estimer l’effort d’implémentation.",
      options: [
        { value: "manual", label: "Principalement manuel", score: 4 },
        { value: "fragmented", label: "Plusieurs outils + beaucoup de copier/coller", score: 4 },
        { value: "partial", label: "Partiellement automatisé mais peu fiable", score: 3 },
        { value: "mature", label: "Déjà structuré et automatisé", score: 1 },
      ],
    },
    {
      id: "industry",
      title: "Quel environnement correspond le mieux au vôtre ?",
      subtitle: "Le secteur influence les workflows et les contrôles à prévoir.",
      options: [
        { value: "saas", label: "SaaS / logiciel", score: 2 },
        { value: "fintech", label: "FinTech / paiements", score: 2 },
        { value: "proptech", label: "PropTech / immobilier", score: 2 },
        { value: "services", label: "Conseil / services professionnels", score: 2 },
        { value: "other", label: "Autre entreprise B2B", score: 2 },
      ],
    },
    {
      id: "timing",
      title: "Quand souhaitez-vous agir ?",
      subtitle: "Cela adapte la prochaine étape recommandée.",
      options: [
        { value: "now", label: "Maintenant / sous 30 jours", score: 4 },
        { value: "quarter", label: "Ce trimestre", score: 3 },
        { value: "later", label: "Plus tard cette année", score: 2 },
        { value: "exploring", label: "Je suis en phase d’exploration", score: 1 },
      ],
    },
  ],
};

const recommendations: Record<Lang, Record<string, Recommendation>> = {
  en: {
    automation: {
      key: "automation",
      title: "AI Automation Sprint",
      description:
        "Your answers point to a bounded workflow that can be mapped, prototyped and measured quickly. The best first step is a focused automation sprint rather than a broad AI transformation project.",
      route: "/ai-automation",
      offer: "Fixed scope · €1,250 excl. VAT · no ongoing commitment",
    },
    pipeline: {
      key: "pipeline",
      title: "B2B Lead Generation System",
      description:
        "The strongest opportunity is likely in ICP, prospect data, outreach, qualification and CRM feedback working as one pipeline system.",
      route: "/b2b-lead-generation-agency",
    },
    sales: {
      key: "sales",
      title: "AI Sales & RevOps Automation",
      description:
        "Your biggest leverage appears to be reducing repetitive sales administration while improving follow-up, CRM discipline and commercial visibility.",
      route: "/ai-sales-automation",
    },
    strategy: {
      key: "strategy",
      title: "AI Audit & Roadmap",
      description:
        "You’ll benefit most from mapping workflows, scoring use cases and defining a 90-day roadmap before committing to tools or large implementation work.",
      route: "/ai-consulting",
    },
    support: {
      key: "support",
      title: "AI Workflow Automation",
      description:
        "A controlled support or knowledge workflow can often improve response speed and consistency while keeping human review where it matters.",
      route: "/ai-automation",
    },
  },
  fr: {
    automation: {
      key: "automation",
      title: "NLG AI Automation Sprint",
      description:
        "Vos réponses indiquent un workflow bien délimité qui peut être cartographié, prototypé et mesuré rapidement. La meilleure première étape est un sprint ciblé plutôt qu’un grand projet de transformation IA.",
      route: "/fr/automation-ia",
      offer: "Périmètre fixe · 1 250 € HT · sans engagement ultérieur",
    },
    pipeline: {
      key: "pipeline",
      title: "Système de Lead Generation B2B",
      description:
        "Le plus fort levier semble être de relier ICP, data prospects, prospection, qualification et feedback CRM dans un seul système de pipeline.",
      route: "/fr/agence-lead-generation-b2b",
    },
    sales: {
      key: "sales",
      title: "Automatisation Commerciale IA & RevOps",
      description:
        "Votre meilleur levier semble être la réduction de l’administration commerciale répétitive tout en améliorant les relances, la discipline CRM et la visibilité pipeline.",
      route: "/fr/automation-commerciale-ia",
    },
    strategy: {
      key: "strategy",
      title: "Audit IA & Roadmap",
      description:
        "Le meilleur point de départ est de cartographier les workflows, scorer les cas d’usage et définir une roadmap 90 jours avant d’investir dans davantage d’outils.",
      route: "/fr/conseil-ia",
    },
    support: {
      key: "support",
      title: "Automatisation de Workflows IA",
      description:
        "Un workflow de support ou de knowledge management bien contrôlé peut améliorer vitesse et cohérence tout en gardant la validation humaine aux bons endroits.",
      route: "/fr/automation-ia",
    },
  },
};

const track = (event: string, params: Record<string, string | number> = {}) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", event, {
      site: "nlgconsulting",
      ...params,
    });
  }
};

const getRecommendation = (answers: AnswerMap, lang: Lang) => {
  const goal = answers.goal || "automation";
  const workflow = answers.workflow;

  if (workflow === "leads") return recommendations[lang].pipeline;
  if (workflow === "crm") return recommendations[lang].sales;
  if (answers.state === "manual" || answers.state === "fragmented") {
    if (goal === "automation" || workflow === "documents" || workflow === "reporting") {
      return recommendations[lang].automation;
    }
  }

  return recommendations[lang][goal] || recommendations[lang].automation;
};

export const LeadPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isFrench = location.pathname.startsWith("/fr");
  const lang: Lang = isFrench ? "fr" : "en";
  const t = copy[lang];
  const qs = questions[lang];

  const [showPopup, setShowPopup] = useState(false);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (popupShown) return;

    const timer = window.setTimeout(() => {
      setShowPopup(true);
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      track("ai_scanner_open", { language: lang, path: location.pathname });
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [lang, location.pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showPopup) setShowPopup(false);
    };

    if (showPopup) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showPopup]);

  useEffect(() => {
    const handleConversionClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const common = { language: lang, path: location.pathname, destination: href };

      if (href.startsWith("mailto:")) {
        track("conversion_email_click", common);
      } else if (href === "/book" || href === "/fr/rendez-vous" || href.includes("calendly.com")) {
        track("conversion_booking_click", common);
      } else if (href === "/contact" || href === "/fr/contact") {
        track("conversion_contact_click", common);
      } else if (
        href.startsWith("/ai-") ||
        href.startsWith("/outsourced-") ||
        href.startsWith("/b2b-") ||
        href.startsWith("/fr/conseil-ia") ||
        href.startsWith("/fr/automation-") ||
        href.startsWith("/fr/sdr-") ||
        href.startsWith("/fr/agence-")
      ) {
        track("conversion_service_click", common);
      }
    };

    document.addEventListener("click", handleConversionClick, true);
    return () => document.removeEventListener("click", handleConversionClick, true);
  }, [lang, location.pathname]);

  const totalScore = useMemo(() => {
    return qs.reduce((sum, question) => {
      const selected = question.options.find((option) => option.value === answers[question.id]);
      return sum + (selected?.score || 0);
    }, 0);
  }, [answers, qs]);

  const maxScore = qs.reduce(
    (sum, question) => sum + Math.max(...question.options.map((option) => option.score || 0)),
    0,
  );

  const readiness = Math.round((totalScore / maxScore) * 100);
  const fitLabel = readiness >= 75 ? t.fitHigh : readiness >= 55 ? t.fitMedium : t.fitLow;
  const recommendation = useMemo(() => getRecommendation(answers, lang), [answers, lang]);

  const selectedLabel = (question: Question) =>
    question.options.find((option) => option.value === answers[question.id])?.label || "—";

  const close = () => {
    track("ai_scanner_close", {
      language: lang,
      stage: complete ? "complete" : started ? `step_${step + 1}` : "intro",
      path: location.pathname,
    });
    setShowPopup(false);
  };

  const openManually = () => {
    setShowPopup(true);
    track("ai_scanner_manual_open", { language: lang, path: location.pathname });
  };

  const choose = (question: Question, option: Option) => {
    const nextAnswers = { ...answers, [question.id]: option.value };
    setAnswers(nextAnswers);
    track("ai_scanner_answer", {
      language: lang,
      question: question.id,
      answer: option.value,
      step: step + 1,
    });

    if (step === qs.length - 1) {
      const completedScore = Math.round(
        (qs.reduce((sum, q) => {
          const value = q.id === question.id ? option.value : nextAnswers[q.id];
          return sum + (q.options.find((item) => item.value === value)?.score || 0);
        }, 0) /
          maxScore) *
          100,
      );
      const completedRecommendation = getRecommendation(nextAnswers, lang);

      setComplete(true);
      track("ai_scanner_complete", {
        language: lang,
        readiness: completedScore,
        recommendation: completedRecommendation.key,
      });
    } else {
      setStep((current) => current + 1);
    }
  };

  const emailDiagnostic = () => {
    const lines = qs.map((question) => `• ${question.title}: ${selectedLabel(question)}`);
    const body = [
      t.emailIntro,
      "",
      `${fitLabel}: ${readiness}%`,
      `${t.nextStep}: ${recommendation.title}`,
      recommendation.offer ? recommendation.offer : "",
      "",
      ...lines,
      t.emailOutro,
    ]
      .filter(Boolean)
      .join("\n");

    track("ai_scanner_email_click", {
      language: lang,
      readiness,
      recommendation: recommendation.key,
      path: location.pathname,
    });

    window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(body)}`;
  };

  const openRecommendation = () => {
    track("ai_scanner_service_click", {
      language: lang,
      readiness,
      recommendation: recommendation.key,
      destination: recommendation.route,
    });
    setShowPopup(false);
    navigate(recommendation.route);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setComplete(false);
    setStarted(true);
    track("ai_scanner_restart", { language: lang });
  };

  if (!showPopup) {
    return (
      <button
        type="button"
        onClick={openManually}
        className="fixed bottom-5 left-4 sm:left-6 z-40 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/95 px-4 py-2.5 text-sm font-medium text-foreground shadow-lg backdrop-blur hover:border-primary/50 hover:bg-primary/5 transition-all"
        aria-label={t.floating}
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span>{t.floating}</span>
      </button>
    );
  }

  const currentQuestion = qs[step];
  const progress = complete ? 100 : Math.round(((step + 1) / qs.length) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/55 backdrop-blur-sm animate-fade-in"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-scanner-title"
    >
      <Card
        className="w-full max-w-2xl bg-background shadow-2xl animate-scale-in max-h-[92vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-primary font-semibold">{t.eyebrow}</p>
                <p className="text-xs text-muted-foreground mt-0.5">NLG Consulting</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={close} aria-label={isFrench ? "Fermer" : "Close"}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {!started ? (
            <div className="py-3 sm:py-5">
              <div className="inline-flex items-center gap-2 text-sm text-primary mb-4">
                <Sparkles className="w-4 h-4" />
                {isFrench ? "Interactif · Sans formulaire" : "Interactive · No form"}
              </div>
              <h2 id="ai-scanner-title" className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
                {t.introTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">{t.introText}</p>

              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                {(isFrench
                  ? ["6 choix rapides", "Résultat immédiat", "Email seulement si vous le souhaitez"]
                  : ["6 quick choices", "Instant result", "Email only if you choose"]
                ).map((item) => (
                  <div key={item} className="rounded-lg border border-border bg-muted/30 p-3 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="sm:flex-1"
                  onClick={() => {
                    setStarted(true);
                    track("ai_scanner_start", { language: lang, path: location.pathname });
                  }}
                >
                  {t.start} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={close}>
                  {t.later}
                </Button>
              </div>
            </div>
          ) : complete ? (
            <div className="py-2">
              <p className="text-sm font-medium text-primary mb-2">{t.resultEyebrow}</p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{fitLabel}</h2>
                  <p className="text-muted-foreground text-sm">{t.scoreLabel}</p>
                </div>
                <div className="text-4xl font-bold text-primary">{readiness}%</div>
              </div>

              <div className="h-2.5 bg-muted rounded-full overflow-hidden mb-7">
                <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${readiness}%` }} />
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mb-5">
                <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">{t.nextStep}</p>
                <h3 className="text-xl font-semibold mb-2">{recommendation.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{recommendation.description}</p>
                {recommendation.offer && (
                  <p className="mt-3 text-sm font-semibold text-foreground">{recommendation.offer}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                <Button size="lg" onClick={emailDiagnostic}>
                  <Mail className="mr-2 w-4 h-4" /> {t.email}
                </Button>
                <Button size="lg" variant="outline" onClick={openRecommendation}>
                  {t.explore} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between gap-3 pt-2 border-t border-border">
                <button onClick={restart} className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5" /> {t.restart}
                </button>
                <p className="text-[11px] text-muted-foreground text-right max-w-xs">{t.privacy}</p>
              </div>
            </div>
          ) : (
            <div className="py-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>
                  {t.progress} {step + 1} {t.of} {qs.length}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-7">
                <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>

              <h2 id="ai-scanner-title" className="text-xl sm:text-2xl font-bold mb-2">
                {currentQuestion.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-5">{currentQuestion.subtitle}</p>

              <div className="grid gap-2.5">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => choose(currentQuestion, option)}
                    className="w-full text-left rounded-xl border border-border px-4 py-3.5 hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-center justify-between gap-3"
                  >
                    <span className="text-sm sm:text-base">{option.label}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>

              <div className="mt-5 min-h-9">
                {step > 0 && (
                  <Button variant="ghost" size="sm" onClick={() => setStep((current) => Math.max(0, current - 1))}>
                    <ArrowLeft className="mr-2 w-4 h-4" /> {t.back}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

import { BrainCircuit, Clock3, Gauge, Sparkles, TrendingUp, UsersRound } from "lucide-react";

type BusinessValueEngineProps = {
  lang?: "en" | "fr";
};

const copy = {
  en: {
    eyebrow: "NLG Opportunity Engine",
    status: "Value map",
    centerTop: "Business",
    centerBottom: "AI fit",
    signals: [
      { icon: Clock3, label: "Time", detail: "Automate repetitive work" },
      { icon: TrendingUp, label: "Revenue", detail: "Improve conversion" },
      { icon: Gauge, label: "Margin", detail: "Increase efficiency" },
      { icon: UsersRound, label: "Experience", detail: "Serve customers better" },
    ],
    flow: ["Business signal", "AI fit", "Build", "Measure"],
    footer: "Outcome first. Technology second.",
  },
  fr: {
    eyebrow: "NLG Opportunity Engine",
    status: "Carte de valeur",
    centerTop: "Business",
    centerBottom: "Fit IA",
    signals: [
      { icon: Clock3, label: "Temps", detail: "Automatiser le répétitif" },
      { icon: TrendingUp, label: "Revenus", detail: "Améliorer la conversion" },
      { icon: Gauge, label: "Marge", detail: "Gagner en efficacité" },
      { icon: UsersRound, label: "Expérience", detail: "Mieux servir les clients" },
    ],
    flow: ["Signal business", "Fit IA", "Build", "Mesure"],
    footer: "Le résultat d'abord. La technologie ensuite.",
  },
};

const positions = [
  "left-[2%] top-[15%]",
  "right-[2%] top-[15%]",
  "left-[2%] bottom-[14%]",
  "right-[2%] bottom-[14%]",
];

const BusinessValueEngine = ({ lang = "en" }: BusinessValueEngineProps) => {
  const t = copy[lang];

  return (
    <div
      className="nlg-engine relative isolate w-full overflow-hidden rounded-[1.75rem] border border-primary/10 bg-card/90 p-4 shadow-[0_24px_80px_-36px_hsl(var(--primary)/0.45)] backdrop-blur-xl sm:p-5 lg:p-6"
      aria-label={t.eyebrow}
    >
      <div className="nlg-engine-grid absolute inset-0 -z-20 opacity-70" aria-hidden="true" />
      <div className="nlg-engine-glow absolute -right-20 -top-20 -z-10 h-52 w-52 rounded-full bg-secondary/15 blur-3xl" aria-hidden="true" />
      <div className="nlg-engine-glow nlg-engine-glow-delayed absolute -bottom-24 -left-20 -z-10 h-56 w-56 rounded-full bg-primary/12 blur-3xl" aria-hidden="true" />

      <div className="flex min-w-0 items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-secondary" />
            <span className="truncate">{t.eyebrow}</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-primary/10 bg-background/70 px-2.5 py-1 text-[10px] font-medium text-foreground sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          {t.status}
        </div>
      </div>

      <div className="relative mx-auto mt-4 aspect-square w-full max-w-[360px] sm:mt-5">
        <div className="absolute inset-[8%] rounded-full border border-primary/10" aria-hidden="true" />
        <div className="absolute inset-[20%] rounded-full border border-dashed border-primary/15" aria-hidden="true" />
        <div className="absolute inset-[32%] rounded-full border border-primary/10" aria-hidden="true" />
        <div className="nlg-engine-orbit absolute inset-[13%] rounded-full border border-secondary/25" aria-hidden="true">
          <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_18px_hsl(var(--secondary)/0.85)]" />
        </div>
        <div className="nlg-engine-orbit-reverse absolute inset-[26%] rounded-full border border-primary/20" aria-hidden="true">
          <span className="absolute bottom-[-4px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.55)]" />
        </div>
        <div className="nlg-engine-sweep absolute inset-[9%] rounded-full" aria-hidden="true" />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/15 bg-background/90 shadow-[0_12px_40px_-18px_hsl(var(--primary)/0.65)] backdrop-blur sm:h-28 sm:w-28">
          <BrainCircuit className="mb-1 h-6 w-6 text-primary sm:h-7 sm:w-7" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t.centerTop}</span>
          <span className="text-xs font-semibold text-foreground sm:text-sm">{t.centerBottom}</span>
        </div>

        {t.signals.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <div
              key={signal.label}
              className={`nlg-engine-signal absolute z-30 ${positions[index]} w-[42%] max-w-[142px] rounded-xl border border-border/80 bg-background/90 p-2.5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-md sm:p-3`}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/7 text-primary sm:h-8 sm:w-8">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold leading-tight text-foreground sm:text-xs">{signal.label}</div>
                  <div className="mt-0.5 hidden text-[9px] leading-tight text-muted-foreground min-[390px]:block sm:text-[10px]">{signal.detail}</div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute left-[19%] top-1/2 h-px w-[20%] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-primary/10" aria-hidden="true" />
        <div className="absolute right-[19%] top-1/2 h-px w-[20%] -translate-y-1/2 bg-gradient-to-l from-transparent via-primary/30 to-primary/10" aria-hidden="true" />
      </div>

      <div className="mt-2 grid grid-cols-4 gap-1.5 rounded-2xl border border-border/70 bg-background/65 p-2 sm:gap-2 sm:p-2.5">
        {t.flow.map((step, index) => (
          <div key={step} className="relative min-w-0 rounded-xl px-1.5 py-2 text-center sm:px-2">
            <div className="mx-auto mb-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/8 text-[9px] font-bold text-primary sm:h-6 sm:w-6 sm:text-[10px]">
              {index + 1}
            </div>
            <span className="block break-words text-[9px] font-medium leading-tight text-muted-foreground sm:text-[10px]">{step}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 text-center text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
        <span className="h-px w-6 bg-secondary/60" aria-hidden="true" />
        <span>{t.footer}</span>
        <span className="h-px w-6 bg-secondary/60" aria-hidden="true" />
      </div>
    </div>
  );
};

export default BusinessValueEngine;

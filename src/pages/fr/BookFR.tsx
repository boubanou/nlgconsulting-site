import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import CalendarEmbed from "@/components/CalendarEmbed";
import { CheckCircle } from "lucide-react";

type VoiceContext = {
  transcript: string;
  summary: string;
  recommendations?: Array<{ title: string; route: string }>;
};

const BookFR = () => {
  const [voiceContext, setVoiceContext] = useState<VoiceContext | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("nlg_voice_profile");
      if (stored) setVoiceContext(JSON.parse(stored));
    } catch {
      // no-op
    }
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Réserver un Appel Stratégique | NLG Consulting",
        "description": "Planifiez un appel de 15 minutes pour identifier où l'IA, l'automatisation et les systèmes de croissance peuvent faire gagner du temps, réduire les coûts, augmenter les revenus ou améliorer la performance.",
        "url": "https://www.nlgconsulting.co/fr/rendez-vous"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Rendez-vous", "item": "https://www.nlgconsulting.co/fr/rendez-vous" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Réserver un Appel Stratégique | NLG Consulting</title>
        <meta name="description" content="Planifiez un appel de 15 minutes pour identifier où l'IA et l'automatisation peuvent faire gagner du temps, réduire les coûts, augmenter les revenus ou améliorer la performance." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/rendez-vous" />
        <meta property="og:title" content="Réserver un Appel Stratégique | NLG Consulting" />
        <meta property="og:description" content="Une conversation pratique de 15 minutes pour identifier où l'IA et l'automatisation peuvent créer plus de valeur dans votre entreprise." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {voiceContext && (
              <div className="mb-8 rounded-2xl border border-primary/15 bg-primary/[0.035] p-5 text-left sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Votre conversation avec NLG continue ici</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{voiceContext.summary}</p>
                {!!voiceContext.recommendations?.length && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {voiceContext.recommendations.slice(0, 3).map((item) => (
                      <span key={item.route} className="rounded-full border border-primary/10 bg-background px-3 py-1.5 text-xs text-muted-foreground">
                        {item.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Réserver un Appel Stratégique</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une conversation de 15 minutes sur le fonctionnement de votre entreprise, ce que vous souhaitez améliorer et les endroits où l'IA, l'automatisation ou les systèmes de croissance peuvent créer une valeur mesurable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Cet appel est pertinent si…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous dirigez une PME, un cabinet, une activité indépendante, une agence, une SaaS, FinTech, PropTech ou entreprise B2B en croissance</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous voulez gagner du temps, réduire le travail manuel ou améliorer les marges</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous voulez augmenter les leads, la conversion, le chiffre d'affaires ou la valeur client</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous savez que l'IA peut aider mais ne voulez pas passer des jours à comprendre les outils et intégrations</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Ce que nous pouvons explorer ensemble
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Quelles tâches ou workflows méritent d'être automatisés en premier</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Où l'IA peut augmenter capacité, vitesse ou qualité même si rien n'est aujourd'hui « cassé »</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Comment la technologie peut améliorer revenus, conversion, marges ou expérience client</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Si un Automation Sprint à 1 250 € HT ou une mission plus large est la bonne prochaine étape</li>
                </ul>
              </div>
            </div>

            <CalendarEmbed />

            <p className="text-center text-muted-foreground text-sm mt-8">
              Préférez explorer d'abord ? Découvrez nos <Link to="/fr/services" className="text-primary hover:underline">services</Link>, <Link to="/fr/cas-usage" className="text-primary hover:underline">cas d'usage</Link>, <Link to="/fr/conseil-ia" className="text-primary hover:underline">consulting IA</Link>, ou <Link to="/fr/conseil" className="text-primary hover:underline">conseil stratégique</Link>.
            </p>
          </div>
        </main>

        <MainFooterFR />
      </div>
    </>
  );
};

export default BookFR;
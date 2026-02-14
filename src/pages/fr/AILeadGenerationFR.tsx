import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const AILeadGenerationFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Génération de Leads par Intelligence Artificielle", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "url": "https://nlgconsulting.co/fr/generation-leads-ia" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/fr/services" },
        { "@type": "ListItem", "position": 3, "name": "Génération Leads IA", "item": "https://nlgconsulting.co/fr/generation-leads-ia" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment fonctionne la génération de leads par IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA utilise le machine learning pour identifier les prospects idéaux, personnaliser l'outreach à grande échelle et optimiser les messages en fonction des données de réponse." } },
        { "@type": "Question", "name": "L'IA est-elle meilleure que les SDR humains ?", "acceptedAnswer": { "@type": "Answer", "text": "Ils sont complémentaires. L'IA excelle en volume et opère 24/7. Les humains excellent dans les conversations nuancées. Les meilleurs résultats viennent de la combinaison des deux." } },
        { "@type": "Question", "name": "Quels résultats puis-je attendre ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos clients voient typiquement 3x plus de pipeline à 50% de coût inférieur par rendez-vous comparé aux méthodes SDR traditionnelles." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Génération de Leads IA pour le B2B | NLG Consulting</title>
        <meta name="description" content="Systèmes de prospection IA qui génèrent des rendez-vous B2B qualifiés en automatique. 3x plus de pipeline à -50% du coût. Découvrez comment." />
        <link rel="canonical" href="https://nlgconsulting.co/fr/generation-leads-ia" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/ai-lead-generation" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/generation-leads-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/ai-lead-generation" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Génération de Leads IA</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prospection IA qui génère des rendez-vous qualifiés</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Arrêtez de gaspiller du budget en outreach manuel. Nos systèmes IA identifient, engagent et qualifient vos prospects idéaux à grande échelle — 3x plus de pipeline à 50% de coût en moins.</p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Découvrir comment l'IA peut scaler votre pipeline <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "3x", label: "Croissance du pipeline" },
                { metric: "50%", label: "Coût inférieur par RDV" },
                { metric: "24/7", label: "Prospection continue" },
                { metric: "1-2 sem.", label: "Temps de mise en place" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi les entreprises B2B passent à la génération de leads IA</h2>
            <p>Le modèle SDR traditionnel est cassé. Vous recrutez, formez pendant des mois, les regardez partir, et recommencez. Pendant ce temps, vos concurrents utilisent l'IA pour prospecter 24/7 à une fraction du coût.</p>
            <p>NLG Consulting construit des systèmes de prospection IA qui combinent l'échelle de l'automatisation avec l'intelligence du machine learning. Nos systèmes analysent le comportement des prospects et personnalisent l'outreach en fonction de signaux réels.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">SDR IA vs SDR Humain : La Combinaison Intelligente</h3>
            <p>Les meilleurs résultats viennent de la combinaison IA + humain. L'IA gère le volume. Les humains gèrent les conversations complexes. Notre service de <Link to="/fr/vente" className="text-primary hover:underline font-medium">ventes B2B externalisées</Link> s'intègre parfaitement avec la génération de leads IA.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
            <div className="space-y-6">
              {[
                { q: "Comment fonctionne la génération de leads IA ?", a: "L'IA utilise le machine learning pour identifier les prospects idéaux, personnaliser l'outreach à grande échelle et optimiser les messages automatiquement." },
                { q: "L'IA est-elle meilleure que les SDR humains ?", a: "Ils sont complémentaires. L'IA excelle en volume et 24/7. Les humains en conversations nuancées. Les meilleurs résultats viennent de la combinaison." },
                { q: "Quels résultats attendre ?", a: "3x plus de pipeline à 50% de coût inférieur par rendez-vous comparé aux méthodes SDR traditionnelles." },
                { q: "Combien de temps pour la mise en place ?", a: "1-2 semaines. Le système commence à générer des résultats dès la première semaine et s'améliore continuellement." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="ai-lead-generation" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Brain className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Prêt à laisser l'IA remplir votre pipeline ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel de 15 minutes pour découvrir comment l'IA peut transformer votre prospection.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default AILeadGenerationFR;

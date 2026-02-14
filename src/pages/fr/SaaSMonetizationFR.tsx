import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, DollarSign } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const SaaSMonetizationFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Monétisation SaaS & Conseil en Modèle de Revenus", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "url": "https://nlgconsulting.co/fr/monetisation-saas" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/fr/services" },
        { "@type": "ListItem", "position": 3, "name": "Monétisation SaaS", "item": "https://nlgconsulting.co/fr/monetisation-saas" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Monétisation SaaS : Optimisez Vos Revenus | NLG</title>
        <meta name="description" content="Arrêtez de laisser des revenus sur la table. Conseil expert en pricing et monétisation SaaS. ARPU +30-50%. Audit revenus gratuit." />
        <link rel="canonical" href="https://nlgconsulting.co/fr/monetisation-saas" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/saas-monetization" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/monetisation-saas" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/saas-monetization" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Monétisation SaaS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vos prix vous coûtent des revenus</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">La plupart des entreprises SaaS sous-facturent de 30-50%. Nous corrigeons votre modèle de revenus — prix, packaging et métriques de valeur — pour maximiser la lifetime value de chaque client.</p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Obtenir votre audit revenus gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "30-50%", label: "Augmentation ARPU" },
                { metric: "11%", label: "Profit par 1% d'amélioration prix" },
                { metric: "4-8 sem.", label: "Durée d'engagement" },
                { metric: "60 jours", label: "Délai d'impact" }
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi la plupart des SaaS se trompent sur la monétisation</h2>
            <p>Le pricing est le levier le plus puissant de votre business. Une amélioration de 1% des prix génère 11% de profit en plus — pourtant la plupart des fondateurs fixent leurs prix une fois et n'y reviennent jamais.</p>
            <p>Notre pratique aide les entreprises SaaS à débloquer des revenus piégés via l'optimisation stratégique des prix, la restructuration des tiers, et l'alignement des métriques de valeur.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Du pricing à la stratégie de revenus complète</h3>
            <p>La monétisation n'existe pas en vase clos. Votre stratégie de prix est connectée à votre <Link to="/fr/strategie-go-to-market" className="text-primary hover:underline font-medium">approche go-to-market</Link>, votre <Link to="/fr/vente" className="text-primary hover:underline font-medium">processus de vente</Link> et votre positionnement produit.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
            <div className="space-y-6">
              {[
                { q: "Qu'est-ce que le conseil en monétisation SaaS ?", a: "Cela aide les entreprises logicielles à optimiser leur stratégie de pricing, packaging et modèle de revenus pour maximiser l'ARPU et réduire le churn." },
                { q: "Combien le pricing peut-il augmenter mes revenus ?", a: "1% d'amélioration des prix = 11% de profit en plus. Nos clients voient typiquement +30-50% d'ARPU en 60 jours." },
                { q: "Quand revoir son pricing ?", a: "Au moins annuellement. Déclencheurs clés : nouvelles fonctionnalités, nouveaux marchés, churn élevé, faible taux d'upgrade." },
                { q: "Aidez-vous avec la monétisation marketplace ?", a: "Oui. Expérience approfondie en modèles de commission, frais de transaction, tiers d'abonnement et modèles hybrides." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="saas-monetization" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <DollarSign className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Arrêtez de laisser des revenus sur la table</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un audit revenus gratuit. Nous vous montrons exactement où vos prix vous coûtent de l'argent.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/fr/rendez-vous">Audit revenus gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default SaaSMonetizationFR;

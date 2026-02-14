import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, BookOpen } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const PropTechConsultingFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Conseil PropTech & Technologie Immobilière", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "url": "https://nlgconsulting.co/fr/conseil-proptech" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/fr/services" },
        { "@type": "ListItem", "position": 3, "name": "Conseil PropTech", "item": "https://nlgconsulting.co/fr/conseil-proptech" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Conseil PropTech : Construisez & Scalez | NLG</title>
        <meta name="description" content="Conseil expert en PropTech et technologie immobilière. Tokenisation, marketplaces, propriété fractionnée. Du concept aux revenus. Par des opérateurs PropTech." />
        <link rel="canonical" href="https://nlgconsulting.co/fr/conseil-proptech" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/proptech-consulting" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/conseil-proptech" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/proptech-consulting" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Conseil PropTech</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conseil PropTech par des opérateurs qui construisent des plateformes</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Stratégie technologie immobilière par une équipe qui construit et opère des plateformes PropTech. Tokenisation, marketplaces, propriété fractionnée et transformation digitale — du concept aux revenus.</p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Discuter de votre vision PropTech <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-card rounded-2xl border">
              <div className="flex-shrink-0">
                <img src="/images/book-cover.jpg" alt="Level Up in Fractional Real Estate par Gregory Brenig" className="w-32 h-auto rounded-lg shadow-md" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Auteur publié</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Level Up in Fractional Real Estate</h2>
                <p className="text-muted-foreground mb-4">Écrit par notre fondateur Gregory Brenig, ce livre est le guide définitif de l'investissement immobilier fractionné. Notre conseil PropTech est soutenu par une expertise publiée et une expérience réelle de construction de plateformes.</p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">Lire sur Amazon <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi choisir un cabinet PropTech dirigé par des opérateurs</h2>
            <p>La plupart des consultants PropTech viennent de l'immobilier traditionnel ou de la tech pure. NLG Consulting se situe à l'intersection — nous avons construit des plateformes PropTech, navigué les réglementations immobilières et scalé des produits technologiques.</p>
            <p>Notre <Link to="/fr/ventures" className="text-primary hover:underline font-medium">portefeuille ventures</Link> inclut des plateformes PropTech actives. Nous testons nos frameworks avec du capital réel avant de les recommander.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">De la stratégie au lancement de plateforme</h3>
            <p>Nous ne nous contentons pas de conseiller — nous aidons à exécuter. Notre <Link to="/fr/site-internet" className="text-primary hover:underline font-medium">studio web</Link> peut construire votre MVP. Nos <Link to="/fr/vente" className="text-primary hover:underline font-medium">équipes SDR</Link> peuvent générer vos premiers clients. Notre <Link to="/fr/strategie-go-to-market" className="text-primary hover:underline font-medium">pratique GTM</Link> peut planifier votre entrée marché.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
            <div className="space-y-6">
              {[
                { q: "Qu'est-ce que le conseil PropTech ?", a: "Le conseil PropTech aide les entreprises immobilières à utiliser la technologie pour construire des plateformes, optimiser les opérations et créer de nouveaux modèles de revenus." },
                { q: "Quelle expérience NLG a en PropTech ?", a: "Notre fondateur a construit des plateformes PropTech, écrit 'Level Up in Fractional Real Estate', et opère dans l'espace technologie immobilière depuis des années." },
                { q: "Aidez-vous avec la tokenisation ?", a: "Oui. Expérience approfondie en architecture de security tokens, conformité réglementaire, smart contracts et design de marketplaces." },
                { q: "Construisez-vous des plateformes ou conseillez-vous seulement ?", a: "Les deux. Advisory stratégique sur les modèles business et la technologie, plus développement de plateformes via notre studio web." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="proptech" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Building2 className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Prêt à construire votre plateforme PropTech ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour discuter de votre vision PropTech avec des opérateurs qui l'ont déjà fait.</p>
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

export default PropTechConsultingFR;

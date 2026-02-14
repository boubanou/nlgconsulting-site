import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const GoToMarketFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Stratégie Go-To-Market pour SaaS", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "url": "https://nlgconsulting.co/fr/strategie-go-to-market" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/fr/services" },
        { "@type": "ListItem", "position": 3, "name": "Go-To-Market", "item": "https://nlgconsulting.co/fr/strategie-go-to-market" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Stratégie Go-To-Market pour fondateurs SaaS | NLG</title>
        <meta name="description" content="Lancez-vous sur de nouveaux marchés sans brûler du cash. Frameworks GTM éprouvés pour SaaS. Expansion internationale. Réservez un appel stratégique." />
        <link rel="canonical" href="https://nlgconsulting.co/fr/strategie-go-to-market" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/go-to-market" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/strategie-go-to-market" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/go-to-market" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Stratégie Go-To-Market</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Lancez-vous sur de nouveaux marchés sans brûler du cash</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Frameworks go-to-market éprouvés pour les entreprises SaaS prêtes à scaler à l'international. Sélection de marché, positionnement, pricing, canaux et exécution — en un package stratégique.</p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Planifier votre entrée marché <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "15+", label: "Ans d'expérience internationale" },
                { metric: "3", label: "Continents couverts" },
                { metric: "4-6 sem.", label: "Stratégie prête" },
                { metric: "50+", label: "Entreprises accompagnées" }
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi la plupart des expansions internationales SaaS échouent</h2>
            <p>80% des entreprises SaaS qui tentent l'expansion internationale sous-performent. L'erreur courante ? Traiter un nouveau marché comme un copier-coller du marché d'origine.</p>
            <p>Notre pratique GTM est construite sur une expérience opérationnelle internationale réelle. Nous avons construit et scalé des entreprises en Europe, Amérique du Nord et Moyen-Orient.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">De la stratégie aux revenus</h3>
            <p>Nous ne nous arrêtons pas aux decks stratégiques. Nous déployons des <Link to="/fr/vente" className="text-primary hover:underline font-medium">équipes SDR</Link>, lançons des <Link to="/fr/marketing" className="text-primary hover:underline font-medium">campagnes marketing</Link>, construisons des sites localisés via notre <Link to="/fr/site-internet" className="text-primary hover:underline font-medium">studio web</Link>.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions fréquentes</h2>
            <div className="space-y-6">
              {[
                { q: "Qu'est-ce qu'une stratégie go-to-market ?", a: "Un plan complet pour lancer sur un nouveau marché : audience, positionnement, pricing, canaux, processus de vente et métriques de succès." },
                { q: "Comment aidez-vous à l'expansion internationale ?", a: "Sélection de marché, localisation, adaptation des prix, partenariats, conformité réglementaire et exécution terrain." },
                { q: "Combien de temps prend une stratégie GTM ?", a: "4-6 semaines incluant recherche, analyse concurrentielle, positionnement, pricing et feuille de route d'exécution détaillée." },
                { q: "Pouvez-vous aussi exécuter le plan ?", a: "Oui. Nous déployons des équipes SDR, campagnes marketing, localisation de sites et setup opérationnel." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="go-to-market" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Globe className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Prêt à conquérir de nouveaux marchés ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour discuter de vos objectifs d'expansion.</p>
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

export default GoToMarketFR;

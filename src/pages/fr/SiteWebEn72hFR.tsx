import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const SiteWebEn72hFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Site Web en 72h", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Obtenez un site web professionnel et optimisé pour la conversion en 72 heures. Conçu pour les startups et entreprises B2B.", "url": "https://www.nlgconsulting.co/fr/site-web-en-72h", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Site Web en 72h", "item": "https://www.nlgconsulting.co/fr/site-web-en-72h" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Peut-on vraiment créer un site web en 72 heures ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Après un briefing d'une heure, nous livrons un site web complet et en ligne en 72 heures grâce à nos frameworks optimisés pour la conversion B2B." } },
        { "@type": "Question", "name": "Qu'est-ce qui est inclus ?", "acceptedAnswer": { "@type": "Answer", "text": "Jusqu'à 7 pages responsives, configuration SEO, formulaires de contact, analytics, intégration CRM et design optimisé pour la conversion." } },
        { "@type": "Question", "name": "Combien ça coûte ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos sites web en 72h démarrent à 1 500€. Les projets enterprise et plateformes sur mesure sont devisés séparément." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Site Web en 72h | Sites B2B Haute Conversion | NLG Consulting</title>
        <meta name="description" content="Obtenez un site web professionnel en 72 heures. Optimisé pour la conversion B2B et le SEO. À partir de 1 500€. Réservez un briefing gratuit." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <meta property="og:title" content="Site Web en 72h | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Site Web en 72h</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Votre Site Web, en Ligne en 72 Heures</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Arrêtez d'attendre des mois pour un site qui ne convertit pas. Nous livrons des sites web B2B optimisés pour la conversion et le SEO en seulement 72 heures.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Commencer Aujourd'hui <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi 72 Heures Change Tout</h2>
            <p>La plupart des agences web prennent 2-4 mois et facturent 10 000€+. Le temps que le site soit en ligne, votre marché a bougé et vous avez perdu des mois de leads potentiels.</p>
            <p>Notre modèle en 72 heures inverse la donne. Après un briefing d'une heure, nous construisons et lançons votre site complet en 3 jours.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Ce Que Vous Obtenez</h3>
            <ul>
              <li><strong>Jusqu'à 7 pages :</strong> Accueil, À propos, Services, Contact, et plus.</li>
              <li><strong>Design mobile-first :</strong> Responsive sur tous les appareils.</li>
              <li><strong>Configuration SEO :</strong> Balises meta, sitemap, schema, Core Web Vitals.</li>
              <li><strong>Formulaires & CTA :</strong> Optimisés pour la capture de leads.</li>
              <li><strong>Analytics & CRM :</strong> Google Analytics, intégration CRM.</li>
            </ul>
            <p>Combinez avec notre <Link to="/fr/sdr-externalise" className="text-primary hover:underline">SDR externalisé</Link> ou nos <Link to="/fr/marketing" className="text-primary hover:underline">campagnes PPC</Link> pour générer du trafic et convertir.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "72h", label: "Délai de Livraison" }, { metric: "1 500€", label: "Prix de Départ" }, { metric: "7", label: "Pages Incluses" }, { metric: "100%", label: "Optimisé SEO" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ Site Web en 72h</h2>
            <div className="space-y-6">
              {[
                { q: "Peut-on vraiment créer un site en 72h ?", a: "Oui. Après un briefing d'une heure, nous livrons un site complet et en ligne en 72 heures." },
                { q: "Qu'est-ce qui est inclus ?", a: "Jusqu'à 7 pages responsives, SEO, formulaires, analytics et intégration CRM." },
                { q: "Combien ça coûte ?", a: "À partir de 1 500€. Projets enterprise devisés séparément." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="web" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Prêt à Lancer Votre Site ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un briefing gratuit et ayez votre nouveau site en ligne en 72 heures.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/fr/rendez-vous">Briefing Gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default SiteWebEn72hFR;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const AgenceLeadGenerationFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Agence Lead Generation B2B", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Agence de génération de leads B2B. SDR externalisé, prospection IA, campagnes multicanal. 15-30 rendez-vous qualifiés par mois.", "url": "https://www.nlgconsulting.co/fr/agence-lead-generation-b2b", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Agence Lead Generation B2B", "item": "https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Que fait une agence de lead generation B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence de lead generation B2B identifie, qualifie et livre des leads prêts à la vente en utilisant la prospection outbound, le contenu, la publicité et l'IA." } },
        { "@type": "Question", "name": "Combien coûte la lead generation B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos forfaits commencent à 2 500€/mois pour le service SDR externalisé livrant 15-30 rendez-vous qualifiés." } },
        { "@type": "Question", "name": "En combien de temps les résultats arrivent ?", "acceptedAnswer": { "@type": "Answer", "text": "Premiers rendez-vous en 2-3 semaines. Optimisation complète du pipeline au mois 2-3." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Agence Lead Generation B2B | RDV Qualifiés sur Demande | NLG Consulting</title>
        <meta name="description" content="Agence de génération de leads B2B. SDR externalisé, prospection IA, campagnes multicanal. 15-30 rendez-vous qualifiés par mois. Réservez un audit gratuit." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <meta property="og:title" content="Agence Lead Generation B2B | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Lead Generation B2B</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">L'Agence Lead Generation B2B Qui Délivre des Rendez-Vous Qualifiés</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Arrêtez de courir après des leads qui ne convertissent pas. NLG Consulting délivre 15-30 rendez-vous B2B qualifiés par mois grâce à la prospection outbound, l'IA et des campagnes multicanal.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Audit Lead Gen Gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi Choisir une Agence Spécialisée en Lead Generation B2B ?</h2>
            <p>La plupart des agences vous vendent une liste de noms. NLG Consulting construit et opère votre moteur outbound complet — de la définition de l'ICP à la prise de rendez-vous — pour que vous puissiez vous concentrer sur le closing.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Nos Services de Lead Generation</h3>
            <ul>
              <li><strong><Link to="/fr/sdr-externalise" className="text-primary hover:underline">SDR Externalisé :</Link></strong> Des commerciaux dédiés qui prospectent et prennent des rendez-vous pour vous.</li>
              <li><strong><Link to="/fr/prise-de-rendez-vous-b2b" className="text-primary hover:underline">Prise de Rendez-Vous :</Link></strong> Booking de rendez-vous avec des décideurs qualifiés.</li>
              <li><strong>Prospection IA :</strong> Personnalisation à grande échelle via LinkedIn et email.</li>
              <li><strong>Setup CRM & Pipeline :</strong> Configuration complète pour visibilité et tracking.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "15-30", label: "RDV / Mois" }, { metric: "200+", label: "Campagnes Livrées" }, { metric: "3+", label: "Canaux Outbound" }, { metric: "48h", label: "Onboarding" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ Lead Generation B2B</h2>
            <div className="space-y-6">
              {[
                { q: "Que fait une agence de lead generation B2B ?", a: "Elle identifie, qualifie et livre des leads prêts à la vente via la prospection outbound, le contenu et l'IA." },
                { q: "Combien ça coûte ?", a: "Forfaits à partir de 2 500€/mois pour 15-30 rendez-vous qualifiés." },
                { q: "Quand arrivent les résultats ?", a: "Premiers rendez-vous en 2-3 semaines. Pipeline optimisé au mois 2-3." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="sales" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Prêt à Scaler Votre Lead Generation ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un audit gratuit de 15 minutes.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un Audit Gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default AgenceLeadGenerationFR;

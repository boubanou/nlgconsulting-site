import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const PriseRendezVousFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Prise de Rendez-Vous B2B", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Service de prise de rendez-vous B2B. Nous bookons 15-30 rendez-vous qualifiés par mois avec des décideurs.", "url": "https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Prise de Rendez-Vous B2B", "item": "https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce que la prise de rendez-vous B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "La prise de rendez-vous B2B consiste à identifier, qualifier et booker des meetings avec des décideurs dans vos entreprises cibles, pour le compte de votre équipe commerciale." } },
        { "@type": "Question", "name": "Combien de rendez-vous pouvez-vous obtenir par mois ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous bookons typiquement 15-30 rendez-vous qualifiés par mois par campagne." } },
        { "@type": "Question", "name": "Quelle est la différence avec la lead generation ?", "acceptedAnswer": { "@type": "Answer", "text": "La lead generation identifie des prospects potentiels. La prise de rendez-vous va plus loin : elle qualifie ET booke des meetings confirmés avec des décideurs." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Prise de Rendez-Vous B2B | RDV Qualifiés Bookés Pour Vous | NLG Consulting</title>
        <meta name="description" content="Service de prise de rendez-vous B2B. 15-30 rendez-vous qualifiés par mois avec des décideurs. Prospection multicanal. Payez pour les résultats." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/appointment-setting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/appointment-setting" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <meta property="og:title" content="Prise de Rendez-Vous B2B | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Prise de Rendez-Vous</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prise de Rendez-Vous B2B : Remplissez Votre Agenda</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nous identifions, qualifions et bookons des rendez-vous avec les décideurs de vos entreprises cibles. Votre équipe commerciale se concentre sur le closing.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Consultation Gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Arrêtez de Prospecter. Commencez à Closer.</h2>
            <p>Vos commerciaux seniors devraient closer, pas passer des cold calls. La prise de rendez-vous B2B leur permet de se concentrer sur ce qu'ils font le mieux.</p>
            <p>NLG Consulting délivre des rendez-vous confirmés avec des décideurs vérifiés qui correspondent à votre ICP et ont exprimé un intérêt réel.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Notre Méthode</h3>
            <ul>
              <li><strong>Définition de la cible :</strong> ICP incluant secteur, taille, revenus et postes.</li>
              <li><strong>Recherche de prospects :</strong> Données de contact vérifiées des décideurs.</li>
              <li><strong>Prospection multicanal :</strong> LinkedIn, email et téléphone coordonnés.</li>
              <li><strong>Qualification :</strong> Chaque prospect qualifié selon vos critères.</li>
              <li><strong>Booking :</strong> Rendez-vous directement dans l'agenda de votre équipe.</li>
            </ul>
            <p>Combinez avec notre <Link to="/fr/sdr-externalise" className="text-primary hover:underline">SDR externalisé</Link> pour maximiser la vélocité de votre pipeline.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "15-30", label: "RDV / Mois" }, { metric: "95%", label: "Taux de Présence" }, { metric: "100%", label: "RDV Qualifiés" }, { metric: "2 Sem.", label: "Premier RDV" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ Prise de Rendez-Vous B2B</h2>
            <div className="space-y-6">
              {[
                { q: "Qu'est-ce que la prise de rendez-vous B2B ?", a: "Identifier, qualifier et booker des meetings avec des décideurs pour votre équipe commerciale." },
                { q: "Combien de rendez-vous par mois ?", a: "15-30 rendez-vous qualifiés par mois par campagne." },
                { q: "Différence avec la lead generation ?", a: "La lead gen identifie des prospects. La prise de RDV qualifie ET booke des meetings confirmés." }
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
            <h2 className="text-3xl font-bold mb-4">Prêt à Remplir Votre Agenda ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation gratuite pour découvrir comment nous pouvons booker 15-30 rendez-vous qualifiés par mois.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/fr/rendez-vous">Consultation Gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default PriseRendezVousFR;

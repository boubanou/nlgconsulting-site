import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const SDRExternaliseFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "SDR Externalisé", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Service de SDR externalisé. 15-30 rendez-vous B2B qualifiés par mois. LinkedIn, email, téléphone. Sans risque d'embauche.", "url": "https://www.nlgconsulting.co/fr/sdr-externalise", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "SDR Externalisé", "item": "https://www.nlgconsulting.co/fr/sdr-externalise" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce qu'un SDR externalisé ?", "acceptedAnswer": { "@type": "Answer", "text": "Un SDR externalisé est un commercial de développement fourni par une agence externe qui prospecte, qualifie les leads et prend des rendez-vous pour votre entreprise — sans les coûts d'embauche interne." } },
        { "@type": "Question", "name": "Combien de rendez-vous un SDR externalisé peut-il obtenir ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos équipes SDR externalisées obtiennent typiquement 15-30 rendez-vous B2B qualifiés par mois via LinkedIn, email et appels téléphoniques." } },
        { "@type": "Question", "name": "Combien coûte un SDR externalisé vs interne ?", "acceptedAnswer": { "@type": "Answer", "text": "Un SDR interne coûte plus de 80 000€ par an. Notre service externalisé délivre de meilleurs résultats à une fraction du coût, sans délai de montée en compétences." } },
        { "@type": "Question", "name": "En combien de temps les premiers résultats arrivent-ils ?", "acceptedAnswer": { "@type": "Answer", "text": "Les premiers rendez-vous qualifiés arrivent en 2-3 semaines. L'optimisation complète se fait au mois 2-3." } },
        { "@type": "Question", "name": "Quels secteurs servez-vous ?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS, FinTech, PropTech, Services Professionnels — toute entreprise B2B avec des deals supérieurs à 5 000€." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>SDR Externalisé | 15-30 RDV Qualifiés/Mois | NLG Consulting</title>
        <meta name="description" content="Externalisez votre prospection B2B. 15-30 rendez-vous qualifiés par mois via LinkedIn, email et téléphone. Sans risque d'embauche. Résultats en 2 semaines." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <meta property="og:title" content="SDR Externalisé | 15-30 RDV Qualifiés/Mois | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">SDR Externalisé</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SDR Externalisé : Remplissez Votre Pipeline Sans Embaucher</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Arrêtez de perdre du temps et de l'argent à recruter des commerciaux. Nos SDR externalisés délivrent 15-30 rendez-vous B2B qualifiés par mois — dès la première semaine.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Audit SDR Gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi Externaliser Votre SDR ?</h2>
            <p>Recruter un SDR en interne coûte plus de 80 000€ par an — avant les outils, la formation et le management. Le temps de montée en compétences est de 3-6 mois, et le taux de turnover dans l'industrie dépasse 35%.</p>
            <p>Avec NLG Consulting, vous passez directement à la phase résultats. Nos équipes SDR formées commencent à générer des rendez-vous qualifiés en 2-3 semaines.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Ce Qui Est Inclus</h3>
            <ul>
              <li><strong>Définition de l'ICP :</strong> Profil client idéal — secteur, taille, postes, signaux d'achat.</li>
              <li><strong>Recherche de prospects :</strong> Listes de contacts vérifiées de décideurs.</li>
              <li><strong>Séquences multicanal :</strong> LinkedIn, email et appels coordonnés.</li>
              <li><strong>Intégration CRM :</strong> Toutes les activités dans HubSpot, Salesforce ou votre CRM.</li>
              <li><strong>Reporting hebdomadaire :</strong> Transparence totale sur l'activité et les résultats.</li>
            </ul>
            <p>Combinez avec notre <Link to="/fr/agence-lead-generation-b2b" className="text-primary hover:underline">service de lead generation B2B</Link> ou notre <Link to="/fr/prise-de-rendez-vous-b2b" className="text-primary hover:underline">prise de rendez-vous</Link> pour maximiser les résultats.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "15-30", label: "RDV / Mois" }, { metric: "2-3", label: "Semaines pour Démarrer" }, { metric: "3+", label: "Canaux Outbound" }, { metric: "60%", label: "Économies vs Interne" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ SDR Externalisé</h2>
            <div className="space-y-6">
              {[
                { q: "Qu'est-ce qu'un SDR externalisé ?", a: "Un commercial de développement fourni par une agence externe qui prospecte et prend des rendez-vous pour vous — sans embauche." },
                { q: "Combien de rendez-vous par mois ?", a: "15-30 rendez-vous B2B qualifiés par mois via LinkedIn, email et téléphone." },
                { q: "Combien ça coûte vs un SDR interne ?", a: "Un SDR interne coûte 80 000€+/an. Notre solution livre de meilleurs résultats à une fraction du coût." },
                { q: "Quand arrivent les premiers résultats ?", a: "Premiers rendez-vous en 2-3 semaines. Optimisation complète au mois 2-3." },
                { q: "Quels secteurs ?", a: "SaaS, FinTech, PropTech, Services B2B — tout secteur avec des deals > 5 000€." }
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
            <h2 className="text-3xl font-bold mb-4">Prêt à Externaliser Votre SDR ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un audit gratuit de 15 minutes et découvrez comment générer 15-30 rendez-vous qualifiés par mois.</p>
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

export default SDRExternaliseFR;

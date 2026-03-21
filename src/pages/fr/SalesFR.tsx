import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Target, 
  Phone, 
  Mail, 
  Linkedin, 
  BarChart3,
  Users
} from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const SalesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Systèmes Outbound & Infrastructure Commerciale",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Systèmes outbound augmentés par l'IA, architecture pipeline multicanal et infrastructure commerciale pour entreprises B2B.",
        "url": "https://www.nlgconsulting.co/fr/vente"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Outbound & Systèmes Commerciaux", "item": "https://www.nlgconsulting.co/fr/vente" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce qu'un système outbound augmenté par l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un système outbound IA combine le développement commercial structuré avec la prospection assistée par IA, la personnalisation et l'automatisation des workflows pour générer des rendez-vous qualifiés à grande échelle." } },
          { "@type": "Question", "name": "Combien de temps faut-il pour voir des résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "La plupart des entreprises voient les premiers rendez-vous qualifiés en 2-3 semaines. Le système est optimisé et délivre une activité commerciale constante au mois 2-3." } },
          { "@type": "Question", "name": "Quels secteurs bénéficient de l'outbound structuré ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos systèmes outbound sont conçus pour les entreprises B2B en SaaS, FinTech, PropTech et services professionnels avec des tailles de deals supérieures à 5 000€." } },
          { "@type": "Question", "name": "Quelle différence avec le recrutement d'une équipe SDR interne ?", "acceptedAnswer": { "@type": "Answer", "text": "Recruter en interne coûte 80 000€+ par SDR par an avec 3-6 mois de montée en compétence. Notre approche délivre un système outbound opérationnel — incluant prospection IA, opérateurs formés et intégration CRM — sans le surcoût ni le risque." } }
        ]
      }
    ]
  };

  const services = [
    { icon: <Target className="w-6 h-6" />, title: "Architecture Pipeline", description: "Systèmes outbound structurés pour générer des rendez-vous qualifiés avec vos cibles ICP via plusieurs canaux." },
    { icon: <Mail className="w-6 h-6" />, title: "Séquences Multicanal", description: "Prospection coordonnée email, LinkedIn et téléphone — conçue pour les taux de réponse et la pertinence commerciale." },
    { icon: <Users className="w-6 h-6" />, title: "Opérations SDR", description: "Opérateurs commerciaux formés exécutant la prospection quotidienne, la qualification et le transfert de rendez-vous." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "CRM & RevOps", description: "Architecture pipeline, configuration CRM et revenue operations pour la visibilité, les prévisions et le suivi de conversion." },
    { icon: <Phone className="w-6 h-6" />, title: "Prospection Assistée IA", description: "Recherche et personnalisation par IA pour améliorer la précision du ciblage et la qualité de la prospection à grande échelle." },
    { icon: <Linkedin className="w-6 h-6" />, title: "Systèmes Revenue LinkedIn", description: "Engagement LinkedIn stratégique, séquences de connexion et workflows de social selling pour décideurs B2B." }
  ];

  return (
    <>
      <Helmet>
        <title>Systèmes Outbound & Infrastructure Commerciale | NLG</title>
        <meta name="description" content="Systèmes outbound augmentés par l'IA et infrastructure commerciale pour entreprises B2B. Architecture pipeline multicanal, opérations SDR et génération de rendez-vous qualifiés." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/vente" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/sales" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/vente" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/sales" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/vente" />
        <meta property="og:title" content="Systèmes Outbound & Infrastructure Commerciale | NLG Consulting" />
        <meta property="og:description" content="Systèmes outbound IA et infrastructure commerciale pour entreprises B2B. Rendez-vous qualifiés et performance commerciale." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Outbound & Systèmes Commerciaux</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Systèmes Outbound & Infrastructure Commerciale Augmentés par l'IA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nous concevons et opérons des systèmes outbound structurés qui génèrent des rendez-vous qualifiés de manière prévisible — combinant prospection assistée par IA, séquences multicanal, architecture pipeline CRM et opérateurs commerciaux formés.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">
                Réserver un audit pipeline <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">De la prospection dispersée aux systèmes commerciaux structurés</h2>
              <p>
                La plupart des entreprises B2B traitent l'outbound comme une activité secondaire — emails sporadiques, activité LinkedIn inconstante, pas de logique de qualification, pas de visibilité pipeline. Le résultat : des revenus imprévisibles et un effort commercial gaspillé.
              </p>
              <p>
                NLG Consulting adopte une approche systémique de l'outbound. Nous architecturons l'ensemble de l'infrastructure commerciale — de la définition de l'ICP et la recherche de prospects au séquençage multicanal, à la qualification des leads, aux workflows CRM et aux analytics de performance.
              </p>
              <p>
                Notre pratique de <Link to="/fr/conseil-ia" className="text-primary hover:underline font-medium">conseil IA</Link> informe la manière dont nous intégrons l'intelligence artificielle dans l'outbound — du scoring intelligent de prospects à la personnalisation par IA qui maintient une qualité humaine à grande échelle.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Ce que comprend l'infrastructure commerciale</h3>
              <ul>
                <li><strong>Architecture ICP :</strong> Définition précise du profil client idéal — secteur, taille, signaux d'achat, cartographie des décideurs.</li>
                <li><strong>Intelligence Prospects :</strong> Bases de contacts vérifiées, enrichies par des signaux d'intention et la recherche IA.</li>
                <li><strong>Exécution Multicanal :</strong> Prospection coordonnée LinkedIn, email et téléphone — séquencée pour l'engagement optimal.</li>
                <li><strong>Intégration CRM & RevOps :</strong> Configuration pipeline complète dans HubSpot, Salesforce ou Pipedrive.</li>
                <li><strong>Gouvernance Performance :</strong> Reporting hebdomadaire sur les métriques d'activité, taux de conversion et valeur pipeline.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "15-30", label: "RDV qualifiés / mois" },
                { metric: "3+", label: "Canaux coordonnés" },
                { metric: "2-3x", label: "Accélération pipeline" },
                { metric: "60%", label: "Coût inférieur vs interne" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Stack Commercial</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six capacités intégrées qui transforment l'outbound d'une activité en un système.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment nous construisons votre système outbound</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Audit commercial & Design ICP", desc: "Nous évaluons vos opérations commerciales actuelles, définissons votre profil client idéal et identifions les opportunités outbound à plus fort levier." },
                { step: "2", title: "Architecture du système", desc: "Nous concevons le séquençage multicanal, la structure pipeline CRM, les critères de qualification et le cadre de reporting." },
                { step: "3", title: "Activation outbound", desc: "Les opérateurs formés commencent l'exécution structurée sur LinkedIn, email et téléphone — généralement sous 5-7 jours." },
                { step: "4", title: "Itération & Optimisation", desc: "Amélioration continue basée sur les données de réponse, les patterns de conversion et les analytics pipeline." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="sales" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Discutons de votre structure commerciale</h2>
            <p className="text-lg opacity-90 mb-8">
              Si vous revoyez votre modèle outbound, votre architecture pipeline ou votre rythme opérationnel commercial — nous pouvons évaluer où la structure et l'IA peuvent améliorer la performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/rendez-vous">Réserver un audit pipeline <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link to="/fr/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default SalesFR;
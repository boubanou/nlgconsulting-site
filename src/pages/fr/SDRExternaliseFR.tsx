import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const SDRExternaliseFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "SDR Externalisé & Opérations de Développement Commercial", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Opérations SDR externalisées avec prospection augmentée par l'IA. Exécution outbound structurée, séquences multicanal et génération de rendez-vous qualifiés.", "url": "https://www.nlgconsulting.co/fr/sdr-externalise", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "SDR Externalisé", "item": "https://www.nlgconsulting.co/fr/sdr-externalise" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce qu'un SDR externalisé ?", "acceptedAnswer": { "@type": "Answer", "text": "Un SDR externalisé est un opérateur commercial formé fourni par un partenaire externe qui exécute la prospection structurée, la qualification des leads et la prise de rendez-vous — sans les coûts d'embauche, de montée en compétences ou de management interne." } },
        { "@type": "Question", "name": "Quelle différence avec la génération de leads traditionnelle ?", "acceptedAnswer": { "@type": "Answer", "text": "La lead gen traditionnelle livre des listes de contacts. Le SDR externalisé livre des rendez-vous qualifiés à travers l'exécution outbound structurée, l'intégration CRM et la qualification professionnelle." } },
        { "@type": "Question", "name": "En combien de temps les résultats arrivent-ils ?", "acceptedAnswer": { "@type": "Answer", "text": "Premiers rendez-vous qualifiés en 2-3 semaines. Activité commerciale constante et optimisée au mois 2-3." } },
        { "@type": "Question", "name": "Quels secteurs bénéficient du SDR externalisé ?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS, FinTech, PropTech et services professionnels — tout secteur B2B avec des deals supérieurs à 5 000€ et un profil client défini." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>SDR Externalisé | Prospection IA & Outbound | NLG</title>
        <meta name="description" content="Opérations SDR externalisées avec prospection augmentée par l'IA. Exécution outbound structurée et génération de rendez-vous qualifiés pour entreprises B2B." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <meta property="og:title" content="SDR Externalisé | Prospection IA & Outbound | NLG Consulting" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">SDR Externalisé</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Opérations SDR Externalisées Avec Prospection Augmentée par l'IA</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Développement commercial structuré sans le risque d'embauche. Nos opérateurs formés exécutent la prospection outbound multicanal, la qualification assistée par IA et la génération de rendez-vous — comme une extension directe de votre équipe commerciale.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un audit commercial <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi l'externalisation SDR structurée surpasse le recrutement interne</h2>
            <p>Construire une fonction SDR interne nécessite 80 000€+ par opérateur par an — avant les outils, la formation et le management. La montée en compétences prend 3-6 mois et le turnover dépasse 35%. Pour la plupart des entreprises en croissance, cela représente un risque de capital significatif avec des retours incertains.</p>
            <p>Le modèle SDR externalisé de NLG Consulting élimine ces variables. Nous déployons des opérateurs formés avec des workflows établis, des outils de prospection augmentés par l'IA et des séquences multicanal éprouvées — délivrant des conversations commerciales qualifiées en semaines, pas en mois.</p>
            <p>Contrairement aux prestataires SDR traditionnels, notre approche est informée par notre pratique de <Link to="/fr/conseil-ia" className="text-primary hover:underline font-medium">conseil IA</Link> et de <Link to="/fr/conseil" className="text-primary hover:underline font-medium">conseil stratégique</Link> — assurant que votre système outbound s'aligne avec votre stratégie GTM et vos objectifs de revenus.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Ce qui est inclus dans chaque engagement</h3>
            <ul>
              <li><strong>Architecture ICP :</strong> Profil client idéal détaillé — secteur, taille, rôles décideurs, signaux d'achat et paysage concurrentiel.</li>
              <li><strong>Intelligence Prospects :</strong> Bases de contacts vérifiées enrichies par des données d'intention et la recherche IA.</li>
              <li><strong>Exécution Multicanal :</strong> Prospection coordonnée LinkedIn, email et téléphone avec séquençage personnalisé.</li>
              <li><strong>Intégration CRM :</strong> Logging complet dans HubSpot, Salesforce ou Pipedrive avec définitions d'étapes pipeline.</li>
              <li><strong>Reporting de Performance :</strong> Transparence hebdomadaire sur les métriques d'activité, taux de qualification et valeur pipeline.</li>
            </ul>
            <p>Combinez avec la <Link to="/fr/agence-lead-generation-b2b" className="text-primary hover:underline font-medium">lead generation B2B</Link> ou la <Link to="/fr/prise-de-rendez-vous-b2b" className="text-primary hover:underline font-medium">prise de rendez-vous</Link> pour maximiser les résultats.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "15-30", label: "RDV qualifiés / mois" },
              { metric: "2-3", label: "Semaines pour démarrer" },
              { metric: "3+", label: "Canaux coordonnés" },
              { metric: "60%", label: "Coût inférieur vs interne" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Le processus SDR externalisé</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Découverte commerciale & Design ICP", desc: "Nous évaluons votre position marché, définissons votre profil client idéal et cartographions les opportunités outbound à plus forte valeur." },
                { step: "2", title: "Architecture système & Messaging", desc: "Bases de prospects construites, séquences multicanal conçues et cadres de qualification alignés avec vos objectifs commerciaux." },
                { step: "3", title: "Activation outbound", desc: "Les opérateurs formés commencent la prospection structurée sur LinkedIn, email et téléphone — généralement sous 5-7 jours." },
                { step: "4", title: "Itération & Optimisation performance", desc: "Amélioration continue basée sur les patterns de réponse, les données de conversion et les analytics pipeline." }
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

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">FAQ SDR Externalisé</h2>
            <div className="space-y-6">
              {[
                { q: "Qu'est-ce qu'un SDR externalisé ?", a: "Un opérateur commercial formé fourni par un partenaire externe qui exécute la prospection structurée, la qualification et la prise de rendez-vous — sans coûts d'embauche ni management interne." },
                { q: "Quelle différence avec la génération de leads ?", a: "La lead gen livre des listes. Le SDR externalisé livre des rendez-vous qualifiés par l'exécution outbound structurée et la qualification professionnelle." },
                { q: "Que comprend un engagement ?", a: "Définition ICP, recherche de prospects, prospection multicanal, intégration CRM, qualification, prise de rendez-vous et reporting hebdomadaire." },
                { q: "En combien de temps le pipeline est-il généré ?", a: "Premiers rendez-vous qualifiés en 2-3 semaines. Activité commerciale optimisée au mois 2-3." }
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
            <h2 className="text-3xl font-bold mb-4">Discutons de votre structure outbound</h2>
            <p className="text-lg opacity-90 mb-8">Si vous évaluez votre modèle SDR, votre architecture outbound ou votre rythme opérationnel commercial — nous pouvons identifier où l'exécution structurée peut améliorer la performance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/rendez-vous">Réserver un audit commercial <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default SDRExternaliseFR;
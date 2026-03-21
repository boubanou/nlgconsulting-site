import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const AgenceLeadGenerationFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Agence Lead Generation B2B & Systèmes Pipeline", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Systèmes de lead generation B2B combinant prospection IA, opérations SDR externalisées et architecture pipeline multicanal pour la génération de rendez-vous qualifiés.", "url": "https://www.nlgconsulting.co/fr/agence-lead-generation-b2b", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Agence Lead Generation B2B", "item": "https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Que fait une agence de lead generation B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "Une agence de lead generation B2B conçoit et opère des systèmes qui identifient, qualifient et convertissent des prospects en rendez-vous qualifiés — via l'outbound structuré, la prospection IA et l'exécution multicanal." } },
        { "@type": "Question", "name": "En quoi NLG est différent des autres agences ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous construisons des systèmes pipeline complets — pas juste des listes de contacts. Architecture ICP, prospection IA, séquences multicanal, intégration CRM et logique de qualification." } },
        { "@type": "Question", "name": "Quels secteurs servez-vous ?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS, FinTech, PropTech et services professionnels — toute entreprise B2B avec des deals supérieurs à 5 000€ et des ICP définis." } },
        { "@type": "Question", "name": "En combien de temps les résultats arrivent ?", "acceptedAnswer": { "@type": "Answer", "text": "Premiers rendez-vous qualifiés en 2-3 semaines. Pipeline constant et optimisé au mois 2-3." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Agence Lead Generation B2B | Systèmes Pipeline | NLG</title>
        <meta name="description" content="Systèmes de lead generation B2B combinant prospection IA, SDR externalisé et architecture pipeline multicanal. Rendez-vous qualifiés et exécution structurée." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <meta property="og:title" content="Agence Lead Generation B2B | Systèmes Pipeline | NLG Consulting" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Lead Generation B2B</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Systèmes de Lead Generation B2B Qui Délivrent des Rendez-Vous Qualifiés</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nous concevons et opérons des systèmes complets de lead generation — combinant prospection IA, outbound structuré et architecture pipeline multicanal — pour générer des conversations commerciales qualifiées de manière prévisible.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un audit pipeline <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Au-delà des listes de contacts : construire une infrastructure de lead generation</h2>
            <p>La plupart des agences de lead generation vous vendent une base de contacts et considèrent le travail terminé. Le fossé entre "leads" et revenus reste entièrement votre problème. NLG Consulting adopte une approche fondamentalement différente.</p>
            <p>Nous construisons et opérons l'ensemble de votre infrastructure de lead generation — de l'architecture ICP et l'intelligence prospects à l'exécution outbound multicanal, aux workflows de qualification et à la gestion pipeline CRM.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Le système de lead generation</h3>
            <ul>
              <li><strong><Link to="/fr/sdr-externalise" className="text-primary hover:underline">Opérations SDR Externalisées :</Link></strong> Opérateurs commerciaux formés qui exécutent la prospection structurée et la prise de rendez-vous.</li>
              <li><strong>Prospection Augmentée IA :</strong> Prospection et personnalisation par IA qui améliorent la précision du ciblage et la qualité outbound à grande échelle.</li>
              <li><strong><Link to="/fr/prise-de-rendez-vous-b2b" className="text-primary hover:underline">Prise de Rendez-Vous :</Link></strong> Booking complet avec des décideurs qualifiés — de la première approche à la confirmation calendrier.</li>
              <li><strong>Architecture CRM & Pipeline :</strong> Setup revenue operations complet pour la visibilité pipeline et le suivi de conversion.</li>
            </ul>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Expertise sectorielle</h3>
            <p>Nous opérons des systèmes de lead generation pour les entreprises B2B en <Link to="/fr/ia-fintech" className="text-primary hover:underline">FinTech</Link>, <Link to="/fr/ia-proptech" className="text-primary hover:underline">PropTech</Link>, SaaS et services professionnels. Notre pratique de <Link to="/fr/conseil" className="text-primary hover:underline font-medium">conseil stratégique</Link> assure que votre lead generation s'aligne avec votre stratégie GTM globale.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "15-30", label: "RDV qualifiés / mois" }, { metric: "3+", label: "Canaux coordonnés" }, { metric: "2-3", label: "Semaines pour démarrer" }, { metric: "60%", label: "Coût inférieur vs interne" }].map((item, i) => (
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
                { q: "Que fait une agence de lead generation B2B ?", a: "Nous concevons et opérons des systèmes qui identifient, qualifient et convertissent des prospects en rendez-vous qualifiés — via l'outbound structuré, la prospection IA et l'exécution multicanal." },
                { q: "En quoi NLG est différent ?", a: "Nous construisons des systèmes pipeline complets — pas juste des listes. Architecture ICP, prospection IA, séquences multicanal, intégration CRM et logique de qualification." },
                { q: "Quels secteurs servez-vous ?", a: "SaaS, FinTech, PropTech et services professionnels — toute entreprise B2B avec des deals supérieurs à 5 000€." },
                { q: "En combien de temps les résultats arrivent ?", a: "Premiers rendez-vous qualifiés en 2-3 semaines. Pipeline constant au mois 2-3." }
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
            <h2 className="text-3xl font-bold mb-4">Discutons de votre architecture pipeline</h2>
            <p className="text-lg opacity-90 mb-8">Si vous évaluez votre modèle de lead generation, votre infrastructure outbound ou vos systèmes pipeline — nous pouvons identifier où l'exécution structurée et l'IA peuvent améliorer la performance commerciale.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un audit pipeline <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default AgenceLeadGenerationFR;
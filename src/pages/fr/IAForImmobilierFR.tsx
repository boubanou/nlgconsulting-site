import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building, TrendingUp, Search, Users, MapPin, Zap, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForImmobilierFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "IA pour entreprises immobilières", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Conseil et automatisation IA pour les entreprises immobilières. Estimations, génération de leads, analyse de marché et automatisation opérationnelle.", "url": "https://www.nlgconsulting.co/fr/ia-pour-immobilier", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment les entreprises immobilières peuvent-elles utiliser l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les entreprises immobilières utilisent l'IA pour les estimations automatiques, la génération et qualification de leads, l'analyse de marché, l'optimisation d'annonces, le screening locataires, la gestion de portefeuille et les communications investisseurs." }},
        { "@type": "Question", "name": "Quelle est la différence entre IA pour PropTech et IA pour l'immobilier ?", "acceptedAnswer": { "@type": "Answer", "text": "La PropTech désigne les entreprises technologiques qui créent des produits pour le secteur immobilier. L'IA pour l'immobilier concerne les entreprises traditionnelles — agences, promoteurs, fonds d'investissement, gestionnaires — qui veulent utiliser l'IA dans leurs opérations." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour l'immobilier", "item": "https://www.nlgconsulting.co/fr/ia-pour-immobilier" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour l'immobilier | Automatisation & Croissance | NLG Consulting</title>
        <meta name="description" content="Conseil et automatisation IA pour les entreprises immobilières. Estimations, génération de leads, analyse de marché et automatisation opérationnelle." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-immobilier" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-immobilier" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Immobilier</Badge>
            <h1 className="mb-6">IA pour{" "}<span className="text-gradient">l'immobilier</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              L'immobilier traditionnel se transforme grâce à l'IA. Que vous soyez agence, promoteur, fonds d'investissement ou gestionnaire de biens, l'IA automatise vos processus, affine vos analyses et accélère votre développement commercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation IA immobilier <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Applications IA dans l'immobilier</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Estimations automatiques", desc: "Modèles IA d'évaluation basés sur les comparables, tendances et données locales pour des estimations précises." },
                { icon: Users, title: "Génération de leads", desc: "Prospection automatisée et qualification intelligente des acheteurs, vendeurs et investisseurs potentiels." },
                { icon: Search, title: "Analyse de marché", desc: "Veille automatisée des tendances, prix et opportunités immobilières sur vos zones cibles." },
                { icon: MapPin, title: "Optimisation d'annonces", desc: "Rédaction automatique de descriptions optimisées SEO et conversion pour vos listings immobiliers." },
                { icon: TrendingUp, title: "Relations investisseurs", desc: "Reporting automatisé, communications personnalisées et outreach pour vos investisseurs et partenaires." },
                { icon: Zap, title: "Automatisation opérationnelle", desc: "Gestion locative, screening de locataires, suivi de travaux et automatisation administrative." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise immobilière</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience directe dans l'immobilier — travail avec des agences, promoteurs et fonds d'investissement", "Compréhension des cycles immobiliers et des spécificités locales du marché", "Implémentations IA adaptées aux contraintes réglementaires du secteur", "Systèmes de croissance conçus pour les relations long terme de l'immobilier", "Expérience sur les marchés immobiliers européens et internationaux", "Combinaison IA + stratégie business pour le développement immobilier"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Transformez votre activité immobilière avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer les opportunités IA dans votre entreprise immobilière.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment les entreprises immobilières peuvent-elles utiliser l'IA ?", a: "Les entreprises immobilières utilisent l'IA pour les estimations automatiques, la génération de leads, l'analyse de marché, l'optimisation d'annonces et la gestion de portefeuille." },
                { q: "Quelle est la différence entre IA pour PropTech et IA pour l'immobilier ?", a: "La PropTech désigne les entreprises tech du secteur immobilier. L'IA pour l'immobilier concerne les entreprises traditionnelles qui veulent intégrer l'IA dans leurs opérations quotidiennes." },
                { q: "L'IA peut-elle remplacer les agents immobiliers ?", a: "Non, l'IA augmente les capacités des agents plutôt que de les remplacer. Elle automatise les tâches répétitives et fournit des analyses data-driven pour une prise de décision plus rapide." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à intégrer l'IA dans votre immobilier ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForImmobilierFR;

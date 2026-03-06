import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building, TrendingUp, Search, Users, Bot, MapPin, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForPropTechFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "IA pour entreprises PropTech", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Conseil et automatisation IA pour les entreprises PropTech et immobilier technologique.", "url": "https://www.nlgconsulting.co/fr/ia-pour-proptech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA peut-elle aider les entreprises PropTech ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA aide les PropTech avec les estimations automatiques, la qualification de leads, le screening de locataires, l'analyse de marché, la génération de contenu et la prospection investisseurs." }},
        { "@type": "Question", "name": "Quels processus PropTech peuvent être automatisés ?", "acceptedAnswer": { "@type": "Answer", "text": "Qualification de leads, matching immobilier, recherche de marché, communication investisseurs, optimisation d'annonces, screening locataires et reporting de portefeuille." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour PropTech", "item": "https://www.nlgconsulting.co/fr/ia-pour-proptech" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour PropTech & Immobilier Tech | NLG Consulting</title>
        <meta name="description" content="Conseil et automatisation IA pour les entreprises PropTech. Estimations, qualification de leads, analyse de marché et automatisation opérationnelle." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-proptech" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-proptech" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">PropTech</Badge>
            <h1 className="mb-6">IA pour{" "}<span className="text-gradient">entreprises PropTech</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              L'immobilier technologique évolue rapidement. L'IA permet aux entreprises PropTech d'automatiser les estimations, qualifier les prospects intelligemment, analyser les marchés en temps réel et créer des expériences client différenciantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation IA PropTech <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Applications IA dans la PropTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Estimations automatiques", desc: "Modèles IA d'estimation immobilière basés sur les données de marché, les comparables et les tendances locales." },
                { icon: Users, title: "Qualification de leads", desc: "Scoring automatique des prospects et matching intelligent entre acheteurs/locataires et biens disponibles." },
                { icon: Search, title: "Analyse de marché", desc: "Veille automatisée des tendances immobilières, des prix et des opportunités d'investissement." },
                { icon: Bot, title: "Support intelligent", desc: "Chatbots IA pour répondre aux questions des prospects sur les biens, les financements et les processus." },
                { icon: TrendingUp, title: "Prospection investisseurs", desc: "Outreach automatisé et personnalisé pour attirer des investisseurs et partenaires stratégiques." },
                { icon: MapPin, title: "Optimisation d'annonces", desc: "Rédaction automatique de descriptions immobilières optimisées pour le SEO et la conversion." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise PropTech</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience directe dans la PropTech — travail avec des plateformes immobilières et des promoteurs", "Compréhension des cycles de vente immobiliers et des besoins spécifiques du secteur", "Implémentations IA conçues pour la conformité et la protection des données", "Systèmes de croissance adaptés aux marchés immobiliers locaux et internationaux", "Expérience avec les APIs immobilières et les plateformes de données", "Combinaison IA + stratégie business spécifiquement pour l'immobilier tech"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Transformez votre PropTech avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer les opportunités IA dans votre entreprise PropTech.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA peut-elle aider les entreprises PropTech ?", a: "L'IA aide les PropTech avec les estimations automatiques, la qualification de leads, le screening de locataires, l'analyse de marché et la prospection investisseurs." },
                { q: "Quels processus PropTech peuvent être automatisés ?", a: "Qualification de leads, matching immobilier, recherche de marché, communication investisseurs, optimisation d'annonces et reporting de portefeuille." },
                { q: "L'IA est-elle adaptée au secteur immobilier ?", a: "Absolument. L'IA est particulièrement efficace pour l'analyse de données immobilières, l'automatisation des processus répétitifs et la personnalisation de l'expérience client." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à intégrer l'IA dans votre PropTech ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForPropTechFR;

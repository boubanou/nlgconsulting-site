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
      { "@type": "Service", "name": "Systèmes de Croissance IA pour PropTech", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Systèmes de croissance, automatisation opérationnelle et infrastructure revenue pour entreprises PropTech et immobilier technologique.", "url": "https://www.nlgconsulting.co/fr/ia-pour-proptech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA accélère-t-elle les entreprises PropTech ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA permet aux PropTech d'automatiser la qualification de prospects, l'analyse de marché, le matching immobilier, la prospection investisseurs et les opérations — créant un levier opérationnel mesurable." }},
        { "@type": "Question", "name": "NLG a-t-elle une expertise concrète en PropTech ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Notre fondateur a construit et opéré des plateformes PropTech, écrit un livre de référence sur l'investissement immobilier fractionné, et conseille des entreprises PropTech internationales." }}
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
        <title>IA pour PropTech : Croissance & Opérations | NLG</title>
        <meta name="description" content="Systèmes de croissance IA pour PropTech. Qualification de leads, prospection investisseurs, automatisation opérationnelle et pipeline commercial. Par des opérateurs PropTech." />
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
            <h1 className="mb-6">Systèmes de croissance IA pour{" "}<span className="text-gradient">entreprises PropTech</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les PropTech qui scalent ont besoin de plus que de la technologie — elles ont besoin d'infrastructure revenue. Nous déployons des systèmes IA qui automatisent la qualification, structurent le pipeline investisseurs et créent un levier opérationnel durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique PropTech <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Systèmes IA conçus pour la PropTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Valorisation & analyse", desc: "Modèles IA d'estimation basés sur les données de marché, les comparables et les tendances locales — intégrés à vos flux de décision." },
                { icon: Users, title: "Qualification automatisée", desc: "Scoring intelligent des prospects et matching entre acheteurs, locataires ou investisseurs et biens disponibles — sans intervention manuelle." },
                { icon: Search, title: "Intelligence de marché", desc: "Veille automatisée des tendances immobilières, des prix et des opportunités — transformée en insights actionnables pour votre équipe." },
                { icon: Bot, title: "Engagement intelligent", desc: "Agents conversationnels formés sur vos produits immobiliers, capables de qualifier et engager les prospects 24/7." },
                { icon: TrendingUp, title: "Pipeline investisseurs", desc: "Outreach automatisé et personnalisé vers investisseurs et partenaires stratégiques — avec séquences multicanal et suivi CRM." },
                { icon: MapPin, title: "SEO & conversion", desc: "Descriptions immobilières optimisées pour le référencement et la conversion, générées à l'échelle sans perdre en qualité." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi travailler avec des opérateurs PropTech</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Notre fondateur a construit des plateformes PropTech, écrit 'Level Up in Fractional Real Estate' et opère dans l'espace immobilier tech", "Compréhension native des cycles de transaction, des relations investisseurs et des dynamiques de marché immobilier", "Systèmes IA conçus pour la conformité, la protection des données et les spécificités réglementaires du secteur", "Infrastructure de croissance adaptée aux marchés immobiliers locaux et internationaux", "Connecté à notre pratique de conseil PropTech et de développement de plateformes", "Approche opérateur : nous ne théorisons pas — nous exécutons avec la discipline d'entrepreneurs qui investissent leur propre capital"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Structurez votre croissance PropTech</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique avec un opérateur PropTech pour identifier les leviers IA les plus impactants pour votre plateforme.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA accélère-t-elle les entreprises PropTech ?", a: "L'IA automatise la qualification, l'analyse de marché, le matching immobilier, la prospection investisseurs et les opérations — créant un levier opérationnel qui permet de scaler sans augmenter les effectifs proportionnellement." },
                { q: "NLG a-t-elle une expertise concrète en PropTech ?", a: "Oui. Notre fondateur a construit et opéré des plateformes PropTech, publié un livre de référence sur l'investissement immobilier fractionné, et conseille des entreprises PropTech internationales depuis des années." },
                { q: "Aidez-vous avec la tokenisation et la propriété fractionnée ?", a: "Oui. Expertise approfondie en architecture de security tokens, conformité réglementaire, smart contracts et design de marketplaces. C'est au cœur de notre pratique PropTech." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à structurer votre croissance PropTech ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel avec un opérateur qui a construit des plateformes.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForPropTechFR;
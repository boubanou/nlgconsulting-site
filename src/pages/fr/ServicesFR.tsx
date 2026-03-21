import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Brain, DollarSign, Globe, Building2, Lightbulb, Rocket, BarChart3, CheckCircle, TrendingUp, Cpu, Layers } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ServicesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Systèmes de Croissance IA & Revenue Operations", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "url": "https://www.nlgconsulting.co/fr/services" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.nlgconsulting.co/fr/services" }
      ]}
    ]
  };

  const serviceCards = [
    { icon: <Brain className="w-8 h-8" />, title: "Conseil IA & Workflows", description: "Audit, stratégie d'adoption IA et déploiement de workflows intelligents connectés à vos opérations.", link: "/fr/conseil-ia", cta: "Explorer le conseil IA" },
    { icon: <Cpu className="w-8 h-8" />, title: "Agents IA & Automatisation", description: "Agents IA agentiques pour la vente, le marketing, les opérations et le support — déployés dans vos workflows métier.", link: "/fr/agents-ia-entreprise", cta: "Découvrir les agents IA" },
    { icon: <Target className="w-8 h-8" />, title: "Systèmes Outbound & Pipeline", description: "Infrastructure commerciale externalisée : SDR, prospection IA, séquences multicanal et architecture pipeline.", link: "/fr/vente", cta: "Structurer votre outbound" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Stratégie GTM & RevOps", description: "Structuration go-to-market, revenue operations et modèle commercial pour une croissance mesurable.", link: "/fr/strategie-go-to-market", cta: "Structurer votre GTM" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Conseil Stratégique", description: "Advisory opérateur : positionnement, modèle commercial, planification IA et architecture de systèmes de croissance.", link: "/fr/conseil", cta: "Réserver un appel" },
    { icon: <Layers className="w-8 h-8" />, title: "Automatisation IA", description: "Automatisation des workflows marketing, vente, contenu et opérations — connectée à vos outils existants.", link: "/fr/automatisation-ia", cta: "Automatiser vos workflows" },
    { icon: <Rocket className="w-8 h-8" />, title: "Sites Web & Assets SEO", description: "Sites web orientés conversion, systèmes SEO et assets digitaux qui génèrent du pipeline et de la visibilité.", link: "/fr/site-internet", cta: "Lancer votre site" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Marketing & Acquisition", description: "Systèmes de contenu IA, automatisation marketing, SEO et campagnes d'acquisition pour la croissance organique.", link: "/fr/marketing", cta: "Structurer votre marketing" }
  ];

  return (
    <>
      <Helmet>
        <title>Systèmes de Croissance IA & RevOps | NLG Consulting</title>
        <meta name="description" content="Systèmes de croissance IA, revenue operations et conseil stratégique pour FinTech, PropTech, SaaS et entreprises B2B. Conseil IA, agents agentiques, GTM et outbound." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/services" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/services" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/services" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/services" />
        <meta property="og:title" content="Systèmes de Croissance IA & RevOps | NLG Consulting" />
        <meta property="og:description" content="Systèmes de croissance IA, revenue operations et conseil stratégique pour FinTech, PropTech, SaaS et B2B." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Systèmes de Croissance IA & Revenue Operations</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nous aidons les entreprises FinTech, PropTech, SaaS et B2B à déployer des systèmes de croissance structurés — combinant conseil IA, agents agentiques, architecture GTM, infrastructure outbound et assets de conversion.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">De la stratégie dispersée à l'exécution structurée</h2>
            <p>La plupart des entreprises en croissance ne manquent pas d'outils ni d'idées — elles manquent d'exécution structurée. Les initiatives commerciales sont fragmentées, l'adoption de l'IA reste théorique, et la distance entre stratégie et résultats mesurables ne se réduit pas.</p>
            <p>NLG Consulting comble ce fossé. Nous combinons <Link to="/fr/conseil-ia" className="text-primary hover:underline font-medium">conseil IA</Link>, <Link to="/fr/conseil" className="text-primary hover:underline font-medium">advisory stratégique</Link>, <Link to="/fr/vente" className="text-primary hover:underline font-medium">infrastructure outbound</Link> et <Link to="/fr/automatisation-ia" className="text-primary hover:underline font-medium">automatisation de workflows</Link> pour créer des systèmes de croissance qui produisent des rendez-vous qualifiés et des résultats commerciaux mesurables.</p>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nos Capacités</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">Huit domaines intégrés pour structurer votre croissance et vos opérations commerciales.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((service, i) => (
                <Link to={service.link} key={i}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{service.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">{service.cta} <ArrowRight className="w-3 h-3" /></span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Pourquoi les dirigeants font confiance à NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Expérience d'opérateur", desc: "15+ ans à construire et scaler des entreprises en FinTech, PropTech et SaaS — pas de la théorie." },
                { title: "Exécution, pas des slides", desc: "Chaque engagement produit des résultats mesurables, pas des decks stratégiques inutilisés." },
                { title: "Portée internationale", desc: "Expérience opérationnelle en Europe, Amérique du Nord et Moyen-Orient." },
                { title: "IA connectée au business", desc: "Adoption IA pratique liée aux revenus, à l'efficacité opérationnelle et à la performance commerciale." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Discutons de votre structure de croissance</h2>
            <p className="text-lg opacity-90 mb-8">Si vous revoyez votre modèle commercial, votre stack d'automatisation ou votre rythme opérationnel — nous pouvons évaluer où la structure et l'IA peuvent améliorer vos performances.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default ServicesFR;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain,
  Workflow,
  Bot,
  Megaphone,
  TrendingUp,
  GraduationCap,
  Building2,
  Users,
  Zap,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  Target
} from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HomeFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "NLG Consulting",
        "alternateName": "N.L.G. Consulting Group",
        "url": "https://www.nlgconsulting.co/fr",
        "logo": "https://www.nlgconsulting.co/logo.svg",
        "description": "Systèmes de croissance propulsés par l'IA, revenue operations et conseil stratégique pour les entreprises FinTech, PropTech, SaaS et B2B.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Fondateur & CEO",
          "sameAs": "https://www.linkedin.com/in/gregorybrenig/"
        },
        "foundingDate": "2020",
        "areaServed": ["Europe", "North America", "Middle East"],
        "sameAs": ["https://www.linkedin.com/company/nlg-consulting/"],
        "knowsAbout": ["AI Consulting", "AI Automation", "AI Agents", "Agentic AI", "Revenue Operations", "B2B Lead Generation", "GTM Strategy", "Workflow Automation", "Outsourced SDR"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" }
        ]
      }
    ]
  };

  const clusters = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Conseil IA",
      description: "Stratégie IA concrète pour les opérations, la vente, le contenu et la croissance — liée à des résultats mesurables, pas des présentations.",
      link: "/fr/conseil-ia",
      cta: "Explorer le Conseil IA"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Automatisation de Workflows IA",
      description: "Conception et déploiement de workflows IA pour le marketing, la vente, les opérations et la production de contenu avec Claude, GPT, Make et des pipelines sur mesure.",
      link: "/fr/automation-ia",
      cta: "Explorer l'Automatisation"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Agents IA & Systèmes Agentiques",
      description: "Agents IA sur mesure construits sur Claude, GPT et des frameworks agentiques — recherche, prospection, contenu et workflows business multi-étapes.",
      link: "/fr/agents-ia-entreprise",
      cta: "Explorer les Agents IA"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Systèmes Marketing IA",
      description: "Moteurs de contenu IA, automatisation SEO, workflows réseaux sociaux et systèmes de campagnes qui scalent la production sans scaler les effectifs.",
      link: "/fr/automation-marketing-ia",
      cta: "Explorer le Marketing IA"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Ventes IA & RevOps",
      description: "Architecture outbound IA, systèmes pipeline, workflows CRM et revenue operations pour une génération constante de rendez-vous qualifiés.",
      link: "/fr/automation-commerciale-ia",
      cta: "Explorer les Ventes IA"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Prompt Engineering & Formation IA",
      description: "Formation pratique pour les équipes : conception de prompts, orchestration de workflows IA, Claude Code et adoption concrète de l'IA au quotidien.",
      link: "/fr/conseil-prompt-engineering",
      cta: "Explorer la Formation"
    }
  ];

  const existingServices = [
    { icon: <Users className="w-5 h-5" />, title: "Outbound & Lead Generation", description: "Systèmes outbound IA, infrastructure SDR externalisée et génération de rendez-vous B2B.", link: "/fr/vente" },
    { icon: <Zap className="w-5 h-5" />, title: "Sites de Conversion & SEO", description: "Sites web orientés revenus, landing pages et actifs SEO — conçus comme des outils business.", link: "/fr/site-internet" },
    { icon: <Target className="w-5 h-5" />, title: "Conseil Stratégique", description: "Structure GTM, modèle commercial, planification IA et stratégie de systèmes de croissance pour fondateurs.", link: "/fr/conseil" },
    { icon: <Building2 className="w-5 h-5" />, title: "Ventures & Plateformes", description: "Plateformes construites, testées et opérées en PropTech, FinTech et Média — exécution d'abord.", link: "/fr/ventures" },
  ];

  const logos = [
    { src: "/brands/hubspot.png", alt: "HubSpot" },
    { src: "/brands/notion.png", alt: "Notion" },
    { src: "/brands/aircall.png", alt: "Aircall" },
    { src: "/brands/deel.png", alt: "Deel" },
    { src: "/brands/payfit.png", alt: "PayFit" },
    { src: "/brands/revolut.png", alt: "Revolut" },
    { src: "/brands/qonto.png", alt: "Qonto" },
    { src: "/brands/wise.png", alt: "Wise" },
    { src: "/brands/alan.png", alt: "Alan" },
    { src: "/brands/nordesk.svg", alt: "Nordesk" },
    { src: "/brands/etoro.svg", alt: "eToro" },
    { src: "/brands/rapyd.svg", alt: "Rapyd" },
    { src: "/brands/linkedin.svg", alt: "LinkedIn" },
  ];

  return (
    <>
      <Helmet>
        <title>Systèmes de Croissance IA pour FinTech, PropTech & B2B | NLG Consulting</title>
        <meta name="description" content="Conseil IA, workflows agentiques, RevOps, stratégie GTM et infrastructure outbound pour les entreprises FinTech, PropTech, SaaS & B2B. Rendez-vous qualifiés et revenus mesurables." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr" />
        <meta property="og:title" content="Systèmes de Croissance IA pour FinTech, PropTech & B2B | NLG Consulting" />
        <meta property="og:description" content="Conseil IA, workflows agentiques, RevOps et infrastructure outbound pour les entreprises B2B." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Systèmes de Croissance IA pour FinTech, PropTech & B2B | NLG Consulting" />
        <meta name="twitter:description" content="Conseil IA, workflows agentiques, RevOps et infrastructure outbound pour les entreprises B2B." />
        <meta name="twitter:image" content="https://www.nlgconsulting.co/logo.svg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase">
                Conseil IA · RevOps · Systèmes de Croissance
              </Badge>
              <h1 className="text-foreground leading-[1.1] max-w-4xl mx-auto">
                Systèmes de Croissance IA pour{" "}
                <span className="text-gradient">FinTech, PropTech & B2B</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nous aidons les fondateurs et PME à déployer du conseil IA, des workflows agentiques, une structure GTM, du RevOps, des systèmes outbound et des actifs de conversion qui transforment la stratégie en rendez-vous qualifiés et revenus mesurables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/fr/rendez-vous">
                    Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/fr/services">
                    Explorer nos services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Systems Cluster */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Ce que nous construisons</p>
              <h2 className="mb-4">Systèmes IA, Infrastructure de Revenus & Opérations de Croissance</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Du conseil IA à l'automatisation de workflows en passant par les systèmes agentiques et les revenue operations — nous déployons l'IA dans des processus business réels qui génèrent des résultats commerciaux.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters.map((cluster, i) => (
                <Link to={cluster.link} key={i} className="group">
                  <Card className="h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {cluster.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{cluster.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cluster.description}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        {cluster.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why NLG */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-6">Exécution d'opérateur, pas de la théorie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              La plupart des entreprises savent qu'elles ont besoin d'IA et de meilleurs systèmes commerciaux — mais ne savent pas par où commencer, quoi prioriser, ni comment exécuter sans perturber les opérations. Nous faisons le pont entre stratégie et performance business mesurable.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { title: "IA orientée business", desc: "Chaque engagement commence par vos objectifs commerciaux — pas la technologie. Nous déployons workflows IA, agents et automatisation liés au pipeline, aux revenus et à l'efficacité opérationnelle." },
                { title: "Construit par des opérateurs", desc: "Nous avons construit et scalé des entreprises en PropTech, FinTech, SaaS et Média. C'est de l'expérience opérationnelle concrète appliquée à vos défis de croissance — pas du conseil académique." },
                { title: "De la stratégie à l'exécution", desc: "Du conseil IA à l'infrastructure outbound, de l'architecture CRM aux sites de conversion — nous gérons le cycle complet. Externalisez vos systèmes de croissance sans monter une équipe en partant de zéro." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Systems CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Votre équipe externe IA & opérations de croissance</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Pas d'équipe IA en interne ? Pas de RevOps structuré ? Nous opérons comme votre département externe de systèmes de croissance — déploiement de workflows IA, construction d'infrastructure outbound et gestion des revenue operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/implementation-ia-externalisee">
                  Explorer l'IA externalisée <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="text-base px-8">
                <Link to="/fr/rendez-vous">Réserver un appel</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Au-delà de l'IA</p>
              <h2 className="mb-4">Systèmes Outbound, Actifs de Conversion & Conseil Stratégique</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nous construisons et opérons également l'infrastructure outbound, les sites web orientés revenus et le conseil stratégique pour les fondateurs en phase de croissance, monétisation et positionnement marché.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {existingServices.map((service, i) => (
                <Link to={service.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-10">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Réseau professionnel</p>
              <h2 className="mb-3">Opérations multi-sectorielles</h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-medium">91 avis vérifiés</span>
              </div>
            </div>
            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2500, stopOnInteraction: true })]} className="w-full mb-6">
              <CarouselContent className="-ml-4">
                {logos.map((logo, i) => (
                  <CarouselItem key={i} className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="rounded-xl border bg-card p-6 flex items-center justify-center h-20 hover:shadow-sm transition-all">
                      <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <p className="text-xs text-muted-foreground text-center">Les logos représentent des entreprises où nos membres ont une expérience professionnelle.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">Résultats clients</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "NLG a restructuré toute notre architecture outbound. On est passé d'initiatives dispersées à un système générant 20+ rendez-vous qualifiés par mois.", name: "CEO", company: "SaaS Série A" },
                { quote: "La combinaison workflows IA, site de conversion et SEO nous a donné un moteur commercial complet — déployé en semaines, pas en mois.", name: "Fondateur", company: "Plateforme FinTech" },
                { quote: "Leur conseil stratégique sur le GTM et les revenue operations a été déterminant pour notre entrée sur le marché européen. Focalisé sur l'exécution, pas juste des frameworks.", name: "VP Sales", company: "Scale-up PropTech" }
              ].map((testimonial, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-medium text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container-tight">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                <img src="/images/gregory-brenig.jpg" alt="Gregory Brenig — Fondateur de NLG Consulting" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Fondé par</p>
                <h3 className="text-xl font-semibold mb-2">Gregory Brenig</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Plus de 15 ans à construire des ventures et des systèmes de croissance en PropTech, FinTech et technologie. Opérateur, auteur et conseiller stratégique aidant les entreprises à déployer de l'infrastructure de revenus propulsée par l'IA et à passer d'initiatives dispersées à une exécution commerciale structurée.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link to="/fr/a-propos">À propos de Gregory <ArrowRight className="ml-2 w-3.5 h-3.5" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Construisez votre système de croissance</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Réservez un appel stratégique pour discuter de votre adoption IA, architecture outbound, revenue operations ou défis de performance commerciale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/fr/rendez-vous">
                  <Calendar className="mr-2 w-4 h-4" /> Réserver un appel stratégique
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/fr/contact">
                  <Phone className="mr-2 w-4 h-4" /> Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default HomeFR;

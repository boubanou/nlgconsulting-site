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
  Globe,
  Rocket,
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
        "description": "Conseil en IA, automatisation et systèmes de croissance pour les entreprises B2B. Stratégie, implémentation et exécution IA externalisée pour dirigeants et fondateurs du monde entier.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Fondateur & CEO",
          "sameAs": "https://www.linkedin.com/in/gregorybrenig/"
        },
        "foundingDate": "2020",
        "areaServed": ["Europe", "North America", "Middle East"],
        "sameAs": ["https://www.linkedin.com/company/nlg-consulting/"],
        "knowsAbout": ["AI Consulting", "AI Automation", "AI Agents", "B2B Lead Generation", "Prompt Engineering", "Go-To-Market Strategy", "Business Process Automation", "Outsourced AI Implementation"]
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
      description: "Accompagnement stratégique en IA pour les entreprises en transformation vers des opérations intelligentes.",
      link: "/fr/conseil-ia",
      cta: "Explorer le Conseil IA"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Automatisation IA",
      description: "Automatisation de bout en bout — du marketing et de la vente aux opérations et au contenu.",
      link: "/fr/automation-ia",
      cta: "Explorer l'Automatisation"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Agents IA",
      description: "Agents IA sur mesure qui gèrent vente, marketing, contenu et opérations de façon autonome.",
      link: "/fr/agents-ia-entreprise",
      cta: "Explorer les Agents IA"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing IA",
      description: "Création de contenu, SEO, réseaux sociaux et gestion de campagnes automatisés par l'IA.",
      link: "/fr/automation-marketing-ia",
      cta: "Explorer le Marketing IA"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Ventes IA",
      description: "SDR IA, outbound, prise de rendez-vous et automatisation pipeline pour la croissance B2B.",
      link: "/fr/automation-commerciale-ia",
      cta: "Explorer les Ventes IA"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Prompt Engineering",
      description: "Conseil et formation expert en conception de prompts, workflows IA et montée en compétences.",
      link: "/fr/conseil-prompt-engineering",
      cta: "Explorer la Formation"
    }
  ];

  const existingServices = [
    { icon: <Users className="w-5 h-5" />, title: "Vente & BD", description: "SDR externalisé, outbound multicanal et systèmes pipeline.", link: "/fr/vente" },
    { icon: <Zap className="w-5 h-5" />, title: "Studio Web", description: "Sites web prêts à générer du revenu livrés en 72 heures.", link: "/fr/site-internet" },
    { icon: <Target className="w-5 h-5" />, title: "Conseil", description: "Accompagnement stratégique GTM, monétisation et scaling.", link: "/fr/conseil" },
    { icon: <Building2 className="w-5 h-5" />, title: "Ventures", description: "Plateformes que nous construisons et opérons en PropTech, FinTech et Média.", link: "/fr/ventures" },
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
        <title>Conseil IA & Automatisation pour entreprises | NLG Consulting</title>
        <meta name="description" content="Conseil en IA, systèmes d'automatisation et implémentation externalisée pour les entreprises B2B. Stratégie, agents IA, prompt engineering et systèmes de croissance. Réservez un appel gratuit." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr" />
        <meta property="og:title" content="Conseil IA & Automatisation pour entreprises | NLG Consulting" />
        <meta property="og:description" content="Conseil en IA, systèmes d'automatisation et implémentation externalisée pour les entreprises B2B. Stratégie, agents IA, prompt engineering et systèmes de croissance." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conseil IA & Automatisation pour entreprises | NLG Consulting" />
        <meta name="twitter:description" content="Conseil en IA, systèmes d'automatisation et implémentation externalisée pour les entreprises B2B." />
        <meta name="twitter:image" content="https://www.nlgconsulting.co/logo.svg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero — Premium, calm, strategic */}
        <section className="pt-32 md:pt-40 pb-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase">
                Conseil IA · Automatisation · Implémentation
              </Badge>
              <h1 className="text-foreground leading-[1.1] max-w-4xl mx-auto">
                Nous aidons les entreprises à comprendre, déployer et scaler des{" "}
                <span className="text-gradient">systèmes IA</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Conseil stratégique en IA, automatisation de workflows, agents IA et implémentation externalisée — pour fondateurs, dirigeants et équipes de croissance dans le monde entier.
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

        {/* What We Do — AI Cluster Navigation */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Ce que nous faisons</p>
              <h2 className="mb-4">Systèmes Business propulsés par l'IA</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                De la stratégie à l'exécution — nous aidons les entreprises à intégrer l'IA dans leur marketing, ventes, opérations et infrastructure de croissance.
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

        {/* Strategic Positioning Statement */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-6">Pourquoi les entreprises choisissent NLG</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              La plupart des entreprises savent qu'elles ont besoin de l'IA — mais peinent à savoir par où commencer, quoi prioriser et comment implémenter sans perturber les opérations. Nous faisons le pont entre stratégie IA et exécution concrète.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { title: "Stratégie d'abord", desc: "Nous partons de vos objectifs business — pas de la technologie. Chaque engagement commence par une feuille de route claire liée à des résultats mesurables." },
                { title: "Dirigé par des opérateurs", desc: "Notre équipe a construit et développé des entreprises. Nous apportons une expérience opérationnelle en PropTech, FinTech, SaaS et Média — pas seulement de la théorie." },
                { title: "Exécution complète", desc: "Du conseil à l'implémentation, nous gérons tout le cycle. Externalisez l'exécution IA sans recruter une équipe complète." }
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

        {/* Outsourced AI Implementation CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Implémentation IA externalisée</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Pas d'équipe IA en interne ? Nous agissons comme votre département IA externe — déploiement d'automatisations, création d'agents et gestion de systèmes pour que vous n'ayez pas à le faire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/implementation-ia-externalisee">
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="text-base px-8">
                <Link to="/fr/rendez-vous">Réserver un appel</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Existing Services — Compact */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Aussi</p>
              <h2 className="mb-4">Vente, Studio & Conseil</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Au-delà de l'IA — nous opérons des infrastructures de vente, créons des sites web et fournissons du conseil stratégique.
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

        {/* Trust Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-10">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Ils nous font confiance</p>
              <h2 className="mb-3">Des leaders de l'industrie nous font confiance</h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-medium">91 avis vérifiés</span>
              </div>
            </div>
            
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2500, stopOnInteraction: true })]}
              className="w-full mb-6"
            >
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
            <p className="text-xs text-muted-foreground text-center">
              Les logos représentent des entreprises où nos membres ont une expérience professionnelle.
            </p>
          </div>
        </section>

        {/* What Clients Say */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">Ce que disent nos clients</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "NLG a transformé notre stratégie outbound. Nous sommes passés de 0 à 20 rendez-vous qualifiés par mois.", name: "CEO Startup Tech", company: "SaaS Série A" },
                { quote: "Le site web a été livré en 3 jours avec Stripe, Calendly et SEO — tout fonctionne parfaitement.", name: "Fondateur Agence", company: "Agence Digitale" },
                { quote: "Leur conseil stratégique sur le go-to-market a été précieux pour notre expansion européenne.", name: "VP Sales", company: "Scale-up FinTech" }
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

        {/* Founder Positioning — Brief */}
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
                  Plus de 15 ans à construire des ventures en PropTech, FinTech et technologie. Auteur, opérateur et conseiller stratégique qui aide les entreprises à déployer des systèmes IA générant une croissance mesurable.
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
            <h2 className="mb-4">Prêt à déployer l'IA dans votre entreprise ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Réservez un appel stratégique gratuit de 15 minutes. Nous discuterons de vos défis et tracerons une feuille de route IA claire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/fr/rendez-vous">
                  <Calendar className="mr-2 w-4 h-4" /> Réserver un appel
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

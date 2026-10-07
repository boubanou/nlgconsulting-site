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
import BusinessValueEngine from "@/components/BusinessValueEngine";
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
        "description": "IA, automatisation et systèmes de croissance pour petites entreprises, indépendants et entreprises en développement. NLG identifie où la technologie peut faire gagner du temps, réduire les coûts, augmenter les revenus et améliorer la performance — puis la met en place.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Fondateur & CEO",
          "sameAs": "https://www.linkedin.com/in/gregorybrenig/"
        },
        "foundingDate": "2020",
        "areaServed": ["Europe", "North America", "Middle East"],
        "sameAs": ["https://www.linkedin.com/company/nlg-consulting/"],
        "knowsAbout": ["Conseil IA", "Automatisation IA", "Automatisation des processus", "Agents IA", "IA pour PME", "Croissance du chiffre d'affaires", "Automatisation commerciale", "Revenue Operations", "Génération de leads B2B", "Stratégie GTM", "Efficacité opérationnelle"]
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
      icon: <Workflow className="w-6 h-6" />,
      title: "Gagner du Temps & Automatiser",
      description: "Supprimez les tâches répétitives, simplifiez le quotidien et connectez les outils que vous utilisez déjà. Nous identifions ce qui mérite d'être automatisé et le construisons pour vous.",
      link: "/fr/automation-ia",
      cta: "Voir les Solutions d'Automatisation"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Augmenter les Revenus & la Conversion",
      description: "Utilisez l'IA et des systèmes de croissance structurés pour améliorer la prospection, le suivi, la qualification, la conversion et la performance commerciale.",
      link: "/fr/vente",
      cta: "Explorer les Systèmes de Revenus"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Optimiser & Faire Grandir l'Entreprise",
      description: "Améliorez les processus, les marges, la prise de décision et la croissance sans ajouter de complexité inutile ni augmenter les effectifs proportionnellement.",
      link: "/fr/conseil",
      cta: "Explorer le Conseil Stratégique"
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
        <title>IA & Automatisation pour PME, Indépendants & Entreprises en Croissance | NLG</title>
        <meta name="description" content="Utilisez l'IA et l'automatisation pour gagner du temps, réduire les coûts, augmenter les revenus et améliorer la performance. NLG identifie les opportunités et met les systèmes en place pour vous." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr" />
        <meta property="og:title" content="IA & Automatisation qui Créent Plus de Valeur pour Votre Entreprise | NLG" />
        <meta property="og:description" content="Pas besoin de devenir expert en IA. Nous identifions où l'IA et l'automatisation peuvent faire gagner du temps, réduire les coûts, augmenter les revenus et améliorer la performance — puis nous les mettons en place." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IA & Automatisation qui Créent de la Valeur | NLG Consulting" />
        <meta name="twitter:description" content="Gagnez du temps, réduisez les coûts, augmentez les revenus et améliorez la performance avec une IA mise en place pour vous." />
        <meta name="twitter:image" content="https://www.nlgconsulting.co/logo.svg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="hero-tech-grid relative overflow-hidden px-4 pb-16 pt-28 sm:pt-32 md:pb-20 md:pt-40">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/[0.035] to-transparent" aria-hidden="true" />
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div className="min-w-0 text-center lg:text-left">
                <Badge variant="outline" className="max-w-full px-3 py-2 text-[10px] tracking-[0.12em] sm:px-4 sm:text-xs sm:tracking-wide uppercase">
                  IA & Automatisation · Croissance · Performance
                </Badge>
                <h1 className="mt-6 text-foreground leading-[1.06] sm:mt-7">
                  Faites Travailler l'IA pour Votre Entreprise —{" "}
                  <span className="text-gradient">Sans Devenir Expert en IA</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:mx-0">
                  Expliquez-nous comment fonctionne votre entreprise et ce que vous voulez améliorer. Nous identifions où l'IA, l'automatisation et les systèmes de croissance peuvent faire gagner du temps, réduire les coûts, augmenter les revenus ou améliorer la performance — puis nous les mettons en place pour vous.
                </p>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
                  Pour PME, indépendants, cabinets et entreprises en croissance — avec une expertise spécialisée en FinTech, PropTech, SaaS et B2B.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Button asChild size="lg" className="w-full text-sm sm:w-auto sm:text-base">
                    <Link to="/fr/rendez-vous">
                      Dites-nous ce que vous voulez améliorer <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full text-sm sm:w-auto sm:text-base">
                    <Link to="/fr/automation-ia">Voir ce que nous pouvons automatiser</Link>
                  </Button>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm lg:justify-start">
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-secondary" /> Business d'abord</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-secondary" /> Construit pour vous</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-secondary" /> Résultats mesurables</span>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[520px] lg:max-w-none">
                <BusinessValueEngine lang="fr" />
              </div>
            </div>
          </div>
        </section>

        {/* AI Systems Cluster */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Commencez par le Résultat Business</p>
              <h2 className="mb-4">Qu'Avez-Vous Envie d'Améliorer ?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Vous n'avez pas besoin de choisir un outil IA ni de comprendre la stack technique. Commencez par le résultat que vous voulez obtenir — nous déterminons où la technologie crée le plus de valeur.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters.map((cluster, i) => (
                <Link to={cluster.link} key={i} className="group">
                  <Card className="h-full border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
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
            <h2 className="mb-6">Vous N'Avez Pas Besoin de Comprendre l'IA pour en Profiter</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
              Quand vous avez besoin de vous déplacer, vous achetez une voiture — vous ne passez pas des semaines à apprendre à construire le moteur. Avec l'IA et l'automatisation, c'est pareil.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Ne perdez pas des jours à comparer des outils, regarder des tutoriels et essayer de connecter des systèmes complexes. Concentrez-vous sur votre métier. Nous identifions les opportunités, choisissons la technologie, construisons le système et le rendons utile.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { title: "Valeur Business d'Abord", desc: "Nous partons du temps, des coûts, du chiffre d'affaires, des marges et de la performance — pas d'un outil IA à la mode. La technologie n'est retenue que si elle crée une vraie valeur." },
                { title: "Pensé pour les Non-Techniciens", desc: "Vous nous expliquez votre activité. Nous traduisons cela en automatisations et systèmes IA concrets sans vous obliger à maîtriser la complexité technique." },
                { title: "De l'Opportunité à l'Implémentation", desc: "Nous ne nous arrêtons pas aux recommandations. Nous concevons, construisons, connectons et lançons les systèmes — puis nous mesurons ce qu'ils améliorent." }
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

        {/* Automation Sprint CTA */}
        <section className="relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:py-20">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_28%),radial-gradient(circle_at_80%_70%,hsl(var(--secondary))_0,transparent_24%)]" aria-hidden="true" />
          <div className="container-tight relative text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] opacity-80 sm:text-sm">Une Première Étape Simple</p>
            <h2 className="mb-4 text-primary-foreground">Commencez par un Workflow Réel</h2>
            <p className="mx-auto mb-4 max-w-2xl text-base opacity-90 sm:text-lg">
              Notre AI Automation Sprint couvre un workflow précisément défini. Nous cartographions le processus, choisissons les bons outils, construisons une première version fonctionnelle lorsque les accès le permettent et documentons le passage en production.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-sm opacity-80">
              Aucun engagement long. Pas besoin de devenir spécialiste de l'IA. Commencez petit, mesurez la valeur, puis étendez uniquement si cela a du sens.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" variant="secondary" className="w-full text-sm sm:w-auto sm:text-base">
                <Link to="/fr/automation-ia">
                  Découvrir l'Automation Sprint <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="w-full text-sm sm:w-auto sm:text-base">
                <Link to="/fr/rendez-vous">Parler de Votre Workflow</Link>
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
            <h2 className="mb-4">Où l'IA Peut-Elle Créer Plus de Valeur dans Votre Entreprise ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vous n'avez pas besoin d'avoir un problème pour profiter de l'IA. Nous pouvons identifier des opportunités pour gagner du temps, améliorer les marges, générer plus de revenus, renforcer l'expérience client ou simplement mieux fonctionner.
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

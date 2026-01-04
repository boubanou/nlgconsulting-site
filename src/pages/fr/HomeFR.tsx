import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Building2, 
  Rocket, 
  TrendingUp, 
  Users, 
  Zap,
  CheckCircle,
  Star,
  Calendar,
  Phone
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
        "url": "https://nlgconsulting.co/fr",
        "logo": "https://nlgconsulting.co/logo.svg",
        "description": "NLG Consulting est un groupe mondial Business, Tech & Croissance qui construit, opère et scale des plateformes, marques et systèmes de vente dans le monde entier."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" }
        ]
      }
    ]
  };

  const pillars = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Ventures & Marques",
      description: "Construction et exploitation de plateformes PropTech, FinTech et Média à l'international.",
      link: "/fr/ventures"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Studio",
      description: "Sites web prêts à générer du revenu et systèmes d'automatisation livrés en 72 heures.",
      link: "/fr/site-internet"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vente & BD",
      description: "Systèmes outbound, équipes SDR et infrastructure pipeline pour votre croissance.",
      link: "/fr/vente"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Conseil",
      description: "Accompagnement stratégique : go-to-market, scaling et transformation tech.",
      link: "/fr/conseil"
    }
  ];

  const ventures = [
    { name: "Block Tech", type: "PropTech / FinTech SaaS", logo: "/brands/blocktech.png" },
    { name: "Business Legend", type: "Média & Podcast", logo: "/brands/businesslegend.png" }
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
        <title>NLG Consulting | Génération de Leads B2B, Sites Web en 72h, Conseil Stratégique</title>
        <meta 
          name="description" 
          content="NLG Consulting : 15-30 rendez-vous B2B qualifiés par mois, sites web prêts à convertir en 72 heures, et conseil stratégique pour les dirigeants. Expertise PropTech, FinTech, IA." 
        />
        <meta name="keywords" content="génération de leads B2B, développement commercial, création site internet, conseil stratégique, PropTech, FinTech, conseil IA, croissance startup" />
        <link rel="canonical" href="https://nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/fr" />
        <meta property="og:title" content="NLG Consulting | Génération de Leads B2B, Sites Web, Conseil" />
        <meta property="og:description" content="15-30 rendez-vous B2B qualifiés par mois, sites web en 72 heures, et conseil stratégique pour les dirigeants." />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Groupe mondial Business, Tech & Croissance
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Construire, Opérer & Scaler<br />
                <span className="text-gradient">des Plateformes Mondiales</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                PropTech • FinTech • Média • IA & Automatisation • Blockchain • Systèmes de Vente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/fr/rendez-vous">
                    Développez votre pipeline <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/fr/site-internet">
                    Votre site web en 72h <Rocket className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ⏱️ Places limitées — Nous n'intégrons que 3 nouveaux clients par mois
              </p>
            </div>
          </div>
        </section>

        {/* What We Do - 4 Pillars */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nous faisons</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un groupe complet couvrant ventures, technologie, vente et stratégie.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <Link to={pillar.link} key={i}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ventures Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ventures & Marques</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Plateformes que nous avons construites, opérons et développons dans plusieurs secteurs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ventures.map((venture, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <img src={venture.logo} alt={venture.name} className="h-12 w-auto object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{venture.name}</h3>
                      <p className="text-muted-foreground text-sm">{venture.type}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/fr/ventures">Voir tous les ventures <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Studio CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lancez votre site web en 72 heures
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Sites web prêts à générer du revenu avec design UX, copywriting conversion, SEO, CRM, paiements Stripe et workflows IA — livrés rapidement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/site-internet">
                  Voir les offres <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="text-base px-8">
                <Link to="/fr/rendez-vous">Réserver un appel</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sales & BD */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Vente & Développement Commercial</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Génération de leads outbound, systèmes SDR multicanaux et infrastructure pipeline CRM pour accélérer votre croissance.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Génération de leads", "Outbound multicanal", "Systèmes SDR", "Pipelines CRM", "IA Calling"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/fr/vente">Audit commercial gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">15-30</div>
                    <div className="text-sm text-muted-foreground">RDV qualifiés / mois</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Canaux</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                {["Go-to-Market", "Monétisation", "Stratégie Tech", "Scaling"].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-4 text-center">
                      <span className="font-medium">{item}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Conseil & Stratégie</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Accompagnement stratégique pour la structuration, le go-to-market, la stratégie IA & blockchain, et le scaling international.
                </p>
                <Button asChild>
                  <Link to="/fr/conseil">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">La confiance des leaders du marché</h2>
              <p className="text-lg text-muted-foreground">
                Nous avons travaillé avec des équipes des plus grandes entreprises mondiales
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">91 avis vérifiés</span>
              </div>
            </div>
            
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
              className="w-full mb-8"
            >
              <CarouselContent className="-ml-4">
                {logos.map((logo, i) => (
                  <CarouselItem key={i} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="rounded-2xl border bg-white/50 dark:bg-white/5 p-8 flex items-center justify-center h-28 hover:shadow-lg transition-all">
                      <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <p className="text-sm text-muted-foreground text-center italic">
              Les logos représentent des entreprises où nos membres ou partenaires ont une expérience professionnelle.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce que disent nos clients</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "NLG a transformé notre stratégie outbound. Nous sommes passés de 0 à 20 rendez-vous qualifiés par mois.", name: "CEO Startup Tech", company: "SaaS Série A" },
                { quote: "Le site web a été livré en 3 jours avec Stripe, Calendly et SEO — tout fonctionne parfaitement.", name: "Fondateur Agence", company: "Agence Digitale" },
                { quote: "Leur conseil stratégique sur le go-to-market a été précieux pour notre expansion européenne.", name: "VP Sales", company: "Scale-up FinTech" }
              ].map((testimonial, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à accélérer ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Réservez un appel stratégique de 15 minutes pour discuter de vos défis de croissance.
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

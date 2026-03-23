import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Building2, Radio, Dumbbell, Globe, BookOpen } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const VenturesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Venture Studio & Portefeuille | NLG Consulting",
        "description": "Plateformes construites et opérées par NLG Consulting dans la PropTech, FinTech, Média et Lifestyle. Un modèle de venture studio axé sur l'exécution.",
        "url": "https://www.nlgconsulting.co/fr/ventures"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Ventures", "item": "https://www.nlgconsulting.co/fr/ventures" }
        ]
      }
    ]
  };

  const ventures = [
    {
      name: "Block Tech",
      type: "PropTech / FinTech SaaS",
      icon: <Building2 className="w-8 h-8" />,
      logo: "/brands/blocktech.png",
      description: "Plateforme SaaS reliant immobilier et technologie financière — permettant la propriété fractionnée, la tokenisation et des workflows d'investissement immobilier structurés.",
      why: "L'investissement immobilier reste fragmenté et capitalistique. Block Tech crée des points d'entrée accessibles et structurés grâce à la technologie.",
      role: "Fondé, construit et opéré par NLG. Développement produit, stratégie GTM et scaling gérés en interne.",
      link: "https://block-tech.co"
    },
    {
      name: "FractionalPropertyHub",
      type: "Marketplace & Lead Engine",
      icon: <Globe className="w-8 h-8" />,
      logo: "/brands/fractionalpropertyhub.png",
      description: "Marketplace connectant les investisseurs aux opportunités d'immobilier fractionné. Moteur de génération de leads pour promoteurs et plateformes d'investissement.",
      why: "Les investisseurs ont besoin d'un accès curatif aux opportunités fractionnées. Les promoteurs ont besoin de leads qualifiés à forte intention.",
      role: "Construit et scalé par NLG comme système d'acquisition de revenus et marketplace.",
      link: "https://fractionalpropertyhub.com"
    },
    {
      name: "Business Legend",
      type: "Média & Podcast",
      icon: <Radio className="w-8 h-8" />,
      logo: "/brands/businesslegend.png",
      description: "Marque média proposant des récits d'opérateurs, des insights business et des interviews d'experts. Plateforme de contenu pour fondateurs et dirigeants.",
      why: "Les récits authentiques d'opérateurs créent confiance et autorité. Business Legend codifie l'expérience d'exécution réelle en contenu.",
      role: "Stratégie de contenu, production et distribution gérées par NLG.",
      link: "https://businesslegend.co"
    },
    {
      name: "STEAD",
      type: "Sports & Lifestyle",
      icon: <Dumbbell className="w-8 h-8" />,
      logo: "/brands/stead.png",
      description: "Marque sports et lifestyle axée sur la performance, la discipline et les professionnels actifs.",
      why: "Le lifestyle reflète la philosophie opérationnelle. STEAD incarne la discipline et la précision que nous apportons au business.",
      role: "Développement de marque et opérations par NLG.",
      link: null,
      comingSoon: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Venture Studio & Portefeuille | NLG Consulting</title>
        <meta name="description" content="Plateformes construites et opérées par NLG Consulting dans la PropTech, FinTech, Média et Lifestyle. Venture studio axé sur l'exécution et la performance." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ventures" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ventures" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ventures" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ventures" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/ventures" />
        <meta property="og:title" content="Venture Studio & Portefeuille | NLG Consulting" />
        <meta property="og:description" content="Plateformes construites et opérées par NLG Consulting dans la PropTech, FinTech et Média." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Venture Studio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plateformes Construites & Actifs de Revenus
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              NLG Consulting opère à la fois comme cabinet de conseil et venture studio — construisant, opérant et scalant des entreprises technologiques dans la PropTech, FinTech, Média et Lifestyle.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Un Modèle de Venture Axé sur l'Exécution</h2>
              <p>
                Contrairement aux cabinets de conseil traditionnels, NLG investit expertise opérationnelle, capital et systèmes dans la construction de son propre portefeuille d'entreprises. Chaque venture suit une méthodologie constante : identifier une inefficience de marché, construire avec la technologie en premier, lancer avec une infrastructure de revenus dès le premier jour, et itérer sur la base de la performance commerciale.
              </p>
              <p>
                Cette approche crée une boucle de feedback directe entre notre pratique de <Link to="/fr/conseil" className="text-primary hover:underline font-medium">conseil stratégique</Link> et l'exécution réelle. Les enseignements du scaling de Block Tech informent notre accompagnement des clients PropTech. Les systèmes de revenus conçus pour FractionalPropertyHub façonnent les <Link to="/fr/automatisation-ia" className="text-primary hover:underline font-medium">workflows d'automatisation IA</Link> que nous déployons pour les entreprises B2B.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl space-y-12">
            {ventures.map((venture, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="bg-muted/50 p-8 flex flex-col items-center justify-center text-center">
                      {venture.logo ? (
                        <img src={venture.logo} alt={venture.name} className="h-16 w-auto mb-4 object-contain" />
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                          {venture.icon}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold">{venture.name}</h3>
                      <Badge variant="secondary" className="mt-2">{venture.type}</Badge>
                    </div>
                    <div className="md:col-span-2 p-8 space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Plateforme</h4>
                        <p className="text-foreground">{venture.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Thèse</h4>
                        <p className="text-foreground">{venture.why}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Rôle Opérationnel</h4>
                        <p className="text-foreground">{venture.role}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                        {venture.link && !venture.comingSoon ? (
                          <Button asChild variant="default">
                            <a href={venture.link} target="_blank" rel="noopener noreferrer">
                              Visiter la plateforme <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                        ) : venture.comingSoon ? (
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Bientôt disponible</Badge>
                        ) : null}
                        <Button asChild variant="outline">
                          <Link to="/fr/rendez-vous">Discuter d'un partenariat <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-2 border-primary/30">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="bg-muted/50 p-8 flex flex-col items-center justify-center text-center">
                    <img src="/images/book-cover.jpg" alt="Level Up in Fractional Real Estate par Gregory Brenig" className="w-40 h-auto rounded-lg shadow-xl mb-4" />
                    <Badge variant="secondary" className="mt-2">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Publication
                    </Badge>
                  </div>
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Level Up in Fractional Real Estate</h3>
                      <p className="text-primary font-medium">Un cadre stratégique pour la propriété fractionnée, la tokenisation et les modèles d'investissement immobilier modernes.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">À propos du livre</h4>
                      <p className="text-foreground">
                        Écrit par Gregory Brenig, ce guide codifie l'expérience opérationnelle en immobilier fractionné — couvrant les structures d'investissement, l'infrastructure technologique, les considérations réglementaires et la stratégie go-to-market pour les plateformes immobilières.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                      <Button asChild variant="default">
                        <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">
                          Disponible sur Amazon <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/fr/a-propos">À propos de l'auteur <ArrowRight className="ml-2 w-4 h-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Philosophie Opérationnelle</h2>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Technologie d'Abord, Revenus d'Abord</h3>
              <p>
                Chaque venture est construite sur une infrastructure technologique moderne — des workflows IA aux systèmes de leads automatisés. Les mêmes cadres de <Link to="/fr/conseil-ia" className="text-primary hover:underline font-medium">consulting IA</Link> que nous appliquons à nos clients sont d'abord testés dans notre propre portefeuille.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Portée Internationale, Exécution Locale</h3>
              <p>
                Nos ventures opèrent en Europe, Amérique du Nord et Moyen-Orient. Cette empreinte internationale nourrit notre <Link to="/fr/strategie-go-to-market" className="text-primary hover:underline font-medium">consulting go-to-market</Link> — nous comprenons les nuances réglementaires et comportementales par expérience directe.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Exécution Avant Théorie</h3>
              <p>
                Chaque venture génère des revenus et sert de vrais clients. Cette crédibilité d'opérateur est ce qui distingue notre travail d'accompagnement — nous construisons des <Link to="/fr/services" className="text-primary hover:underline font-medium">systèmes de croissance</Link> que nous utilisons nous-mêmes avant de les recommander.
              </p>
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="ventures" />

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Explorer un Partenariat</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Si vous construisez dans la PropTech, FinTech ou technologie B2B et cherchez un partenaire aligné sur l'exécution, nous accueillons la conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/fr/rendez-vous">Réserver un appel <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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

export default VenturesFR;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Building2, Radio, Dumbbell, Globe, BookOpen } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const VenturesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Ventures & Marques | NLG Consulting",
        "description": "Découvrez le portefeuille de ventures de NLG Consulting dans la PropTech, FinTech, Média et Lifestyle.",
        "url": "https://nlgconsulting.co/fr/ventures"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Ventures", "item": "https://nlgconsulting.co/fr/ventures" }
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
      description: "Une plateforme SaaS reliant l'immobilier et la technologie financière. Block Tech permet la propriété fractionnée, la tokenisation et des workflows d'investissement immobilier simplifiés.",
      why: "L'investissement immobilier est fragmenté et inaccessible. Block Tech démocratise l'accès aux actifs immobiliers grâce à la technologie.",
      role: "Fondé, construit et opéré par NLG. Nous gérons le développement produit, le go-to-market et le scaling.",
      link: "https://block-tech.co"
    },
    {
      name: "FractionalPropertyHub",
      type: "Marketplace & Lead Gen",
      icon: <Globe className="w-8 h-8" />,
      logo: "/brands/fractionalpropertyhub.png",
      description: "Une marketplace connectant les investisseurs aux opportunités d'immobilier fractionné. Moteur de génération de leads pour les promoteurs et plateformes d'investissement.",
      why: "Les investisseurs peinent à trouver des opportunités fractionnées vérifiées. Les promoteurs ont besoin de leads qualifiés.",
      role: "Construit et développé par NLG comme un play lead-gen et marketplace.",
      link: "https://fractionalpropertyhub.com"
    },
    {
      name: "Business Legend",
      type: "Média & Podcast",
      icon: <Radio className="w-8 h-8" />,
      logo: "/brands/businesslegend.png",
      description: "Une marque média proposant des histoires d'entrepreneuriat, des insights business et des interviews d'experts. Podcast et plateforme de contenu pour fondateurs et opérateurs.",
      why: "Les histoires business authentiques inspirent l'action. Business Legend partage de vrais parcours de vrais bâtisseurs.",
      role: "Création de contenu, production et distribution gérées par NLG.",
      link: "https://businesslegend.co"
    },
    {
      name: "STEAD",
      type: "Marque Sports & Lifestyle",
      icon: <Dumbbell className="w-8 h-8" />,
      logo: "/brands/stead.png",
      description: "Une marque sports et lifestyle axée sur la performance, la discipline et la qualité. Vêtements et communauté pour athlètes et professionnels actifs.",
      why: "Le lifestyle reflète l'état d'esprit. STEAD incarne la discipline et l'excellence que nous valorisons.",
      role: "Développement de marque et opérations par NLG.",
      link: null,
      comingSoon: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portefeuille NLG Ventures | PropTech, FinTech & Média | Nous Construisons & Scalons</title>
        <meta 
          name="description" 
          content="Explorez le portefeuille NLG: Block Tech, FractionalPropertyHub, Business Legend. Nous construisons et développons des plateformes innovantes." 
        />
        <meta name="keywords" content="venture studio, investissement PropTech, ventures FinTech, portefeuille startup, immobilier fractionné, ventures business, Block Tech" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/ventures" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/ventures" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/ventures" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/ventures" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/fr/ventures" />
        <meta property="og:title" content="Portefeuille NLG Ventures | PropTech, FinTech & Média" />
        <meta property="og:description" content="Explorez le portefeuille NLG: Block Tech, FractionalPropertyHub, Business Legend. Nous construisons et développons des plateformes innovantes." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portefeuille NLG Ventures | PropTech, FinTech & Média" />
        <meta name="twitter:description" content="Explorez le portefeuille NLG: Block Tech, FractionalPropertyHub, Business Legend. Nous construisons et développons des plateformes." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Portefeuille
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ventures & Marques que nous construisons et développons
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Plateformes et marques que nous avons construites, opérons et développons dans la PropTech, FinTech, Média et Lifestyle.
            </p>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Construire l'avenir de la technologie et du business</h2>
              <p>
                NLG Consulting opère à la fois comme cabinet de conseil et venture studio. Contrairement aux cabinets de conseil traditionnels qui se contentent de conseiller, nous investissons du capital, des ressources et de l'expertise opérationnelle dans la construction et le développement de notre propre portefeuille d'entreprises.
              </p>
              <p>
                Notre portefeuille de ventures couvre quatre secteurs clés : PropTech (technologie immobilière), FinTech (technologie financière), Média et Lifestyle. Chaque venture est soigneusement sélectionnée en fonction de l'opportunité de marché, de l'alignement avec notre expertise et du potentiel d'impact significatif.
              </p>
            </div>
          </div>
        </section>

        {/* Ventures List */}
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
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Ce que c'est</h4>
                        <p className="text-foreground">{venture.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Pourquoi ça existe</h4>
                        <p className="text-foreground">{venture.why}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Rôle de NLG</h4>
                        <p className="text-foreground">{venture.role}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                        {venture.link && !venture.comingSoon ? (
                          <Button asChild variant="default">
                            <a href={venture.link} target="_blank" rel="noopener noreferrer">
                              Visiter le site <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                        ) : venture.comingSoon ? (
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Bientôt disponible</Badge>
                        ) : null}
                        <Button asChild variant="outline">
                          <Link to="/fr/rendez-vous">Réserver un appel <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Book as a Venture Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-2 border-primary/30">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="bg-muted/50 p-8 flex flex-col items-center justify-center text-center">
                    <img 
                      src="/images/book-cover.jpg" 
                      alt="Level Up in Fractional Real Estate par Gregory Brenig"
                      className="w-40 h-auto rounded-lg shadow-xl mb-4 hover:scale-105 transition-transform"
                    />
                    <Badge variant="secondary" className="mt-2">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Venture Intellectuelle
                    </Badge>
                  </div>
                  
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Level Up in Fractional Real Estate</h3>
                      <p className="text-primary font-medium">Plus qu'un livre — une vision stratégique sur l'innovation, l'investissement et les modèles d'actifs modernes.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Résumé Exécutif</h4>
                      <p className="text-foreground">
                        Ce guide complet de Gregory Brenig explore l'avenir de l'investissement immobilier à travers la propriété fractionnée et la tokenisation. Il fournit une feuille de route stratégique pour construire des revenus locatifs et atteindre la liberté financière.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                      <Button asChild variant="default">
                        <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">
                          Acheter sur Amazon <ExternalLink className="ml-2 w-4 h-4" />
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

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Partenaires avec nous</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Intéressé par une collaboration ou un investissement ? Discutons de comment travailler ensemble.
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

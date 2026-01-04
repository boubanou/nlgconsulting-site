import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Lightbulb, 
  TrendingUp, 
  Globe,
  Layers,
  Cpu,
  DollarSign,
  CheckCircle
} from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AdvisoryFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Conseil & Stratégie d'Entreprise",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Accompagnement stratégique pour la structuration d'entreprise, le go-to-market, le scaling et la transformation tech.",
        "url": "https://nlgconsulting.co/fr/conseil"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Conseil", "item": "https://nlgconsulting.co/fr/conseil" }
        ]
      }
    ]
  };

  const areas = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Structuration d'Entreprise",
      description: "Optimisez votre structure corporate, vos opérations et votre gouvernance pour la croissance."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Stratégie Go-to-Market",
      description: "Lancez de nouveaux produits et pénétrez de nouveaux marchés avec un plan GTM validé et opérationnel."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Monétisation",
      description: "Concevez et optimisez vos modèles de revenus, stratégies de pricing et revenus récurrents."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scaling & Expansion",
      description: "Scalez vos opérations, développez-vous géographiquement et construisez des systèmes durables."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Stratégie Tech & IA",
      description: "Tirez parti de la technologie et de l'IA pour automatiser, optimiser et différencier votre entreprise."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Blockchain & Crypto",
      description: "Stratégie blockchain sérieuse pour la tokenisation, les smart contracts et l'infrastructure décentralisée."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Conseil Stratégique d'Entreprise | Go-to-Market, Scaling, Stratégie IA | NLG Consulting</title>
        <meta 
          name="description" 
          content="Conseil expert en stratégie go-to-market, monétisation, scaling et transformation IA. Accompagnement concret par des opérateurs qui ont construit et développé des entreprises." 
        />
        <meta name="keywords" content="conseil stratégique, consultant business, stratégie go-to-market, conseil IA, advisor startup, stratégie de croissance, monétisation, structuration entreprise" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/conseil" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/advisory" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/advisory" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Conseil
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conseil Stratégique pour Fondateurs et Dirigeants
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Accompagnement expert en structuration d'entreprise, stratégie go-to-market, monétisation, scaling et transformation technologique.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">
                Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Un conseil stratégique qui génère de vrais résultats</h2>
              <p>
                La plupart des missions de conseil se terminent par un deck de stratégie et une poignée de main. Des mois plus tard, ce deck prend la poussière tandis que les mêmes problèmes persistent. Nous prenons une approche fondamentalement différente.
              </p>
              <p>
                Le conseil de NLG Consulting est construit autour de l'exécution, pas des slides. Chaque session stratégique inclut des actions concrètes, des cadres de responsabilité et un support optionnel d'implémentation. Nous travaillons à vos côtés comme un partenaire de réflexion, pas un observateur externe.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Qui bénéficie du conseil stratégique</h3>
              <p>
                Nos services de conseil sont conçus pour les fondateurs et dirigeants qui font face à des points d'inflexion — ces moments qui nécessitent une perspective et une expertise externe. Les scénarios courants incluent :
              </p>
              <ul>
                <li>Lancement d'un nouveau produit ou entrée sur un nouveau marché</li>
                <li>Passage de startup à phase de croissance</li>
                <li>Préparation d'une levée de fonds ou M&A</li>
                <li>Restructuration des opérations pour l'efficacité</li>
                <li>Construction ou transformation de l'infrastructure technologique</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Domaines d'expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nous fournissons un accompagnement stratégique sur ces domaines clés.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment nous travaillons</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Sessions Stratégiques</h3>
                  <p className="text-muted-foreground mb-4">
                    Sessions 1-on-1 focalisées pour traiter des défis spécifiques, développer des stratégies et créer des plans d'action.
                  </p>
                  <ul className="space-y-2">
                    {["Analyse approfondie", "Recommandations actionnables", "Support de suivi"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Conseil Continu</h3>
                  <p className="text-muted-foreground mb-4">
                    Partenariat stratégique continu avec des points réguliers, guidance et support.
                  </p>
                  <ul className="space-y-2">
                    {["Appels stratégiques mensuels", "Accès Slack/email", "Partage de ressources"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Construisons votre stratégie
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Réservez un appel de 15 minutes pour discuter de vos défis et comment nous pouvons vous aider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="text-base px-8">
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

export default AdvisoryFR;

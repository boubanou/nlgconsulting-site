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
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const AdvisoryFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Conseil Stratégique & Structuration GTM",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Conseil stratégique opérateur pour fondateurs FinTech, PropTech, SaaS et B2B. Structuration GTM, revenue operations, modèle commercial, adoption IA et architecture de croissance.",
        "url": "https://www.nlgconsulting.co/fr/conseil"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Conseil", "item": "https://www.nlgconsulting.co/fr/conseil" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que le conseil stratégique pour fondateurs ?", "acceptedAnswer": { "@type": "Answer", "text": "Le conseil stratégique apporte aux fondateurs et dirigeants un accompagnement opérateur sur la structuration GTM, le modèle commercial, les revenue operations, l'adoption IA et les systèmes de croissance — focalisé sur l'exécution, pas sur les slides." } },
          { "@type": "Question", "name": "En quoi le conseil NLG est différent du consulting traditionnel ?", "acceptedAnswer": { "@type": "Answer", "text": "Le consulting traditionnel livre des decks stratégiques. Nous livrons un support d'exécution structuré — chaque session inclut des frameworks actionnables, de la responsabilité et une implémentation optionnelle via nos divisions de services." } },
          { "@type": "Question", "name": "Quels secteurs NLG conseille-t-il ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous travaillons avec les fondateurs et équipes dirigeantes en FinTech, PropTech, SaaS et services B2B. Notre expérience opérateur couvre 15+ ans en Europe, Amérique du Nord et Moyen-Orient." } }
        ]
      }
    ]
  };

  const areas = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Stratégie GTM & Revenue Operations", description: "Structurez votre go-to-market, définissez les revenue operations et construisez des systèmes commerciaux qui génèrent du pipeline mesurable." },
    { icon: <Layers className="w-6 h-6" />, title: "Clarté d'Offre & Positionnement", description: "Affinez votre proposition de valeur, votre positionnement concurrentiel et votre architecture de pricing pour une traction commerciale renforcée." },
    { icon: <DollarSign className="w-6 h-6" />, title: "Revue du Modèle Commercial", description: "Audit et optimisation de votre modèle de revenus, économie unitaire et stratégie de monétisation pour une croissance durable." },
    { icon: <Cpu className="w-6 h-6" />, title: "Planification Adoption IA", description: "Feuilles de route IA pratiques connectant l'automatisation de workflows, les agents IA et l'IA opérationnelle à des résultats business réels." },
    { icon: <Globe className="w-6 h-6" />, title: "Expansion Internationale", description: "Stratégie d'entrée sur le marché, structuration opérationnelle et exécution commerciale pour la croissance internationale." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Architecture Systèmes de Croissance", description: "Concevez les systèmes, processus et cadence opérationnelle qui transforment la stratégie en exécution structurée et répétable." }
  ];

  return (
    <>
      <Helmet>
        <title>Conseil Stratégique | GTM & Systèmes de Croissance | NLG</title>
        <meta name="description" content="Conseil stratégique opérateur pour fondateurs FinTech, PropTech, SaaS et B2B. Structuration GTM, RevOps, modèle commercial, adoption IA et systèmes de croissance." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/conseil" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/advisory" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/advisory" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/conseil" />
        <meta property="og:title" content="Conseil Stratégique | GTM & Systèmes de Croissance | NLG Consulting" />
        <meta property="og:description" content="Conseil stratégique opérateur pour fondateurs FinTech, PropTech, SaaS et B2B. Exécution, pas des slides." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Conseil</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conseil Stratégique Pour Fondateurs Qui Construisent des Systèmes de Croissance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advisory opérateur sur la structuration GTM, les revenue operations, le modèle commercial, l'adoption IA et l'architecture de systèmes de croissance — focalisé sur l'exécution, pas sur les slides.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Un conseil focalisé sur l'exécution, pas sur les decks</h2>
              <p>
                La plupart des missions de conseil se terminent par un deck de stratégie et une poignée de main. Des mois plus tard, ce deck prend la poussière tandis que les mêmes défis persistent. Les équipes dirigeantes ne manquent pas d'idées — elles manquent d'exécution structurée.
              </p>
              <p>
                Le conseil de NLG Consulting est construit autour de la clarté opérationnelle. Chaque session produit des frameworks actionnables, des structures de responsabilité et — quand nécessaire — un support d'implémentation direct via nos <Link to="/fr/services" className="text-primary hover:underline font-medium">divisions de services</Link>.
              </p>
              <p>
                Notre advisory s'appuie sur 15+ ans d'expérience opérateur dans la construction et le scaling d'entreprises en FinTech, PropTech et technologie B2B en Europe, en Israël et en Amérique du Nord. Nous avons navigué les mêmes défis — design GTM, optimisation du modèle de revenus, structuration d'équipes, expansion internationale et adoption IA — et construit des frameworks qui fonctionnent en pratique.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Quand le conseil stratégique crée le plus de valeur</h3>
              <ul>
                <li>Structurer ou restructurer votre go-to-market et vos revenue operations</li>
                <li>Clarifier votre offre, votre positionnement et votre modèle commercial</li>
                <li>Planifier une adoption IA pratique connectée aux résultats business</li>
                <li>Préparer une levée de fonds, un M&A ou des discussions board</li>
                <li>Scaler les opérations commerciales sans croissance proportionnelle des effectifs</li>
                <li>Entrer sur de nouveaux marchés avec une exécution structurée</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Domaines d'Advisory</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Accompagnement structuré sur les leviers qui portent la performance commerciale.
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

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment nous travaillons</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Sessions Stratégiques Focalisées</h3>
                  <p className="text-muted-foreground mb-4">
                    Sessions 1-on-1 conçues pour traiter des points d'inflexion spécifiques — design GTM, restructuration commerciale, adoption IA ou architecture de systèmes de croissance.
                  </p>
                  <ul className="space-y-2">
                    {["Diagnostic et analyse structurés", "Frameworks actionnables et prochaines étapes", "Support d'implémentation quand nécessaire"].map((item, i) => (
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
                  <h3 className="text-xl font-semibold mb-4">Partenariat Advisory Continu</h3>
                  <p className="text-muted-foreground mb-4">
                    Partenariat stratégique continu avec des revues opérationnelles régulières, du support décisionnel et l'accès à nos capacités d'exécution.
                  </p>
                  <ul className="space-y-2">
                    {["Revues stratégiques et opérationnelles mensuelles", "Accès direct via Slack ou email", "Accès prioritaire aux divisions de services"].map((item, i) => (
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

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi le conseil opérateur est différent</h2>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Construit sur l'expérience opérationnelle</h3>
              <p>
                Notre pratique advisory est menée par des opérateurs qui ont construit des entreprises, scalé des équipes commerciales et navigué des marchés complexes de première main. Ce n'est pas du savoir académique — c'est de l'expérience structurée dans des environnements business réels.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Stratégie connectée à l'exécution</h3>
              <p>
                Contrairement aux consultants traditionnels, nous offrons un support d'implémentation direct. Besoin d'un <Link to="/fr/vente" className="text-primary hover:underline font-medium">système outbound</Link> ? Nous le construisons. Besoin d'<Link to="/fr/automatisation-ia" className="text-primary hover:underline font-medium">automatisation de workflows IA</Link> ? Nous le déployons. Besoin d'un <Link to="/fr/site-internet" className="text-primary hover:underline font-medium">site web de conversion</Link> ? Nous le livrons. Advisory et exécution dans une seule firme.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Perspective internationale</h3>
              <p>
                Avec une expérience opérationnelle en Europe, Amérique du Nord et Moyen-Orient, nous apportons un contexte pertinent à l'expansion internationale et aux opérations commerciales transfrontalières. Découvrez comment nous appliquons ces principes via notre <Link to="/fr/ventures" className="text-primary hover:underline font-medium">portfolio venture</Link>.
              </p>
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="advisory" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discutons de votre structure de croissance
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Si vous revoyez votre modèle GTM, vos opérations commerciales ou votre architecture de systèmes de croissance — nous pouvons évaluer où la structure et le levier opérationnel peuvent améliorer la performance.
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
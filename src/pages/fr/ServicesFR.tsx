import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Brain, DollarSign, Globe, Building2, Lightbulb, Rocket, BarChart3, CheckCircle, TrendingUp } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ServicesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Accélération de Revenus pour SaaS & PropTech", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "url": "https://nlgconsulting.co/fr/services" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/fr/services" }
      ]}
    ]
  };

  const serviceCards = [
    { icon: <Target className="w-8 h-8" />, title: "Externalisation Vente B2B", description: "Équipes SDR externalisées qui génèrent 15-30 rendez-vous qualifiés par mois.", link: "/fr/vente", cta: "Scaler vos ventes" },
    { icon: <Brain className="w-8 h-8" />, title: "Génération de Leads IA", description: "Systèmes de prospection IA qui génèrent des rendez-vous qualifiés à -50% du coût.", link: "/fr/generation-leads-ia", cta: "Automatiser la prospection" },
    { icon: <DollarSign className="w-8 h-8" />, title: "Monétisation SaaS", description: "Optimisez votre modèle de revenus. ARPU +30-50% garanti.", link: "/fr/monetisation-saas", cta: "Optimiser vos prix" },
    { icon: <Globe className="w-8 h-8" />, title: "Stratégie Go-To-Market", description: "Lancez-vous sur de nouveaux marchés avec des frameworks éprouvés.", link: "/fr/strategie-go-to-market", cta: "Planifier votre expansion" },
    { icon: <Building2 className="w-8 h-8" />, title: "Conseil PropTech", description: "Construisez et scalez vos plateformes immobilières technologiques.", link: "/fr/conseil-proptech", cta: "Construire votre plateforme" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Conseil Stratégique", description: "Advisory opérateur sur la structuration, le fundraising et la transformation.", link: "/fr/conseil", cta: "Obtenir des conseils" },
    { icon: <Rocket className="w-8 h-8" />, title: "Studio Web", description: "Sites web orientés revenus en 72h avec SEO, paiements et conversion.", link: "/fr/site-internet", cta: "Lancer votre site" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Marketing & PPC", description: "Campagnes PPC orientées ROI sur Google, Meta, LinkedIn et TikTok.", link: "/fr/marketing", cta: "Booster votre marketing" }
  ];

  return (
    <>
      <Helmet>
        <title>Accélération de Revenus SaaS & PropTech | NLG Consulting</title>
        <meta name="description" content="Scalez vos revenus sans scaler vos équipes. Stratégie + exécution pour fondateurs SaaS et opérateurs PropTech. Ventes, IA, monétisation, GTM." />
        <link rel="canonical" href="https://nlgconsulting.co/fr/services" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/services" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/services" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/services" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Accélération de Revenus</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Scalez vos revenus sans scaler vos équipes</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Accélération de revenus de bout en bout pour fondateurs SaaS et opérateurs PropTech. Ventes externalisées, génération de leads IA, stratégie de monétisation et go-to-market international.</p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">⏱️ Nous acceptons 3 nouveaux clients par mois. Places limitées.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Le coût de l'immobilisme</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: "80K€+", label: "Coût annuel d'un SDR interne (salaire + outils + management)" },
                { stat: "3-6 mois", label: "Temps de montée en compétences avant productivité" },
                { stat: "35%", label: "Taux de turnover annuel des SDR" }
              ].map((item, i) => (
                <Card key={i}><CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Accélération de Revenus : La Stratégie Rencontre l'Exécution</h2>
            <p>La plupart des cabinets de conseil livrent des decks stratégiques. La plupart des agences livrent des leads. Aucun ne livre de la croissance de revenus seul. NLG Consulting comble le fossé — nous ne vous disons pas seulement quoi faire, nous le faisons avec vous.</p>
            <p>Notre framework combine <Link to="/fr/vente" className="text-primary hover:underline font-medium">ventes B2B externalisées</Link>, <Link to="/fr/generation-leads-ia" className="text-primary hover:underline font-medium">génération de leads IA</Link>, <Link to="/fr/monetisation-saas" className="text-primary hover:underline font-medium">consulting en monétisation SaaS</Link>, et <Link to="/fr/strategie-go-to-market" className="text-primary hover:underline font-medium">stratégie go-to-market internationale</Link>.</p>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Notre Stack d'Accélération</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">Huit services intégrés pour multiplier votre croissance.</p>
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

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Pourquoi les leaders SaaS & PropTech font confiance à NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Expérience d'opérateur", desc: "Nous avons fondé et scalé des entreprises en PropTech, FinTech et SaaS." },
                { title: "Autorité publiée", desc: "Auteur de 'Level Up in Fractional Real Estate' — leader d'opinion reconnu." },
                { title: "Exécution mondiale", desc: "15+ ans d'expérience en Europe, Amérique du Nord et Moyen-Orient." },
                { title: "Résultats prouvés", desc: "50+ entreprises accompagnées. Croissance de revenus, pas juste des decks." }
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
            <TrendingUp className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Prêt à accélérer vos revenus ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique de 15 minutes. Repartez avec 3 idées de croissance actionnables.</p>
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

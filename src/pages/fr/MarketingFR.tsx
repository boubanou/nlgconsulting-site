import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  AlertTriangle,
  LineChart,
  Megaphone,
  Search,
  Monitor,
  Users,
  Globe,
  ShieldCheck,
  Eye,
  Layers,
  Phone,
} from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const MarketingFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Marketing PPC & Campagnes Digitales",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Gestion de campagnes PPC et marketing digital orientés ROI. Google Ads, Meta Ads, LinkedIn Ads, campagnes multi-canaux.",
        "url": "https://nlgconsulting.co/fr/marketing"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Marketing & PPC", "item": "https://nlgconsulting.co/fr/marketing" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "En combien de temps les campagnes PPC génèrent-elles du ROI ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La plupart des clients voient des résultats mesurables en 2 à 4 semaines. Dès le mois 2, les campagnes sont optimisées pour un ROI maximum avec des tests A/B continus."
            }
          },
          {
            "@type": "Question",
            "name": "Quelles plateformes publicitaires gérez-vous ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous gérons Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, TikTok Ads, Bing Ads, réseaux display et campagnes de retargeting sur toutes les plateformes majeures."
            }
          },
          {
            "@type": "Question",
            "name": "Travaillez-vous avec les e-commerces et les entreprises B2B ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, nous travaillons avec tous types d'entreprises : e-commerce, SaaS, B2B, B2C, services locaux et entreprises internationales. Notre approche est adaptée à chaque modèle business."
            }
          },
          {
            "@type": "Question",
            "name": "Qu'est-ce qui différencie NLG des autres agences marketing ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous nous concentrons sur les résultats business, pas les métriques de vanité. Transparence totale, optimisation pilotée par la data, et nous agissons comme une extension de votre équipe."
            }
          }
        ]
      }
    ]
  };

  const painPoints = [
    { icon: <AlertTriangle className="w-5 h-5" />, text: "Budgets marketing mal dépensés sur des campagnes sous-performantes" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Campagnes PPC qui génèrent des clics mais aucune conversion" },
    { icon: <Users className="w-5 h-5" />, text: "Trop d'agences, trop peu de résultats concrets" },
    { icon: <Eye className="w-5 h-5" />, text: "Aucune visibilité claire sur le ROI et la performance" },
    { icon: <Layers className="w-5 h-5" />, text: "Manque de vision globale multi-canaux" },
  ];

  const solutions = [
    { icon: <Target className="w-6 h-6" />, title: "Stratégie marketing", description: "Stratégie sur-mesure alignée sur vos objectifs business, votre ICP et votre positionnement marché." },
    { icon: <Megaphone className="w-6 h-6" />, title: "Création & structuration de campagnes", description: "Groupes d'annonces, créatifs, ciblage d'audience et frameworks de tests A/B conçus pour convertir." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Gestion & allocation des budgets", description: "Distribution intelligente des budgets entre les canaux pour maximiser le ROAS et minimiser le gaspillage." },
    { icon: <LineChart className="w-6 h-6" />, title: "Optimisation continue", description: "Analyse hebdomadaire, ajustements des enchères et rafraîchissement des créatifs pour une croissance soutenue." },
    { icon: <Search className="w-6 h-6" />, title: "Analyse des conversions & du ROI", description: "Suivi bout-en-bout du clic au revenu. Modèles d'attribution montrant l'impact business réel." },
    { icon: <Monitor className="w-6 h-6" />, title: "Optimisation des tunnels", description: "Landing pages, messages et offres affinés pour convertir plus de visiteurs en clients." },
  ];

  const channels = [
    "Google Ads", "Meta Ads (Facebook / Instagram)", "LinkedIn Ads",
    "TikTok Ads", "Bing Ads", "Retargeting",
    "Réseaux Display", "Campagnes multi-canales"
  ];

  const businessTypes = [
    "E-commerce / E-shop", "SaaS", "Services professionnels",
    "B2B & B2C", "Local & International", "Scale-ups & Grands comptes"
  ];

  const whyNLG = [
    { icon: <TrendingUp className="w-5 h-5" />, title: "Vision business avant marketing", description: "Nous partons de vos objectifs de revenu, pas des fonctionnalités des plateformes." },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Pilotage par la data, pas par l'ego", description: "Chaque décision est appuyée par des métriques, pas par des suppositions." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Transparence totale sur les résultats", description: "Tableaux de bord en temps réel et rapports hebdomadaires — aucune métrique cachée." },
    { icon: <Users className="w-5 h-5" />, title: "Extension de vos équipes", description: "Nous ne remplaçons pas vos équipes. Nous les renforçons." },
    { icon: <Zap className="w-5 h-5" />, title: "Approche sur-mesure, toujours", description: "Pas de playbooks standardisés. Chaque stratégie est adaptée à votre business." },
    { icon: <Globe className="w-5 h-5" />, title: "Ponctuel ou long terme", description: "Projets ponctuels ou partenariats continus — à vous de choisir." },
  ];

  const results = [
    { metric: "2-4x", label: "ROAS moyen" },
    { metric: "8+", label: "Canaux gérés" },
    { metric: "-40%", label: "Coût par acquisition" },
    { metric: "72h", label: "Lancement campagnes" },
  ];

  return (
    <>
      <Helmet>
        <title>Marketing PPC & campagnes digitales orientées ROI | NLG Consulting</title>
        <meta
          name="description"
          content="Gestion de campagnes PPC & marketing digital multi-canaux. ROI, performance, croissance mesurable. E-commerce, B2B, B2C. Prenez rendez-vous."
        />
        <meta name="keywords" content="gestion campagnes PPC, marketing digital performance, agence PPC, marketing e-commerce, campagnes Google Ads, externalisation marketing, marketing multi-canaux, stratégie marketing ROI" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/marketing" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/marketing" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/marketing" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/marketing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/fr/marketing" />
        <meta property="og:title" content="Marketing PPC & campagnes digitales orientées ROI | NLG" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Marketing & PPC
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transformez votre budget marketing en croissance mesurable
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nous concevons, pilotons et optimisons vos campagnes marketing & PPC pour générer des leads qualifiés, des ventes et du ROI — quel que soit votre secteur ou votre canal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/fr/rendez-vous">
                  Prendre rendez-vous <ArrowRight className="ml-2 w-4 h-4" />
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

        {/* Pain Points */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Ça vous parle ?</h2>
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 text-destructive">
                    {point.icon}
                  </div>
                  <p className="text-foreground font-medium">{point.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              Si l'un de ces points résonne, vous n'avez pas besoin de plus d'outils — vous avez besoin d'un partenaire qui comprend le marketing performance au niveau business.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Une approche marketing orientée performance, pas des clics</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nous prenons en charge l'ensemble de votre marketing payant, de la stratégie à l'exécution et l'optimisation continue.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((item, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Band */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels & Business Types */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tous les canaux. Tous les business.</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-primary" /> Canaux publicitaires
                </h3>
                <div className="flex flex-wrap gap-3">
                  {channels.map((ch, i) => (
                    <Badge key={i} variant="secondary" className="px-4 py-2 text-sm">
                      {ch}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" /> Types d'activités
                </h3>
                <div className="flex flex-wrap gap-3">
                  {businessTypes.map((bt, i) => (
                    <Badge key={i} variant="outline" className="px-4 py-2 text-sm">
                      {bt}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why NLG */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi externaliser votre marketing avec NLG Consulting</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nous ne remplaçons pas vos équipes. Nous les renforçons.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyNLG.map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Block — ~1500 words FR */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Gestion de campagnes PPC & marketing digital : guide complet</h2>

              <p>
                Dans le paysage digital compétitif d'aujourd'hui, les entreprises de toutes tailles s'appuient sur la publicité pay-per-click et le marketing digital pour générer des leads, stimuler les ventes et construire leur notoriété de marque. Que vous gériez un e-commerce, une plateforme SaaS, une entreprise de services B2B ou un commerce local, les principes d'une <strong>gestion de campagnes PPC</strong> efficace restent les mêmes : comprendre votre audience, créer des messages percutants, allouer les budgets intelligemment et optimiser sans relâche.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Pourquoi la publicité PPC est essentielle pour la croissance</h3>
              <p>
                La publicité PPC offre quelque chose que le marketing organique ne peut pas : l'immédiateté. Si le SEO et le marketing de contenu sont des stratégies essentielles à long terme, les campagnes payantes peuvent placer votre offre devant des acheteurs qualifiés en quelques heures. Google Ads traite à lui seul plus de 8,5 milliards de recherches par jour, et la plateforme publicitaire de Meta touche plus de 3 milliards d'utilisateurs actifs mensuels.
              </p>
              <p>
                Mais l'opportunité s'accompagne de risques. Sans une gestion de campagnes PPC rigoureuse, les entreprises gaspillent des milliers d'euros en clics non pertinents, des groupes d'annonces mal structurés et des landing pages qui ne convertissent pas. La différence entre une campagne rentable et un gouffre financier tient souvent à l'expertise et à la méthodologie.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Les éléments clés de campagnes PPC haute performance</h3>
              <p>
                Un <strong>marketing digital performance</strong> efficace commence par des fondations solides. Chez NLG Consulting, notre approche couvre chaque étape du cycle de vie des campagnes :
              </p>
              <ul>
                <li><strong>Recherche & segmentation d'audience :</strong> Nous analysons votre marché pour identifier les segments d'acheteurs à forte intention. Données démographiques, psychographiques, signaux comportementaux et audiences similaires sont cartographiés pour créer des profils de ciblage précis.</li>
                <li><strong>Stratégie de mots-clés (campagnes Search) :</strong> Pour Google Ads et Bing Ads, la recherche de mots-clés est la colonne vertébrale. Nous identifions les mots-clés à intention commerciale, les mots-clés négatifs pour filtrer le gaspillage, et les opportunités longue traîne à moindre concurrence et taux de conversion plus élevés.</li>
                <li><strong>Créatifs publicitaires & copywriting :</strong> Les annonces se disputent l'attention en millisecondes. Notre équipe crée des textes publicitaires à fort taux de conversion avec des propositions de valeur claires, des CTA percutants et des variations en test A/B.</li>
                <li><strong>Optimisation des landing pages :</strong> Le trafic n'est que la moitié de l'équation. Les landing pages doivent être alignées avec le message publicitaire, se charger rapidement et guider les visiteurs vers une action de conversion claire.</li>
                <li><strong>Stratégie d'enchères & allocation budgétaire :</strong> Nous utilisons une combinaison de stratégies d'enchères manuelles et automatisées pour maximiser le retour sur investissement publicitaire (ROAS). Les budgets sont alloués dynamiquement selon les performances de chaque canal.</li>
                <li><strong>Suivi des conversions & attribution :</strong> Un tracking précis est non négociable. Nous implémentons un suivi bout-en-bout sur toutes les plateformes, y compris les conversions offline, les appels téléphoniques et les modèles d'attribution multi-touch.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Campagnes Google Ads : Search, Shopping & Display</h3>
              <p>
                Google Ads reste la plateforme la plus puissante pour capturer la demande. Notre gestion de <strong>campagnes Google Ads</strong> couvre :
              </p>
              <ul>
                <li><strong>Campagnes Search :</strong> Cibler les utilisateurs qui recherchent activement vos produits ou services avec des groupes d'annonces structurés et des extensions pertinentes.</li>
                <li><strong>Campagnes Shopping :</strong> Essentiel pour le <strong>marketing e-commerce</strong>. Optimisation des flux produits, stratégies d'enchères et objectifs ROAS pour générer un revenu rentable via Google Shopping et Performance Max.</li>
                <li><strong>Display & YouTube :</strong> Construire la notoriété et retargeter les visiteurs passés avec des annonces display et vidéo sur le vaste réseau de sites partenaires de Google.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Meta Ads : publicité Facebook & Instagram</h3>
              <p>
                L'écosystème publicitaire de Meta offre des capacités de ciblage d'audience inégalées. Du ciblage par centres d'intérêt aux audiences personnalisées construites à partir de vos données CRM, Meta Ads peut toucher pratiquement n'importe quel segment d'audience. Nous gérons les campagnes de notoriété, considération, conversion, le retargeting dynamique pour les catalogues e-commerce et les audiences similaires pour scaler les segments gagnants.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">LinkedIn Ads : génération de leads B2B à grande échelle</h3>
              <p>
                Pour les entreprises B2B, LinkedIn Ads offre un ciblage professionnel inégalé. Nous exploitons les données uniques de LinkedIn — titres de poste, tailles d'entreprise, secteurs d'activité, niveaux de séniorité — pour atteindre directement les décideurs. Sponsored Content, Message Ads et Lead Gen Forms sont configurés pour un volume maximum de leads qualifiés à coût d'acquisition contrôlé.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Stratégie marketing multi-canaux : pourquoi c'est important</h3>
              <p>
                Les stratégies marketing les plus performantes ne reposent pas sur un seul canal. Le <strong>marketing multi-canaux</strong> crée de multiples points de contact tout au long du parcours d'achat. Un prospect peut découvrir votre marque via une recherche Google, voir une annonce de retargeting sur Instagram, recevoir un message personnalisé sur LinkedIn, et finalement convertir après avoir vu une étude de cas sur YouTube.
              </p>
              <p>
                Chez NLG Consulting, nous orchestrons les campagnes sur tous les canaux avec des messages unifiés et des données partagées. Cette approche augmente les taux de conversion, réduit les coûts d'acquisition et renforce la mémorisation de marque.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Externalisation marketing : quand et pourquoi s'associer à un partenaire</h3>
              <p>
                L'<strong>externalisation marketing</strong> est pertinente quand vous avez besoin d'expertise, de rapidité et de responsabilité sans les coûts de construction d'une équipe interne. Scénarios courants : lancement de produit nécessitant des campagnes rapides, équipe interne forte en branding mais faible en média payant, expansion internationale nécessitant des campagnes multi-marchés, ou besoin de transparence et de KPIs clairs.
              </p>
              <p>
                NLG Consulting agit comme une extension naturelle de votre équipe. Nous apportons l'expertise d'une <strong>agence PPC</strong> avec la profondeur stratégique d'un cabinet de conseil. Nos clients incluent des marques e-commerce, des entreprises SaaS, des prestataires de services B2B et des scale-ups à travers l'Europe, le Moyen-Orient et l'Afrique.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Mesurer le succès : marketing orienté ROI</h3>
              <p>
                Nous croyons en la transparence radicale. Chaque campagne s'accompagne de tableaux de bord en temps réel suivant les métriques qui comptent : coût par lead, coût par acquisition, retour sur investissement publicitaire, valeur vie client et contribution au pipeline. Nous ne nous cachons pas derrière des métriques de vanité — nous nous concentrons sur les résultats business.
              </p>
              <p>
                Notre <strong>stratégie marketing ROI</strong> délivre typiquement un ROAS moyen de 2 à 4x, une réduction de 30 à 50% du coût par acquisition en 90 jours et des améliorations significatives de la qualité des leads et de la vélocité commerciale.
              </p>

              <p className="mt-8">
                Notre méthodologie marketing s'intègre avec nos services de <Link to="/fr/vente" className="text-primary hover:underline font-medium">développement commercial B2B</Link> et s'appuie sur notre pratique de <Link to="/fr/conseil" className="text-primary hover:underline font-medium">conseil stratégique</Link>. Combinez le marketing payant avec notre <Link to="/fr/site-internet" className="text-primary hover:underline font-medium">studio web</Link> pour des landing pages à fort taux de conversion livrées en 72 heures.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <RelatedServicesFR currentService="marketing" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Vous voulez savoir si vos campagnes peuvent être plus rentables ?</h2>
            <p className="text-lg opacity-90 mb-8">
              Parlons-en simplement. Sans engagement, sans blabla — juste un échange stratégique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/rendez-vous">Planifier un échange stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
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

export default MarketingFR;

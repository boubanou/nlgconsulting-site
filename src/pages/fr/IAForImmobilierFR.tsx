import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building, TrendingUp, Search, Users, MapPin, Zap, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForImmobilierFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Systèmes IA pour l'Immobilier", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Systèmes de croissance IA pour entreprises immobilières. Automatisation opérationnelle, pipeline investisseurs, valorisation et développement commercial structuré.", "url": "https://www.nlgconsulting.co/fr/ia-pour-immobilier", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA transforme-t-elle les entreprises immobilières ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA permet aux entreprises immobilières d'automatiser la qualification, l'analyse de marché, les relations investisseurs, le reporting et les opérations — créant un levier opérationnel sans augmenter les effectifs." }},
        { "@type": "Question", "name": "Quelle est la différence entre IA pour PropTech et IA pour l'immobilier ?", "acceptedAnswer": { "@type": "Answer", "text": "La PropTech désigne les entreprises tech qui construisent des produits pour le secteur. L'IA pour l'immobilier s'adresse aux entreprises traditionnelles — agences, promoteurs, fonds — qui veulent intégrer l'IA dans leurs opérations existantes." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour l'immobilier", "item": "https://www.nlgconsulting.co/fr/ia-pour-immobilier" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour l'Immobilier : Opérations & Croissance | NLG</title>
        <meta name="description" content="Systèmes IA pour entreprises immobilières. Pipeline investisseurs, automatisation opérationnelle et développement commercial structuré. Par des opérateurs immobiliers." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-immobilier" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-immobilier" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Immobilier</Badge>
            <h1 className="mb-6">Systèmes IA pour{" "}<span className="text-gradient">l'immobilier</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              L'immobilier traditionnel se transforme. Que vous soyez agence, promoteur, fonds d'investissement ou gestionnaire, l'IA structure vos opérations, automatise le pipeline investisseurs et crée un levier opérationnel mesurable — sans perdre la relation humaine qui fait ce métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique immobilier <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Systèmes IA pour les acteurs immobiliers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Valorisation & analyse", desc: "Modèles IA d'évaluation basés sur les comparables, tendances et données locales — intégrés à vos flux de décision d'investissement." },
                { icon: Users, title: "Pipeline commercial", desc: "Systèmes de prospection automatisée et qualification intelligente des acheteurs, vendeurs et investisseurs — avec scoring et séquences structurées." },
                { icon: Search, title: "Intelligence de marché", desc: "Veille automatisée des tendances, prix et opportunités immobilières — transformée en recommandations actionnables pour votre équipe." },
                { icon: MapPin, title: "SEO & conversion", desc: "Descriptions optimisées pour le référencement et la conversion, générées à l'échelle pour vos annonces et votre présence digitale." },
                { icon: TrendingUp, title: "Relations investisseurs", desc: "Reporting automatisé, communications personnalisées et outreach structuré pour vos investisseurs et partenaires stratégiques." },
                { icon: Zap, title: "Opérations structurées", desc: "Gestion locative, screening, suivi de projets et automatisation administrative — pour que votre équipe se concentre sur la valeur ajoutée." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise immobilière</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience directe dans l'immobilier — travail avec des agences, promoteurs et fonds d'investissement internationaux", "Notre fondateur est auteur publié sur l'investissement immobilier fractionné et opérateur de plateformes PropTech", "Systèmes IA adaptés aux contraintes réglementaires et aux spécificités du secteur immobilier", "Infrastructure de croissance conçue pour les relations long terme et les cycles de transaction immobiliers", "Connecté à notre pratique de conseil PropTech et de développement de plateformes", "Approche opérateur : chaque système est conçu pour le ROI mesurable, pas pour la démonstration technologique"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Structurez votre activité immobilière avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour identifier les leviers IA les plus impactants pour votre entreprise immobilière.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA transforme-t-elle les entreprises immobilières ?", a: "L'IA automatise la qualification, l'analyse de marché, les relations investisseurs et les opérations — créant un levier opérationnel qui permet de scaler sans augmenter les effectifs proportionnellement." },
                { q: "Quelle différence entre IA pour PropTech et IA pour l'immobilier ?", a: "La PropTech désigne les entreprises tech du secteur. L'IA pour l'immobilier s'adresse aux entreprises traditionnelles — agences, promoteurs, fonds — qui veulent intégrer des systèmes IA dans leurs opérations quotidiennes." },
                { q: "L'IA peut-elle remplacer les agents immobiliers ?", a: "Non. L'IA crée un levier opérationnel pour les professionnels de l'immobilier — elle automatise les tâches répétitives et fournit des analyses data-driven, libérant du temps pour les relations humaines qui font ce métier." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à structurer votre croissance immobilière ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique avec un opérateur immobilier.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForImmobilierFR;
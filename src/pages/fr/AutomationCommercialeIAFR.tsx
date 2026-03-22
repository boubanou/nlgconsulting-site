import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, TrendingUp, Users, Mail, Search, Database, Zap, Target } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AutomationCommercialeIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Automatisation Commerciale IA — Pipeline & Systèmes de Revenus",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Automatisation commerciale IA pour la génération de pipeline B2B. Prospection automatisée, outreach personnalisé, séquences multicanal et gestion de pipeline pour FinTech, PropTech et entreprises B2B.",
        "url": "https://www.nlgconsulting.co/fr/automation-commerciale-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Sales Automation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'automatisation commerciale IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation commerciale IA systématise les activités de développement commercial — prospection, recherche de prospects, outreach personnalisé, gestion des relances et suivi de pipeline — en utilisant l'IA pour la qualité, la personnalisation et la consistance à grande échelle." }},
          { "@type": "Question", "name": "En quoi diffère-t-elle du SDR externalisé ?", "acceptedAnswer": { "@type": "Answer", "text": "Le SDR externalisé fournit des commerciaux humains. L'automatisation commerciale IA fournit les systèmes et workflows qui augmentent les humains ou opèrent de manière indépendante. Beaucoup d'entreprises combinent les deux pour un impact pipeline maximum." }},
          { "@type": "Question", "name": "Quels résultats peut-on attendre ?", "acceptedAnswer": { "@type": "Answer", "text": "Les systèmes de vente IA bien conçus génèrent typiquement 15 à 30+ réunions qualifiées par mois, avec une meilleure visibilité pipeline et une activité outbound plus consistante. Les résultats dépendent de la clarté ICP et du positionnement marché." }},
          { "@type": "Question", "name": "L'outreach IA est-il considéré comme du spam ?", "acceptedAnswer": { "@type": "Answer", "text": "Pas lorsqu'il est conçu correctement. L'outreach personnalisé par l'IA, basé sur une vraie recherche de prospects et la pertinence, surperforme les emails génériques de masse. La qualité prime sur le volume." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Automatisation Commerciale IA", "item": "https://www.nlgconsulting.co/fr/automation-commerciale-ia" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automatisation Commerciale IA | Pipeline & Revenus | NLG</title>
        <meta name="description" content="Automatisation commerciale IA pour la génération de pipeline B2B. Prospection automatisée, outreach personnalisé, séquences multicanal et gestion de pipeline pour FinTech, PropTech & B2B." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <meta property="og:title" content="Automatisation Commerciale IA | Pipeline & Revenus | NLG" />
        <meta property="og:description" content="Automatisation commerciale IA : prospection, outreach et systèmes de pipeline pour B2B." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Systèmes Ventes IA</Badge>
            <h1 className="mb-6">Automatisation Commerciale{" "}<span className="text-gradient">& Pipeline IA</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nous construisons des systèmes de vente IA qui gèrent la prospection, l'outreach personnalisé, les séquences multicanal et le management de pipeline — créant un flux de réunions qualifiées consistant avec une visibilité commerciale renforcée et un overhead opérationnel réduit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Évaluer vos opérations commerciales <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">Le défi du pipeline B2B</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>La génération de pipeline est le moteur de la croissance B2B — mais la plupart des entreprises peinent à le construire de manière consistante. Recruter des SDR coûte cher, la formation prend des mois, et le turnover casse la dynamique. Pendant ce temps, les prospects reçoivent des dizaines de messages génériques chaque jour, rendant la pertinence et la qualité plus importantes que le volume.</p>
              <p>L'automatisation commerciale IA répond à cela en combinant prospection intelligente, enrichissement de données et outreach personnalisé dans des systèmes qui opèrent de manière consistante. Des outils comme Clay pour l'intelligence de données, Apollo et LinkedIn Sales Navigator pour la prospection, et des modèles IA pour la personnalisation créent une infrastructure pipeline qui opère à grande échelle avec précision.</p>
              <p>Les entreprises qui construisent les pipelines les plus solides n'envoient pas simplement plus de messages. Elles utilisent des <Link to="/fr/conseil-ia" className="text-primary hover:underline">systèmes IA</Link> pour envoyer un outreach meilleur, plus pertinent à des prospects mieux qualifiés sur plusieurs canaux — avec la discipline commerciale d'une <Link to="/fr/ventes" className="text-primary hover:underline">opération de revenus</Link> bien structurée.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Architecture d'automatisation commerciale</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Search className="w-5 h-5" />, title: "Prospection intelligente", desc: "Sourcing et identification de prospects IA via Clay, Apollo et LinkedIn — qualification basée sur les signaux firmographiques, technographiques et d'intention." },
                { icon: <Mail className="w-5 h-5" />, title: "Outreach personnalisé", desc: "Messages rédigés par l'IA, personnalisés individuellement selon les données du prospect, le contexte de l'entreprise et la pertinence sectorielle." },
                { icon: <Database className="w-5 h-5" />, title: "Séquences multicanal", desc: "Outreach coordonné sur email, LinkedIn et téléphone — avec timing, séquençage et variation de messages optimisés par l'IA pour chaque canal." },
                { icon: <Users className="w-5 h-5" />, title: "Workflows SDR augmentés par l'IA", desc: "Automatisation complète du workflow SDR — de la qualification à la prise de rendez-vous — avec supervision humaine aux points de décision complexes." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Gestion de pipeline & CRM", desc: "Mises à jour CRM automatisées, suivi des deals, reporting pipeline et analytics de performance — HubSpot ou Salesforce toujours à jour." },
                { icon: <Target className="w-5 h-5" />, title: "Affinage ICP & Optimisation", desc: "Analyse IA continue des données de réponse, patterns de conversion et résultats — affinement progressif de votre profil client idéal et stratégie de messaging." }
              ].map((item, i) => (
                <Card key={i} className="border border-border"><CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { metric: "15–30+", label: "Réunions qualifiées / mois" },
                { metric: "3+", label: "Canaux d'outreach coordonnés" },
                { metric: "< 30 jours", label: "Jusqu'aux premières réunions" }
              ].map((item, i) => (
                <Card key={i} className="border border-border"><CardContent className="p-6">
                  <div className="text-3xl font-semibold text-primary mb-1">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Construisez votre infrastructure pipeline</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une évaluation pour identifier comment l'IA peut renforcer votre prospection, outreach et gestion de pipeline.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Évaluer vos opérations commerciales <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "SDR externalisé & Systèmes de revenus", desc: "Exécution SDR humaine augmentée par l'infrastructure IA.", link: "/fr/sdr-externalise" },
                { title: "Agents IA pour les ventes", desc: "Systèmes agentiques pour la prospection et l'outreach autonomes.", link: "/fr/agents-ia-entreprise" },
                { title: "Automatisation marketing IA", desc: "Systèmes de contenu et campagnes qui complètent votre pipeline.", link: "/fr/automation-marketing-ia" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce que l'automatisation commerciale IA ?", a: "Elle systématise le développement commercial — prospection, recherche, outreach personnalisé, relances et suivi pipeline — en utilisant l'IA pour la qualité, la personnalisation et la consistance à grande échelle." },
                { q: "En quoi diffère-t-elle du SDR externalisé ?", a: "Le SDR externalisé fournit des commerciaux humains. L'automatisation commerciale IA fournit les systèmes qui augmentent les humains ou opèrent de manière indépendante. Beaucoup d'entreprises combinent les deux." },
                { q: "Quels outils intégrez-vous ?", a: "Clay, Apollo, LinkedIn Sales Navigator, HubSpot, Salesforce, Instantly, Lemlist et modèles IA d'OpenAI et Anthropic pour la personnalisation et la qualification." },
                { q: "Quels résultats attendre ?", a: "Les systèmes bien conçus génèrent typiquement 15 à 30+ réunions qualifiées par mois, avec une meilleure visibilité pipeline et une activité outbound plus consistante." },
                { q: "L'outreach IA est-il du spam ?", a: "Pas lorsqu'il est conçu correctement. L'outreach personnalisé par l'IA, basé sur une vraie recherche de prospects et la pertinence, surperforme les emails génériques. La qualité prime sur le volume." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Discutons de votre stratégie pipeline</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez un appel ciblé pour évaluer où l'IA peut améliorer votre prospection, outreach et opérations commerciales.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomationCommercialeIAFR;

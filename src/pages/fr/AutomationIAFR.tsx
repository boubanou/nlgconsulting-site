import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Workflow, Zap, Clock, TrendingUp, Settings, CheckCircle, Bot, BarChart3 } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AutomationIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Services d'Automatisation IA pour Entreprises",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Automatisation des workflows business avec l'IA. Nous concevons et déployons des systèmes d'automatisation utilisant Make, Zapier, n8n et des intégrations IA sur mesure.",
        "url": "https://www.nlgconsulting.co/fr/automation-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Automation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'automatisation IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation IA combine l'intelligence artificielle avec des outils d'automatisation de workflows pour exécuter des tâches complexes sans intervention humaine — de la qualification de leads au traitement de documents en passant par la création de contenu." }},
          { "@type": "Question", "name": "Quels processus peuvent être automatisés avec l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Prospection commerciale, création de contenu, reporting, qualification de leads, gestion d'emails, onboarding client, analyse de données, publication sur les réseaux sociaux, et bien d'autres processus métier." }},
          { "@type": "Question", "name": "Quels outils utilisez-vous ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous utilisons Make, Zapier, n8n, ainsi que les APIs d'OpenAI et Anthropic, connectés à vos outils existants comme HubSpot, Salesforce, Notion, Airtable, Slack et Google Workspace." }},
          { "@type": "Question", "name": "Combien de temps faut-il pour mettre en place une automatisation ?", "acceptedAnswer": { "@type": "Answer", "text": "Les automatisations simples peuvent être déployées en quelques jours. Les systèmes plus complexes nécessitent 2 à 4 semaines. Nous commençons toujours par un audit pour prioriser les quick wins." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Automatisation IA", "item": "https://www.nlgconsulting.co/fr/automation-ia" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automatisation IA pour Entreprises | Workflows & Processus | NLG Consulting</title>
        <meta name="description" content="Automatisez vos workflows avec l'IA. Nous concevons et déployons des systèmes d'automatisation pour le marketing, les ventes et les opérations avec Make, Zapier et des intégrations sur mesure." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/automation-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-automation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-automation" />
        <meta property="og:title" content="Automatisation IA pour Entreprises | NLG Consulting" />
        <meta property="og:description" content="Concevez et déployez des systèmes d'automatisation IA pour vos opérations business." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/automation-ia" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Automatisation IA</Badge>
            <h1 className="mb-6">
              Automatisation IA{" "}<span className="text-gradient">pour Entreprises</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Éliminez les tâches répétitives, accélérez vos processus et libérez le temps de vos équipes grâce à des workflows automatisés alimentés par l'intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un audit automatisation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Ce que nous automatisons</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              L'IA transforme chaque département de votre entreprise. Voici les domaines où l'automatisation a le plus d'impact.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, title: "Marketing", desc: "Création de contenu, posts LinkedIn, newsletters, SEO, design — automatisez votre machine marketing." },
                { icon: Zap, title: "Ventes", desc: "Prospection, qualification de leads, enrichissement de données, séquences de relance automatisées." },
                { icon: Settings, title: "Opérations", desc: "Onboarding, reporting, gestion de documents, synchronisation de données entre outils." },
                { icon: Bot, title: "Service client", desc: "Chatbots intelligents, réponses automatisées, routage de tickets, FAQ dynamiques." },
                { icon: BarChart3, title: "Finance & Admin", desc: "Facturation, suivi des dépenses, reporting financier, réconciliation automatique." },
                { icon: Workflow, title: "Workflows sur mesure", desc: "Tout processus métier répétitif peut être automatisé. Nous concevons des solutions adaptées." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-4">L'écosystème d'outils que nous maîtrisons</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Nous travaillons avec les plateformes leaders de l'automatisation et de l'IA pour construire des systèmes robustes et évolutifs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Make (Integromat)", "Zapier", "n8n", "OpenAI / ChatGPT", "Anthropic / Claude", "HubSpot", "Notion", "Airtable", "Slack", "Google Workspace", "Clay", "Salesforce"].map((tool, i) => (
                <div key={i} className="text-center p-4 rounded-lg border border-border">
                  <span className="text-sm font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre processus en 4 étapes</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Audit des workflows", desc: "Nous cartographions vos processus actuels, identifions les goulots d'étranglement et quantifions le temps perdu sur les tâches manuelles." },
                { step: "02", title: "Conception de l'automatisation", desc: "Nous concevons l'architecture — sélection des outils, définition des déclencheurs et actions, planification des intégrations." },
                { step: "03", title: "Construction & Test", desc: "Notre équipe construit les workflows d'automatisation, connecte vos systèmes et teste de manière approfondie." },
                { step: "04", title: "Déploiement & Optimisation", desc: "Nous déployons en production, surveillons les performances et optimisons en continu sur la base des résultats." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Prêt à automatiser ?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Réservez un audit gratuit pour découvrir combien de temps et d'argent vous pouvez économiser grâce à l'automatisation IA.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un audit automatisation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        {/* Related */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Conseil en IA", desc: "Commencez par la stratégie — comprenez où l'IA s'intègre dans votre entreprise.", link: "/fr/conseil-ia" },
                { title: "Agents IA", desc: "Déployez des agents IA autonomes pour les tâches complexes.", link: "/fr/agents-ia-entreprise" },
                { title: "Implémentation IA externalisée", desc: "Confiez-nous l'exécution complète de vos projets d'automatisation.", link: "/fr/implementation-ia-externalisee" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce que l'automatisation IA ?", a: "L'automatisation IA combine l'intelligence artificielle avec des outils d'automatisation de workflows pour exécuter des tâches complexes sans intervention humaine — de la qualification de leads au traitement de documents en passant par la création de contenu." },
                { q: "Quels processus peuvent être automatisés avec l'IA ?", a: "Prospection commerciale, création de contenu, reporting, qualification de leads, gestion d'emails, onboarding client, analyse de données, publication sur les réseaux sociaux, et bien d'autres processus métier." },
                { q: "Quels outils utilisez-vous ?", a: "Nous utilisons Make, Zapier, n8n, ainsi que les APIs d'OpenAI et Anthropic, connectés à vos outils existants comme HubSpot, Salesforce, Notion, Airtable, Slack et Google Workspace." },
                { q: "Combien de temps faut-il pour mettre en place une automatisation ?", a: "Les automatisations simples peuvent être déployées en quelques jours. Les systèmes plus complexes nécessitent 2 à 4 semaines. Nous commençons toujours par un audit pour prioriser les quick wins." },
                { q: "Quel est le ROI de l'automatisation IA ?", a: "Les entreprises qui automatisent leurs processus constatent typiquement une réduction de 40 à 70% du temps passé sur les tâches manuelles, ainsi qu'une amélioration significative de la qualité et de la cohérence." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Automatisez votre croissance</h2>
            <p className="text-lg text-muted-foreground mb-8">Discutons de vos besoins en automatisation lors d'un appel gratuit.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver une consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomationIAFR;

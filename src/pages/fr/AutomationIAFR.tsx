import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Workflow, Zap, Settings, BarChart3, FileText, Mail, ShoppingCart } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AutomationIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Automatisation IA des Workflows Business",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Automatisation de workflows avec l'IA pour les ventes, le marketing, les opérations et l'infrastructure de revenus. Systèmes d'automatisation avec Make, n8n et intégrations IA sur mesure pour FinTech, PropTech et B2B.",
        "url": "https://www.nlgconsulting.co/fr/automation-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Workflow Automation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'automatisation IA des workflows ?", "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation IA des workflows combine des modèles IA avec des plateformes d'orchestration pour exécuter des processus business — de la qualification de leads à la création de contenu — avec un minimum d'intervention manuelle et une qualité supérieure à l'automatisation par règles seule." }},
          { "@type": "Question", "name": "Quels processus peuvent être automatisés avec l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Prospection commerciale, production de contenu, qualification de leads, gestion CRM, reporting, traitement de documents, séquences email, réseaux sociaux et workflows opérationnels — tout processus avec des patterns répétitifs et des inputs définis." }},
          { "@type": "Question", "name": "Quels outils utilisez-vous ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous construisons sur Make, n8n et des intégrations custom, combinés avec les modèles IA d'OpenAI et Anthropic (Claude). Le tout connecté à HubSpot, Salesforce, Clay, Notion, Airtable, Slack et APIs custom." }},
          { "@type": "Question", "name": "Combien de temps prend l'implémentation ?", "acceptedAnswer": { "@type": "Answer", "text": "Les workflows simples se déploient en quelques jours. Les systèmes complets multi-départements prennent typiquement 2 à 6 semaines. Nous commençons par les workflows à fort impact et étendons progressivement." }}
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
        <title>Automatisation IA des Workflows | Processus Business | NLG</title>
        <meta name="description" content="Automatisation de workflows avec l'IA pour les ventes, le marketing et les opérations. Systèmes d'automatisation qui réduisent la charge manuelle et améliorent la qualité d'output pour les entreprises B2B." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/automation-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-automation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-automation" />
        <meta property="og:title" content="Automatisation IA des Workflows Business | NLG" />
        <meta property="og:description" content="Automatisation IA pour les ventes, le marketing et les opérations. Réduisez la charge manuelle, améliorez la qualité." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/automation-ia" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Automatisation IA</Badge>
            <h1 className="mb-6">
              Automatisation IA{" "}<span className="text-gradient">des Workflows Business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nous concevons et déployons des systèmes d'automatisation IA qui remplacent les workflows manuels dans les ventes, le marketing, le contenu et les opérations — réduisant les coûts, améliorant la consistance et créant une infrastructure de revenus scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Évaluer votre potentiel d'automatisation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">Le coût des opérations manuelles</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Pour la plupart des entreprises FinTech, opérateurs PropTech, équipes SaaS et sociétés de services B2B, le goulot d'étranglement opérationnel n'est pas la stratégie — c'est la bande passante d'exécution. Les équipes passent des heures sur la saisie de données, la recherche de prospects, la rédaction de contenu, la génération de rapports, les mises à jour CRM et les séquences de relance.</p>
              <p>L'automatisation IA des workflows change cette équation. En combinant des modèles IA avec des plateformes d'orchestration comme Make et n8n, connectées à vos outils existants, nous construisons des systèmes qui gèrent ces processus en continu — avec une consistance supérieure et un coût inférieur à l'exécution manuelle.</p>
              <p>La différence entre les entreprises qui scalent efficacement et les autres réside souvent dans la qualité de leur automatisation opérationnelle. Pas simplement avoir des outils, mais avoir des <Link to="/fr/conseil-ia" className="text-primary hover:underline">systèmes bien conçus</Link> qui connectent données, logique et IA dans des workflows qui tournent sans supervision constante.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Ce que nous automatisons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Mail className="w-5 h-5" />, title: "Workflows Marketing & Contenu", desc: "Création de contenu, rédaction SEO, planification réseaux sociaux, séquences email, reporting de campagnes et nurturing de leads — un output consistant à grande échelle." },
                { icon: <ShoppingCart className="w-5 h-5" />, title: "Opérations Ventes & Pipeline", desc: "Recherche de prospects, enrichissement de données, séquences outbound, mises à jour CRM, automatisation des relances et reporting pipeline." },
                { icon: <FileText className="w-5 h-5" />, title: "Systèmes de Production de Contenu", desc: "Articles de blog, newsletters, études de cas, contenu social et documentation — production assistée par IA avec consistance de marque et workflows éditoriaux." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Reporting & Business Intelligence", desc: "Tableaux de bord automatisés, rapports de performance, collecte de données et workflows analytiques — donnant aux dirigeants une visibilité sans compilation manuelle." },
                { icon: <Settings className="w-5 h-5" />, title: "Opérations & Administration", desc: "Traitement de documents, synchronisation de données, workflows de facturation, séquences d'onboarding et gestion des processus internes." },
                { icon: <Zap className="w-5 h-5" />, title: "Architecture d'Intégration Custom", desc: "Connexion de votre stack — HubSpot, Salesforce, Clay, Notion, Airtable, Slack — en workflows unifiés et intelligents qui partagent données et déclenchent des actions." }
              ].map((item, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre processus d'automatisation</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Audit opérationnel", desc: "Nous cartographions vos workflows actuels, identifions les goulots d'étranglement manuels et quantifions le temps et le coût des processus à automatiser — en ciblant les opportunités à plus fort levier." },
                { step: "02", title: "Architecture système", desc: "Nous concevons l'architecture d'automatisation — sélection d'outils, définition des déclencheurs et actions, cartographie des flux de données et planification des intégrations IA." },
                { step: "03", title: "Construction & Validation", desc: "Nous construisons les workflows, connectons les systèmes et testons rigoureusement. Pour les processus nécessitant du jugement, nous intégrons des modèles IA avec des points de contrôle humains." },
                { step: "04", title: "Déploiement, Monitoring & Extension", desc: "Mise en production avec monitoring et optimisation continue. À mesure que les workflows prouvent leur valeur, nous étendons l'automatisation à d'autres processus." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Construisez votre infrastructure d'automatisation</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Réservez une évaluation pour identifier les workflows avec le plus fort potentiel d'automatisation dans votre entreprise.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Évaluer votre potentiel <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Conseil en IA", desc: "Advisory stratégique en IA pour les opérations et la croissance.", link: "/fr/conseil-ia" },
                { title: "Agents IA pour entreprises", desc: "Systèmes agentiques pour les processus complexes nécessitant raisonnement et adaptation.", link: "/fr/agents-ia-entreprise" },
                { title: "Automatisation marketing IA", desc: "Systèmes de contenu, SEO et campagnes automatisés.", link: "/fr/automation-marketing-ia" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span>
                    </CardContent>
                  </Card>
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
                { q: "Qu'est-ce que l'automatisation IA des workflows ?", a: "Elle combine des modèles IA avec des plateformes d'orchestration pour exécuter des processus business — qualification de leads, création de contenu, mises à jour CRM et reporting — avec un minimum d'intervention manuelle et une qualité supérieure." },
                { q: "Quels processus peuvent être automatisés ?", a: "Prospection commerciale, production de contenu, qualification de leads, gestion CRM, reporting, traitement de documents, séquences email, réseaux sociaux et workflows opérationnels." },
                { q: "Quels outils utilisez-vous ?", a: "Make, n8n et intégrations custom, combinés avec l'IA d'OpenAI et Anthropic (Claude). Le tout connecté à HubSpot, Salesforce, Clay, Notion, Airtable, Slack et APIs custom." },
                { q: "En quoi l'automatisation IA diffère de l'automatisation traditionnelle ?", a: "L'automatisation traditionnelle suit des règles rigides. L'automatisation IA ajoute l'intelligence — comprendre le contexte, générer du contenu, prendre des décisions et gérer des tâches nécessitant du jugement." },
                { q: "Combien de temps prend l'implémentation ?", a: "Les workflows simples se déploient en quelques jours. Les systèmes complets multi-départements prennent 2 à 6 semaines. Nous commençons par les workflows à fort impact et étendons progressivement." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Évaluez votre potentiel d'automatisation</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez un appel ciblé pour identifier vos opportunités d'automatisation à plus fort levier.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver une évaluation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomationIAFR;

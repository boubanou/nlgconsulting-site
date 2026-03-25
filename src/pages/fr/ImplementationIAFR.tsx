import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building2, Users, Workflow, Bot, Shield, CheckCircle, Clock, Brain, TrendingUp, GraduationCap } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ImplementationIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Opérations IA Externalisées | Équipe IA Fractionnelle",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Votre équipe IA fractionnelle. Nous déployons des workflows IA, construisons des systèmes agentiques et gérons votre infrastructure IA — pour que vous vous concentriez sur le revenu.",
        "url": "https://www.nlgconsulting.co/fr/implementation-ia-externalisee",
        "areaServed": "Worldwide",
        "serviceType": "Outsourced AI Implementation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'implémentation IA externalisée ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est l'engagement d'une équipe externe opérationnelle pour concevoir, déployer et gérer vos systèmes IA — de l'automatisation de workflows à l'IA agentique — sans construire un département IA en interne." }},
          { "@type": "Question", "name": "Pourquoi externaliser les opérations IA plutôt que recruter ?", "acceptedAnswer": { "@type": "Answer", "text": "Recruter des spécialistes IA coûte 80K-200K€+ par personne et prend des mois. L'externalisation vous donne un accès immédiat à une expertise de production, un déploiement plus rapide et la flexibilité de scaler sans effectif fixe." }},
          { "@type": "Question", "name": "Gardons-nous la propriété des systèmes ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Tout ce que nous construisons — workflows, prompts, intégrations, documentation — vous appartient. Nous formons votre équipe à gérer les systèmes de manière autonome quand vous êtes prêts." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Opérations IA Externalisées", "item": "https://www.nlgconsulting.co/fr/implementation-ia-externalisee" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Opérations IA Externalisées | Équipe IA Fractionnelle | NLG</title>
        <meta name="description" content="Votre équipe IA fractionnelle. Déploiement de workflows IA, systèmes agentiques et infrastructure IA pour FinTech, SaaS & entreprises B2B. Sans recrutement." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <meta property="og:title" content="Opérations IA Externalisées | Équipe IA Fractionnelle | NLG" />
        <meta property="og:description" content="Votre équipe IA fractionnelle — déploiement, gestion et optimisation de vos systèmes IA." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Opérations IA</Badge>
            <h1 className="mb-6">Votre Équipe{" "}<span className="text-gradient">IA Fractionnelle</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vous n'avez pas besoin d'un département IA interne. Nous opérons comme votre équipe IA fractionnelle — déploiement de workflows, construction de systèmes agentiques, gestion de l'infrastructure — pour que vous vous concentriez sur le revenu et la croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Discuter de vos besoins IA <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">Construire vs. Externaliser</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Chaque entreprise a besoin de capacités IA. Pas chaque entreprise a besoin d'un département IA. Recruter des ingénieurs IA, des spécialistes prompt et des architectes d'automatisation coûte 80K-200K€+ par personne — et trouver des opérateurs qualifiés est extrêmement compétitif.</p>
              <p>Pour les entreprises <Link to="/fr/ia-pour-saas" className="text-primary hover:underline">SaaS</Link>, <Link to="/fr/ia-pour-fintech" className="text-primary hover:underline">FinTech</Link> et <Link to="/fr/ia-pour-services-b2b" className="text-primary hover:underline">B2B</Link>, la voie pragmatique est d'externaliser les opérations IA à un opérateur expérimenté. Accès immédiat à une expertise de production, déploiement plus rapide, flexibilité de scaler sans effectif fixe.</p>
              <p>Les entreprises qui déploient le plus vite des <Link to="/fr/agents-ia-entreprise" className="text-primary hover:underline">agents IA</Link>, de l'<Link to="/fr/automation-ia" className="text-primary hover:underline">automatisation de workflows</Link> et des systèmes IA connectés au revenu — quel que soit le mode d'accès à l'expertise — détiennent l'avantage compétitif.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Ce que nous opérons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Stratégie & Roadmap IA", desc: "Définition de votre roadmap IA — identification des opportunités à fort impact, sélection des outils, priorisation liée aux résultats revenue." },
                { icon: Workflow, title: "Systèmes d'automatisation", desc: "Conception et déploiement d'automatisation de production — Make, n8n, Claude Code et intégrations custom." },
                { icon: Bot, title: "Systèmes IA agentiques", desc: "Construction d'agents IA multi-étapes pour des fonctions business spécifiques — enrichissement de leads, qualification, support et reporting." },
                { icon: TrendingUp, title: "IA commerciale & RevOps", desc: "Automatisation outbound, enrichissement de leads, intelligence pipeline et optimisation CRM — connectés au revenu." },
                { icon: Shield, title: "Monitoring & Maintenance", desc: "Surveillance continue, correction de bugs, optimisation des performances et évolution de vos systèmes IA." },
                { icon: GraduationCap, title: "Transfert de compétences", desc: "Montée en compétence progressive de votre équipe — prompts, outils IA, gestion des systèmes — en parallèle de l'implémentation." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Comment ça fonctionne</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Discovery & Audit", desc: "Cartographie de votre stack technique, vos workflows, vos points de friction et vos objectifs de croissance via un diagnostic opérationnel structuré." },
                { step: "02", title: "Roadmap IA", desc: "Conception d'une roadmap d'implémentation — priorisée par impact revenue, organisée en sprints, liée à des résultats business mesurables." },
                { step: "03", title: "Déploiement en sprints", desc: "Notre équipe construit et déploie les systèmes IA — workflows, agents, intégrations — en sprints itératifs avec points de suivi réguliers." },
                { step: "04", title: "Opérations continues", desc: "Gestion, monitoring, optimisation et évolution de vos systèmes IA — en tant qu'équipe IA fractionnelle dédiée." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi externaliser vos opérations IA</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Accès immédiat à une expertise IA de production — sans cycle de recrutement",
                "Coût 60-80% inférieur à une équipe IA interne",
                "Délai de mise en production réduit — systèmes déployés en semaines, pas en trimestres",
                "Flexibilité de monter ou réduire l'engagement selon les besoins business",
                "Propriété totale de tous les systèmes, workflows et documentation",
                "Transfert de compétences progressif — votre équipe monte en autonomie"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Vos opérations IA, à la demande</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel découverte pour explorer comment les opérations IA fractionnelles peuvent accélérer votre croissance sans overhead.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Appel découverte gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Conseil en IA", desc: "Stratégie IA complète et architecture de systèmes de croissance.", link: "/fr/conseil-ia" },
                { title: "Automatisation IA", desc: "Projets d'automatisation de workflows et de systèmes spécifiques.", link: "/fr/automation-ia" },
                { title: "Prompt Engineering", desc: "Montez en compétence en parallèle de l'implémentation de production.", link: "/fr/conseil-prompt-engineering" }
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
                { q: "Qu'est-ce que l'implémentation IA externalisée ?", a: "C'est l'engagement d'une équipe externe opérationnelle pour concevoir, déployer et gérer vos systèmes IA — de l'automatisation de workflows à l'IA agentique — sans construire un département IA en interne." },
                { q: "Pourquoi externaliser plutôt que recruter ?", a: "Recruter des spécialistes IA coûte 80K-200K€+ par personne et prend des mois. L'externalisation vous donne un accès immédiat à une expertise de production et la flexibilité de scaler." },
                { q: "Que gère une équipe IA fractionnelle ?", a: "Stratégie IA, automatisation de workflows, développement d'agents, prompt engineering, intégrations, déploiement, monitoring et transfert de compétences progressif." },
                { q: "Comment fonctionne l'engagement ?", a: "Nous commençons par le discovery, puis implémentons en sprints liés aux résultats business. Engagements en mode projet (scope fixe) ou continu (retainer mensuel)." },
                { q: "Gardons-nous la propriété des systèmes ?", a: "Oui. Tout ce que nous construisons — workflows, prompts, intégrations, documentation — vous appartient. Nous formons votre équipe à gérer en autonomie quand vous êtes prêts." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Prêt à déployer l'IA sans l'overhead ?</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez une consultation gratuite pour explorer comment les opérations IA fractionnelles peuvent fonctionner pour votre entreprise.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ImplementationIAFR;
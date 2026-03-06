import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Brain, Target, Users, Building2, Lightbulb, CheckCircle, Workflow, TrendingUp } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ConseilIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Conseil en Intelligence Artificielle pour Entreprises",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Conseil stratégique en IA pour entreprises, startups et PME. Nous vous aidons à comprendre, planifier et déployer l'intelligence artificielle dans vos opérations.",
        "url": "https://www.nlgconsulting.co/fr/conseil-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Consulting"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que le conseil en IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Le conseil en IA aide les entreprises à comprendre comment l'intelligence artificielle peut transformer leurs opérations, leur marketing, leurs ventes et leurs processus internes. Un consultant IA identifie les opportunités, conçoit la stratégie et accompagne l'implémentation." }},
          { "@type": "Question", "name": "Le conseil en IA est-il adapté aux PME ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument. L'IA n'est plus réservée aux grandes entreprises. Les PME peuvent tirer parti d'outils comme ChatGPT, Claude, Make ou Zapier pour automatiser des tâches répétitives, améliorer leur marketing et accélérer leurs ventes avec un investissement raisonnable." }},
          { "@type": "Question", "name": "Combien coûte un accompagnement en conseil IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les tarifs varient selon la complexité du projet. Nous proposons des missions ponctuelles (audit, roadmap) et des accompagnements continus (fractional AI consultant). Chaque engagement commence par un appel découverte gratuit." }},
          { "@type": "Question", "name": "Par où commencer avec l'IA dans mon entreprise ?", "acceptedAnswer": { "@type": "Answer", "text": "Commencez par un audit IA : identifiez les processus chronophages, les tâches répétitives et les points de friction dans vos opérations. C'est exactement ce que nous faisons lors de notre premier échange." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Conseil IA", "item": "https://www.nlgconsulting.co/fr/conseil-ia" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Conseil en IA pour Entreprises | Stratégie & Implémentation | NLG Consulting</title>
        <meta name="description" content="Conseil stratégique en intelligence artificielle pour entreprises, startups et PME. Audit IA, roadmap, formation et accompagnement à l'implémentation. Réservez un appel gratuit." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/conseil-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-consulting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-consulting" />
        <meta property="og:title" content="Conseil en IA pour Entreprises | NLG Consulting" />
        <meta property="og:description" content="Conseil stratégique en intelligence artificielle pour entreprises. Audit, roadmap et implémentation IA." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/conseil-ia" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Conseil IA</Badge>
            <h1 className="mb-6">
              Conseil en Intelligence Artificielle{" "}
              <span className="text-gradient">pour Entreprises</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprenez où et comment l'IA peut transformer vos opérations. Nous vous aidons à construire une stratégie IA claire, identifier les opportunités concrètes et déployer les bons outils — sans complexité inutile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver une consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Pourquoi les entreprises ont besoin de conseil en IA</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              L'intelligence artificielle évolue à une vitesse sans précédent. Des outils comme ChatGPT, Claude d'Anthropic ou les systèmes de Google transforment la façon dont les entreprises opèrent. Mais la plupart des organisations ne savent pas par où commencer, quels outils choisir, ni comment intégrer l'IA dans leurs processus existants.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Complexité technologique", desc: "L'écosystème IA est vaste — LLMs, agents, automatisation, fine-tuning. Un consultant vous aide à naviguer les choix et éviter les erreurs coûteuses." },
                { icon: Target, title: "Priorités floues", desc: "Beaucoup d'entreprises investissent dans l'IA sans stratégie claire. Nous identifions les cas d'usage à fort impact en premier." },
                { icon: TrendingUp, title: "Avantage compétitif", desc: "Les entreprises qui intègrent l'IA dans leurs processus prennent une avance significative sur leurs concurrents. Ne restez pas à la traîne." }
              ].map((item, i) => (
                <Card key={i} className="text-center border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mx-auto mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-4">Ce que comprend notre conseil en IA</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              De l'audit initial à l'implémentation complète, nous couvrons chaque étape de votre transformation IA.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Audit IA & Diagnostic", desc: "Analyse complète de vos processus, outils et workflows pour identifier les opportunités d'automatisation et d'optimisation par l'IA.", icon: Lightbulb },
                { title: "Roadmap & Stratégie IA", desc: "Élaboration d'une feuille de route IA adaptée à vos objectifs business, avec priorisation des initiatives et estimation des ROI.", icon: Target },
                { title: "Sélection d'outils & Architecture", desc: "Recommandations sur les outils IA les plus adaptés — ChatGPT, Claude, Make, Zapier, n8n — et conception de l'architecture technique.", icon: Workflow },
                { title: "Formation & Accompagnement", desc: "Formation de vos équipes au prompt engineering, aux outils IA et aux bonnes pratiques pour maximiser l'adoption en interne.", icon: Users }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-xl border border-border">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pour qui est le conseil en IA</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Building2, label: "Dirigeants de PME", desc: "Optimisez vos opérations et réduisez vos coûts grâce à l'IA." },
                { icon: Users, label: "Fondateurs de startups", desc: "Accélérez votre croissance avec des systèmes IA dès le départ." },
                { icon: TrendingUp, label: "Responsables marketing", desc: "Automatisez la création de contenu, le SEO et les campagnes." },
                { icon: Target, label: "Directeurs commerciaux", desc: "Automatisez la prospection, les relances et la qualification." },
                { icon: Brain, label: "Cabinets de conseil", desc: "Intégrez l'IA dans vos propres services et vos livrables." },
                { icon: Lightbulb, label: "Scale-ups", desc: "Structurez vos processus IA pour passer à l'échelle." }
              ].map((item, i) => (
                <div key={i} className="text-center p-4">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre méthodologie</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Appel découverte", desc: "Nous échangeons sur vos enjeux, vos objectifs et votre maturité IA actuelle. Cet appel de 15-30 minutes est gratuit et sans engagement." },
                { step: "02", title: "Audit & Diagnostic", desc: "Analyse approfondie de vos processus, outils et workflows. Identification des quick wins et des projets à fort impact." },
                { step: "03", title: "Stratégie & Roadmap", desc: "Livraison d'une feuille de route IA priorisée avec recommandations d'outils, estimations de coûts et calendrier d'implémentation." },
                { step: "04", title: "Implémentation & Support", desc: "Accompagnement dans le déploiement — que ce soit via nos équipes (outsourced) ou en formant les vôtres." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why NLG */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi NLG Consulting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Expertise terrain en IA, automation et business growth",
                "Approche pragmatique : résultats concrets, pas de buzzwords",
                "Expérience internationale (Europe, Moyen-Orient, Amérique)",
                "Capacité d'exécution : conseil + implémentation sous un même toit",
                "Connaissance approfondie des outils — OpenAI, Anthropic, Make, Clay, HubSpot",
                "Accompagnement bilingue français-anglais"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Prêt à explorer le potentiel de l'IA ?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Réservez un appel découverte gratuit pour discuter de votre stratégie IA.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild size="lg" variant="outline-light"><Link to="/fr/a-propos">Notre équipe</Link></Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Automation IA", desc: "Automatisez vos workflows avec l'intelligence artificielle.", link: "/fr/automation-ia" },
                { title: "Agents IA pour entreprise", desc: "Déployez des agents IA autonomes dans vos opérations.", link: "/fr/agents-ia-entreprise" },
                { title: "Implémentation IA externalisée", desc: "Confiez-nous l'exécution de vos projets IA.", link: "/fr/implementation-ia-externalisee" }
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
                { q: "Qu'est-ce que le conseil en IA ?", a: "Le conseil en IA aide les entreprises à comprendre comment l'intelligence artificielle peut transformer leurs opérations, leur marketing, leurs ventes et leurs processus internes. Un consultant IA identifie les opportunités, conçoit la stratégie et accompagne l'implémentation." },
                { q: "Le conseil en IA est-il adapté aux PME ?", a: "Absolument. L'IA n'est plus réservée aux grandes entreprises. Les PME peuvent tirer parti d'outils comme ChatGPT, Claude, Make ou Zapier pour automatiser des tâches répétitives, améliorer leur marketing et accélérer leurs ventes avec un investissement raisonnable." },
                { q: "Combien coûte un accompagnement en conseil IA ?", a: "Les tarifs varient selon la complexité du projet. Nous proposons des missions ponctuelles (audit, roadmap) et des accompagnements continus (fractional AI consultant). Chaque engagement commence par un appel découverte gratuit de 15 minutes." },
                { q: "Par où commencer avec l'IA dans mon entreprise ?", a: "Commencez par un audit IA : identifiez les processus chronophages, les tâches répétitives et les points de friction dans vos opérations. C'est exactement ce que nous faisons lors de notre premier échange." },
                { q: "Quelle est la différence entre conseil IA et implémentation IA ?", a: "Le conseil en IA se concentre sur la stratégie — comprendre où et comment utiliser l'IA. L'implémentation IA concerne l'exécution — construire, configurer et déployer les systèmes. Chez NLG, nous faisons les deux." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Transformez votre entreprise avec l'IA</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez un appel gratuit pour discuter de votre feuille de route IA.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver une consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ConseilIAFR;

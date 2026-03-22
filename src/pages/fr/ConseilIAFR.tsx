import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Brain, Target, Users, Building2, Lightbulb, CheckCircle, Workflow } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ConseilIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Conseil en IA pour la Croissance & les Opérations Business",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Conseil en IA opérationnel pour FinTech, PropTech, SaaS et entreprises B2B. Nous aidons les dirigeants à adopter des workflows IA, des systèmes agentiques et de l'IA opérationnelle pour améliorer la performance commerciale.",
        "url": "https://www.nlgconsulting.co/fr/conseil-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Consulting"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que le conseil en IA pour les entreprises ?", "acceptedAnswer": { "@type": "Answer", "text": "Le conseil en IA aide les entreprises à identifier où l'intelligence artificielle — workflows IA, systèmes agentiques, automatisation Claude Code — peut améliorer les opérations, les ventes, le marketing et la prise de décision. Il fait le lien entre les capacités IA disponibles et les résultats business concrets." }},
          { "@type": "Question", "name": "En quoi le conseil en IA diffère-t-il de l'achat d'outils IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les outils sont des composants. Le conseil en IA fournit l'architecture — comprendre quels processus bénéficient de l'IA, concevoir les workflows, sélectionner les modèles et construire des systèmes connectés aux opérations réelles." }},
          { "@type": "Question", "name": "Qui bénéficie du conseil en IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les fondateurs, CEO et dirigeants opérationnels de sociétés FinTech, PropTech, SaaS et B2B qui veulent adopter l'IA de manière structurée — liée au revenu, à l'efficacité et à des résultats mesurables." }},
          { "@type": "Question", "name": "Qu'est-ce que le conseil en IA agentique ?", "acceptedAnswer": { "@type": "Answer", "text": "Le conseil en IA agentique se concentre sur la conception de systèmes IA multi-étapes — des agents IA — capables de raisonner, planifier, utiliser des outils et exécuter des processus business complexes avec une supervision humaine." }}
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
        <title>Conseil en IA | Workflows & Systèmes Agentiques | NLG</title>
        <meta name="description" content="Conseil en IA opérationnel pour FinTech, PropTech, SaaS & B2B. Workflows IA, systèmes agentiques, automatisation Claude Code et IA opérationnelle liés au revenu et à l'efficacité." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/conseil-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-consulting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-consulting" />
        <meta property="og:title" content="Conseil en IA | Workflows & Systèmes Agentiques | NLG" />
        <meta property="og:description" content="Conseil en IA opérationnel : workflows, systèmes agentiques et IA opérationnelle pour FinTech, PropTech & B2B." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/conseil-ia" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Conseil IA</Badge>
            <h1 className="mb-6">
              Conseil en IA pour les{" "}
              <span className="text-gradient">Opérations & la Croissance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              La plupart des entreprises savent que l'IA compte. Peu savent comment la connecter au revenu, aux opérations et à la performance commerciale. Nous aidons les dirigeants à adopter des workflows IA, des systèmes agentiques et de l'IA opérationnelle de manière structurée et mesurable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/services">Explorer nos services</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">L'écart entre les outils IA et les résultats business</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                L'écosystème IA évolue rapidement — OpenAI, Claude d'Anthropic, Google Gemini et les modèles open source créent des capacités inédites. Mais pour la plupart des opérateurs FinTech, PropTech, fondateurs SaaS et entreprises B2B, le défi n'est pas l'accès à la technologie. C'est de savoir comment déployer l'IA de manière à réellement améliorer la performance commerciale.
              </p>
              <p>
                Sans conseil en IA structuré, les entreprises expérimentent sans direction : elles s'abonnent à des outils sous-utilisés, lancent des pilotes isolés sans plan d'intégration, ou retardent l'adoption pendant que les concurrents construisent des avantages opérationnels.
              </p>
              <p>
                Le conseil en IA connecte la technologie aux résultats. Concevoir des <Link to="/fr/automation-ia" className="text-primary hover:underline">workflows IA</Link> qui réduisent la charge manuelle, construire des <Link to="/fr/agents-ia-entreprise" className="text-primary hover:underline">systèmes IA agentiques</Link> pour les processus multi-étapes, et créer une clarté opérationnelle sur où l'IA apporte un vrai levier.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">Ce que couvre notre conseil en IA</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Du diagnostic au déploiement — une approche structurée de l'adoption IA pragmatique.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Target className="w-5 h-5" />, title: "Audit IA & Diagnostic opérationnel", desc: "Nous évaluons vos workflows, votre stack technologique et vos capacités d'équipe pour identifier où l'IA crée le plus de valeur business — pas de la nouveauté." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "Stratégie IA & Roadmap", desc: "Un plan d'implémentation priorisé connectant les initiatives IA au revenu, à l'efficacité et à la productivité du fondateur — avec des jalons clairs." },
                { icon: <Brain className="w-5 h-5" />, title: "IA Agentique & Design de Workflows", desc: "Architecture de systèmes IA multi-étapes — workflows Claude, agents IA et processus human-in-the-loop pour les ventes, le contenu et les opérations." },
                { icon: <Workflow className="w-5 h-5" />, title: "Intégration IA dans les processus", desc: "Connexion de l'IA à votre CRM, stack outbound, pipeline de contenu et outils opérationnels — HubSpot, Salesforce, Clay, Make et APIs custom." },
                { icon: <Users className="w-5 h-5" />, title: "Formation & Montée en compétences", desc: "Formation pratique en prompt engineering, workflows IA et IA opérationnelle — conçue pour les fondateurs, équipes commerciales et marketing." },
                { icon: <Building2 className="w-5 h-5" />, title: "Advisory IA en fractional", desc: "Accompagnement stratégique continu en IA à mesure que votre entreprise se développe — aligné sur votre stratégie GTM, RevOps et priorités commerciales." }
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
            <h2 className="text-center mb-10">Pour qui</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Fondateurs & CEO intégrant l'IA dans leurs systèmes de croissance",
                "Opérateurs FinTech et PropTech cherchant l'IA opérationnelle",
                "Sociétés SaaS intégrant l'IA dans le produit et le GTM",
                "Directeurs commerciaux concevant des pipelines augmentés par l'IA",
                "CMO construisant des systèmes de contenu et SEO IA",
                "Entreprises B2B structurant l'IA pour la délivrance et les opérations",
                "Équipes growth connectant l'IA au RevOps et à l'outbound",
                "Entreprises passant de l'expérimentation IA à l'exécution"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre méthode</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Audit & Diagnostic opérationnel", desc: "Nous cartographions vos workflows, processus commerciaux, opérations marketing et stack technique pour identifier les opportunités IA à fort levier." },
                { step: "02", title: "Architecture IA & Roadmap", desc: "Nous concevons le système — quels modèles IA, quels workflows, quelles intégrations, quels processus d'équipe évoluent. Un plan d'exécution pratique." },
                { step: "03", title: "Construction, Déploiement & Intégration", desc: "Nous implémentons les workflows IA et systèmes agentiques directement dans vos opérations — connectés à votre CRM, outils outbound et pipeline de contenu." },
                { step: "04", title: "Optimisation & Extension", desc: "Nous suivons les résultats, affinons les outputs IA, étendons à d'autres processus et construisons la capacité IA interne de votre équipe." }
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
            <h2 className="text-primary-foreground mb-6">Pourquoi NLG Consulting</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Nous ne sommes pas un cabinet de conseil classique qui livre des rapports. Nous sommes des opérateurs qui conçoivent et déploient des systèmes IA — avec plus de 15 ans d'expérience terrain en FinTech, PropTech, SaaS et revenue operations B2B. Stratégie et exécution sous un même toit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild size="lg" variant="outline-light"><Link to="/fr/a-propos">À propos du fondateur</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Automatisation IA des workflows", desc: "Déployez des workflows IA dans les ventes, le marketing et les opérations.", link: "/fr/automation-ia" },
                { title: "Agents IA pour entreprises", desc: "Systèmes agentiques pour la prospection, le contenu, la recherche et le support fondateur.", link: "/fr/agents-ia-entreprise" },
                { title: "Advisory stratégique", desc: "Structure GTM, RevOps et conseil en systèmes de croissance pour fondateurs.", link: "/fr/conseil" }
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
                { q: "Qu'est-ce que le conseil en IA pour les entreprises ?", a: "Le conseil en IA aide les entreprises à identifier où l'intelligence artificielle — workflows IA, systèmes agentiques, automatisation Claude Code — peut améliorer les opérations, les ventes, le marketing et la prise de décision." },
                { q: "En quoi le conseil en IA diffère-t-il de l'achat d'outils ?", a: "Les outils sont des composants. Le conseil en IA fournit l'architecture — comprendre quels processus bénéficient de l'IA, concevoir les workflows, et construire des systèmes connectés aux opérations réelles." },
                { q: "Qui bénéficie du conseil en IA ?", a: "Les fondateurs, CEO et dirigeants opérationnels de sociétés FinTech, PropTech, SaaS et B2B qui veulent adopter l'IA de manière structurée, liée au revenu et à des résultats mesurables." },
                { q: "Qu'est-ce que le conseil en IA agentique ?", a: "Il se concentre sur la conception de systèmes IA multi-étapes — des agents IA — capables de raisonner, planifier, utiliser des outils et exécuter des processus business complexes avec supervision humaine." },
                { q: "Combien de temps dure un engagement de conseil en IA ?", a: "Un audit et roadmap IA ciblés prennent typiquement 2 à 3 semaines. Les partenariats d'advisory et d'implémentation s'étendent sur plusieurs mois selon la complexité." }
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
            <h2 className="mb-4">Discutons de votre stratégie IA</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez un appel ciblé pour évaluer où l'IA peut améliorer vos opérations, votre performance commerciale et votre efficacité de fondateur.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ConseilIAFR;

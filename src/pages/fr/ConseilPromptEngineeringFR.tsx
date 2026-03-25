import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageSquare, Users, GraduationCap, CheckCircle, Lightbulb, Target, Brain, FileText } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ConseilPromptEngineeringFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Conseil en Prompt Engineering & Architecture de Workflows IA",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Conseil en prompt engineering pour équipes B2B. Conception de prompts de production pour Claude, GPT & Gemini. Intégration de la maîtrise IA dans vos opérations.",
        "url": "https://www.nlgconsulting.co/fr/conseil-prompt-engineering",
        "areaServed": "Worldwide",
        "serviceType": "Prompt Engineering Consulting"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que le conseil en prompt engineering ?", "acceptedAnswer": { "@type": "Answer", "text": "Le prompt engineering est la conception d'instructions structurées et de qualité production pour les modèles d'IA — transformant des interactions génériques en systèmes fiables et reproductibles qui génèrent des résultats mesurables en marketing, ventes et opérations." }},
          { "@type": "Question", "name": "Pourquoi le prompt engineering est-il critique pour l'adoption de l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'écart entre un output IA médiocre et exceptionnel est presque toujours le prompt. Des prompts bien conçus améliorent la qualité de 40-60%, réduisent les hallucinations et font la différence entre l'IA comme gadget et l'IA comme infrastructure opérationnelle." }},
          { "@type": "Question", "name": "Les équipes non-techniques peuvent-elles apprendre ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument. Nos programmes sont conçus pour les opérateurs business — marketing, ventes, stratégie, direction. Aucun code requis. Nous enseignons la pensée structurée et la conception systématique de prompts." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Conseil Prompt Engineering", "item": "https://www.nlgconsulting.co/fr/conseil-prompt-engineering" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Conseil Prompt Engineering | Workflows IA | NLG Consulting</title>
        <meta name="description" content="Conseil en prompt engineering pour équipes B2B. Concevez des prompts de production pour Claude, GPT & Gemini. Intégrez la maîtrise IA dans vos opérations business." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <meta property="og:title" content="Conseil Prompt Engineering | Workflows IA | NLG Consulting" />
        <meta property="og:description" content="Concevez des prompts de production pour Claude, GPT & Gemini. Intégrez la maîtrise IA dans vos opérations." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Prompt Engineering</Badge>
            <h1 className="mb-6">Prompt Engineering{" "}<span className="text-gradient">pour Opérations Business</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              L'écart entre l'IA comme gadget et l'IA comme infrastructure opérationnelle, c'est le prompt. Nous aidons les équipes B2B à concevoir des prompts de production pour Claude, GPT et Gemini — transformant vos outils IA en systèmes fiables qui génèrent des résultats mesurables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver une session <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">Pourquoi le prompt engineering est une compétence revenue</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>La plupart des équipes utilisent l'IA à 10% de son potentiel. Prompts non structurés, outputs génériques, conclusion : "l'IA n'est pas prête." La réalité : le modèle est prêt — les instructions ne le sont pas.</p>
              <p>Le prompt engineering est la conception d'instructions précises et structurées qui transforment les modèles d'IA en systèmes business fiables. Chain-of-thought, few-shot, rôles, outputs structurés — ces techniques font de ChatGPT ou Claude un actif opérationnel, pas un chatbot.</p>
              <p>Pour les entreprises <Link to="/fr/ia-pour-saas" className="text-primary hover:underline">SaaS</Link>, <Link to="/fr/ia-pour-fintech" className="text-primary hover:underline">FinTech</Link> et <Link to="/fr/ia-pour-services-b2b" className="text-primary hover:underline">B2B</Link>, le prompt engineering impacte directement la qualité du contenu, la personnalisation outbound, la qualification des leads et la productivité des fondateurs. C'est le socle de chaque <Link to="/fr/agents-ia-entreprise" className="text-primary hover:underline">agent IA</Link> et <Link to="/fr/automation-ia" className="text-primary hover:underline">workflow automatisé</Link> que vous déployez.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Ce que nous livrons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Workshops d'enablement", desc: "Programmes de formation en prompt engineering — des fondamentaux aux techniques avancées, adaptés à votre secteur et vos cas d'usage." },
                { icon: Brain, title: "Bibliothèques de prompts de production", desc: "Systèmes de prompts custom pour vos workflows — marketing, ventes, opérations — testés, versionnés et optimisés pour votre contexte." },
                { icon: FileText, title: "Architecture de workflows IA", desc: "Conception de workflows multi-étapes enchaînant des prompts en processus business complets — de l'enrichissement de leads aux pipelines de contenu." },
                { icon: Users, title: "Briefings exécutifs IA", desc: "Sessions stratégiques pour la direction sur les capacités IA, les limites et comment construire la maîtrise IA dans l'organisation." },
                { icon: Target, title: "Développement de cas d'usage", desc: "Identification, prototypage et validation de cas d'usage IA — avec prompts testés, outputs attendus et benchmarks de qualité." },
                { icon: Lightbulb, title: "Advisory continu", desc: "Support continu à mesure que les modèles évoluent — Claude, GPT, Gemini et capacités d'IA agentique." }
              ].map((item, i) => (
                <Card key={i} className="border border-border"><CardContent className="p-6">
                  <item.icon className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pour qui</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Équipes growth et marketing construisant des systèmes de contenu IA",
                "Équipes commerciales déployant l'IA pour la personnalisation outbound",
                "Équipes opérations intégrant l'IA dans leurs workflows quotidiens",
                "Fondateurs et dirigeants qui veulent structurer leur réflexion IA",
                "Agences ajoutant la livraison IA à leur offre de services",
                "Entreprises construisant la compétence IA en interne avant de scaler l'automatisation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Intégrez la maîtrise IA dans vos opérations</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel découverte pour concevoir un programme de prompt engineering aligné sur vos workflows et objectifs business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel découverte <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Conseil en IA", desc: "Stratégie IA complète et architecture de systèmes de croissance.", link: "/fr/conseil-ia" },
                { title: "Automatisation IA", desc: "Déployez vos compétences prompt engineering en automatisation de production.", link: "/fr/automation-ia" },
                { title: "Opérations IA externalisées", desc: "Nous gérons l'exécution IA pendant que votre équipe monte en compétence.", link: "/fr/implementation-ia-externalisee" }
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
                { q: "Qu'est-ce que le conseil en prompt engineering ?", a: "C'est la conception d'instructions de production pour les modèles d'IA — transformant des interactions génériques en systèmes fiables et reproductibles qui génèrent des résultats mesurables." },
                { q: "Pourquoi est-ce critique pour l'adoption de l'IA ?", a: "L'écart entre un output IA médiocre et exceptionnel est presque toujours le prompt. Des prompts bien conçus améliorent la qualité de 40-60% et rendent l'IA opérationnellement utile." },
                { q: "Les équipes non-techniques peuvent-elles apprendre ?", a: "Absolument. Nos programmes sont conçus pour les opérateurs business — marketing, ventes, stratégie, direction. Aucun code requis." },
                { q: "Quel lien avec les agents IA et les workflows ?", a: "Le prompt engineering est le socle de chaque agent IA et workflow automatisé. La qualité de vos systèmes agentiques dépend directement de la qualité des prompts qui les pilotent." },
                { q: "Quels modèles couvrez-vous ?", a: "Claude (Anthropic), GPT-4/5 (OpenAI), Gemini (Google), et modèles open-source. Les techniques sont agnostiques — ce qui compte, c'est la pensée structurée." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Faites de l'IA un levier opérationnel</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez une consultation gratuite pour concevoir un programme aligné sur vos objectifs de croissance.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ConseilPromptEngineeringFR;
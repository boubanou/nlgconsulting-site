import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, GraduationCap, Users, Target, Lightbulb, Zap, CheckCircle, BookOpen } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const FormationIAEntrepriseFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Formation & Enablement IA pour Entreprises", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Programmes de formation IA pratiques pour équipes business. Prompt engineering, workflows agentic, Claude Code et systèmes d'automatisation — personnalisés pour votre secteur.", "url": "https://www.nlgconsulting.co/fr/formation-ia-entreprise", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Que comprend une formation IA pour équipes ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos programmes couvrent l'utilisation pratique des outils IA, le prompt engineering, les workflows agentic, l'implémentation Claude Code et la stratégie IA — personnalisés pour les rôles et le secteur de votre équipe." }},
        { "@type": "Question", "name": "Sous quel délai les équipes voient-elles des résultats ?", "acceptedAnswer": { "@type": "Answer", "text": "La plupart des équipes constatent des gains de productivité mesurables dès la première semaine. Nos programmes incluent des workflows IA fonctionnels que les participants construisent pendant la formation." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Formation IA entreprise", "item": "https://www.nlgconsulting.co/fr/formation-ia-entreprise" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Formation IA Entreprise | Enablement & Workshops | NLG</title>
        <meta name="description" content="Formation IA pour équipes business. Prompt engineering, workflows agentic, Claude Code et automatisation. Programmes pratiques avec résultats dès la 1ère semaine." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/formation-ia-entreprise" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-training-for-teams" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/formation-ia-entreprise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-training-for-teams" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Enablement</Badge>
            <h1 className="mb-6">Formation IA pour{" "}<span className="text-gradient">équipes business</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vos équipes n'ont pas besoin de devenir ingénieurs — elles doivent devenir des opérateurs fluents en IA. Nos programmes pratiques délivrent des workflows IA fonctionnels dès le premier jour, pas des slides théoriques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Concevoir votre programme <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Programmes de formation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Fondamentaux IA", desc: "Workshop intensif d'une demi-journée sur les capacités IA, leurs limites et les applications pratiques mappées sur vos opérations et votre modèle de revenus." },
                { icon: BookOpen, title: "Prompt Engineering & Claude Code", desc: "Formation approfondie sur la création de prompts efficaces et la construction de workflows agentic avec Claude, GPT et Claude Code pour vos opérations réelles." },
                { icon: Zap, title: "Systèmes d'automatisation", desc: "Formation hands-on sur la construction de workflows IA opérationnels avec Make, n8n et automatisation personnalisée — connectés à votre stack technique." },
                { icon: Target, title: "IA pour équipes revenue", desc: "Formation pratique sur la prospection IA, la personnalisation d'outreach, l'automatisation CRM, l'intelligence pipeline et les workflows RevOps." },
                { icon: Lightbulb, title: "IA pour marketing & contenu", desc: "Systèmes de contenu, automatisation SEO, workflows de campagne et analyse de données — pour les équipes marketing qui doivent scaler leur production." },
                { icon: Users, title: "Stratégie IA dirigeants", desc: "Workshop exécutif sur la stratégie IA, les frameworks ROI, la gouvernance et la construction d'une organisation fluente en IA — pour fondateurs et C-level." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi se former avec des opérateurs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Formation pratique construite sur des implémentations IA réelles — pas de frameworks théoriques ni de démos vendeurs", "Personnalisée pour votre secteur, vos outils, les rôles de votre équipe et votre modèle de revenus", "Les participants repartent avec des workflows IA fonctionnels déployés dès le jour 1 — gains de productivité immédiats", "Coaching de suivi pour assurer l'adoption, mesurer les résultats et optimiser en continu", "Plus de 50 professionnels formés dans le SaaS, la FinTech, le conseil et les services B2B", "Connecté à notre pratique de conseil IA et d'automatisation — la formation est le point de départ de la transformation opérationnelle"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Rendez votre équipe fluente en IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel pour concevoir le bon programme d'enablement IA — personnalisé pour votre secteur et votre modèle de revenus.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Concevoir votre programme <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Que comprend une formation IA pour équipes ?", a: "Nos programmes couvrent l'utilisation pratique des outils IA, le prompt engineering, les workflows agentic, Claude Code et la stratégie IA — personnalisés pour les rôles et le secteur de votre équipe." },
                { q: "Sous quel délai les équipes voient-elles des résultats ?", a: "La plupart des équipes constatent des gains de productivité mesurables dès la première semaine. Les programmes incluent des workflows IA fonctionnels déployés immédiatement." },
                { q: "Faut-il un profil technique ?", a: "Non. Nos formations sont conçues pour les opérateurs business — équipes revenue, marketeurs, managers, fondateurs. On se concentre sur le déploiement pratique, pas l'ingénierie." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à rendre votre équipe fluente en IA ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default FormationIAEntrepriseFR;
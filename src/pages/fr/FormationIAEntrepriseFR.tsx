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
      { "@type": "Service", "name": "Formation IA pour entreprises", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Programmes de formation IA pour les équipes business. Apprenez à utiliser les outils IA pour le marketing, la vente, les opérations et la stratégie.", "url": "https://www.nlgconsulting.co/fr/formation-ia-entreprise", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Que comprend une formation IA pour équipes ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos formations couvrent l'utilisation pratique des outils IA, le prompt engineering, l'automatisation de workflows et la stratégie IA — personnalisées pour les rôles et l'industrie de votre équipe." }},
        { "@type": "Question", "name": "Combien de temps dure une formation IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les programmes vont d'un workshop intensif d'une journée à des programmes de coaching de 4 semaines, selon la taille de l'équipe et la profondeur souhaitée." }}
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
        <title>Formation IA pour entreprises | Workshops | NLG Consulting</title>
        <meta name="description" content="Formation IA pratique pour les équipes business. Workshops sur le prompt engineering, les outils IA, l'automatisation et la stratégie IA. Montez en compétences." />
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
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Formation</Badge>
            <h1 className="mb-6">Formation IA pour{" "}<span className="text-gradient">entreprises</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vos équipes n'ont pas besoin de devenir ingénieurs IA — elles doivent devenir des professionnels fluents en IA qui utilisent les bons outils pour travailler 3-5x plus vite. Nos formations pratiques transforment la façon dont votre équipe travaille avec l'IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation formation IA <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Programmes de formation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Fondamentaux IA", desc: "Workshop d'une demi-journée couvrant les capacités, limites et applications pratiques de l'IA pour votre contexte business." },
                { icon: BookOpen, title: "Prompt Engineering", desc: "Formation approfondie d'une journée sur la création de prompts efficaces pour ChatGPT, Claude et les outils IA spécialisés." },
                { icon: Zap, title: "Automatisation", desc: "Formation pratique sur la création de workflows IA avec Make, Zapier et les outils d'automatisation personnalisés." },
                { icon: Target, title: "IA pour la vente", desc: "Formation pratique sur la prospection IA, la personnalisation d'outreach, l'automatisation CRM et l'intelligence pipeline." },
                { icon: Lightbulb, title: "IA pour le marketing", desc: "Génération de contenu, optimisation SEO, automatisation de campagnes et analyse de données avec les outils IA." },
                { icon: Users, title: "Stratégie IA dirigeants", desc: "Workshop exécutif sur la stratégie IA, l'évaluation du ROI, la gestion des risques et la transformation organisationnelle." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi se former avec nous</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Formation pratique et hands-on — pas de cours théoriques", "Personnalisée pour votre industrie, vos outils et les rôles de votre équipe", "Cas d'usage business réels dès le premier jour — les participants repartent avec des workflows IA fonctionnels", "Coaching de suivi pour assurer l'adoption et l'amélioration continue", "Plus de 50 professionnels formés dans le SaaS, la FinTech, le conseil et les services", "Accès à notre bibliothèque de prompts IA et templates d'automatisation"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Montez en compétences IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour concevoir le bon programme de formation IA pour votre équipe.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Que comprend une formation IA pour équipes ?", a: "Nos formations couvrent l'utilisation pratique des outils IA, le prompt engineering, l'automatisation de workflows et la stratégie IA — personnalisées pour votre équipe." },
                { q: "Combien de temps dure une formation IA ?", a: "Les programmes vont d'un workshop intensif d'une journée à des programmes de coaching de 4 semaines." },
                { q: "Faut-il un profil technique ?", a: "Non. Nos formations sont conçues pour les professionnels business — marketeurs, commerciaux, managers, dirigeants. On se concentre sur l'utilisation pratique, pas le code." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à rendre votre équipe fluente en IA ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez une consultation gratuite.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default FormationIAEntrepriseFR;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Mail, TrendingUp, Target, Zap, BarChart3, CheckCircle, Megaphone } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AutomatiserMarketingIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "name": "Comment automatiser le marketing avec l'IA", "author": { "@type": "Person", "name": "Gregory Brenig" }, "publisher": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Guide étape par étape pour automatiser votre marketing avec l'IA. Campagnes email, création de contenu, SEO, réseaux sociaux et lead nurturing.", "url": "https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Quelles tâches marketing l'IA peut-elle automatiser ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA peut automatiser les campagnes email, la création de contenu, les publications réseaux sociaux, l'optimisation SEO, la gestion de publicités, le scoring de leads et la segmentation client." }},
        { "@type": "Question", "name": "Comment commencer à automatiser le marketing avec l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Commencez par la création de contenu et l'automatisation email — ce sont les plus rapides en ROI. Puis étendez au lead scoring, réseaux sociaux et optimisation publicitaire." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Automatiser le marketing avec l'IA", "item": "https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Comment automatiser le marketing avec l'IA | Guide | NLG</title>
        <meta name="description" content="Guide étape par étape pour automatiser le marketing avec l'IA. Email, contenu, SEO, réseaux sociaux et lead nurturing. Frameworks et outils recommandés." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Guide</Badge>
            <h1 className="mb-6">Comment automatiser le marketing{" "}<span className="text-gradient">avec l'IA</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les équipes marketing qui utilisent l'IA produisent 3-5x plus de contenu, répondent aux leads 10x plus vite et lancent des campagnes qui s'optimisent en continu. Voici exactement comment mettre ça en place — des quick wins à l'automatisation complète.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Ce que vous pouvez automatiser</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Création de contenu", desc: "Articles, réseaux sociaux, newsletters, études de cas — générés avec l'IA en maintenant votre voix de marque." },
                { icon: Mail, title: "Campagnes email", desc: "Séquences email automatisées, personnalisées à grande échelle avec des objets, du copywriting et des heures d'envoi optimisés par l'IA." },
                { icon: Target, title: "Scoring & Nurturing", desc: "Scoring de leads par IA basé sur le comportement, les firmographics et l'engagement — avec des séquences de nurturing automatisées." },
                { icon: BarChart3, title: "Optimisation SEO", desc: "Recherche de mots-clés, optimisation de contenu, analyse concurrentielle et suivi de positionnement — boostés par l'IA." },
                { icon: TrendingUp, title: "Gestion de campagnes pub", desc: "Copywriting pub optimisé par IA, ciblage d'audience, gestion des enchères et A/B testing sur Google, LinkedIn et Meta." },
                { icon: Zap, title: "Reporting & Analytics", desc: "Dashboards marketing automatisés, rapports de performance et génération d'insights — livrés dans votre boîte chaque semaine." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Implémentation étape par étape</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Étape 1 : Auditez vos workflows marketing actuels — identifiez les tâches répétitives et chronophages", "Étape 2 : Commencez par le contenu — utilisez l'IA pour les premiers jets, puis éditez pour la qualité", "Étape 3 : Mettez en place l'automatisation email — séquences écrites par l'IA déclenchées par le comportement", "Étape 4 : Implémentez le lead scoring — utilisez l'IA pour prioriser les leads selon les signaux d'engagement", "Étape 5 : Automatisez le reporting — connectez vos outils pour générer des dashboards hebdomadaires", "Étape 6 : Passez aux pubs et SEO — utilisez l'IA pour l'optimisation de campagnes et la stratégie de contenu"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Besoin d'aide pour automatiser votre marketing ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation et nous construirons votre roadmap d'automatisation marketing IA.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Obtenir votre roadmap <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Quelles tâches marketing l'IA peut-elle automatiser ?", a: "Campagnes email, création de contenu, publications réseaux sociaux, optimisation SEO, gestion de publicités, scoring de leads et segmentation client." },
                { q: "Comment commencer à automatiser le marketing avec l'IA ?", a: "Commencez par la création de contenu et l'automatisation email — ce sont les plus rapides en ROI. Puis étendez au lead scoring et à l'optimisation publicitaire." },
                { q: "L'IA va-t-elle remplacer mon équipe marketing ?", a: "Non. L'IA augmente votre équipe en gérant les tâches répétitives, leur permettant de se concentrer sur la stratégie, la créativité et les relations." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à automatiser votre marketing ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomatiserMarketingIAFR;

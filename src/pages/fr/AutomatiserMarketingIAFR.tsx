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
      { "@type": "Article", "name": "Comment construire des systèmes marketing IA", "author": { "@type": "Person", "name": "Gregory Brenig" }, "publisher": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Guide opérationnel pour construire des systèmes marketing IA qui génèrent du pipeline. Production de contenu, SEO, email, scoring — structurés pour le revenu.", "url": "https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Quels workflows marketing l'IA peut-elle systématiser ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA peut systématiser la production de contenu, les séquences email, le scoring de leads, l'optimisation SEO, la gestion de campagnes et le reporting — transformant le marketing en système scalable connecté au revenu." }},
        { "@type": "Question", "name": "Par où commencer avec les systèmes marketing IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Commencez par la production de contenu et l'automatisation email — ce sont les plus rapides en ROI. Puis ajoutez le scoring, le SEO et l'intelligence de campagne." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Systèmes Marketing IA", "item": "https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Construire des Systèmes Marketing IA | Guide | NLG</title>
        <meta name="description" content="Guide opérationnel pour construire des systèmes marketing IA qui génèrent du pipeline. Contenu, SEO, email, scoring — structurés pour le revenu, pas l'efficacité seule." />
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
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Guide opérationnel</Badge>
            <h1 className="mb-6">Comment construire des{" "}<span className="text-gradient">systèmes marketing IA</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les entreprises qui gagnent en marketing n'utilisent pas juste "des outils IA" — elles ont construit des systèmes. Production de contenu, email, SEO, scoring, intelligence de campagne — tout connecté au pipeline. Voici comment structurer le vôtre.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Ce que vous pouvez systématiser</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Systèmes de production de contenu", desc: "Articles, contenu LinkedIn, newsletters, études de cas — produits systématiquement avec l'IA en maintenant votre voix de marque et votre crédibilité." },
                { icon: Mail, title: "Automatisation email & séquences", desc: "Séquences de nurturing écrites par l'IA, déclenchées par le comportement prospect — personnalisées à grande échelle avec timing optimisé." },
                { icon: Target, title: "Scoring & Qualification de leads", desc: "Scoring IA basé sur le comportement, les firmographics et les signaux d'engagement — routage automatique des leads qualifiés vers votre système commercial." },
                { icon: BarChart3, title: "SEO & Intelligence de contenu", desc: "Stratégie de mots-clés, optimisation de contenu, analyse concurrentielle et suivi de positionnement — structurés en système d'amélioration continue." },
                { icon: TrendingUp, title: "Intelligence de campagne", desc: "Copywriting pub optimisé par IA, ciblage, gestion des enchères et A/B testing — connectés aux métriques de pipeline." },
                { icon: Zap, title: "Reporting automatisé", desc: "Dashboards marketing et rapports de performance générés automatiquement — intelligence pipeline livrée à la direction chaque semaine." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Séquence d'implémentation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Étape 1 : Auditez vos workflows marketing — identifiez où l'effort manuel crée des goulots et de l'incohérence",
                "Étape 2 : Construisez votre système de production de contenu — drafts IA avec guidelines de marque et contrôle qualité",
                "Étape 3 : Déployez l'automatisation email — séquences déclenchées par comportement avec copy IA personnalisé",
                "Étape 4 : Implémentez le lead scoring — qualification IA routant les prospects qualifiés vers votre infrastructure commerciale",
                "Étape 5 : Systématisez le reporting — dashboards automatisés connectant l'activité marketing aux résultats pipeline",
                "Étape 6 : Ajoutez SEO et intelligence de campagne — stratégie de contenu et gestion de campagnes optimisées par IA"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Besoin d'aide pour construire votre système marketing ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation et nous architecturerons votre système marketing IA — connecté au pipeline, pas seulement à l'efficacité.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Obtenir votre roadmap systèmes <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Quels workflows marketing l'IA peut-elle systématiser ?", a: "Production de contenu, séquences email, scoring de leads, optimisation SEO, gestion de campagnes et reporting — transformant le marketing en système scalable connecté au revenu." },
                { q: "Par où commencer ?", a: "Commencez par la production de contenu et l'automatisation email — ce sont les plus rapides en ROI. Puis ajoutez le scoring, le SEO et l'intelligence de campagne à mesure que vos systèmes maturent." },
                { q: "L'IA va-t-elle remplacer mon équipe marketing ?", a: "Non. L'IA amplifie votre équipe en gérant les tâches systématiques et reproductibles — libérant du temps pour la stratégie, le positionnement, la direction créative et les relations." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à construire votre système marketing ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit pour discuter de votre infrastructure marketing.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomatiserMarketingIAFR;
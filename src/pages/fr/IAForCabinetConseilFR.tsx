import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Brain, Users, Lightbulb, FileText, TrendingUp, CheckCircle, Target } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForCabinetConseilFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "IA pour cabinets de conseil", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Conseil et automatisation IA pour les cabinets de conseil et services professionnels. Automatisez la recherche, les propositions, les livrables et le développement commercial.", "url": "https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment les cabinets de conseil peuvent-ils utiliser l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les cabinets de conseil utilisent l'IA pour accélérer la recherche, automatiser la génération de propositions, créer des livrables clients plus rapidement, développer le thought leadership, automatiser la prospection et améliorer la gestion de projets." }},
        { "@type": "Question", "name": "L'IA va-t-elle remplacer les consultants ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA augmente les consultants plutôt que de les remplacer. Elle gère la collecte de données, l'analyse et les tâches répétitives — libérant les consultants pour la réflexion stratégique et les relations clients." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour cabinets de conseil", "item": "https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour cabinets de conseil | Recherche & Livrables | NLG Consulting</title>
        <meta name="description" content="Conseil et automatisation IA pour les cabinets de conseil. Accélérez la recherche, automatisez les propositions et créez des livrables plus rapidement avec l'IA." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Conseil</Badge>
            <h1 className="mb-6">IA pour{" "}<span className="text-gradient">cabinets de conseil</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les cabinets de conseil qui adoptent l'IA transforment leur productivité : recherche accélérée, propositions automatisées, livrables de qualité en moins de temps, et développement commercial systématisé. L'IA ne remplace pas le consultant — elle multiplie son impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation IA pour le conseil <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Applications IA dans le conseil</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Recherche accélérée", desc: "Analyse de marché, benchmarks concurrentiels et synthèses sectorielles en une fraction du temps habituel." },
                { icon: FileText, title: "Propositions automatisées", desc: "Génération de propositions commerciales personnalisées à partir de templates et données client." },
                { icon: Lightbulb, title: "Livrables IA", desc: "Rapports d'analyse, présentations et recommandations créés plus rapidement sans sacrifier la qualité." },
                { icon: Target, title: "Thought leadership", desc: "Production de contenu expert automatisée : articles, études de cas, newsletters et posts LinkedIn." },
                { icon: TrendingUp, title: "Développement commercial", desc: "Prospection automatisée, qualification de leads et nurturing personnalisé pour alimenter le pipeline." },
                { icon: Users, title: "Gestion de projets", desc: "Suivi de projets, reporting client automatisé et allocation de ressources optimisée par l'IA." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise conseil</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Nous sommes consultants nous-mêmes — nous comprenons les défis du métier de l'intérieur", "Expérience avec des cabinets de stratégie, management, IT et spécialisés", "Implémentations IA qui respectent la confidentialité et la propriété intellectuelle", "Systèmes qui s'intègrent aux outils existants : PowerPoint, Excel, CRM", "Focus sur le ROI mesurable : temps gagné, propositions gagnées, contenu publié", "Approche pragmatique adaptée aux contraintes du consulting"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Transformez votre cabinet avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer comment l'IA peut multiplier l'impact de vos consultants.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment les cabinets de conseil peuvent-ils utiliser l'IA ?", a: "Les cabinets utilisent l'IA pour accélérer la recherche, automatiser les propositions, créer des livrables plus rapidement, développer le thought leadership et systématiser la prospection." },
                { q: "L'IA va-t-elle remplacer les consultants ?", a: "Non. L'IA augmente les consultants en gérant les tâches répétitives et l'analyse de données, libérant du temps pour la réflexion stratégique et les relations clients." },
                { q: "Par où commencer avec l'IA dans mon cabinet ?", a: "Commencez par identifier les tâches les plus chronophages et répétitives. Souvent, la recherche, la rédaction de propositions et la création de contenu offrent le meilleur ROI initial." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à intégrer l'IA dans votre cabinet ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForCabinetConseilFR;

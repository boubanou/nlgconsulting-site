import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Megaphone, Users, Palette, TrendingUp, Bot, Zap, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForAgencesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "IA pour agences marketing & créatives", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Conseil et automatisation IA pour les agences marketing, créatives et digitales. Scalez la production, automatisez les workflows et améliorez vos marges.", "url": "https://www.nlgconsulting.co/fr/ia-pour-agences", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment les agences peuvent-elles utiliser l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les agences utilisent l'IA pour scaler la production de contenu, automatiser les workflows créatifs, générer des rapports clients, accélérer la recherche, améliorer le SEO et gérer les communications client de routine." }},
        { "@type": "Question", "name": "L'IA va-t-elle réduire les marges des agences ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est l'inverse. L'IA aide les agences à augmenter leurs marges en réduisant les temps et coûts de production tout en maintenant ou améliorant la qualité." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour agences", "item": "https://www.nlgconsulting.co/fr/ia-pour-agences" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour agences marketing & créatives | NLG Consulting</title>
        <meta name="description" content="Conseil et automatisation IA pour les agences marketing et créatives. Scalez la production, automatisez les workflows et améliorez vos marges avec l'IA." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-agences" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-agences" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Agences</Badge>
            <h1 className="mb-6">IA pour{" "}<span className="text-gradient">agences marketing & créatives</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les agences qui intègrent l'IA multiplient leur capacité de production sans augmenter leurs effectifs. Contenu, reporting, prospection, SEO — l'IA transforme chaque aspect de l'activité d'agence et améliore drastiquement les marges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation IA pour agences <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Applications IA pour les agences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Production de contenu", desc: "Articles, posts réseaux sociaux, scripts vidéo et newsletters générés à l'échelle avec cohérence de marque." },
                { icon: Palette, title: "Workflows créatifs", desc: "Briefs automatisés, moodboards IA, déclinaisons visuelles et adaptation multiformat accélérée." },
                { icon: TrendingUp, title: "SEO & Performance", desc: "Recherche de mots-clés, optimisation on-page, audits techniques et suivi de positionnement automatisés." },
                { icon: Bot, title: "Reporting client", desc: "Rapports de performance automatisés, dashboards personnalisés et insights data-driven pour vos clients." },
                { icon: Users, title: "Prospection agence", desc: "Outreach automatisé, qualification de prospects et nurturing personnalisé pour gagner de nouveaux clients." },
                { icon: Zap, title: "Opérations internes", desc: "Gestion de projets, allocation de ressources et facturation optimisées par l'IA." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise agences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience avec des agences marketing, SEO, créatives et digitales de toutes tailles", "Compréhension des modèles économiques d'agence et de la pression sur les marges", "Implémentations IA qui augmentent la capacité sans augmenter les coûts fixes", "Intégration avec les outils agence : Canva, Figma, HubSpot, SEMrush, Ahrefs", "Focus sur le ROI : plus de livrables par employé, meilleure rétention client", "Approche progressive — on commence par les quick wins à fort impact"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Multipliez la capacité de votre agence</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer comment l'IA peut transformer votre agence.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment les agences peuvent-elles utiliser l'IA ?", a: "Les agences utilisent l'IA pour scaler la production de contenu, automatiser les workflows créatifs, générer des rapports clients, accélérer la recherche et améliorer le SEO." },
                { q: "L'IA va-t-elle réduire les marges des agences ?", a: "C'est l'inverse. L'IA réduit les temps et coûts de production tout en maintenant la qualité, ce qui augmente les marges par projet." },
                { q: "Par où commencer avec l'IA dans mon agence ?", a: "Commencez par la production de contenu et le reporting client — ce sont les tâches les plus chronophages et les plus faciles à automatiser avec un ROI immédiat." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à intégrer l'IA dans votre agence ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForAgencesFR;

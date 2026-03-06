import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Briefcase, TrendingUp, Users, Zap, Bot, FileText, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForServicesB2BFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "IA pour entreprises de services B2B", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Conseil et automatisation IA pour les entreprises de services B2B. Optimisez les opérations, automatisez la vente, scalez le marketing et améliorez la livraison.", "url": "https://www.nlgconsulting.co/fr/ia-pour-services-b2b", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment les entreprises de services B2B peuvent-elles utiliser l'IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Les entreprises de services B2B utilisent l'IA pour automatiser la génération de leads, optimiser les propositions, améliorer l'onboarding client, scaler le marketing de contenu, automatiser le reporting et optimiser les opérations." }},
        { "@type": "Question", "name": "Quel est le ROI de l'IA pour les services B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "Les entreprises de services B2B constatent 30-60% d'économie de temps sur les tâches administratives, 2-3x plus de contenu produit et 40-70% d'amélioration des temps de réponse aux leads." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour services B2B", "item": "https://www.nlgconsulting.co/fr/ia-pour-services-b2b" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour services B2B | Opérations & Croissance | NLG Consulting</title>
        <meta name="description" content="Conseil et automatisation IA pour les entreprises de services B2B. Automatisez la vente, scalez le marketing et optimisez les opérations avec l'IA." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-services-b2b" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-services-b2b" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Services B2B</Badge>
            <h1 className="mb-6">IA pour{" "}<span className="text-gradient">entreprises de services B2B</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les entreprises de services B2B qui intègrent l'IA gagnent un avantage décisif : prospection automatisée, propositions plus rapides, marketing de contenu scalable et opérations optimisées — tout en conservant la touche personnelle que les clients attendent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation IA B2B <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Applications IA pour les services B2B</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Génération de leads", desc: "Prospection automatisée avec enrichissement de données, scoring et outreach personnalisé à grande échelle." },
                { icon: FileText, title: "Propositions commerciales", desc: "Génération automatique de propositions personnalisées basées sur les besoins client et les templates éprouvés." },
                { icon: Bot, title: "Onboarding client", desc: "Parcours d'intégration automatisés avec documentation, accès et communications personnalisées." },
                { icon: TrendingUp, title: "Marketing de contenu", desc: "Articles, études de cas, newsletters et posts LinkedIn générés à l'échelle avec la voix de votre marque." },
                { icon: Briefcase, title: "Reporting automatisé", desc: "Rapports d'activité, tableaux de bord et KPIs générés automatiquement pour vos clients et votre direction." },
                { icon: Zap, title: "Optimisation opérationnelle", desc: "Automatisation des processus internes : facturation, suivi de projets, allocation de ressources." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise services B2B</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience avec des entreprises de services B2B de toutes tailles et secteurs", "Compréhension des cycles de vente longs et de la valeur des relations clients", "Implémentations IA qui maintiennent la touche personnelle du service B2B", "Intégration avec les outils existants : CRM, outils de facturation, plateformes de gestion", "Focus sur le ROI : temps gagné, pipeline accéléré, satisfaction client améliorée", "Approche progressive adaptée aux ressources et aux priorités de votre entreprise"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Accélérez votre entreprise B2B avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer les opportunités IA dans votre entreprise de services.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment les entreprises de services B2B peuvent-elles utiliser l'IA ?", a: "Automatisation de la prospection, génération de propositions, onboarding client, marketing de contenu, reporting et optimisation opérationnelle." },
                { q: "Quel est le ROI de l'IA pour les services B2B ?", a: "30-60% d'économie de temps sur les tâches administratives, 2-3x plus de contenu produit et 40-70% d'amélioration des temps de réponse aux leads." },
                { q: "L'IA convient-elle aux petites entreprises de services ?", a: "Absolument. Les petites structures bénéficient souvent le plus de l'IA car elle permet de faire plus avec moins de ressources, nivelant le terrain de jeu face aux grandes entreprises." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à intégrer l'IA dans votre entreprise B2B ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForServicesB2BFR;

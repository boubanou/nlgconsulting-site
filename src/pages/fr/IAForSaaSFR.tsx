import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Layers, TrendingUp, Zap, Users, Bot, BarChart3, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForSaaSFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "IA pour entreprises SaaS", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Conseil et automatisation IA pour les entreprises SaaS. Optimisez l'onboarding, réduisez le churn, automatisez le support et accélérez la croissance.", "url": "https://www.nlgconsulting.co/fr/ia-pour-saas", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA peut-elle aider les entreprises SaaS ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA aide les entreprises SaaS à automatiser l'onboarding client, réduire le churn grâce à l'analyse prédictive, accélérer le marketing de contenu, optimiser la tarification, automatiser le support et créer des fonctionnalités produit intelligentes." }},
        { "@type": "Question", "name": "Quels outils IA sont les plus utiles pour le SaaS ?", "acceptedAnswer": { "@type": "Answer", "text": "Les entreprises SaaS utilisent OpenAI pour le contenu et le support, Clay et Apollo pour l'automatisation commerciale, HubSpot pour le marketing, Make/Zapier pour les workflows, et des agents IA personnalisés pour les fonctionnalités produit." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour SaaS", "item": "https://www.nlgconsulting.co/fr/ia-pour-saas" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour entreprises SaaS | Automatisation & Croissance | NLG Consulting</title>
        <meta name="description" content="Conseil et automatisation IA pour les entreprises SaaS. Réduisez le churn, automatisez l'onboarding, optimisez vos prix et accélérez la croissance avec l'IA." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-saas" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-saas" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-saas" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-saas" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">SaaS</Badge>
            <h1 className="mb-6">IA pour{" "}<span className="text-gradient">entreprises SaaS</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les entreprises SaaS qui intègrent l'IA transforment leurs opérations : onboarding automatisé, churn réduit grâce à l'analyse prédictive, support intelligent et croissance accélérée. Nous vous aidons à implémenter l'IA là où elle a le plus d'impact sur votre MRR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation IA pour SaaS <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Applications IA dans le SaaS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Onboarding automatisé", desc: "Parcours d'intégration personnalisés avec IA qui guident les utilisateurs vers leur premier succès plus rapidement." },
                { icon: TrendingUp, title: "Réduction du churn", desc: "Analyse prédictive des comportements à risque et campagnes de rétention automatisées avant le désengagement." },
                { icon: Bot, title: "Support intelligent", desc: "Chatbots IA formés sur votre documentation produit qui résolvent 60%+ des tickets sans intervention humaine." },
                { icon: Layers, title: "Fonctionnalités IA", desc: "Intégrez des capacités IA directement dans votre produit pour créer un avantage concurrentiel durable." },
                { icon: BarChart3, title: "Marketing de contenu", desc: "Génération automatisée de contenu SEO, newsletters et séquences email adaptées à vos personas." },
                { icon: Zap, title: "Automatisation commerciale", desc: "Qualification automatique des leads, outreach personnalisé et nurturing intelligent pour accélérer le pipeline." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise SaaS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience directe avec des SaaS B2B de toutes tailles — startups à scale-ups", "Compréhension des métriques SaaS : MRR, LTV, CAC, churn, expansion revenue", "Implémentations IA conçues pour s'intégrer aux stacks existantes (HubSpot, Intercom, Stripe)", "Systèmes de croissance adaptés aux cycles de vente SaaS et aux buyer personas", "Expérience internationale avec des entreprises SaaS européennes et mondiales", "Combinaison IA + stratégie business spécifiquement pour le modèle SaaS"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Accélérez votre SaaS avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer les opportunités IA dans votre entreprise SaaS.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA peut-elle aider les entreprises SaaS ?", a: "L'IA aide les entreprises SaaS à automatiser l'onboarding, réduire le churn, accélérer le marketing de contenu, optimiser la tarification, automatiser le support et créer des fonctionnalités produit intelligentes." },
                { q: "Quels outils IA sont les plus utiles pour le SaaS ?", a: "OpenAI pour le contenu et le support, Clay et Apollo pour l'automatisation commerciale, HubSpot pour le marketing, Make/Zapier pour les workflows, et des agents IA personnalisés." },
                { q: "L'IA peut-elle réduire le churn SaaS ?", a: "Oui. L'IA identifie les clients à risque via l'analyse des comportements, automatise les campagnes de réengagement, personnalise l'expérience produit et fournit un support proactif." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à intégrer l'IA dans votre SaaS ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForSaaSFR;

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
      { "@type": "Service", "name": "Systèmes IA pour Services B2B", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Infrastructure de croissance IA pour entreprises de services B2B. Pipeline structuré, automatisation opérationnelle et levier commercial sans augmenter les effectifs.", "url": "https://www.nlgconsulting.co/fr/ia-pour-services-b2b", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA transforme-t-elle les entreprises de services B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA structure le pipeline commercial, automatise les propositions et le reporting, scale le marketing de contenu et optimise les opérations — permettant de faire plus avec les mêmes ressources tout en conservant la touche personnelle." }},
        { "@type": "Question", "name": "Quel ROI attendre de l'IA pour les services B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "Les entreprises de services B2B constatent 30-60% d'économie de temps sur les tâches administratives, 2-3x plus de contenu produit et 40-70% d'amélioration des temps de réponse aux leads." }}
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
        <title>IA pour Services B2B : Croissance & Opérations | NLG</title>
        <meta name="description" content="Systèmes IA pour entreprises de services B2B. Pipeline structuré, automatisation opérationnelle et levier commercial. 30-60% d'économie de temps sur l'admin." />
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
            <h1 className="mb-6">Infrastructure de croissance IA pour{" "}<span className="text-gradient">services B2B</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les entreprises de services B2B qui intègrent l'IA créent un levier opérationnel décisif : pipeline structuré, propositions automatisées, contenu à l'échelle et opérations optimisées — sans perdre la touche personnelle que vos clients attendent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique B2B <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Systèmes IA pour les services B2B</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Pipeline structuré", desc: "Prospection automatisée avec enrichissement, scoring et outreach personnalisé à grande échelle — pour un flux régulier d'opportunités qualifiées." },
                { icon: FileText, title: "Propositions accélérées", desc: "Génération de propositions commerciales personnalisées à partir de templates et données client — réduisant le temps de réponse de 60%+." },
                { icon: Bot, title: "Onboarding client structuré", desc: "Parcours d'intégration automatisés avec documentation, accès et communications personnalisées — pour une première impression impeccable." },
                { icon: TrendingUp, title: "Contenu & autorité", desc: "Articles, études de cas, newsletters et posts LinkedIn générés à l'échelle avec votre voix de marque — pour alimenter l'inbound et le thought leadership." },
                { icon: Briefcase, title: "Reporting automatisé", desc: "Rapports d'activité et KPIs générés automatiquement pour vos clients et votre direction — avec insights actionnables, pas juste des données." },
                { icon: Zap, title: "Opérations optimisées", desc: "Facturation, suivi de projets et allocation de ressources optimisés — pour que les opérations ne freinent pas la croissance." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre approche services B2B</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Nous sommes une entreprise de services B2B — nous comprenons vos défis de l'intérieur, pas de la théorie", "Expérience avec des entreprises de services B2B de toutes tailles et tous secteurs", "Systèmes IA qui maintiennent la touche personnelle essentielle au service B2B", "Intégration avec vos outils existants : CRM, facturation, gestion de projet", "Focus sur le ROI mesurable : temps gagné, pipeline accéléré, satisfaction client améliorée", "Approche progressive adaptée aux ressources et priorités de votre entreprise"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Créez un levier opérationnel pour votre entreprise B2B</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour identifier les systèmes IA les plus impactants pour votre entreprise de services.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA transforme-t-elle les entreprises de services B2B ?", a: "L'IA structure le pipeline, automatise les propositions et le reporting, scale le contenu et optimise les opérations — permettant de faire plus avec les mêmes ressources tout en conservant la touche personnelle." },
                { q: "Quel ROI attendre de l'IA pour les services B2B ?", a: "30-60% d'économie de temps sur les tâches administratives, 2-3x plus de contenu produit et 40-70% d'amélioration des temps de réponse aux leads." },
                { q: "L'IA convient-elle aux petites entreprises de services ?", a: "C'est souvent là que l'impact est le plus fort. L'IA permet aux petites structures de créer une infrastructure de croissance qu'elles ne pourraient pas se permettre autrement — nivelant le terrain de jeu." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à structurer votre croissance B2B ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForServicesB2BFR;
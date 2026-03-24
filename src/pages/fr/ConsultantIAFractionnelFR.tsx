import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, UserCheck, Clock, TrendingUp, Shield, Zap, CheckCircle, Brain } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const ConsultantIAFractionnelFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Consultant IA Fractionnel & Growth Architect", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Consultant IA fractionnel senior pour fondateurs et équipes de croissance. Stratégie IA, architecture de workflows, design RevOps et supervision d'implémentation — sans le coût d'un poste temps plein.", "url": "https://www.nlgconsulting.co/fr/consultant-ia-fractionnel", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce qu'un consultant IA fractionnel ?", "acceptedAnswer": { "@type": "Answer", "text": "Un opérateur IA senior qui travaille avec votre entreprise à temps partiel — fournissant stratégie IA, architecture de workflows et supervision d'implémentation sans le coût d'un poste exécutif à temps plein." }},
        { "@type": "Question", "name": "En quoi un consultant fractionnel diffère-t-il d'une agence ?", "acceptedAnswer": { "@type": "Answer", "text": "Un consultant fractionnel travaille intégré dans votre équipe, comprend votre modèle business en profondeur et fournit une direction stratégique — pas seulement de l'exécution. C'est du leadership IA senior, à vos conditions." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Consultant IA fractionnel", "item": "https://www.nlgconsulting.co/fr/consultant-ia-fractionnel" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Consultant IA Fractionnel | Growth Architect | NLG</title>
        <meta name="description" content="Consultant IA fractionnel pour fondateurs et équipes de croissance. Stratégie IA, architecture de workflows et RevOps à une fraction du coût. Démarrage sous 1-2 semaines." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/consultant-ia-fractionnel" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/fractional-ai-consultant" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/consultant-ia-fractionnel" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/fractional-ai-consultant" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Fractionnel</Badge>
            <h1 className="mb-6">Consultant{" "}<span className="text-gradient">IA fractionnel</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vous avez besoin de leadership IA senior, pas d'un abonnement supplémentaire. Un consultant IA fractionnel vous donne la stratégie, la supervision d'architecture et l'accompagnement pour déployer des systèmes IA qui génèrent des résultats business mesurables — à votre rythme, à une fraction du coût.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Discuter du format fractionnel <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Ce que délivre un consultant IA fractionnel</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Stratégie & roadmap IA", desc: "Définir quels processus automatiser, quels outils adopter et comment mesurer le ROI — aligné sur votre modèle business et votre stade de croissance." },
                { icon: Zap, title: "Architecture de workflows", desc: "Concevoir et superviser les workflows IA, systèmes agentic et automatisation qui s'intègrent à vos opérations et votre stack technique." },
                { icon: UserCheck, title: "Enablement équipe", desc: "Former votre équipe, établir les bonnes pratiques et créer les playbooks internes pour une adoption IA durable dans toute l'organisation." },
                { icon: Shield, title: "Gouvernance & risque", desc: "Naviguer les réglementations IA, la protection des données et les considérations éthiques — particulièrement critique pour FinTech, PropTech et secteurs régulés." },
                { icon: TrendingUp, title: "Performance & RevOps", desc: "Définir les KPIs, suivre l'adoption, mesurer les gains de productivité et optimiser les investissements IA pour des résultats commerciaux concrets." },
                { icon: Clock, title: "Engagement flexible", desc: "Ajustez selon vos besoins — de quelques heures par semaine à des sprints projets complets. Sans contrat long terme, sans risque de recrutement." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi fractionnel plutôt que temps plein</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["30-50% d'économie par rapport à un poste IA temps plein — avec une expertise senior dès le premier jour", "Perspective fraîche grâce au travail dans plusieurs secteurs, modèles business et stades de croissance", "Pollinisation croisée des meilleures pratiques de dizaines d'implémentations IA en SaaS, FinTech et B2B", "Flexibilité d'ajuster l'engagement selon les phases du projet — pas de coûts fixes, pas de risque de recrutement", "Connecté à un écosystème d'exécution complet : automatisation IA, systèmes outbound, advisory stratégique et assets web", "Mindset opérateur : votre consultant IA fractionnel a construit des entreprises, pas seulement conseillé"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Leadership IA senior sans le coût temps plein</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour discuter de comment un consultant IA fractionnel peut accélérer vos systèmes de croissance.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce qu'un consultant IA fractionnel ?", a: "Un opérateur IA senior qui travaille avec votre entreprise à temps partiel — fournissant stratégie IA, architecture de workflows et supervision d'implémentation sans le coût d'un poste exécutif temps plein." },
                { q: "En quoi cela diffère-t-il d'une agence IA ?", a: "Un consultant fractionnel travaille intégré dans votre équipe, comprend votre modèle business en profondeur et fournit une direction stratégique en plus de l'exécution. C'est du leadership, pas de la prestation." },
                { q: "Sous quel délai un consultant fractionnel peut-il démarrer ?", a: "La plupart des engagements démarrent sous 1-2 semaines. On commence par une phase de découverte pour cartographier vos opérations, puis on passe à la stratégie et l'implémentation — avec des résultats mesurables dès le premier mois." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt pour un leadership IA fractionnel ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ConsultantIAFractionnelFR;
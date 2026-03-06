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
      { "@type": "Service", "name": "Consultant IA fractionnel", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Engagez un consultant IA fractionnel pour diriger votre stratégie et implémentation IA sans le coût d'un poste à temps plein.", "url": "https://www.nlgconsulting.co/fr/consultant-ia-fractionnel", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce qu'un consultant IA fractionnel ?", "acceptedAnswer": { "@type": "Answer", "text": "Un consultant IA fractionnel est un expert IA senior qui travaille avec votre entreprise à temps partiel ou par projet, fournissant un leadership IA stratégique sans le coût d'un poste à temps plein." }},
        { "@type": "Question", "name": "Combien coûte un consultant IA fractionnel ?", "acceptedAnswer": { "@type": "Answer", "text": "Le consulting IA fractionnel coûte généralement 30-50% de moins qu'un poste à temps plein, avec des arrangements flexibles de quelques heures par semaine à plusieurs jours par mois." }}
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
        <title>Consultant IA fractionnel | Leadership IA à temps partiel | NLG</title>
        <meta name="description" content="Engagez un consultant IA fractionnel pour la stratégie et l'implémentation IA. Expertise senior à une fraction du coût. Engagement flexible et sans risque." />
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
              Vous avez besoin d'expertise IA, mais pas d'un poste à temps plein. Un consultant IA fractionnel vous donne la stratégie, la supervision d'implémentation et l'accompagnement — à votre rythme, à une fraction du coût.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Discuter d'un consultant IA <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Ce que fait un consultant IA fractionnel</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Stratégie IA", desc: "Définir votre roadmap IA — quels processus automatiser, quels outils adopter, et comment mesurer le ROI." },
                { icon: Zap, title: "Supervision d'implémentation", desc: "Gérer la sélection d'outils IA, l'évaluation des fournisseurs et l'implémentation pour assurer les résultats." },
                { icon: UserCheck, title: "Montée en compétences", desc: "Former votre équipe, établir les bonnes pratiques IA et créer des guidelines internes." },
                { icon: Shield, title: "Risque & Conformité", desc: "Naviguer les réglementations IA, la protection des données et les considérations éthiques de votre secteur." },
                { icon: TrendingUp, title: "Suivi de performance", desc: "Définir les KPIs, suivre l'adoption, mesurer les gains de productivité et optimiser les investissements IA." },
                { icon: Clock, title: "Engagement flexible", desc: "Ajustez selon vos besoins — de quelques heures par semaine à des sprints projets complets. Sans contrat long terme." }
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
              {["30-50% d'économie par rapport à un poste IA à temps plein", "Accès à une expertise senior dès le premier jour — pas de période de montée en compétences", "Perspective fraîche grâce au travail dans plusieurs industries et entreprises", "Flexibilité d'ajuster l'engagement selon les besoins du projet", "Pas de risque de recrutement — démarrage immédiat, ajustement au fur et à mesure", "Pollinisation croisée des meilleures pratiques d'autres implémentations IA"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Leadership IA sans le coût temps plein</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour discuter de comment un consultant IA fractionnel peut accélérer votre transformation.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce qu'un consultant IA fractionnel ?", a: "Un expert IA senior qui travaille avec votre entreprise à temps partiel, fournissant un leadership IA stratégique sans le coût d'un poste à temps plein." },
                { q: "Combien coûte un consultant IA fractionnel ?", a: "Généralement 30-50% de moins qu'un poste temps plein, avec des arrangements flexibles de quelques heures par semaine à plusieurs jours par mois." },
                { q: "Sous quel délai un consultant IA fractionnel peut-il commencer ?", a: "La plupart des engagements démarrent en 1-2 semaines. Nous commençons par une phase de découverte, puis passons à la stratégie et l'implémentation." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt pour un leadership IA fractionnel ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default ConsultantIAFractionnelFR;

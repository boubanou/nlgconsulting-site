import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Shield, TrendingUp, Zap, Users, Bot, BarChart3, CheckCircle, CreditCard } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForFinTechFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "IA pour entreprises FinTech", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Conseil et automatisation IA pour les entreprises FinTech. Conformité, détection de fraude, onboarding client et systèmes de croissance.", "url": "https://www.nlgconsulting.co/fr/ia-pour-fintech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA peut-elle aider les entreprises FinTech ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA aide les FinTech avec l'automatisation KYC, la détection de fraude, le support client, l'évaluation des risques, la conformité réglementaire, le marketing de contenu et l'automatisation commerciale." }},
        { "@type": "Question", "name": "L'IA est-elle sûre pour les services financiers ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, avec les bonnes protections. L'IA dans la FinTech nécessite une attention à la sécurité des données, la conformité réglementaire et les pistes d'audit — tout ce que nous intégrons dans nos implémentations." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour FinTech", "item": "https://www.nlgconsulting.co/fr/ia-pour-fintech" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour FinTech | Automatisation & Conformité | NLG Consulting</title>
        <meta name="description" content="Conseil et automatisation IA pour les entreprises FinTech. Automatisation KYC, détection de fraude, conformité et systèmes de croissance propulsés par l'IA." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-fintech" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-fintech" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">FinTech</Badge>
            <h1 className="mb-6">IA pour{" "}<span className="text-gradient">entreprises FinTech</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les entreprises FinTech évoluent dans un environnement où rapidité, conformité et confiance sont essentiels. L'IA permet des processus KYC plus rapides, une détection de fraude plus intelligente, une conformité automatisée et une croissance scalable — tout en maintenant les standards de sécurité exigés par les services financiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation IA FinTech <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Applications IA dans la FinTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "KYC & Conformité", desc: "Vérification d'identité automatisée, traitement de documents et contrôles de conformité réglementaire réduisant le temps de revue manuelle de 80%+." },
                { icon: CreditCard, title: "Détection de fraude", desc: "Surveillance des transactions et détection d'anomalies par IA identifiant les patterns suspects en temps réel." },
                { icon: Users, title: "Onboarding client", desc: "Parcours d'intégration optimisés avec vérification documentaire IA, évaluation des risques et séquences d'accueil personnalisées." },
                { icon: Bot, title: "Support intelligent", desc: "Chatbots IA formés sur les produits financiers et réglementations, gérant les demandes clients en conformité." },
                { icon: TrendingUp, title: "Croissance & Vente", desc: "Génération de leads automatisée, qualification et outreach pour les produits FinTech B2B — vers les bons décideurs." },
                { icon: BarChart3, title: "Évaluation des risques", desc: "Modèles IA pour le scoring crédit, le profilage de risque et l'analyse de portefeuille améliorant la prise de décision." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre expertise FinTech</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience directe dans la FinTech — le fondateur de NLG a travaillé avec Revolut, Wise, eToro et des plateformes de paiement", "Compréhension des réglementations financières et des exigences de conformité", "Implémentations IA conçues avec sécurité, pistes d'audit et protection des données", "Systèmes de croissance adaptés aux cycles de vente FinTech et aux buyer personas", "Expérience internationale sur les marchés financiers européens et mondiaux", "Combinaison IA + stratégie business spécifiquement pour la technologie financière"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Accélérez votre FinTech avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer les opportunités IA dans votre entreprise FinTech.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA peut-elle aider les entreprises FinTech ?", a: "L'IA aide les FinTech avec l'automatisation KYC, la détection de fraude, le support client, l'évaluation des risques, la conformité réglementaire et l'automatisation commerciale." },
                { q: "L'IA est-elle sûre pour les services financiers ?", a: "Oui, avec les bonnes protections. L'IA dans la FinTech nécessite une attention à la sécurité des données, la conformité réglementaire et les pistes d'audit." },
                { q: "Quels outils utilisez-vous pour l'IA FinTech ?", a: "Nous utilisons les modèles OpenAI et Anthropic pour le contenu et l'analyse, Make/Zapier pour l'automatisation des workflows, et des intégrations personnalisées avec les APIs bancaires et les systèmes CRM." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à intégrer l'IA dans votre FinTech ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForFinTechFR;

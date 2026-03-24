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
      { "@type": "Service", "name": "Systèmes de Croissance IA pour FinTech", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Systèmes de croissance, automatisation opérationnelle et infrastructure revenue pour entreprises FinTech. Workflows IA, conformité et pipeline commercial.", "url": "https://www.nlgconsulting.co/fr/ia-pour-fintech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA transforme-t-elle les opérations FinTech ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA permet aux FinTech d'automatiser les processus KYC, de détecter la fraude en temps réel, d'accélérer l'onboarding, de structurer le pipeline commercial et de scaler les opérations sans augmenter les effectifs proportionnellement." }},
        { "@type": "Question", "name": "NLG a-t-elle une expérience concrète en FinTech ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Notre fondateur a travaillé avec Revolut, Wise, eToro et plusieurs plateformes de paiement. Nous combinons une expertise FinTech de terrain avec des systèmes IA orientés revenus." }}
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
        <title>IA pour FinTech : Croissance & RevOps | NLG Consulting</title>
        <meta name="description" content="Systèmes de croissance IA pour FinTech. Pipeline commercial, conformité automatisée, workflows KYC et infrastructure revenue. Par des opérateurs FinTech." />
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
            <h1 className="mb-6">Systèmes de croissance IA pour{" "}<span className="text-gradient">entreprises FinTech</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les FinTech qui scalent ne manquent pas de technologie — elles manquent d'infrastructure revenue structurée. Nous déployons des workflows IA, des systèmes de pipeline et de l'automatisation opérationnelle conçus pour les exigences spécifiques des services financiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique FinTech <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Systèmes IA conçus pour la FinTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "KYC & conformité automatisés", desc: "Workflows de vérification d'identité, traitement documentaire et contrôles réglementaires qui réduisent les revues manuelles de 80%+ — sans compromettre la conformité." },
                { icon: CreditCard, title: "Détection de fraude intelligente", desc: "Systèmes de surveillance transactionnelle et détection d'anomalies identifiant les patterns suspects en temps réel, intégrés à vos flux opérationnels." },
                { icon: Users, title: "Onboarding & activation", desc: "Parcours d'intégration structurés avec vérification IA, scoring de risque et séquences de nurturing qui accélèrent le time-to-value." },
                { icon: Bot, title: "Support régulé par l'IA", desc: "Agents conversationnels formés sur vos produits financiers et réglementations, capables de gérer les demandes en conformité totale." },
                { icon: TrendingUp, title: "Pipeline & RevOps", desc: "Infrastructure de génération de leads, qualification automatisée et outreach multicanal pour les produits FinTech B2B — vers les bons décideurs, au bon moment." },
                { icon: BarChart3, title: "Scoring & analyse de risque", desc: "Modèles IA pour le scoring crédit, le profilage de risque et l'analyse de portefeuille qui améliorent la prise de décision et la performance commerciale." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi travailler avec des opérateurs FinTech</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience terrain en FinTech — notre fondateur a travaillé avec Revolut, Wise, eToro et des plateformes de paiement internationales", "Compréhension native des réglementations financières, de la conformité et des exigences d'audit", "Systèmes IA conçus avec sécurité, traçabilité et protection des données intégrées dès la conception", "Infrastructure de croissance adaptée aux cycles de vente FinTech et aux buyer personas B2B", "Combinaison rare : expertise services financiers + architecture de systèmes IA + exécution commerciale", "Approche connectée à notre pratique de <a>conseil stratégique</a> et de <a>systèmes outbound</a> pour un impact complet"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Structurez votre croissance FinTech avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour auditer vos systèmes de croissance et identifier les leviers IA les plus impactants pour votre FinTech.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA transforme-t-elle les opérations FinTech ?", a: "L'IA permet d'automatiser les processus KYC, de détecter la fraude en temps réel, d'accélérer l'onboarding, de structurer le pipeline commercial et de scaler les opérations — tout en maintenant la conformité réglementaire." },
                { q: "NLG a-t-elle une expérience concrète en FinTech ?", a: "Oui. Notre fondateur a opéré dans l'écosystème FinTech international pendant des années, travaillant avec des plateformes de paiement, des courtiers et des néobanques. Nous ne théorisons pas — nous exécutons." },
                { q: "Quels outils utilisez-vous pour les systèmes IA FinTech ?", a: "Nous utilisons Claude, GPT et des agents IA agentic pour les workflows opérationnels, Make/n8n pour l'automatisation, et des intégrations natives avec les APIs bancaires, CRM et systèmes de conformité." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à structurer votre croissance FinTech ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique avec un opérateur FinTech.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForFinTechFR;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Wrench, TrendingUp, Users, Zap, Bot, BarChart3, CheckCircle, Star } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const MeilleursOutilsIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "name": "Meilleurs outils IA pour entreprises en 2026", "author": { "@type": "Person", "name": "Gregory Brenig" }, "publisher": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Guide des meilleurs outils IA pour entreprises en 2026. Vente, marketing, opérations, support client et création de contenu.", "url": "https://www.nlgconsulting.co/fr/meilleurs-outils-ia-entreprise" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Quels sont les meilleurs outils IA pour entreprises ?", "acceptedAnswer": { "@type": "Answer", "text": "Les meilleurs outils dépendent de votre cas d'usage : ChatGPT/Claude pour le contenu, Clay/Apollo pour la vente, Make/Zapier pour l'automatisation, Jasper pour le marketing, Intercom pour le support." }},
        { "@type": "Question", "name": "Comment choisir les bons outils IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Commencez par votre problème le plus impactant, évaluez 2-3 outils par catégorie, testez pendant 2 semaines et mesurez le ROI avant de vous engager." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Meilleurs outils IA", "item": "https://www.nlgconsulting.co/fr/meilleurs-outils-ia-entreprise" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Meilleurs outils IA pour entreprises 2026 | Guide | NLG</title>
        <meta name="description" content="Guide des meilleurs outils IA pour entreprises. Vente, marketing, opérations, support et création de contenu. Testés et recommandés par des consultants IA." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/meilleurs-outils-ia-entreprise" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/best-ai-tools-for-business" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/meilleurs-outils-ia-entreprise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/best-ai-tools-for-business" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Guide</Badge>
            <h1 className="mb-6">Meilleurs outils IA pour{" "}<span className="text-gradient">entreprises en 2026</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Avec des centaines d'outils IA sur le marché, choisir les bons est complexe. Ce guide couvre les outils que nous utilisons et recommandons à nos clients — testés dans des dizaines d'implémentations B2B.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Outils IA par catégorie</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Bot, title: "Contenu & Rédaction", desc: "ChatGPT, Claude, Jasper — pour les articles, emails, propositions, réseaux sociaux et tout contenu textuel à grande échelle." },
                { icon: TrendingUp, title: "Vente & Prospection", desc: "Clay, Apollo, Instantly, Lemlist — pour l'enrichissement de leads, l'automatisation d'outreach et la génération de pipeline." },
                { icon: Zap, title: "Automatisation de workflows", desc: "Make (Integromat), Zapier, n8n — pour connecter les apps, automatiser les tâches répétitives et construire des workflows complexes." },
                { icon: BarChart3, title: "Analytics & Recherche", desc: "Perplexity, ChatGPT Advanced Data Analysis — pour la recherche de marché, l'analyse de données et la veille concurrentielle." },
                { icon: Users, title: "Support client", desc: "Intercom Fin, Drift, Zendesk AI — pour le support automatisé, le routage de tickets et le self-service client." },
                { icon: Star, title: "Design & Créatif", desc: "Midjourney, DALL-E, Canva AI, Runway — pour le contenu visuel, les présentations et les assets créatifs." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Comment choisir les bons outils IA</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Commencez par votre problème le plus impactant — n'essayez pas de tout automatiser d'un coup", "Évaluez 2-3 outils par catégorie avant de vous engager", "Testez pendant 2 semaines avec des cas réels et mesurez le temps gagné", "Considérez l'intégration avec votre stack existante (CRM, email, gestion de projet)", "Prenez en compte la courbe d'apprentissage — le meilleur outil est celui que votre équipe utilisera", "Budgétez l'implémentation et la formation, pas seulement l'abonnement"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Besoin d'aide pour choisir vos outils IA ?</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation et nous vous recommanderons la stack IA idéale pour votre entreprise.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Recommandations outils IA <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Quels sont les meilleurs outils IA pour entreprises ?", a: "Ça dépend de votre cas d'usage : ChatGPT/Claude pour le contenu, Clay/Apollo pour la vente, Make/Zapier pour l'automatisation, Jasper pour le marketing, Intercom pour le support." },
                { q: "Comment choisir les bons outils IA ?", a: "Commencez par votre plus gros problème, évaluez 2-3 options, testez et mesurez le ROI avant de vous engager." },
                { q: "Quel budget prévoir pour les outils IA ?", a: "La plupart des entreprises commencent avec 200-500€/mois et constatent un retour de 5-10x en temps gagné. Les implémentations enterprise vont de 2 000 à 10 000€/mois." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Besoin d'une recommandation personnalisée ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default MeilleursOutilsIAFR;

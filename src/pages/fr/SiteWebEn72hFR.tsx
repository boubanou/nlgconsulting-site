import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Globe, Search, BarChart3, Layers, Zap, Target } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const SiteWebEn72hFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Sites Web de Conversion & Actifs SEO", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Sites web orientés revenus, actifs d'autorité SEO et systèmes de conversion pour entreprises B2B, FinTech et PropTech.", "url": "https://www.nlgconsulting.co/fr/site-web-en-72h", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Sites Web de Conversion", "item": "https://www.nlgconsulting.co/fr/site-web-en-72h" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce qu'un site web de conversion ?", "acceptedAnswer": { "@type": "Answer", "text": "Un site web de conversion est conçu comme un outil de revenus — chaque élément est structuré pour capturer des leads qualifiés, améliorer la visibilité SEO et soutenir le pipeline commercial." } },
        { "@type": "Question", "name": "Pouvez-vous livrer un site en 72 heures ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Notre modèle de déploiement rapide livre des sites web complets et prêts pour la conversion en 72 heures — idéal pour les entreprises qui doivent avancer vite sans compromettre la qualité." } },
        { "@type": "Question", "name": "Le SEO est-il inclus ?", "acceptedAnswer": { "@type": "Answer", "text": "Chaque site web inclut une architecture SEO technique : données structurées, optimisation meta, sitemap, performance Core Web Vitals et hiérarchie de contenu conçue pour la visibilité." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Sites Web de Conversion & Actifs SEO | NLG Consulting</title>
        <meta name="description" content="Sites web orientés revenus et actifs d'autorité SEO pour entreprises B2B. Optimisés pour la conversion, architecturés pour le SEO, déployés en 72 heures." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <meta property="og:title" content="Sites Web de Conversion & Actifs SEO | NLG Consulting" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Studio Web & SEO</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sites Web de Conversion & Actifs d'Autorité SEO</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Votre site web n'est pas une brochure — c'est une infrastructure de revenus. Nous construisons des sites optimisés pour la conversion et architecturés pour le SEO qui capturent des leads qualifiés et soutiennent votre pipeline commercial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/fr/rendez-vous">Discuter de votre projet web <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/fr/services">Explorer nos services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Le Site Web Comme Système Commercial</h2>
              <p>
                La plupart des entreprises B2B traitent leur site web comme un livrable design — un projet ponctuel confié à une agence web. Le résultat : un site esthétique mais qui ne génère aucun pipeline, ne se positionne sur aucun mot-clé, et reste déconnecté du moteur commercial.
              </p>
              <p>
                Notre approche est différente. Chaque site web que nous construisons est conçu comme un système de conversion — intégré à votre <Link to="/fr/vente" className="text-primary hover:underline font-medium">infrastructure outbound</Link>, optimisé pour l'autorité SEO, et structuré pour capturer et qualifier les leads.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Ce Que Nous Construisons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "Sites de Conversion", desc: "Sites B2B orientés revenus avec positionnement clair, systèmes de capture de leads et architecture de pages optimisée." },
                { icon: Search, title: "Actifs d'Autorité SEO", desc: "Pages de contenu, structures pilier et clusters thématiques conçus pour la visibilité organique et l'autorité de domaine." },
                { icon: Target, title: "Landing Pages", desc: "Pages d'atterrissage spécifiques pour trafic payant, séquences outbound et lancements produits." },
                { icon: Layers, title: "Interfaces Plateforme", desc: "Applications web et interfaces SaaS pour plateformes FinTech, PropTech et B2B nécessitant une complexité fonctionnelle." },
                { icon: BarChart3, title: "SEO Technique", desc: "Données structurées, Core Web Vitals, architecture sitemap, schema markup et optimisation de performance." },
                { icon: Zap, title: "Déploiement 72h", desc: "Livraison complète de site en 72 heures — idéal pour les entreprises qui doivent avancer vite sans compromettre la qualité." }
              ].map((item, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Notre Approche</h2>
              <ul>
                <li><strong>Audit Positionnement & Messaging :</strong> Clarification de votre proposition de valeur, audience cible et différenciation concurrentielle avant d'écrire une seule ligne de code.</li>
                <li><strong>Architecture SEO :</strong> Mapping de mots-clés, hiérarchie de contenu et stratégie de maillage interne pour une croissance organique durable.</li>
                <li><strong>Design de Conversion :</strong> Chaque page structurée autour d'un objectif commercial clair — capture de leads, réservation ou qualification.</li>
                <li><strong>Performance Technique :</strong> Temps de chargement rapides, design responsive mobile-first, accessibilité et conformité Core Web Vitals.</li>
                <li><strong>Intégration :</strong> Connexions CRM, setup analytics, et alignement avec vos <Link to="/fr/automatisation-ia" className="text-primary hover:underline font-medium">workflows d'automatisation IA</Link>.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce qu'un site web de conversion ?", a: "Un site conçu comme un outil de revenus — chaque élément est structuré pour capturer des leads qualifiés, améliorer la visibilité SEO et soutenir le pipeline commercial." },
                { q: "Pouvez-vous livrer un site en 72 heures ?", a: "Oui. Notre modèle de déploiement rapide livre des sites complets et prêts pour la conversion en 72 heures." },
                { q: "Le SEO est-il inclus ?", a: "Chaque site inclut une architecture SEO technique complète : données structurées, optimisation meta, sitemap, Core Web Vitals et hiérarchie de contenu." },
                { q: "Quels secteurs ciblez-vous ?", a: "B2B SaaS, FinTech, PropTech et services professionnels. Nos sites sont construits pour la génération de leads et la performance commerciale." },
                { q: "Comment cela s'intègre avec les autres services NLG ?", a: "Votre site se connecte directement à nos systèmes outbound, workflows d'automatisation IA et infrastructure de génération de leads." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <RelatedServicesFR currentService="web" />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Discutons de Votre Projet Web & SEO</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Que vous ayez besoin d'un déploiement rapide ou d'une construction de plateforme complète, nous pouvons évaluer la meilleure approche pour vos objectifs commerciaux.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default SiteWebEn72hFR;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, FileText, Palette, Search, Mail, Share2, CheckCircle, BarChart3 } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AutomationMarketingIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Automatisation Marketing IA — Contenu, SEO & Systèmes de Croissance",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Automatisation marketing IA pour entreprises B2B. Systèmes de production de contenu, automatisation SEO, workflows réseaux sociaux et infrastructure de campagnes qui scalent l'output sans scaler les équipes.",
        "url": "https://www.nlgconsulting.co/fr/automation-marketing-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Marketing Automation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'automatisation marketing IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation marketing IA utilise des modèles IA et l'orchestration de workflows pour systématiser les opérations marketing — de la création de contenu et du SEO aux campagnes email, réseaux sociaux et reporting. Un output consistant et scalable avec moins d'effort manuel." }},
          { "@type": "Question", "name": "Comment l'IA améliore-t-elle la production de contenu ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA gère la couche de production — rédaction, recherche, optimisation, formatage — tandis que votre équipe se concentre sur la stratégie et la qualité éditoriale. Cela augmente typiquement l'output de contenu de 3 à 5x tout en maintenant la consistance de marque." }},
          { "@type": "Question", "name": "L'IA peut-elle gérer l'automatisation SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA automatise la recherche de mots-clés, la génération de briefs, l'optimisation on-page et l'analyse du maillage interne. La direction stratégique — positionnement, autorité thématique, différenciation — reste pilotée par l'humain." }},
          { "@type": "Question", "name": "L'automatisation marketing IA remplace-t-elle les équipes ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Elle les amplifie. L'IA gère la production et les opérations répétitives, permettant aux marketeurs de se concentrer sur la stratégie, la créativité et les décisions commerciales." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Automatisation Marketing IA", "item": "https://www.nlgconsulting.co/fr/automation-marketing-ia" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automatisation Marketing IA | Contenu & SEO | NLG</title>
        <meta name="description" content="Automatisation marketing IA pour les entreprises B2B. Systèmes de production de contenu, automatisation SEO, workflows réseaux sociaux et infrastructure de campagnes qui scalent l'output." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <meta property="og:title" content="Automatisation Marketing IA | Contenu & SEO | NLG" />
        <meta property="og:description" content="Production de contenu, automatisation SEO et systèmes de campagnes IA pour les entreprises B2B." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Marketing IA</Badge>
            <h1 className="mb-6">Systèmes Marketing{" "}<span className="text-gradient">& Contenu IA</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nous construisons des systèmes d'automatisation marketing qui gèrent la production de contenu, le SEO, les réseaux sociaux, les campagnes email et les workflows créatifs — créant un output consistant et scalable sans croissance proportionnelle des équipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Évaluer vos opérations marketing <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">Le gap d'exécution marketing</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Le marketing B2B exige un output constant et multi-canal — articles, contenu social, séquences email, landing pages, études de cas, assets SEO et reporting. La plupart des équipes font face à la même contrainte : la clarté stratégique dépasse la bande passante d'exécution.</p>
              <p>L'automatisation marketing IA répond à cela en systématisant la couche de production. L'IA gère la rédaction, la recherche, l'optimisation et le formatage. Votre équipe gère la stratégie, le positionnement et la qualité éditoriale. Le résultat : un output plus élevé avec une consistance renforcée.</p>
              <p>Pour les <Link to="/fr/ia-pour-saas" className="text-primary hover:underline">sociétés SaaS</Link>, les <Link to="/fr/ia-pour-fintech" className="text-primary hover:underline">opérateurs FinTech</Link> et les <Link to="/fr/ia-pour-services-b2b" className="text-primary hover:underline">entreprises de services B2B</Link>, cela crée des avantages mesurables : plus de pages indexées en SEO, une présence sociale plus consistante, plus de touchpoints email et une meilleure visibilité du reporting.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Systèmes marketing que nous construisons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FileText className="w-5 h-5" />, title: "Systèmes de Production de Contenu", desc: "Articles, newsletters, études de cas et livres blancs — production assistée par IA avec consistance de marque, workflows éditoriaux et intégration SEO." },
                { icon: <Search className="w-5 h-5" />, title: "Automatisation SEO & Croissance", desc: "Recherche de mots-clés, génération de briefs, optimisation on-page, analyse du maillage interne et suivi de performance — construction systématique de visibilité organique." },
                { icon: <Share2 className="w-5 h-5" />, title: "Opérations Réseaux Sociaux", desc: "Génération de calendriers éditoriaux, rédaction de posts, planification LinkedIn et Twitter, monitoring d'engagement et analytics de performance." },
                { icon: <Mail className="w-5 h-5" />, title: "Systèmes Email & Nurturing", desc: "Séquences email personnalisées, workflows de segmentation, optimisation d'objets, A/B testing et campagnes de nurturing connectées à votre CRM." },
                { icon: <Palette className="w-5 h-5" />, title: "Production Créative", desc: "Visuels sociaux, créas publicitaires, design de présentations et assets de marque — workflows créatifs IA avec Midjourney, Canva et outils de design." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Reporting Marketing", desc: "Tableaux de bord automatisés, rapports de performance, analyse d'attribution et veille concurrentielle — visibilité claire pour les dirigeants sans compilation manuelle." }
              ].map((item, i) => (
                <Card key={i} className="border border-border"><CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Qualité & Consistance de marque</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Ton de voix et guidelines de marque intégrés dans chaque workflow IA",
                "Processus de validation éditoriale avec points de contrôle humains",
                "Templates de contenu structurés par canal, format et objectif",
                "Guidelines SEO embarquées dans les pipelines de production de contenu",
                "Capacité multilingue — systèmes de contenu en français et anglais",
                "Scoring qualité et boucles de feedback de performance"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Construisez votre moteur marketing</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel pour évaluer quels processus marketing ont le plus fort potentiel d'automatisation.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Évaluer vos opérations marketing <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Automatisation commerciale IA", desc: "Complétez le marketing avec des systèmes de pipeline et d'outbound IA.", link: "/fr/automation-commerciale-ia" },
                { title: "Agents IA pour entreprises", desc: "Systèmes agentiques pour le contenu, les campagnes et la recherche.", link: "/fr/agents-ia-entreprise" },
                { title: "Automatisation IA des workflows", desc: "Systèmes d'automatisation plus larges pour toutes les opérations business.", link: "/fr/automation-ia" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce que l'automatisation marketing IA ?", a: "Elle utilise des modèles IA et l'orchestration de workflows pour systématiser les opérations marketing — création de contenu, SEO, campagnes email, réseaux sociaux et reporting — un output consistant avec moins d'effort manuel." },
                { q: "Comment l'IA améliore-t-elle la production de contenu ?", a: "L'IA gère la production — rédaction, recherche, optimisation, formatage — tandis que votre équipe se concentre sur la stratégie et la qualité éditoriale. L'output augmente typiquement de 3 à 5x." },
                { q: "L'IA peut-elle gérer l'automatisation SEO ?", a: "L'IA automatise la recherche de mots-clés, la génération de briefs, l'optimisation on-page et l'analyse du maillage interne. La direction stratégique reste pilotée par l'humain." },
                { q: "L'automatisation marketing IA remplace-t-elle les équipes ?", a: "Non. Elle les amplifie. L'IA gère la production et les opérations répétitives, permettant aux marketeurs de se concentrer sur la stratégie et la créativité." },
                { q: "Comment maintenez-vous la consistance de marque ?", a: "Nous intégrons les guidelines de marque, le ton de voix et les templates directement dans les workflows IA. Combiné avec la validation éditoriale et le scoring qualité, cela garantit la consistance." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Systématisez votre output marketing</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez un appel ciblé pour discuter de votre roadmap contenu, SEO et automatisation marketing.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomationMarketingIAFR;

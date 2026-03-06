import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Megaphone, FileText, Palette, Search, Mail, Share2, CheckCircle, BarChart3 } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AutomationMarketingIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Automatisation Marketing IA",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Automatisation du marketing B2B avec l'IA — contenu, SEO, réseaux sociaux, email, design et reporting. Des systèmes marketing qui fonctionnent en continu.",
        "url": "https://www.nlgconsulting.co/fr/automation-marketing-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Marketing Automation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'automatisation marketing IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation marketing IA utilise l'intelligence artificielle pour automatiser et optimiser les tâches marketing — création de contenu, gestion des réseaux sociaux, campagnes email, optimisation SEO, production créative et reporting." }},
          { "@type": "Question", "name": "L'IA peut-elle vraiment créer du contenu marketing de qualité ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, lorsqu'elle est correctement guidée. Les outils IA produisent du contenu marketing de qualité lorsqu'ils sont combinés avec des guidelines de marque claires, une direction stratégique et une supervision éditoriale humaine." }},
          { "@type": "Question", "name": "Quelles tâches marketing peuvent être automatisées ?", "acceptedAnswer": { "@type": "Answer", "text": "Rédaction de contenu, optimisation SEO, planification des réseaux sociaux, personnalisation email, design créatif, A/B testing, segmentation d'audience, reporting de campagnes et veille concurrentielle." }}
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
        <title>Automatisation Marketing IA pour le B2B | Contenu, SEO & Social | NLG Consulting</title>
        <meta name="description" content="Automatisez votre marketing B2B avec l'IA. Création de contenu, SEO, réseaux sociaux, email et design — des systèmes marketing intelligents qui fonctionnent en continu." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <meta property="og:title" content="Automatisation Marketing IA pour le B2B | NLG Consulting" />
        <meta property="og:description" content="Automatisez votre marketing avec l'IA — contenu, SEO, social media et email marketing." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Marketing IA</Badge>
            <h1 className="mb-6">Automatisation Marketing{" "}<span className="text-gradient">avec l'IA</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transformez votre marketing B2B grâce à l'intelligence artificielle. Automatisez la création de contenu, le SEO, les réseaux sociaux, l'email marketing et le design — sans sacrifier la qualité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Audit marketing IA gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Ce que nous automatisons dans votre marketing</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Chaque pilier de votre marketing peut être renforcé — voire entièrement automatisé — grâce à l'IA.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FileText, title: "Contenu & Rédaction", desc: "Articles de blog, pages web, études de cas, descriptions produit — rédaction IA avec votre ton de voix et vos guidelines." },
                { icon: Search, title: "SEO & Référencement", desc: "Recherche de mots-clés, optimisation on-page, création de contenu SEO, suivi de positionnement et audit technique." },
                { icon: Share2, title: "Réseaux sociaux", desc: "Planification éditoriale, rédaction de posts LinkedIn, création de visuels, publication automatisée et analyse de performance." },
                { icon: Mail, title: "Email marketing", desc: "Séquences automatisées, personnalisation par segment, A/B testing, newsletters et nurturing de leads." },
                { icon: Palette, title: "Design & Créatif", desc: "Visuels pour les réseaux sociaux, bannières, présentations, infographies — design automatisé avec Midjourney, Canva et Figma." },
                { icon: BarChart3, title: "Reporting & Analytics", desc: "Tableaux de bord automatisés, rapports de performance, suivi des KPIs marketing et attribution multi-canal." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand consistency */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-4">Qualité & Cohérence de marque</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              L'automatisation marketing IA ne signifie pas du contenu générique. Nous intégrons vos guidelines de marque dans chaque workflow.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Tone of voice documenté et intégré dans les prompts",
                "Templates de contenu adaptés à chaque canal",
                "Processus de validation éditoriale intégré",
                "Guidelines visuelles appliquées automatiquement",
                "Cohérence multilingue (français et anglais)",
                "Monitoring qualité avec scoring automatique"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Scalez votre marketing avec l'IA</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un audit gratuit pour identifier vos meilleures opportunités d'automatisation marketing.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Audit marketing IA gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        {/* Related */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Automatisation commerciale IA", desc: "Complétez votre marketing par des systèmes de vente IA.", link: "/fr/automation-commerciale-ia" },
                { title: "Agents IA", desc: "Déployez des agents autonomes pour la gestion de campagnes.", link: "/fr/agents-ia-entreprise" },
                { title: "Automatisation IA", desc: "Automatisation de workflows plus large pour toute l'entreprise.", link: "/fr/automation-ia" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce que l'automatisation marketing IA ?", a: "L'automatisation marketing IA utilise l'intelligence artificielle pour automatiser et optimiser les tâches marketing — création de contenu, gestion des réseaux sociaux, campagnes email, optimisation SEO, production créative et reporting." },
                { q: "L'IA peut-elle vraiment créer du contenu marketing de qualité ?", a: "Oui, lorsqu'elle est correctement guidée. Les outils IA produisent du contenu marketing de qualité quand ils sont combinés avec des guidelines de marque claires, une direction stratégique et une supervision éditoriale humaine." },
                { q: "Quelles tâches marketing peuvent être automatisées ?", a: "Rédaction de contenu, optimisation SEO, planification des réseaux sociaux, personnalisation email, design créatif, A/B testing, segmentation d'audience, reporting de campagnes et veille concurrentielle." },
                { q: "L'automatisation marketing IA va-t-elle remplacer mon équipe ?", a: "Non. L'automatisation marketing IA augmente votre équipe en gérant les tâches répétitives et chronophages — permettant aux marketeurs de se concentrer sur la stratégie, la créativité et la relation client." },
                { q: "Comment maintenez-vous la cohérence de marque avec du contenu IA ?", a: "Nous intégrons vos guidelines de marque, votre ton de voix et vos templates de contenu directement dans les workflows IA. Combiné avec des processus de validation éditoriale et des points de contrôle qualité, cela garantit la cohérence." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Prêt à transformer votre marketing ?</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez une consultation gratuite pour discuter de votre roadmap d'automatisation marketing.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomationMarketingIAFR;

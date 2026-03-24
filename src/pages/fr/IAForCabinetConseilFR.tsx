import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Brain, Users, Lightbulb, FileText, TrendingUp, CheckCircle, Target } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForCabinetConseilFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Systèmes IA pour Cabinets de Conseil", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Levier opérationnel IA pour cabinets de conseil. Recherche accélérée, propositions automatisées, livrables scalables et pipeline structuré.", "url": "https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA transforme-t-elle les cabinets de conseil ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA accélère la recherche, automatise les propositions, scale la production de livrables, structure le business development et crée un thought leadership systématique — multipliant l'impact de chaque consultant." }},
        { "@type": "Question", "name": "L'IA va-t-elle remplacer les consultants ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. L'IA crée un levier opérationnel pour les consultants — elle gère la collecte de données, l'analyse et les tâches répétitives, libérant du temps pour la réflexion stratégique et les relations clients." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour cabinets de conseil", "item": "https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour Cabinets de Conseil : Levier & Productivité | NLG</title>
        <meta name="description" content="Systèmes IA pour cabinets de conseil. Recherche accélérée, propositions automatisées, livrables scalables et business development structuré. Par des consultants." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Conseil</Badge>
            <h1 className="mb-6">Levier opérationnel IA pour{" "}<span className="text-gradient">cabinets de conseil</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les cabinets qui adoptent l'IA ne font pas simplement plus vite — ils multiplient l'impact de chaque consultant. Recherche accélérée, propositions automatisées, livrables scalables et business development structuré : l'IA crée le levier opérationnel qui permet de croître sans diluer la qualité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique conseil <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Systèmes IA pour le conseil</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Recherche accélérée", desc: "Analyses de marché, benchmarks concurrentiels et synthèses sectorielles en une fraction du temps — avec la profondeur que vos clients attendent." },
                { icon: FileText, title: "Propositions automatisées", desc: "Génération de propositions personnalisées à partir de templates et données client — réduisant le temps de réponse tout en améliorant la qualité." },
                { icon: Lightbulb, title: "Livrables scalables", desc: "Rapports d'analyse, présentations et recommandations créés plus rapidement sans sacrifier la rigueur intellectuelle." },
                { icon: Target, title: "Thought leadership", desc: "Production de contenu expert systématisée : articles, études de cas, newsletters et posts LinkedIn — pour une autorité constante." },
                { icon: TrendingUp, title: "Pipeline structuré", desc: "Prospection automatisée, qualification et nurturing personnalisé pour un flux régulier d'opportunités — au-delà du réseau personnel." },
                { icon: Users, title: "Gestion de projets", desc: "Suivi, reporting client et allocation de ressources optimisés — pour que les opérations ne freinent pas la capacité de conseil." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Pourquoi nous comprenons le conseil</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Nous sommes consultants — nous comprenons les défis du métier de l'intérieur, pas de l'extérieur", "Expérience avec des cabinets de stratégie, management, IT et spécialisés", "Systèmes IA qui respectent la confidentialité, la propriété intellectuelle et les standards du métier", "Intégration native avec les outils du consultant : PowerPoint, Excel, CRM, outils de recherche", "Focus sur le ROI mesurable : temps gagné par consultant, propositions gagnées, contenu publié", "Approche pragmatique qui respecte les contraintes de temps et de ressources du consulting"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Multipliez l'impact de vos consultants</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour identifier les systèmes IA les plus impactants pour votre cabinet.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA transforme-t-elle les cabinets de conseil ?", a: "L'IA accélère la recherche, automatise les propositions, scale les livrables, structure le business development et crée un thought leadership systématique — multipliant l'impact de chaque consultant." },
                { q: "L'IA va-t-elle remplacer les consultants ?", a: "Non. L'IA crée un levier opérationnel — elle gère les tâches répétitives et l'analyse de données, libérant du temps pour la réflexion stratégique et les relations clients qui font la valeur du conseil." },
                { q: "Par où commencer avec l'IA dans un cabinet ?", a: "Commencez par la recherche et la rédaction de propositions — ce sont les tâches les plus chronophages avec le ROI IA le plus immédiat. Ensuite, systématisez le content marketing et le business development." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à créer un levier IA pour votre cabinet ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForCabinetConseilFR;
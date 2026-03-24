import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Megaphone, Users, Palette, TrendingUp, Bot, Zap, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const IAForAgencesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Systèmes IA pour Agences Marketing & Créatives", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Levier opérationnel IA pour agences. Automatisation de la production, systèmes de prospection et infrastructure de croissance pour améliorer les marges.", "url": "https://www.nlgconsulting.co/fr/ia-pour-agences", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Comment l'IA améliore-t-elle les marges d'agence ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA réduit les temps de production de 40-60%, automatise le reporting client, structure la prospection et permet de livrer plus de valeur par employé — augmentant directement la marge par projet." }},
        { "@type": "Question", "name": "Par où commencer avec l'IA dans une agence ?", "acceptedAnswer": { "@type": "Answer", "text": "Commencez par la production de contenu et le reporting client — ce sont les tâches les plus chronophages avec le ROI IA le plus immédiat. Ensuite, structurez la prospection et le business development." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "IA pour agences", "item": "https://www.nlgconsulting.co/fr/ia-pour-agences" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>IA pour Agences : Levier Opérationnel & Marges | NLG</title>
        <meta name="description" content="Systèmes IA pour agences marketing et créatives. Production scalable, prospection structurée et automatisation opérationnelle pour améliorer les marges." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/ia-pour-agences" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-agences" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Agences</Badge>
            <h1 className="mb-6">Levier opérationnel IA pour{" "}<span className="text-gradient">agences</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les agences qui intègrent l'IA ne font pas simplement plus vite — elles changent d'échelle. Production de contenu, reporting, prospection, SEO : chaque système IA améliore les marges et libère la capacité de vos équipes pour le travail à haute valeur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique agence <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Systèmes IA pour les agences</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Production de contenu scalable", desc: "Articles, posts, scripts et newsletters générés à l'échelle avec cohérence de marque — réduisant les temps de production de 40-60%." },
                { icon: Palette, title: "Workflows créatifs accélérés", desc: "Briefs automatisés, déclinaisons visuelles et adaptation multiformat — pour que vos créatifs se concentrent sur la direction artistique, pas la déclinaison." },
                { icon: TrendingUp, title: "SEO & performance", desc: "Recherche de mots-clés, optimisation on-page et suivi de positionnement automatisés — intégrés à vos systèmes de production de contenu." },
                { icon: Bot, title: "Reporting automatisé", desc: "Rapports de performance client générés automatiquement avec insights data-driven — libérant les account managers pour la relation et la stratégie." },
                { icon: Users, title: "Prospection structurée", desc: "Outreach automatisé, qualification de prospects et nurturing personnalisé pour alimenter le pipeline new business de votre agence." },
                { icon: Zap, title: "Opérations optimisées", desc: "Gestion de projets, allocation de ressources et facturation optimisées par l'IA — pour que la back-office ne freine pas la croissance." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Notre approche agences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Expérience avec des agences marketing, SEO, créatives et digitales — de la boutique à la structure internationale", "Compréhension native des modèles économiques d'agence et de la pression constante sur les marges", "Systèmes IA qui augmentent la capacité par employé sans augmenter les coûts fixes", "Intégration avec les outils agence existants : Canva, Figma, HubSpot, SEMrush, Ahrefs", "Focus sur le ROI mesurable : plus de livrables par personne, meilleure rétention client, marges améliorées", "Approche progressive — on commence par les quick wins à fort impact avant de scaler"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Créez un levier opérationnel pour votre agence</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel stratégique pour identifier comment l'IA peut améliorer vos marges et libérer la capacité de vos équipes.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Comment l'IA améliore-t-elle les marges d'agence ?", a: "L'IA réduit les temps de production de 40-60%, automatise le reporting et structure la prospection — augmentant directement la marge par projet et la capacité par employé." },
                { q: "L'IA va-t-elle réduire la qualité de nos livrables ?", a: "Non. L'IA gère la production à volume et les tâches répétitives, libérant vos talents créatifs pour le travail stratégique et la direction artistique — là où la valeur est réellement créée." },
                { q: "Par où commencer avec l'IA dans une agence ?", a: "Commencez par la production de contenu et le reporting client — ce sont les tâches les plus chronophages avec le ROI IA le plus immédiat. Ensuite, structurez la prospection new business." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Prêt à créer un levier IA pour votre agence ?</h2><p className="text-lg text-muted-foreground mb-8">Réservez un appel stratégique gratuit.</p><Button asChild size="lg"><Link to="/fr/rendez-vous">Appel stratégique gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default IAForAgencesFR;
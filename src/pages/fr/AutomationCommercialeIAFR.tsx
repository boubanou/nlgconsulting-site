import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, TrendingUp, Users, Mail, Search, Database, Zap, CheckCircle, Target } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AutomationCommercialeIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Automatisation Commerciale IA",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Automatisation des ventes B2B avec l'IA — prospection, qualification de leads, outreach personnalisé, relances et gestion de pipeline. Des systèmes commerciaux intelligents.",
        "url": "https://www.nlgconsulting.co/fr/automation-commerciale-ia",
        "areaServed": "Worldwide",
        "serviceType": "AI Sales Automation"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce que l'automatisation commerciale IA ?", "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation commerciale IA utilise l'intelligence artificielle pour automatiser les activités de développement commercial — prospection, recherche de prospects, outreach personnalisé, relances et gestion de pipeline." }},
          { "@type": "Question", "name": "L'IA peut-elle remplacer les SDR ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA peut gérer de nombreuses tâches SDR — recherche, rédaction d'emails, relances, saisie de données — mais l'approche la plus efficace combine l'automatisation IA avec la relation humaine." }},
          { "@type": "Question", "name": "Combien de RDV l'automatisation commerciale IA peut-elle générer ?", "acceptedAnswer": { "@type": "Answer", "text": "Les clients constatent typiquement 15 à 30+ réunions qualifiées par mois grâce aux systèmes d'outbound augmentés par l'IA." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Automatisation Commerciale IA", "item": "https://www.nlgconsulting.co/fr/automation-commerciale-ia" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automatisation Commerciale IA | Prospection & Ventes B2B | NLG Consulting</title>
        <meta name="description" content="Automatisez vos ventes B2B avec l'IA. Prospection, qualification de leads, outreach personnalisé et gestion de pipeline — des systèmes commerciaux intelligents qui remplissent votre pipeline." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <meta property="og:title" content="Automatisation Commerciale IA | NLG Consulting" />
        <meta property="og:description" content="Automatisez vos ventes B2B — prospection, qualification et outreach IA." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Ventes IA</Badge>
            <h1 className="mb-6">Automatisation Commerciale{" "}<span className="text-gradient">avec l'IA</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Construisez une machine commerciale alimentée par l'IA. De la recherche de prospects à l'outreach personnalisé, en passant par les relances et la qualification — automatisez chaque étape de votre pipeline B2B.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Audit commercial IA gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Le pipeline commercial IA</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Chaque étape de votre processus commercial peut être automatisée ou augmentée par l'intelligence artificielle.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Search, title: "Recherche de prospects", desc: "Identification automatique de prospects qualifiés via LinkedIn, bases de données B2B et signaux d'achat en temps réel." },
                { icon: Database, title: "Enrichissement de données", desc: "Enrichissement automatique des profils prospects avec des données firmographiques, technographiques et d'intention." },
                { icon: Mail, title: "Outreach personnalisé", desc: "Rédaction IA de messages ultra-personnalisés — emails, messages LinkedIn, séquences multi-canal adaptées à chaque prospect." },
                { icon: Zap, title: "Relances automatisées", desc: "Séquences de follow-up intelligentes qui s'adaptent au comportement du prospect et au timing optimal." },
                { icon: Target, title: "Qualification IA", desc: "Scoring et qualification automatique des leads basés sur l'engagement, le profil et les signaux d'achat." },
                { icon: TrendingUp, title: "Pipeline & Reporting", desc: "Tableau de bord en temps réel, prévisions de pipeline et analyse de performance de vos campagnes outbound." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Les outils que nous intégrons</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Clay", "Apollo", "LinkedIn Sales Navigator", "HubSpot", "Salesforce", "Instantly", "Lemlist", "OpenAI / ChatGPT", "La Growth Machine", "Phantombuster", "Hunter.io", "Calendly"].map((tool, i) => (
                <div key={i} className="text-center p-4 rounded-lg border border-border">
                  <span className="text-sm font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "15-30", label: "RDV qualifiés / mois" },
              { metric: "3+", label: "Canaux outbound" },
              { metric: "70%", label: "Gain de temps vs manuel" },
              { metric: "48h", label: "Mise en route" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold">{item.metric}</p>
                <p className="text-sm opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "SDR externalisé", desc: "Service SDR complet avec des commerciaux humains augmentés par l'IA.", link: "/fr/sdr-externalise" },
                { title: "Agents IA pour les ventes", desc: "Agents IA autonomes qui gèrent la prospection et l'outreach.", link: "/fr/agents-ia-entreprise" },
                { title: "Automatisation Marketing IA", desc: "Complétez vos ventes avec un marketing automatisé par l'IA.", link: "/fr/automation-marketing-ia" }
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
                { q: "Qu'est-ce que l'automatisation commerciale IA ?", a: "L'automatisation commerciale IA utilise l'intelligence artificielle pour automatiser les activités de développement commercial — prospection, recherche de prospects, outreach personnalisé, relances et gestion de pipeline." },
                { q: "L'IA peut-elle remplacer les commerciaux ?", a: "L'IA peut gérer de nombreuses tâches commerciales — recherche, rédaction d'emails, relances, saisie de données — mais l'approche la plus efficace combine l'automatisation IA avec la relation humaine pour la négociation et le closing." },
                { q: "Quels outils utilisez-vous ?", a: "Nous intégrons Clay, Apollo, LinkedIn Sales Navigator, HubSpot, Salesforce, Instantly, Lemlist et des pipelines IA sur mesure." },
                { q: "Combien de RDV l'automatisation commerciale IA peut-elle générer ?", a: "Les clients constatent typiquement 15 à 30+ réunions qualifiées par mois grâce aux systèmes d'outbound augmentés par l'IA." },
                { q: "L'outreach IA est-il considéré comme du spam ?", a: "Pas lorsqu'il est fait correctement. L'outreach alimenté par l'IA, lorsqu'il est personnalisé, pertinent et ciblé vers la bonne audience, performe mieux que les emails génériques de masse." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Prêt à automatiser vos ventes ?</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez une consultation gratuite pour discuter de votre automatisation commerciale.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Consultation gratuite <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AutomationCommercialeIAFR;

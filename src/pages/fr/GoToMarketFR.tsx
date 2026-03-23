import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Globe, Target, Users, BarChart3, Layers, Map } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const GoToMarketFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Stratégie Go-To-Market & Exécution", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Consulting GTM pour FinTech, PropTech et SaaS. Entrée marché, positionnement, stratégie de canaux, pricing et exécution de lancement.", "url": "https://www.nlgconsulting.co/fr/strategie-go-to-market" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Go-To-Market", "item": "https://www.nlgconsulting.co/fr/strategie-go-to-market" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce que le consulting go-to-market ?", "acceptedAnswer": { "@type": "Answer", "text": "Le consulting GTM structure la façon dont une entreprise entre ou s'étend sur un marché — couvrant sélection de cible, positionnement, pricing, architecture de canaux et exécution de lancement." } },
        { "@type": "Question", "name": "Exécutez-vous ou conseillez-vous seulement ?", "acceptedAnswer": { "@type": "Answer", "text": "Les deux. Nous concevons la stratégie GTM et pouvons exécuter via nos systèmes outbound, automatisation IA, sites de conversion et infrastructure SDR." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Stratégie GTM & Exécution pour SaaS & Tech | NLG</title>
        <meta name="description" content="Consulting go-to-market pour FinTech, PropTech et SaaS. Entrée marché, positionnement, pricing, stratégie de canaux et exécution — de la stratégie aux revenus." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/strategie-go-to-market" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/strategie-go-to-market" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Stratégie GTM</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Stratégie Go-To-Market & Exécution</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Structurer une entrée marché n'est pas un exercice de slides — cela requiert une clarté opérationnelle sur le positionnement, le pricing, l'architecture de canaux et l'exécution outbound. Nous apportons un consulting GTM de niveau opérateur aux entreprises FinTech, PropTech et SaaS.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">Discuter de votre GTM <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi la Plupart des Plans GTM Sous-Performent</h2>
              <p>
                La majorité des échecs GTM proviennent des mêmes failles structurelles : hypothèses de demande non validées, pricing mal aligné, infrastructure outbound faible, ou stratégies de canaux conçues en théorie plutôt que testées en pratique.
              </p>
              <p>
                La pratique GTM de NLG Consulting est construite sur une expérience opérationnelle directe. Nous avons lancé et scalé des entreprises en Europe, Amérique du Nord et Moyen-Orient — et nous apportons cette perspective d'exécution à chaque engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Framework GTM</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Validation de Marché", desc: "Analyse TAM/SAM/SOM, validation de demande, mapping concurrentiel et développement de personas acheteurs." },
                { icon: Map, title: "Positionnement & Messaging", desc: "Positionnement différencié qui résonne avec les acheteurs cibles — testé contre des signaux de marché réels." },
                { icon: Layers, title: "Architecture de Canaux", desc: "Vente directe, partenariats, PLG ou hybride — conception du bon mix de canaux pour votre modèle." },
                { icon: BarChart3, title: "Stratégie de Pricing", desc: "Modèles de pricing basés sur la valeur, optimisés pour votre marché et paysage concurrentiel." },
                { icon: Users, title: "Exécution Outbound", desc: "Plans GTM connectés à nos systèmes outbound, infrastructure SDR et prospection IA." },
                { icon: Globe, title: "Expansion Internationale", desc: "GTM cross-border avec connaissance réglementaire, adaptation locale et exécution multi-géographique." }
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
              <h2 className="text-3xl font-bold text-foreground mb-6">De la Stratégie aux Revenus</h2>
              <p>
                Nous ne nous arrêtons pas aux decks stratégiques. Les plans GTM se connectent directement à nos capacités d'exécution — <Link to="/fr/sdr-externalise" className="text-primary hover:underline font-medium">systèmes outbound SDR</Link>, <Link to="/fr/automatisation-ia" className="text-primary hover:underline font-medium">workflows d'automatisation IA</Link>, <Link to="/fr/site-web-en-72h" className="text-primary hover:underline font-medium">sites de conversion</Link> et <Link to="/fr/automatisation-marketing-ia" className="text-primary hover:underline font-medium">automatisation marketing</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce que le consulting go-to-market ?", a: "Le consulting GTM structure comment une entreprise entre ou s'étend sur un marché — sélection de cible, positionnement, pricing, architecture de canaux et exécution de lancement." },
                { q: "Qui bénéficie du consulting GTM ?", a: "Les entreprises FinTech, PropTech et SaaS qui lancent de nouveaux produits, entrent sur de nouvelles géographies, ou restructurent leur modèle commercial." },
                { q: "Combien de temps dure un engagement GTM ?", a: "Typiquement 4-8 semaines pour la stratégie, avec 3-6 mois de support d'exécution selon le scope." },
                { q: "Exécutez-vous ou conseillez-vous seulement ?", a: "Les deux. Nous concevons la stratégie et pouvons exécuter via nos systèmes outbound, automatisation IA, sites de conversion et infrastructure SDR." },
                { q: "Quelles géographies couvrez-vous ?", a: "Europe, Amérique du Nord et Moyen-Orient — avec une expertise approfondie du GTM cross-border." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <RelatedServicesFR currentService="go-to-market" />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Revoyez Votre Structure Go-To-Market</h2>
            <p className="text-lg text-muted-foreground mb-8">Si vous planifiez une entrée marché, expansion ou restructuration commerciale, nous pouvons évaluer où clarté et levier peuvent être améliorés.</p>
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

export default GoToMarketFR;
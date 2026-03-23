import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Target, Users, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const PriseRendezVousFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Prise de Rendez-Vous B2B", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Système de prise de rendez-vous B2B. Nous qualifions et bookons des réunions avec les décideurs de vos entreprises cibles via une prospection multicanal structurée.", "url": "https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b", "areaServed": ["Europe", "Amérique du Nord", "Moyen-Orient"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
        { "@type": "ListItem", "position": 2, "name": "Prise de Rendez-Vous B2B", "item": "https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce que la prise de rendez-vous B2B ?", "acceptedAnswer": { "@type": "Answer", "text": "La prise de rendez-vous B2B est un processus structuré d'identification, qualification et booking de réunions avec les décideurs de vos entreprises cibles — permettant à votre équipe commerciale de se concentrer sur le closing." } },
        { "@type": "Question", "name": "En quoi est-ce différent de la lead generation ?", "acceptedAnswer": { "@type": "Answer", "text": "La lead generation identifie des contacts. La prise de rendez-vous va plus loin : elle qualifie chaque prospect selon vos critères et booke des réunions confirmées directement dans l'agenda de votre équipe." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Prise de Rendez-Vous B2B | Meetings Qualifiés | NLG</title>
        <meta name="description" content="Système de prise de rendez-vous B2B. Qualification et booking de meetings avec décideurs via prospection multicanal structurée. FinTech, PropTech, SaaS et B2B." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/appointment-setting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/appointment-setting" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <meta property="og:title" content="Prise de Rendez-Vous B2B | NLG Consulting" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Meetings Qualifiés</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prise de Rendez-Vous B2B Structurée</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Un système de prospection structuré qui identifie, qualifie et booke des réunions avec les décideurs de vos entreprises cibles — permettant à votre équipe commerciale de se concentrer sur le closing et la conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/fr/rendez-vous">Structurer votre pipeline <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/fr/vente">Voir l'infrastructure commerciale</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Un Système, Pas un Service Ponctuel</h2>
              <p>
                Vos commerciaux seniors doivent closer, pas prospecter. La prise de rendez-vous B2B crée une séparation structurelle entre la génération de pipeline et la conversion — permettant à chaque fonction de performer à son meilleur niveau.
              </p>
              <p>
                Notre approche est systématique : définition de l'ICP, enrichissement de données, séquences multicanal (LinkedIn, email, téléphone), qualification selon vos critères, et booking directement dans l'agenda de votre équipe. Chaque étape est instrumentée et mesurable.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Comment Fonctionne le Système</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Définition de Cible", desc: "ICP précis incluant secteur, taille, revenus, postes décisionnaires et critères de qualification." },
                { icon: Users, title: "Enrichissement de Données", desc: "Contacts vérifiés des décideurs avec données firmographiques et signaux d'intention." },
                { icon: MessageSquare, title: "Séquences Multicanal", desc: "LinkedIn, email et téléphone coordonnés avec messaging adapté à chaque canal et persona." },
                { icon: CheckCircle, title: "Qualification Rigoureuse", desc: "Chaque prospect qualifié selon vos critères avant tout booking de meeting." },
                { icon: Calendar, title: "Booking Direct", desc: "Meetings confirmés directement dans l'agenda de votre équipe commerciale." }
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
            <p className="text-center text-sm text-muted-foreground mt-8">
              Intégration complète avec notre <Link to="/fr/sdr-externalise" className="text-primary hover:underline">infrastructure SDR externalisée</Link> et nos <Link to="/fr/automatisation-ia" className="text-primary hover:underline">workflows d'automatisation IA</Link>.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Questions Fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce que la prise de rendez-vous B2B ?", a: "Un processus structuré d'identification, qualification et booking de réunions avec les décideurs de vos entreprises cibles — permettant à votre équipe de se concentrer sur le closing." },
                { q: "En quoi est-ce différent de la lead generation ?", a: "La lead generation identifie des contacts. La prise de rendez-vous qualifie chaque prospect et booke des réunions confirmées directement dans l'agenda de votre équipe." },
                { q: "Quels secteurs ciblez-vous ?", a: "FinTech, PropTech, SaaS et services B2B — avec une expertise particulière sur les cycles de vente complexes." },
                { q: "Comment mesurez-vous les résultats ?", a: "Reporting transparent sur le nombre de prospects contactés, taux de réponse, taux de qualification et meetings bookés. Chaque métrique est traçable." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <RelatedServicesFR currentService="sales" />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Structurez Votre Pipeline de Meetings</h2>
            <p className="text-lg text-muted-foreground mb-8">Si vous souhaitez améliorer la discipline de votre génération de pipeline et la qualité de vos meetings, discutons de la bonne structure.</p>
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

export default PriseRendezVousFR;
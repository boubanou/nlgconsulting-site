import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import ContactForm from "@/components/ContactForm";
import CalendarEmbed from "@/components/CalendarEmbed";

const ContactFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "Contacter NLG Consulting",
        "description": "Prenez contact avec NLG Consulting pour discuter de systèmes de croissance IA, revenue operations et conseil stratégique.",
        "url": "https://www.nlgconsulting.co/fr/contact"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.nlgconsulting.co/fr/contact" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contacter NLG Consulting | Systèmes de Croissance & IA</title>
        <meta name="description" content="Contactez NLG Consulting pour discuter de systèmes de croissance IA, revenue operations et conseil stratégique pour FinTech, PropTech et entreprises B2B." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/contact" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/contact" />
        <meta property="og:title" content="Contacter NLG Consulting | Systèmes de Croissance & IA" />
        <meta property="og:description" content="Discutez de systèmes de croissance IA, revenue operations et conseil stratégique avec NLG Consulting." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <section className="pt-32 md:pt-40 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discutons de Votre Structure de Croissance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Que vous revoyiez votre modèle outbound, votre stratégie d'adoption IA ou votre rythme opérationnel commercial — nous pouvons évaluer où structure et levier peuvent être améliorés.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Comment Nous Pouvons Vous Aider</h2>
              <p>
                NLG Consulting travaille avec des fondateurs, CEO et dirigeants croissance dans la FinTech, PropTech, SaaS et services B2B. Que vous ayez besoin de <Link to="/fr/conseil-ia" className="text-primary hover:underline font-medium">consulting IA</Link>, d'<Link to="/fr/vente" className="text-primary hover:underline font-medium">infrastructure outbound</Link>, de <Link to="/fr/conseil" className="text-primary hover:underline font-medium">conseil stratégique</Link>, ou d'un <Link to="/fr/site-web-en-72h" className="text-primary hover:underline font-medium">site web de conversion</Link> — la première étape est une conversation centrée sur vos objectifs.
              </p>
              <p>
                Réservez un appel stratégique de 15 minutes ou envoyez-nous un message. Nous répondons sous 24 heures.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Réserver un Appel Stratégique</h2>
                    <p className="text-sm text-muted-foreground">Conversation centrée de 15 minutes</p>
                  </div>
                </div>
                <CalendarEmbed />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Envoyer un Message</h2>
                    <p className="text-sm text-muted-foreground">Nous répondons sous 24 heures</p>
                  </div>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Demander un Rappel</h3>
                    <p className="text-sm text-muted-foreground">Nous vous rappelons sous 24 heures</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Direct</h3>
                    <p className="text-sm text-muted-foreground">greg@nlgconsulting.co</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default ContactFR;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone, ArrowRight } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import ContactForm from "@/components/ContactForm";
import CalendarEmbed from "@/components/CalendarEmbed";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const ContactFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "Contacter NLG Consulting",
        "description": "Prenez contact avec NLG Consulting. Réservez un appel ou envoyez-nous un message.",
        "url": "https://nlgconsulting.co/fr/contact"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://nlgconsulting.co/fr/contact" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contacter NLG Consulting | Réponse sous 24h | Consultation Gratuite</title>
        <meta 
          name="description" 
          content="Contactez NLG Consulting. Génération de leads B2B, création de sites web ou conseil stratégique. Rappel immédiat disponible. Réponse sous 24h." 
        />
        <meta name="keywords" content="contacter NLG, prendre contact, réserver consultation, appel stratégique gratuit, demande de rappel" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/contact" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/fr/contact" />
        <meta property="og:title" content="Contacter NLG Consulting | Réponse sous 24h" />
        <meta property="og:description" content="Contactez NLG Consulting. Génération de leads B2B, création de sites web ou conseil stratégique. Rappel immédiat disponible." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacter NLG Consulting | Réponse sous 24h" />
        <meta name="twitter:description" content="Contactez NLG Consulting. Génération de leads B2B, création de sites web ou conseil stratégique." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prenez contact avec notre équipe
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Réservez un appel stratégique gratuit ou envoyez-nous un message. Nous répondons sous 24 heures.
            </p>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Comment pouvons-nous vous aider à croître ?</h2>
              <p>
                Que vous cherchiez à externaliser votre développement commercial, lancer un site web prêt à générer du revenu, ou obtenir un accompagnement stratégique pour scaler votre entreprise, notre équipe est là pour vous aider. Nous travaillons avec des entreprises B2B, startups et scale-ups dans la PropTech, FinTech, SaaS et Services Professionnels.
              </p>
              <p>
                La meilleure façon de commencer est avec un appel stratégique gratuit de 15 minutes. Pendant cet appel, nous découvrirons votre entreprise, comprendrons vos défis, et discuterons de comment NLG Consulting peut vous aider. Sans engagement — juste une conversation focalisée sur vos objectifs de croissance.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">À quoi s'attendre</h3>
              <p>
                Quand vous réservez un appel ou nous envoyez un message, voici ce qui se passe :
              </p>
              <ul>
                <li><strong>Sous 24 heures :</strong> Vous recevrez une confirmation et des questions préparatoires pour rendre notre conversation productive.</li>
                <li><strong>Pendant l'appel :</strong> Nous discuterons de votre situation actuelle, vos objectifs de croissance et les approches potentielles.</li>
                <li><strong>Après l'appel :</strong> S'il y a un fit, nous enverrons une proposition personnalisée. Sinon, nous partagerons des ressources utiles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Calendar Embed */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Réserver un appel</h2>
                    <p className="text-sm text-muted-foreground">Planifiez un appel stratégique de 15 minutes</p>
                  </div>
                </div>
                <CalendarEmbed />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Envoyer un message</h2>
                    <p className="text-sm text-muted-foreground">Nous vous répondrons sous 24 heures</p>
                  </div>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Demander un rappel</h3>
                    <p className="text-sm text-muted-foreground">Nous vous rappelons sous 24 heures</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email direct</h3>
                    <p className="text-sm text-muted-foreground">greg@nlgconsulting.co</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <RelatedServicesFR currentService="contact" />

        <MainFooterFR />
      </div>
    </>
  );
};

export default ContactFR;

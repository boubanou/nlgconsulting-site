import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import CalendarEmbed from "@/components/CalendarEmbed";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const BookFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Réserver votre consultation gratuite",
        "description": "Planifiez un appel de 15 minutes pour discuter de comment nous pouvons vous aider à générer des rendez-vous B2B qualifiés",
        "url": "https://nlgconsulting.co/fr/rendez-vous"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Rendez-vous", "item": "https://nlgconsulting.co/fr/rendez-vous" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Réserver un Appel Gratuit | Consultation 15 Min | Réponse sous 24h | NLG Consulting</title>
        <meta name="description" content="Planifiez votre appel stratégique gratuit de 15 minutes. Génération de leads, création de sites web ou conseil. Réponse sous 24h. Places limitées." />
        <meta name="keywords" content="réserver appel stratégique, consultation gratuite, croissance B2B, stratégie commerciale, conseil business, prendre rendez-vous" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/fr/rendez-vous" />
        <meta property="og:title" content="Réserver un Appel Gratuit | Consultation 15 Min | NLG Consulting" />
        <meta property="og:description" content="Planifiez votre appel stratégique gratuit de 15 minutes. Génération de leads, création de sites web ou conseil. Réponse sous 24h." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Réserver un Appel Gratuit | Consultation 15 Min | NLG Consulting" />
        <meta name="twitter:description" content="Planifiez votre appel stratégique gratuit de 15 minutes. Génération de leads, création de sites web ou conseil." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Réservez votre consultation gratuite</h1>
              <p className="text-xl text-muted-foreground">Planifiez un appel de 15 minutes pour discuter de comment nous pouvons vous aider à générer des rendez-vous B2B qualifiés</p>
            </div>

            <CalendarEmbed />

            {/* Book CTA */}
            <div className="mt-16 text-center p-8 bg-muted/30 rounded-2xl">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">Lire le livre</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Obtenez des insights stratégiques du livre de Gregory Brenig sur la construction et le développement d'entreprises.
              </p>
              <Button asChild size="lg">
                <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">
                  Acheter sur Amazon <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <p className="text-center text-muted-foreground text-sm">
              Pas sûr du service ? Explorez <Link to="/fr/vente" className="text-primary hover:underline">Vente & BD</Link>, <Link to="/fr/site-internet" className="text-primary hover:underline">Studio Web</Link>, ou <Link to="/fr/conseil" className="text-primary hover:underline">Conseil</Link>.
            </p>
          </div>
        </main>

        {/* Related Services */}
        <RelatedServicesFR currentService="book" />

        <MainFooterFR />
      </div>
    </>
  );
};

export default BookFR;

import { Helmet } from "react-helmet-async";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import CalendarEmbed from "@/components/CalendarEmbed";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

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
        <title>Réserver un Appel Stratégique Gratuit | Consultation 15 Minutes | NLG Consulting</title>
        <meta name="description" content="Réservez un appel stratégique gratuit de 15 minutes avec NLG Consulting. Discutez de vos défis de croissance et découvrez comment nous pouvons vous aider à scaler avec la vente B2B, les sites web ou le conseil." />
        <meta name="keywords" content="réserver consultation, appel stratégique, consultation business gratuite, croissance B2B, stratégie commerciale, conseil business" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="fr_FR" />
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
          </div>
        </main>

        <MainFooterFR />
      </div>
    </>
  );
};

export default BookFR;

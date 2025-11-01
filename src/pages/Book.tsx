import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendarEmbed from "@/components/CalendarEmbed";

const Book = () => {
  const { t, i18n } = useTranslation();

  // Structured Data for SEO - Enhanced with BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": t("book.title"),
        "description": t("book.subtitle"),
        "url": "https://nlgconsulting.co/book",
        "potentialAction": {
          "@type": "ReserveAction",
          "target": "https://nlgconsulting.co/book",
          "result": {
            "@type": "Reservation",
            "name": "15-Minute Strategy Call"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nlgconsulting.co"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Book a Call",
            "item": "https://nlgconsulting.co/book"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t("book.title")} - NLG Consulting</title>
        <meta name="description" content={t("book.subtitle")} />
        <link rel="canonical" href={`https://nlgconsulting.co/${i18n.language === 'fr' ? 'fr' : 'en'}/book`} />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/en/book" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/book" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/book" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nlgconsulting.co/${i18n.language === 'fr' ? 'fr' : 'en'}/book`} />
        <meta property="og:title" content={`${t("book.title")} - NLG Consulting`} />
        <meta property="og:description" content={t("book.subtitle")} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("book.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("book.subtitle")}</p>
            </div>

            <CalendarEmbed />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Book;

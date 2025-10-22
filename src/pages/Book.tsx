import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendarEmbed from "@/components/CalendarEmbed";

const Book = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("book.title")} - NLG Consulting</title>
        <meta name="description" content={t("book.subtitle")} />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en/book" />
        <link rel="alternate" hrefLang="fr" href="https://yourdomain.com/fr/book" />
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

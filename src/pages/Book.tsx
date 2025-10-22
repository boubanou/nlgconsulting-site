import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Book = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("book.title")} - NLG Consulting</title>
        <meta name="description" content={t("book.subtitle")} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("book.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("book.subtitle")}</p>
            </div>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/your-link"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Book;

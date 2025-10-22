import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      <Helmet>
        <title>{t("contact.title")} - NLG Consulting</title>
        <meta name="description" content={t("contact.subtitle")} />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en/contact" />
        <link rel="alternate" hrefLang="fr" href="https://yourdomain.com/fr/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("contact.subtitle")}</p>
            </div>

            <ContactForm />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;

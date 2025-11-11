import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("privacy.metaTitle"),
    description: t("privacy.metaDescription"),
    url: `https://nlgconsulting.co/privacy-policy`,
    inLanguage: currentLang,
  };

  const locales = ['en', 'fr', 'de', 'es', 'it', 'pt', 'nl', 'da', 'sv', 'no', 'fi', 'el', 'pl', 'cs', 'sk', 'sl', 'hu', 'ro', 'bg', 'hr', 'lt', 'lv', 'et', 'ga', 'mt'];

  return (
    <>
      <Helmet>
        <title>{t("privacy.metaTitle")}</title>
        <meta name="description" content={t("privacy.metaDescription")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nlgconsulting.co/privacy-policy" />
        
        {locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`https://nlgconsulting.co/${locale}/privacy-policy`}
          />
        ))}
        
        <meta property="og:title" content={t("privacy.metaTitle")} />
        <meta property="og:description" content={t("privacy.metaDescription")} />
        <meta property="og:url" content={`https://nlgconsulting.co/${currentLang}/privacy-policy`} />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/5">
        <div className="container max-w-4xl mx-auto px-4 pt-24 md:pt-32 pb-16">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">{t("privacy.title")}</h1>
            
            <p className="text-muted-foreground mb-8">
              {t("privacy.lastUpdated")}: {new Date().toLocaleDateString(currentLang, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t("privacy.section1Title")}</h2>
              <p className="mb-4">{t("privacy.section1Text1")}</p>
              <p className="mb-2"><strong>{t("privacy.address")}:</strong> Hahermon 21, Tel Aviv, Israel</p>
              <p className="mb-2"><strong>{t("privacy.email")}:</strong> greg@nlgconsulting.co</p>
              <p className="mb-4"><strong>{t("privacy.director")}:</strong> Gregory Brenig</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t("privacy.section2Title")}</h2>
              <p>{t("privacy.section2Text")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t("privacy.section3Title")}</h2>
              <p className="mb-4">{t("privacy.section3Text1")}</p>
              <p>{t("privacy.section3Text2")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t("privacy.section4Title")}</h2>
              <p className="mb-4">{t("privacy.section4Text1")}</p>
              <p>{t("privacy.section4Text2")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t("privacy.section5Title")}</h2>
              <p className="mb-4">{t("privacy.section5Text1")}</p>
              <p>{t("privacy.section5Text2")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t("privacy.section6Title")}</h2>
              <p>{t("privacy.section6Text")}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t("privacy.section7Title")}</h2>
              <p>{t("privacy.section7Text")}</p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;

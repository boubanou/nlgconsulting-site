import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary mb-2" />,
      title: t("about.value1_title"),
      description: t("about.value1_text"),
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary mb-2" />,
      title: t("about.value2_title"),
      description: t("about.value2_text"),
    },
    {
      icon: <Heart className="w-8 h-8 text-primary mb-2" />,
      title: t("about.value3_title"),
      description: t("about.value3_text"),
    },
  ];

  // Structured Data for SEO - Enhanced with BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "NLG Consulting",
          "url": "https://nlgconsulting.co",
          "founder": {
            "@type": "Person",
            "name": "Gregory Brenig",
            "jobTitle": "Founder & Lead Generation Specialist"
          },
          "areaServed": [
            { "@type": "Country", "name": "France" },
            { "@type": "Country", "name": "Belgium" },
            { "@type": "Country", "name": "Switzerland" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Israel" }
          ],
          "description": t("about.subtitle"),
          "knowsAbout": ["B2B Lead Generation", "Sales Development", "Appointment Setting", "Multichannel Outreach"]
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
            "name": "About",
            "item": "https://nlgconsulting.co/about"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t("about.title")} - NLG Consulting</title>
        <meta name="description" content={t("about.subtitle")} />
        <link rel="canonical" href="https://nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/en/about" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/about" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/about" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nlgconsulting.co/${currentLang === 'fr' ? 'fr' : 'en'}/about`} />
        <meta property="og:title" content={`${t("about.title")} - NLG Consulting`} />
        <meta property="og:description" content={t("about.subtitle")} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("about.subtitle")}</p>
            </div>

            {/* Bio Section */}
            <Card className="mb-12 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">{t("about.bio_title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{t("about.bio_intro")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("about.bio_experience")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("about.bio_approach")}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">{t("about.mission_title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("about.mission_text")}</p>
              </CardContent>
            </Card>

            {/* CTA 1 */}
            <div className="text-center mb-16">
              <Button asChild size="lg" variant="outline">
                <Link to="/book">
                  {t("about.cta1")} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Values */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">{t("about.values_title")}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex justify-center mb-4">{value.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Visual Pattern / Illustration Placeholder */}
            <div className="mb-16 py-12 px-6 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 rounded-3xl border border-primary/10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("home.track_record_title")}</h3>
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">1,500+</p>
                    <p className="text-xs text-muted-foreground">{t("home.track_record_meetings")}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">10+</p>
                    <p className="text-xs text-muted-foreground">{t("home.track_record_sectors")}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">4</p>
                    <p className="text-xs text-muted-foreground">{t("home.track_record_regions")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">{t("about.cta2")}</h2>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/book">
                  {t("home.cta_book")} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;

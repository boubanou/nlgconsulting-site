import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      <Helmet>
        <title>{t("about.title")} - NLG Consulting</title>
        <meta name="description" content={t("about.subtitle")} />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en/about" />
        <link rel="alternate" hrefLang="fr" href="https://yourdomain.com/fr/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("about.subtitle")}</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{t("about.bio_title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("about.bio_text")}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>{t("about.mission_title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("about.mission_text")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>{t("about.method_title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t("about.method_text")}</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/book">
                  {t("home.cta_book")} <ArrowRight className="ml-2 w-4 h-4" />
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

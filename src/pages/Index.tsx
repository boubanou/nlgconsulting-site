import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Globe, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <>
      <Helmet>
        <title>
          {currentLang === 'fr' 
            ? 'Prospection B2B & Génération de leads – NLG Consulting'
            : 'B2B Lead Generation & Appointment Setting – NLG Consulting'
          }
        </title>
        <meta
          name="description"
          content={
            currentLang === 'fr'
              ? 'Externalisez votre prospection B2B. 15–20 rendez-vous qualifiés par mois via LinkedIn, email et appels. Réservez un appel de 15 min.'
              : '15–20 qualified meetings/month with LinkedIn, email and phone outreach. Book a 15-min call.'
          }
        />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://yourdomain.com/fr" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {t("home.hero_title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("home.hero_subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link to="/book">
                    {t("home.cta_book")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">{t("home.cta_consultation")}</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                {t("home.proof_line")}
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("home.how_it_works_title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t("home.step1_title")}</h3>
                  <p className="text-muted-foreground">{t("home.step1_desc")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t("home.step2_title")}</h3>
                  <p className="text-muted-foreground">{t("home.step2_desc")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t("home.step3_title")}</h3>
                  <p className="text-muted-foreground">{t("home.step3_desc")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust & Compliance Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t("home.trust_title")}</h2>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                {t("home.trust_gdpr")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                {t("home.trust_eu")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                {t("home.trust_multichannel")}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                {t("home.trust_meetings")}
              </Badge>
            </div>

            {/* Logo Placeholders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-50">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-xs">Logo {i}</span>
                </div>
              ))}
            </div>

            {/* Track Record KPIs */}
            <Card className="mb-12">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-center mb-6">{t("home.track_record_title")}</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">1,500+</p>
                    <p className="text-sm text-muted-foreground">{t("home.track_record_meetings")}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">10+</p>
                    <p className="text-sm text-muted-foreground">{t("home.track_record_sectors")}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">4</p>
                    <p className="text-sm text-muted-foreground">{t("home.track_record_regions")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t("home.testimonials_title")}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">"{t("home.testimonial1")}"</p>
                  <p className="font-semibold text-foreground text-sm">{t("home.testimonial1_author")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">"{t("home.testimonial2")}"</p>
                  <p className="font-semibold text-foreground text-sm">{t("home.testimonial2_author")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">"{t("home.testimonial3")}"</p>
                  <p className="font-semibold text-foreground text-sm">{t("home.testimonial3_author")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;

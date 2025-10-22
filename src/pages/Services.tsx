import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, Phone, Pencil, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const services = [
    {
      icon: <Linkedin className="w-8 h-8 text-primary" />,
      title: t("services.linkedin_title"),
      description: t("services.linkedin_desc"),
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: t("services.email_title"),
      description: t("services.email_desc"),
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: t("services.calling_title"),
      description: t("services.calling_desc"),
    },
    {
      icon: <Pencil className="w-8 h-8 text-primary" />,
      title: t("services.copywriting_title"),
      description: t("services.copywriting_desc"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("services.title")} - NLG Consulting</title>
        <meta name="description" content={t("services.subtitle")} />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en/services" />
        <link rel="alternate" hrefLang="fr" href="https://yourdomain.com/fr/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("services.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("services.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-secondary/5">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">{t("services.b2c_note")}</p>
              </CardContent>
            </Card>

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

export default Services;

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Phone, Pencil, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
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

  const howItWorks = [
    { step: "1", title: t("services.how_step1") },
    { step: "2", title: t("services.how_step2") },
    { step: "3", title: t("services.how_step3") },
  ];

  const faqs = [
    { q: t("services.faq_q1"), a: t("services.faq_a1") },
    { q: t("services.faq_q2"), a: t("services.faq_a2") },
    { q: t("services.faq_q3"), a: t("services.faq_a3") },
    { q: t("services.faq_q4"), a: t("services.faq_a4") },
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "B2B Lead Generation Services",
    "provider": {
      "@type": "Organization",
      "name": "NLG Consulting",
      "url": "https://nlgconsulting.co"
    },
    "description": t("services.subtitle"),
    "areaServed": ["FR", "BE", "CH", "CA", "IL"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lead Generation Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "LinkedIn Outreach",
          "description": t("services.linkedin_desc")
        },
        {
          "@type": "Service",
          "name": "Email Campaigns",
          "description": t("services.email_desc")
        },
        {
          "@type": "Service",
          "name": "Cold Calling",
          "description": t("services.calling_desc")
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("services.title")} - NLG Consulting</title>
        <meta name="description" content={t("services.subtitle")} />
        <link rel="canonical" href={`https://nlgconsulting.co/${currentLang === 'fr' ? 'fr' : 'en'}/services`} />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/en/services" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/services" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/services" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nlgconsulting.co/${currentLang === 'fr' ? 'fr' : 'en'}/services`} />
        <meta property="og:title" content={`${t("services.title")} - NLG Consulting`} />
        <meta property="og:description" content={t("services.subtitle")} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("services.title")}</h1>
              <p className="text-xl text-muted-foreground mb-8">{t("services.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/book">
                    {t("services.hero_cta")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* B2B & B2C Focus */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">B2B</h3>
                  <p className="text-sm text-muted-foreground">{t("services.b2b_focus")}</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">B2C</h3>
                  <p className="text-sm text-muted-foreground">{t("services.b2c_focus")}</p>
                </CardContent>
              </Card>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
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

            {/* How It Works */}
            <section className="mb-16 py-12 px-6 bg-secondary/5 rounded-3xl">
              <h2 className="text-3xl font-bold text-center mb-12">{t("services.how_it_works_title")}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {howItWorks.map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-primary">{item.step}</span>
                    </div>
                    <p className="font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mid-Page Banner */}
            <div className="text-center py-12 mb-16">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="pt-8 pb-8">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{t("services.mid_banner")}</h3>
                  <Button asChild size="lg">
                    <Link to="/book">
                      {t("home.cta_book")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Social Proof - Testimonials Snippet */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">{t("testimonials.title")}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {t(`testimonials.item${i}_name`).charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{t(`testimonials.item${i}_name`)}</p>
                          <p className="text-xs text-muted-foreground">{t(`testimonials.item${i}_role`)}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">"{t(`testimonials.item${i}_quote`)}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">{t("services.faq_title")}</h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <Card key={index} className="rounded-lg">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.final_cta")}</h2>
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

export default Services;

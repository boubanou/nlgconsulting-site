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

  // Enhanced Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "NLG Consulting",
        "alternateName": "Next Level Growth Consulting",
        "url": "https://nlgconsulting.co",
        "logo": "https://nlgconsulting.co/logo.svg",
        "description": currentLang === 'fr' 
          ? "Expert en externalisation de prospection B2B/B2C et génération de rendez-vous qualifiés. 15-30 RDV/mois via LinkedIn, email et appels SDR."
          : "B2B/B2C prospecting outsourcing expert. Lead generation & qualified appointment setting delivering 15-30 meetings/month.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Founder & Lead Generation Expert",
          "sameAs": "https://www.linkedin.com/in/gregorybrenig"
        },
        "areaServed": [
          {"@type": "Country", "name": "France"},
          {"@type": "Country", "name": "Belgium"},
          {"@type": "Country", "name": "Switzerland"},
          {"@type": "Country", "name": "Canada"},
          {"@type": "Country", "name": "Israel"}
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "greg@nlgconsulting.co",
          "contactType": "Sales",
          "availableLanguage": ["French", "English", "Hebrew"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/nlgconsulting"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Europe",
          "addressCountry": "FR"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "NLG Consulting - Externalisation Prospection B2B/B2C",
        "serviceType": currentLang === 'fr' 
          ? "Externalisation de prospection commerciale et génération de rendez-vous qualifiés"
          : "B2B/B2C Prospecting Outsourcing & Qualified Appointment Setting",
        "provider": {
          "@type": "Organization",
          "name": "NLG Consulting"
        },
        "areaServed": ["FR", "BE", "CH", "CA", "IL"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Lead Generation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": currentLang === 'fr' ? "Pack Growth" : "Growth Package",
                "description": currentLang === 'fr' 
                  ? "15-30 rendez-vous qualifiés par mois via LinkedIn, email et appels SDR"
                  : "15-30 qualified meetings per month through LinkedIn, email and SDR calls"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "45",
          "bestRating": "5"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": t("faq.q1"),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t("faq.a1")
            }
          },
          {
            "@type": "Question",
            "name": t("faq.q2"),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t("faq.a2")
            }
          },
          {
            "@type": "Question",
            "name": currentLang === 'fr' 
              ? "Comment externalisez-vous la prospection B2B?"
              : "How do you outsource B2B prospecting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": currentLang === 'fr'
                ? "Nous prenons en charge l'intégralité de votre prospection commerciale : ciblage ICP, campagnes multicanales (LinkedIn, email, téléphone), qualification des prospects et prise de rendez-vous qualifiés dans votre agenda."
                : "We handle your entire sales prospecting: ICP targeting, multichannel campaigns (LinkedIn, email, phone), lead qualification and qualified appointment setting in your calendar."
            }
          }
        ]
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
            "name": "Services",
            "item": "https://nlgconsulting.co/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Contact",
            "item": "https://nlgconsulting.co/contact"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>
          {currentLang === 'fr' 
            ? 'Externalisation Prospection B2B/B2C – Génération Rendez-vous Qualifiés | NLG Consulting'
            : 'B2B/B2C Prospecting Outsourcing – Qualified Appointment Setting | NLG Consulting'
          }
        </title>
        <meta
          name="description"
          content={
            currentLang === 'fr'
              ? 'Externalisez votre prospection commerciale B2B et B2C. 15-30 rendez-vous qualifiés/mois via LinkedIn, email, appels SDR. Solution clés en main pour scaler votre pipeline sans recruter. ROI garanti dès le 1er mois.'
              : 'Outsource your B2B/B2C sales prospecting. 15-30 qualified meetings/month via LinkedIn, email, SDR calls. Turnkey solution to scale your pipeline without hiring. Guaranteed ROI from month 1.'
          }
        />
        <meta
          name="keywords"
          content={
            currentLang === 'fr'
              ? 'externalisation prospection B2B, génération rendez-vous qualifiés, prise de rendez-vous commercial, prospection B2C, SDR externalisé, appointment setting France, LinkedIn outreach B2B, cold email prospection, lead generation externalisé, outsourcing commercial, pipeline commercial, rendez-vous B2B qualifiés, scaler sans recruter'
              : 'B2B prospecting outsourcing, qualified appointment setting, B2C lead generation, outsourced SDR, appointment setting services, LinkedIn B2B outreach, cold email prospecting, sales pipeline outsourcing, qualified B2B meetings, scale without hiring'
          }
        />
        <link rel="canonical" href={`https://nlgconsulting.co/${currentLang === 'fr' ? 'fr' : 'en'}`} />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/en" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nlgconsulting.co/${currentLang === 'fr' ? 'fr' : 'en'}`} />
        <meta property="og:title" content={currentLang === 'fr' ? 'Prospection B2B & Génération de leads – NLG Consulting' : 'B2B Lead Generation & Appointment Setting – NLG Consulting'} />
        <meta property="og:description" content={currentLang === 'fr' ? 'Externalisez votre prospection B2B. 15–20 rendez-vous qualifiés par mois.' : 'Professional B2B lead generation delivering 15-20 qualified meetings per month.'} />
        <meta property="og:image" content="https://nlgconsulting.co/logo.svg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentLang === 'fr' ? 'Prospection B2B & Génération de leads – NLG Consulting' : 'B2B Lead Generation & Appointment Setting – NLG Consulting'} />
        <meta name="twitter:description" content={currentLang === 'fr' ? 'Externalisez votre prospection B2B. 15–20 rendez-vous qualifiés par mois.' : 'Professional B2B lead generation delivering 15-20 qualified meetings per month.'} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-12 sm:pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight px-2">
                {t("home.hero_title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                {t("home.hero_subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/book">
                    {t("home.cta_book")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to="/contact">{t("home.cta_consultation")}</Link>
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4 px-2">
                {t("home.proof_line")}
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-2">
              {t("home.how_it_works_title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{t("home.step1_title")}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{t("home.step1_desc")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{t("home.step2_title")}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{t("home.step2_desc")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{t("home.step3_title")}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{t("home.step3_desc")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust & Compliance Section */}
        <section className="py-12 sm:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-2">{t("home.trust_title")}</h2>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
              <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t("home.trust_gdpr")}
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t("home.trust_eu")}
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t("home.trust_multichannel")}
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t("home.trust_meetings")}
              </Badge>
            </div>

            {/* Brand Logos */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-8">{t("logos.title")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { src: "/brands/nordesk.svg", altKey: "logos.nordesk" },
                  { src: "/brands/helixops.svg", altKey: "logos.helixops" },
                  { src: "/brands/quantify.svg", altKey: "logos.quantify" },
                  { src: "/brands/atlasworks.svg", altKey: "logos.atlasworks" },
                ].map((logo, i) => (
                  <div key={i} className="rounded-2xl border bg-white/50 dark:bg-white/5 p-6 flex items-center justify-center hover:shadow-md transition-shadow">
                    <img src={logo.src} alt={t(logo.altKey)} loading="lazy" width="160" height="48" className="w-full h-auto" />
                  </div>
                ))}
              </div>
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
            <h2 className="text-3xl font-bold text-center mb-12">{t("testimonials.title")}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="rounded-2xl shadow-sm border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {t(`testimonials.item${i}_name`).charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t(`testimonials.item${i}_name`)}</p>
                        <p className="text-xs text-muted-foreground">{t(`testimonials.item${i}_role`)}</p>
                        <p className="text-xs text-muted-foreground">{t(`testimonials.item${i}_company`)}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{t(`testimonials.item${i}_quote`)}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("plans.title")}</h2>
              <p className="text-muted-foreground">{t("plans.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <Badge className="mb-4">{t("plans.starter_name")}</Badge>
                  <h3 className="text-xl font-bold mb-2">{t("plans.starter_meetings")}</h3>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {t("plans.starter_features").split("|").map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">{t("plans.starter_cta")}</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-2 border-primary shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Popular</Badge>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-4">{t("plans.growth_name")}</Badge>
                  <h3 className="text-xl font-bold mb-2">{t("plans.growth_meetings")}</h3>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {t("plans.growth_features").split("|").map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/book">{t("plans.growth_cta")}</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <Badge className="mb-4">{t("plans.enterprise_name")}</Badge>
                  <h3 className="text-xl font-bold mb-2">{t("plans.enterprise_meetings")}</h3>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {t("plans.enterprise_features").split("|").map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">{t("plans.enterprise_cta")}</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t("faq.title")}</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <Card key={i} className="rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t(`faq.q${i}`)}</h3>
                    <p className="text-muted-foreground text-sm">{t(`faq.a${i}`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;

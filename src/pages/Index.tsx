import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Globe, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  // Enhanced Structured Data for SEO - Optimized for all search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "NLG Consulting",
        "alternateName": "Next Level Growth Consulting",
        "url": "https://nlgconsulting.co",
        "logo": "https://nlgconsulting.co/logo.svg",
        "description": "B2B/B2C prospecting outsourcing expert. Lead generation & qualified appointment setting delivering 15-30 meetings/month.",
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
        "@type": "LocalBusiness",
        "name": "NLG Consulting",
        "image": "https://nlgconsulting.co/logo.svg",
        "@id": "https://nlgconsulting.co",
        "url": "https://nlgconsulting.co",
        "telephone": "+33-XXX-XXX-XXX",
        "email": "greg@nlgconsulting.co",
        "priceRange": "€€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Business Services",
          "addressLocality": "Paris",
          "postalCode": "75000",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.linkedin.com/company/nlgconsulting"
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "NLG Consulting - B2B/B2C Prospecting Outsourcing",
        "serviceType": "B2B/B2C Prospecting Outsourcing & Qualified Appointment Setting",
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
                "name": "Growth Package",
                "description": "15-30 qualified meetings per month through LinkedIn, email and SDR calls"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "45",
          "bestRating": "5"
        },
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://nlgconsulting.co/book",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "result": {
            "@type": "Reservation",
            "name": "Book a strategy call"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is B2B prospecting outsourcing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "B2B prospecting outsourcing means entrusting your sales prospecting to a specialized team. We handle ICP targeting, multichannel campaigns, qualification, and appointment setting."
            }
          },
          {
            "@type": "Question",
            "name": "How many meetings can I expect?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depending on your package, we deliver 15-30 qualified meetings per month with decision-makers in your target market."
            }
          },
          {
            "@type": "Question",
            "name": "How do you outsource B2B prospecting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle your entire sales prospecting: ICP targeting, multichannel campaigns (LinkedIn, email, phone), lead qualification and qualified appointment setting in your calendar."
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

  const testimonials = [
    {
      name: "Sarah M.",
      role: "CEO",
      company: "Tech Startup",
      quote: "NLG Consulting helped us book 20+ meetings per month. Our pipeline has never been this full."
    },
    {
      name: "Michael D.",
      role: "Sales Director",
      company: "SaaS Company",
      quote: "The quality of leads is exceptional. Every meeting is with a qualified decision-maker."
    },
    {
      name: "Emma L.",
      role: "Founder",
      company: "B2B Agency",
      quote: "We scaled from 5 to 25 meetings per month in just 3 months. Incredible ROI."
    }
  ];

  const faqItems = [
    { q: "What is B2B prospecting outsourcing?", a: "B2B prospecting outsourcing means entrusting your sales prospecting to a specialized team. We handle ICP targeting, multichannel campaigns, qualification, and appointment setting." },
    { q: "How many meetings can I expect?", a: "Depending on your package, we deliver 15-30 qualified meetings per month with decision-makers in your target market." },
    { q: "Which channels do you use?", a: "We use a multichannel approach: LinkedIn outreach, personalized cold email, and SDR phone calls for hot prospects." },
    { q: "How quickly can we start?", a: "We can typically launch your campaign within 2 weeks of signing. The first meetings usually arrive within the first month." },
    { q: "Do you guarantee results?", a: "Yes, we guarantee a minimum number of qualified meetings based on your chosen package. If we don't deliver, we continue at no extra cost." },
    { q: "What industries do you work with?", a: "We work with B2B companies across all industries, from SaaS and tech to professional services and manufacturing." },
    { q: "How do you qualify leads?", a: "We use a rigorous qualification process based on your ICP, including budget, authority, need, and timeline (BANT) criteria." },
    { q: "Can I see the leads before meetings?", a: "Yes, you have full visibility into every lead. We provide detailed profiles and conversation history before each meeting." },
    { q: "What's your pricing model?", a: "We offer flexible packages based on the number of meetings you need. Contact us for a custom quote." },
    { q: "Do you work with small businesses?", a: "Yes, we work with businesses of all sizes. Our Starter package is designed specifically for SMBs." },
    { q: "How do you measure success?", a: "We track key metrics including meetings booked, show rate, lead quality, and ultimately, deals closed from our meetings." },
    { q: "What makes you different?", a: "Our 100% human approach, guaranteed results, and deep expertise in B2B prospecting set us apart from other agencies." }
  ];

  return (
    <>
      <Helmet>
        <title>B2B Lead Generation & Appointment Setting | NLG Consulting</title>
        <meta
          name="description"
          content="Outsource your B2B/B2C sales prospecting. 15-30 qualified meetings/month via LinkedIn, email, SDR calls. Turnkey solution to scale your pipeline without hiring. Guaranteed ROI from month 1."
        />
        <meta
          name="keywords"
          content="B2B prospecting outsourcing, qualified appointment setting, B2C lead generation, outsourced SDR, appointment setting services, LinkedIn B2B outreach, cold email prospecting, sales pipeline outsourcing, qualified B2B meetings, scale without hiring"
        />
        <link rel="canonical" href="https://nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/" />
        <meta property="og:title" content="B2B Lead Generation & Appointment Setting – NLG Consulting" />
        <meta property="og:description" content="Professional B2B lead generation delivering 15-30 qualified meetings per month." />
        <meta property="og:image" content="https://nlgconsulting.co/logo.svg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B2B Lead Generation & Appointment Setting – NLG Consulting" />
        <meta name="twitter:description" content="Professional B2B lead generation delivering 15-30 qualified meetings per month." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-8 sm:pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight px-2">
                Scale Your Pipeline with Qualified B2B Meetings
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-2 leading-relaxed">
                We book 15-30 qualified meetings per month with your ideal prospects. LinkedIn, email, and phone – all handled by our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/book">
                    Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4 px-2">
                Trusted by 100+ B2B companies worldwide
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content Section - Why Choose NLG */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                  Why Outsource Your Sales Prospecting?
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Sales prospecting is the growth engine of every B2B company. Yet most sales teams spend over 60% of their time on non-revenue generating tasks: prospect research, qualification, follow-ups, and CRM administration.
                  </p>
                  <p>
                    NLG Consulting transforms this reality. Our dedicated team of Sales Development Representatives handles your entire prospecting process: decision-maker identification, personalized multichannel sequences, in-depth qualification, and appointment setting directly in your calendar.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield className="w-6 h-6" />, title: "Guaranteed Results", desc: "15-30 qualified meetings per month" },
                  { icon: <Globe className="w-6 h-6" />, title: "Multichannel", desc: "LinkedIn, email, phone" },
                  { icon: <Users className="w-6 h-6" />, title: "Dedicated Team", desc: "SDRs trained on your offer" },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Fast ROI", desc: "Results from month 1" }
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-primary mx-auto">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-2">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Strategy Call</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">We analyze your ICP, market, and goals to build your custom outreach strategy.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Campaign Launch</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Our team launches multichannel campaigns: LinkedIn, email, and phone outreach.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Meetings Booked</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Qualified meetings appear directly in your calendar. You focus on closing deals.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Book a free 15-minute strategy call to discuss your business objectives.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/book">
                Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* SEO Content - Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                A Multichannel Approach for Maximum Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our methodology combines three complementary channels to reach your prospects where they're most receptive.
              </p>
            </div>
            <div className="prose prose-lg text-muted-foreground max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground">
                B2B LinkedIn Outreach
              </h3>
              <p>
                LinkedIn is the #1 professional social network for B2B prospecting. Our experts create personalized connection and messaging sequences that generate authentic conversations with your target decision-makers. Average response rate: 25-35%.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">
                Personalized Cold Email
              </h3>
              <p>
                Email remains the most scalable channel for B2B prospecting. We build hyper-personalized email sequences with dynamic variables, continuous A/B testing, and rigorous metric tracking. Deliverability guaranteed at 95%+.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">
                Qualified SDR Calls
              </h3>
              <p>
                For the hottest prospects, nothing beats a human call. Our SDRs are trained on your offer and use proven qualification scripts to convert interest into concrete appointments. Every call is recorded and analyzed for continuous optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section id="trusted-by" className="py-12 sm:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 px-2">
              Trusted by Industry Leaders
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto px-2">
              We've helped companies across industries book more qualified meetings.
            </p>
            
            {/* Company Logos Carousel */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full mb-8"
            >
              <CarouselContent className="-ml-4">
                {[
                  { src: "/brands/hubspot.png", alt: "HubSpot" },
                  { src: "/brands/notion.png", alt: "Notion" },
                  { src: "/brands/aircall.png", alt: "Aircall" },
                  { src: "/brands/deel.png", alt: "Deel" },
                  { src: "/brands/payfit.png", alt: "PayFit" },
                  { src: "/brands/revolut.png", alt: "Revolut" },
                  { src: "/brands/qonto.png", alt: "Qonto" },
                  { src: "/brands/wise.png", alt: "Wise" },
                  { src: "/brands/businesslegend.png", alt: "Business Legend" },
                  { src: "/brands/alan.png", alt: "Alan" },
                  { src: "/brands/blocktech.png", alt: "BlockTech" },
                  { src: "/brands/nordesk.svg", alt: "Nordesk" },
                  { src: "/brands/etoro.svg", alt: "eToro" },
                  { src: "/brands/rapyd.svg", alt: "Rapyd" },
                  { src: "/brands/linkedin.svg", alt: "LinkedIn" },
                 ].map((logo, i) => (
                  <CarouselItem key={i} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="group">
                      <div className="rounded-2xl border bg-white/50 dark:bg-white/5 p-10 flex items-center justify-center h-32 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-white/10">
                        <img 
                          src={logo.src} 
                          alt={logo.alt} 
                          loading="lazy" 
                          decoding="async"
                          className="h-16 sm:h-20 w-auto max-w-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Disclaimer */}
            <p className="text-xs sm:text-sm text-muted-foreground text-center italic px-2">
              Logos represent companies where our team members have generated leads, not necessarily direct clients.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item, i) => (
                <Card key={i} className="rounded-2xl shadow-sm border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.role}</p>
                        <p className="text-xs text-muted-foreground">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{item.quote}"</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Growth Plan</h2>
              <p className="text-muted-foreground">Flexible packages to match your business needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <Badge className="mb-4">Starter</Badge>
                  <h3 className="text-xl font-bold mb-2">10-15 meetings/month</h3>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {["LinkedIn outreach", "Email sequences", "Lead qualification", "Weekly reporting"].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-2 border-primary shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Popular</Badge>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-4">Growth</Badge>
                  <h3 className="text-xl font-bold mb-2">20-30 meetings/month</h3>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {["Everything in Starter", "SDR phone calls", "Dedicated account manager", "CRM integration", "Priority support"].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/book">Book a Call</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <Badge className="mb-4">Enterprise</Badge>
                  <h3 className="text-xl font-bold mb-2">30+ meetings/month</h3>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {["Everything in Growth", "Multi-market campaigns", "Custom integrations", "Dedicated SDR team", "Strategic advisory"].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-secondary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <Card key={i} className="rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-muted-foreground text-sm">{item.a}</p>
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

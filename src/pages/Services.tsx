import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Phone, Pencil, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Linkedin className="w-8 h-8 text-primary" />,
      title: "LinkedIn Outreach",
      description: "Personalized connection sequences with safe engagement limits to protect your brand reputation. B2B-focused targeting with decision-maker reach.",
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Targeted Cold Email",
      description: "Domain warm-up, deliverability optimization, and nurturing sequences that convert. Perfect for both B2B and B2C campaigns with ROI tracking.",
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "SDR & Appointment Setting",
      description: "Professional qualification and calendar booking with trained SDRs who understand your value proposition. Lead qualification and pipeline delivery.",
    },
    {
      icon: <Pencil className="w-8 h-8 text-primary" />,
      title: "Sales Copywriting",
      description: "Conversion-focused scripts and messaging that resonate with decision-makers. From cold outreach to nurture campaigns.",
    },
  ];

  const howItWorks = [
    { step: "1", title: "Discovery Call → We analyze your target market" },
    { step: "2", title: "Multichannel Outreach → LinkedIn, email & phone" },
    { step: "3", title: "Qualified Meetings → You close, we deliver pipeline" },
  ];

  const faqs = [
    { q: "How do you ensure lead quality?", a: "We use ICP-based targeting, qualification criteria, and real-time feedback loops to continuously improve lead quality." },
    { q: "What's your typical timeline?", a: "7-day setup, 2-4 weeks for first qualified meetings, ongoing optimization for maximum ROI." },
    { q: "Which regions do you serve?", a: "Primarily France, Belgium, Switzerland, and Canada, with EU and North American market expertise." },
    { q: "How do you handle data compliance?", a: "Full GDPR compliance, minimal data collection, EU-based storage, and transparent data handling practices." },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "B2B Lead Generation Services",
        "provider": {
          "@type": "Organization",
          "name": "NLG Consulting",
          "url": "https://nlgconsulting.co"
        },
        "description": "Comprehensive multichannel lead generation and appointment setting",
        "areaServed": ["FR", "BE", "CH", "CA", "IL"],
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
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>B2B & B2C Prospecting Services - NLG Consulting</title>
        <meta name="description" content="Comprehensive multichannel lead generation and appointment setting" />
        <link rel="canonical" href="https://nlgconsulting.co/services" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/services" />
        <meta property="og:title" content="B2B & B2C Prospecting Services - NLG Consulting" />
        <meta property="og:description" content="Comprehensive multichannel lead generation and appointment setting" />
        
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">B2B & B2C Prospecting Services</h1>
              <p className="text-xl text-muted-foreground mb-8">Comprehensive multichannel lead generation and appointment setting</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/book">
                    Ready to scale your sales pipeline? <ArrowRight className="ml-2 w-4 h-4" />
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
                  <p className="text-sm text-muted-foreground">B2B Focus: multichannel SDR campaigns, sales outsourcing, lead qualification, ROI tracking</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">B2C</h3>
                  <p className="text-sm text-muted-foreground">B2C Focus: inbound automation, CRM follow-up, appointment setting, retention campaigns</p>
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
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
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
                  <h3 className="text-2xl font-bold mb-4">Trusted by top European teams — let's talk results.</h3>
                  <Button asChild size="lg">
                    <Link to="/book">
                      Book a 15-min call <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Social Proof - Testimonials Snippet */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { quote: "We doubled qualified meetings in 60 days with NLG Consulting.", name: "Sophie L.", role: "Head of Sales", company: "B2B SaaS" },
                  { quote: "They nailed our ICP and built spot-on email sequences.", name: "Marc D.", role: "CEO", company: "Tech Startup" },
                  { quote: "Pragmatic, data-driven, and result-oriented. Highly recommend.", name: "Claire R.", role: "VP Sales", company: "Manufacturing" }
                ].map((testimonial, i) => (
                  <Card key={i} className="rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Services FAQ</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your next 20 meetings start today.</h2>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/book">
                  Book a 15-min call <ArrowRight className="ml-2 w-5 h-5" />
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

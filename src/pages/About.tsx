import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary mb-2" />,
      title: "Transparency & Trust",
      description: "Clear reporting, honest feedback, and partnership-based relationships.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary mb-2" />,
      title: "Performance & Accountability",
      description: "We own the results. KPIs are tracked, optimized, and reported weekly.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary mb-2" />,
      title: "Human-First Communication",
      description: "No bots, no spam. Every message is crafted to start real conversations.",
    },
  ];

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
          "description": "Accelerating B2B & B2C growth without the overhead of hiring",
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
        <title>Who We Are - NLG Consulting</title>
        <meta name="description" content="Accelerating B2B & B2C growth without the overhead of hiring" />
        <link rel="canonical" href="https://nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/about" />
        <meta property="og:title" content="Who We Are - NLG Consulting" />
        <meta property="og:description" content="Accelerating B2B & B2C growth without the overhead of hiring" />
        
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
              <p className="text-xl text-muted-foreground">Accelerating B2B & B2C growth without the overhead of hiring</p>
            </div>

            {/* Bio Section */}
            <Card className="mb-12 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Meet Gregory Brenig, Founder</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">NLG Consulting is led by Gregory Brenig, a business development specialist with 15+ years of experience across real estate, tech, and B2B SaaS.</p>
                <p className="text-muted-foreground leading-relaxed">With operations based in Europe and Tel Aviv, Gregory has helped founders, agencies, and sales teams across France, Belgium, Switzerland, and Canada scale their revenue without the costs and risks of hiring.</p>
                <p className="text-muted-foreground leading-relaxed">His approach combines data-driven targeting, human-first communication, and relentless execution to deliver measurable pipeline growth.</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">We help founders, agencies, and sales teams scale faster with data-driven outreach and real human touch. Our goal: deliver qualified meetings that turn into closed deals.</p>
              </CardContent>
            </Card>

            {/* CTA 1 */}
            <div className="text-center mb-16">
              <Button asChild size="lg" variant="outline">
                <Link to="/book">
                  Join our network of partners <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Values */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
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
                <h3 className="text-2xl font-bold mb-4">Track Record</h3>
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">1,500+</p>
                    <p className="text-xs text-muted-foreground">1,500+ qualified meetings delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">10+</p>
                    <p className="text-xs text-muted-foreground">10+ B2B sectors</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">4</p>
                    <p className="text-xs text-muted-foreground">FR, BE, CH, CA markets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Let's discuss your sales goals</h2>
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

export default About;

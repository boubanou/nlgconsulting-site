import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Heart, ArrowRight, Linkedin, ExternalLink, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";

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
            "jobTitle": "Founder & CEO",
            "sameAs": "https://www.linkedin.com/in/gregory-brenig-98007125/"
          },
          "areaServed": [
            { "@type": "Country", "name": "France" },
            { "@type": "Country", "name": "Belgium" },
            { "@type": "Country", "name": "Switzerland" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Israel" }
          ],
          "description": "NLG Consulting is a global Business, Tech & Growth Group specializing in PropTech, FinTech, AI, and strategic business development.",
          "knowsAbout": ["PropTech", "FinTech", "AI", "Blockchain", "B2B Lead Generation", "Sales Development", "Strategic Advisory"]
        }
      },
      {
        "@type": "Person",
        "name": "Gregory Brenig",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "NLG Consulting" },
        "knowsAbout": ["Technology", "Innovation", "FinTech", "PropTech", "AI", "Fractional Real Estate"],
        "sameAs": "https://www.linkedin.com/in/gregory-brenig-98007125/"
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
        <title>Gregory Brenig | Founder NLG Consulting | PropTech & FinTech Expert | 15+ Years</title>
        <meta name="description" content="Meet Gregory Brenig, founder of NLG Consulting. 15+ years in PropTech, FinTech & AI. Author of 'Level Up in Fractional Real Estate'. Book a call." />
        <meta name="keywords" content="Gregory Brenig, NLG founder, FinTech expert, PropTech advisor, fractional real estate author, startup advisor, AI strategy, business consultant" />
        <link rel="canonical" href="https://nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/a-propos" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://nlgconsulting.co/about" />
        <meta property="og:title" content="Gregory Brenig | Founder NLG Consulting | PropTech & FinTech Expert" />
        <meta property="og:description" content="Meet Gregory Brenig, founder of NLG Consulting. 15+ years in PropTech, FinTech & AI. Author of 'Level Up in Fractional Real Estate'." />
        <meta property="og:image" content="https://nlgconsulting.co/images/gregory-brenig.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gregory Brenig | Founder NLG Consulting | PropTech & FinTech Expert" />
        <meta name="twitter:description" content="Meet Gregory Brenig, founder of NLG Consulting. 15+ years in PropTech, FinTech & AI." />
        <meta name="twitter:image" content="https://nlgconsulting.co/images/gregory-brenig.jpg" />
        
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About NLG Consulting</h1>
              <p className="text-xl text-muted-foreground">Global Business, Tech & Growth Group</p>
            </div>

            {/* Gregory Brenig Bio Section */}
            <Card className="mb-12 border-primary/20 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Photo */}
                <div className="bg-muted/50 p-8 flex items-center justify-center">
                  <img 
                    src="/images/gregory-brenig.jpg" 
                    alt="Gregory Brenig - Founder of NLG Consulting"
                    className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                
                {/* Bio Content */}
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <CardTitle className="text-2xl">Gregory Brenig</CardTitle>
                    <a 
                      href="https://www.linkedin.com/in/gregory-brenig-98007125/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] text-white hover:bg-[#006396] transition-colors"
                      aria-label="Gregory Brenig on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium mb-4">Founder & CEO, NLG Consulting</p>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Gregory Brenig is a <strong className="text-foreground">recognized thought leader</strong> in Technology, Innovation, FinTech, PropTech, and AI-driven business models. With over 15 years of international experience across Europe, North America, and the Middle East, he has built and scaled multiple ventures from concept to exit.
                    </p>
                    <p className="leading-relaxed">
                      As the Founder of NLG Consulting, Gregory leads a global team that builds, operates, and scales platforms, brands, and sales systems worldwide. His unique combination of <strong className="text-foreground">operator experience</strong> and <strong className="text-foreground">strategic vision</strong> has helped hundreds of founders, agencies, and enterprises accelerate their growth.
                    </p>
                    <p className="leading-relaxed">
                      A pioneer in <strong className="text-foreground">fractional real estate</strong> and modern investment models, Gregory is the author of <em>"Level Up in Fractional Real Estate"</em> — a strategic guide to building rental income and achieving financial freedom through innovative asset ownership.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Authority Paragraph */}
            <Card className="mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Expertise & Recognition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Gregory Brenig brings a rare combination of deep technical knowledge and business acumen. His expertise spans:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "FinTech & Payment Systems",
                    "PropTech & Real Estate Innovation",
                    "AI & Automation Strategy",
                    "Blockchain & Tokenization",
                    "Go-to-Market & Scaling",
                    "International Business Development"
                  ].map((expertise, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{expertise}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  His insights have been sought by startups, scale-ups, and enterprises across four continents. Gregory's approach combines <strong className="text-foreground">data-driven strategy</strong> with <strong className="text-foreground">hands-on execution</strong> — because he's not just an advisor, he's a builder.
                </p>
              </CardContent>
            </Card>

            {/* Book Section */}
            <Card className="mb-12 overflow-hidden border-2 border-primary/30">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Book Cover */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                  <img 
                    src="/images/book-cover.jpg" 
                    alt="Level Up in Fractional Real Estate by Gregory Brenig"
                    className="w-48 h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Book Details */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">Book by Gregory Brenig</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Level Up in Fractional Real Estate</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    How to build rental income and reach financial freedom through fractional ownership
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Discover the future of real estate investment. This comprehensive guide explores fractional ownership, tokenization, and modern investment strategies that make property investment accessible to everyone. Learn how to build a diversified real estate portfolio without the barriers of traditional ownership.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="text-base">
                      <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">
                        Buy on Amazon <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a 
                        href="https://www.linkedin.com/in/gregory-brenig-98007125/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA 1 */}
            <div className="text-center mb-16">
              <Button asChild size="lg" variant="outline">
                <Link to="/book">
                  Start Growing Your Business Today <ArrowRight className="ml-2 w-4 h-4" />
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
                    <p className="text-xs text-muted-foreground">Qualified meetings delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">50+</p>
                    <p className="text-xs text-muted-foreground">Websites launched</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">4</p>
                    <p className="text-xs text-muted-foreground">Continents served</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6">
                  Explore our <Link to="/ventures" className="text-primary hover:underline font-medium">venture portfolio</Link> to see how we build and scale platforms.
                </p>
              </div>
            </div>

            {/* Our Services Section */}
            <RelatedServices currentService="about" />

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Business?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a 15-minute strategy call with Gregory to discuss your growth challenges and opportunities.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/book">
                  Book Your Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
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

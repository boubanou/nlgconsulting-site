import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Heart, ArrowRight, Linkedin, ExternalLink, BookOpen, CheckCircle } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "NLG Consulting",
          "url": "https://www.nlgconsulting.co",
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
          "description": "AI-powered growth systems, revenue operations, and strategic advisory for FinTech, PropTech, SaaS, and B2B companies.",
          "knowsAbout": ["AI Consulting", "Revenue Operations", "FinTech", "PropTech", "AI Agents", "B2B Growth Systems", "GTM Strategy", "Workflow Automation"]
        }
      },
      {
        "@type": "Person",
        "name": "Gregory Brenig",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "NLG Consulting" },
        "knowsAbout": ["AI Systems", "Revenue Operations", "FinTech", "PropTech", "Growth Architecture", "Fractional Real Estate"],
        "sameAs": "https://www.linkedin.com/in/gregory-brenig-98007125/"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.nlgconsulting.co/about" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About NLG Consulting | Operator-Led AI & Growth Systems</title>
        <meta name="description" content="NLG Consulting builds AI-powered growth systems for FinTech, PropTech & B2B companies. Founded by Gregory Brenig — operator, author, and strategic advisor with 15+ years of international experience." />
        <link rel="canonical" href="https://www.nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/a-propos" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.nlgconsulting.co/about" />
        <meta property="og:title" content="About NLG Consulting | Operator-Led AI & Growth Systems" />
        <meta property="og:description" content="NLG Consulting builds AI-powered growth systems for FinTech, PropTech & B2B. Founded by Gregory Brenig — operator, author, strategic advisor." />
        <meta property="og:image" content="https://www.nlgconsulting.co/images/gregory-brenig.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About NLG Consulting | Operator-Led AI & Growth Systems" />
        <meta name="twitter:description" content="AI-powered growth systems for FinTech, PropTech & B2B. Founded by Gregory Brenig." />
        <meta name="twitter:image" content="https://www.nlgconsulting.co/images/gregory-brenig.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero */}
            <div className="text-center mb-16">
              <Badge variant="outline" className="px-4 py-2 text-sm mb-6">About NLG</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Operator-Led AI Consulting & Growth Architecture</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                NLG Consulting helps FinTech, PropTech, SaaS, and B2B companies deploy AI-powered growth systems, structure revenue operations, and move from scattered initiatives to measurable commercial execution.
              </p>
            </div>

            {/* Founder Bio */}
            <Card className="mb-12 border-primary/20 overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="bg-muted/50 p-8 flex items-center justify-center">
                  <img src="/images/gregory-brenig.jpg" alt="Gregory Brenig - Founder of NLG Consulting" className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg" />
                </div>
                <div className="md:col-span-2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <CardTitle className="text-2xl">Gregory Brenig</CardTitle>
                    <a href="https://www.linkedin.com/in/gregory-brenig-98007125/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] text-white hover:bg-[#006396] transition-colors" aria-label="Gregory Brenig on LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium mb-4">Founder & CEO, NLG Consulting</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Gregory Brenig is an <strong className="text-foreground">operator and growth architect</strong> with 15+ years of international experience across FinTech, PropTech, AI, and B2B services. He has built and scaled ventures, revenue systems, and commercial operations across Europe, North America, and the Middle East.
                    </p>
                    <p className="leading-relaxed">
                      As founder of NLG Consulting, Gregory leads an execution-focused practice that combines <strong className="text-foreground">AI consulting, workflow automation, agentic systems, revenue operations, and strategic advisory</strong> to help companies structure scalable growth — not just produce strategy decks.
                    </p>
                    <p className="leading-relaxed">
                      A practitioner in <strong className="text-foreground">fractional real estate and modern investment models</strong>, Gregory is the author of <em>"Level Up in Fractional Real Estate"</em> — a strategic guide on building rental income through innovative asset ownership.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* What NLG Does Differently */}
            <Card className="mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">What Sets NLG Apart</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  NLG is not a traditional consulting firm and not a generic agency. We operate at the intersection of AI systems, business execution, and commercial growth architecture.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "AI Consulting & Workflow Automation",
                    "Revenue Operations & GTM Structure",
                    "Agentic AI Systems & Claude Code",
                    "Outbound Infrastructure & B2B Lead Generation",
                    "Conversion Websites & SEO Authority Assets",
                    "Strategic Advisory for Founders & SMEs"
                  ].map((expertise, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{expertise}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Every engagement is structured around <strong className="text-foreground">business outcomes</strong> — qualified meetings, pipeline visibility, commercial performance, and operational efficiency. We deploy AI where it creates measurable leverage, and build systems that compound over time.
                </p>
              </CardContent>
            </Card>

            {/* Book */}
            <Card className="mb-12 overflow-hidden border-2 border-primary/30">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                  <img src="/images/book-cover.jpg" alt="Level Up in Fractional Real Estate by Gregory Brenig" className="w-48 h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">Book by Gregory Brenig</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Level Up in Fractional Real Estate</h2>
                  <p className="text-lg text-muted-foreground mb-4">How to build rental income and reach financial freedom through fractional ownership</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A strategic guide exploring fractional ownership, tokenisation, and modern investment models that make property investment accessible. The book reflects the same operator mindset NLG brings to every engagement — practical, structured, and execution-oriented.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg">
                      <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">Buy on Amazon <ExternalLink className="ml-2 w-4 h-4" /></a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="https://www.linkedin.com/in/gregory-brenig-98007125/" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 w-4 h-4" /> LinkedIn</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Values */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Operating Principles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <Shield className="w-8 h-8 text-primary mb-2" />, title: "Clarity & Accountability", description: "Transparent reporting, honest feedback, and structured execution with measurable outcomes at every stage." },
                  { icon: <TrendingUp className="w-8 h-8 text-primary mb-2" />, title: "Commercial Performance", description: "Every system we build is tied to business results — pipeline, qualified meetings, revenue growth, and operational efficiency." },
                  { icon: <Heart className="w-8 h-8 text-primary mb-2" />, title: "Execution Over Theory", description: "We don't deliver slide decks. We deploy systems, run operations, and build infrastructure that generates commercial outcomes." }
                ].map((value, index) => (
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

            {/* Track Record */}
            <div className="mb-16 py-12 px-6 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 rounded-3xl border border-primary/10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Execution Track Record</h3>
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">1,500+</p>
                    <p className="text-xs text-muted-foreground">Qualified meetings generated</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">50+</p>
                    <p className="text-xs text-muted-foreground">Conversion websites deployed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">4</p>
                    <p className="text-xs text-muted-foreground">Continents served</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6">
                  Explore our <Link to="/ventures" className="text-primary hover:underline font-medium">venture portfolio</Link> and <Link to="/use-cases" className="text-primary hover:underline font-medium">use cases</Link> to see how we build and scale systems.
                </p>
              </div>
            </div>

            <RelatedServices currentService="about" />

            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Discuss Your Growth Architecture</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a strategy call with Gregory to discuss your AI adoption, revenue operations, outbound structure, or commercial performance challenges.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </main>

        <MainFooter />
      </div>
    </>
  );
};

export default About;

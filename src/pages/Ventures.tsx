import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Building2, Radio, Dumbbell, Globe, BookOpen } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const Ventures = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Venture Studio & Portfolio | NLG Consulting",
        "description": "Operator-built platforms across PropTech, FinTech, Media and Lifestyle. NLG Consulting's venture studio builds, operates and scales technology companies.",
        "url": "https://www.nlgconsulting.co/ventures"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Ventures", "item": "https://www.nlgconsulting.co/ventures" }
        ]
      }
    ]
  };

  const ventures = [
    {
      name: "Block Tech",
      type: "PropTech / FinTech SaaS",
      icon: <Building2 className="w-8 h-8" />,
      logo: "/brands/blocktech.png",
      description: "A SaaS platform bridging real estate and financial technology — enabling fractional ownership, tokenisation, and streamlined property investment workflows for institutional and retail investors.",
      why: "Real estate investment remains fragmented and capital-intensive. Block Tech creates accessible, structured entry points through technology.",
      role: "Founded, built and operated by NLG. Product development, GTM strategy, and scaling managed internally.",
      link: "https://block-tech.co"
    },
    {
      name: "FractionalPropertyHub",
      type: "Marketplace & Lead Engine",
      icon: <Globe className="w-8 h-8" />,
      logo: "/brands/fractionalpropertyhub.png",
      description: "A marketplace connecting investors with vetted fractional real estate opportunities. Built as a lead generation engine for property developers and investment platforms.",
      why: "Investors need curated access to fractional opportunities. Developers need qualified, intent-driven leads.",
      role: "Built and scaled by NLG as a revenue-generating marketplace and lead acquisition system.",
      link: "https://fractionalpropertyhub.com"
    },
    {
      name: "Business Legend",
      type: "Media & Podcast",
      icon: <Radio className="w-8 h-8" />,
      logo: "/brands/businesslegend.png",
      description: "A media brand featuring operator stories, business insights, and expert interviews. Content platform for founders, executives and growth operators.",
      why: "Authentic operator stories create trust and authority. Business Legend codifies real execution experience into content.",
      role: "Content strategy, production and distribution managed by NLG.",
      link: "https://businesslegend.co"
    },
    {
      name: "STEAD",
      type: "Sports & Lifestyle",
      icon: <Dumbbell className="w-8 h-8" />,
      logo: "/brands/stead.png",
      description: "A performance-focused sports and lifestyle brand built around discipline, quality and active professionals.",
      why: "Lifestyle reflects operating philosophy. STEAD embodies the discipline and precision we bring to business.",
      role: "Brand development and operations by NLG.",
      link: null,
      comingSoon: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Venture Studio & Portfolio | NLG Consulting</title>
        <meta name="description" content="Operator-built platforms across PropTech, FinTech, Media and Lifestyle. NLG Consulting's venture studio builds, operates and scales technology companies." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ventures" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ventures" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ventures" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ventures" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ventures" />
        <meta property="og:title" content="Venture Studio & Portfolio | NLG Consulting" />
        <meta property="og:description" content="Operator-built platforms across PropTech, FinTech, Media and Lifestyle." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Venture Studio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Operator-Built Platforms & Revenue Assets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              NLG Consulting operates as both a consulting firm and a venture studio — building, operating and scaling technology companies across PropTech, FinTech, Media and Lifestyle.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">An Execution-First Venture Model</h2>
              <p>
                Unlike traditional consulting firms that only advise, NLG invests operational expertise, capital and systems into building its own portfolio of companies. Every venture follows a consistent methodology: identify a clear market inefficiency, build technology-first, launch with revenue infrastructure from day one, and iterate based on commercial performance.
              </p>
              <p>
                This operator-led approach creates a direct feedback loop between our <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link> practice and real-world execution. Lessons from scaling Block Tech inform how we advise PropTech clients. Revenue systems designed for FractionalPropertyHub shape the <Link to="/ai-automation" className="text-primary hover:underline font-medium">AI automation workflows</Link> we deploy for B2B companies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl space-y-12">
            {ventures.map((venture, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="bg-muted/50 p-8 flex flex-col items-center justify-center text-center">
                      {venture.logo ? (
                        <img src={venture.logo} alt={venture.name} className="h-16 w-auto mb-4 object-contain" />
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                          {venture.icon}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold">{venture.name}</h3>
                      <Badge variant="secondary" className="mt-2">{venture.type}</Badge>
                    </div>
                    <div className="md:col-span-2 p-8 space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Platform</h4>
                        <p className="text-foreground">{venture.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Thesis</h4>
                        <p className="text-foreground">{venture.why}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Operating Role</h4>
                        <p className="text-foreground">{venture.role}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                        {venture.link && !venture.comingSoon ? (
                          <Button asChild variant="default">
                            <a href={venture.link} target="_blank" rel="noopener noreferrer">
                              Visit Platform <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                        ) : venture.comingSoon ? (
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Coming Soon</Badge>
                        ) : null}
                        <Button asChild variant="outline">
                          <Link to="/book">Discuss Partnership <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-2 border-primary/30">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="bg-muted/50 p-8 flex flex-col items-center justify-center text-center">
                    <img 
                      src="/images/book-cover.jpg" 
                      alt="Level Up in Fractional Real Estate by Gregory Brenig"
                      className="w-40 h-auto rounded-lg shadow-xl mb-4"
                    />
                    <Badge variant="secondary" className="mt-2">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Published Work
                    </Badge>
                  </div>
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Level Up in Fractional Real Estate</h3>
                      <p className="text-primary font-medium">A strategic framework for fractional ownership, tokenisation and modern property investment models.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">About the Book</h4>
                      <p className="text-foreground">
                        Written by Gregory Brenig, this guide codifies operational experience in fractional real estate — covering investment structures, technology infrastructure, regulatory considerations and go-to-market strategy for property platforms.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                      <Button asChild variant="default">
                        <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">
                          Available on Amazon <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/about">About the Author <ArrowRight className="ml-2 w-4 h-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Operating Philosophy</h2>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Technology-First, Revenue-Driven</h3>
              <p>
                Every venture is built on modern technology infrastructure — from AI-powered workflows to automated lead systems. Technology creates operating leverage, reduces marginal costs, and enables scaling without proportional headcount growth. The same <Link to="/ai-consulting" className="text-primary hover:underline font-medium">AI consulting</Link> frameworks we apply to clients are tested first in our own portfolio.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Global Scope, Local Execution</h3>
              <p>
                Our ventures operate across Europe, North America and the Middle East. This international footprint informs our <Link to="/go-to-market-consulting" className="text-primary hover:underline font-medium">go-to-market consulting</Link> — we understand regulatory nuances, buyer behaviour differences and market-entry sequencing from direct experience.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Execution Over Theory</h3>
              <p>
                Every venture generates revenue and serves real customers. This operator credibility is what distinguishes our advisory work — we build <Link to="/services" className="text-primary hover:underline font-medium">growth systems</Link> that we use ourselves before recommending them to clients.
              </p>
            </div>
          </div>
        </section>

        <RelatedServices currentService="ventures" />

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Explore a Partnership</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you are building in PropTech, FinTech or B2B technology and looking for an operator-aligned partner, we welcome the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book">Book a Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default Ventures;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Building2, Radio, Dumbbell, Globe } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const Ventures = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Ventures & Brands | NLG Consulting",
        "description": "Explore NLG Consulting's portfolio of ventures across PropTech, FinTech, Media, and Lifestyle.",
        "url": "https://nlgconsulting.co/ventures"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Ventures", "item": "https://nlgconsulting.co/ventures" }
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
      description: "A SaaS platform bridging real estate and financial technology. Block Tech enables fractional ownership, tokenization, and streamlined property investment workflows.",
      why: "Real estate investment is fragmented and inaccessible. Block Tech democratizes access to property assets through technology.",
      role: "Founded, built, and operated by NLG. We handle product development, go-to-market, and scaling.",
      link: "#"
    },
    {
      name: "FractionalPropertyHub",
      type: "Marketplace & Lead Generation",
      icon: <Globe className="w-8 h-8" />,
      logo: null,
      description: "A marketplace connecting investors with fractional real estate opportunities. Lead generation engine for property developers and investment platforms.",
      why: "Investors struggle to find vetted fractional opportunities. Developers need qualified leads.",
      role: "Built and scaled by NLG as a lead-gen and marketplace play.",
      link: "#"
    },
    {
      name: "Business Legend",
      type: "Media & Podcast",
      icon: <Radio className="w-8 h-8" />,
      logo: "/brands/businesslegend.png",
      description: "A media brand featuring entrepreneurship stories, business insights, and expert interviews. Podcast and content platform for founders and operators.",
      why: "Authentic business stories inspire action. Business Legend shares real journeys from real builders.",
      role: "Content creation, production, and distribution managed by NLG.",
      link: "#"
    },
    {
      name: "STEAD",
      type: "Sports & Lifestyle Brand",
      icon: <Dumbbell className="w-8 h-8" />,
      logo: null,
      description: "A sports and lifestyle brand focused on performance, discipline, and quality. Apparel and community for athletes and active professionals.",
      why: "Lifestyle reflects mindset. STEAD embodies the discipline and excellence we value.",
      role: "Brand development and operations by NLG.",
      link: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ventures & Brands | NLG Consulting Portfolio</title>
        <meta 
          name="description" 
          content="Explore NLG Consulting's portfolio: Block Tech (PropTech/FinTech), FractionalPropertyHub, Business Legend (Media), and STEAD (Sports & Lifestyle)." 
        />
        <link rel="canonical" href="https://nlgconsulting.co/ventures" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/ventures" />
        <meta property="og:title" content="Ventures & Brands | NLG Consulting" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ventures & Brands
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Platforms and brands we've built, operate, and scale across PropTech, FinTech, Media, and Lifestyle.
            </p>
          </div>
        </section>

        {/* Ventures List */}
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
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">What It Is</h4>
                        <p className="text-foreground">{venture.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Why It Exists</h4>
                        <p className="text-foreground">{venture.why}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">NLG's Role</h4>
                        <p className="text-foreground">{venture.role}</p>
                      </div>
                      {venture.link !== "#" && (
                        <Button asChild variant="outline" className="mt-4">
                          <a href={venture.link} target="_blank" rel="noopener noreferrer">
                            Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in collaborating or investing? Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book">Book a Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
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

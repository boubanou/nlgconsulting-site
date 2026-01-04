import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Building2, Radio, Dumbbell, Globe, BookOpen } from "lucide-react";
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
      link: "https://block-tech.co"
    },
    {
      name: "FractionalPropertyHub",
      type: "Marketplace & Lead Generation",
      icon: <Globe className="w-8 h-8" />,
      logo: "/brands/fractionalpropertyhub.png",
      description: "A marketplace connecting investors with fractional real estate opportunities. Lead generation engine for property developers and investment platforms.",
      why: "Investors struggle to find vetted fractional opportunities. Developers need qualified leads.",
      role: "Built and scaled by NLG as a lead-gen and marketplace play.",
      link: "https://fractionalpropertyhub.com"
    },
    {
      name: "Business Legend",
      type: "Media & Podcast",
      icon: <Radio className="w-8 h-8" />,
      logo: "/brands/businesslegend.png",
      description: "A media brand featuring entrepreneurship stories, business insights, and expert interviews. Podcast and content platform for founders and operators.",
      why: "Authentic business stories inspire action. Business Legend shares real journeys from real builders.",
      role: "Content creation, production, and distribution managed by NLG.",
      link: "https://businesslegend.co"
    },
    {
      name: "STEAD",
      type: "Sports & Lifestyle Brand",
      icon: <Dumbbell className="w-8 h-8" />,
      logo: "/brands/stead.png",
      description: "A sports and lifestyle brand focused on performance, discipline, and quality. Apparel and community for athletes and active professionals.",
      why: "Lifestyle reflects mindset. STEAD embodies the discipline and excellence we value.",
      role: "Brand development and operations by NLG.",
      link: null, // Coming soon
      comingSoon: true
    }
  ];

  return (
    <>
<Helmet>
        <title>NLG Ventures Portfolio | PropTech, FinTech, Media Investments</title>
        <meta 
          name="description" 
          content="Explore NLG's venture portfolio: Block Tech (PropTech/FinTech), FractionalPropertyHub, Business Legend, and more. We build, invest, and scale innovative platforms worldwide." 
        />
        <meta name="keywords" content="venture studio, PropTech investment, FinTech ventures, startup portfolio, fractional real estate, business ventures, technology investment" />
        <link rel="canonical" href="https://nlgconsulting.co/ventures" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/ventures" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/ventures" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/ventures" />
        <meta property="og:title" content="NLG Ventures Portfolio | PropTech, FinTech, Media Investments" />
        <meta property="og:description" content="Explore NLG's venture portfolio: Block Tech, FractionalPropertyHub, Business Legend, and more. We build, invest, and scale." />
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
              Ventures & Brands We Build and Scale
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Platforms and brands we've built, operate, and scale across PropTech, FinTech, Media, and Lifestyle.
            </p>
          </div>
        </section>

        {/* SEO Content - Portfolio Introduction */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Building the Future of Technology and Business</h2>
              <p>
                NLG Consulting operates as both a consulting firm and a venture studio. Unlike traditional consulting companies that only advise, we put capital, resources, and operational expertise into building and scaling our own portfolio of companies. This unique positioning gives us hands-on experience that directly benefits our consulting clients.
              </p>
              <p>
                Our venture portfolio spans four key sectors: PropTech (property technology), FinTech (financial technology), Media, and Lifestyle. Each venture is carefully selected based on market opportunity, alignment with our expertise, and potential for significant impact. We take a long-term approach, focusing on sustainable growth over quick exits.
              </p>
              <p>
                What makes our venture approach unique is the synergy between our portfolio companies and our consulting services. Lessons learned from building Block Tech inform our advisory work with other PropTech startups. The media strategies we develop for Business Legend are applied to help clients build their brand presence. This cross-pollination creates a virtuous cycle of learning and improvement.
              </p>
            </div>
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
                      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                        {venture.link && !venture.comingSoon ? (
                          <Button asChild variant="default">
                            <a href={venture.link} target="_blank" rel="noopener noreferrer">
                              Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                          </Button>
                        ) : venture.comingSoon ? (
                          <Badge variant="outline" className="text-sm py-1.5 px-4">Coming Soon</Badge>
                        ) : null}
                        <Button asChild variant="outline">
                          <Link to="/book">Book a Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Book as a Venture Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto max-w-5xl">
            <Card className="overflow-hidden border-2 border-primary/30">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Book Cover */}
                  <div className="bg-muted/50 p-8 flex flex-col items-center justify-center text-center">
                    <img 
                      src="/images/book-cover.jpg" 
                      alt="Level Up in Fractional Real Estate by Gregory Brenig"
                      className="w-40 h-auto rounded-lg shadow-xl mb-4 hover:scale-105 transition-transform"
                    />
                    <Badge variant="secondary" className="mt-2">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Intellectual Venture
                    </Badge>
                  </div>
                  
                  {/* Book Details */}
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Level Up in Fractional Real Estate</h3>
                      <p className="text-primary font-medium">More than a book — a strategic vision on innovation, investment, and modern asset models.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Executive Summary</h4>
                      <p className="text-foreground">
                        This comprehensive guide by Gregory Brenig explores the future of real estate investment through fractional ownership and tokenization. It provides a strategic roadmap for building rental income and achieving financial freedom through innovative, accessible property investment models.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Why It's a Venture</h4>
                      <p className="text-foreground">
                        This book represents NLG's intellectual contribution to the PropTech and FinTech ecosystem. It codifies our expertise in fractional real estate and serves as a thought leadership platform that drives awareness, partnerships, and business opportunities globally.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t">
                      <Button asChild variant="default">
                        <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">
                          Buy on Amazon <ExternalLink className="ml-2 w-4 h-4" />
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

        {/* SEO Content - Investment Philosophy */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Investment and Operating Philosophy</h2>
              <p>
                Each venture in our portfolio follows a consistent operating philosophy built on three principles:
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Technology-First Approach</h3>
              <p>
                We believe technology is the key differentiator in today's market. Every venture we build leverages cutting-edge technology—whether it's blockchain for fractional ownership, AI for automation, or modern web frameworks for rapid deployment. This technology-first approach allows us to scale efficiently and create sustainable competitive advantages.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Global From Day One</h3>
              <p>
                We build ventures for global markets from the start. Our team operates across Europe, North America, and the Middle East, giving us firsthand understanding of different markets and regulatory environments. This global perspective is embedded in every product and service we develop.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Execution Over Ideas</h3>
              <p>
                Ideas are cheap; execution is everything. We focus on building real products that solve real problems. Our ventures are not theoretical concepts—they're operating businesses generating revenue and serving customers. This hands-on approach is what allows us to bring genuine expertise to our consulting clients.
              </p>
            </div>
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

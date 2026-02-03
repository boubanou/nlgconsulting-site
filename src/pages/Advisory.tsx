import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Lightbulb, 
  TrendingUp, 
  Globe,
  Layers,
  Cpu,
  DollarSign,
  CheckCircle
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const Advisory = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Advisory & Strategy",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Strategic guidance on business structuring, go-to-market, scaling, and tech transformation.",
        "url": "https://nlgconsulting.co/advisory"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Advisory", "item": "https://nlgconsulting.co/advisory" }
        ]
      }
    ]
  };

  const areas = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Business Structuring",
      description: "Optimize your corporate structure, operations, and governance for growth and efficiency."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Go-to-Market Strategy",
      description: "Launch new products and enter new markets with a validated, execution-ready GTM plan."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Monetization",
      description: "Design and optimize revenue models, pricing strategies, and recurring revenue streams."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scaling & Expansion",
      description: "Scale operations, expand geographically, and build systems for sustainable growth."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Tech & AI Strategy",
      description: "Leverage technology and AI to automate, optimize, and differentiate your business."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Blockchain & Crypto",
      description: "Serious blockchain strategy for tokenization, smart contracts, and decentralized infrastructure."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Strategic Business Advisory | Go-to-Market & AI Strategy | 15+ Years Experience | NLG</title>
        <meta 
          name="description" 
          content="Expert advisory for founders: go-to-market, monetization, AI strategy, scaling. 15+ years experience. Book your free 15-min strategy call today." 
        />
        <meta name="keywords" content="business advisory, strategic consulting, go-to-market strategy, AI consulting, startup advisor, scaling strategy, monetization, business structuring, founder advisory" />
        <link rel="canonical" href="https://nlgconsulting.co/advisory" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/advisory" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/advisory" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/advisory" />
        <meta property="og:title" content="Strategic Business Advisory | Go-to-Market & AI Strategy | NLG" />
        <meta property="og:description" content="Expert advisory for founders: go-to-market, monetization, AI strategy, scaling. 15+ years experience. Book your free strategy call." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Strategic Business Advisory | Go-to-Market & AI Strategy | NLG" />
        <meta name="twitter:description" content="Expert advisory for founders: go-to-market, monetization, AI strategy, scaling. 15+ years experience." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Advisory
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Business Advisory for Founders and Executives
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert advisory on business structuring, go-to-market strategy, monetization, scaling operations, and technology transformation.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">
                Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* SEO Content - Advisory Introduction */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Advisory That Drives Real Results</h2>
              <p>
                Most consulting engagements end with a strategy deck and a handshake. Months later, that deck sits unused while the same problems persist. We take a fundamentally different approach.
              </p>
              <p>
                NLG Consulting's advisory practice is built around execution, not slides. Every strategy session includes actionable next steps, accountability frameworks, and optional implementation support. We work alongside you as a thinking partner, not an outside observer.
              </p>
              <p>
                Our advisors bring diverse, hands-on experience from building and scaling companies across PropTech, FinTech, Media, and Technology. We've faced the same challenges you're facing—fundraising, go-to-market, team building, scaling operations—and we've developed frameworks that work in the real world.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Who Benefits From Strategic Advisory</h3>
              <p>
                Our advisory services are designed for founders and executives who are facing inflection points—moments that require external perspective and expertise. Common scenarios include:
              </p>
              <ul>
                <li>Launching a new product or entering a new market</li>
                <li>Scaling from startup to growth stage</li>
                <li>Preparing for fundraising or M&A</li>
                <li>Restructuring operations for efficiency</li>
                <li>Building or transforming technology infrastructure</li>
                <li>Developing go-to-market and monetization strategies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Areas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide strategic guidance across these key domains.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Strategy Sessions</h3>
                  <p className="text-muted-foreground mb-4">
                    Focused 1-on-1 sessions to tackle specific challenges, develop strategies, and create action plans.
                  </p>
                  <ul className="space-y-2">
                    {["Deep-dive analysis", "Actionable recommendations", "Follow-up support"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ongoing Advisory</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous strategic partnership with regular check-ins, guidance, and support.
                  </p>
                  <ul className="space-y-2">
                    {["Monthly strategy calls", "Slack/email access", "Resource sharing"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Content - Working with Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">What Sets Our Advisory Apart</h2>
              <p>
                Traditional consultants observe from the outside and recommend changes. We've built companies ourselves, so we understand the real challenges of execution—not just the theory.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Operator Experience</h3>
              <p>
                Our advisory team includes founders who've built and exited companies, executives who've scaled startups to significant revenue, and operators who've built sales, marketing, and product functions from scratch. This isn't theoretical knowledge—it's battle-tested experience.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Implementation Support</h3>
              <p>
                Unlike traditional advisors who leave you with a strategy to implement on your own, we offer optional implementation support through our service divisions. Need a sales team? Our <Link to="/sales" className="text-primary hover:underline font-medium">SDR services</Link> can help. Need a website? <Link to="/web" className="text-primary hover:underline font-medium">NLG Studio</Link> delivers in 72 hours. This integration between strategy and execution is unique to NLG.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Global Perspective</h3>
              <p>
                With experience across Europe, North America, and the Middle East, we bring global perspective to local challenges. Whether you're expanding internationally or optimizing your home market, we have relevant insights. Explore our <Link to="/ventures" className="text-primary hover:underline font-medium">venture portfolio</Link> to see how we apply these principles.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <RelatedServices currentService="advisory" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Your Strategy
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Book a 15-minute call to discuss your challenges and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="text-base px-8">
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

export default Advisory;

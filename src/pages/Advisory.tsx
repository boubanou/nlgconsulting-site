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
        <title>Advisory & Strategy | NLG Consulting</title>
        <meta 
          name="description" 
          content="Strategic advisory on business structuring, go-to-market, monetization, scaling, AI strategy, and blockchain. Expert guidance from NLG Consulting." 
        />
        <link rel="canonical" href="https://nlgconsulting.co/advisory" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/advisory" />
        <meta property="og:title" content="Advisory & Strategy | NLG Consulting" />
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
              Strategic Guidance for Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert advisory on business structuring, go-to-market, monetization, scaling, and technology transformation.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">
                Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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

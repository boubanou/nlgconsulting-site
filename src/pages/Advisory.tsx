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
        "name": "Strategic Advisory & GTM Structuring",
        "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "Operator-led strategic advisory for FinTech, PropTech, SaaS, and B2B founders. GTM structuring, revenue operations, commercial model review, AI adoption planning, and growth systems strategy.",
        "url": "https://www.nlgconsulting.co/advisory",
        "areaServed": ["Europe", "North America", "Middle East"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Advisory", "item": "https://www.nlgconsulting.co/advisory" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is strategic advisory for founders?", "acceptedAnswer": { "@type": "Answer", "text": "Strategic advisory provides founders and executives with operator-level guidance on GTM structure, commercial model design, revenue operations, AI adoption, and growth systems — focused on execution, not slides." } },
          { "@type": "Question", "name": "How does NLG advisory differ from traditional consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional consulting delivers strategy decks. We deliver structured execution support — every advisory session includes actionable frameworks, accountability, and optional implementation through our service divisions." } },
          { "@type": "Question", "name": "Which industries does NLG advise?", "acceptedAnswer": { "@type": "Answer", "text": "We work with founders and leadership teams in FinTech, PropTech, SaaS, and B2B services. Our operator experience spans 15+ years across Europe, North America, and the Middle East." } }
        ]
      }
    ]
  };

  const areas = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "GTM Strategy & Revenue Operations", description: "Structure your go-to-market, define revenue operations, and build commercial systems that generate measurable pipeline." },
    { icon: <Layers className="w-6 h-6" />, title: "Offer Clarity & Market Positioning", description: "Sharpen your value proposition, competitive positioning, and pricing architecture for stronger commercial traction." },
    { icon: <DollarSign className="w-6 h-6" />, title: "Commercial Model Review", description: "Audit and optimise your revenue model, unit economics, and monetisation strategy for sustainable growth." },
    { icon: <Cpu className="w-6 h-6" />, title: "AI Adoption Planning", description: "Practical AI adoption roadmaps connecting workflow automation, AI agents, and operational AI to real business outcomes." },
    { icon: <Globe className="w-6 h-6" />, title: "International Expansion", description: "Market entry strategy, operational structuring, and commercial execution for international growth." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Growth Systems Architecture", description: "Design the systems, processes, and operating cadence that turn strategy into structured, repeatable execution." }
  ];

  return (
    <>
      <Helmet>
        <title>Strategic Advisory | GTM & Growth Systems | NLG</title>
        <meta name="description" content="Operator-led strategic advisory for FinTech, PropTech, SaaS, and B2B founders. GTM structuring, RevOps, commercial model review, AI adoption, and growth systems." />
        <link rel="canonical" href="https://www.nlgconsulting.co/advisory" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/advisory" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/advisory" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/advisory" />
        <meta property="og:title" content="Strategic Advisory | GTM & Growth Systems | NLG Consulting" />
        <meta property="og:description" content="Operator-led strategic advisory for FinTech, PropTech, SaaS, and B2B founders. Execution-focused, not slides." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Advisory</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Advisory for Founders Building Growth Systems
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Operator-led advisory on GTM structuring, revenue operations, commercial model design, AI adoption, and growth systems architecture — focused on execution, not slides.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Execution-Focused Advisory, Not Strategy Decks</h2>
              <p>
                Most consulting engagements end with a strategy deck and a handshake. Months later, that deck sits unused while the same challenges persist. Leadership teams don't lack ideas — they lack structured execution.
              </p>
              <p>
                NLG Consulting's advisory practice is built around operational clarity. Every session produces actionable frameworks, accountability structures, and — when needed — direct implementation support through our <Link to="/services" className="text-primary hover:underline font-medium">service divisions</Link>.
              </p>
              <p>
                Our advisory is informed by 15+ years of operator experience building and scaling companies across FinTech, PropTech, and B2B technology markets in Europe, Israel, and North America. We've navigated the same challenges you're facing — GTM design, revenue model optimisation, team structuring, international expansion, and AI adoption — and built frameworks that work in practice, not just in theory.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">When Strategic Advisory Creates the Most Value</h3>
              <ul>
                <li>Structuring or restructuring your go-to-market and revenue operations</li>
                <li>Clarifying your offer, positioning, and commercial model</li>
                <li>Planning practical AI adoption that connects to business outcomes</li>
                <li>Preparing for fundraising, M&A, or board-level conversations</li>
                <li>Scaling commercial operations without proportional headcount growth</li>
                <li>Entering new markets or verticals with structured execution</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Domains</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Structured guidance across the areas that drive commercial performance.
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

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Focused Strategy Sessions</h3>
                  <p className="text-muted-foreground mb-4">
                    1-on-1 sessions designed to tackle specific inflection points — GTM design, commercial restructuring, AI adoption, or growth system architecture.
                  </p>
                  <ul className="space-y-2">
                    {["Structured diagnostic and analysis", "Actionable frameworks and next steps", "Implementation support when needed"].map((item, i) => (
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
                  <h3 className="text-xl font-semibold mb-4">Ongoing Advisory Partnership</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous strategic partnership with regular operating reviews, decision support, and access to our execution capabilities.
                  </p>
                  <ul className="space-y-2">
                    {["Monthly strategy and operating reviews", "Direct access via Slack or email", "Priority access to service divisions"].map((item, i) => (
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

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Operator-Led Advisory Is Different</h2>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Built on Operating Experience</h3>
              <p>
                Our advisory practice is led by operators who've built companies, scaled commercial teams, and navigated complex markets firsthand. This isn't academic knowledge — it's structured experience from real business environments.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Strategy Connected to Execution</h3>
              <p>
                Unlike traditional advisors, we offer direct implementation support. Need an <Link to="/sales" className="text-primary hover:underline font-medium">outbound system</Link>? We build it. Need <Link to="/ai-automation" className="text-primary hover:underline font-medium">AI workflow automation</Link>? We deploy it. Need a <Link to="/web" className="text-primary hover:underline font-medium">conversion website</Link>? We deliver it. Advisory and execution in one firm.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">International Perspective</h3>
              <p>
                With operating experience across Europe, North America, and the Middle East, we bring relevant context to international expansion, market-specific GTM design, and cross-border commercial operations. See how we apply these principles through our <Link to="/ventures" className="text-primary hover:underline font-medium">venture portfolio</Link>.
              </p>
            </div>
          </div>
        </section>

        <RelatedServices currentService="advisory" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discuss Your Growth Structure
            </h2>
            <p className="text-lg opacity-90 mb-8">
              If you are reviewing your GTM model, commercial operations, or growth systems architecture — we can assess where structure and operating leverage can be improved.
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
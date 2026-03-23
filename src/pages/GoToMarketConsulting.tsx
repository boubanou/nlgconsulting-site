import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Globe, Target, Users, BarChart3, Layers, Map } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const GoToMarketConsulting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Go-To-Market Strategy & Execution", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "GTM consulting for FinTech, PropTech and SaaS companies. Market entry, positioning, channel strategy, pricing and launch execution with operator-level involvement.", "url": "https://www.nlgconsulting.co/go-to-market-consulting", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Go-To-Market Consulting", "item": "https://www.nlgconsulting.co/go-to-market-consulting" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is go-to-market consulting?", "acceptedAnswer": { "@type": "Answer", "text": "GTM consulting structures how a company enters or expands in a market — covering target selection, positioning, pricing, channel design, outbound architecture and launch execution." } },
        { "@type": "Question", "name": "Who benefits from GTM consulting?", "acceptedAnswer": { "@type": "Answer", "text": "FinTech, PropTech and SaaS companies launching new products, entering new geographies, or restructuring their commercial model to improve revenue performance." } },
        { "@type": "Question", "name": "Do you execute or only advise?", "acceptedAnswer": { "@type": "Answer", "text": "Both. We design the GTM strategy and can execute through our outbound systems, AI automation, conversion websites and SDR infrastructure." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>GTM Strategy & Execution for SaaS & Tech | NLG</title>
        <meta name="description" content="Go-to-market consulting for FinTech, PropTech and SaaS. Market entry, positioning, pricing, channel strategy and launch execution — from strategy to revenue." />
        <link rel="canonical" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/go-to-market-consulting" />
        <meta property="og:title" content="GTM Strategy & Execution for SaaS & Tech | NLG" />
        <meta property="og:description" content="Go-to-market consulting from strategy to execution for FinTech, PropTech and SaaS companies." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">GTM Strategy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Go-To-Market Strategy & Execution</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Structuring market entry is not a slide deck exercise — it requires operational clarity on positioning, pricing, channel architecture and outbound execution. We bring operator-level GTM consulting to FinTech, PropTech and SaaS companies.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Discuss Your GTM <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Most Go-To-Market Plans Underperform</h2>
              <p>
                The majority of GTM failures stem from the same structural gaps: unvalidated demand assumptions, misaligned pricing, weak outbound infrastructure, or channel strategies designed in theory rather than tested in practice. The cost is not just lost revenue — it is lost time and market position.
              </p>
              <p>
                NLG Consulting's GTM practice is built on direct operating experience. We have launched and scaled companies across Europe, North America and the Middle East — and we bring that execution perspective to every engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">GTM Framework</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Market Validation", desc: "TAM/SAM/SOM analysis, demand validation, competitive mapping and buyer persona development." },
                { icon: Map, title: "Positioning & Messaging", desc: "Differentiated positioning that resonates with target buyers — tested against real market signals." },
                { icon: Layers, title: "Channel Architecture", desc: "Direct sales, partnerships, PLG or hybrid — designing the right channel mix for your model." },
                { icon: BarChart3, title: "Pricing Strategy", desc: "Value-based pricing models optimised for your market, buyer segments and competitive landscape." },
                { icon: Users, title: "Outbound Execution", desc: "GTM plans connected to our outbound systems, SDR infrastructure and AI-enhanced prospecting." },
                { icon: Globe, title: "International Expansion", desc: "Cross-border GTM with regulatory awareness, local market adaptation and multi-geography execution." }
              ].map((item, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">From Strategy to Revenue</h2>
              <p>
                We do not stop at strategy decks. GTM plans connect directly to our execution capabilities — <Link to="/outsourced-sdr" className="text-primary hover:underline font-medium">outbound SDR systems</Link>, <Link to="/ai-automation" className="text-primary hover:underline font-medium">AI automation workflows</Link>, <Link to="/website-in-72-hours" className="text-primary hover:underline font-medium">conversion websites</Link> and <Link to="/ai-marketing-automation" className="text-primary hover:underline font-medium">marketing automation</Link>. This means your go-to-market plan becomes an operating system, not a document.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What is go-to-market consulting?", a: "GTM consulting structures how a company enters or expands in a market — covering target selection, positioning, pricing, channel design, outbound architecture and launch execution." },
                { q: "Who benefits from GTM consulting?", a: "FinTech, PropTech and SaaS companies launching new products, entering new geographies, or restructuring their commercial model." },
                { q: "How long does a GTM engagement take?", a: "Typically 4-8 weeks for strategy, with 3-6 months of execution support depending on scope." },
                { q: "Do you execute or only advise?", a: "Both. We design the strategy and can execute through our outbound systems, AI automation, conversion websites and SDR infrastructure." },
                { q: "What geographies do you cover?", a: "Europe, North America and the Middle East — with deep expertise in cross-border GTM." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <RelatedServices currentService="go-to-market" />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Review Your Go-To-Market Structure</h2>
            <p className="text-lg text-muted-foreground mb-8">If you are planning a market entry, expansion or commercial restructuring, we can assess where clarity and leverage can be improved.</p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default GoToMarketConsulting;
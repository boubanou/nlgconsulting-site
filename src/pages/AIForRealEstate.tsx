import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building, TrendingUp, Search, Users, MapPin, Zap, CheckCircle } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIForRealEstate = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Growth Systems for Real Estate", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and revenue operations for real estate companies. Valuations, lead systems, investor relations, market intelligence and operational automation.", "url": "https://www.nlgconsulting.co/ai-for-real-estate", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can real estate companies use AI?", "acceptedAnswer": { "@type": "Answer", "text": "Real estate companies deploy AI for automated valuations, lead qualification, investor communications, market intelligence, listing optimisation, portfolio reporting and operational workflows." }},
        { "@type": "Question", "name": "What distinguishes AI for real estate from AI for PropTech?", "acceptedAnswer": { "@type": "Answer", "text": "PropTech refers to technology companies building products for real estate. AI for real estate covers traditional firms — brokerages, developers, investment companies — that want AI in their existing operations." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for Real Estate", "item": "https://www.nlgconsulting.co/ai-for-real-estate" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Growth Systems for Real Estate | NLG Consulting</title>
        <meta name="description" content="AI consulting and revenue operations for real estate. Valuations, lead systems, investor relations, market intelligence and operational automation. Operator-led." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-immobilier" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Real Estate</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Growth Systems for Real Estate</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you are a brokerage, developer or investment firm — AI creates structural leverage across valuations, lead systems, investor relations, market intelligence and operational workflows. We bring operator-level real estate experience to every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your Real Estate Growth <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Where AI Creates Leverage in Real Estate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Valuations & CMA", desc: "AI-powered comparative analysis and valuation models incorporating location data, market trends and property-specific factors." },
                { icon: Users, title: "Lead Systems", desc: "Automated buyer and seller lead generation with intelligent scoring, qualification and routing to your sales team." },
                { icon: Search, title: "Market Intelligence", desc: "AI-driven research tracking deals, pricing, inventory and emerging investment opportunities across your target markets." },
                { icon: MapPin, title: "Listing & Content", desc: "AI-generated property descriptions, SEO-optimised listings and automated multi-platform syndication." },
                { icon: TrendingUp, title: "Investor Relations", desc: "Structured investor communications, portfolio reporting and fundraising outreach at scale." },
                { icon: Zap, title: "Operational Workflows", desc: "Tenant screening, lease management, maintenance coordination and administrative automation." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Operator-Level Real Estate Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Built and scaled a fractional real estate venture — direct operator experience",
                "Deep understanding of property markets, investor relations and deal structuring",
                "AI systems designed for real estate data, market cycles and compliance requirements",
                "Experience with residential, commercial and alternative investment models",
                "International perspective across European, Middle Eastern and global markets",
                "Combined AI consulting, revenue operations and GTM strategy for real estate"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How can real estate companies use AI?", a: "Automated valuations, lead qualification, investor communications, market analysis, listing optimisation, tenant screening, portfolio management and operational workflows." },
                { q: "What distinguishes AI for real estate from AI for PropTech?", a: "PropTech refers to technology companies building products for real estate. AI for real estate covers traditional firms — brokerages, developers, investment companies — that want AI in their existing operations." },
                { q: "Do you have real estate operating experience?", a: "Yes. NLG's founder built and scaled a venture in fractional real estate, providing direct understanding of property market dynamics, investor relations and deal structures." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4"><div className="container mx-auto max-w-3xl text-center"><h2 className="text-3xl font-bold mb-4">Discuss Your Real Estate Growth Structure</h2><p className="text-lg text-muted-foreground mb-8">If you want to deploy AI systems in your real estate operations, we can assess where automation and structure create the most commercial impact.</p><Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForRealEstate;
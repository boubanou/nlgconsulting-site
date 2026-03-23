import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Building, TrendingUp, Search, Users, Bot, MapPin, CheckCircle } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIForPropTech = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI-Powered Growth Systems for PropTech", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting, workflow automation and revenue operations for PropTech companies. Lead systems, investor outreach, market intelligence and commercial performance.", "url": "https://www.nlgconsulting.co/ai-for-proptech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can AI improve PropTech commercial performance?", "acceptedAnswer": { "@type": "Answer", "text": "AI enables PropTech companies to automate lead qualification, build structured investor outreach, deploy AI agents for property operations, and create revenue systems that scale across multiple markets." }},
        { "@type": "Question", "name": "Does NLG have PropTech operating experience?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. NLG's founder built and scaled a PropTech venture in fractional real estate — providing first-hand understanding of property technology workflows, investor relations and market dynamics." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for PropTech", "item": "https://www.nlgconsulting.co/ai-for-proptech" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Growth Systems for PropTech | NLG Consulting</title>
        <meta name="description" content="AI consulting, workflow automation and revenue operations for PropTech. Lead systems, investor outreach, market intelligence. Founder-led PropTech experience." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-proptech" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">PropTech</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Growth Systems for PropTech Companies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              PropTech is being reshaped by AI — from automated valuations and intelligent lead routing to investor communications and market intelligence. We help PropTech operators deploy AI workflows, build revenue infrastructure and create systems that scale across markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your PropTech Growth <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Where AI Creates Leverage in PropTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Valuation & Analysis", desc: "AI-powered comparative market analysis and valuation models that factor in location data, trends and property specifics with improved accuracy." },
                { icon: Users, title: "Lead Qualification Systems", desc: "Automated lead scoring and routing based on investor profiles, investment criteria and engagement signals — connected to your CRM." },
                { icon: Search, title: "Market Intelligence", desc: "AI-driven research tracking deals, pricing trends, inventory levels and emerging opportunities across your target markets." },
                { icon: TrendingUp, title: "Investor Outreach", desc: "Structured investor communication systems — personalized updates, AI-crafted outreach and fundraising sequences at scale." },
                { icon: MapPin, title: "Listing & Content Systems", desc: "AI-generated property descriptions, SEO-optimised listings and multi-platform content syndication." },
                { icon: Bot, title: "Operational AI Agents", desc: "Agentic workflows for property inquiries, viewing scheduling, tenant screening and portfolio reporting." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Founder-Led PropTech Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Built and scaled a PropTech venture in fractional real estate — first-hand operator experience",
                "Deep understanding of property workflows, investor relations and deal structuring",
                "Experience with fractional ownership, tokenisation and alternative RE investment models",
                "AI systems tailored to property data, market cycles and regulatory environments",
                "International perspective across European, Middle Eastern and North American markets",
                "Combined AI consulting, RevOps and GTM strategy specifically for real estate technology"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Related Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Strategic AI advisory for PropTech operations.", link: "/ai-consulting" },
                { title: "PropTech Consulting", desc: "Broader strategy and growth consulting for PropTech.", link: "/proptech-consulting" },
                { title: "Revenue Infrastructure", desc: "Outbound systems and pipeline architecture.", link: "/sales" }
              ].map((item, i) => (
                <Link to={item.link} key={i}><Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How can AI improve PropTech commercial performance?", a: "AI enables PropTech companies to automate lead qualification, build structured investor outreach, deploy AI agents for property operations, and create revenue systems that scale across multiple markets." },
                { q: "Does NLG have PropTech operating experience?", a: "Yes. NLG's founder built and scaled a PropTech venture in fractional real estate — providing first-hand understanding of property technology workflows, investor relations and market dynamics." },
                { q: "What PropTech processes can be automated?", a: "Lead qualification, property matching, market research, investor communications, listing optimisation, tenant screening, portfolio reporting and customer support." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4"><div className="container mx-auto max-w-3xl text-center"><h2 className="text-3xl font-bold mb-4">Discuss Your PropTech Growth Structure</h2><p className="text-lg text-muted-foreground mb-8">If you are building or scaling a PropTech company, we can assess where AI systems and revenue infrastructure can accelerate your trajectory.</p><Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForPropTech;
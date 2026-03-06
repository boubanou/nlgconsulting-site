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
      { "@type": "Service", "name": "AI for Real Estate Companies", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and automation for real estate companies. Property valuations, lead generation, market analysis, and operational automation.", "url": "https://www.nlgconsulting.co/ai-for-real-estate", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can real estate companies use AI?", "acceptedAnswer": { "@type": "Answer", "text": "Real estate companies use AI for automated property valuations, lead generation and qualification, market analysis, listing optimization, tenant screening, portfolio management, and investor communications." }},
        { "@type": "Question", "name": "What's the difference between AI for PropTech and AI for real estate?", "acceptedAnswer": { "@type": "Answer", "text": "PropTech refers to technology companies building products for the real estate industry. AI for real estate covers traditional RE firms — brokerages, developers, investment firms, property managers — that want to use AI in their operations." }}
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
        <title>AI for Real Estate Companies | Automation & Growth | NLG Consulting</title>
        <meta name="description" content="AI consulting and automation for real estate companies. Automate valuations, lead generation, market analysis, and property management with AI-powered systems." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-immobilier" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-real-estate" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Real Estate</Badge>
            <h1 className="mb-6">AI for{" "}<span className="text-gradient">Real Estate</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The real estate industry is being transformed by AI — from automated property valuations and intelligent lead routing to market intelligence and investor communications. Whether you're a brokerage, developer, or investment firm, AI can fundamentally improve how you operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a Real Estate AI Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">AI applications in real estate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Property Valuations", desc: "AI-powered comparative market analysis and automated valuation models that factor in location, market trends, and property specifics." },
                { icon: Users, title: "Lead Generation", desc: "Automated buyer and seller lead generation through targeted outreach, social media content, and intelligent lead scoring." },
                { icon: Search, title: "Market Intelligence", desc: "AI-driven market research — tracking deals, pricing trends, inventory levels, and emerging investment opportunities." },
                { icon: MapPin, title: "Listing Optimization", desc: "AI-generated property descriptions, virtual staging suggestions, SEO-optimized listings, and multi-platform syndication." },
                { icon: TrendingUp, title: "Investor Relations", desc: "Automated investor updates, portfolio reporting, fundraising outreach, and personalized communications at scale." },
                { icon: Zap, title: "Operations", desc: "Tenant screening, lease management, maintenance scheduling, and administrative workflow automation." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Our real estate expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Founder-led real estate experience — built and scaled a fractional RE venture", "Deep understanding of property markets, investor relations, and deal structuring", "AI systems tailored to real estate data, market cycles, and compliance", "Experience with residential, commercial, and alternative RE models", "International perspective across European and global markets", "Combined AI + growth strategy specifically for real estate"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Modernize your real estate business</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to explore AI opportunities in your real estate operations.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI for PropTech", desc: "AI solutions for real estate technology companies.", link: "/ai-for-proptech" },
                { title: "AI Marketing Automation", desc: "Scale your real estate marketing with AI.", link: "/ai-marketing-automation" },
                { title: "AI Sales Automation", desc: "Automate your real estate sales pipeline.", link: "/ai-sales-automation" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group"><Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How can real estate companies use AI?", a: "Real estate companies use AI for automated property valuations, lead generation and qualification, market analysis, listing optimization, tenant screening, portfolio management, and investor communications." },
                { q: "What's the difference between AI for PropTech and AI for real estate?", a: "PropTech refers to technology companies building products for the real estate industry. AI for real estate covers traditional RE firms — brokerages, developers, investment firms, property managers — that want to use AI in their operations." },
                { q: "Do you have real estate industry experience?", a: "Yes. NLG Consulting's founder built and scaled a venture in the fractional real estate space, giving us first-hand understanding of the industry." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to bring AI into real estate?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForRealEstate;

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
      { "@type": "Service", "name": "AI for PropTech Companies", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and automation for PropTech and real estate technology companies.", "url": "https://www.nlgconsulting.co/ai-for-proptech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can AI help PropTech companies?", "acceptedAnswer": { "@type": "Answer", "text": "AI helps PropTech companies with automated property valuations, lead qualification, tenant screening, market analysis, content generation, and investor outreach." }},
        { "@type": "Question", "name": "What PropTech processes can be automated?", "acceptedAnswer": { "@type": "Answer", "text": "Lead qualification, property matching, market research, investor communications, listing optimization, tenant screening, and portfolio reporting." }}
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
        <title>AI for PropTech & Real Estate Tech | NLG Consulting</title>
        <meta name="description" content="AI consulting and automation for PropTech companies. Automate valuations, lead qualification, investor outreach, and market analysis with AI-powered systems." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-proptech" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-proptech" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">PropTech</Badge>
            <h1 className="mb-6">AI for{" "}<span className="text-gradient">PropTech Companies</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The real estate technology industry is being reshaped by AI — from automated valuations and intelligent lead routing to investor communications and market intelligence. We help PropTech companies harness AI to scale faster and operate smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a PropTech AI Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">AI applications in PropTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, title: "Property Valuations", desc: "AI-powered valuation models that analyze market data, comparables, and trends for faster, more accurate pricing." },
                { icon: Users, title: "Lead Qualification", desc: "Automated lead scoring and routing based on buyer profiles, investment criteria, and engagement signals." },
                { icon: Search, title: "Market Intelligence", desc: "AI-driven market research and competitive analysis — tracking deals, pricing trends, and emerging opportunities." },
                { icon: TrendingUp, title: "Investor Outreach", desc: "Automated investor communications, personalized pitch decks, and AI-crafted fundraising sequences." },
                { icon: MapPin, title: "Listing Optimization", desc: "AI-generated property descriptions, SEO-optimized listings, and automated multi-platform syndication." },
                { icon: Bot, title: "Tenant & Buyer Support", desc: "Intelligent chatbots that handle property inquiries, schedule viewings, and qualify prospects 24/7." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Our PropTech expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Founder-led PropTech experience — NLG's founder built and scaled a PropTech venture", "Deep understanding of real estate workflows and investor relations", "Experience with fractional ownership, tokenization, and alternative RE models", "AI systems tailored to property data, market cycles, and regulatory environments", "International perspective — experience across European and Middle Eastern markets", "Combined AI + growth consulting specifically for RE tech companies"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Scale your PropTech with AI</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to explore AI opportunities specific to your PropTech business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Strategic AI consulting for your PropTech roadmap.", link: "/ai-consulting" },
                { title: "AI Automation", desc: "Automate your PropTech workflows end-to-end.", link: "/ai-automation" },
                { title: "PropTech Consulting", desc: "Broader strategy and growth consulting for PropTech.", link: "/proptech-consulting" }
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
                { q: "How can AI help PropTech companies?", a: "AI helps PropTech companies with automated property valuations, lead qualification, tenant screening, market analysis, content generation, and investor outreach — reducing manual work while improving accuracy and speed." },
                { q: "What PropTech processes can be automated?", a: "Lead qualification, property matching, market research, investor communications, listing optimization, tenant screening, portfolio reporting, and customer support." },
                { q: "Do you have PropTech industry experience?", a: "Yes. NLG Consulting's founder built and scaled a PropTech venture in the fractional real estate space, giving us first-hand understanding of the industry's challenges and opportunities." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to bring AI into your PropTech?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForPropTech;

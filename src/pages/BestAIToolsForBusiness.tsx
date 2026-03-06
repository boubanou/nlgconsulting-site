import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Wrench, TrendingUp, Users, Zap, Bot, BarChart3, CheckCircle, Star } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const BestAIToolsForBusiness = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "name": "Best AI Tools for Business in 2026", "author": { "@type": "Person", "name": "Gregory Brenig" }, "publisher": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Curated guide to the best AI tools for business in 2026. Covers sales, marketing, operations, customer support, and content creation.", "url": "https://www.nlgconsulting.co/best-ai-tools-for-business" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What are the best AI tools for business?", "acceptedAnswer": { "@type": "Answer", "text": "The best AI tools depend on your use case: ChatGPT/Claude for content and analysis, Clay/Apollo for sales, Make/Zapier for automation, Jasper for marketing, and Intercom/Drift for customer support." }},
        { "@type": "Question", "name": "How do I choose the right AI tools?", "acceptedAnswer": { "@type": "Answer", "text": "Start with your highest-impact pain point, evaluate 2-3 tools per category, run a 2-week pilot, and measure ROI before committing." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Best AI Tools for Business", "item": "https://www.nlgconsulting.co/best-ai-tools-for-business" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best AI Tools for Business in 2026 | Expert Guide | NLG</title>
        <meta name="description" content="Curated guide to the best AI tools for business. Sales, marketing, operations, support, and content creation tools tested and recommended by AI consultants." />
        <link rel="canonical" href="https://www.nlgconsulting.co/best-ai-tools-for-business" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/best-ai-tools-for-business" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/meilleurs-outils-ia-entreprise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/best-ai-tools-for-business" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Guide</Badge>
            <h1 className="mb-6">Best AI Tools for{" "}<span className="text-gradient">Business in 2026</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              With hundreds of AI tools on the market, choosing the right ones is overwhelming. This guide covers the tools we actually use and recommend to our clients — tested across dozens of B2B implementations.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">AI tools by category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Bot, title: "Content & Writing", desc: "ChatGPT, Claude, Jasper — for blog posts, emails, proposals, social media, and any text-based content at scale." },
                { icon: TrendingUp, title: "Sales & Prospecting", desc: "Clay, Apollo, Instantly, Lemlist — for lead enrichment, outreach automation, and pipeline generation." },
                { icon: Zap, title: "Workflow Automation", desc: "Make (Integromat), Zapier, n8n — for connecting apps, automating repetitive tasks, and building complex workflows." },
                { icon: BarChart3, title: "Analytics & Research", desc: "Perplexity, ChatGPT Advanced Data Analysis — for market research, data analysis, and competitive intelligence." },
                { icon: Users, title: "Customer Support", desc: "Intercom Fin, Drift, Zendesk AI — for automated support, ticket routing, and customer self-service." },
                { icon: Star, title: "Design & Creative", desc: "Midjourney, DALL-E, Canva AI, Runway — for visual content, presentations, and creative assets." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">How to choose the right AI tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Start with your highest-impact pain point — don't try to automate everything at once", "Evaluate 2-3 tools per category before committing to one", "Run a 2-week pilot with real use cases and measure actual time saved", "Consider integration with your existing tech stack (CRM, email, project management)", "Factor in the learning curve — the best tool is the one your team will actually use", "Budget for proper implementation and training, not just the subscription"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Need help choosing the right AI tools?</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation and we'll recommend the exact AI stack for your business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Get AI Tool Recommendations <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What are the best AI tools for business?", a: "It depends on your use case: ChatGPT/Claude for content, Clay/Apollo for sales, Make/Zapier for automation, Jasper for marketing, and Intercom for support." },
                { q: "How do I choose the right AI tools?", a: "Start with your biggest pain point, evaluate 2-3 options, run a pilot, and measure ROI before committing." },
                { q: "How much should I budget for AI tools?", a: "Most businesses start with $200-500/month in AI tools and see 5-10x return in time saved. Enterprise implementations can be $2,000-10,000/month." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Want a custom AI tool recommendation?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default BestAIToolsForBusiness;

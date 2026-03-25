import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Mail, TrendingUp, Target, Zap, BarChart3, CheckCircle, Megaphone } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const HowToAutomateMarketingWithAI = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "name": "How to Build AI-Powered Marketing Systems", "author": { "@type": "Person", "name": "Gregory Brenig" }, "publisher": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Operator's guide to building AI marketing systems that generate pipeline. Content production, SEO, email automation, lead scoring, and campaign intelligence — structured for revenue.", "url": "https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What marketing workflows can AI automate?", "acceptedAnswer": { "@type": "Answer", "text": "AI can systematize content production, email sequences, lead scoring, SEO optimization, ad campaign management, and reporting — turning marketing from a manual activity into a scalable system." }},
        { "@type": "Question", "name": "Where should I start with AI marketing automation?", "acceptedAnswer": { "@type": "Answer", "text": "Start with content production and email automation — these deliver the fastest ROI. Then layer in lead scoring, SEO optimization, and campaign intelligence as your systems mature." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Marketing Systems Guide", "item": "https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>How to Build AI Marketing Systems | Operator's Guide | NLG</title>
        <meta name="description" content="Operator's guide to building AI marketing systems that generate pipeline. Content, SEO, email automation, lead scoring — structured for revenue, not just efficiency." />
        <link rel="canonical" href="https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Operator's Guide</Badge>
            <h1 className="mb-6">How to Build AI-Powered{" "}<span className="text-gradient">Marketing Systems</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The companies winning at marketing aren't just "using AI tools" — they've built systems. Content production, email automation, SEO, lead scoring, and campaign intelligence — all connected to pipeline. Here's exactly how to structure it.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">What You Can Systematize</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Content Production Systems", desc: "Blog posts, LinkedIn content, newsletters, case studies — produced systematically with AI while maintaining brand voice and operator credibility." },
                { icon: Mail, title: "Email & Sequence Automation", desc: "AI-written nurture sequences triggered by prospect behavior — personalized at scale with optimized subject lines, copy, and send timing." },
                { icon: Target, title: "Lead Scoring & Qualification", desc: "AI-powered scoring based on behavior, firmographics, and engagement signals — automatically routing qualified leads to your sales system." },
                { icon: BarChart3, title: "SEO & Content Intelligence", desc: "Keyword strategy, content optimization, competitor analysis, and rank tracking — structured as a continuous improvement system." },
                { icon: TrendingUp, title: "Campaign Intelligence", desc: "AI-optimized ad copy, audience targeting, bid management, and A/B testing across Google, LinkedIn, and Meta — connected to pipeline metrics." },
                { icon: Zap, title: "Automated Reporting", desc: "Marketing dashboards and performance reports generated automatically — delivering pipeline intelligence to leadership weekly." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Implementation Sequence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Step 1: Audit your marketing workflows — identify where manual effort creates bottlenecks and inconsistency",
                "Step 2: Build your content production system — AI-assisted drafts with brand voice guidelines and quality control",
                "Step 3: Deploy email automation — behavior-triggered sequences with AI-personalized copy and timing",
                "Step 4: Implement lead scoring — AI-based qualification routing qualified prospects to your sales infrastructure",
                "Step 5: Systematize reporting — automated dashboards connecting marketing activity to pipeline outcomes",
                "Step 6: Layer in SEO and campaign intelligence — AI-optimized content strategy and ad management"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Need Help Building Your Marketing System?</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation and we'll architect your AI marketing system — connected to pipeline, not just efficiency metrics.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Get Your Systems Roadmap <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What marketing workflows can AI systematize?", a: "Content production, email sequences, lead scoring, SEO optimization, ad campaign management, and reporting — turning marketing from a manual activity into a scalable system connected to revenue." },
                { q: "Where should I start?", a: "Start with content production and email automation — these deliver the fastest ROI. Then layer in lead scoring, SEO, and campaign intelligence as your systems mature." },
                { q: "Will AI replace my marketing team?", a: "No. AI amplifies your team by handling systematic, repeatable tasks — freeing them to focus on strategy, positioning, creative direction, and relationship building." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to Build Your Marketing System?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call to discuss your marketing infrastructure.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default HowToAutomateMarketingWithAI;
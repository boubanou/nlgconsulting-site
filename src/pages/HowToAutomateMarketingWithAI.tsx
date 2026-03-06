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
      { "@type": "Article", "name": "How to Automate Marketing with AI", "author": { "@type": "Person", "name": "Gregory Brenig" }, "publisher": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Step-by-step guide to automating your marketing with AI. Email campaigns, content creation, SEO, social media, and lead nurturing — all automated.", "url": "https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What marketing tasks can AI automate?", "acceptedAnswer": { "@type": "Answer", "text": "AI can automate email campaigns, content creation, social media posting, SEO optimization, ad management, lead scoring, and customer segmentation." }},
        { "@type": "Question", "name": "How do I start automating marketing with AI?", "acceptedAnswer": { "@type": "Answer", "text": "Start with content creation and email automation — these have the fastest ROI. Then expand to lead scoring, social media, and ad optimization." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "How to Automate Marketing with AI", "item": "https://www.nlgconsulting.co/how-to-automate-marketing-with-ai" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>How to Automate Marketing with AI | Guide | NLG Consulting</title>
        <meta name="description" content="Step-by-step guide to automating marketing with AI. Automate email, content, SEO, social media, and lead nurturing. Practical frameworks and tool recommendations." />
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
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Guide</Badge>
            <h1 className="mb-6">How to Automate Marketing{" "}<span className="text-gradient">with AI</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Marketing teams that leverage AI produce 3-5x more content, respond to leads 10x faster, and run campaigns that continuously optimize themselves. Here's exactly how to set it up — from quick wins to full-stack automation.
            </p>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">What you can automate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Content Creation", desc: "Blog posts, social media, newsletters, case studies — generated with AI while maintaining your brand voice and quality standards." },
                { icon: Mail, title: "Email Campaigns", desc: "Automated email sequences, personalized at scale with AI-driven subject lines, copy, and send-time optimization." },
                { icon: Target, title: "Lead Scoring & Nurturing", desc: "AI-powered lead scoring based on behavior, firmographics, and engagement — with automated nurture sequences." },
                { icon: BarChart3, title: "SEO Optimization", desc: "Keyword research, content optimization, competitor analysis, and rank tracking — all enhanced by AI tools." },
                { icon: TrendingUp, title: "Ad Campaign Management", desc: "AI-optimized ad copy, audience targeting, bid management, and A/B testing across Google, LinkedIn, and Meta." },
                { icon: Zap, title: "Reporting & Analytics", desc: "Automated marketing dashboards, performance reports, and insight generation — delivered to your inbox weekly." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Step-by-step implementation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Step 1: Audit your current marketing workflows — identify repetitive, time-consuming tasks", "Step 2: Start with content creation — use AI for first drafts, then edit for quality and brand voice", "Step 3: Set up email automation — AI-written sequences triggered by user behavior", "Step 4: Implement lead scoring — use AI to prioritize leads based on engagement signals", "Step 5: Automate reporting — connect your tools to generate weekly performance dashboards", "Step 6: Scale to ads and SEO — use AI for campaign optimization and content strategy"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Need help automating your marketing?</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation and we'll build your AI marketing automation roadmap.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Get Your Automation Roadmap <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What marketing tasks can AI automate?", a: "Email campaigns, content creation, social media posting, SEO optimization, ad management, lead scoring, and customer segmentation." },
                { q: "How do I start automating marketing with AI?", a: "Start with content creation and email automation — these have the fastest ROI. Then expand to lead scoring, social media, and ad optimization." },
                { q: "Will AI replace my marketing team?", a: "No. AI augments your marketing team by handling repetitive tasks, letting them focus on strategy, creativity, and relationship building." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to automate your marketing?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default HowToAutomateMarketingWithAI;

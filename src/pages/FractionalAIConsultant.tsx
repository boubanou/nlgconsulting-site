import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, UserCheck, Clock, TrendingUp, Shield, Zap, CheckCircle, Brain } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const FractionalAIConsultant = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Fractional AI Consultant", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Hire a fractional AI consultant to lead your AI strategy and implementation without the cost of a full-time hire. Flexible, expert-level AI leadership.", "url": "https://www.nlgconsulting.co/fractional-ai-consultant", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is a fractional AI consultant?", "acceptedAnswer": { "@type": "Answer", "text": "A fractional AI consultant is a senior AI expert who works with your company on a part-time or project basis, providing strategic AI leadership without the cost of a full-time executive hire." }},
        { "@type": "Question", "name": "How much does a fractional AI consultant cost?", "acceptedAnswer": { "@type": "Answer", "text": "Fractional AI consulting typically costs 30-50% less than a full-time AI hire, with flexible arrangements from a few hours per week to several days per month." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Fractional AI Consultant", "item": "https://www.nlgconsulting.co/fractional-ai-consultant" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Fractional AI Consultant | Part-Time AI Leadership | NLG</title>
        <meta name="description" content="Hire a fractional AI consultant for expert AI strategy and implementation. Senior-level AI leadership at a fraction of the cost. Flexible engagement models." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fractional-ai-consultant" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/fractional-ai-consultant" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/consultant-ia-fractionnel" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/fractional-ai-consultant" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Fractional</Badge>
            <h1 className="mb-6">Fractional{" "}<span className="text-gradient">AI Consultant</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              You need AI expertise, but not a full-time hire. A fractional AI consultant gives you senior-level AI strategy, implementation oversight, and hands-on guidance — on your schedule, at a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Fractional AI <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">What a fractional AI consultant does</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "AI Strategy", desc: "Define your AI roadmap — which processes to automate, which tools to adopt, and how to measure ROI." },
                { icon: Zap, title: "Implementation Oversight", desc: "Manage AI tool selection, vendor evaluation, and implementation to ensure projects deliver results." },
                { icon: UserCheck, title: "Team Enablement", desc: "Train your team, establish AI best practices, and create internal guidelines for responsible AI use." },
                { icon: Shield, title: "Risk & Compliance", desc: "Navigate AI regulations, data privacy, and ethical considerations specific to your industry." },
                { icon: TrendingUp, title: "Performance Tracking", desc: "Set KPIs, track adoption, measure productivity gains, and optimize AI investments over time." },
                { icon: Clock, title: "Flexible Engagement", desc: "Scale up or down as needed — from a few hours per week to full project sprints. No long-term contracts required." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Why fractional over full-time</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["30-50% cost savings compared to a full-time AI hire", "Access to senior expertise from day one — no ramp-up period", "Fresh perspective from working across multiple industries and companies", "Flexibility to scale engagement up or down based on project needs", "No recruitment risk — start immediately, adjust as you go", "Cross-pollination of best practices from other AI implementations"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Get AI leadership without the full-time cost</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to discuss how a fractional AI consultant can accelerate your AI journey.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What is a fractional AI consultant?", a: "A senior AI expert who works with your company on a part-time or project basis, providing strategic AI leadership without the cost of a full-time executive hire." },
                { q: "How much does a fractional AI consultant cost?", a: "Typically 30-50% less than a full-time AI hire, with flexible arrangements from a few hours per week to several days per month." },
                { q: "How quickly can a fractional AI consultant start?", a: "Most engagements start within 1-2 weeks. We begin with a discovery phase to understand your business, then move into strategy and implementation." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready for fractional AI leadership?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default FractionalAIConsultant;

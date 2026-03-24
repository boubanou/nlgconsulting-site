import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, GraduationCap, Users, Target, Lightbulb, Zap, CheckCircle, BookOpen } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AITrainingForTeams = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Training & Enablement for Business Teams", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Hands-on AI training programs that transform teams into AI-fluent operators. Prompt engineering, workflow automation, Claude Code, and agentic AI systems — customized for your industry.", "url": "https://www.nlgconsulting.co/ai-training-for-teams", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What does AI training for teams include?", "acceptedAnswer": { "@type": "Answer", "text": "Our training covers practical AI tool usage, prompt engineering, agentic workflow automation, Claude Code implementation, and AI strategy — customized for your team's specific roles and industry." }},
        { "@type": "Question", "name": "How quickly do teams see results from AI training?", "acceptedAnswer": { "@type": "Answer", "text": "Most teams see measurable productivity gains within the first week. Our programs include working AI workflows that participants build during training and deploy immediately." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Training for Teams", "item": "https://www.nlgconsulting.co/ai-training-for-teams" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Training for Teams | Enablement Programs | NLG</title>
        <meta name="description" content="AI enablement for business teams. Prompt engineering, workflow automation, Claude Code and agentic AI. Hands-on programs that deliver measurable productivity gains." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-training-for-teams" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-training-for-teams" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/formation-ia-entreprise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-training-for-teams" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Enablement</Badge>
            <h1 className="mb-6">AI Enablement for{" "}<span className="text-gradient">Business Teams</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your team doesn't need to become engineers — they need to become AI-fluent operators who deploy the right tools to work 3-5x faster. Our hands-on programs deliver working AI workflows from day one, not theoretical slides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Design Your Training Program <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Training programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "AI Foundations", desc: "Half-day intensive covering AI capabilities, limitations, and practical applications mapped to your specific business operations and revenue model." },
                { icon: BookOpen, title: "Prompt Engineering & Claude Code", desc: "Full-day deep dive into crafting effective prompts and building agentic workflows with Claude, GPT and Claude Code for real business operations." },
                { icon: Zap, title: "Workflow Automation Systems", desc: "Hands-on training on building AI-powered operational workflows with Make, n8n and custom automation — connected to your actual tech stack." },
                { icon: Target, title: "AI for Revenue Teams", desc: "Practical training on AI-enhanced prospecting, outreach personalization, CRM automation, pipeline intelligence and RevOps workflows." },
                { icon: Lightbulb, title: "AI for Marketing & Content", desc: "Content systems, SEO automation, campaign workflows and data analysis using AI — designed for marketing teams who need to scale output." },
                { icon: Users, title: "Executive AI Strategy", desc: "Leadership workshop on AI strategy, ROI frameworks, risk governance and building an AI-fluent organization — for founders and C-level teams." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Why train with operators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Practical, hands-on training built on real AI implementations — not theoretical frameworks or vendor demos", "Customized to your industry, tools, team roles and revenue model — not generic AI overviews", "Participants leave with working AI workflows deployed on day one — immediate productivity gains", "Follow-up coaching to ensure adoption, measure results and continuously optimize AI usage", "Trained 50+ professionals across SaaS, FinTech, consulting and B2B services", "Connected to our AI consulting and automation practice — training is just the starting point for operational transformation"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Make your team AI-fluent</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to design the right AI enablement program for your team — customized for your industry and revenue model.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Design Your Program <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What does AI training for teams include?", a: "Our training covers practical AI tool usage, prompt engineering, agentic workflow automation, Claude Code implementation, and AI strategy — all customized for your team's roles and industry." },
                { q: "How quickly do teams see results?", a: "Most teams see measurable productivity gains within the first week. Programs include working AI workflows that participants build during training and deploy immediately in their operations." },
                { q: "Do participants need technical backgrounds?", a: "No. Our training is designed for business operators — revenue teams, marketers, managers, founders. We focus on practical deployment of AI systems, not engineering." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to make your team AI-fluent?</h2><p className="text-lg text-muted-foreground mb-8">Book a free consultation to design your enablement program.</p><Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AITrainingForTeams;
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Handshake, CheckCircle, Brain, Workflow, Bot, Megaphone, TrendingUp, GraduationCap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const OutsourcedAIImplementation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Outsourced AI Implementation", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Outsource your AI implementation to an experienced team. We act as your external AI department — deploying automation, building agents, and running AI systems.", "url": "https://www.nlgconsulting.co/outsourced-ai-implementation", "serviceType": "Outsourced AI Implementation" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is outsourced AI implementation?", "acceptedAnswer": { "@type": "Answer", "text": "Outsourced AI implementation means hiring an external team to handle the design, deployment, and management of AI systems in your business — rather than building an in-house AI team. It gives you access to AI expertise without the overhead of full-time hires." }},
        { "@type": "Question", "name": "Why outsource AI implementation instead of hiring?", "acceptedAnswer": { "@type": "Answer", "text": "Hiring AI specialists is expensive, competitive, and time-consuming. Outsourcing gives you immediate access to experienced practitioners, faster deployment, and lower risk. You can always build in-house later once you've validated what works." }},
        { "@type": "Question", "name": "What does an outsourced AI team actually do?", "acceptedAnswer": { "@type": "Answer", "text": "We handle everything from AI strategy and tool selection to workflow design, agent building, prompt engineering, system integration, testing, deployment, and ongoing optimization. Think of us as your fractional AI department." }},
        { "@type": "Question", "name": "How does the engagement work?", "acceptedAnswer": { "@type": "Answer", "text": "We typically start with a discovery phase to understand your business, then move into implementation sprints — deploying AI solutions in phases. Engagements can be project-based (fixed scope) or ongoing (monthly retainer)." }},
        { "@type": "Question", "name": "Do I retain ownership of the systems you build?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Everything we build belongs to you — workflows, prompts, integrations, documentation. We can also train your team to manage the systems independently if you eventually want to bring operations in-house." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Outsourced AI Implementation", "item": "https://www.nlgconsulting.co/outsourced-ai-implementation" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Outsourced AI Implementation | Your External AI Team | NLG Consulting</title>
        <meta name="description" content="Outsource your AI implementation to experienced operators. We act as your external AI department — deploying automation, building agents, and running systems." />
        <link rel="canonical" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <meta property="og:title" content="Outsourced AI Implementation | NLG Consulting" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Outsourced AI</Badge>
            <h1 className="mb-6">Outsourced AI{" "}<span className="text-gradient">Implementation</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Don't have an in-house AI team? We operate as your external AI department — handling strategy, tool selection, workflow design, agent building, and system management so you can focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your AI Needs <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The Build vs. Outsource Decision</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Every business needs AI capabilities, but not every business needs to build an in-house AI team. Hiring AI engineers, data scientists, and automation specialists is expensive — with salaries ranging from €80K-€200K+ per person — and finding qualified candidates in today's market is fiercely competitive.</p>
              <p>For most SMEs, startups, and mid-market companies, the pragmatic approach is to outsource AI implementation to an experienced partner. You get immediate access to expertise, faster deployment, and the flexibility to scale up or down based on needs — all without the fixed costs and management overhead of full-time hires.</p>
              <p>As Marc Andreessen has observed, "software is eating the world" — and AI is now eating software. The companies that move fastest in deploying AI, regardless of how they access the expertise, will hold the competitive advantage.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">What We Handle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Brain className="w-5 h-5" />, title: "AI Strategy", desc: "Develop your AI roadmap — identifying opportunities, selecting tools, and prioritizing implementations based on business impact." },
                { icon: <Workflow className="w-5 h-5" />, title: "Automation Systems", desc: "Design and deploy workflow automation across marketing, sales, operations, and content production." },
                { icon: <Bot className="w-5 h-5" />, title: "AI Agent Development", desc: "Build custom AI agents for specific business functions — from sales prospecting to customer support." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Marketing AI", desc: "Content creation, SEO, social media, and campaign management — all powered by AI systems we build and maintain." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Sales AI", desc: "Outbound automation, lead enrichment, personalized outreach, and pipeline management with AI intelligence." },
                { icon: <GraduationCap className="w-5 h-5" />, title: "Team Training", desc: "Upskill your team on AI tools and prompt engineering while we handle the heavy implementation work." }
              ].map((item, i) => (
                <Card key={i} className="border border-border"><CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Discovery", desc: "We learn your business, your current tech stack, your goals, and your pain points through a structured discovery process." },
                { step: "02", title: "Roadmap", desc: "We design an AI implementation roadmap — prioritized by impact, organized in sprints, and tied to clear outcomes." },
                { step: "03", title: "Implementation", desc: "Our team builds and deploys AI systems — automation workflows, agents, integrations — in iterative sprints with regular check-ins." },
                { step: "04", title: "Management", desc: "We manage, monitor, and optimize the systems on an ongoing basis — acting as your external AI team with dedicated support." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Your AI Department, On Demand</h2>
            <p className="text-lg opacity-90 mb-8">Book a discovery call to discuss how outsourced AI implementation can work for your business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Start with strategy before implementation.", link: "/ai-consulting" },
                { title: "AI Automation", desc: "Specific workflow automation projects.", link: "/ai-automation" },
                { title: "Prompt Engineering Training", desc: "Upskill your team alongside implementation.", link: "/prompt-engineering-consulting" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What is outsourced AI implementation?", a: "It means hiring an external team to handle the design, deployment, and management of AI systems in your business — rather than building an in-house AI team." },
                { q: "Why outsource instead of hiring?", a: "Hiring AI specialists is expensive and competitive. Outsourcing gives you immediate access to expertise, faster deployment, and lower risk." },
                { q: "What does an outsourced AI team do?", a: "We handle strategy, tool selection, workflow design, agent building, prompt engineering, system integration, testing, deployment, and ongoing optimization." },
                { q: "How does the engagement work?", a: "We start with discovery, then implement in sprints. Engagements can be project-based (fixed scope) or ongoing (monthly retainer)." },
                { q: "Do I retain ownership of the systems?", a: "Yes. Everything we build belongs to you — workflows, prompts, integrations, documentation. We can train your team to manage independently." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Ready to Outsource Your AI?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to explore how we can serve as your AI execution partner.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default OutsourcedAIImplementation;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, CheckCircle, Megaphone, TrendingUp, FileText, Settings, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIAgentsForBusiness = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Agents for Business — Agentic AI Systems", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Custom agentic AI systems for sales, marketing, content, and operations. We design and deploy AI agents using Claude, OpenAI, and multi-step workflow architectures for B2B companies.", "url": "https://www.nlgconsulting.co/ai-agents-for-business", "areaServed": ["Europe", "North America", "Middle East"], "serviceType": "AI Agents" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What are AI agents for business?", "acceptedAnswer": { "@type": "Answer", "text": "AI agents are autonomous AI systems that can reason, plan multi-step workflows, use external tools, and execute complex business processes — from sales prospecting to content production — with human-in-the-loop oversight at key decision points." }},
        { "@type": "Question", "name": "What is agentic AI?", "acceptedAnswer": { "@type": "Answer", "text": "Agentic AI refers to AI systems designed to act autonomously on multi-step tasks. Unlike simple prompts or chatbots, agentic AI can decompose complex goals, orchestrate tool usage, handle exceptions, and iterate — making it suitable for real business workflows." }},
        { "@type": "Question", "name": "How do you build AI agents with Claude Code?", "acceptedAnswer": { "@type": "Answer", "text": "Claude Code enables building sophisticated AI agents that can write, review, and execute code autonomously. We use Claude Code alongside other frameworks to build agents that interact with APIs, process data, generate content, and manage operational workflows." }},
        { "@type": "Question", "name": "Are AI agents reliable for business operations?", "acceptedAnswer": { "@type": "Answer", "text": "When designed with proper guardrails, monitoring, and human-in-the-loop checkpoints, AI agents deliver consistent results. We build agents with fail-safes, quality controls, and escalation logic appropriate for business-critical processes." }},
        { "@type": "Question", "name": "What's the difference between AI agents and workflow automation?", "acceptedAnswer": { "@type": "Answer", "text": "Workflow automation follows predefined rules (if X then Y). AI agents can reason, adapt to unexpected inputs, make decisions, and handle complex processes that traditional automation cannot. The best systems combine both: structured automation with agentic intelligence." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Agents for Business", "item": "https://www.nlgconsulting.co/ai-agents-for-business" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Agents for Business | Agentic AI Systems | NLG Consulting</title>
        <meta name="description" content="Design and deploy agentic AI systems for sales, marketing, content, and operations. Claude Code workflows, multi-step AI agents, and human-in-the-loop automation for B2B companies." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-agents-for-business" />
        <meta property="og:title" content="AI Agents for Business | Agentic AI Systems | NLG" />
        <meta property="og:description" content="Agentic AI systems for sales, marketing, content, and operations. Claude Code workflows and multi-step AI agents." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Agentic AI</Badge>
            <h1 className="mb-6">Agentic AI Systems{" "}<span className="text-gradient">for Business Operations</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI agents go beyond automation. They reason, plan, use tools, and execute complex business processes — from sales prospecting and content production to research and operational workflows. We design and deploy agentic AI systems connected to your real business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss AI Agents for Your Business <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/use-cases">View Use Cases</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">From Automation to Agentic Intelligence</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Traditional <Link to="/ai-automation" className="text-primary hover:underline">workflow automation</Link> follows rules: if this happens, do that. It's powerful for structured, repetitive tasks. But many business processes require judgment, adaptation, and multi-step reasoning — which is where agentic AI creates a step-change in capability.</p>
              <p>Agentic AI systems — built on models like Anthropic's Claude and OpenAI — can decompose complex goals into steps, use external tools and APIs, handle exceptions, and iterate until the task is complete. For FinTech compliance workflows, PropTech market research, SaaS onboarding sequences, or B2B sales prospecting, agentic AI handles what automation alone cannot.</p>
              <p>Claude Code, in particular, enables building AI agents that can write, review, and execute code autonomously — opening possibilities for data processing, API integrations, report generation, and operational workflows that were previously manual.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">AI Agents by Business Function</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, title: "Sales & Prospecting Agents", desc: "Agents that research prospects, enrich data, write personalised outreach, manage follow-up sequences, and qualify leads — feeding your pipeline with commercial discipline." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Marketing & Content Agents", desc: "Content production, SEO-optimised writing, social media management, campaign orchestration, and performance analysis — consistent output with your brand voice." },
                { icon: <FileText className="w-5 h-5" />, title: "Research & Intelligence Agents", desc: "Market research, competitive analysis, data synthesis, and business intelligence — AI agents that process information at scale and surface actionable insights." },
                { icon: <Settings className="w-5 h-5" />, title: "Operations & Workflow Agents", desc: "Document processing, data synchronisation, report generation, CRM management, and internal workflow orchestration — reducing operational overhead." },
                { icon: <Users className="w-5 h-5" />, title: "Founder Support Agents", desc: "Executive assistants that handle research, meeting preparation, email triage, task management, and strategic analysis — multiplying founder productivity." },
                { icon: <Bot className="w-5 h-5" />, title: "Custom Agentic Systems", desc: "Purpose-built AI agents designed for your specific industry, workflow, and integration requirements — from FinTech compliance to PropTech deal flow." }
              ].map((item, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">How We Design Agentic Systems</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Use Case & Scope Definition", desc: "We define what the agent should accomplish, what inputs and tools it needs, what outputs it produces, and where human oversight is required — grounded in your actual business operations." },
                { step: "02", title: "Architecture & Model Selection", desc: "We design the agent's reasoning framework — choosing between Claude, OpenAI, or hybrid architectures — and define tool integrations, memory systems, and quality controls." },
                { step: "03", title: "Build, Test & Refine", desc: "Iterative development with real-world business scenarios. Each agent is tested against edge cases, refined for accuracy, and validated against your quality standards before deployment." },
                { step: "04", title: "Deploy with Monitoring & Governance", desc: "Production deployment with real-time monitoring, logging, human-in-the-loop checkpoints, and continuous optimisation — ensuring reliability and business value." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agents vs Automation */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">AI Agents vs Traditional Automation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Traditional Automation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Follows predefined rules and triggers</li>
                  <li>• Handles simple, linear tasks</li>
                  <li>• Fails on exceptions and edge cases</li>
                  <li>• Requires manual updates when processes change</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                <h3 className="font-semibold mb-4 text-primary">Agentic AI Systems</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Reason through complex, multi-step processes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Adapt to unexpected inputs and edge cases</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Use external tools, APIs, and data sources</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Improve over time with feedback and monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Deploy Agentic AI in Your Operations</h2>
            <p className="text-lg opacity-90 mb-8">Book a call to assess which AI agents can improve your sales, content, research, or operational workflows.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Workflow Automation", desc: "Structured automation for rule-based processes and integrations.", link: "/ai-automation" },
                { title: "AI Sales Automation", desc: "AI-powered prospecting, outreach, and pipeline systems.", link: "/ai-sales-automation" },
                { title: "AI Consulting", desc: "Strategic AI advisory for operations, growth, and commercial performance.", link: "/ai-consulting" }
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
                { q: "What are AI agents for business?", a: "AI agents are autonomous AI systems that can reason, plan multi-step workflows, use external tools, and execute complex business processes — from sales prospecting to content production — with human-in-the-loop oversight at key decision points." },
                { q: "What is agentic AI?", a: "Agentic AI refers to AI systems designed to act autonomously on multi-step tasks. Unlike simple prompts or chatbots, agentic AI can decompose complex goals, orchestrate tool usage, handle exceptions, and iterate — making it suitable for real business workflows." },
                { q: "How do you use Claude Code for AI agents?", a: "Claude Code enables building AI agents that can write, review, and execute code autonomously. We use it alongside other frameworks to build agents that interact with APIs, process data, generate content, and manage operational workflows." },
                { q: "Are AI agents reliable enough for business?", a: "When designed with proper guardrails, monitoring, and human-in-the-loop checkpoints, AI agents deliver consistent results. We build agents with fail-safes and quality controls appropriate for business-critical processes." },
                { q: "What's the difference between AI agents and automation?", a: "Workflow automation follows predefined rules. AI agents can reason, adapt, make decisions, and handle complex processes. The best systems combine both: structured automation with agentic intelligence for the tasks that require judgment." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Explore AI Agents for Your Business</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a focused call to discuss your use cases and assess where agentic AI creates the most leverage.</p>
            <Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIAgentsForBusiness;

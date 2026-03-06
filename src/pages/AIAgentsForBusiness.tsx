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
      { "@type": "Service", "name": "AI Agents for Business", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Custom AI agents for sales, marketing, content, and operations. Autonomous AI systems that handle complex business tasks.", "url": "https://www.nlgconsulting.co/ai-agents-for-business", "areaServed": ["Europe", "North America", "Middle East"], "serviceType": "AI Agents" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What are AI agents?", "acceptedAnswer": { "@type": "Answer", "text": "AI agents are autonomous AI systems designed to perform specific tasks or workflows with minimal human supervision. Unlike simple chatbots, agents can plan, execute multi-step processes, use tools, make decisions, and learn from outcomes." }},
        { "@type": "Question", "name": "How are AI agents different from automation?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional automation follows predefined rules. AI agents can reason, adapt, and handle unexpected situations. They combine the reliability of automation with the intelligence of AI to handle complex, dynamic business processes." }},
        { "@type": "Question", "name": "What business tasks can AI agents handle?", "acceptedAnswer": { "@type": "Answer", "text": "Sales prospecting and outreach, content creation and publishing, customer support and ticket management, data research and analysis, marketing campaign management, document processing, and operational workflows." }},
        { "@type": "Question", "name": "Are AI agents reliable enough for business use?", "acceptedAnswer": { "@type": "Answer", "text": "When properly designed with guardrails, monitoring, and human-in-the-loop checkpoints, AI agents deliver consistent, reliable results. We build agents with fail-safes and quality controls appropriate for business-critical processes." }},
        { "@type": "Question", "name": "How do you build custom AI agents?", "acceptedAnswer": { "@type": "Answer", "text": "We start by understanding your specific use case, then design the agent architecture, select the appropriate AI model, define tools and integrations, set up guardrails, and iteratively test and refine until the agent meets quality and reliability standards." }}
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
        <title>AI Agents for Business | Custom AI Agent Development | NLG Consulting</title>
        <meta name="description" content="Custom AI agents for sales, marketing, content, and operations. We build autonomous AI systems that handle complex business tasks. Book a free consultation." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-agents-for-business" />
        <meta property="og:title" content="AI Agents for Business | NLG Consulting" />
        <meta property="og:description" content="Custom AI agents for sales, marketing, content, and operations." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Agents</Badge>
            <h1 className="mb-6">AI Agents{" "}<span className="text-gradient">for Business</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The next evolution beyond automation. AI agents don't just execute tasks — they reason, plan, use tools, and adapt. We build custom AI agents that handle your sales prospecting, content creation, marketing campaigns, and operational workflows autonomously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Explore AI Agents for Your Business <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The Rise of AI Agents</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>AI agents represent a fundamental shift in how businesses use technology. While traditional automation follows rigid if-then rules, AI agents can understand context, plan multi-step workflows, use external tools, and make intelligent decisions — much like a skilled team member.</p>
              <p>Leaders across the AI ecosystem — from OpenAI to Anthropic to Google DeepMind — are investing heavily in agent capabilities. As Jensen Huang of Nvidia has noted, AI agents are poised to become a trillion-dollar industry, transforming how businesses operate at every level.</p>
              <p>For businesses, this means the ability to deploy intelligent digital workers that handle complex tasks — from researching prospects and writing personalized outreach, to managing entire content calendars and processing operational workflows — with a level of quality and consistency that scales without proportional cost increases.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">AI Agents We Build</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, title: "Sales Agents", desc: "Agents that research prospects, write personalized outreach, handle follow-ups, and qualify leads — feeding your pipeline 24/7." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Marketing Agents", desc: "Content creation, social media management, campaign optimization, and audience engagement — all handled by purpose-built AI agents." },
                { icon: <FileText className="w-5 h-5" />, title: "Content Agents", desc: "Blog posts, newsletters, case studies, social content, and documentation — produced consistently with your brand voice." },
                { icon: <Settings className="w-5 h-5" />, title: "Operations Agents", desc: "Data processing, report generation, document handling, and internal workflow management — automated intelligently." },
                { icon: <Users className="w-5 h-5" />, title: "Customer Support Agents", desc: "Intelligent support agents that understand context, resolve issues, and escalate appropriately — improving response times and satisfaction." },
                { icon: <Bot className="w-5 h-5" />, title: "Custom Agents", desc: "Purpose-built agents designed for your specific use case, industry, and workflow requirements." }
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
            <h2 className="text-center mb-10">How We Build AI Agents</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Use Case Definition", desc: "We work with you to define exactly what the agent should do, what inputs it needs, what outputs it should produce, and what guardrails it requires." },
                { step: "02", title: "Architecture Design", desc: "We design the agent's reasoning framework, tool integrations, memory systems, and quality control mechanisms." },
                { step: "03", title: "Build & Train", desc: "We build the agent using the most appropriate AI models and frameworks, then train and refine it with real-world scenarios from your business." },
                { step: "04", title: "Deploy & Monitor", desc: "We deploy the agent into your workflow with monitoring, logging, and human-in-the-loop checkpoints to ensure reliability and quality." }
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

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Deploy AI Agents in Your Business</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to explore which AI agents could transform your operations.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Automation", desc: "Complementary workflow automation for structured, rule-based processes.", link: "/ai-automation" },
                { title: "AI Sales Automation", desc: "AI-powered sales development and pipeline automation.", link: "/ai-sales-automation" },
                { title: "Outsourced AI Implementation", desc: "Let us run your AI systems as your external AI department.", link: "/outsourced-ai-implementation" }
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
                { q: "What are AI agents?", a: "AI agents are autonomous AI systems designed to perform specific tasks or workflows with minimal human supervision. Unlike simple chatbots, agents can plan, execute multi-step processes, use tools, make decisions, and learn from outcomes." },
                { q: "How are AI agents different from automation?", a: "Traditional automation follows predefined rules. AI agents can reason, adapt, and handle unexpected situations. They combine the reliability of automation with the intelligence of AI to handle complex, dynamic business processes." },
                { q: "What business tasks can AI agents handle?", a: "Sales prospecting and outreach, content creation and publishing, customer support and ticket management, data research and analysis, marketing campaign management, document processing, and operational workflows." },
                { q: "Are AI agents reliable enough for business use?", a: "When properly designed with guardrails, monitoring, and human-in-the-loop checkpoints, AI agents deliver consistent, reliable results. We build agents with fail-safes and quality controls appropriate for business-critical processes." },
                { q: "How do you build custom AI agents?", a: "We start by understanding your specific use case, then design the agent architecture, select the appropriate AI model, define tools and integrations, set up guardrails, and iteratively test and refine until the agent meets quality and reliability standards." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Ready to Build Your AI Agents?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to explore what's possible.</p>
            <Button asChild size="lg"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIAgentsForBusiness;

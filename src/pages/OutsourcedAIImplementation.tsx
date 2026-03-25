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
      { "@type": "Service", "name": "Outsourced AI Operations & Implementation", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Your fractional AI operations team. We deploy AI workflows, build agentic systems, and manage AI infrastructure — so you can focus on revenue, not tooling.", "url": "https://www.nlgconsulting.co/outsourced-ai-implementation", "serviceType": "Outsourced AI Implementation" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is outsourced AI implementation?", "acceptedAnswer": { "@type": "Answer", "text": "Outsourced AI implementation means engaging an operator-led external team to design, deploy, and manage your AI systems — from workflow automation to agentic AI — without building an in-house AI department." }},
        { "@type": "Question", "name": "Why outsource AI operations instead of hiring?", "acceptedAnswer": { "@type": "Answer", "text": "Hiring AI specialists costs €80K-€200K+ per person and takes months. Outsourcing gives you immediate access to production-ready AI expertise, faster deployment, and the flexibility to scale based on business needs — not headcount." }},
        { "@type": "Question", "name": "Do we retain ownership of the systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Everything we build — workflows, prompts, integrations, documentation — belongs to you. We can train your team to manage systems independently when you're ready to bring operations in-house." }}
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
        <title>Outsourced AI Operations | Fractional AI Team | NLG</title>
        <meta name="description" content="Your fractional AI operations team. We deploy AI workflows, build agentic systems, and manage AI infrastructure for FinTech, SaaS & B2B companies. No hiring required." />
        <link rel="canonical" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/implementation-ia-externalisee" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/outsourced-ai-implementation" />
        <meta property="og:title" content="Outsourced AI Operations | Fractional AI Team | NLG" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Outsourced AI</Badge>
            <h1 className="mb-6">Your Fractional{" "}<span className="text-gradient">AI Operations Team</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              You don't need an in-house AI department. We operate as your fractional AI team — deploying workflows, building agentic systems, managing infrastructure, and training your people — so you can focus on revenue and growth.
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
              <p>Every company needs AI capabilities. Not every company needs an AI department. Hiring AI engineers, prompt specialists, and automation architects costs €80K-€200K+ per person — and finding qualified operators in today's market is fiercely competitive.</p>
              <p>For <Link to="/ai-for-saas" className="text-primary hover:underline">SaaS</Link>, <Link to="/ai-for-fintech" className="text-primary hover:underline">FinTech</Link>, and <Link to="/ai-for-b2b-services" className="text-primary hover:underline">B2B services</Link> companies, the pragmatic path is to outsource AI operations to an experienced operator. You get immediate access to production-ready expertise, faster deployment, and the flexibility to scale without fixed headcount.</p>
              <p>The companies that move fastest in deploying <Link to="/ai-agents-for-business" className="text-primary hover:underline">AI agents</Link>, <Link to="/ai-automation" className="text-primary hover:underline">workflow automation</Link>, and revenue-connected AI systems — regardless of how they access the expertise — hold the competitive advantage.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">What We Operate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Brain className="w-5 h-5" />, title: "AI Strategy & Roadmapping", desc: "Define your AI roadmap — identify high-impact opportunities, select the right tools, and prioritize implementations tied to revenue outcomes." },
                { icon: <Workflow className="w-5 h-5" />, title: "Workflow Automation Systems", desc: "Design and deploy production automation across marketing, sales, operations, and content — using Make, n8n, Claude Code, and custom integrations." },
                { icon: <Bot className="w-5 h-5" />, title: "Agentic AI Systems", desc: "Build multi-step AI agents for specific business functions — from lead enrichment and qualification to customer support and reporting." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Marketing AI Infrastructure", desc: "AI-powered content production, SEO systems, and campaign automation — built and maintained as operational assets." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Sales AI & RevOps", desc: "Outbound automation, lead enrichment, pipeline intelligence, and CRM workflow optimization — connected to revenue." },
                { icon: <GraduationCap className="w-5 h-5" />, title: "Team Enablement", desc: "Progressive skills transfer — upskilling your team on AI tools, prompt engineering, and system management alongside implementation." }
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
                { step: "01", title: "Discovery & Audit", desc: "We map your current tech stack, workflows, pain points, and growth objectives through a structured operator-level discovery." },
                { step: "02", title: "AI Roadmap", desc: "We design an implementation roadmap — prioritized by revenue impact, organized in sprints, and tied to measurable business outcomes." },
                { step: "03", title: "Sprint Deployment", desc: "Our team builds and deploys AI systems — automation workflows, agents, integrations — in iterative sprints with regular leadership check-ins." },
                { step: "04", title: "Ongoing Operations", desc: "We manage, monitor, optimize, and evolve your AI systems on an ongoing basis — acting as your fractional AI operations team." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Why Outsource AI Operations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Immediate access to production-ready AI expertise — no hiring cycle",
                "60-80% lower cost than building an in-house AI team",
                "Faster time-to-value — systems deployed in weeks, not quarters",
                "Flexibility to scale engagement up or down based on business needs",
                "Full ownership of all systems, workflows, and documentation",
                "Progressive skills transfer — your team builds fluency alongside implementation"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Your AI Operations, On Demand</h2>
            <p className="text-lg opacity-90 mb-8">Book a discovery call to explore how fractional AI operations can accelerate your growth without the overhead.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Full-spectrum AI strategy and growth systems architecture.", link: "/ai-consulting" },
                { title: "AI Workflow Automation", desc: "Specific workflow automation projects and system builds.", link: "/ai-automation" },
                { title: "Prompt Engineering", desc: "Upskill your team alongside production implementation.", link: "/prompt-engineering-consulting" }
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
                { q: "What is outsourced AI implementation?", a: "It means engaging an operator-led external team to design, deploy, and manage your AI systems — from workflow automation to agentic AI — without building an in-house AI department." },
                { q: "Why outsource instead of hiring?", a: "Hiring AI specialists costs €80K-€200K+ per person and takes months. Outsourcing gives you immediate production-ready expertise, faster deployment, and flexibility to scale without fixed headcount." },
                { q: "What does a fractional AI team handle?", a: "We handle AI strategy, workflow automation, agent development, prompt engineering, system integration, deployment, monitoring, and progressive skills transfer to your internal team." },
                { q: "How does the engagement work?", a: "We start with discovery, then implement in sprints tied to business outcomes. Engagements can be project-based (fixed scope) or ongoing (monthly retainer)." },
                { q: "Do we retain ownership of the systems?", a: "Yes. Everything we build — workflows, prompts, integrations, documentation — belongs to you. We can train your team to manage independently when you're ready." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Ready to Deploy AI Without the Overhead?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to explore how fractional AI operations can work for your business.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default OutsourcedAIImplementation;
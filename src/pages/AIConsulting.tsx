import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, CheckCircle, Target, Workflow, Lightbulb, Users, Building2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIConsulting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Consulting for Business Operations & Growth",
        "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "Operator-led AI consulting for FinTech, PropTech, SaaS and B2B companies. We help leadership teams adopt AI workflows, agentic systems, and operational AI to improve commercial performance and founder efficiency.",
        "url": "https://www.nlgconsulting.co/ai-consulting",
        "areaServed": ["Europe", "North America", "Middle East"],
        "serviceType": "AI Consulting"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is AI consulting for business?", "acceptedAnswer": { "@type": "Answer", "text": "AI consulting helps companies identify where artificial intelligence — including AI workflows, agentic systems, and Claude Code automation — can improve operations, sales, marketing, and decision-making. It bridges the gap between available AI capabilities and practical business outcomes." }},
          { "@type": "Question", "name": "How is AI consulting different from buying AI tools?", "acceptedAnswer": { "@type": "Answer", "text": "Tools are components. AI consulting provides the architecture — understanding which processes benefit from AI, designing workflows, selecting models, and building systems that connect AI to real business operations. Without consulting, companies typically underutilise 80% of the tools they buy." }},
          { "@type": "Question", "name": "Who benefits from AI consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Founders, CEOs, and operational leaders at FinTech, PropTech, SaaS, and B2B companies who want to adopt AI in a structured way — tied to revenue, efficiency, and measurable business outcomes rather than experimentation." }},
          { "@type": "Question", "name": "How long does an AI consulting engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "A focused AI audit and roadmap typically takes 2–3 weeks. Ongoing advisory and implementation partnerships can span several months, depending on complexity and the number of workflows being designed." }},
          { "@type": "Question", "name": "What is agentic AI consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Agentic AI consulting focuses on designing multi-step AI systems — AI agents — that can reason, plan, use tools, and execute complex business processes with human oversight. This goes beyond simple automation to create intelligent systems that handle research, prospecting, content, and operations." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "AI Consulting", "item": "https://www.nlgconsulting.co/ai-consulting" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Consulting for Business | Agentic AI & Workflows | NLG</title>
        <meta name="description" content="Operator-led AI consulting for FinTech, PropTech, SaaS & B2B. AI workflows, agentic systems, Claude Code automation, and operational AI tied to revenue and efficiency." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-consulting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-consulting" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-consulting" />
        <meta property="og:title" content="AI Consulting for Business | NLG Consulting" />
        <meta property="og:description" content="Operator-led AI consulting: workflows, agentic systems, and operational AI for FinTech, PropTech & B2B." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Consulting</Badge>
            <h1 className="mb-6">
              AI Consulting for{" "}
              <span className="text-gradient">Business Operations & Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Most companies know AI matters. Few know how to connect it to revenue, operations, and commercial performance. We help founders and leadership teams adopt AI workflows, agentic systems, and operational AI in a structured, measurable way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/services">Explore Services</Link></Button>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The Gap Between AI Tools and Business Results</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The AI ecosystem is moving fast — OpenAI, Anthropic's Claude, Google Gemini, and open-source models are creating capabilities that were impossible two years ago. But for most FinTech operators, PropTech companies, SaaS founders, and B2B service firms, the challenge isn't access to technology. It's knowing how to deploy AI in ways that actually improve commercial performance.
              </p>
              <p>
                Without structured AI consulting, companies tend to experiment without direction: subscribing to tools they underuse, running isolated pilots with no integration plan, or delaying adoption while competitors build operational advantages. The cost isn't just wasted spend — it's the compounding opportunity cost of slower execution, higher manual overhead, and less pipeline visibility.
              </p>
              <p>
                AI consulting for business connects technology to outcomes. It means designing <Link to="/ai-automation" className="text-primary hover:underline">AI workflows</Link> that reduce manual workload, building <Link to="/ai-agents-for-business" className="text-primary hover:underline">agentic AI systems</Link> that handle multi-step processes, and creating operational clarity around where AI adds leverage and where it doesn't.
              </p>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Our AI Consulting Covers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From diagnosis to deployment — a structured approach to practical AI adoption.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Target className="w-5 h-5" />, title: "AI Readiness & Operations Audit", desc: "We assess your current workflows, tech stack, and team capabilities to identify where AI creates the most business value — not the most novelty." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "AI Strategy & Roadmap", desc: "A prioritised implementation plan connecting AI initiatives to revenue, efficiency, and founder productivity — with clear milestones and expected outcomes." },
                { icon: <Brain className="w-5 h-5" />, title: "Agentic AI & Workflow Design", desc: "Architecture for multi-step AI systems — including Claude-based workflows, AI agents, and human-in-the-loop processes for sales, content, and operations." },
                { icon: <Workflow className="w-5 h-5" />, title: "AI Process Integration", desc: "Connecting AI to your existing CRM, outbound stack, content pipeline, and operational tools — HubSpot, Salesforce, Clay, Make, and custom APIs." },
                { icon: <Users className="w-5 h-5" />, title: "Team Enablement & Training", desc: "Practical training on prompt engineering, AI workflow adoption, and operational AI — designed for founders, sales teams, and marketing operators." },
                { icon: <Building2 className="w-5 h-5" />, title: "Fractional AI Advisory", desc: "Ongoing strategic AI guidance as your company scales — ensuring AI adoption stays aligned with GTM strategy, RevOps, and commercial priorities." }
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

        {/* Who It's For */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Who This Is For</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Founders & CEOs building AI into their growth systems",
                "FinTech and PropTech operators seeking operational AI",
                "SaaS companies integrating AI into product and GTM",
                "Heads of Sales designing AI-enhanced pipeline systems",
                "CMOs building AI-powered content and SEO engines",
                "B2B service firms structuring AI for delivery and operations",
                "Growth teams connecting AI to RevOps and outbound",
                "Companies moving from AI experimentation to execution"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">How We Work</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Operations Audit & Diagnosis", desc: "We map your workflows, sales process, marketing operations, and tech stack to identify high-leverage AI opportunities — where automation and intelligence reduce manual load and improve output quality." },
                { step: "02", title: "AI Architecture & Roadmap", desc: "We design the system — which AI models, which workflows, which integrations, and which team processes change. This is a practical execution plan, not a slide deck." },
                { step: "03", title: "Build, Deploy & Integrate", desc: "We implement AI workflows and agentic systems directly into your operations — connecting to your CRM, outbound tools, content pipeline, and reporting infrastructure." },
                { step: "04", title: "Optimise & Scale", desc: "We monitor results, refine AI outputs, expand into additional processes, and ensure your team builds internal AI capability over time." }
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

        {/* Why NLG */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-6">Why NLG Consulting</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              We're not a traditional consulting firm delivering reports. We're operators who design and deploy AI systems — with 15+ years of real-world experience across FinTech, PropTech, SaaS, and B2B revenue operations. Strategy and execution under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild size="lg" variant="outline-light"><Link to="/about">About the Founder</Link></Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Workflow Automation", desc: "Deploy AI-powered workflows across sales, marketing, and operations.", link: "/ai-automation" },
                { title: "AI Agents for Business", desc: "Agentic AI systems for prospecting, content, research, and founder support.", link: "/ai-agents-for-business" },
                { title: "Strategic Advisory", desc: "GTM structure, RevOps, and growth systems advisory for founders.", link: "/advisory" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What is AI consulting for business?", a: "AI consulting helps companies identify where artificial intelligence — including AI workflows, agentic systems, and Claude Code automation — can improve operations, sales, marketing, and decision-making. It bridges the gap between available AI capabilities and practical business outcomes." },
                { q: "How is AI consulting different from buying AI tools?", a: "Tools are components. AI consulting provides the architecture — understanding which processes benefit from AI, designing workflows, selecting models, and building systems that connect AI to real business operations. Without consulting, companies typically underutilise 80% of the tools they buy." },
                { q: "Who benefits from AI consulting?", a: "Founders, CEOs, and operational leaders at FinTech, PropTech, SaaS, and B2B companies who want to adopt AI in a structured way — tied to revenue, efficiency, and measurable business outcomes rather than experimentation." },
                { q: "What is agentic AI consulting?", a: "Agentic AI consulting focuses on designing multi-step AI systems — AI agents — that can reason, plan, use tools, and execute complex business processes with human oversight. This goes beyond simple automation to create intelligent systems for research, prospecting, content, and operations." },
                { q: "How long does an AI consulting engagement take?", a: "A focused AI audit and roadmap typically takes 2–3 weeks. Ongoing advisory and implementation partnerships span several months, depending on complexity and the number of workflows being designed." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Discuss Your AI Strategy</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a focused call to assess where AI can improve your operations, commercial performance, and founder efficiency.</p>
            <Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIConsulting;

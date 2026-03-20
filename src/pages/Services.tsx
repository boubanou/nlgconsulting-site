import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Target, Brain, DollarSign, Globe, Building2, Lightbulb, Rocket, BarChart3, CheckCircle, TrendingUp, Zap, Bot, Workflow
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co", "logo": "https://www.nlgconsulting.co/logo.svg",
        "description": "AI-powered growth systems, revenue operations, and strategic advisory for FinTech, PropTech, SaaS, and B2B companies.",
        "founder": { "@type": "Person", "name": "Gregory Brenig", "jobTitle": "Founder & CEO" },
        "areaServed": ["Europe", "North America", "Middle East"]
      },
      {
        "@type": "Service", "name": "AI-Powered Growth Systems & Revenue Operations", "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "End-to-end AI consulting, workflow automation, outbound infrastructure, and strategic advisory for B2B growth.",
        "url": "https://www.nlgconsulting.co/services", "serviceType": "AI Consulting & Growth Systems"
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.nlgconsulting.co/services" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What does NLG Consulting do?", "acceptedAnswer": { "@type": "Answer", "text": "NLG Consulting builds AI-powered growth systems for FinTech, PropTech, SaaS, and B2B companies. We combine AI consulting, workflow automation, agentic systems, outbound infrastructure, RevOps, and strategic advisory into execution-focused engagements." }},
        { "@type": "Question", "name": "Who are NLG's services for?", "acceptedAnswer": { "@type": "Answer", "text": "Founders, CEOs, and growth teams at FinTech, PropTech, SaaS, and B2B companies looking to deploy AI systems, structure revenue operations, improve commercial performance, and generate qualified meetings." }},
        { "@type": "Question", "name": "How is NLG different from a traditional agency?", "acceptedAnswer": { "@type": "Answer", "text": "We are operator-led — we build and scale companies ourselves. Every engagement is tied to business outcomes, not deliverables. We combine strategy with execution: AI workflows, outbound systems, conversion websites, and revenue operations deployed end-to-end." }},
        { "@type": "Question", "name": "How quickly can I expect results?", "acceptedAnswer": { "@type": "Answer", "text": "AI workflows and outbound systems can be operational within 2-3 weeks. Conversion websites deploy in days. Strategic advisory sessions produce actionable outputs in the first session. Full commercial systems mature over 60-90 days." }}
      ]}
    ]
  };

  const serviceCards = [
    { icon: <Brain className="w-8 h-8" />, title: "AI Consulting", description: "Practical AI strategy tied to business operations, revenue, and growth — not generic technology assessments.", link: "/ai-consulting", cta: "Explore AI Consulting" },
    { icon: <Workflow className="w-8 h-8" />, title: "AI Workflow Automation", description: "Design and deploy AI-powered workflows for sales, marketing, content, and operations using Claude, GPT, Make, and custom pipelines.", link: "/ai-automation", cta: "Explore Automation" },
    { icon: <Bot className="w-8 h-8" />, title: "AI Agents & Agentic Systems", description: "Custom agents built on Claude, GPT, and agentic frameworks for research, prospecting, content, and multi-step workflows.", link: "/ai-agents-for-business", cta: "Explore AI Agents" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "AI Sales & RevOps", description: "AI-enhanced outbound architecture, pipeline systems, CRM workflows, and revenue operations for qualified meeting generation.", link: "/ai-sales-automation", cta: "Explore AI Sales" },
    { icon: <Target className="w-8 h-8" />, title: "Outbound & Lead Generation", description: "AI-enhanced SDR infrastructure, multichannel outbound systems, and B2B meeting generation at scale.", link: "/sales", cta: "Explore Outbound" },
    { icon: <Globe className="w-8 h-8" />, title: "GTM & Go-to-Market Strategy", description: "Market entry, positioning, commercial model, and revenue architecture for new products and geographies.", link: "/go-to-market", cta: "Explore GTM" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Strategic Advisory", description: "Execution-focused advisory for founders: offer clarity, GTM structure, AI adoption planning, and commercial model review.", link: "/advisory", cta: "Explore Advisory" },
    { icon: <Rocket className="w-8 h-8" />, title: "Conversion Websites & SEO", description: "Revenue-ready websites, landing pages, and SEO authority assets — built as business tools, not design projects.", link: "/web", cta: "Explore Web & SEO" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Growth Systems & Revenue Operations | NLG Consulting</title>
        <meta name="description" content="AI consulting, workflow automation, AI agents, outbound infrastructure, RevOps, and strategic advisory for FinTech, PropTech, SaaS & B2B. Book a strategy call." />
        <link rel="canonical" href="https://www.nlgconsulting.co/services" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/services" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/services" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/services" />
        <meta property="og:title" content="AI Growth Systems & Revenue Operations | NLG Consulting" />
        <meta property="og:description" content="AI consulting, workflow automation, AI agents, outbound infrastructure, and strategic advisory for B2B growth." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">AI Consulting · RevOps · Growth Systems</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Growth Systems & Revenue Operations</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              End-to-end AI consulting, workflow automation, agentic systems, outbound infrastructure, and strategic advisory — designed for FinTech, PropTech, SaaS, and B2B companies that need structured execution, not just strategy decks.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">From Scattered Initiatives to Structured Commercial Execution</h2>
              <p>Most companies don't lack tools — they lack structured execution. They invest in AI without a clear commercial application. They run outbound without pipeline architecture. They build websites without conversion logic. The result: scattered initiatives, inconsistent performance, and limited commercial visibility.</p>
              <p>NLG Consulting brings the structure. We combine <Link to="/ai-consulting" className="text-primary hover:underline font-medium">AI consulting</Link>, <Link to="/ai-automation" className="text-primary hover:underline font-medium">workflow automation</Link>, <Link to="/ai-agents-for-business" className="text-primary hover:underline font-medium">agentic AI systems</Link>, <Link to="/sales" className="text-primary hover:underline font-medium">outbound infrastructure</Link>, and <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link> into growth systems that generate qualified meetings and measurable revenue.</p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Built by Operators, for Operators</h3>
              <p>We've built and scaled companies across <Link to="/ai-for-proptech" className="text-primary hover:underline font-medium">PropTech</Link>, <Link to="/ai-for-fintech" className="text-primary hover:underline font-medium">FinTech</Link>, and SaaS. Our <Link to="/ventures" className="text-primary hover:underline font-medium">venture portfolio</Link> and <Link to="/use-cases" className="text-primary hover:underline font-medium">use cases</Link> demonstrate the same operating discipline we apply to client engagements.</p>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Growth Systems Stack</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">Eight integrated capabilities designed to build, operate, and scale your commercial engine.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((service, i) => (
                <Link to={service.link} key={i}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{service.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">{service.cta} <ArrowRight className="w-3 h-3" /></span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Build Growth Systems</h2>
            <div className="space-y-8">
              {[
                { step: "1", title: "Audit & Diagnosis", desc: "Map your current commercial architecture — AI readiness, outbound process, pipeline visibility, conversion flows — and identify the highest-leverage opportunities." },
                { step: "2", title: "System Design", desc: "Design the growth system architecture: AI workflows, outbound sequences, CRM logic, conversion assets, and reporting — tailored to your market and commercial objectives." },
                { step: "3", title: "Deploy & Execute", desc: "Build and deploy AI systems, outbound infrastructure, and conversion assets. Operational within weeks, not months." },
                { step: "4", title: "Optimise & Scale", desc: "Measure, iterate, and compound. Refine targeting, improve conversion, expand channels, and scale what generates qualified pipeline." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">{item.step}</div>
                  <div><h3 className="text-xl font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Why Companies Trust NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Operator Experience", desc: "Founded and scaled companies across PropTech, FinTech, and SaaS — we bring operating experience, not just advisory." },
                { title: "Published Authority", desc: "Author of 'Level Up in Fractional Real Estate' — recognised thought leader in AI systems and growth architecture." },
                { title: "Global Execution", desc: "15+ years across Europe, North America, and the Middle East — serving FinTech, PropTech, and B2B companies worldwide." },
                { title: "Measurable Outcomes", desc: "1,500+ qualified meetings generated, 50+ conversion websites deployed, and AI systems operating across multiple industries." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What does NLG Consulting do?", a: "We build AI-powered growth systems for FinTech, PropTech, SaaS, and B2B companies — combining AI consulting, workflow automation, agentic systems, outbound infrastructure, RevOps, and strategic advisory." },
                { q: "Who are your services for?", a: "Founders, CEOs, and growth teams at companies looking to deploy AI systems, structure revenue operations, improve commercial performance, and generate qualified meetings." },
                { q: "How is NLG different from a traditional agency?", a: "We're operator-led — we build and scale companies ourselves. Every engagement is tied to business outcomes. We combine strategy with execution: AI workflows, outbound systems, conversion websites, and RevOps deployed end-to-end." },
                { q: "How quickly will I see results?", a: "AI workflows and outbound systems can be operational within 2-3 weeks. Conversion websites deploy in days. Full commercial systems mature over 60-90 days." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Build Your Growth System</h2>
            <p className="text-lg opacity-90 mb-8">Book a strategy call to discuss your AI adoption, outbound architecture, revenue operations, or commercial performance challenges.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default Services;

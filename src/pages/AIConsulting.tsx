import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, CheckCircle, Target, Globe, Lightbulb, Users, Building2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIConsulting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Consulting for Business",
        "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "Strategic AI consulting helping businesses understand, adopt, and scale artificial intelligence across their operations.",
        "url": "https://www.nlgconsulting.co/ai-consulting",
        "areaServed": ["Europe", "North America", "Middle East"],
        "serviceType": "AI Consulting"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is AI consulting?", "acceptedAnswer": { "@type": "Answer", "text": "AI consulting is a professional service that helps businesses understand how artificial intelligence can improve their operations, develop an AI strategy, and implement AI solutions. It bridges the gap between available AI technology and practical business applications." }},
          { "@type": "Question", "name": "Who needs AI consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Any business looking to improve efficiency, reduce costs, or gain competitive advantage through AI. This includes startups, SMEs, enterprises, agencies, and consulting firms across all industries." }},
          { "@type": "Question", "name": "How long does an AI consulting engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "Engagements vary from a focused 2-week AI audit and roadmap to ongoing implementation partnerships spanning several months. The timeline depends on the complexity of your operations and goals." }},
          { "@type": "Question", "name": "Do I need technical knowledge to work with an AI consultant?", "acceptedAnswer": { "@type": "Answer", "text": "No. A good AI consultant translates complex technology into business terms. We work with executives and teams at all technical levels, ensuring everyone understands the strategy and can participate in execution." }},
          { "@type": "Question", "name": "What is the difference between AI consulting and AI implementation?", "acceptedAnswer": { "@type": "Answer", "text": "AI consulting focuses on strategy, assessment, and planning — identifying where AI can add value. AI implementation is the hands-on deployment of tools, workflows, and systems. NLG Consulting offers both, from strategy through full execution." }}
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
        <title>AI Consulting for Business | Strategic AI Advisory | NLG Consulting</title>
        <meta name="description" content="Strategic AI consulting for businesses. We help companies understand AI, build a roadmap, and deploy intelligent systems across marketing, sales, and operations." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-consulting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-consulting" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-consulting" />
        <meta property="og:title" content="AI Consulting for Business | NLG Consulting" />
        <meta property="og:description" content="Strategic AI consulting for businesses. Understand AI, build a roadmap, and deploy intelligent systems." />
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
              <span className="text-gradient">Business Leaders</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The AI landscape is evolving rapidly — with breakthroughs from OpenAI, Anthropic, Google DeepMind, and others transforming what's possible. We help businesses cut through the noise, identify real opportunities, and deploy AI systems that generate measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a Free AI Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The AI Challenge for Business</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every industry is being reshaped by artificial intelligence. Yet most companies face the same challenge: they know AI matters, but they don't know where to start, which tools to use, or how to implement without disrupting existing operations.
              </p>
              <p>
                The market is flooded with AI tools — from ChatGPT and Claude to specialized platforms for marketing, sales, design, and data analysis. Without a clear strategy, businesses either invest in the wrong tools, underutilize what they buy, or delay action until competitors have already moved ahead.
              </p>
              <p>
                This is where strategic AI consulting makes the difference. Not just selecting tools, but understanding how AI fits into your business model, your team's capabilities, and your growth objectives.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Our AI Consulting Covers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A complete consulting framework — from initial assessment to full deployment.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Target className="w-5 h-5" />, title: "AI Readiness Assessment", desc: "Evaluate your current operations, identify automation opportunities, and assess your team's AI readiness." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "AI Strategy & Roadmap", desc: "Build a prioritized AI implementation plan tied to business objectives, timelines, and measurable KPIs." },
                { icon: <Brain className="w-5 h-5" />, title: "Tool & Platform Selection", desc: "Navigate the AI ecosystem — from LLMs to automation platforms — and select the right stack for your needs." },
                { icon: <Users className="w-5 h-5" />, title: "Team Training & Upskilling", desc: "Train your team on prompt engineering, AI workflows, and best practices for integrating AI into daily operations." },
                { icon: <Globe className="w-5 h-5" />, title: "Implementation Support", desc: "Hands-on deployment of AI systems — we build, configure, test, and optimize alongside your team." },
                { icon: <Building2 className="w-5 h-5" />, title: "Ongoing Advisory", desc: "Continuous strategic guidance as AI evolves — ensuring your business stays ahead of the curve." }
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
            <h2 className="text-center mb-10">Who AI Consulting Is For</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Founders & CEOs exploring AI for their business",
                "COOs looking to automate operations",
                "CMOs seeking AI-powered marketing systems",
                "Heads of Sales building AI-driven pipelines",
                "Startups wanting to build with AI from day one",
                "SMEs looking to compete with larger companies",
                "Agencies adding AI services to their offering",
                "Consulting firms transforming their delivery model"
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
            <h2 className="text-center mb-10">Our Consulting Methodology</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Discovery & Audit", desc: "We analyze your current operations, tech stack, team capabilities, and business goals to identify high-impact AI opportunities." },
                { step: "02", title: "Strategy & Roadmap", desc: "We build a prioritized AI roadmap with clear milestones, tool recommendations, and expected outcomes — not a generic slide deck, but a practical execution plan." },
                { step: "03", title: "Implementation & Deployment", desc: "Our team deploys the AI systems — configuring tools, building workflows, training your team, and ensuring everything works in your real environment." },
                { step: "04", title: "Optimization & Scaling", desc: "We monitor results, optimize performance, and progressively expand AI across additional processes and departments." }
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
              We're not a traditional consulting firm that delivers reports and walks away. We're operators who build and run AI systems — with real experience across PropTech, FinTech, SaaS, and B2B services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"><Link to="/about">About Our Team</Link></Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Automation", desc: "Turn strategy into execution — automate workflows across your business.", link: "/ai-automation" },
                { title: "AI Agents", desc: "Deploy AI agents that handle sales, marketing, and operations autonomously.", link: "/ai-agents-for-business" },
                { title: "Prompt Engineering", desc: "Expert training on prompt design and AI workflow optimization.", link: "/prompt-engineering-consulting" }
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
                { q: "What is AI consulting?", a: "AI consulting is a professional service that helps businesses understand how artificial intelligence can improve their operations, develop an AI strategy, and implement AI solutions. It bridges the gap between available AI technology and practical business applications." },
                { q: "Who needs AI consulting?", a: "Any business looking to improve efficiency, reduce costs, or gain competitive advantage through AI. This includes startups, SMEs, enterprises, agencies, and consulting firms across all industries." },
                { q: "How long does an AI consulting engagement take?", a: "Engagements vary from a focused 2-week AI audit and roadmap to ongoing implementation partnerships spanning several months. The timeline depends on the complexity of your operations and goals." },
                { q: "Do I need technical knowledge to work with an AI consultant?", a: "No. A good AI consultant translates complex technology into business terms. We work with executives and teams at all technical levels, ensuring everyone understands the strategy and can participate in execution." },
                { q: "What is the difference between AI consulting and AI implementation?", a: "AI consulting focuses on strategy, assessment, and planning — identifying where AI can add value. AI implementation is the hands-on deployment of tools, workflows, and systems. NLG Consulting offers both, from strategy through full execution." }
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
            <h2 className="mb-4">Start Your AI Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free 15-minute consultation to discuss your AI opportunities and challenges.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIConsulting;

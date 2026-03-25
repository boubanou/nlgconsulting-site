import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap, CheckCircle, Brain, Users, Target, Lightbulb, Settings } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const PromptEngineeringConsulting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Prompt Engineering Consulting & AI Workflow Design", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Operator-level prompt engineering consulting for B2B teams. Design production-grade AI prompts, build Claude & GPT workflows, and embed AI fluency into your operations.", "url": "https://www.nlgconsulting.co/prompt-engineering-consulting", "serviceType": "Prompt Engineering Consulting" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is prompt engineering consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Prompt engineering consulting helps businesses design production-grade instructions for AI models — turning generic AI interactions into reliable, repeatable systems that drive measurable outcomes in marketing, sales, operations, and content production." }},
        { "@type": "Question", "name": "Why is prompt engineering critical for business AI adoption?", "acceptedAnswer": { "@type": "Answer", "text": "The gap between mediocre and exceptional AI output is almost always the prompt. Well-engineered prompts improve output quality by 40-60%, reduce hallucinations, ensure brand consistency, and make the difference between AI as a toy and AI as operational infrastructure." }},
        { "@type": "Question", "name": "Can non-technical teams learn prompt engineering?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our programs are built for business operators — marketing, sales, strategy, and leadership teams. No coding required. We teach structured thinking and systematic prompt design, not programming." }},
        { "@type": "Question", "name": "How does prompt engineering relate to AI agents and workflows?", "acceptedAnswer": { "@type": "Answer", "text": "Prompt engineering is the foundation of every AI agent and automated workflow. The quality of your agents — whether built with Claude, GPT, or open-source models — depends directly on the quality of the prompts driving them." }},
        { "@type": "Question", "name": "What models do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "We train teams on Claude (Anthropic), GPT-4/5 (OpenAI), Gemini (Google), and open-source models. The techniques are model-agnostic — what matters is structured thinking, not memorizing API syntax." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Prompt Engineering Consulting", "item": "https://www.nlgconsulting.co/prompt-engineering-consulting" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Prompt Engineering Consulting | AI Workflow Design | NLG</title>
        <meta name="description" content="Operator-level prompt engineering consulting for B2B teams. Design production-grade prompts for Claude, GPT & Gemini. Build AI workflows that deliver real business outcomes." />
        <link rel="canonical" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <meta property="og:title" content="Prompt Engineering Consulting | AI Workflow Design | NLG" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Prompt Engineering</Badge>
            <h1 className="mb-6">Prompt Engineering{" "}<span className="text-gradient">for Business Operations</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The gap between AI as a novelty and AI as operational infrastructure is the prompt. We help B2B teams design production-grade prompts for Claude, GPT, and Gemini — turning AI tools into reliable systems that drive qualified meetings, content velocity, and workflow efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a Training Session <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">Why Prompt Engineering Is a Revenue Skill</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Most teams use AI at 10% of its potential. They write unstructured prompts, get generic outputs, and conclude that "AI isn't ready." The reality: the model is ready — the instructions aren't.</p>
              <p>Prompt engineering is the practice of designing precise, structured instructions that transform AI models into reliable business systems. Chain-of-thought reasoning, few-shot examples, role assignment, structured outputs, and iterative refinement — these techniques turn ChatGPT from a chatbot into an operational asset.</p>
              <p>For <Link to="/ai-for-saas" className="text-primary hover:underline">SaaS</Link>, <Link to="/ai-for-fintech" className="text-primary hover:underline">FinTech</Link>, and <Link to="/ai-for-b2b-services" className="text-primary hover:underline">B2B services</Link> companies, prompt engineering directly impacts content quality, outbound personalization, lead qualification accuracy, and founder productivity. It's not a nice-to-have — it's the foundation of every <Link to="/ai-agents-for-business" className="text-primary hover:underline">AI agent</Link> and <Link to="/ai-automation" className="text-primary hover:underline">automated workflow</Link> you deploy.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">What We Deliver</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <GraduationCap className="w-5 h-5" />, title: "Team Enablement Workshops", desc: "Half-day to multi-day programs teaching prompt engineering fundamentals and advanced techniques — tailored to your industry and use cases." },
                { icon: <Brain className="w-5 h-5" />, title: "Production Prompt Libraries", desc: "Custom prompt systems for your specific workflows — marketing, sales, operations, content — tested, versioned, and optimized for your business context." },
                { icon: <Settings className="w-5 h-5" />, title: "AI Workflow Architecture", desc: "Design multi-step AI workflows that chain prompts into end-to-end business processes — from lead enrichment to content production pipelines." },
                { icon: <Users className="w-5 h-5" />, title: "Executive AI Briefings", desc: "Strategic sessions for leadership on AI capabilities, limitations, and how to build operational AI fluency across the organization." },
                { icon: <Target className="w-5 h-5" />, title: "Use Case Development", desc: "Identify, prototype, and validate specific AI use cases — with tested prompts, expected outputs, quality benchmarks, and ROI estimates." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "Ongoing Advisory", desc: "Continuous support as models evolve — keeping your prompt systems current with Claude, GPT, Gemini, and agentic AI capabilities." }
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
            <h2 className="text-center mb-10">Who This Is For</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Growth and marketing teams building AI-powered content systems",
                "Sales teams deploying AI for outbound personalization and lead enrichment",
                "Operations teams embedding AI into daily workflows and processes",
                "Founders and executives who want to think clearly about AI strategy",
                "Agencies adding AI-powered delivery to their service offering",
                "Companies building internal AI competency before scaling automation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Build AI Fluency Into Your Operations</h2>
            <p className="text-lg opacity-90 mb-8">Book a discovery call to design a prompt engineering program tailored to your team's workflows and business objectives.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Full-spectrum AI strategy and growth systems architecture.", link: "/ai-consulting" },
                { title: "AI Workflow Automation", desc: "Deploy your prompt engineering skills into production automation.", link: "/ai-automation" },
                { title: "Outsourced AI Operations", desc: "We handle AI execution while your team builds fluency.", link: "/outsourced-ai-implementation" }
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
                { q: "What is prompt engineering consulting?", a: "It's the practice of designing production-grade instructions for AI models — turning generic AI interactions into reliable, repeatable systems that drive measurable business outcomes." },
                { q: "Why is prompt engineering critical for AI adoption?", a: "The gap between mediocre and exceptional AI output is almost always the prompt. Well-engineered prompts improve quality by 40-60%, reduce hallucinations, and make AI operationally useful rather than experimental." },
                { q: "Can non-technical teams learn this?", a: "Absolutely. Our programs are designed for business operators — marketing, sales, strategy, leadership. No coding required. We teach structured thinking and systematic prompt design." },
                { q: "How does this relate to AI agents and workflows?", a: "Prompt engineering is the foundation of every AI agent and automated workflow. The quality of your agentic systems depends directly on the quality of the prompts driving them." },
                { q: "What models do you cover?", a: "Claude (Anthropic), GPT-4/5 (OpenAI), Gemini (Google), and open-source models. The techniques are model-agnostic — what matters is structured thinking, not memorizing API syntax." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Make AI Work for Your Business</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to design a prompt engineering program aligned with your growth objectives.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default PromptEngineeringConsulting;
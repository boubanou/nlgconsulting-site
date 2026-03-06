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
      { "@type": "Service", "name": "Prompt Engineering Consulting", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Expert prompt engineering consulting and training for businesses. Learn to design effective AI prompts, build AI workflows, and upskill your team.", "url": "https://www.nlgconsulting.co/prompt-engineering-consulting", "serviceType": "Prompt Engineering Consulting" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is prompt engineering?", "acceptedAnswer": { "@type": "Answer", "text": "Prompt engineering is the practice of designing effective instructions for AI models to produce accurate, useful, and consistent outputs. It includes techniques like chain-of-thought reasoning, few-shot learning, role assignment, and structured output formatting." }},
        { "@type": "Question", "name": "Why does prompt engineering matter for business?", "acceptedAnswer": { "@type": "Answer", "text": "The quality of AI outputs depends directly on the quality of prompts. Well-engineered prompts can improve accuracy by 40-60%, reduce errors, ensure brand consistency, and make AI tools dramatically more useful for business applications." }},
        { "@type": "Question", "name": "Can prompt engineering be taught to non-technical teams?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Prompt engineering doesn't require coding skills. Our training programs are designed for marketing teams, sales teams, executives, and operational staff — teaching practical techniques they can apply immediately." }},
        { "@type": "Question", "name": "How long does prompt engineering training take?", "acceptedAnswer": { "@type": "Answer", "text": "Our training programs range from half-day workshops (fundamentals) to multi-week programs (advanced techniques and workflow design). Most teams see immediate improvement after a single focused session." }},
        { "@type": "Question", "name": "What's the difference between prompt engineering consulting and AI consulting?", "acceptedAnswer": { "@type": "Answer", "text": "AI consulting covers the full spectrum of AI strategy and implementation. Prompt engineering consulting is specifically focused on how to interact with AI models effectively — designing prompts, building prompt libraries, and training teams on best practices." }}
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
        <title>Prompt Engineering Consulting & Training | NLG Consulting</title>
        <meta name="description" content="Expert prompt engineering consulting and training for businesses. Learn to design effective AI prompts, build AI workflows, and upskill your team for AI adoption." />
        <link rel="canonical" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/conseil-prompt-engineering" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/prompt-engineering-consulting" />
        <meta property="og:title" content="Prompt Engineering Consulting & Training | NLG Consulting" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Prompt Engineering</Badge>
            <h1 className="mb-6">Prompt Engineering{" "}<span className="text-gradient">Consulting & Training</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The difference between mediocre and exceptional AI results lies in the prompts. We help businesses master prompt engineering — designing effective instructions for ChatGPT, Claude, Gemini, and other AI tools to produce consistently high-quality, business-relevant outputs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a Training Session <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">Why Prompt Engineering Matters</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>As Andrew Ng, one of the world's leading AI researchers, has noted — prompt engineering is becoming one of the most important skills for the AI era. The ability to communicate effectively with AI models determines the quality, relevance, and usefulness of their outputs.</p>
              <p>Most businesses use AI tools at a fraction of their potential. They write simple, unstructured prompts and get generic results. With proper prompt engineering techniques — chain-of-thought reasoning, few-shot examples, role assignment, structured outputs, and iterative refinement — the same tools produce dramatically better results.</p>
              <p>This isn't about becoming a programmer. It's about learning how to think clearly, communicate precisely, and design systematic approaches to getting consistent, high-quality outputs from AI tools your team already uses.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <GraduationCap className="w-5 h-5" />, title: "Team Training Workshops", desc: "Half-day to multi-day workshops teaching prompt engineering fundamentals and advanced techniques tailored to your industry." },
                { icon: <Brain className="w-5 h-5" />, title: "Prompt Library Design", desc: "Custom prompt libraries for your specific use cases — marketing, sales, operations, content — tested and optimized for your business context." },
                { icon: <Settings className="w-5 h-5" />, title: "AI Workflow Design", desc: "Design end-to-end AI workflows that chain multiple prompts together for complex multi-step business processes." },
                { icon: <Users className="w-5 h-5" />, title: "Executive Briefings", desc: "Strategic sessions for leadership teams on AI capabilities, limitations, and how to build an AI-first culture." },
                { icon: <Target className="w-5 h-5" />, title: "Use Case Development", desc: "Identify and develop specific AI use cases for your business — with tested prompts, expected outputs, and quality benchmarks." },
                { icon: <Lightbulb className="w-5 h-5" />, title: "Ongoing Advisory", desc: "Continuous support as AI evolves — keeping your team's prompt engineering skills current with the latest models and techniques." }
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
                "Marketing teams wanting to use AI for content creation",
                "Sales teams adopting AI for prospecting and outreach",
                "Operations teams automating workflows with AI",
                "Executives needing to understand AI capabilities",
                "Agencies adding AI to their service delivery",
                "Companies building internal AI competency"
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
            <h2 className="text-primary-foreground mb-4">Upskill Your Team</h2>
            <p className="text-lg opacity-90 mb-8">Book a discovery call to discuss a training program tailored to your team's needs.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Broader AI strategy and implementation consulting.", link: "/ai-consulting" },
                { title: "AI Automation", desc: "Put your prompt skills to work in automated workflows.", link: "/ai-automation" },
                { title: "Outsourced AI Implementation", desc: "Let us handle the AI execution while your team learns.", link: "/outsourced-ai-implementation" }
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
                { q: "What is prompt engineering?", a: "Prompt engineering is the practice of designing effective instructions for AI models to produce accurate, useful, and consistent outputs. It includes techniques like chain-of-thought reasoning, few-shot learning, role assignment, and structured output formatting." },
                { q: "Why does prompt engineering matter for business?", a: "Well-engineered prompts can improve accuracy by 40-60%, reduce errors, ensure brand consistency, and make AI tools dramatically more useful for business applications." },
                { q: "Can prompt engineering be taught to non-technical teams?", a: "Absolutely. Our training programs are designed for marketing, sales, executives, and operational staff — teaching practical techniques they can apply immediately." },
                { q: "How long does training take?", a: "Programs range from half-day workshops (fundamentals) to multi-week programs (advanced techniques and workflow design)." },
                { q: "What's the difference between prompt engineering consulting and AI consulting?", a: "AI consulting covers the full spectrum. Prompt engineering consulting is specifically focused on how to interact with AI models effectively." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Master Prompt Engineering</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to design a training program for your team.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default PromptEngineeringConsulting;

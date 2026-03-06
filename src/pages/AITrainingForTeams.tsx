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
      { "@type": "Service", "name": "AI Training for Business Teams", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "Hands-on AI training programs for business teams. Learn to use AI tools for marketing, sales, operations, and strategy. Custom workshops and ongoing coaching.", "url": "https://www.nlgconsulting.co/ai-training-for-teams", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What does AI training for teams include?", "acceptedAnswer": { "@type": "Answer", "text": "Our AI training covers practical AI tool usage, prompt engineering, workflow automation, and AI strategy — customized for your team's specific roles and industry." }},
        { "@type": "Question", "name": "How long does AI training take?", "acceptedAnswer": { "@type": "Answer", "text": "Programs range from 1-day intensive workshops to 4-week coaching programs, depending on team size and depth of training required." }}
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
        <title>AI Training for Business Teams | Workshops | NLG Consulting</title>
        <meta name="description" content="Hands-on AI training for business teams. Custom workshops on prompt engineering, AI tools, workflow automation, and AI strategy. Upskill your team in weeks." />
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
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Training</Badge>
            <h1 className="mb-6">AI Training for{" "}<span className="text-gradient">Business Teams</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your team doesn't need to become AI engineers — they need to become AI-fluent professionals who use the right tools to work 3-5x faster. Our hands-on training programs transform how your team works with AI, from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a Training Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Training programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "AI Fundamentals", desc: "Half-day workshop covering AI capabilities, limitations, and practical applications for your specific business context." },
                { icon: BookOpen, title: "Prompt Engineering", desc: "Full-day deep dive into crafting effective prompts for ChatGPT, Claude, and industry-specific AI tools." },
                { icon: Zap, title: "Workflow Automation", desc: "Hands-on training on building AI-powered workflows with Make, Zapier, and custom automation tools." },
                { icon: Target, title: "AI for Sales Teams", desc: "Practical training on AI prospecting, outreach personalization, CRM automation, and pipeline intelligence." },
                { icon: Lightbulb, title: "AI for Marketing", desc: "Content generation, SEO optimization, campaign automation, and data analysis using AI tools." },
                { icon: Users, title: "Leadership AI Strategy", desc: "Executive workshop on AI strategy, ROI assessment, risk management, and organizational transformation." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Why train with us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Practical, hands-on training — not theoretical lectures", "Customized to your industry, tools, and team roles", "Real business use cases from day one — participants leave with working AI workflows", "Follow-up coaching to ensure adoption and continuous improvement", "Trained 50+ professionals across SaaS, FinTech, consulting, and services", "Access to our curated library of AI prompts and automation templates"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Upskill your team with AI</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to design the right AI training program for your team.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What does AI training for teams include?", a: "Our training covers practical AI tool usage, prompt engineering, workflow automation, and AI strategy — customized for your team's specific roles and industry." },
                { q: "How long does AI training take?", a: "Programs range from 1-day intensive workshops to 4-week coaching programs, depending on team size and depth of training required." },
                { q: "Do participants need technical backgrounds?", a: "No. Our training is designed for business professionals — marketers, salespeople, managers, executives — not engineers. We focus on practical tool usage, not code." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to make your team AI-fluent?</h2><p className="text-lg text-muted-foreground mb-8">Book a free consultation to design your training program.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AITrainingForTeams;

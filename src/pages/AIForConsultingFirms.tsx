import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Brain, Users, Lightbulb, FileText, TrendingUp, CheckCircle, Target } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIForConsultingFirms = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Operational Systems for Consulting Firms", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and operational systems for consulting firms and professional services. Research acceleration, proposal automation, thought leadership and business development.", "url": "https://www.nlgconsulting.co/ai-for-consulting-firms", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can consulting firms deploy AI?", "acceptedAnswer": { "@type": "Answer", "text": "Consulting firms deploy AI to accelerate research, automate proposal generation, produce client deliverables faster, scale thought leadership content, structure business development outreach and improve knowledge management." }},
        { "@type": "Question", "name": "Does AI replace consultants?", "acceptedAnswer": { "@type": "Answer", "text": "AI augments consultants by handling data gathering, analysis and repetitive production — freeing senior practitioners to focus on strategic thinking, client relationships and high-value advisory work." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for Consulting Firms", "item": "https://www.nlgconsulting.co/ai-for-consulting-firms" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Operational Systems for Consulting Firms | NLG</title>
        <meta name="description" content="AI systems for consulting firms. Research acceleration, proposal automation, thought leadership production and business development. Built by consultants, for consultants." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-cabinets-de-conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Consulting Firms</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Operational Systems for Consulting Firms</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leading consulting firms are integrating AI to accelerate research, produce deliverables faster and scale their practices. We help consulting firms deploy AI systems that augment senior practitioners — maintaining strategic depth while improving operational leverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your Firm's AI Strategy <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Where AI Creates Leverage in Consulting</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Research & Analysis", desc: "AI-accelerated market research, competitive analysis and data synthesis — compressing research timelines significantly." },
                { icon: FileText, title: "Proposals & Pitches", desc: "AI-assisted proposal writing, case study compilation and pitch materials tailored to each prospect and engagement." },
                { icon: Lightbulb, title: "Deliverable Production", desc: "Faster report generation, data visualisation, executive summaries and strategic recommendation documents." },
                { icon: TrendingUp, title: "Business Development", desc: "Structured prospect research, personalised outreach and thought leadership content that drives qualified inbound." },
                { icon: Users, title: "Knowledge Management", desc: "AI-powered internal knowledge systems that capture institutional expertise and make it searchable across the firm." },
                { icon: Target, title: "Thought Leadership", desc: "Scaled content production — articles, whitepapers, LinkedIn posts — that positions your firm as a trusted authority." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Built by Consultants, for Consultants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "We are a consulting firm — we understand the business model, margins and client expectations",
                "AI implementations designed for knowledge-intensive, relationship-driven workflows",
                "Focus on augmenting senior practitioners, not replacing strategic thinking",
                "Experience with strategy, management, boutique and specialist consulting firms",
                "Prompt engineering expertise for high-quality, on-brand deliverable production",
                "Confidentiality and data security built into every implementation"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How can consulting firms deploy AI?", a: "Research acceleration, proposal automation, deliverable production, thought leadership content, business development outreach and knowledge management systems." },
                { q: "Does AI replace consultants?", a: "AI augments consultants by handling data gathering, analysis and repetitive production — freeing practitioners to focus on strategic thinking and client relationships." },
                { q: "How do you ensure confidentiality?", a: "We implement AI systems with strict data handling protocols, enterprise-grade security and can work within your firm's existing compliance and information security frameworks." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4"><div className="container mx-auto max-w-3xl text-center"><h2 className="text-3xl font-bold mb-4">Discuss Your Firm's AI Strategy</h2><p className="text-lg text-muted-foreground mb-8">If you want to deploy AI systems that improve your firm's operational leverage and delivery capacity, we welcome a focused conversation.</p><Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForConsultingFirms;
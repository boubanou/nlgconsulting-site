import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Briefcase, TrendingUp, Users, Zap, Bot, FileText, CheckCircle } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIForB2BServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Growth Systems for B2B Service Companies", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting, workflow automation and revenue operations for B2B service companies. Outbound systems, operational automation, content production and commercial performance.", "url": "https://www.nlgconsulting.co/ai-for-b2b-services", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can B2B service companies use AI?", "acceptedAnswer": { "@type": "Answer", "text": "B2B service companies deploy AI for outbound prospecting, proposal automation, client onboarding, content production, operational reporting and service delivery augmentation — maintaining personal touch while scaling operations." }},
        { "@type": "Question", "name": "What is the commercial impact of AI for B2B services?", "acceptedAnswer": { "@type": "Answer", "text": "B2B service companies typically see meaningful time savings on administrative tasks, improved content output velocity, faster lead response and better pipeline visibility — all translating to improved commercial performance." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for B2B Services", "item": "https://www.nlgconsulting.co/ai-for-b2b-services" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Growth Systems for B2B Services | NLG Consulting</title>
        <meta name="description" content="AI consulting and revenue operations for B2B service companies. Outbound systems, operational automation, content production and commercial performance improvement." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-services-b2b" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">B2B Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Growth Systems for B2B Service Companies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              B2B service companies that deploy AI gain structural advantage — automating the repetitive, scaling operations and delivering more value to clients without proportional team growth. We understand the model because we operate one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your Growth Structure <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Where AI Creates Leverage in B2B Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, title: "Outbound & Pipeline", desc: "Structured prospecting, lead qualification, personalised outreach and follow-up systems that maintain consistent pipeline flow." },
                { icon: FileText, title: "Proposals & Scoping", desc: "AI-assisted proposal writing, scope definition and pitch materials — reducing turnaround from days to hours." },
                { icon: Users, title: "Client Onboarding", desc: "Automated welcome sequences, document collection, project setup and stakeholder communication workflows." },
                { icon: Bot, title: "Content & Authority", desc: "Thought leadership, case studies, LinkedIn content and newsletters produced at scale with consistent positioning." },
                { icon: Zap, title: "Operational Systems", desc: "Project tracking, time management, invoicing and reporting — eliminating admin that erodes billable capacity." },
                { icon: Briefcase, title: "Service Delivery", desc: "AI-augmented research, analysis and deliverable creation that improves quality and reduces delivery time." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Why B2B Service Firms Choose NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "We are a B2B service company — we understand the business model and its constraints",
                "AI that integrates with your existing CRM, project management and communication tools",
                "Focus on improving margins without sacrificing the service quality clients expect",
                "Practical, commercially-driven implementations — not theoretical AI roadmaps",
                "Experience across consulting, professional services and technology services",
                "Bilingual delivery for international service companies"
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
                { q: "How can B2B service companies use AI?", a: "Outbound prospecting, proposal automation, client onboarding, content production, operational reporting and service delivery augmentation — maintaining personal touch while scaling operations." },
                { q: "What is the commercial impact?", a: "Meaningful time savings on administrative tasks, improved content velocity, faster lead response and better pipeline visibility — translating to improved margins and commercial performance." },
                { q: "Will AI integrate with our existing tools?", a: "Yes. We integrate AI with your CRM, project management, communication and billing tools to create a coherent operational system." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4"><div className="container mx-auto max-w-3xl text-center"><h2 className="text-3xl font-bold mb-4">Discuss Your Service Business Growth</h2><p className="text-lg text-muted-foreground mb-8">If you want to deploy AI systems that improve your margins, delivery capacity and commercial performance, we welcome the conversation.</p><Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForB2BServices;
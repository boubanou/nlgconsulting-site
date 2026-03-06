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
      { "@type": "Service", "name": "AI for B2B Service Companies", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and automation for B2B service companies. Streamline operations, automate sales, scale marketing, and improve delivery with AI.", "url": "https://www.nlgconsulting.co/ai-for-b2b-services", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can B2B service companies use AI?", "acceptedAnswer": { "@type": "Answer", "text": "B2B service companies can use AI to automate lead generation, streamline proposals, improve client onboarding, scale content marketing, automate reporting, and optimize operations — all while maintaining the personal touch clients expect." }},
        { "@type": "Question", "name": "What's the ROI of AI for B2B services?", "acceptedAnswer": { "@type": "Answer", "text": "B2B service companies typically see 30-60% time savings on administrative and repetitive tasks, 2-3x increase in content output, and 40-70% improvement in lead response times through AI automation." }}
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
        <title>AI for B2B Service Companies | Operations & Growth | NLG Consulting</title>
        <meta name="description" content="AI consulting and automation for B2B service companies. Automate sales, marketing, operations, and delivery. Scale your service business with intelligent systems." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-services-b2b" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-b2b-services" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">B2B Services</Badge>
            <h1 className="mb-6">AI for{" "}<span className="text-gradient">B2B Service Companies</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              B2B service companies that embrace AI gain a structural advantage — automating the repetitive, scaling the valuable, and delivering more to clients without proportional team growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a B2B AI Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Where AI transforms B2B services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, title: "Sales & Pipeline", desc: "Automated prospecting, lead qualification, personalized outreach, and follow-up sequences that keep your pipeline full." },
                { icon: FileText, title: "Proposals & Contracts", desc: "AI-assisted proposal writing, scope definition, and contract generation — reducing turnaround from days to hours." },
                { icon: Users, title: "Client Onboarding", desc: "Automated welcome sequences, document collection, project setup, and stakeholder communication." },
                { icon: Bot, title: "Content Marketing", desc: "Blog posts, case studies, LinkedIn content, newsletters — all created at scale with your brand voice." },
                { icon: Zap, title: "Operations", desc: "Project tracking, time management, invoicing, reporting — eliminate the admin that eats into billable hours." },
                { icon: Briefcase, title: "Service Delivery", desc: "AI-augmented research, analysis, and deliverable creation — deliver higher quality faster." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Why B2B service firms choose NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["We are a B2B service company — we understand your business model", "AI that integrates with your existing CRM, PM, and communication tools", "Focus on improving margins without sacrificing service quality", "Practical, results-driven implementations — not theoretical AI roadmaps", "Experience across consulting, agencies, professional services, and tech services", "Bilingual delivery for international service companies"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Scale your services with AI</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to explore how AI can transform your B2B service business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Automation", desc: "Automate your service delivery workflows.", link: "/ai-automation" },
                { title: "AI Sales Automation", desc: "Fill your pipeline with AI-powered outbound.", link: "/ai-sales-automation" },
                { title: "Outsourced AI Implementation", desc: "Let us handle AI execution for your business.", link: "/outsourced-ai-implementation" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group"><Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How can B2B service companies use AI?", a: "B2B service companies can use AI to automate lead generation, streamline proposals, improve client onboarding, scale content marketing, automate reporting, and optimize operations." },
                { q: "What's the ROI of AI for B2B services?", a: "B2B service companies typically see 30-60% time savings on administrative and repetitive tasks, 2-3x increase in content output, and 40-70% improvement in lead response times." },
                { q: "Will AI work with our existing tools?", a: "Yes. We integrate AI with your existing CRM (HubSpot, Salesforce), project management (Notion, Asana), communication (Slack, Teams), and other tools." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to transform your service business?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForB2BServices;

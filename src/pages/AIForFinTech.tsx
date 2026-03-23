import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Shield, TrendingUp, Zap, Users, Bot, BarChart3, CheckCircle, CreditCard } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIForFinTech = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI-Powered Growth Systems for FinTech", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting, workflow automation and revenue operations for FinTech companies. Compliance automation, outbound systems, AI agents and commercial performance.", "url": "https://www.nlgconsulting.co/ai-for-fintech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can AI improve FinTech commercial performance?", "acceptedAnswer": { "@type": "Answer", "text": "AI enables FinTech companies to automate compliance workflows, build structured outbound systems, deploy AI agents for customer operations, and create measurable pipeline infrastructure — connecting operational efficiency to revenue growth." }},
        { "@type": "Question", "name": "What makes NLG different for FinTech?", "acceptedAnswer": { "@type": "Answer", "text": "NLG's founder has direct operating experience with FinTech platforms including payment processing, trading and compliance environments. We understand regulatory constraints and build AI systems that respect them." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for FinTech", "item": "https://www.nlgconsulting.co/ai-for-fintech" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Growth Systems for FinTech | NLG Consulting</title>
        <meta name="description" content="AI consulting, workflow automation and revenue operations for FinTech. Compliance automation, outbound systems, AI agents and commercial performance. Operator-led." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-fintech" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">FinTech</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Growth Systems for FinTech Companies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              FinTech companies operate where speed, compliance and trust intersect. We help FinTech operators deploy AI workflows, build outbound infrastructure, automate compliance processes and create revenue systems that scale — with the regulatory awareness financial services require.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your FinTech Growth <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Where AI Creates Leverage in FinTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Compliance & KYC Automation", desc: "AI-powered identity verification, document processing and regulatory workflows that reduce manual review while maintaining audit integrity." },
                { icon: CreditCard, title: "Fraud & Risk Intelligence", desc: "Transaction monitoring, anomaly detection and risk scoring systems that identify suspicious patterns without creating false positive overload." },
                { icon: Users, title: "Outbound & Pipeline", desc: "Structured prospecting systems for B2B FinTech — targeting financial institutions, payment processors and enterprise buyers with qualified outreach." },
                { icon: Bot, title: "AI Agents for Operations", desc: "Agentic workflows for customer onboarding, support triage, portfolio reporting and operational tasks that scale without proportional headcount." },
                { icon: TrendingUp, title: "Revenue Operations", desc: "CRM workflows, pipeline visibility, lead scoring and commercial reporting designed for FinTech sales cycles and regulatory environments." },
                { icon: BarChart3, title: "Market Intelligence", desc: "AI-driven competitive research, market sizing and trend analysis to inform product strategy and GTM decisions." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Operator-Level FinTech Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Direct operating experience with FinTech platforms — payments, trading, compliance environments",
                "Understanding of financial regulations, data security requirements and audit trail obligations",
                "AI systems designed with regulatory guardrails built in from the start",
                "Revenue infrastructure tailored to FinTech sales cycles and enterprise buyer personas",
                "International experience across European, Middle Eastern and North American financial markets",
                "Combined AI consulting, RevOps and GTM strategy specifically for financial technology"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Related Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Strategic AI advisory for FinTech operations and growth.", link: "/ai-consulting" },
                { title: "AI Automation", desc: "Workflow automation for compliance and commercial processes.", link: "/ai-automation" },
                { title: "Revenue Infrastructure", desc: "Outbound systems and pipeline architecture for FinTech.", link: "/sales" }
              ].map((item, i) => (
                <Link to={item.link} key={i}><Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How can AI improve FinTech commercial performance?", a: "AI enables FinTech companies to automate compliance workflows, build structured outbound systems, deploy AI agents for customer operations, and create measurable pipeline infrastructure — connecting operational efficiency to revenue growth." },
                { q: "Is AI safe for regulated financial services?", a: "When implemented with proper guardrails. AI in FinTech requires attention to data security, regulatory compliance and audit trails — all built into our implementations from the design phase." },
                { q: "What makes NLG different for FinTech?", a: "Direct operator experience with FinTech platforms, understanding of regulatory constraints, and a combined AI + RevOps approach that connects technology to commercial outcomes." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Discuss Your FinTech Growth Structure</h2>
            <p className="text-lg text-muted-foreground mb-8">If you are building or scaling a FinTech company and want to deploy AI systems that connect to real commercial outcomes, we welcome the conversation.</p>
            <Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForFinTech;
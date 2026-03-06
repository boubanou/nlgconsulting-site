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
      { "@type": "Service", "name": "AI for FinTech Companies", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and automation for FinTech companies. Compliance automation, fraud detection, customer onboarding, and growth systems.", "url": "https://www.nlgconsulting.co/ai-for-fintech", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can AI help FinTech companies?", "acceptedAnswer": { "@type": "Answer", "text": "AI helps FinTech companies with KYC automation, fraud detection, customer support, risk assessment, regulatory compliance, content marketing, and sales automation." }},
        { "@type": "Question", "name": "Is AI safe for financial services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when implemented with proper guardrails. AI in FinTech requires attention to data security, regulatory compliance, and audit trails — all of which we build into our implementations." }}
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
        <title>AI for FinTech Companies | Automation & Compliance | NLG Consulting</title>
        <meta name="description" content="AI consulting and automation for FinTech companies. KYC automation, fraud detection, compliance, customer onboarding, and growth systems powered by AI." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-fintech" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-fintech" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">FinTech</Badge>
            <h1 className="mb-6">AI for{" "}<span className="text-gradient">FinTech Companies</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              FinTech companies operate in a landscape where speed, compliance, and trust are paramount. AI enables faster KYC processes, smarter fraud detection, automated compliance, and scalable growth — while maintaining the security standards financial services demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a FinTech AI Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">AI applications in FinTech</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "KYC & Compliance", desc: "Automated identity verification, document processing, and regulatory compliance checks that reduce manual review time by 80%+." },
                { icon: CreditCard, title: "Fraud Detection", desc: "AI-powered transaction monitoring and anomaly detection that identifies suspicious patterns in real-time." },
                { icon: Users, title: "Customer Onboarding", desc: "Streamlined onboarding flows with AI-assisted document verification, risk assessment, and personalized welcome sequences." },
                { icon: Bot, title: "Intelligent Support", desc: "AI chatbots trained on financial products and regulations that handle customer queries while maintaining compliance." },
                { icon: TrendingUp, title: "Growth & Sales", desc: "Automated lead generation, qualification, and outreach for B2B FinTech products — reaching the right decision-makers." },
                { icon: BarChart3, title: "Risk Assessment", desc: "AI models for credit scoring, risk profiling, and portfolio analysis that enhance decision-making accuracy." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Our FinTech expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Direct experience in FinTech — NLG's founder worked with Revolut, Wise, eToro, and payment platforms", "Understanding of financial regulations and compliance requirements", "AI implementations designed with security, audit trails, and data protection in mind", "Growth systems tailored to FinTech sales cycles and buyer personas", "International experience across European and global financial markets", "Combined AI + business strategy specifically for financial technology"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Accelerate your FinTech with AI</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to explore AI opportunities in your financial technology business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Strategic AI consulting for FinTech companies.", link: "/ai-consulting" },
                { title: "AI Automation", desc: "Automate compliance and operational workflows.", link: "/ai-automation" },
                { title: "AI Sales Automation", desc: "Scale your FinTech sales pipeline with AI.", link: "/ai-sales-automation" }
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
                { q: "How can AI help FinTech companies?", a: "AI helps FinTech companies with KYC automation, fraud detection, customer support, risk assessment, regulatory compliance, content marketing, and sales automation." },
                { q: "Is AI safe for financial services?", a: "Yes, when implemented with proper guardrails. AI in FinTech requires attention to data security, regulatory compliance, and audit trails — all of which we build into our implementations." },
                { q: "What tools do you use for FinTech AI?", a: "We use OpenAI and Anthropic models for content and analysis, Make/Zapier for workflow automation, and custom integrations with banking APIs, CRM systems, and compliance platforms." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to bring AI into your FinTech?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForFinTech;

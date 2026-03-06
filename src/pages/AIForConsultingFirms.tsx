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
      { "@type": "Service", "name": "AI for Consulting Firms", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and automation for consulting firms and professional services. Automate research, proposals, deliverables, and business development.", "url": "https://www.nlgconsulting.co/ai-for-consulting-firms", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can consulting firms use AI?", "acceptedAnswer": { "@type": "Answer", "text": "Consulting firms can use AI to accelerate research, automate proposal generation, create client deliverables faster, scale thought leadership content, automate BD outreach, and improve project management." }},
        { "@type": "Question", "name": "Will AI replace consultants?", "acceptedAnswer": { "@type": "Answer", "text": "AI augments consultants rather than replacing them. It handles data gathering, analysis, and repetitive tasks — freeing consultants to focus on strategic thinking, client relationships, and high-value advisory." }}
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
        <title>AI for Consulting Firms | Automate Research & Delivery | NLG Consulting</title>
        <meta name="description" content="AI solutions for consulting firms. Automate research, proposals, deliverables, thought leadership, and business development with AI-powered systems." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-cabinets-de-conseil" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-consulting-firms" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Consulting</Badge>
            <h1 className="mb-6">AI for{" "}<span className="text-gradient">Consulting Firms</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leading consulting firms are integrating AI to work faster, deliver more value, and scale their practices. From automated research to AI-assisted deliverables, we help consulting firms modernize their operations without losing the strategic depth clients expect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Where AI transforms consulting</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Research & Analysis", desc: "AI-accelerated market research, competitive analysis, and data synthesis — reducing research time from days to hours." },
                { icon: FileText, title: "Proposal Generation", desc: "AI-assisted proposal writing, case study compilation, and pitch deck creation tailored to each prospect." },
                { icon: Lightbulb, title: "Deliverables & Reports", desc: "Faster report generation, data visualization, executive summaries, and strategic recommendation documents." },
                { icon: TrendingUp, title: "Business Development", desc: "Automated prospect research, personalized outreach, and thought leadership content that drives inbound leads." },
                { icon: Users, title: "Knowledge Management", desc: "AI-powered internal knowledge bases that capture institutional knowledge and make it searchable across the firm." },
                { icon: Target, title: "Thought Leadership", desc: "Scaled content creation — articles, whitepapers, LinkedIn posts — that positions your firm as an industry authority." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Why consulting firms choose NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["We are a consulting firm ourselves — we understand the business model", "AI implementations designed for knowledge-intensive workflows", "Focus on augmenting consultants, not replacing them", "Experience with strategy, management, and boutique consulting firms", "Prompt engineering expertise for high-quality, on-brand deliverables", "Confidentiality and data security built into every implementation"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Modernize your consulting practice</h2>
            <p className="text-lg opacity-90 mb-8">Book a call to explore how AI can enhance your firm's capabilities.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Strategic AI advisory for your firm's transformation.", link: "/ai-consulting" },
                { title: "Prompt Engineering", desc: "Train your consultants to master AI tools.", link: "/prompt-engineering-consulting" },
                { title: "Outsourced AI Implementation", desc: "We handle the AI execution so you can focus on clients.", link: "/outsourced-ai-implementation" }
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
                { q: "How can consulting firms use AI?", a: "Consulting firms can use AI to accelerate research, automate proposal generation, create client deliverables faster, scale thought leadership content, automate BD outreach, and improve project management." },
                { q: "Will AI replace consultants?", a: "AI augments consultants rather than replacing them. It handles data gathering, analysis, and repetitive tasks — freeing consultants to focus on strategic thinking, client relationships, and high-value advisory." },
                { q: "How do you ensure confidentiality?", a: "We implement AI systems with strict data handling protocols, use enterprise-grade tools with appropriate security certifications, and can work within your firm's existing security frameworks." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to bring AI into your firm?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForConsultingFirms;

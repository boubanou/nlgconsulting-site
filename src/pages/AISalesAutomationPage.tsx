import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, CheckCircle, Search, Mail, Phone, Users, BarChart3, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AISalesAutomationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Sales Automation", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "AI-powered sales automation: SDR automation, lead generation, outbound sequences, and pipeline management for B2B companies.", "url": "https://www.nlgconsulting.co/ai-sales-automation", "serviceType": "AI Sales Automation" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is AI sales automation?", "acceptedAnswer": { "@type": "Answer", "text": "AI sales automation uses artificial intelligence to automate sales development activities — prospecting, lead research, personalized outreach, follow-ups, and pipeline management. It helps B2B teams generate more meetings with less manual effort." }},
        { "@type": "Question", "name": "Can AI replace SDRs?", "acceptedAnswer": { "@type": "Answer", "text": "AI can handle many SDR tasks — research, email writing, follow-ups, data entry — but the most effective approach combines AI automation with human relationship-building. AI handles the volume; humans handle the nuance." }},
        { "@type": "Question", "name": "What tools do you use for AI sales automation?", "acceptedAnswer": { "@type": "Answer", "text": "We integrate tools like Clay, Apollo, LinkedIn Sales Navigator, HubSpot, Salesforce, Instantly, Lemlist, and custom AI pipelines to build end-to-end sales automation systems." }},
        { "@type": "Question", "name": "How many meetings can AI sales automation generate?", "acceptedAnswer": { "@type": "Answer", "text": "Results vary by industry and ICP, but our clients typically see 15-30+ qualified meetings per month through AI-enhanced outbound systems. The key is combining high-quality data, intelligent personalization, and multichannel outreach." }},
        { "@type": "Question", "name": "Is AI sales outreach considered spam?", "acceptedAnswer": { "@type": "Answer", "text": "Not when done correctly. AI-powered outreach that is personalized, relevant, and targeted to the right audience performs better than generic mass emails. The key is using AI for intelligent personalization, not for higher volume of low-quality messages." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Sales Automation", "item": "https://www.nlgconsulting.co/ai-sales-automation" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Sales Automation | SDR & Pipeline Automation | NLG Consulting</title>
        <meta name="description" content="AI-powered sales automation for B2B companies. Automated prospecting, AI SDR, personalized outreach, and pipeline management. 15-30+ meetings per month." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-sales-automation" />
        <meta property="og:title" content="AI Sales Automation | NLG Consulting" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Sales</Badge>
            <h1 className="mb-6">AI Sales{" "}<span className="text-gradient">Automation</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI-powered prospecting, personalized outreach, automated follow-ups, and intelligent pipeline management. We build sales automation systems that generate 15-30+ qualified B2B meetings per month — without scaling your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Get a Sales Automation Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The B2B Sales Challenge</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>B2B sales teams face a fundamental scalability problem. Hiring SDRs is expensive ($50-80K+ per head), training takes months, and turnover is high. Meanwhile, prospects are harder to reach than ever — inboxes are crowded, phone connections are declining, and generic outreach gets ignored.</p>
              <p>AI is transforming this equation. Tools like Clay for data enrichment, Apollo and LinkedIn Sales Navigator for prospecting, and AI models for personalized message generation make it possible to build sales systems that operate at scale with precision — researching prospects, writing tailored outreach, and managing follow-up sequences intelligently.</p>
              <p>The companies winning in B2B outbound today aren't just sending more emails — they're using AI to send better, more relevant, more personalized messages to better-qualified prospects across multiple channels.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Our AI Sales Automation Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Search className="w-5 h-5" />, title: "AI Prospecting", desc: "Intelligent lead sourcing and enrichment using Clay, Apollo, LinkedIn, and custom data pipelines — finding your ideal customers at scale." },
                { icon: <Mail className="w-5 h-5" />, title: "Personalized Outreach", desc: "AI-written, individually personalized emails and LinkedIn messages — not templates, but genuinely relevant messages based on prospect data." },
                { icon: <Phone className="w-5 h-5" />, title: "Multichannel Sequences", desc: "Coordinated outreach across email, LinkedIn, and phone — with AI-optimized timing, frequency, and message variation." },
                { icon: <Users className="w-5 h-5" />, title: "AI SDR Systems", desc: "Full SDR workflow automation — from lead qualification to meeting booking — with human oversight at key decision points." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Pipeline Management", desc: "Automated CRM updates, deal tracking, and pipeline analytics — keeping your HubSpot or Salesforce always up to date." },
                { icon: <Target className="w-5 h-5" />, title: "ICP Refinement", desc: "Continuous AI-powered analysis of what's working — refining your ideal customer profile and messaging based on real response data." }
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
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { metric: "15-30+", label: "Qualified meetings per month" },
                { metric: "3+", label: "Outreach channels" },
                { metric: "< 30 days", label: "To first meetings" }
              ].map((item, i) => (
                <Card key={i} className="border border-border"><CardContent className="p-6">
                  <div className="text-3xl font-semibold text-primary mb-1">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Build Your AI Sales Machine</h2>
            <p className="text-lg opacity-90 mb-8">Book a free audit to discover how AI can transform your sales pipeline.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Sales Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Outsourced SDR", desc: "Full-service outsourced sales development with human SDRs.", link: "/outsourced-sdr" },
                { title: "AI Agents for Sales", desc: "Autonomous AI agents that handle prospecting and outreach.", link: "/ai-agents-for-business" },
                { title: "AI Marketing Automation", desc: "Complement your sales with AI-powered marketing.", link: "/ai-marketing-automation" }
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
                { q: "What is AI sales automation?", a: "AI sales automation uses artificial intelligence to automate sales development activities — prospecting, lead research, personalized outreach, follow-ups, and pipeline management." },
                { q: "Can AI replace SDRs?", a: "AI can handle many SDR tasks — research, email writing, follow-ups, data entry — but the most effective approach combines AI automation with human relationship-building." },
                { q: "What tools do you use?", a: "We integrate Clay, Apollo, LinkedIn Sales Navigator, HubSpot, Salesforce, Instantly, Lemlist, and custom AI pipelines." },
                { q: "How many meetings can AI sales automation generate?", a: "Clients typically see 15-30+ qualified meetings per month through AI-enhanced outbound systems." },
                { q: "Is AI sales outreach considered spam?", a: "Not when done correctly. AI-powered outreach that is personalized, relevant, and targeted to the right audience performs better than generic mass emails." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Ready to Automate Your Sales?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to discuss your sales automation needs.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AISalesAutomationPage;

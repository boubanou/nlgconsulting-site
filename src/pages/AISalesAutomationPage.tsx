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
      { "@type": "Service", "name": "AI Sales Automation — Pipeline & Revenue Systems", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "AI-powered sales automation for B2B pipeline generation. Automated prospecting, AI-enhanced outreach, multichannel sequences, and pipeline management systems for FinTech, PropTech, and B2B companies.", "url": "https://www.nlgconsulting.co/ai-sales-automation", "serviceType": "AI Sales Automation" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is AI sales automation?", "acceptedAnswer": { "@type": "Answer", "text": "AI sales automation uses artificial intelligence to systematise sales development activities — prospecting, lead research, personalised outreach, follow-up management, and pipeline tracking. It creates consistent pipeline generation with higher quality and lower manual overhead than traditional SDR operations." }},
        { "@type": "Question", "name": "How does AI sales automation differ from outsourced SDR?", "acceptedAnswer": { "@type": "Answer", "text": "Outsourced SDR provides human sales development representatives. AI sales automation provides the systems and workflows that either augment human SDRs or operate independently. Many companies combine both — using AI automation for scale and human SDRs for relationship-building and complex qualification." }},
        { "@type": "Question", "name": "What tools power AI sales automation?", "acceptedAnswer": { "@type": "Answer", "text": "We integrate Clay for data enrichment, Apollo and LinkedIn Sales Navigator for prospecting, HubSpot and Salesforce for CRM, Instantly and Lemlist for outreach, and AI models from OpenAI and Anthropic for message personalisation and lead qualification." }},
        { "@type": "Question", "name": "What kind of results can AI sales automation deliver?", "acceptedAnswer": { "@type": "Answer", "text": "Results depend on ICP clarity, market positioning, and offer strength. Well-designed AI sales systems typically generate 15–30+ qualified meetings per month, with clearer pipeline visibility and more consistent outbound activity than manual processes." }},
        { "@type": "Question", "name": "Is AI-personalised outreach considered spam?", "acceptedAnswer": { "@type": "Answer", "text": "Not when designed correctly. AI-personalised outreach that is relevant, targeted, and based on genuine prospect research outperforms generic mass emails. The key is using AI for quality personalisation, not for higher volume of low-quality messages." }}
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
        <title>AI Sales Automation | Pipeline & Revenue Systems | NLG</title>
        <meta name="description" content="AI-powered sales automation for B2B pipeline generation. Automated prospecting, personalised outreach, multichannel sequences, and pipeline management for FinTech, PropTech & B2B." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-commerciale-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-sales-automation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-sales-automation" />
        <meta property="og:title" content="AI Sales Automation | Pipeline & Revenue Systems | NLG" />
        <meta property="og:description" content="AI-powered sales automation: prospecting, outreach, and pipeline systems for B2B companies." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Sales Systems</Badge>
            <h1 className="mb-6">AI-Powered Sales{" "}<span className="text-gradient">& Pipeline Automation</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We build AI-enhanced sales systems that handle prospecting, personalised outreach, multichannel sequences, and pipeline management — creating consistent, qualified meeting flow with clearer commercial visibility and lower operational overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Assess Your Sales Operations <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The B2B Pipeline Challenge</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Pipeline generation is the engine of B2B growth — but most companies struggle to build it consistently. Hiring SDRs is expensive, training takes months, and turnover disrupts momentum. Meanwhile, prospects receive dozens of generic outreach messages daily, making relevance and quality more important than volume.</p>
              <p>AI sales automation addresses this by combining intelligent prospecting, data enrichment, and personalised outreach into systems that run consistently. Tools like Clay for data intelligence, Apollo and LinkedIn Sales Navigator for prospecting, and AI models for message personalisation create pipeline infrastructure that operates at scale with precision.</p>
              <p>The companies building the strongest pipelines today aren't simply sending more messages. They're using <Link to="/ai-consulting" className="text-primary hover:underline">AI-powered systems</Link> to send better, more relevant outreach to better-qualified prospects across multiple channels — with the commercial discipline of a well-structured <Link to="/sales" className="text-primary hover:underline">revenue operation</Link>.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Sales Automation Architecture</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Search className="w-5 h-5" />, title: "Intelligent Prospecting", desc: "AI-powered lead sourcing and identification using Clay, Apollo, and LinkedIn — finding qualified prospects based on firmographic, technographic, and intent signals." },
                { icon: <Mail className="w-5 h-5" />, title: "Personalised Outreach", desc: "AI-written, individually personalised messages based on prospect data, company context, and industry relevance — not templates, but genuinely tailored communication." },
                { icon: <Phone className="w-5 h-5" />, title: "Multichannel Sequences", desc: "Coordinated outreach across email, LinkedIn, and phone — with AI-optimised timing, sequencing, and message variation for each channel." },
                { icon: <Users className="w-5 h-5" />, title: "AI-Enhanced SDR Workflows", desc: "Complete SDR workflow automation — from lead qualification to meeting booking — with human oversight at qualification and complex decision points." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Pipeline Management & CRM", desc: "Automated CRM updates, deal tracking, pipeline reporting, and performance analytics — keeping your HubSpot or Salesforce always current and leadership always informed." },
                { icon: <Target className="w-5 h-5" />, title: "ICP Refinement & Optimisation", desc: "Continuous AI analysis of response data, conversion patterns, and deal outcomes — progressively sharpening your ideal customer profile and messaging strategy." }
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
                { metric: "15–30+", label: "Qualified meetings per month" },
                { metric: "3+", label: "Coordinated outreach channels" },
                { metric: "< 30 days", label: "To first qualified meetings" }
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
            <h2 className="text-primary-foreground mb-4">Build Your Pipeline Infrastructure</h2>
            <p className="text-lg opacity-90 mb-8">Book an assessment to identify how AI can strengthen your prospecting, outreach, and pipeline management.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Assess Your Sales Operations <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Outsourced SDR & Revenue Systems", desc: "Human SDR execution augmented with AI infrastructure.", link: "/outsourced-sdr" },
                { title: "AI Agents for Sales", desc: "Agentic systems that handle prospecting and outreach autonomously.", link: "/ai-agents-for-business" },
                { title: "AI Marketing Automation", desc: "Content and campaign systems that complement your sales pipeline.", link: "/ai-marketing-automation" }
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
                { q: "What is AI sales automation?", a: "AI sales automation systematises sales development — prospecting, lead research, personalised outreach, follow-ups, and pipeline tracking — using AI for quality, personalisation, and consistency at scale." },
                { q: "How does it differ from outsourced SDR?", a: "Outsourced SDR provides human representatives. AI sales automation provides systems and workflows that augment humans or operate independently. Many companies combine both for maximum pipeline impact." },
                { q: "What tools do you integrate?", a: "Clay, Apollo, LinkedIn Sales Navigator, HubSpot, Salesforce, Instantly, Lemlist, and AI models from OpenAI and Anthropic for personalisation and lead qualification." },
                { q: "What results can I expect?", a: "Well-designed AI sales systems typically generate 15–30+ qualified meetings per month, with clearer pipeline visibility and more consistent outbound activity than manual processes. Results depend on ICP clarity and market positioning." },
                { q: "Is AI outreach considered spam?", a: "Not when designed correctly. AI-personalised outreach based on genuine prospect research and relevance outperforms generic mass emails. Quality over volume is the principle." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Discuss Your Pipeline Strategy</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a focused call to assess where AI can improve your prospecting, outreach, and commercial operations.</p>
            <Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AISalesAutomationPage;

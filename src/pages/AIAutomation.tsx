import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Workflow, CheckCircle, Zap, Settings, BarChart3, FileText, Mail, ShoppingCart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service", "name": "AI Workflow Automation for Business", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "AI-powered workflow automation for sales, marketing, operations, and revenue infrastructure. We design and deploy automation systems using Make, n8n, and custom AI integrations for FinTech, PropTech, and B2B companies.",
        "url": "https://www.nlgconsulting.co/ai-automation", "areaServed": ["Europe", "North America", "Middle East"], "serviceType": "AI Workflow Automation"
      },
      {
        "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "What is AI workflow automation?", "acceptedAnswer": { "@type": "Answer", "text": "AI workflow automation combines AI models with orchestration platforms to execute business processes — from lead qualification and content creation to CRM updates and reporting — with minimal manual intervention and higher output quality than rule-based automation alone." }},
          { "@type": "Question", "name": "Which business processes can be automated with AI?", "acceptedAnswer": { "@type": "Answer", "text": "Sales prospecting and outreach, content production, lead qualification, CRM management, reporting and analytics, document processing, email sequences, social media, and operational workflows — essentially any process with repeatable patterns and defined inputs." }},
          { "@type": "Question", "name": "What tools do you use for AI automation?", "acceptedAnswer": { "@type": "Answer", "text": "We build on Make, n8n, and custom integrations, combined with AI models from OpenAI and Anthropic (Claude). These connect to your existing tools — HubSpot, Salesforce, Clay, Notion, Airtable, Slack, and custom APIs." }},
          { "@type": "Question", "name": "How is AI automation different from traditional automation?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional automation follows rigid if-then rules. AI automation adds intelligence — understanding context, generating content, making qualification decisions, and handling tasks that require judgment. For complex processes, AI agents go even further." }},
          { "@type": "Question", "name": "How long does it take to implement AI automation?", "acceptedAnswer": { "@type": "Answer", "text": "Simple workflows deploy in days. Comprehensive systems across multiple departments typically take 2–6 weeks. We start with high-impact workflows and expand progressively." }}
        ]
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Automation", "item": "https://www.nlgconsulting.co/ai-automation" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation | Business Process Automation | NLG</title>
        <meta name="description" content="AI-powered workflow automation for sales, marketing, and operations. We design and deploy automation systems that reduce manual workload and improve output quality for B2B companies." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-automation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-automation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-automation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-automation" />
        <meta property="og:title" content="AI Workflow Automation for Business | NLG Consulting" />
        <meta property="og:description" content="AI-powered workflow automation for sales, marketing, and operations. Reduce manual workload, improve output quality." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Automation</Badge>
            <h1 className="mb-6">AI Workflow Automation{" "}<span className="text-gradient">for Business Operations</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We design and deploy AI-powered automation systems that replace manual workflows across sales, marketing, content, and operations — reducing overhead, improving consistency, and creating scalable revenue infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book an Automation Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The Cost of Manual Operations</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>For most FinTech companies, PropTech operators, SaaS teams, and B2B service firms, the operational bottleneck isn't strategy — it's execution bandwidth. Teams spend hours on data entry, lead research, content drafting, report generation, CRM updates, and follow-up sequences. These tasks are essential but don't scale with the business.</p>
              <p>AI workflow automation changes this equation. By combining AI models with orchestration platforms like Make and n8n, connected to your existing tools, we build systems that handle these processes continuously — with higher consistency and lower cost than manual execution.</p>
              <p>The difference between companies that scale efficiently and those that don't is often the quality of their operational automation. Not just having tools, but having <Link to="/ai-consulting" className="text-primary hover:underline">well-designed systems</Link> that connect data, logic, and AI into workflows that run without constant oversight.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">What We Automate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Mail className="w-5 h-5" />, title: "Marketing & Content Workflows", desc: "Content creation, SEO drafting, social media scheduling, email sequences, campaign reporting, and lead nurturing — producing consistent output at scale." },
                { icon: <ShoppingCart className="w-5 h-5" />, title: "Sales & Pipeline Operations", desc: "Lead research, data enrichment, outbound sequences, CRM updates, follow-up automation, and pipeline reporting — keeping your commercial engine running." },
                { icon: <FileText className="w-5 h-5" />, title: "Content Production Systems", desc: "Blog posts, newsletters, case studies, social content, and documentation — AI-assisted production with brand voice consistency and editorial workflows." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Reporting & Business Intelligence", desc: "Automated dashboards, performance reports, data collection, and analytics workflows — giving leadership teams visibility without manual compilation." },
                { icon: <Settings className="w-5 h-5" />, title: "Operations & Administration", desc: "Document processing, data synchronisation, invoicing workflows, onboarding sequences, and internal process management." },
                { icon: <Zap className="w-5 h-5" />, title: "Custom Integration Architecture", desc: "Connecting your stack — HubSpot, Salesforce, Clay, Notion, Airtable, Slack — into unified, intelligent workflows that share data and trigger actions." }
              ].map((item, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Our Automation Process</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Operations Audit", desc: "We map your current workflows, identify manual bottlenecks, and quantify the time and cost of processes that should be automated — focusing on the highest-leverage opportunities first." },
                { step: "02", title: "System Architecture", desc: "We design the automation architecture — selecting tools, defining triggers and actions, mapping data flows, and planning AI integrations that connect to your existing stack." },
                { step: "03", title: "Build & Validate", desc: "We build the workflows, connect systems, and test thoroughly. For processes requiring judgment, we integrate AI models with human-in-the-loop checkpoints." },
                { step: "04", title: "Deploy, Monitor & Expand", desc: "Production deployment with monitoring and continuous optimisation. As initial workflows prove their value, we expand automation across additional processes and departments." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Build Your Automation Infrastructure</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Book an assessment to identify the workflows with the highest automation potential in your business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book an Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Strategic AI advisory for operations, growth, and commercial performance.", link: "/ai-consulting" },
                { title: "AI Agents for Business", desc: "Agentic systems for complex processes requiring reasoning and adaptation.", link: "/ai-agents-for-business" },
                { title: "AI Marketing Automation", desc: "Content, SEO, and campaign automation systems.", link: "/ai-marketing-automation" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
                    </CardContent>
                  </Card>
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
                { q: "What is AI workflow automation?", a: "AI workflow automation combines AI models with orchestration platforms to execute business processes — from lead qualification and content creation to CRM updates and reporting — with minimal manual intervention and higher output quality than rule-based automation alone." },
                { q: "Which processes can be automated with AI?", a: "Sales prospecting, content production, lead qualification, CRM management, reporting, document processing, email sequences, social media, and operational workflows — any process with repeatable patterns and defined inputs." },
                { q: "What tools do you use?", a: "We build on Make, n8n, and custom integrations, combined with AI from OpenAI and Anthropic (Claude). These connect to HubSpot, Salesforce, Clay, Notion, Airtable, Slack, and custom APIs." },
                { q: "How is AI automation different from traditional automation?", a: "Traditional automation follows rigid rules. AI automation adds intelligence — understanding context, generating content, making decisions, and handling tasks requiring judgment. For complex processes, AI agents go even further." },
                { q: "How long does implementation take?", a: "Simple workflows deploy in days. Comprehensive systems across multiple departments typically take 2–6 weeks. We start with high-impact workflows and expand progressively." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Assess Your Automation Potential</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a focused call to map your highest-leverage automation opportunities.</p>
            <Button asChild size="lg"><Link to="/book">Book an Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIAutomation;

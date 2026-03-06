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
        "@type": "Service", "name": "AI Automation Services", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "End-to-end AI automation consulting and implementation for business workflows, marketing, sales, and operations.",
        "url": "https://www.nlgconsulting.co/ai-automation", "areaServed": ["Europe", "North America", "Middle East"], "serviceType": "AI Automation"
      },
      {
        "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "What is AI automation?", "acceptedAnswer": { "@type": "Answer", "text": "AI automation combines artificial intelligence with workflow automation tools to handle business processes with minimal human intervention. Unlike traditional automation that follows rigid rules, AI automation can understand context, make decisions, and adapt to changing inputs." }},
          { "@type": "Question", "name": "Which business processes can be automated with AI?", "acceptedAnswer": { "@type": "Answer", "text": "Marketing (content creation, social media, email sequences), sales (lead research, outreach, follow-ups), operations (data entry, reporting, document processing), customer support (chatbots, ticket routing), and content production (writing, design, video)." }},
          { "@type": "Question", "name": "What tools do you use for AI automation?", "acceptedAnswer": { "@type": "Answer", "text": "We work with platforms like Make, Zapier, n8n for workflow orchestration, combined with AI models from OpenAI, Anthropic, and Google. We also integrate with business tools like HubSpot, Salesforce, Notion, Airtable, Slack, and custom APIs." }},
          { "@type": "Question", "name": "How much does AI automation cost?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary based on complexity. Simple workflow automations can start at a few hundred euros, while comprehensive automation systems for marketing, sales, and operations range from €2,000-€15,000+ depending on scope and integration requirements." }},
          { "@type": "Question", "name": "How long does it take to implement AI automation?", "acceptedAnswer": { "@type": "Answer", "text": "Simple automations can be deployed in days. More complex multi-system integrations typically take 2-6 weeks. We follow an iterative approach, starting with high-impact quick wins and progressively expanding." }}
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
        <title>AI Automation Services for Business | NLG Consulting</title>
        <meta name="description" content="AI workflow automation for marketing, sales, and operations. We design and deploy automation systems using AI, Make, Zapier, and custom integrations. Book a call." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-automation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-automation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-automation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-automation" />
        <meta property="og:title" content="AI Automation Services for Business | NLG Consulting" />
        <meta property="og:description" content="AI workflow automation for marketing, sales, and operations. Design, deploy, and scale automation systems." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Automation</Badge>
            <h1 className="mb-6">AI Automation Systems{" "}<span className="text-gradient">for Business</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We design, build, and deploy AI-powered automation systems that handle your marketing, sales, content, and operational workflows — reducing manual work and scaling output without scaling headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Get an Automation Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The Problem with Manual Workflows</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Most businesses still rely on manual processes for critical functions — data entry, lead research, content creation, report generation, email management, and customer follow-ups. These tasks consume hours of valuable time every week and are prone to human error.</p>
              <p>The new generation of AI-powered automation tools — including platforms like Make, Zapier, and n8n combined with large language models from OpenAI, Anthropic, and Google — makes it possible to automate complex workflows that previously required human judgment.</p>
              <p>The challenge isn't the technology — it's knowing how to design automation systems that actually work in your specific business context, integrate with your existing tools, and produce reliable results at scale.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">What We Automate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Mail className="w-5 h-5" />, title: "Marketing Automation", desc: "Content creation, social media scheduling, email sequences, campaign reporting, and lead nurturing — all powered by AI." },
                { icon: <ShoppingCart className="w-5 h-5" />, title: "Sales Automation", desc: "Lead research, outbound sequences, follow-up automation, CRM updates, and pipeline management with AI intelligence." },
                { icon: <FileText className="w-5 h-5" />, title: "Content Production", desc: "Blog posts, social content, newsletters, case studies, and documentation — produced at scale with AI assistance." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Reporting & Analytics", desc: "Automated data collection, dashboard generation, performance reports, and business intelligence workflows." },
                { icon: <Settings className="w-5 h-5" />, title: "Operations & Admin", desc: "Document processing, data entry, invoicing, scheduling, and internal workflow automation." },
                { icon: <Zap className="w-5 h-5" />, title: "Custom Integrations", desc: "Connect your existing tools — HubSpot, Salesforce, Notion, Airtable, Slack — into unified, intelligent workflows." }
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
                { step: "01", title: "Workflow Audit", desc: "We map your current processes, identify bottlenecks, and quantify the time and cost of manual operations." },
                { step: "02", title: "Automation Design", desc: "We design the automation architecture — selecting the right tools, defining triggers and actions, and planning integrations." },
                { step: "03", title: "Build & Test", desc: "Our team builds the automation workflows, connects your systems, and tests thoroughly in a staging environment." },
                { step: "04", title: "Deploy & Optimize", desc: "We deploy to production, monitor performance, and continuously optimize based on real-world results." }
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
            <h2 className="text-primary-foreground mb-4">Ready to Automate?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Book a free automation audit and discover how much time and money you can save with AI-powered workflows.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book an Automation Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Consulting", desc: "Start with strategy — understand where AI fits in your business.", link: "/ai-consulting" },
                { title: "AI Agents", desc: "Go beyond automation — deploy autonomous AI agents for complex tasks.", link: "/ai-agents-for-business" },
                { title: "AI Marketing Automation", desc: "Specific automation systems for content, SEO, and campaigns.", link: "/ai-marketing-automation" }
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
                { q: "What is AI automation?", a: "AI automation combines artificial intelligence with workflow automation tools to handle business processes with minimal human intervention. Unlike traditional automation that follows rigid rules, AI automation can understand context, make decisions, and adapt to changing inputs." },
                { q: "Which business processes can be automated with AI?", a: "Marketing (content creation, social media, email sequences), sales (lead research, outreach, follow-ups), operations (data entry, reporting, document processing), customer support (chatbots, ticket routing), and content production (writing, design, video)." },
                { q: "What tools do you use for AI automation?", a: "We work with platforms like Make, Zapier, n8n for workflow orchestration, combined with AI models from OpenAI, Anthropic, and Google. We also integrate with business tools like HubSpot, Salesforce, Notion, Airtable, Slack, and custom APIs." },
                { q: "How much does AI automation cost?", a: "Costs vary based on complexity. Simple workflow automations can start at a few hundred euros, while comprehensive automation systems for marketing, sales, and operations range from €2,000-€15,000+ depending on scope and integration requirements." },
                { q: "How long does it take to implement AI automation?", a: "Simple automations can be deployed in days. More complex multi-system integrations typically take 2-6 weeks. We follow an iterative approach, starting with high-impact quick wins and progressively expanding." }
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
            <h2 className="mb-4">Let's Build Your Automation Stack</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to map your automation opportunities.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIAutomation;

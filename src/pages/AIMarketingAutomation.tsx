import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Megaphone, CheckCircle, FileText, Search, Share2, Mail, Palette, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIMarketingAutomation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Marketing Automation — Content, SEO & Growth Systems", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "AI-powered marketing automation for B2B companies. We build content production systems, SEO automation, social media workflows, and campaign infrastructure that scale output without scaling headcount.", "url": "https://www.nlgconsulting.co/ai-marketing-automation", "serviceType": "AI Marketing Automation" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is AI marketing automation?", "acceptedAnswer": { "@type": "Answer", "text": "AI marketing automation uses AI models and workflow orchestration to systematise marketing operations — from content creation and SEO to email campaigns, social media, and performance reporting. It creates consistent, scalable marketing output with less manual effort." }},
        { "@type": "Question", "name": "How does AI improve content production?", "acceptedAnswer": { "@type": "Answer", "text": "AI handles the production layer — drafting, research, optimisation, and formatting — while your team focuses on strategy, positioning, and editorial quality. This typically increases content output by 3–5x while maintaining brand consistency through integrated guidelines and review workflows." }},
        { "@type": "Question", "name": "Can AI handle SEO automation?", "acceptedAnswer": { "@type": "Answer", "text": "AI can automate keyword research, content brief generation, on-page optimisation, internal linking analysis, and performance tracking. The strategic layer — positioning, topic authority, and competitive differentiation — remains human-directed." }},
        { "@type": "Question", "name": "Does AI marketing automation replace marketing teams?", "acceptedAnswer": { "@type": "Answer", "text": "No. It amplifies them. AI handles production and repetitive operations, allowing marketers to focus on strategy, creativity, and commercial decision-making. Teams typically see 3–5x output increases rather than headcount reductions." }},
        { "@type": "Question", "name": "How do you maintain brand voice with AI content?", "acceptedAnswer": { "@type": "Answer", "text": "We integrate brand guidelines, tone documentation, and content templates directly into AI workflows. Combined with editorial review processes and quality scoring, this ensures all output aligns with your brand identity." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Marketing Automation", "item": "https://www.nlgconsulting.co/ai-marketing-automation" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Marketing Automation | Content & SEO Systems | NLG</title>
        <meta name="description" content="AI-powered marketing automation for B2B companies. Content production systems, SEO automation, social media workflows, and campaign infrastructure that scale output without scaling headcount." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-marketing-automation" />
        <meta property="og:title" content="AI Marketing Automation | Content & SEO Systems | NLG" />
        <meta property="og:description" content="Content production, SEO automation, and campaign systems powered by AI for B2B companies." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Marketing</Badge>
            <h1 className="mb-6">AI-Powered Marketing{" "}<span className="text-gradient">& Content Systems</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We build marketing automation systems that handle content production, SEO, social media, email campaigns, and creative workflows — creating consistent, scalable marketing output without proportional team growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Assess Your Marketing Operations <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The Marketing Execution Gap</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>B2B marketing requires constant, multi-channel output — articles, social content, email sequences, landing pages, case studies, SEO assets, and campaign reporting. Most teams face the same constraint: strategic clarity exceeds execution bandwidth. You know what to produce, but the production itself consumes all available time.</p>
              <p>AI marketing automation addresses this by systematising the production layer. AI handles drafting, research, optimisation, and formatting. Your team handles strategy, positioning, and editorial quality. The result is higher output with stronger consistency — content systems that produce daily, not weekly.</p>
              <p>For <Link to="/ai-for-saas" className="text-primary hover:underline">SaaS companies</Link>, <Link to="/ai-for-fintech" className="text-primary hover:underline">FinTech operators</Link>, and <Link to="/ai-for-b2b-services" className="text-primary hover:underline">B2B service firms</Link>, this creates measurable advantages: more SEO-indexed pages, more consistent social presence, more email touches, and better reporting visibility — without scaling headcount.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Marketing Systems We Build</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FileText className="w-5 h-5" />, title: "Content Production Systems", desc: "Blog posts, articles, newsletters, case studies, and whitepapers — AI-assisted production with brand voice consistency, editorial workflows, and SEO integration." },
                { icon: <Search className="w-5 h-5" />, title: "SEO Automation & Growth", desc: "Keyword research, content brief generation, on-page optimisation, internal linking analysis, and performance tracking — building organic visibility systematically." },
                { icon: <Share2 className="w-5 h-5" />, title: "Social Media Operations", desc: "Content calendar generation, post drafting, LinkedIn and Twitter scheduling, engagement monitoring, and performance analytics — maintaining consistent social presence." },
                { icon: <Mail className="w-5 h-5" />, title: "Email & Nurture Systems", desc: "Personalised email sequences, segmentation workflows, subject line optimisation, A/B testing, and automated nurture campaigns connected to your CRM." },
                { icon: <Palette className="w-5 h-5" />, title: "Creative Production", desc: "Social graphics, ad creative, presentation design, and brand assets — AI-assisted creative workflows using Midjourney, Canva, and design automation tools." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Marketing Analytics & Reporting", desc: "Automated dashboards, performance reports, attribution analysis, and competitive intelligence — giving leadership clear visibility without manual compilation." }
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
            <h2 className="text-center mb-10">Built for Quality & Consistency</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Brand voice and tone documentation integrated into every AI workflow",
                "Editorial review processes with human-in-the-loop checkpoints",
                "Content templates structured by channel, format, and objective",
                "SEO guidelines embedded in content production pipelines",
                "Multilingual capability — English and French content systems",
                "Quality scoring and performance feedback loops"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Build Your Marketing Engine</h2>
            <p className="text-lg opacity-90 mb-8">Book a call to assess which marketing processes have the highest automation potential in your business.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Assess Your Marketing Operations <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Sales Automation", desc: "Complement marketing with AI-powered pipeline and outbound systems.", link: "/ai-sales-automation" },
                { title: "AI Agents for Business", desc: "Agentic systems for content, campaign, and research workflows.", link: "/ai-agents-for-business" },
                { title: "AI Workflow Automation", desc: "Broader automation systems across all business operations.", link: "/ai-automation" }
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
                { q: "What is AI marketing automation?", a: "AI marketing automation uses AI models and workflow orchestration to systematise marketing operations — content creation, SEO, email campaigns, social media, and reporting — creating consistent output with less manual effort." },
                { q: "How does AI improve content production?", a: "AI handles the production layer — drafting, research, optimisation, formatting — while your team focuses on strategy and editorial quality. This typically increases output by 3–5x while maintaining brand consistency." },
                { q: "Can AI handle SEO automation?", a: "AI automates keyword research, content brief generation, on-page optimisation, and internal linking analysis. Strategic direction — positioning, topic authority, competitive differentiation — remains human-led." },
                { q: "Does AI marketing automation replace marketing teams?", a: "No. It amplifies them. AI handles production and repetitive operations, allowing marketers to focus on strategy, creativity, and commercial decision-making." },
                { q: "How do you maintain brand consistency?", a: "We integrate brand guidelines, tone documentation, and content templates directly into AI workflows. Combined with editorial review and quality scoring, this ensures all output aligns with your brand identity." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Systematise Your Marketing Output</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a focused call to discuss your content, SEO, and marketing automation roadmap.</p>
            <Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIMarketingAutomation;

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
      { "@type": "Service", "name": "AI Marketing Automation", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "AI-powered marketing automation for content creation, SEO, social media, email campaigns, and creative production.", "url": "https://www.nlgconsulting.co/ai-marketing-automation", "serviceType": "AI Marketing Automation" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is AI marketing automation?", "acceptedAnswer": { "@type": "Answer", "text": "AI marketing automation uses artificial intelligence to automate and optimize marketing tasks — from content creation and social media management to email campaigns, SEO optimization, and creative production. It goes beyond traditional marketing automation by adding intelligence, personalization, and creative capability." }},
        { "@type": "Question", "name": "Can AI really create quality marketing content?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when properly guided. AI tools like ChatGPT, Claude, and specialized content AI can produce high-quality marketing content when combined with clear brand guidelines, strategic direction, and human editorial oversight. The key is using AI as a force multiplier, not a replacement for strategy." }},
        { "@type": "Question", "name": "What marketing tasks can be automated with AI?", "acceptedAnswer": { "@type": "Answer", "text": "Content writing (blog posts, social media, emails, ad copy), SEO optimization, social media scheduling, email personalization, creative design, A/B testing, audience segmentation, campaign reporting, and competitive analysis." }},
        { "@type": "Question", "name": "Will AI marketing automation replace my marketing team?", "acceptedAnswer": { "@type": "Answer", "text": "No. AI marketing automation augments your team by handling repetitive, time-consuming tasks — allowing marketers to focus on strategy, creativity, and relationship building. It typically multiplies a team's output by 3-5x rather than replacing headcount." }},
        { "@type": "Question", "name": "How do you maintain brand consistency with AI content?", "acceptedAnswer": { "@type": "Answer", "text": "We build brand guidelines, tone of voice documentation, and content templates into the AI workflows. Combined with editorial review processes and quality checkpoints, this ensures all AI-generated content aligns with your brand identity and standards." }}
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
        <title>AI Marketing Automation | Content, SEO & Creative | NLG Consulting</title>
        <meta name="description" content="AI-powered marketing automation for content creation, SEO, social media, and creative production. Multiply your marketing output without scaling headcount." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/automation-marketing-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-marketing-automation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-marketing-automation" />
        <meta property="og:title" content="AI Marketing Automation | NLG Consulting" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">AI Marketing</Badge>
            <h1 className="mb-6">AI Marketing{" "}<span className="text-gradient">Automation</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Content creation, SEO, social media, email campaigns, and creative production — all powered by AI. We build marketing automation systems that multiply your team's output without scaling headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Get a Marketing Automation Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">The Marketing Bottleneck</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Modern marketing demands constant output — blog posts, social content, emails, ads, landing pages, case studies, videos, and more. Most teams can't keep up. They either hire more people (expensive) or produce less content (ineffective).</p>
              <p>AI changes this equation fundamentally. Tools like ChatGPT, Claude, Midjourney, Canva, and specialized marketing AI platforms can now handle much of the production work — from drafting blog posts and social captions to generating ad creative and optimizing email subject lines.</p>
              <p>But tools alone aren't enough. The real value comes from building integrated systems — where AI handles production, your team handles strategy and quality control, and automation connects everything into a seamless workflow.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">What We Automate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FileText className="w-5 h-5" />, title: "Content Creation", desc: "Blog posts, articles, newsletters, case studies, and whitepapers — produced at scale with your brand voice and editorial standards." },
                { icon: <Search className="w-5 h-5" />, title: "SEO Automation", desc: "Keyword research, content briefs, on-page optimization, internal linking, and performance tracking — powered by AI." },
                { icon: <Share2 className="w-5 h-5" />, title: "Social Media", desc: "Content calendar generation, post creation, scheduling, engagement monitoring, and performance analysis across LinkedIn, Twitter, and more." },
                { icon: <Mail className="w-5 h-5" />, title: "Email Marketing", desc: "Personalized email sequences, subject line optimization, segmentation, A/B testing, and automated nurture campaigns." },
                { icon: <Palette className="w-5 h-5" />, title: "Creative & Design", desc: "Ad creative, social graphics, presentation design, and brand assets — using Midjourney, Canva, Figma, and AI design tools." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Reporting", desc: "Automated marketing dashboards, performance reports, attribution analysis, and competitive intelligence." }
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
            <h2 className="text-center mb-10">Who This Is For</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "CMOs and marketing leaders needing to scale output",
                "Startups with small marketing teams and big ambitions",
                "B2B companies building content-driven lead generation",
                "Agencies wanting to deliver more for their clients",
                "E-commerce brands managing multiple channels",
                "SaaS companies needing consistent content engines"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Scale Your Marketing with AI</h2>
            <p className="text-lg opacity-90 mb-8">Book a free audit to identify your highest-impact marketing automation opportunities.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Marketing Automation Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Sales Automation", desc: "Complement your marketing with AI-powered sales systems.", link: "/ai-sales-automation" },
                { title: "AI Agents", desc: "Deploy autonomous agents for content and campaign management.", link: "/ai-agents-for-business" },
                { title: "AI Automation", desc: "Broader workflow automation across your entire business.", link: "/ai-automation" }
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
                { q: "What is AI marketing automation?", a: "AI marketing automation uses artificial intelligence to automate and optimize marketing tasks — from content creation and social media management to email campaigns, SEO optimization, and creative production." },
                { q: "Can AI really create quality marketing content?", a: "Yes, when properly guided. AI tools can produce high-quality marketing content when combined with clear brand guidelines, strategic direction, and human editorial oversight." },
                { q: "What marketing tasks can be automated with AI?", a: "Content writing, SEO optimization, social media scheduling, email personalization, creative design, A/B testing, audience segmentation, campaign reporting, and competitive analysis." },
                { q: "Will AI marketing automation replace my marketing team?", a: "No. AI marketing automation augments your team by handling repetitive, time-consuming tasks — allowing marketers to focus on strategy, creativity, and relationship building." },
                { q: "How do you maintain brand consistency with AI content?", a: "We build brand guidelines, tone of voice documentation, and content templates into the AI workflows. Combined with editorial review processes and quality checkpoints, this ensures consistency." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Ready to Transform Your Marketing?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free consultation to discuss your marketing automation roadmap.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AIMarketingAutomation;

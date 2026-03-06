import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Layers, TrendingUp, Zap, Users, Bot, BarChart3, CheckCircle } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIForSaaS = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Consulting & Automation for SaaS Companies",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "AI consulting, automation, and implementation services tailored for SaaS companies. Optimize onboarding, reduce churn, automate support, and scale growth with AI.",
        "url": "https://www.nlgconsulting.co/ai-for-saas",
        "areaServed": "Worldwide"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How can AI help SaaS companies?", "acceptedAnswer": { "@type": "Answer", "text": "AI helps SaaS companies automate customer onboarding, reduce churn through predictive analytics, scale content marketing, optimize pricing, automate support, and build intelligent product features." }},
          { "@type": "Question", "name": "What AI tools are most useful for SaaS?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS companies benefit from tools like OpenAI for content and support, Clay and Apollo for sales automation, HubSpot for marketing, Make/Zapier for workflow automation, and custom AI agents for product features." }},
          { "@type": "Question", "name": "Can AI reduce SaaS churn?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI can identify at-risk customers through usage pattern analysis, automate re-engagement campaigns, personalize the product experience, and provide proactive support — all of which reduce churn." }}
        ]
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for SaaS", "item": "https://www.nlgconsulting.co/ai-for-saas" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI for SaaS Companies | Automation & Growth | NLG Consulting</title>
        <meta name="description" content="AI consulting and automation for SaaS companies. Reduce churn, automate onboarding, scale content, and optimize sales with AI-powered systems." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-saas" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-saas" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-saas" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-saas" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">SaaS</Badge>
            <h1 className="mb-6">AI for{" "}<span className="text-gradient">SaaS Companies</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              SaaS companies that integrate AI into their operations gain a decisive edge — from automated onboarding and intelligent support to predictive churn prevention and AI-powered growth engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book a SaaS AI Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Where AI transforms SaaS</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">Every stage of the SaaS lifecycle can be enhanced with AI — from acquisition to retention.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Customer Onboarding", desc: "Automated onboarding flows that adapt to user behavior, reducing time-to-value and increasing activation rates." },
                { icon: BarChart3, title: "Churn Prevention", desc: "Predictive models that identify at-risk customers before they cancel, enabling proactive retention campaigns." },
                { icon: Bot, title: "AI-Powered Support", desc: "Intelligent chatbots and ticket routing that resolve common issues instantly and escalate complex ones to humans." },
                { icon: TrendingUp, title: "Growth & Sales", desc: "AI-driven lead scoring, automated outbound sequences, and personalized upsell recommendations based on usage data." },
                { icon: Layers, title: "Content at Scale", desc: "Automated blog posts, help center articles, release notes, and social media content — all aligned with your brand voice." },
                { icon: Zap, title: "Product Intelligence", desc: "AI features embedded in your product — smart recommendations, natural language search, automated reporting." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Why SaaS companies choose NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Deep understanding of SaaS metrics — MRR, churn, LTV, CAC",
                "Experience with SaaS tools — HubSpot, Intercom, Stripe, Segment",
                "AI automation that integrates with your existing tech stack",
                "Focus on measurable outcomes, not theoretical AI",
                "Bilingual delivery for international SaaS companies",
                "From strategy to implementation under one roof"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Scale your SaaS with AI</h2>
            <p className="text-lg opacity-90 mb-8">Book a free consultation to explore how AI can accelerate your SaaS growth.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Automation", desc: "Workflow automation for SaaS operations.", link: "/ai-automation" },
                { title: "AI Marketing Automation", desc: "Scale your SaaS content and demand generation.", link: "/ai-marketing-automation" },
                { title: "AI Sales Automation", desc: "Automate your SaaS sales pipeline.", link: "/ai-sales-automation" }
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
                { q: "How can AI help SaaS companies?", a: "AI helps SaaS companies automate customer onboarding, reduce churn through predictive analytics, scale content marketing, optimize pricing, automate support, and build intelligent product features." },
                { q: "What AI tools are most useful for SaaS?", a: "SaaS companies benefit from tools like OpenAI for content and support, Clay and Apollo for sales automation, HubSpot for marketing, Make/Zapier for workflow automation, and custom AI agents for product features." },
                { q: "Can AI reduce SaaS churn?", a: "Yes. AI can identify at-risk customers through usage pattern analysis, automate re-engagement campaigns, personalize the product experience, and provide proactive support — all of which reduce churn." },
                { q: "How long does it take to implement AI in a SaaS company?", a: "Quick wins like content automation or sales outreach can be deployed in days. More complex implementations like churn prediction or AI product features typically take 2-6 weeks." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Ready to bring AI into your SaaS?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a free strategy call to discuss your AI roadmap.</p>
            <Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForSaaS;

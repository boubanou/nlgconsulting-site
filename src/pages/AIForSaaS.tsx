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
      { "@type": "Service", "name": "AI-Powered Growth Systems for SaaS", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting, workflow automation and revenue operations for SaaS companies. Onboarding automation, churn prevention, pipeline systems and commercial performance.", "url": "https://www.nlgconsulting.co/ai-for-saas", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can AI improve SaaS revenue performance?", "acceptedAnswer": { "@type": "Answer", "text": "AI enables SaaS companies to automate onboarding, predict and prevent churn, build structured outbound systems, deploy AI agents for customer operations, and create measurable pipeline infrastructure." }},
        { "@type": "Question", "name": "Can AI reduce SaaS churn?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI identifies at-risk customers through usage patterns, automates re-engagement workflows and personalises the product experience — creating proactive retention rather than reactive recovery." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for SaaS", "item": "https://www.nlgconsulting.co/ai-for-saas" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Growth Systems for SaaS Companies | NLG Consulting</title>
        <meta name="description" content="AI consulting, workflow automation and revenue operations for SaaS. Onboarding automation, churn prevention, pipeline systems and commercial performance." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-saas" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-saas" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-saas" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-saas" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">SaaS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Growth Systems for SaaS Companies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              SaaS companies that integrate AI into their operations gain structural leverage — from automated onboarding and predictive churn prevention to AI-powered outbound and revenue operations that scale without proportional headcount growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your SaaS Growth <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Where AI Creates Leverage in SaaS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Onboarding Automation", desc: "Adaptive onboarding workflows that reduce time-to-value, increase activation and personalise the experience based on user behaviour." },
                { icon: BarChart3, title: "Churn Prevention", desc: "Predictive models identifying at-risk accounts before cancellation — enabling proactive retention and structured re-engagement." },
                { icon: Bot, title: "AI Agents for Support", desc: "Intelligent customer support workflows that resolve common issues, route complex cases and maintain consistent service quality." },
                { icon: TrendingUp, title: "Outbound & Pipeline", desc: "AI-enhanced lead scoring, structured outbound sequences and personalised upsell recommendations based on usage data." },
                { icon: Layers, title: "Content & SEO Systems", desc: "Automated content production, help documentation, release notes and SEO assets aligned with your product positioning." },
                { icon: Zap, title: "Product Intelligence", desc: "AI features embedded in your product — smart recommendations, natural language search, automated reporting and user insights." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Why SaaS Operators Choose NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Deep understanding of SaaS metrics — MRR, churn, LTV, CAC and unit economics",
                "AI automation that integrates with your existing stack — CRM, billing, support, analytics",
                "Focus on measurable commercial outcomes, not theoretical AI roadmaps",
                "Revenue operations design that connects product usage to pipeline and expansion revenue",
                "Bilingual delivery for international SaaS companies expanding across markets",
                "Combined AI consulting, GTM strategy and execution under one roof"
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
                { title: "AI Automation", desc: "Workflow automation for SaaS operations and growth.", link: "/ai-automation" },
                { title: "AI Marketing Systems", desc: "Content and demand generation at scale.", link: "/ai-marketing-automation" },
                { title: "SaaS Monetisation", desc: "Pricing, packaging and revenue model optimisation.", link: "/saas-monetization" }
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
                { q: "How can AI improve SaaS revenue performance?", a: "AI enables SaaS companies to automate onboarding, predict and prevent churn, build structured outbound systems, and create measurable pipeline infrastructure that connects product usage to revenue growth." },
                { q: "Can AI reduce SaaS churn?", a: "Yes. AI identifies at-risk customers through usage patterns, automates re-engagement workflows and personalises the experience — creating proactive retention rather than reactive recovery." },
                { q: "How quickly can AI systems be deployed?", a: "Quick wins like content automation or outbound sequences deploy in days. More complex systems like churn prediction or product intelligence typically take 2-6 weeks." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4"><div className="container mx-auto max-w-3xl text-center"><h2 className="text-3xl font-bold mb-4">Discuss Your SaaS Growth Structure</h2><p className="text-lg text-muted-foreground mb-8">If you are scaling a SaaS company and want to deploy AI systems that connect to measurable commercial outcomes, we welcome the conversation.</p><Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForSaaS;
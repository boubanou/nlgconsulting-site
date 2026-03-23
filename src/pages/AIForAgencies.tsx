import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Megaphone, Users, Palette, TrendingUp, Bot, Zap, CheckCircle } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AIForAgencies = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Growth Systems for Agencies", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and operational systems for marketing, creative and digital agencies. Scale production, improve margins and deploy AI workflows across client delivery.", "url": "https://www.nlgconsulting.co/ai-for-agencies", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can agencies use AI to improve margins?", "acceptedAnswer": { "@type": "Answer", "text": "AI reduces production time and costs on content, reporting and creative workflows — enabling agencies to deliver more with the same team, improving gross margins without sacrificing quality." }},
        { "@type": "Question", "name": "Will AI replace agency teams?", "acceptedAnswer": { "@type": "Answer", "text": "AI augments agency teams by handling repetitive production tasks — freeing strategists and creatives to focus on high-value thinking, client relationships and differentiated work." }}
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI for Agencies", "item": "https://www.nlgconsulting.co/ai-for-agencies" }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Operational Systems for Agencies | NLG Consulting</title>
        <meta name="description" content="AI consulting for marketing, creative and digital agencies. Scale content production, automate reporting, improve margins and deploy AI workflows across client delivery." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-agences" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Agencies</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Operational Systems for Marketing & Creative Agencies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Agencies that integrate AI into their delivery model gain margin advantage — scaling content production, automating reporting and creative workflows, and delivering more value without proportional team growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Discuss Your Agency Operations <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Where AI Creates Leverage for Agencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Content Production", desc: "Blog posts, social media, newsletters, ad copy — AI-assisted production that maintains brand voice consistency across all clients." },
                { icon: Palette, title: "Creative Workflows", desc: "AI-generated visuals, design variations and creative concepts that accelerate the ideation-to-production cycle." },
                { icon: TrendingUp, title: "SEO & Performance", desc: "Automated keyword research, content optimisation, technical SEO audits and performance reporting at scale." },
                { icon: Bot, title: "Client Reporting", desc: "Automated dashboard creation, performance summaries and insight generation — reducing hours per client per month." },
                { icon: Users, title: "Business Development", desc: "AI-powered prospect research, personalised outreach and proposal generation for agency new business." },
                { icon: Zap, title: "Operations", desc: "Project management automation, resource allocation and internal workflow optimisation." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">The Agency AI Advantage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Scale content delivery without proportional headcount increase",
                "Reduce production costs while maintaining or improving quality",
                "Win more pitches with AI-accelerated research and proposals",
                "Offer new AI-powered services to expand client relationships",
                "Automate reporting to free creative and strategic time",
                "Build operational leverage that improves gross margins"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "How can agencies use AI to improve margins?", a: "AI reduces production time and costs on content, reporting and creative workflows — enabling agencies to deliver more with the same team, improving gross margins without sacrificing quality." },
                { q: "Will AI replace agency teams?", a: "AI augments agency teams by handling repetitive production — freeing strategists and creatives to focus on high-value work, client relationships and differentiated thinking." },
                { q: "How do you maintain brand consistency?", a: "We build brand guidelines, tone of voice documentation and content templates into AI workflows for each client — combined with editorial review to ensure consistency." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20 px-4"><div className="container mx-auto max-w-3xl text-center"><h2 className="text-3xl font-bold mb-4">Discuss Your Agency's AI Strategy</h2><p className="text-lg text-muted-foreground mb-8">If you want to deploy AI systems that improve your agency's margins and delivery capacity, we can assess where automation creates the most impact.</p><Button asChild size="lg"><Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForAgencies;
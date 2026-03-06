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
      { "@type": "Service", "name": "AI for Marketing & Creative Agencies", "provider": { "@type": "Organization", "name": "NLG Consulting" }, "description": "AI consulting and automation for marketing agencies, creative agencies, and digital agencies. Scale delivery, automate production, and improve margins.", "url": "https://www.nlgconsulting.co/ai-for-agencies", "areaServed": "Worldwide" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How can agencies use AI?", "acceptedAnswer": { "@type": "Answer", "text": "Agencies use AI to scale content production, automate creative workflows, generate client reports, accelerate research, improve SEO delivery, and handle routine client communications." }},
        { "@type": "Question", "name": "Will AI reduce agency margins?", "acceptedAnswer": { "@type": "Answer", "text": "The opposite. AI helps agencies increase margins by reducing production time and costs while maintaining or improving quality. Agencies that adopt AI can deliver more with the same team." }}
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
        <title>AI for Marketing & Creative Agencies | NLG Consulting</title>
        <meta name="description" content="AI solutions for marketing, creative, and digital agencies. Scale content production, automate workflows, improve margins, and deliver more with AI." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/ia-pour-agences" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-for-agencies" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Agencies</Badge>
            <h1 className="mb-6">AI for{" "}<span className="text-gradient">Marketing & Creative Agencies</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Agencies that integrate AI into their delivery model don't just survive — they thrive. Scale your content production, automate creative workflows, and improve margins while maintaining the quality your clients expect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/book">Book an Agency AI Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Where AI transforms agencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Megaphone, title: "Content at Scale", desc: "Blog posts, social media, newsletters, ad copy — AI-assisted content production that maintains brand voice across all clients." },
                { icon: Palette, title: "Creative Automation", desc: "AI-generated visuals, design variations, and creative concepts using Midjourney, DALL-E, and Canva AI." },
                { icon: TrendingUp, title: "SEO & Performance", desc: "Automated keyword research, content optimization, technical SEO audits, and performance reporting." },
                { icon: Bot, title: "Client Reporting", desc: "Automated dashboard creation, performance summaries, and insights generation — saving hours per client per month." },
                { icon: Users, title: "New Business", desc: "AI-powered prospect research, personalized outreach, and proposal generation for agency business development." },
                { icon: Zap, title: "Operations", desc: "Project management automation, resource allocation, time tracking, and internal workflow optimization." }
              ].map((item, i) => (
                <Card key={i} className="border-border"><CardContent className="p-6"><item.icon className="w-8 h-8 mb-4 text-primary" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">The agency AI advantage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Deliver 3-5x more content with the same team", "Reduce production costs while maintaining quality", "Win more pitches with AI-accelerated proposals", "Offer new AI-powered services to existing clients", "Automate reporting and free up creative time", "Scale internationally without proportional headcount growth"].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Scale your agency with AI</h2>
            <p className="text-lg opacity-90 mb-8">Book a consultation to explore how AI can transform your agency's operations and margins.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/book">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI Marketing Automation", desc: "Scale your clients' marketing with AI.", link: "/ai-marketing-automation" },
                { title: "AI Agents", desc: "Deploy autonomous agents for content and campaigns.", link: "/ai-agents-for-business" },
                { title: "Prompt Engineering", desc: "Train your team to get the best from AI tools.", link: "/prompt-engineering-consulting" }
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
                { q: "How can agencies use AI?", a: "Agencies use AI to scale content production, automate creative workflows, generate client reports, accelerate research, improve SEO delivery, and handle routine client communications." },
                { q: "Will AI reduce agency margins?", a: "The opposite. AI helps agencies increase margins by reducing production time and costs while maintaining or improving quality. Agencies that adopt AI can deliver more with the same team." },
                { q: "How do you maintain brand consistency for agency clients?", a: "We build brand guidelines, tone of voice documentation, and content templates into the AI workflows for each client. Combined with editorial review processes, this ensures brand consistency." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding"><div className="container-tight text-center"><h2 className="mb-4">Ready to AI-power your agency?</h2><p className="text-lg text-muted-foreground mb-8">Book a free strategy call.</p><Button asChild size="lg"><Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></div></section>
      </main>
      <MainFooter />
    </>
  );
};

export default AIForAgencies;

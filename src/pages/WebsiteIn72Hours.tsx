import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Globe, Search, BarChart3, Layers, Zap, Target } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const WebsiteIn72Hours = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Conversion Websites & SEO Assets", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Revenue-ready websites, SEO authority assets and conversion systems for B2B companies, FinTech and PropTech platforms.", "url": "https://www.nlgconsulting.co/website-in-72-hours", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Conversion Websites", "item": "https://www.nlgconsulting.co/website-in-72-hours" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is a conversion website?", "acceptedAnswer": { "@type": "Answer", "text": "A conversion website is designed as a revenue tool — not just a brand presence. Every element is structured to capture qualified leads, improve SEO visibility, and support the commercial pipeline." } },
        { "@type": "Question", "name": "Can you deliver a website in 72 hours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our rapid deployment model delivers complete, conversion-ready websites in 72 hours — ideal for companies that need to move fast without compromising quality or SEO foundation." } },
        { "@type": "Question", "name": "Is SEO included?", "acceptedAnswer": { "@type": "Answer", "text": "Every website includes technical SEO architecture: structured data, meta optimisation, sitemap, Core Web Vitals performance, and content hierarchy designed for search visibility." } },
        { "@type": "Question", "name": "What industries do you build for?", "acceptedAnswer": { "@type": "Answer", "text": "We specialise in B2B SaaS, FinTech, PropTech and professional services companies. Our websites are built for lead generation and commercial performance, not just aesthetics." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Conversion Websites & SEO Assets | NLG Consulting</title>
        <meta name="description" content="Revenue-ready websites and SEO authority assets for B2B companies. Conversion-optimised, SEO-architected, deployed in as little as 72 hours. From strategy to live." />
        <link rel="canonical" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/website-in-72-hours" />
        <meta property="og:title" content="Conversion Websites & SEO Assets | NLG Consulting" />
        <meta property="og:description" content="Revenue-ready websites for B2B companies. Conversion-optimised, SEO-architected, deployed fast." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Web & SEO Studio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conversion Websites & SEO Authority Assets</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your website is not a brochure — it is revenue infrastructure. We build conversion-optimised, SEO-architected websites that capture qualified leads and support your entire commercial pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/book">Discuss Your Web Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Websites as Business Systems, Not Design Projects</h2>
              <p>
                Most B2B companies treat their website as a design deliverable — a one-time project handed off to a web agency. The result is a site that looks polished but generates no pipeline, ranks for no keywords, and sits disconnected from the commercial engine.
              </p>
              <p>
                We approach web differently. Every website we build is designed as a conversion system — integrated with your <Link to="/sales" className="text-primary hover:underline font-medium">outbound infrastructure</Link>, optimised for SEO authority, and structured to capture and qualify leads from organic and paid traffic. Whether you need a rapid 72-hour deployment or a comprehensive platform build, the commercial logic remains the same.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">What We Build</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "Conversion Websites", desc: "Revenue-ready B2B websites with clear positioning, lead capture systems, and conversion-optimised page architecture." },
                { icon: Search, title: "SEO Authority Assets", desc: "Content pages, pillar structures and topical clusters designed to build organic visibility and domain authority over time." },
                { icon: Target, title: "Landing Pages", desc: "Campaign-specific landing pages for paid traffic, outbound sequences and product launches — built for conversion rate." },
                { icon: Layers, title: "Platform Interfaces", desc: "Web applications and SaaS interfaces for FinTech, PropTech and B2B platforms requiring functional complexity." },
                { icon: BarChart3, title: "Technical SEO", desc: "Structured data, Core Web Vitals, sitemap architecture, schema markup and performance optimisation for search engines." },
                { icon: Zap, title: "72-Hour Rapid Deploy", desc: "Complete website delivery in 72 hours — ideal for companies that need to launch fast without compromising quality or SEO foundation." }
              ].map((item, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Approach</h2>
              <p>
                Every project follows a structured methodology — from positioning audit to deployment and performance measurement.
              </p>
              <ul>
                <li><strong>Positioning & Messaging Audit:</strong> We clarify your value proposition, target audience and competitive differentiation before writing a single line of code.</li>
                <li><strong>SEO Architecture:</strong> Keyword mapping, content hierarchy and internal linking strategy designed for long-term organic growth.</li>
                <li><strong>Conversion Design:</strong> Every page is structured around a clear commercial objective — lead capture, booking, or qualification.</li>
                <li><strong>Technical Performance:</strong> Fast load times, mobile-first responsive design, accessibility and Core Web Vitals compliance.</li>
                <li><strong>Integration:</strong> CRM connections, analytics setup, and alignment with your <Link to="/ai-automation" className="text-primary hover:underline font-medium">AI automation workflows</Link> and outbound systems.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What is a conversion website?", a: "A conversion website is designed as a revenue tool — not just a brand presence. Every element is structured to capture qualified leads, improve SEO visibility, and support the commercial pipeline." },
                { q: "Can you deliver a website in 72 hours?", a: "Yes. Our rapid deployment model delivers complete, conversion-ready websites in 72 hours — ideal for companies that need to move fast without compromising quality or SEO foundation." },
                { q: "Is SEO included?", a: "Every website includes technical SEO architecture: structured data, meta optimisation, sitemap, Core Web Vitals performance, and content hierarchy designed for search visibility." },
                { q: "What industries do you specialise in?", a: "B2B SaaS, FinTech, PropTech and professional services. Our websites are built for lead generation and commercial performance, not just aesthetics." },
                { q: "How does this integrate with other NLG services?", a: "Your website connects directly with our outbound systems, AI automation workflows and lead generation infrastructure — creating a unified revenue engine." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <RelatedServices currentService="web" />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Discuss Your Web & SEO Project</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a rapid deployment or a comprehensive platform build, we can assess the right approach for your commercial objectives.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default WebsiteIn72Hours;
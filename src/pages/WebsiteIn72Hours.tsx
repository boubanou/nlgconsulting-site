import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const WebsiteIn72Hours = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Website in 72 Hours", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Get a revenue-ready, high-converting website in 72 hours. Designed for B2B startups and service companies.", "url": "https://www.nlgconsulting.co/website-in-72-hours", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Website in 72 Hours", "item": "https://www.nlgconsulting.co/website-in-72-hours" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "Can you really build a website in 72 hours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use proven templates and frameworks optimized for B2B conversion. After a 1-hour briefing, we deliver a complete, live website within 72 hours." } },
        { "@type": "Question", "name": "What's included in the 72-hour website?", "acceptedAnswer": { "@type": "Answer", "text": "A fully responsive website with up to 7 pages, SEO setup, contact forms, analytics, CRM integration, and conversion-optimized design." } },
        { "@type": "Question", "name": "How much does a 72-hour website cost?", "acceptedAnswer": { "@type": "Answer", "text": "Our 72-hour websites start at €1,500. Enterprise and custom platform builds are quoted separately based on scope." } },
        { "@type": "Question", "name": "Is SEO included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every website includes technical SEO setup, meta tags, sitemap, schema markup, and Core Web Vitals optimization." } },
        { "@type": "Question", "name": "Can I update the website myself?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build on modern platforms with easy-to-use content management. We also offer ongoing support and maintenance packages." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Website in 72 Hours | High-Converting B2B Websites | NLG Consulting</title>
        <meta name="description" content="Get a revenue-ready website in 72 hours. Designed for B2B conversion, optimized for SEO. From landing pages to full platforms. Starting at €1,500." />
        <link rel="canonical" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/site-web-en-72h" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/website-in-72-hours" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/website-in-72-hours" />
        <meta property="og:title" content="Website in 72 Hours | High-Converting B2B Websites | NLG Consulting" />
        <meta property="og:description" content="Revenue-ready website in 72 hours. B2B conversion-optimized. Starting at €1,500." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">72-Hour Websites</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Website, Live in 72 Hours</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop waiting months for a website that doesn't convert. We deliver revenue-ready, SEO-optimized B2B websites in just 72 hours.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Get Started Today <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why 72 Hours Changes Everything</h2>
            <p>Most web agencies take 2-4 months and €10,000+ to deliver a website. By the time it launches, your market has moved, your messaging is stale, and you've lost months of potential leads.</p>
            <p>Our 72-hour model flips this. After a 1-hour briefing, we build and launch your complete website in 3 days. Designed for conversion, optimized for SEO, ready to generate leads from day one.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What You Get</h3>
            <ul>
              <li><strong>Up to 7 pages:</strong> Home, About, Services, Contact, and more.</li>
              <li><strong>Mobile-first design:</strong> Responsive across all devices.</li>
              <li><strong>SEO setup:</strong> Meta tags, sitemap, schema, Core Web Vitals.</li>
              <li><strong>Contact forms & CTAs:</strong> Conversion-optimized for lead capture.</li>
              <li><strong>Analytics & CRM:</strong> Google Analytics, CRM integration.</li>
            </ul>
            <p>Need more? Combine your website with our <Link to="/outsourced-sdr" className="text-primary hover:underline">outsourced SDR</Link> or <Link to="/marketing" className="text-primary hover:underline">PPC campaigns</Link> to drive traffic and convert visitors into meetings.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "72h", label: "Delivery Time" }, { metric: "€1,500", label: "Starting Price" }, { metric: "7", label: "Pages Included" }, { metric: "100%", label: "SEO-Optimized" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">72-Hour Website FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "Can you really build a website in 72 hours?", a: "Yes. After a 1-hour briefing, we deliver a complete, live website within 72 hours." },
                { q: "What's included?", a: "Up to 7 responsive pages, SEO setup, contact forms, analytics, and CRM integration." },
                { q: "How much does it cost?", a: "Starting at €1,500. Enterprise builds quoted separately." },
                { q: "Is SEO included?", a: "Yes — technical SEO, meta tags, sitemap, schema, and Core Web Vitals optimization." },
                { q: "Can I update it myself?", a: "Yes. Built on modern platforms with easy content management, plus optional support packages." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="web" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Website?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free briefing call and have your new website live in 72 hours.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book a Free Briefing <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default WebsiteIn72Hours;

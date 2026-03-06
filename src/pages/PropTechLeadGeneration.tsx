import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const PropTechLeadGeneration = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "PropTech Lead Generation", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Lead generation for PropTech companies. Reach real estate developers, property managers, and investors with targeted B2B outreach.", "url": "https://www.nlgconsulting.co/proptech-lead-generation", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "PropTech Lead Generation", "item": "https://www.nlgconsulting.co/proptech-lead-generation" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is PropTech lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "PropTech lead generation is the process of identifying and qualifying potential customers for property technology solutions — including real estate developers, property managers, investors, and agents." } },
        { "@type": "Question", "name": "How do you generate leads for PropTech companies?", "acceptedAnswer": { "@type": "Answer", "text": "We use targeted outbound campaigns across LinkedIn, email, and phone, combined with industry-specific messaging and ICP frameworks tailored to real estate stakeholders." } },
        { "@type": "Question", "name": "How many PropTech leads can you generate per month?", "acceptedAnswer": { "@type": "Answer", "text": "Our PropTech clients typically receive 10-25 qualified meetings per month with decision-makers at real estate companies." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>PropTech Lead Generation | Reach Real Estate Decision-Makers | NLG Consulting</title>
        <meta name="description" content="Lead generation for PropTech companies. Reach real estate developers, property managers, and investors with targeted B2B outreach. 10-25 qualified meetings/month." />
        <link rel="canonical" href="https://www.nlgconsulting.co/proptech-lead-generation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/proptech-lead-generation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/proptech-lead-generation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/proptech-lead-generation" />
        <meta property="og:title" content="PropTech Lead Generation | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">PropTech</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PropTech Lead Generation That Reaches Real Estate Decision-Makers</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Selling PropTech is hard. Real estate professionals are conservative, relationship-driven, and hard to reach. Our industry-specific outbound gets you in front of the right people.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Free PropTech Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why PropTech Companies Need Specialized Lead Generation</h2>
            <p>Generic B2B outreach doesn't work in real estate. Property professionals respond to industry expertise, not generic sales pitches. Our team has deep PropTech experience from our own <Link to="/ventures" className="text-primary hover:underline">venture portfolio</Link>, giving us unique insight into what resonates.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Who We Help You Reach</h3>
            <ul>
              <li>Real estate developers and operators</li>
              <li>Property management companies</li>
              <li>Real estate investors and funds</li>
              <li>Estate agents and brokerages</li>
              <li>Construction and facility management firms</li>
            </ul>
            <p>Combine PropTech lead gen with our <Link to="/proptech-consulting" className="text-primary hover:underline">PropTech consulting</Link> and <Link to="/outsourced-sdr" className="text-primary hover:underline">outsourced SDR</Link> services for maximum impact.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">PropTech Lead Generation FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What is PropTech lead generation?", a: "Identifying and qualifying potential customers for property technology solutions — developers, property managers, investors, and agents." },
                { q: "How do you generate PropTech leads?", a: "Targeted outbound across LinkedIn, email, and phone with industry-specific messaging." },
                { q: "How many leads per month?", a: "10-25 qualified meetings per month with real estate decision-makers." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="proptech" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your PropTech Pipeline?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free PropTech audit and see how we can connect you with real estate decision-makers.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book a Free Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default PropTechLeadGeneration;

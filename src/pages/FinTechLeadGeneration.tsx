import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const FinTechLeadGeneration = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "FinTech Lead Generation", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Lead generation for FinTech companies. Reach CFOs, treasury teams, and financial decision-makers with targeted B2B outreach.", "url": "https://www.nlgconsulting.co/fintech-lead-generation", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "FinTech Lead Generation", "item": "https://www.nlgconsulting.co/fintech-lead-generation" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "How do you generate leads for FinTech companies?", "acceptedAnswer": { "@type": "Answer", "text": "We use targeted outbound campaigns combining LinkedIn, email, and cold calling to reach CFOs, treasury managers, and financial operations leaders at target companies." } },
        { "@type": "Question", "name": "What FinTech segments do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "Payments, lending, treasury, compliance/RegTech, insurance, and wealth management. Our messaging is tailored to each segment's specific pain points." } },
        { "@type": "Question", "name": "How many qualified meetings can you deliver?", "acceptedAnswer": { "@type": "Answer", "text": "FinTech clients typically receive 10-25 qualified meetings per month with financial decision-makers." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>FinTech Lead Generation | Reach Financial Decision-Makers | NLG Consulting</title>
        <meta name="description" content="Lead generation for FinTech companies. Reach CFOs, treasury teams, and financial decision-makers. 10-25 qualified meetings per month. Book a free FinTech audit." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fintech-lead-generation" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/fintech-lead-generation" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/fintech-lead-generation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fintech-lead-generation" />
        <meta property="og:title" content="FinTech Lead Generation | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">FinTech</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">FinTech Lead Generation That Reaches Financial Decision-Makers</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              FinTech sales cycles are long and complex. Our specialized outbound connects you with CFOs, treasury teams, and financial operations leaders who are actively looking for solutions.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Free FinTech Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why FinTech Companies Need Industry-Specific Lead Generation</h2>
            <p>Financial decision-makers are bombarded with generic sales pitches. They respond to expertise, credibility, and relevance. Our FinTech lead generation leverages deep industry knowledge to craft messaging that opens doors.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">FinTech Segments We Serve</h3>
            <ul>
              <li><strong>Payments & Processing:</strong> Connect with merchants, platforms, and enterprises.</li>
              <li><strong>Lending & Credit:</strong> Reach lenders, credit officers, and risk teams.</li>
              <li><strong>Treasury & Cash Management:</strong> Target CFOs and treasury managers.</li>
              <li><strong>RegTech & Compliance:</strong> Engage compliance officers and legal teams.</li>
              <li><strong>InsurTech:</strong> Connect with insurance carriers and brokers.</li>
            </ul>
            <p>Pair FinTech lead gen with our <Link to="/outsourced-sdr" className="text-primary hover:underline">outsourced SDR</Link> and <Link to="/go-to-market-consulting" className="text-primary hover:underline">GTM consulting</Link> for accelerated growth.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">FinTech Lead Generation FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "How do you generate FinTech leads?", a: "Targeted outbound combining LinkedIn, email, and cold calling to reach CFOs, treasury managers, and financial leaders." },
                { q: "What segments do you cover?", a: "Payments, lending, treasury, compliance/RegTech, insurance, and wealth management." },
                { q: "How many meetings per month?", a: "10-25 qualified meetings with financial decision-makers." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="sales" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your FinTech Pipeline?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free FinTech audit and see how we can connect you with financial decision-makers.</p>
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

export default FinTechLeadGeneration;

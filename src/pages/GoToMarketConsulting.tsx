import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const GoToMarketConsulting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "Go-To-Market Consulting", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Go-to-market consulting for SaaS, FinTech, and PropTech companies. Market entry strategy, channel design, pricing, and launch execution.", "url": "https://www.nlgconsulting.co/go-to-market-consulting", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Go-To-Market Consulting", "item": "https://www.nlgconsulting.co/go-to-market-consulting" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is go-to-market consulting?", "acceptedAnswer": { "@type": "Answer", "text": "GTM consulting helps companies plan and execute their market entry or expansion strategy — including target market selection, positioning, pricing, channel strategy, and launch execution." } },
        { "@type": "Question", "name": "Who needs GTM consulting?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS, FinTech, and PropTech companies launching new products, entering new markets, or pivoting their revenue model benefit most from GTM consulting." } },
        { "@type": "Question", "name": "How long does a GTM engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical GTM strategy engagement takes 4-8 weeks for the strategy phase, followed by 3-6 months of execution support." } },
        { "@type": "Question", "name": "Do you help with execution or just strategy?", "acceptedAnswer": { "@type": "Answer", "text": "Both. We develop the strategy and can execute it through our outsourced SDR, marketing, and sales infrastructure services." } },
        { "@type": "Question", "name": "What markets do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "We help companies launch and expand across Europe, North America, and the Middle East, with deep expertise in cross-border GTM." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>Go-To-Market Consulting | GTM Strategy & Execution | NLG Consulting</title>
        <meta name="description" content="Go-to-market consulting for SaaS, FinTech, and PropTech. Market entry, positioning, pricing, channel strategy, and launch execution. Book a free GTM review." />
        <link rel="canonical" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/go-to-market-consulting" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/go-to-market-consulting" />
        <meta property="og:title" content="Go-To-Market Consulting | GTM Strategy & Execution | NLG Consulting" />
        <meta property="og:description" content="GTM consulting for SaaS, FinTech, and PropTech. Strategy + execution." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">GTM Consulting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Go-To-Market Consulting for SaaS & Tech Companies</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Launch in new markets without burning cash. Our operator-led GTM consulting gives you the strategy, channels, and execution plan to win — fast.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Free GTM Review <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Most Go-To-Market Strategies Fail</h2>
            <p>70% of new market entries fail because companies skip the fundamentals: they don't validate demand, misunderstand buyer behavior, or underinvest in sales infrastructure. The result? Burned cash and missed windows.</p>
            <p>NLG Consulting's GTM approach is different. We're operators, not just consultants. We've launched and scaled companies across Europe, North America, and the Middle East. We know what works because we've done it ourselves.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Our GTM Framework</h3>
            <ul>
              <li><strong>Market Validation:</strong> TAM/SAM/SOM analysis, competitive mapping, and demand validation.</li>
              <li><strong>Positioning & Messaging:</strong> Differentiated positioning that resonates with your target buyers.</li>
              <li><strong>Channel Strategy:</strong> Direct sales, partnerships, PLG, or hybrid — we design the right channel mix.</li>
              <li><strong>Pricing Strategy:</strong> Value-based pricing models optimized for your market and buyer personas.</li>
              <li><strong>Launch Execution:</strong> We don't just plan — we execute through our <Link to="/outsourced-sdr" className="text-primary hover:underline">outsourced SDR</Link> and <Link to="/marketing" className="text-primary hover:underline">marketing</Link> teams.</li>
            </ul>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">GTM Consulting FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What is go-to-market consulting?", a: "GTM consulting helps companies plan and execute market entry or expansion — target market, positioning, pricing, channels, and launch." },
                { q: "Who needs GTM consulting?", a: "SaaS, FinTech, and PropTech companies launching new products, entering new markets, or pivoting their revenue model." },
                { q: "How long does a GTM engagement take?", a: "4-8 weeks for strategy, 3-6 months of execution support." },
                { q: "Strategy only or execution too?", a: "Both. We develop strategy and execute through our SDR, marketing, and sales infrastructure." },
                { q: "What markets do you cover?", a: "Europe, North America, and the Middle East." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="go-to-market" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your GTM?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free GTM review and walk away with 3 actionable insights for your market entry.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book a Free GTM Review <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default GoToMarketConsulting;

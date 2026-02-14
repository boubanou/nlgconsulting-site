import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, DollarSign, TrendingUp, BarChart3, Layers,
  CheckCircle, Zap
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const SaaSMonetization = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "SaaS Monetization & Revenue Model Consulting",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Expert SaaS pricing and monetization consulting. Fix your revenue model to increase ARPU 30-50%. From freemium to enterprise pricing.",
        "url": "https://nlgconsulting.co/saas-monetization"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/services" },
          { "@type": "ListItem", "position": 3, "name": "SaaS Monetization", "item": "https://nlgconsulting.co/saas-monetization" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is SaaS monetization consulting?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS monetization consulting helps software companies optimize their pricing strategy, packaging, and revenue model to maximize ARPU, reduce churn, and accelerate revenue growth. It covers everything from freemium strategy to enterprise pricing tiers." } },
          { "@type": "Question", "name": "How much can better pricing increase my SaaS revenue?", "acceptedAnswer": { "@type": "Answer", "text": "A 1% improvement in pricing generates 11% more profit on average. Our clients typically see ARPU increases of 30-50% within 60 days through strategic pricing optimization, tier restructuring, and value metric alignment." } },
          { "@type": "Question", "name": "When should a SaaS company review its pricing?", "acceptedAnswer": { "@type": "Answer", "text": "Every SaaS company should review pricing at least annually. Key triggers include: launching new features, entering new markets, experiencing high churn, seeing low upgrade rates, or preparing for fundraising. If you haven't reviewed pricing in 12+ months, you're likely leaving revenue on the table." } },
          { "@type": "Question", "name": "Do you help with marketplace and platform monetization?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have deep experience in marketplace monetization including commission models, transaction fees, subscription tiers, and hybrid models. Our PropTech ventures give us firsthand experience building profitable marketplace platforms." } },
          { "@type": "Question", "name": "How long does a monetization engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical monetization engagement runs 4-8 weeks. Week 1-2: data analysis and competitive benchmarking. Week 3-4: strategy development and pricing model design. Week 5-8: implementation support, A/B testing setup, and rollout planning." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SaaS Monetization: Fix Your Revenue Model | NLG</title>
        <meta name="description" content="Stop leaving revenue on the table. Expert SaaS pricing & monetization consulting. Increase ARPU 30-50%. Free revenue audit." />
        <meta name="keywords" content="SaaS monetization strategy, SaaS pricing strategy, revenue model consulting, subscription pricing optimization, SaaS revenue growth, pricing tiers" />
        <link rel="canonical" href="https://nlgconsulting.co/saas-monetization" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/saas-monetization" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/monetisation-saas" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/saas-monetization" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/saas-monetization" />
        <meta property="og:title" content="SaaS Monetization: Fix Your Revenue Model | NLG Consulting" />
        <meta property="og:description" content="Stop leaving revenue on the table. Increase ARPU 30-50% with expert SaaS pricing & monetization consulting." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">SaaS Monetization</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Pricing Is Costing You Revenue
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Most SaaS companies undercharge by 30-50%. We fix your revenue model — pricing, packaging, and value metrics — so every customer generates maximum lifetime value.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Get Your Free Revenue Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "30-50%", label: "ARPU Increase" },
                { metric: "11%", label: "Profit from 1% Price Improvement" },
                { metric: "4-8 wks", label: "Engagement Duration" },
                { metric: "60 days", label: "Time to Impact" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Most SaaS Companies Get Monetization Wrong</h2>
              <p>
                Pricing is the most powerful lever in your business. A 1% improvement in pricing generates 11% more profit — yet most SaaS founders set their price once and never revisit it. They focus on acquisition and ignore the revenue sitting inside their existing customer base.
              </p>
              <p>
                NLG Consulting's monetization practice helps SaaS companies unlock trapped revenue through strategic pricing optimization, tier restructuring, and value metric alignment. We don't guess — we use data, competitive analysis, and willingness-to-pay research to design pricing that maximizes both acquisition and expansion revenue.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Common Monetization Mistakes We Fix</h3>
              <ul>
                <li><strong>Pricing too low:</strong> Founders afraid to charge what their product is worth, leaving 30-50% revenue on the table</li>
                <li><strong>Wrong value metric:</strong> Charging per seat when usage-based would drive 2-3x more revenue</li>
                <li><strong>Missing tiers:</strong> One-size-fits-all pricing that forces enterprise buyers into SMB plans</li>
                <li><strong>No expansion revenue:</strong> No upsell paths, add-ons, or usage-based components to grow accounts</li>
                <li><strong>Freemium bleeding:</strong> Free tier that's too generous, cannibalizing paid conversions</li>
              </ul>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">From Pricing to Full Revenue Strategy</h3>
              <p>
                Monetization doesn't exist in a vacuum. Your pricing strategy connects directly to your <Link to="/go-to-market" className="text-primary hover:underline font-medium">go-to-market approach</Link>, your <Link to="/sales" className="text-primary hover:underline font-medium">sales process</Link>, and your product positioning. We take a holistic view — optimizing not just what you charge, but how you sell, package, and communicate value.
              </p>
              <p>
                For PropTech and marketplace companies, we bring firsthand experience from building <Link to="/ventures" className="text-primary hover:underline font-medium">our own platforms</Link>. Commission models, transaction fees, subscription tiers, hybrid monetization — we've tested these models with real revenue at stake.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Deliver</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <BarChart3 className="w-6 h-6" />, title: "Pricing Analysis", desc: "Deep-dive into your current pricing, competitive landscape, and willingness-to-pay data." },
                { icon: <Layers className="w-6 h-6" />, title: "Tier Architecture", desc: "Design pricing tiers that guide customers from entry to enterprise naturally." },
                { icon: <DollarSign className="w-6 h-6" />, title: "Value Metric Design", desc: "Identify the right value metric — usage, seats, features, or hybrid — to maximize revenue." },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Expansion Revenue", desc: "Build upsell paths, add-ons, and usage-based components to grow account value." },
                { icon: <CheckCircle className="w-6 h-6" />, title: "A/B Test Strategy", desc: "Design and implement pricing experiments to validate changes before full rollout." },
                { icon: <Zap className="w-6 h-6" />, title: "Rollout Support", desc: "Implementation support including grandfathering strategy, migration plans, and communication." }
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What is SaaS monetization consulting?", a: "It helps software companies optimize pricing strategy, packaging, and revenue models to maximize ARPU, reduce churn, and accelerate revenue growth." },
                { q: "How much can better pricing increase my revenue?", a: "A 1% pricing improvement generates 11% more profit. Our clients typically see ARPU increases of 30-50% within 60 days." },
                { q: "When should I review my pricing?", a: "At least annually. Key triggers: new features, new markets, high churn, low upgrade rates, or fundraising prep." },
                { q: "Do you help with marketplace monetization?", a: "Yes. We have deep experience in commission models, transaction fees, subscription tiers, and hybrid models from our own PropTech ventures." },
                { q: "How long does an engagement take?", a: "4-8 weeks: analysis and benchmarking (weeks 1-2), strategy design (weeks 3-4), implementation and testing (weeks 5-8)." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="saas-monetization" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <DollarSign className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Stop Leaving Revenue on the Table</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a free revenue audit. We'll show you exactly where your pricing is costing you money.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Get Your Free Revenue Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default SaaSMonetization;

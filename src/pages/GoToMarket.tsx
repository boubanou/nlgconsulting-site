import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Globe, Map, Target, BarChart3,
  CheckCircle, TrendingUp, Zap
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const GoToMarket = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "International Go-To-Market Strategy for SaaS",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Proven GTM frameworks for SaaS companies entering new markets. International expansion without burning cash.",
        "url": "https://nlgconsulting.co/go-to-market"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/services" },
          { "@type": "ListItem", "position": 3, "name": "Go-To-Market", "item": "https://nlgconsulting.co/go-to-market" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a go-to-market strategy?", "acceptedAnswer": { "@type": "Answer", "text": "A go-to-market (GTM) strategy is a comprehensive plan for launching a product in a new market or scaling in existing markets. It covers target audience, positioning, pricing, channels, sales process, and success metrics. For SaaS companies, a strong GTM strategy can mean the difference between market leadership and expensive failure." } },
          { "@type": "Question", "name": "How do you help SaaS companies expand internationally?", "acceptedAnswer": { "@type": "Answer", "text": "We help with market selection, localization strategy, pricing adaptation, channel partnerships, regulatory compliance, and on-the-ground execution. Our team has direct experience expanding businesses across Europe, North America, and the Middle East." } },
          { "@type": "Question", "name": "How long does a GTM strategy engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "A complete GTM strategy takes 4-6 weeks to develop. This includes market research, competitive analysis, positioning, pricing strategy, channel planning, and a detailed execution roadmap. Implementation support is available on an ongoing basis." } },
          { "@type": "Question", "name": "What markets do you have experience in?", "acceptedAnswer": { "@type": "Answer", "text": "We have direct operational experience in Western Europe (France, UK, Belgium, Netherlands, Germany), North America (US, Canada), and the Middle East (UAE, Saudi Arabia). For other markets, we leverage our partner network." } },
          { "@type": "Question", "name": "Can you help execute the GTM plan, not just create it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unlike traditional consultants, we offer full execution support including outsourced SDR teams, marketing campaigns, website localization, and operational setup. We can be your on-the-ground partner in new markets." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Go-To-Market Strategy for SaaS Founders | NLG</title>
        <meta name="description" content="Launch in new markets without burning cash. Proven GTM frameworks for SaaS. International expansion expertise. Book strategy call." />
        <meta name="keywords" content="go-to-market strategy SaaS, international GTM strategy, market entry strategy, SaaS launch strategy, expansion planning, B2B go-to-market" />
        <link rel="canonical" href="https://nlgconsulting.co/go-to-market" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/go-to-market" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/strategie-go-to-market" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/go-to-market" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/go-to-market" />
        <meta property="og:title" content="Go-To-Market Strategy for SaaS Founders | NLG Consulting" />
        <meta property="og:description" content="Launch in new markets without burning cash. Proven GTM frameworks for SaaS companies." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Go-To-Market Strategy</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Launch in New Markets Without Burning Cash
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Proven go-to-market frameworks for SaaS companies ready to scale internationally. Market selection, positioning, pricing, channels, and execution — in one strategic package.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Plan Your Market Entry <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "15+", label: "Years International Experience" },
                { metric: "3", label: "Continents Covered" },
                { metric: "4-6 wks", label: "Strategy Ready" },
                { metric: "50+", label: "Companies Advised" }
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Most SaaS International Expansions Fail</h2>
              <p>
                80% of SaaS companies that attempt international expansion underperform their projections. The common mistake? Treating a new market like a copy-paste of their home market. Different buyer behaviors, regulatory environments, competitive landscapes, and cultural norms require a fundamentally different approach.
              </p>
              <p>
                NLG Consulting's go-to-market practice is built on real international operating experience — not theoretical frameworks. We've built and scaled businesses across Europe, North America, and the Middle East. We know what works because we've done it ourselves.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Our GTM Framework for SaaS Companies</h3>
              <ul>
                <li><strong>Market Selection:</strong> Data-driven analysis of market size, competition, regulatory complexity, and cultural fit to choose the right market first</li>
                <li><strong>Positioning & Messaging:</strong> Adapting your value proposition for local market dynamics — not just translating, but repositioning</li>
                <li><strong>Pricing Strategy:</strong> Market-specific pricing aligned with local willingness-to-pay and competitive benchmarks (see our <Link to="/saas-monetization" className="text-primary hover:underline font-medium">monetization consulting</Link>)</li>
                <li><strong>Channel Strategy:</strong> Identifying the right acquisition channels — direct sales, partnerships, <Link to="/marketing" className="text-primary hover:underline font-medium">paid marketing</Link>, or channel partners</li>
                <li><strong>Sales Execution:</strong> Deploying <Link to="/sales" className="text-primary hover:underline font-medium">SDR teams</Link> and <Link to="/ai-lead-generation" className="text-primary hover:underline font-medium">AI prospecting systems</Link> for immediate market traction</li>
                <li><strong>Operational Setup:</strong> Legal, compliance, payments, and local infrastructure to operate smoothly</li>
              </ul>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">From Strategy to Revenue</h3>
              <p>
                We don't stop at strategy decks. Our unique advantage is that we can execute alongside you — deploying SDR teams, launching marketing campaigns, building localized websites through our <Link to="/web" className="text-primary hover:underline font-medium">web studio</Link>, and providing ongoing <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link>. One partner for the entire market entry journey.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Build Your GTM Strategy</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Market Intelligence", desc: "Deep-dive into target markets: TAM, competition, regulations, buyer behavior, and channel landscape." },
                { step: "2", title: "Strategy Design", desc: "Build your positioning, pricing, channel strategy, and 90-day execution roadmap with clear milestones." },
                { step: "3", title: "Launch Execution", desc: "Deploy sales teams, launch campaigns, and activate channels for immediate market traction." },
                { step: "4", title: "Optimize & Scale", desc: "Analyze results, refine approach, and scale what works across additional markets." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
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
                { q: "What is a go-to-market strategy?", a: "A GTM strategy is a comprehensive plan for launching in a new market: audience, positioning, pricing, channels, sales process, and success metrics." },
                { q: "How do you help with international expansion?", a: "Market selection, localization, pricing adaptation, channel partnerships, regulatory compliance, and on-the-ground execution across Europe, NA, and Middle East." },
                { q: "How long does a GTM strategy take?", a: "4-6 weeks including research, competitive analysis, positioning, pricing, and detailed execution roadmap." },
                { q: "What markets do you cover?", a: "Direct experience in Western Europe, North America, and the Middle East. Partner network for other markets." },
                { q: "Can you execute the plan too?", a: "Yes. We deploy SDR teams, marketing campaigns, website localization, and operational setup — not just strategy decks." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="go-to-market" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Globe className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Enter New Markets?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a strategy call to discuss your expansion goals and how we can help you launch smart.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book Your Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default GoToMarket;

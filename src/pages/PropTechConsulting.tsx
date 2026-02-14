import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Building2, Layers, Globe, DollarSign,
  CheckCircle, Zap, BookOpen
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const PropTechConsulting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "PropTech & Real Estate Technology Consulting",
        "provider": {
          "@type": "Organization",
          "name": "NLG Consulting",
          "founder": {
            "@type": "Person",
            "name": "Gregory Brenig",
            "knowsAbout": ["PropTech", "Fractional Real Estate", "Tokenization", "Real Estate Marketplaces"],
            "authorOf": { "@type": "Book", "name": "Level Up in Fractional Real Estate", "url": "https://a.co/d/dih3FYN" }
          }
        },
        "description": "Expert PropTech consulting from a team that builds PropTech platforms. Tokenization, marketplaces, fractional ownership, and real estate technology strategy.",
        "url": "https://nlgconsulting.co/proptech-consulting"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/services" },
          { "@type": "ListItem", "position": 3, "name": "PropTech Consulting", "item": "https://nlgconsulting.co/proptech-consulting" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is PropTech consulting?", "acceptedAnswer": { "@type": "Answer", "text": "PropTech consulting helps real estate companies and startups leverage technology to build platforms, optimize operations, and create new revenue models. This includes marketplace development, tokenization strategy, fractional ownership platforms, and digital transformation of traditional real estate processes." } },
          { "@type": "Question", "name": "What experience does NLG have in PropTech?", "acceptedAnswer": { "@type": "Answer", "text": "NLG Consulting's founder has built PropTech platforms, authored 'Level Up in Fractional Real Estate' (available on Amazon), and operated in the real estate technology space for years. We're not just advisors — we're PropTech operators who understand the technology, regulations, and market dynamics from the inside." } },
          { "@type": "Question", "name": "Can you help with real estate tokenization?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have deep experience in real estate tokenization including security token architecture, regulatory compliance, smart contract strategy, and marketplace design. We help companies navigate the technical and legal complexities of tokenizing real estate assets." } },
          { "@type": "Question", "name": "Do you build PropTech platforms or just advise?", "acceptedAnswer": { "@type": "Answer", "text": "Both. We provide strategic advisory on PropTech business models, technology architecture, and go-to-market strategy. Through our web studio, we can also build the technology platform itself — from MVP to production-ready product." } },
          { "@type": "Question", "name": "What PropTech business models do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "We work across all PropTech verticals: marketplace platforms, property management software, fractional ownership, tokenization, co-living/co-working, construction tech, and real estate data analytics. Our monetization expertise helps you design the right revenue model for your specific market." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>PropTech Consulting: Build & Scale Platforms | NLG</title>
        <meta name="description" content="Expert PropTech & real estate technology consulting. Tokenization, marketplaces, fractional ownership. From concept to revenue. By PropTech operators." />
        <meta name="keywords" content="PropTech consulting, real estate technology consulting, fractional real estate technology, property technology strategy, PropTech startup advisor, real estate tokenization" />
        <link rel="canonical" href="https://nlgconsulting.co/proptech-consulting" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/proptech-consulting" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/conseil-proptech" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/proptech-consulting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/proptech-consulting" />
        <meta property="og:title" content="PropTech Consulting: Build & Scale Platforms | NLG Consulting" />
        <meta property="og:description" content="Expert PropTech consulting from operators who build PropTech platforms. Tokenization, marketplaces, fractional ownership." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">PropTech Consulting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PropTech Consulting by Operators Who Build Platforms
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real estate technology strategy from a team that builds and operates PropTech platforms. Tokenization, marketplaces, fractional ownership, and digital transformation — from concept to revenue.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Discuss Your PropTech Vision <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Authority */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-card rounded-2xl border">
              <div className="flex-shrink-0">
                <img src="/images/book-cover.jpg" alt="Level Up in Fractional Real Estate by Gregory Brenig" className="w-32 h-auto rounded-lg shadow-md" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Published Author</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Level Up in Fractional Real Estate</h2>
                <p className="text-muted-foreground mb-4">
                  Written by our founder Gregory Brenig, this book is the definitive guide to fractional real estate investing and technology. Our PropTech consulting is backed by published thought leadership and real platform-building experience.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://a.co/d/dih3FYN" target="_blank" rel="noopener noreferrer">
                    Read on Amazon <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose an Operator-Led PropTech Consultancy</h2>
              <p>
                Most PropTech consultants come from traditional real estate or pure technology backgrounds. They understand one side but not the other. NLG Consulting sits at the intersection — we've built PropTech platforms, navigated real estate regulations, and scaled technology products. This dual expertise is what sets our consulting apart.
              </p>
              <p>
                Our <Link to="/ventures" className="text-primary hover:underline font-medium">venture portfolio</Link> includes active PropTech platforms. We test our frameworks with real capital at stake before recommending them to clients. When we advise on tokenization architecture, marketplace design, or fractional ownership models, we're drawing from direct operational experience.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">PropTech Verticals We Specialize In</h3>
              <ul>
                <li><strong>Fractional Ownership Platforms:</strong> Technology architecture, regulatory compliance, and <Link to="/saas-monetization" className="text-primary hover:underline font-medium">monetization strategy</Link> for fractional real estate investment platforms</li>
                <li><strong>Real Estate Marketplaces:</strong> Two-sided marketplace design, liquidity strategy, and growth mechanics</li>
                <li><strong>Tokenization & Blockchain:</strong> Security token architecture, smart contract strategy, and regulatory navigation</li>
                <li><strong>Property Management Tech:</strong> SaaS platforms for property managers, landlords, and real estate operators</li>
                <li><strong>Construction Tech:</strong> Digital transformation for construction and development companies</li>
              </ul>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">From Strategy to Platform Launch</h3>
              <p>
                We don't just advise — we help you execute. Our <Link to="/web" className="text-primary hover:underline font-medium">web studio</Link> can build your MVP or production platform. Our <Link to="/sales" className="text-primary hover:underline font-medium">SDR teams</Link> can generate your first customers. Our <Link to="/go-to-market" className="text-primary hover:underline font-medium">GTM practice</Link> can plan your market entry. One partner from concept to revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Deliver</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Building2 className="w-6 h-6" />, title: "Platform Strategy", desc: "Business model design, technology architecture, and product roadmap for PropTech platforms." },
                { icon: <Layers className="w-6 h-6" />, title: "Tokenization Advisory", desc: "Security token architecture, regulatory compliance, and smart contract strategy." },
                { icon: <DollarSign className="w-6 h-6" />, title: "Monetization Design", desc: "Revenue model optimization: commissions, subscriptions, transaction fees, or hybrid." },
                { icon: <Globe className="w-6 h-6" />, title: "Market Entry", desc: "Go-to-market strategy for PropTech companies entering new markets or verticals." },
                { icon: <CheckCircle className="w-6 h-6" />, title: "Regulatory Navigation", desc: "Compliance strategy for fractional ownership, tokenization, and real estate technology." },
                { icon: <Zap className="w-6 h-6" />, title: "MVP & Platform Build", desc: "Through our web studio, we can build your technology platform from MVP to production." }
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
                { q: "What is PropTech consulting?", a: "PropTech consulting helps real estate companies leverage technology to build platforms, optimize operations, and create new revenue models — from marketplaces to tokenization." },
                { q: "What experience does NLG have in PropTech?", a: "Our founder built PropTech platforms, authored 'Level Up in Fractional Real Estate,' and operates in the real estate technology space. We're operators, not just advisors." },
                { q: "Can you help with tokenization?", a: "Yes. Deep experience in security token architecture, regulatory compliance, smart contracts, and marketplace design for tokenized real estate assets." },
                { q: "Do you build platforms or just advise?", a: "Both. Strategic advisory on business models and technology, plus platform development through our web studio — from MVP to production." },
                { q: "What PropTech models do you work with?", a: "Marketplaces, property management SaaS, fractional ownership, tokenization, co-living/co-working, construction tech, and real estate data analytics." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="proptech" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Building2 className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your PropTech Platform?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a strategy call to discuss your PropTech vision with operators who've built it before.
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

export default PropTechConsulting;

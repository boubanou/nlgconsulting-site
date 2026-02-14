import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Target,
  Brain,
  DollarSign,
  Globe,
  Building2,
  Lightbulb,
  Rocket,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Zap
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "NLG Consulting",
        "url": "https://nlgconsulting.co",
        "logo": "https://nlgconsulting.co/logo.svg",
        "description": "Revenue acceleration consulting for SaaS & PropTech companies.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Founder & CEO",
          "knowsAbout": ["SaaS Revenue Strategy", "PropTech", "B2B Sales", "AI Lead Generation"]
        },
        "areaServed": ["Europe", "North America", "Middle East"],
        "foundingDate": "2019"
      },
      {
        "@type": "Service",
        "name": "Revenue Acceleration Consulting",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "End-to-end revenue acceleration for SaaS and PropTech companies.",
        "url": "https://nlgconsulting.co/services",
        "serviceType": "Revenue Acceleration Consulting"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/services" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is revenue acceleration consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Revenue acceleration consulting combines sales strategy, lead generation systems, pricing optimization, and go-to-market execution to help SaaS and PropTech companies grow revenue faster without proportionally increasing headcount." } },
          { "@type": "Question", "name": "Who is this for?", "acceptedAnswer": { "@type": "Answer", "text": "SaaS founders, PropTech operators, and B2B CEOs scaling from $500K to $10M+ ARR who need strategic execution support." } },
          { "@type": "Question", "name": "How quickly can I expect results?", "acceptedAnswer": { "@type": "Answer", "text": "Most clients see first qualified meetings within 2-3 weeks. Revenue model improvements show impact within 30-60 days. Full GTM strategies are ready in 4-6 weeks." } },
          { "@type": "Question", "name": "Do you work with early-stage startups?", "acceptedAnswer": { "@type": "Answer", "text": "We work best with companies that have product-market fit. Pre-revenue startups may benefit from our advisory practice first." } },
          { "@type": "Question", "name": "What makes NLG different?", "acceptedAnswer": { "@type": "Answer", "text": "We're operators, not observers. We execute alongside you with outsourced SDR teams, AI systems, and hands-on implementation." } }
        ]
      }
    ]
  };

  const serviceCards = [
    { icon: <Target className="w-8 h-8" />, title: "B2B Sales Outsourcing", description: "Outsourced SDR teams that book 15-30 qualified meetings per month. No hiring risk.", link: "/sales", cta: "Scale your sales" },
    { icon: <Brain className="w-8 h-8" />, title: "AI Lead Generation", description: "AI-powered prospecting systems that generate qualified B2B meetings at 50% lower cost.", link: "/ai-lead-generation", cta: "Automate prospecting" },
    { icon: <DollarSign className="w-8 h-8" />, title: "SaaS Monetization", description: "Fix your revenue model. Expert pricing consulting to increase ARPU 30-50%.", link: "/saas-monetization", cta: "Fix your pricing" },
    { icon: <Globe className="w-8 h-8" />, title: "Go-To-Market Strategy", description: "Launch in new markets without burning cash. Proven GTM frameworks.", link: "/go-to-market", cta: "Plan your expansion" },
    { icon: <Building2 className="w-8 h-8" />, title: "PropTech Consulting", description: "Build and scale real estate technology platforms. Tokenization, marketplaces.", link: "/proptech-consulting", cta: "Build your platform" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Strategic Advisory", description: "Operator-level advisory on structuring, fundraising prep, and transformation.", link: "/advisory", cta: "Get strategic advice" },
    { icon: <Rocket className="w-8 h-8" />, title: "Web Studio", description: "Revenue-ready websites in 72 hours with SEO, payments, and conversion.", link: "/web", cta: "Launch your website" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Marketing & PPC", description: "ROI-driven PPC across Google, Meta, LinkedIn, and TikTok.", link: "/marketing", cta: "Boost your marketing" }
  ];

  return (
    <>
      <Helmet>
        <title>Revenue Acceleration for SaaS & PropTech | NLG Consulting</title>
        <meta name="description" content="Scale revenue without scaling headcount. Strategy + execution for SaaS founders & PropTech operators. Sales, AI, monetization, GTM. Book your free strategy call." />
        <meta name="keywords" content="revenue acceleration consulting, SaaS growth consulting, B2B revenue strategy, tech consulting firm, startup scaling consultant, PropTech consulting" />
        <link rel="canonical" href="https://nlgconsulting.co/services" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/services" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/services" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/services" />
        <meta property="og:title" content="Revenue Acceleration for SaaS & PropTech | NLG Consulting" />
        <meta property="og:description" content="Scale revenue without scaling headcount. Strategy + execution for SaaS founders & PropTech operators." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Revenue Acceleration</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Scale Revenue Without Scaling Headcount</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              End-to-end revenue acceleration for SaaS founders and PropTech operators. From outsourced sales teams to AI-powered lead generation, monetization strategy, and international go-to-market execution.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book Your Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">⏱️ We take on 3 new clients per month. Limited slots available.</p>
          </div>
        </section>

        {/* Cost of Inaction */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">The Cost of Standing Still</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: "€80K+", label: "Annual cost of one in-house SDR (salary + tools + management)" },
                { stat: "3-6 months", label: "Typical ramp-up time before a new hire becomes productive" },
                { stat: "35%", label: "Annual SDR turnover rate — you train them, then they leave" }
              ].map((item, i) => (
                <Card key={i}><CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent></Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">Every month without a scalable revenue engine costs you market share.</p>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Revenue Acceleration: Strategy Meets Execution</h2>
              <p>Most consulting firms deliver strategy decks. Most agencies deliver leads. Neither delivers revenue growth on its own. NLG Consulting bridges the gap — we don't just tell you what to do, we do it with you.</p>
              <p>Our framework combines <Link to="/sales" className="text-primary hover:underline font-medium">outsourced B2B sales</Link>, <Link to="/ai-lead-generation" className="text-primary hover:underline font-medium">AI-powered lead generation</Link>, <Link to="/saas-monetization" className="text-primary hover:underline font-medium">SaaS monetization consulting</Link>, and <Link to="/go-to-market" className="text-primary hover:underline font-medium">international go-to-market strategy</Link> into a unified growth engine.</p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Built by Operators, for Operators</h3>
              <p>We've built and scaled companies across <Link to="/proptech-consulting" className="text-primary hover:underline font-medium">PropTech</Link>, FinTech, and SaaS. Our <Link to="/ventures" className="text-primary hover:underline font-medium">venture portfolio</Link> is proof we practice what we preach.</p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Who We Work With</h3>
              <p>SaaS founders and PropTech operators scaling from $500K to $10M+ ARR. Companies that have product-market fit and need to accelerate — not companies still searching for it.</p>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Revenue Acceleration Stack</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">Eight integrated services designed to compound your growth.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCards.map((service, i) => (
                <Link to={service.link} key={i}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{service.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">{service.cta} <ArrowRight className="w-3 h-3" /></span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Accelerate Your Revenue</h2>
            <div className="space-y-8">
              {[
                { step: "1", title: "Diagnose", desc: "Audit your current revenue engine — sales process, pricing, channels, conversion rates — and identify the biggest levers." },
                { step: "2", title: "Design", desc: "Build a custom acceleration plan combining the right services for your situation." },
                { step: "3", title: "Execute", desc: "Deploy resources and start executing within weeks, not months." },
                { step: "4", title: "Scale", desc: "Double down on what works. Continuous optimization and expanding winning channels." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">{item.step}</div>
                  <div><h3 className="text-xl font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Why SaaS & PropTech Leaders Trust NLG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Operator Experience", desc: "Founded and scaled companies across PropTech, FinTech, and SaaS." },
                { title: "Published Authority", desc: "Author of 'Level Up in Fractional Real Estate' — recognized thought leader." },
                { title: "Global Execution", desc: "15+ years across Europe, North America, and the Middle East." },
                { title: "Proven Results", desc: "50+ companies advised. Revenue growth, not just strategy decks." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-sm text-muted-foreground">{item.desc}</p></div>
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
                { q: "What is revenue acceleration consulting?", a: "It combines sales strategy, lead generation, pricing optimization, and GTM execution to grow revenue faster without proportionally increasing headcount." },
                { q: "Who are your services for?", a: "SaaS founders, PropTech operators, and B2B CEOs scaling from $500K to $10M+ ARR who need execution support — not just advice." },
                { q: "How quickly will I see results?", a: "First qualified meetings within 2-3 weeks. Revenue model improvements in 30-60 days. Full GTM strategies in 4-6 weeks." },
                { q: "Do you work with early-stage startups?", a: "We work best with companies that have product-market fit. Pre-revenue startups may start with our advisory practice." },
                { q: "What makes NLG different?", a: "We're operators. We execute alongside you with SDR teams, AI systems, and hands-on implementation — not just strategy decks." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Revenue?</h2>
            <p className="text-lg opacity-90 mb-8">Book a 15-minute strategy call. Walk away with 3 actionable growth ideas — whether we work together or not.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book Your Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default Services;

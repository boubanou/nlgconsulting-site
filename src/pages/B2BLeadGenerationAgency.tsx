import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const B2BLeadGenerationAgency = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "B2B Lead Generation Agency", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Full-service B2B lead generation agency. Outsourced SDR, AI outreach, multichannel campaigns. 15-30 qualified meetings per month.", "url": "https://www.nlgconsulting.co/b2b-lead-generation-agency", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "B2B Lead Generation Agency", "item": "https://www.nlgconsulting.co/b2b-lead-generation-agency" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What does a B2B lead generation agency do?", "acceptedAnswer": { "@type": "Answer", "text": "A B2B lead generation agency identifies, qualifies, and delivers sales-ready leads to your business using outbound prospecting, content, advertising, and AI-powered outreach." } },
        { "@type": "Question", "name": "How much does B2B lead generation cost?", "acceptedAnswer": { "@type": "Answer", "text": "B2B lead generation costs vary by scope. NLG Consulting offers packages starting from €2,500/month for outsourced SDR services delivering 15-30 qualified meetings." } },
        { "@type": "Question", "name": "How do you qualify B2B leads?", "acceptedAnswer": { "@type": "Answer", "text": "We use BANT (Budget, Authority, Need, Timeline) and custom qualification frameworks aligned with your sales process to ensure every meeting is with a genuine decision-maker." } },
        { "@type": "Question", "name": "What industries do you generate leads for?", "acceptedAnswer": { "@type": "Answer", "text": "We specialize in SaaS, FinTech, PropTech, and Professional Services, but our methodology works for any B2B company with deal sizes above €5,000." } },
        { "@type": "Question", "name": "How fast can you start generating leads?", "acceptedAnswer": { "@type": "Answer", "text": "First qualified meetings typically arrive within 2-3 weeks of onboarding. Full pipeline optimization happens by month 2-3." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>B2B Lead Generation Agency | Qualified Meetings on Demand | NLG Consulting</title>
        <meta name="description" content="Full-service B2B lead generation agency. Outsourced SDR, AI outreach, multichannel campaigns. 15-30 qualified meetings per month. Book a free strategy call." />
        <link rel="canonical" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <meta property="og:title" content="B2B Lead Generation Agency | Qualified Meetings on Demand | NLG Consulting" />
        <meta property="og:description" content="Full-service B2B lead generation agency delivering 15-30 qualified meetings per month." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">B2B Lead Generation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The B2B Lead Generation Agency That Delivers Qualified Meetings</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop chasing leads that go nowhere. NLG Consulting delivers 15-30 qualified B2B meetings per month using proven outbound systems, AI-powered prospecting, and multichannel campaigns.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Get a Free Lead Gen Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With a Specialized B2B Lead Generation Agency?</h2>
            <p>Most lead generation agencies sell you a list of names and call it a day. NLG Consulting is different. We build and operate your entire outbound engine — from ICP definition to meeting handoff — so you can focus on closing deals.</p>
            <p>Our clients are SaaS founders, FinTech operators, and service companies who need a predictable pipeline without the pain of hiring, training, and managing in-house SDR teams.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Our B2B Lead Generation Services</h3>
            <ul>
              <li><strong><Link to="/outsourced-sdr" className="text-primary hover:underline">Outsourced SDR:</Link></strong> Dedicated sales development reps who prospect and book meetings on your behalf.</li>
              <li><strong><Link to="/ai-sales-outreach" className="text-primary hover:underline">AI Sales Outreach:</Link></strong> AI-powered prospecting that personalizes at scale across LinkedIn and email.</li>
              <li><strong><Link to="/appointment-setting" className="text-primary hover:underline">Appointment Setting:</Link></strong> End-to-end meeting booking with qualified decision-makers.</li>
              <li><strong>CRM & Pipeline Setup:</strong> Full CRM configuration for visibility and conversion tracking.</li>
            </ul>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Industries We Serve</h3>
            <p>We specialize in high-value B2B markets including <Link to="/proptech-lead-generation" className="text-primary hover:underline">PropTech</Link>, <Link to="/fintech-lead-generation" className="text-primary hover:underline">FinTech</Link>, SaaS, and Professional Services. Our methodology adapts to any B2B company with deal sizes above €5,000.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{ metric: "15-30", label: "Meetings / Month" }, { metric: "200+", label: "Campaigns Delivered" }, { metric: "3+", label: "Outbound Channels" }, { metric: "48h", label: "Onboarding Time" }].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">B2B Lead Generation FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What does a B2B lead generation agency do?", a: "A B2B lead gen agency identifies, qualifies, and delivers sales-ready leads using outbound prospecting, content, advertising, and AI-powered outreach." },
                { q: "How much does B2B lead generation cost?", a: "Packages start from €2,500/month for outsourced SDR services delivering 15-30 qualified meetings." },
                { q: "How do you qualify leads?", a: "We use BANT and custom qualification frameworks aligned with your sales process." },
                { q: "What industries do you serve?", a: "SaaS, FinTech, PropTech, Professional Services — any B2B with deal sizes above €5,000." },
                { q: "How fast can you start?", a: "First qualified meetings within 2-3 weeks. Full optimization by month 2-3." }
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
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Lead Generation?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free 15-minute audit. We'll show you exactly how to generate 15-30 qualified meetings per month.</p>
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

export default B2BLeadGenerationAgency;

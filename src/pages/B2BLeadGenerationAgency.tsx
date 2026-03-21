import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const B2BLeadGenerationAgency = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "B2B Lead Generation & Pipeline Systems", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "B2B lead generation systems combining AI-powered prospecting, outsourced SDR operations, and multichannel pipeline architecture for qualified meeting generation.", "url": "https://www.nlgconsulting.co/b2b-lead-generation-agency", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "B2B Lead Generation", "item": "https://www.nlgconsulting.co/b2b-lead-generation-agency" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What does a B2B lead generation agency do?", "acceptedAnswer": { "@type": "Answer", "text": "A B2B lead generation agency designs and operates systems that identify, qualify, and convert high-value prospects into qualified meetings — using structured outbound, AI-assisted prospecting, and multichannel campaign execution." } },
        { "@type": "Question", "name": "How is NLG different from other lead generation agencies?", "acceptedAnswer": { "@type": "Answer", "text": "We don't just deliver contact lists. We build complete pipeline systems — ICP architecture, AI-enhanced prospecting, multichannel sequencing, CRM integration, and qualification logic — designed to generate qualified commercial conversations predictably." } },
        { "@type": "Question", "name": "What industries do you generate leads for?", "acceptedAnswer": { "@type": "Answer", "text": "We specialise in SaaS, FinTech, PropTech, and professional services. Our methodology adapts to any B2B company with defined ICPs and deal sizes above €5,000." } },
        { "@type": "Question", "name": "How do you qualify B2B leads?", "acceptedAnswer": { "@type": "Answer", "text": "We use structured qualification frameworks aligned with your commercial process — including budget, authority, need, timeline, and custom criteria that ensure every meeting is with a relevant decision-maker." } },
        { "@type": "Question", "name": "How quickly can a lead generation system start producing results?", "acceptedAnswer": { "@type": "Answer", "text": "First qualified meetings typically arrive within 2-3 weeks. Full system optimisation and consistent pipeline delivery occurs by month 2-3." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>B2B Lead Generation Agency | Pipeline Systems | NLG</title>
        <meta name="description" content="B2B lead generation systems combining AI-powered prospecting, outsourced SDR, and multichannel pipeline architecture. Qualified meetings, structured execution." />
        <link rel="canonical" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agence-lead-generation-b2b" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/b2b-lead-generation-agency" />
        <meta property="og:title" content="B2B Lead Generation Agency | Pipeline Systems | NLG Consulting" />
        <meta property="og:description" content="B2B lead generation systems combining AI prospecting, SDR operations, and pipeline architecture for qualified meeting generation." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">B2B Lead Generation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Lead Generation Systems That Deliver Qualified Meetings</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We design and operate complete lead generation systems — combining AI-powered prospecting, structured outbound, and multichannel pipeline architecture — to generate qualified commercial conversations predictably.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Pipeline Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Beyond Contact Lists: Building Lead Generation Infrastructure</h2>
            <p>Most lead generation agencies sell you a database of names and consider the job done. The gap between "leads" and revenue remains entirely your problem. NLG Consulting takes a fundamentally different approach.</p>
            <p>We build and operate your entire lead generation infrastructure — from ICP architecture and prospect intelligence to multichannel outbound execution, qualification workflows, and CRM pipeline management. The result is not a list of contacts, but a system that produces qualified meetings with verified decision-makers.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Lead Generation System</h3>
            <ul>
              <li><strong><Link to="/outsourced-sdr" className="text-primary hover:underline">Outsourced SDR Operations:</Link></strong> Trained sales development operators who execute structured prospecting and meeting booking on your behalf.</li>
              <li><strong><Link to="/ai-sales-outreach" className="text-primary hover:underline">AI-Enhanced Outreach:</Link></strong> AI-powered prospecting and personalization that improves targeting accuracy and outreach quality at scale.</li>
              <li><strong><Link to="/appointment-setting" className="text-primary hover:underline">Appointment Setting:</Link></strong> End-to-end meeting booking with qualified decision-makers — from initial outreach to calendar confirmation.</li>
              <li><strong>CRM & Pipeline Architecture:</strong> Full revenue operations setup for pipeline visibility, stage management, and conversion tracking.</li>
            </ul>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Industry Expertise</h3>
            <p>We operate lead generation systems for B2B companies across <Link to="/fintech-lead-generation" className="text-primary hover:underline">FinTech</Link>, <Link to="/proptech-lead-generation" className="text-primary hover:underline">PropTech</Link>, SaaS, and professional services. Our <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link> practice ensures your lead generation aligns with your broader GTM and revenue strategy.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{ metric: "15-30", label: "Qualified Meetings / Month" }, { metric: "3+", label: "Coordinated Channels" }, { metric: "2-3", label: "Weeks to First Meeting" }, { metric: "60%", label: "Lower Cost vs In-House" }].map((item, i) => (
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
                { q: "What does a B2B lead generation agency do?", a: "We design and operate systems that identify, qualify, and convert high-value prospects into qualified meetings — using structured outbound, AI prospecting, and multichannel execution." },
                { q: "How is NLG different from other agencies?", a: "We build complete pipeline systems — not just contact lists. ICP architecture, AI prospecting, multichannel sequencing, CRM integration, and qualification logic." },
                { q: "Which industries do you serve?", a: "SaaS, FinTech, PropTech, and professional services — any B2B company with deal sizes above €5,000 and defined ICPs." },
                { q: "How do you qualify leads?", a: "Structured qualification frameworks aligned with your commercial process — budget, authority, need, timeline, and custom criteria." },
                { q: "How quickly can a system start producing results?", a: "First qualified meetings within 2-3 weeks. Consistent pipeline delivery by month 2-3." }
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
            <h2 className="text-3xl font-bold mb-4">Discuss Your Pipeline Architecture</h2>
            <p className="text-lg opacity-90 mb-8">If you are evaluating your lead generation model, outbound infrastructure, or pipeline systems — we can assess where structured execution and AI can improve commercial performance.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book a Pipeline Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default B2BLeadGenerationAgency;
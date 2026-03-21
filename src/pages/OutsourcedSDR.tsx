import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const OutsourcedSDR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Outsourced SDR & Sales Development Operations",
        "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "Outsourced SDR operations with AI-enhanced prospecting. Structured outbound execution, multichannel sequencing, and qualified meeting generation for B2B companies.",
        "url": "https://www.nlgconsulting.co/outsourced-sdr",
        "areaServed": ["Europe", "North America", "Middle East"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.nlgconsulting.co/services" },
          { "@type": "ListItem", "position": 3, "name": "Outsourced SDR", "item": "https://www.nlgconsulting.co/outsourced-sdr" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is an outsourced SDR?", "acceptedAnswer": { "@type": "Answer", "text": "An outsourced SDR is a trained sales development operator provided by an external partner who executes structured prospecting, lead qualification, and meeting booking on behalf of your company — without the cost, ramp-up, or management overhead of in-house hiring." } },
          { "@type": "Question", "name": "How does outsourced SDR differ from traditional lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional lead gen delivers contact lists. Outsourced SDR delivers qualified meetings. We operate the entire outbound workflow — from ICP research and multichannel sequencing to qualification and calendar booking — as an extension of your commercial team." } },
          { "@type": "Question", "name": "What does an outsourced SDR engagement include?", "acceptedAnswer": { "@type": "Answer", "text": "Our engagements include ICP definition, prospect research, multichannel outreach (LinkedIn, email, phone), CRM integration, lead qualification, meeting booking, and weekly performance reporting." } },
          { "@type": "Question", "name": "How quickly can outsourced SDR generate pipeline?", "acceptedAnswer": { "@type": "Answer", "text": "Most companies see initial qualified meetings within 2-3 weeks. By month 2-3, the outbound system is optimized and delivering consistent commercial activity." } },
          { "@type": "Question", "name": "What industries benefit from outsourced SDR?", "acceptedAnswer": { "@type": "Answer", "text": "We work with B2B companies in SaaS, FinTech, PropTech, and professional services — any sector with deal sizes above €5,000 and a defined ideal customer profile." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Outsourced SDR | AI-Enhanced Sales Development | NLG</title>
        <meta name="description" content="Outsourced SDR operations with AI-enhanced prospecting. Structured outbound execution, multichannel sequencing, and qualified meeting generation for B2B companies." />
        <link rel="canonical" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/outsourced-sdr" />
        <meta property="og:title" content="Outsourced SDR | AI-Enhanced Sales Development | NLG Consulting" />
        <meta property="og:description" content="Outsourced SDR operations with AI-enhanced prospecting and structured outbound execution for B2B companies." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Outsourced SDR</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Outsourced SDR Operations With AI-Enhanced Prospecting</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Structured sales development without the hiring risk. Our trained operators execute multichannel outbound, AI-assisted qualification, and meeting generation — as a direct extension of your commercial team.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Commercial Review <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Structured SDR Outsourcing Outperforms In-House Hiring</h2>
            <p>Building an in-house SDR function requires €80,000+ per operator per year — before tools, training, and management overhead. The average ramp-up takes 3-6 months, and industry turnover exceeds 35%. For most growth-stage companies, this represents significant capital risk with uncertain returns.</p>
            <p>NLG Consulting's outsourced SDR model eliminates these variables. We deploy trained operators with established workflows, AI-enhanced prospecting tools, and proven multichannel sequences — delivering qualified commercial conversations within weeks, not months.</p>
            <p>Unlike traditional outsourced SDR vendors, our approach is informed by <Link to="/ai-consulting" className="text-primary hover:underline font-medium">AI consulting</Link> and <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link> — ensuring your outbound system aligns with your GTM strategy and revenue objectives.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What's Included in Every Engagement</h3>
            <ul>
              <li><strong>ICP Architecture:</strong> Detailed ideal customer profile — industry, company size, decision-maker roles, buying signals, and competitive landscape.</li>
              <li><strong>Prospect Intelligence:</strong> Verified contact databases built from multiple sources, enriched with intent data and AI research.</li>
              <li><strong>Multichannel Execution:</strong> Coordinated LinkedIn, email, and phone outreach with personalised sequencing.</li>
              <li><strong>CRM Integration:</strong> Full activity logging in HubSpot, Salesforce, or Pipedrive with pipeline stage definitions.</li>
              <li><strong>Performance Reporting:</strong> Weekly transparency on activity metrics, response rates, qualification ratios, and pipeline value.</li>
            </ul>
            <p>Combine with <Link to="/ai-sales-outreach" className="text-primary hover:underline font-medium">AI-powered outreach</Link> for enhanced personalization, or <Link to="/appointment-setting" className="text-primary hover:underline font-medium">appointment setting</Link> for dedicated meeting booking.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "15-30", label: "Qualified Meetings / Month" },
                { metric: "2-3", label: "Weeks to First Meeting" },
                { metric: "3+", label: "Coordinated Channels" },
                { metric: "60%", label: "Lower Cost vs In-House" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">The Outsourced SDR Process</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Commercial Discovery & ICP Design", desc: "We assess your market position, define your ideal customer profile, and map the competitive landscape to identify the highest-value outbound opportunities." },
                { step: "2", title: "System Architecture & Messaging", desc: "Prospect databases are built, multichannel sequences are designed, and qualification frameworks are aligned with your commercial objectives." },
                { step: "3", title: "Outbound Activation", desc: "Trained operators begin structured outreach across LinkedIn, email, and phone — typically within 5-7 business days of engagement start." },
                { step: "4", title: "Iteration & Performance Optimization", desc: "Continuous refinement based on response patterns, conversion data, and pipeline analytics. The system improves with every operating cycle." }
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

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Designed for Growth-Stage B2B Companies</h2>
            <p>Our outsourced SDR operations are designed for companies that need commercial momentum without the structural overhead:</p>
            <ul>
              <li><Link to="/ai-for-fintech" className="text-primary hover:underline font-medium">FinTech</Link> and <Link to="/ai-for-proptech" className="text-primary hover:underline font-medium">PropTech</Link> companies scaling commercial operations</li>
              <li>SaaS businesses entering new markets or verticals</li>
              <li>Founder-led companies that need pipeline without building full sales teams</li>
              <li>Growth-stage businesses with deal sizes above €5,000</li>
              <li>Companies that want to combine human execution with <Link to="/ai-agents-for-business" className="text-primary hover:underline font-medium">AI agent</Link> capabilities</li>
            </ul>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Outsourced SDR FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What is an outsourced SDR?", a: "A trained sales development operator provided by an external partner who executes structured prospecting, qualification, and meeting booking — without in-house hiring costs or management overhead." },
                { q: "How does this differ from lead generation?", a: "Lead gen delivers contact lists. Outsourced SDR delivers qualified meetings through structured outbound execution, CRM integration, and professional qualification." },
                { q: "What's included in an engagement?", a: "ICP definition, prospect research, multichannel outreach, CRM integration, lead qualification, meeting booking, and weekly performance reporting." },
                { q: "How quickly does it generate pipeline?", a: "Initial qualified meetings within 2-3 weeks. Optimised commercial activity by month 2-3." },
                { q: "Which industries do you serve?", a: "SaaS, FinTech, PropTech, and professional services — any B2B sector with deal sizes above €5,000." }
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
            <h2 className="text-3xl font-bold mb-4">Discuss Your Outbound Structure</h2>
            <p className="text-lg opacity-90 mb-8">If you are evaluating your SDR model, outbound architecture, or commercial operating rhythm — we can assess where structured execution can improve performance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book a Commercial Review <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
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

export default OutsourcedSDR;
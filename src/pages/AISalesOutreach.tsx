import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const AISalesOutreach = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Sales Outreach", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "AI-powered sales outreach that personalizes at scale. Automated prospecting, smart sequences, and human-quality messaging.", "url": "https://www.nlgconsulting.co/ai-sales-outreach", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Sales Outreach", "item": "https://www.nlgconsulting.co/ai-sales-outreach" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is AI sales outreach?", "acceptedAnswer": { "@type": "Answer", "text": "AI sales outreach uses artificial intelligence to personalize prospecting messages at scale, optimize send times, and identify the highest-intent leads — all while maintaining human-quality communication." } },
        { "@type": "Question", "name": "How does AI improve outreach response rates?", "acceptedAnswer": { "@type": "Answer", "text": "AI analyzes prospect data to craft hyper-personalized messages, optimizes delivery timing, and continuously learns from responses to improve conversion rates by 2-3x." } },
        { "@type": "Question", "name": "Is AI outreach compliant with GDPR?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our AI outreach is fully GDPR-compliant. We use legitimate interest for B2B prospecting and maintain proper opt-out mechanisms." } },
        { "@type": "Question", "name": "Can AI replace human SDRs?", "acceptedAnswer": { "@type": "Answer", "text": "AI amplifies SDR productivity by 3-5x but doesn't fully replace humans. The best results come from AI-assisted SDR teams where AI handles research and personalization while humans handle conversations." } },
        { "@type": "Question", "name": "What tools do you use for AI outreach?", "acceptedAnswer": { "@type": "Answer", "text": "We use a proprietary stack combining AI personalization engines, intent data providers, and multichannel delivery platforms. The specific tools are customized to each client's needs." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Sales Outreach | AI-Powered B2B Prospecting | NLG Consulting</title>
        <meta name="description" content="AI-powered sales outreach that personalizes at scale. 2-3x higher response rates. Automated prospecting with human-quality messaging. Book a free demo." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-sales-outreach" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-sales-outreach" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-sales-outreach" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-sales-outreach" />
        <meta property="og:title" content="AI Sales Outreach | AI-Powered B2B Prospecting | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">AI Outreach</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Sales Outreach That Converts at Scale</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop sending generic emails that get ignored. Our AI-powered outreach personalizes every message, optimizes timing, and delivers 2-3x higher response rates.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Free AI Outreach Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Future of B2B Outreach Is AI-Powered</h2>
            <p>Traditional outreach is broken. Buyers receive 50+ sales emails per week. Generic templates get deleted. Batch-and-blast is dead.</p>
            <p>AI sales outreach changes the game. By analyzing prospect data — company news, job changes, funding rounds, content engagement — our AI crafts hyper-personalized messages that feel like they were written by a human who did 30 minutes of research. But at the scale of thousands per day.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How It Works</h3>
            <ul>
              <li><strong>AI Research:</strong> Our system analyzes each prospect's company, role, recent activity, and pain points.</li>
              <li><strong>Personalized Messaging:</strong> Every email and LinkedIn message is uniquely crafted for the recipient.</li>
              <li><strong>Smart Timing:</strong> AI optimizes send times based on engagement patterns.</li>
              <li><strong>Continuous Learning:</strong> The system learns from every response to improve future campaigns.</li>
              <li><strong>Human Handoff:</strong> When prospects respond, trained <Link to="/outsourced-sdr" className="text-primary hover:underline">SDRs</Link> handle the conversation.</li>
            </ul>
            <p>Combine AI outreach with our <Link to="/b2b-lead-generation-agency" className="text-primary hover:underline">full lead gen service</Link> for end-to-end pipeline acceleration.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "2-3x", label: "Higher Response Rate" }, { metric: "1000+", label: "Personalized Touches/Day" }, { metric: "GDPR", label: "Fully Compliant" }, { metric: "3-5x", label: "SDR Productivity Boost" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">AI Sales Outreach FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What is AI sales outreach?", a: "AI outreach uses artificial intelligence to personalize prospecting at scale while maintaining human-quality communication." },
                { q: "How does AI improve response rates?", a: "AI crafts hyper-personalized messages, optimizes timing, and learns from responses to improve by 2-3x." },
                { q: "Is it GDPR compliant?", a: "Yes. Fully GDPR-compliant with legitimate interest and proper opt-out mechanisms." },
                { q: "Can AI replace human SDRs?", a: "AI amplifies SDR productivity 3-5x but the best results come from AI-assisted human teams." },
                { q: "What tools do you use?", a: "Proprietary stack combining AI personalization, intent data, and multichannel delivery." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="ai-lead-generation" />

        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Outreach With AI?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free demo and see how AI outreach can transform your pipeline.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book a Free Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AISalesOutreach;

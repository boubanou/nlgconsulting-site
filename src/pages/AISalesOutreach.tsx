import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const AISalesOutreach = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "AI Sales Outreach & Prospecting", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "AI-powered sales outreach that personalises prospecting at scale. Intelligent targeting, automated sequencing, and human-quality messaging for B2B pipeline generation.", "url": "https://www.nlgconsulting.co/ai-sales-outreach", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "AI Sales Outreach", "item": "https://www.nlgconsulting.co/ai-sales-outreach" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is AI sales outreach?", "acceptedAnswer": { "@type": "Answer", "text": "AI sales outreach uses artificial intelligence to research prospects, craft personalised messages at scale, optimise send timing, and identify the highest-intent leads — maintaining human-quality communication while operating at volume." } },
        { "@type": "Question", "name": "How does AI improve outreach quality?", "acceptedAnswer": { "@type": "Answer", "text": "AI analyses prospect data — company news, job changes, funding rounds, content engagement — to craft contextually relevant messages. This improves response rates by 2-3x compared to generic template-based outreach." } },
        { "@type": "Question", "name": "Is AI outreach GDPR compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our AI outreach operates within GDPR guidelines using legitimate interest for B2B prospecting with proper opt-out mechanisms and data handling protocols." } },
        { "@type": "Question", "name": "Does AI outreach replace human SDRs?", "acceptedAnswer": { "@type": "Answer", "text": "AI amplifies SDR productivity by handling research and personalisation at scale. The best results come from AI-assisted human teams — where AI handles data analysis and message crafting while trained operators handle conversations and qualification." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Sales Outreach | Intelligent B2B Prospecting | NLG</title>
        <meta name="description" content="AI-powered sales outreach that personalises prospecting at scale. Intelligent targeting, automated sequencing, and human-quality messaging for B2B pipeline generation." />
        <link rel="canonical" href="https://www.nlgconsulting.co/ai-sales-outreach" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-sales-outreach" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-sales-outreach" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/ai-sales-outreach" />
        <meta property="og:title" content="AI Sales Outreach | Intelligent B2B Prospecting | NLG Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">AI Outreach</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Sales Outreach That Converts at Scale</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Intelligent prospecting that combines AI research, contextual personalisation, and optimised sequencing to generate qualified conversations — with the precision of deep research and the scale of automation.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book an Outreach Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Beyond Templates: AI-Enhanced Commercial Outreach</h2>
            <p>Generic outreach is ineffective. Decision-makers receive dozens of templated messages daily and ignore most of them. The challenge isn't volume — it's relevance. AI sales outreach solves this by bringing research-quality personalisation to every message, at scale.</p>
            <p>Our AI outreach systems analyse each prospect's context — company news, funding events, job changes, published content, competitive landscape — and craft messages that demonstrate genuine understanding of their situation. The result is outreach that reads like it was written by someone who spent 30 minutes researching the prospect, but delivered at the pace of thousands per day.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How AI Outreach Works</h3>
            <ul>
              <li><strong>AI Prospect Research:</strong> Automated analysis of each prospect's company, role, recent activity, and potential pain points.</li>
              <li><strong>Contextual Personalisation:</strong> Every message is uniquely crafted based on prospect-specific data — not just name and company insertion.</li>
              <li><strong>Intelligent Timing:</strong> AI optimises send timing based on engagement patterns and response probability.</li>
              <li><strong>Continuous Learning:</strong> The system analyses response patterns to improve targeting and messaging with every iteration.</li>
              <li><strong>Human Handoff:</strong> When prospects engage, trained <Link to="/outsourced-sdr" className="text-primary hover:underline">SDR operators</Link> handle the conversation and qualification.</li>
            </ul>
            <p>AI outreach integrates with our <Link to="/b2b-lead-generation-agency" className="text-primary hover:underline font-medium">lead generation systems</Link> and <Link to="/ai-agents-for-business" className="text-primary hover:underline font-medium">AI agent capabilities</Link> for end-to-end pipeline acceleration. Our <Link to="/ai-consulting" className="text-primary hover:underline font-medium">AI consulting</Link> practice ensures the technology is properly integrated with your commercial workflows.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "2-3x", label: "Higher Response Rate" }, { metric: "1000+", label: "Personalised Touches / Day" }, { metric: "GDPR", label: "Fully Compliant" }, { metric: "3-5x", label: "SDR Productivity Gain" }].map((item, i) => (
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
                { q: "What is AI sales outreach?", a: "AI-powered prospecting that uses artificial intelligence to research prospects, personalise messages at scale, and optimise outreach timing — maintaining human quality while operating at volume." },
                { q: "How does AI improve outreach quality?", a: "AI analyses prospect context — company news, funding, job changes — to craft contextually relevant messages, improving response rates by 2-3x versus templates." },
                { q: "Is it GDPR compliant?", a: "Yes. Fully GDPR-compliant with legitimate interest for B2B prospecting, proper opt-out mechanisms, and data handling protocols." },
                { q: "Does AI replace SDRs?", a: "AI amplifies SDR productivity by handling research and personalisation. The best results come from AI-assisted human teams combining data analysis with professional conversation handling." }
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
            <h2 className="text-3xl font-bold mb-4">Discuss Your Outreach Strategy</h2>
            <p className="text-lg opacity-90 mb-8">If you are evaluating how AI can improve your prospecting quality and pipeline velocity — we can assess where intelligent outreach fits your commercial system.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book an Outreach Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AISalesOutreach;
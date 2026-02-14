import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Brain, Bot, Zap, BarChart3, Mail, Target,
  CheckCircle, TrendingUp
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const AILeadGeneration = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI Lead Generation Systems",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "AI-powered B2B prospecting systems that generate qualified meetings on autopilot. 3x pipeline at 50% lower cost than traditional SDR.",
        "url": "https://nlgconsulting.co/ai-lead-generation",
        "areaServed": ["Europe", "North America", "Middle East"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nlgconsulting.co/services" },
          { "@type": "ListItem", "position": 3, "name": "AI Lead Generation", "item": "https://nlgconsulting.co/ai-lead-generation" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How does AI lead generation work?", "acceptedAnswer": { "@type": "Answer", "text": "AI lead generation uses machine learning algorithms to identify ideal prospects, personalize outreach at scale, and optimize messaging based on response data. It automates the repetitive parts of prospecting while maintaining personalization that drives responses." } },
          { "@type": "Question", "name": "Is AI lead generation better than human SDRs?", "acceptedAnswer": { "@type": "Answer", "text": "AI and human SDRs are complementary. AI excels at scale, data analysis, and 24/7 operation. Humans excel at nuanced conversations and relationship building. The best results come from combining both — AI handles initial outreach and qualification, humans handle high-value conversations." } },
          { "@type": "Question", "name": "What kind of results can I expect from AI lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Clients typically see 3x pipeline generation at 50% lower cost per meeting compared to traditional SDR methods. AI systems can process thousands of prospects daily and continuously optimize based on response patterns." } },
          { "@type": "Question", "name": "How long does it take to set up an AI lead generation system?", "acceptedAnswer": { "@type": "Answer", "text": "Initial setup takes 1-2 weeks including ICP definition, data integration, and sequence creation. The system begins generating results within the first week of deployment and continuously improves over time." } },
          { "@type": "Question", "name": "What AI tools and platforms do you use?", "acceptedAnswer": { "@type": "Answer", "text": "We use a stack of best-in-class AI tools for prospecting, enrichment, personalization, and sequencing. The specific tools are selected based on your market, ICP, and technical requirements. We stay vendor-agnostic to ensure you always have the best technology." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AI Lead Generation That Books Meetings | NLG</title>
        <meta name="description" content="AI-powered prospecting systems that generate qualified B2B meetings on autopilot. 3x pipeline at 50% lower cost. See how it works." />
        <meta name="keywords" content="AI lead generation, AI SDR, automated lead generation, AI prospecting, AI-powered sales development, B2B AI outreach" />
        <link rel="canonical" href="https://nlgconsulting.co/ai-lead-generation" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/ai-lead-generation" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/generation-leads-ia" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/ai-lead-generation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/ai-lead-generation" />
        <meta property="og:title" content="AI Lead Generation That Books Meetings | NLG Consulting" />
        <meta property="og:description" content="AI-powered prospecting systems. 3x pipeline at 50% lower cost. Qualified B2B meetings on autopilot." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">AI Lead Generation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Prospecting That Books Qualified Meetings
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop burning budget on manual outreach. Our AI lead generation systems identify, engage, and qualify your ideal prospects at scale — delivering 3x more pipeline at 50% lower cost.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">See How AI Can Scale Your Pipeline <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Cost of Inaction */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "3x", label: "Pipeline Growth" },
                { metric: "50%", label: "Lower Cost Per Meeting" },
                { metric: "24/7", label: "Always Prospecting" },
                { metric: "1-2 wks", label: "Setup Time" }
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Why B2B Companies Are Switching to AI Lead Generation</h2>
              <p>
                The traditional SDR model is broken. You hire, train for months, watch them leave, and start over. Meanwhile, your competitors are using AI to prospect 24/7 at a fraction of the cost. The question isn't whether to adopt AI lead generation — it's how fast you can get started.
              </p>
              <p>
                NLG Consulting builds AI-powered prospecting systems that combine the scale of automation with the intelligence of machine learning. Our systems don't just blast generic messages — they analyze prospect behavior, personalize outreach based on real signals, and continuously optimize for response rates.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">AI SDR vs. Human SDR: The Smart Combination</h3>
              <p>
                The best results come from combining AI and human intelligence. AI handles the volume — identifying thousands of prospects, personalizing initial outreach, and qualifying responses. Humans handle the nuance — building relationships, navigating complex objections, and closing deals.
              </p>
              <p>
                Our <Link to="/sales" className="text-primary hover:underline font-medium">B2B sales outsourcing</Link> service integrates seamlessly with AI lead generation. AI fills the top of your funnel; our SDR teams convert qualified prospects into booked meetings. It's the complete revenue engine.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What Our AI Lead Generation System Includes</h3>
              <ul>
                <li><strong>Prospect Intelligence:</strong> AI identifies companies matching your ICP using firmographic, technographic, and intent data</li>
                <li><strong>Hyper-Personalization:</strong> Each message is personalized based on the prospect's role, company news, tech stack, and online activity</li>
                <li><strong>Multi-Channel Sequencing:</strong> Coordinated outreach across email, LinkedIn, and other channels</li>
                <li><strong>Response Analysis:</strong> AI categorizes responses and routes qualified prospects to your team</li>
                <li><strong>Continuous Optimization:</strong> Machine learning improves messaging, timing, and targeting based on results</li>
              </ul>
              <p className="mt-8">
                Ready to see how AI can transform your pipeline? Combine AI lead generation with our <Link to="/go-to-market" className="text-primary hover:underline font-medium">go-to-market strategy</Link> for maximum impact in new markets.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "ICP & Data Setup", desc: "We define your ideal customer profile and integrate AI with your data sources for prospect identification.", icon: <Target className="w-5 h-5" /> },
                { step: "2", title: "AI System Deployment", desc: "We deploy and configure AI prospecting tools, create personalized sequences, and set up response routing.", icon: <Bot className="w-5 h-5" /> },
                { step: "3", title: "Launch & Optimize", desc: "AI begins prospecting at scale. We monitor, analyze, and continuously optimize for better response rates and meeting quality.", icon: <TrendingUp className="w-5 h-5" /> },
                { step: "4", title: "Scale Results", desc: "As the AI learns what works, we expand to new segments, channels, and markets to multiply your pipeline.", icon: <Zap className="w-5 h-5" /> }
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
                { q: "How does AI lead generation work?", a: "AI uses machine learning to identify ideal prospects, personalize outreach at scale, and optimize messaging based on response data — automating the repetitive parts while maintaining personalization." },
                { q: "Is AI better than human SDRs?", a: "They're complementary. AI excels at scale and 24/7 operation. Humans excel at nuanced conversations. The best results come from combining both." },
                { q: "What results can I expect?", a: "Clients typically see 3x pipeline generation at 50% lower cost per meeting compared to traditional SDR methods." },
                { q: "How long does setup take?", a: "Initial setup takes 1-2 weeks. The system begins generating results within the first week of deployment and continuously improves." },
                { q: "What AI tools do you use?", a: "We use best-in-class AI tools for prospecting, enrichment, personalization, and sequencing — selected based on your specific needs. We stay vendor-agnostic." }
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedServices currentService="ai-lead-generation" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Brain className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Let AI Fill Your Pipeline?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a 15-minute call to see how AI lead generation can transform your prospecting.
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

export default AILeadGeneration;

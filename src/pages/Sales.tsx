import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Target, 
  Phone, 
  Mail, 
  Linkedin, 
  BarChart3,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const Sales = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI-Enhanced Outbound Systems & Revenue Infrastructure",
        "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "AI-enhanced outbound systems, multichannel pipeline architecture, and revenue infrastructure for B2B companies. Qualified meetings, structured sales operations, and commercial performance.",
        "url": "https://www.nlgconsulting.co/sales",
        "areaServed": ["Europe", "North America", "Middle East"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Outbound & Revenue Systems", "item": "https://www.nlgconsulting.co/sales" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What are AI-enhanced outbound systems?", "acceptedAnswer": { "@type": "Answer", "text": "AI-enhanced outbound systems combine structured sales development with AI-powered prospecting, personalization, and workflow automation to generate qualified meetings at scale — with better targeting, faster iteration, and lower cost per acquisition than traditional SDR models." } },
          { "@type": "Question", "name": "How does NLG structure revenue infrastructure for B2B companies?", "acceptedAnswer": { "@type": "Answer", "text": "We design and operate the full commercial stack: ICP definition, prospect research, multichannel sequencing (LinkedIn, email, phone), CRM pipeline architecture, lead qualification logic, and performance reporting. The result is a repeatable system that generates pipeline predictably." } },
          { "@type": "Question", "name": "How long does it take to see results from outbound systems?", "acceptedAnswer": { "@type": "Answer", "text": "Most companies see initial qualified meetings within 2-3 weeks. By month 2-3, the system is optimized and delivering consistent commercial activity. We focus on building sustainable pipeline, not short-term spikes." } },
          { "@type": "Question", "name": "What industries benefit from structured outbound?", "acceptedAnswer": { "@type": "Answer", "text": "Our outbound systems are designed for B2B companies in SaaS, FinTech, PropTech, and professional services with deal sizes above €5,000. The methodology adapts to any sector with a defined ICP and complex buying process." } },
          { "@type": "Question", "name": "How does this differ from hiring an in-house SDR team?", "acceptedAnswer": { "@type": "Answer", "text": "Building in-house costs €80,000+ per SDR per year with 3-6 month ramp-up and 35% turnover. Our approach delivers a fully operational outbound system — including AI-assisted prospecting, trained operators, and CRM integration — without the overhead, management burden, or hiring risk." } }
        ]
      }
    ]
  };

  const services = [
    { icon: <Target className="w-6 h-6" />, title: "Pipeline Architecture", description: "Structured outbound systems designed to generate qualified meetings with defined ICP targets across multiple channels." },
    { icon: <Mail className="w-6 h-6" />, title: "Multichannel Sequencing", description: "Coordinated outreach across email, LinkedIn, and phone — engineered for response rates and commercial relevance." },
    { icon: <Users className="w-6 h-6" />, title: "SDR Operations", description: "Trained sales development operators executing daily outreach, qualification, and meeting handoff within your CRM." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "CRM & RevOps Design", description: "Pipeline design, CRM configuration, and revenue operations setup for visibility, forecasting, and conversion tracking." },
    { icon: <Phone className="w-6 h-6" />, title: "AI-Assisted Prospecting", description: "AI-powered research and personalization to improve targeting accuracy and outreach quality at scale." },
    { icon: <Linkedin className="w-6 h-6" />, title: "LinkedIn Revenue Systems", description: "Strategic LinkedIn engagement, connection sequencing, and social selling workflows for B2B decision-makers." }
  ];

  const results = [
    { metric: "15-30", label: "Qualified Meetings / Month" },
    { metric: "3+", label: "Coordinated Channels" },
    { metric: "2-3x", label: "Pipeline Acceleration" },
    { metric: "60%", label: "Lower Cost vs In-House" }
  ];

  return (
    <>
      <Helmet>
        <title>Outbound Systems & Revenue Infrastructure | NLG</title>
        <meta name="description" content="AI-enhanced outbound systems and revenue infrastructure for B2B companies. Multichannel pipeline architecture, SDR operations, and qualified meeting generation." />
        <link rel="canonical" href="https://www.nlgconsulting.co/sales" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/sales" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/vente" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/sales" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/sales" />
        <meta property="og:title" content="Outbound Systems & Revenue Infrastructure | NLG Consulting" />
        <meta property="og:description" content="AI-enhanced outbound systems and revenue infrastructure for B2B companies. Qualified meetings, structured pipeline, commercial performance." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Outbound & Revenue Systems
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Enhanced Outbound Systems & Revenue Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We design and operate structured outbound systems that generate qualified meetings predictably — combining AI-assisted prospecting, multichannel sequencing, CRM pipeline architecture, and trained sales operators.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">
                Book a Pipeline Review <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">From Scattered Outreach to Structured Commercial Systems</h2>
              <p>
                Most B2B companies operate outbound as an afterthought — sporadic emails, inconsistent LinkedIn activity, no qualification logic, and no pipeline visibility. The result is unpredictable revenue and wasted commercial effort.
              </p>
              <p>
                NLG Consulting takes a systems approach to outbound. We architect the entire revenue infrastructure — from ICP definition and prospect research to multichannel sequencing, lead qualification, CRM workflows, and performance analytics. The goal is not just meetings, but a repeatable commercial engine that improves with every iteration.
              </p>
              <p>
                Our <Link to="/ai-consulting" className="text-primary hover:underline font-medium">AI consulting</Link> practice informs how we integrate AI into outbound — from intelligent prospect scoring to AI-generated personalization that maintains human quality at scale.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What Revenue Infrastructure Includes</h3>
              <ul>
                <li><strong>ICP Architecture:</strong> Defining your ideal customer profile with precision — industry, company size, buying signals, decision-maker mapping, and competitive positioning.</li>
                <li><strong>Prospect Intelligence:</strong> Verified contact databases built from multiple sources, enriched with intent signals and AI-powered research.</li>
                <li><strong>Multichannel Execution:</strong> Coordinated outreach across LinkedIn, email, and phone — sequenced for optimal engagement and response rates.</li>
                <li><strong>CRM Integration & RevOps:</strong> Full pipeline configuration in HubSpot, Salesforce, or Pipedrive — with stage definitions, automation rules, and reporting dashboards.</li>
                <li><strong>Performance Governance:</strong> Weekly reporting on activity metrics, conversion rates, pipeline value, and commercial momentum.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Revenue System Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six integrated capabilities that transform outbound from an activity into a system.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build Your Outbound System</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Commercial Audit & ICP Design", desc: "We assess your current commercial operations, define your ideal customer profile, and identify the highest-leverage outbound opportunities." },
                { step: "2", title: "System Architecture", desc: "We design the multichannel sequencing, CRM pipeline structure, qualification criteria, and reporting framework." },
                { step: "3", title: "Outbound Activation", desc: "Trained operators begin executing structured outreach across LinkedIn, email, and phone — typically within 5-7 business days." },
                { step: "4", title: "Iteration & Optimization", desc: "Continuous refinement based on response data, conversion patterns, and pipeline analytics. The system improves with every cycle." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Built for Companies That Need Commercial Structure</h2>
              <p>Our outbound systems are designed for B2B companies that have outgrown ad-hoc prospecting and need a structured, measurable approach to pipeline generation:</p>
              <ul>
                <li>FinTech, PropTech, and SaaS companies scaling commercial operations</li>
                <li>Founders who need pipeline without the overhead of building in-house SDR teams</li>
                <li>Companies entering new markets or verticals that require structured outbound</li>
                <li>Growth-stage businesses with deal sizes above €5,000 and complex buying processes</li>
                <li>Teams that want to combine <Link to="/ai-sales-outreach" className="text-primary hover:underline font-medium">AI-powered outreach</Link> with human execution</li>
              </ul>
              <p>
                Our approach integrates with <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link> for GTM design and with <Link to="/ai-automation" className="text-primary hover:underline font-medium">AI automation</Link> for workflow optimization — creating a complete revenue operations layer.
              </p>
            </div>
          </div>
        </section>

        <RelatedServices currentService="sales" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Discuss Your Commercial Structure</h2>
            <p className="text-lg opacity-90 mb-8">
              If you are reviewing your outbound model, pipeline architecture, or commercial operating rhythm — we can assess where structure and leverage can be improved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book a Pipeline Review <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default Sales;
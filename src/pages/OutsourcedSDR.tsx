import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Mail, Phone, Linkedin, BarChart3, Zap, CheckCircle, Target } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const OutsourcedSDR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Outsourced SDR Services",
        "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "description": "Outsourced SDR team delivering 15-30 qualified B2B meetings per month. LinkedIn, email, cold calling. No hiring risk.",
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
          { "@type": "Question", "name": "What is an outsourced SDR?", "acceptedAnswer": { "@type": "Answer", "text": "An outsourced SDR (Sales Development Representative) is a trained sales professional provided by an external agency who prospects, qualifies leads, and books meetings on behalf of your company — without the overhead of hiring in-house." } },
          { "@type": "Question", "name": "How many meetings can an outsourced SDR book per month?", "acceptedAnswer": { "@type": "Answer", "text": "With NLG Consulting, our outsourced SDR teams typically book 15-30 qualified B2B meetings per month using multichannel outreach across LinkedIn, email, and cold calling." } },
          { "@type": "Question", "name": "How much does outsourced SDR cost vs in-house?", "acceptedAnswer": { "@type": "Answer", "text": "An in-house SDR costs €80,000+ per year including salary, tools, training, and management. Our outsourced SDR service delivers better results at a fraction of the cost with zero ramp-up time." } },
          { "@type": "Question", "name": "How fast can outsourced SDR start generating leads?", "acceptedAnswer": { "@type": "Answer", "text": "Most clients see their first qualified meetings within 2-3 weeks of onboarding. By month 2-3, the outbound engine is fully optimized and delivering consistently." } },
          { "@type": "Question", "name": "What industries do you serve with outsourced SDR?", "acceptedAnswer": { "@type": "Answer", "text": "We serve B2B companies across SaaS, FinTech, PropTech, Professional Services, and more. Our methodology adapts to any industry with a defined ICP and deal size above €5,000." } }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Outsourced SDR Services | 15-30 Qualified Meetings/Month | NLG Consulting</title>
        <meta name="description" content="Outsource your SDR team to NLG Consulting. Get 15-30 qualified B2B meetings per month with LinkedIn, email, and cold calling. No hiring risk. Results in 2 weeks." />
        <link rel="canonical" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/sdr-externalise" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/outsourced-sdr" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/outsourced-sdr" />
        <meta property="og:title" content="Outsourced SDR Services | 15-30 Qualified Meetings/Month | NLG Consulting" />
        <meta property="og:description" content="Outsource your SDR team. 15-30 qualified B2B meetings per month. LinkedIn, email, cold calling. No hiring risk." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Outsourced SDR</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Outsourced SDR Services That Fill Your Pipeline</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop wasting time and money building in-house SDR teams. Our trained sales development reps deliver 15-30 qualified B2B meetings per month — from week one.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Free SDR Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Companies Choose Outsourced SDR Over In-House Hiring</h2>
            <p>Hiring an in-house SDR costs €80,000+ per year — before tools, training, and management overhead. The average ramp-up takes 3-6 months, and industry turnover sits at 35%. That's a lot of risk for uncertain results.</p>
            <p>With NLG Consulting's outsourced SDR service, you skip the hiring, training, and management entirely. Our pre-trained SDR teams start generating qualified meetings within 2-3 weeks. You pay for outcomes, not overhead.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What's Included</h3>
            <ul>
              <li><strong>ICP Development:</strong> We define your ideal customer profile — industry, company size, job titles, buying signals.</li>
              <li><strong>Prospect Research:</strong> Verified contact lists of decision-makers built from multiple data sources.</li>
              <li><strong>Multichannel Sequences:</strong> Coordinated outreach across LinkedIn, email, and cold calling.</li>
              <li><strong>CRM Integration:</strong> All activities logged in HubSpot, Salesforce, or your preferred CRM.</li>
              <li><strong>Weekly Reporting:</strong> Full transparency on activity, response rates, and meetings booked.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "15-30", label: "Meetings / Month" },
                { metric: "2-3", label: "Weeks to First Meeting" },
                { metric: "3+", label: "Outbound Channels" },
                { metric: "60%", label: "Cost Savings vs In-House" }
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
            <h2 className="text-3xl font-bold text-center mb-12">How Our Outsourced SDR Process Works</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Discovery & ICP Workshop", desc: "We deep-dive into your market, define your ideal customer profile, and map out the competitive landscape." },
                { step: "2", title: "List Building & Messaging", desc: "Our team builds verified prospect lists and creates personalized multichannel sequences." },
                { step: "3", title: "Campaign Launch", desc: "SDRs begin outreach across LinkedIn, email, and phone — typically within 5-7 business days." },
                { step: "4", title: "Meeting Handoff & Optimization", desc: "Qualified meetings are booked in your calendar. We continuously optimize based on data." }
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Who Is Outsourced SDR For?</h2>
            <p>Our outsourced SDR service is designed for B2B companies that need predictable pipeline without the overhead of building in-house. You're a great fit if:</p>
            <ul>
              <li>You're a startup or scale-up selling to other businesses (B2B)</li>
              <li>Your average deal size is above €5,000</li>
              <li>You need qualified meetings, not just leads</li>
              <li>You want to test new markets or verticals without long-term commitment</li>
              <li>You're scaling and need pipeline faster than you can hire</li>
            </ul>
            <p>We work across <Link to="/proptech-lead-generation" className="text-primary hover:underline font-medium">PropTech</Link>, <Link to="/fintech-lead-generation" className="text-primary hover:underline font-medium">FinTech</Link>, SaaS, and Professional Services. Our <Link to="/ai-sales-outreach" className="text-primary hover:underline font-medium">AI-powered outreach</Link> amplifies results further.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Outsourced SDR FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What is an outsourced SDR?", a: "An outsourced SDR is a trained sales development representative provided by an external agency who prospects, qualifies leads, and books meetings on behalf of your company — without the overhead of hiring in-house." },
                { q: "How many meetings can an outsourced SDR book per month?", a: "With NLG Consulting, our outsourced SDR teams typically book 15-30 qualified B2B meetings per month using multichannel outreach across LinkedIn, email, and cold calling." },
                { q: "How much does outsourced SDR cost vs in-house?", a: "An in-house SDR costs €80,000+ per year. Our outsourced SDR service delivers better results at a fraction of the cost with zero ramp-up time." },
                { q: "How fast can outsourced SDR start generating leads?", a: "Most clients see their first qualified meetings within 2-3 weeks of onboarding." },
                { q: "What industries do you serve?", a: "We serve B2B companies across SaaS, FinTech, PropTech, Professional Services, and more." }
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
            <h2 className="text-3xl font-bold mb-4">Ready to Outsource Your SDR?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free 15-minute SDR audit. We'll review your current outbound and show you exactly how we'd generate 15-30 meetings per month.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book a Free SDR Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default OutsourcedSDR;

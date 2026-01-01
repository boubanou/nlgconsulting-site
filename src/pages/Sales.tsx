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

const Sales = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Sales & Business Development",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Outbound lead generation, SDR systems, and CRM pipeline infrastructure.",
        "url": "https://nlgconsulting.co/sales"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Sales & BD", "item": "https://nlgconsulting.co/sales" }
        ]
      }
    ]
  };

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Targeted prospecting to identify and qualify high-value leads for your sales team."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Multichannel Outbound",
      description: "Coordinated campaigns across email, LinkedIn, and phone to maximize touchpoints."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "SDR Systems",
      description: "Full SDR infrastructure including hiring, training, scripts, and performance tracking."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "CRM Pipelines",
      description: "Pipeline design and CRM optimization for visibility, forecasting, and conversion."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "AI Calling",
      description: "AI-powered calling systems to scale outreach without scaling headcount."
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Outreach",
      description: "Strategic LinkedIn prospecting and engagement for B2B lead generation."
    }
  ];

  const results = [
    { metric: "15-30", label: "Qualified Meetings / Month" },
    { metric: "3+", label: "Outbound Channels" },
    { metric: "2x", label: "Pipeline Growth" },
    { metric: "24h", label: "Response Time" }
  ];

  return (
    <>
      <Helmet>
        <title>Sales & Business Development | NLG Consulting</title>
        <meta 
          name="description" 
          content="Outsource your B2B sales with NLG Consulting. Lead generation, multichannel outbound, SDR systems, CRM pipelines, and AI calling. 15-30 qualified meetings per month." 
        />
        <link rel="canonical" href="https://nlgconsulting.co/sales" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/sales" />
        <meta property="og:title" content="Sales & Business Development | NLG Consulting" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Sales & BD
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Outsourced B2B Sales Development That Delivers Results
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Outbound lead generation, multichannel SDR systems, and CRM pipeline infrastructure to drive consistent, qualified meetings. 15-30 appointments per month, guaranteed.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">
                Book a Sales Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* SEO Content - Why Outsource Sales */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why B2B Companies Outsource Sales Development to NLG</h2>
              <p>
                Building an in-house sales development team is expensive, time-consuming, and risky. Between recruiting, training, tools, and management overhead, the average cost of a single SDR exceeds €80,000 per year. And that's before you factor in the 3-6 month ramp-up period and the 35% industry turnover rate.
              </p>
              <p>
                NLG Consulting's outsourced sales development eliminates these risks while delivering consistent results. Our fully trained SDR teams start generating qualified meetings within 2-3 weeks of onboarding. You pay for results, not overhead.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Complete Sales Infrastructure Package</h3>
              <p>
                We don't just provide warm bodies on phones. Our sales development service includes everything you need to build a predictable revenue engine:
              </p>
              <ul>
                <li><strong>Ideal Customer Profile (ICP) Development:</strong> We work with you to define exactly who your best customers are, including industry, company size, job titles, and buying signals.</li>
                <li><strong>Prospect List Building:</strong> Our research team builds verified contact lists of decision-makers matching your ICP, using multiple data sources for accuracy.</li>
                <li><strong>Multichannel Sequences:</strong> We deploy coordinated outreach across LinkedIn, email, and phone to maximize touchpoints and response rates.</li>
                <li><strong>CRM Integration:</strong> All activities are logged in your CRM (HubSpot, Salesforce, Pipedrive, etc.) for complete visibility and seamless handoff.</li>
                <li><strong>Performance Analytics:</strong> Weekly reports on activity, response rates, meetings booked, and pipeline value give you full transparency.</li>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end sales infrastructure to fill your pipeline with qualified opportunities.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Discovery & ICP Definition", desc: "We analyze your market, define your ideal customer profile, and build target lists." },
                { step: "2", title: "Campaign Setup", desc: "Multi-channel sequences are created across email, LinkedIn, and phone with personalized messaging." },
                { step: "3", title: "Outbound Execution", desc: "Our SDR team executes daily outreach, handles responses, and qualifies leads." },
                { step: "4", title: "Meeting Handoff", desc: "Qualified meetings are booked directly in your calendar with full context and notes." }
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

        {/* SEO Content - Results */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Proven Results Across Industries</h2>
              <p>
                Our sales development methodology has been refined through hundreds of campaigns across SaaS, FinTech, PropTech, Professional Services, and more. Here's what our clients typically experience:
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Month 1: Foundation & Launch</h3>
              <p>
                During the first month, we complete onboarding, build your prospect lists, create messaging sequences, and begin outreach. Most clients see their first qualified meetings within weeks 2-3. Average: 8-12 meetings.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Months 2-3: Optimization & Scaling</h3>
              <p>
                With initial data, we optimize messaging, refine targeting, and scale successful sequences. Response rates typically improve 40-60% as we learn what resonates with your market. Average: 15-25 meetings per month.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Month 4+: Predictable Pipeline</h3>
              <p>
                By month four, your outbound engine is running like clockwork. You know exactly how many touches lead to how many meetings, and how many meetings lead to closed deals. Average: 20-30 meetings per month with continuous improvement.
              </p>
              <p className="mt-8">
                Ready to build a predictable pipeline? Book a free sales audit to discuss your current situation and see how NLG can help.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Ready to Fill Your Pipeline?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a 15-minute sales audit to discuss your outbound strategy and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book a Sales Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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

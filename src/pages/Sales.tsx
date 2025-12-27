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
              Scale Your Revenue Engine
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Outbound lead generation, multichannel SDR systems, and CRM pipeline infrastructure to drive consistent, qualified meetings.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">
                Book a Sales Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Ready to Fill Your Pipeline?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a 15-minute sales audit to discuss your outbound strategy and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/book">Book a Sales Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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

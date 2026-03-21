import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const AppointmentSetting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "B2B Appointment Setting & Meeting Generation", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Structured B2B appointment setting that books qualified meetings with decision-makers. Multichannel outreach, AI-assisted qualification, and calendar integration.", "url": "https://www.nlgconsulting.co/appointment-setting", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Appointment Setting", "item": "https://www.nlgconsulting.co/appointment-setting" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is B2B appointment setting?", "acceptedAnswer": { "@type": "Answer", "text": "B2B appointment setting is the structured process of identifying, qualifying, and booking confirmed meetings with decision-makers at target companies — delivered as a managed service so your sales team focuses on closing." } },
        { "@type": "Question", "name": "How does appointment setting differ from lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Lead generation identifies potential customers. Appointment setting goes further — qualifying prospects against your criteria AND booking confirmed meetings with context, so your team walks into conversations ready to close." } },
        { "@type": "Question", "name": "What channels are used for appointment setting?", "acceptedAnswer": { "@type": "Answer", "text": "We use coordinated multichannel outreach: LinkedIn engagement, personalised email sequences, and targeted calling to maximise response rates and meeting quality." } },
        { "@type": "Question", "name": "What industries benefit from appointment setting?", "acceptedAnswer": { "@type": "Answer", "text": "B2B companies in SaaS, FinTech, PropTech, and professional services with deal sizes above €5,000 and complex buying processes benefit most from structured appointment setting." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>B2B Appointment Setting | Meeting Generation | NLG</title>
        <meta name="description" content="Structured B2B appointment setting that books qualified meetings with decision-makers. Multichannel outreach, AI-assisted qualification, and calendar integration." />
        <link rel="canonical" href="https://www.nlgconsulting.co/appointment-setting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/appointment-setting" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/appointment-setting" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/appointment-setting" />
        <meta property="og:title" content="B2B Appointment Setting | Meeting Generation | NLG Consulting" />
        <meta property="og:description" content="Structured B2B appointment setting with qualified meetings booked directly in your calendar." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Appointment Setting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Appointment Setting That Delivers Qualified Meetings</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We identify, qualify, and book confirmed meetings with decision-makers at your target companies — so your sales team focuses on what matters: closing.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Meeting Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">From Prospecting to Confirmed Calendar Meetings</h2>
            <p>Your senior commercial team should be having conversations with qualified buyers — not spending hours on prospecting, qualification, and scheduling logistics. Structured appointment setting separates these functions so closers do what they do best.</p>
            <p>NLG Consulting's appointment setting delivers confirmed meetings with verified decision-makers who match your ICP and have expressed genuine interest. Every meeting comes with full context — company background, decision-maker role, identified pain points, and conversation entry points — so your team walks in prepared.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Set Qualified Appointments</h3>
            <ul>
              <li><strong>Target Architecture:</strong> We map your ICP with precision — industry, company size, revenue, decision-maker titles, and buying signals.</li>
              <li><strong>Prospect Intelligence:</strong> Verified contact data for decision-makers, enriched with AI research and intent signals.</li>
              <li><strong>Multichannel Outreach:</strong> Coordinated LinkedIn, email, and phone campaigns designed for response rates and qualification.</li>
              <li><strong>Structured Qualification:</strong> Every prospect is qualified against your criteria before a meeting is booked.</li>
              <li><strong>Calendar Integration:</strong> Meetings booked directly in your team's calendar with full briefing context.</li>
            </ul>
            <p>Combine appointment setting with our <Link to="/outsourced-sdr" className="text-primary hover:underline font-medium">outsourced SDR operations</Link> and <Link to="/ai-sales-outreach" className="text-primary hover:underline font-medium">AI-enhanced outreach</Link> for maximum commercial velocity. Our <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link> ensures your meeting strategy aligns with broader GTM objectives.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "15-30", label: "Qualified Meetings / Month" }, { metric: "95%", label: "Show-Up Rate" }, { metric: "100%", label: "ICP-Qualified" }, { metric: "2 Weeks", label: "To First Meeting" }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Appointment Setting FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "What is B2B appointment setting?", a: "The structured process of identifying, qualifying, and booking confirmed meetings with decision-makers — delivered as a managed service so your sales team focuses on closing." },
                { q: "How does it differ from lead generation?", a: "Lead gen identifies prospects. Appointment setting qualifies AND books confirmed meetings with full context for your commercial team." },
                { q: "What channels do you use?", a: "Coordinated multichannel outreach: LinkedIn engagement, personalised email sequences, and targeted calling." },
                { q: "Which industries benefit most?", a: "B2B companies in SaaS, FinTech, PropTech, and professional services with deal sizes above €5,000." }
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
            <h2 className="text-3xl font-bold mb-4">Discuss Your Meeting Strategy</h2>
            <p className="text-lg opacity-90 mb-8">If you need more qualified meetings with decision-makers — we can assess how structured appointment setting can improve your commercial pipeline.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book a Meeting Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AppointmentSetting;
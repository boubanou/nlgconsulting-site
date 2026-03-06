import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const AppointmentSetting = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "name": "B2B Appointment Setting", "provider": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" }, "description": "Professional B2B appointment setting services. We book qualified meetings with decision-makers so your sales team can focus on closing.", "url": "https://www.nlgconsulting.co/appointment-setting", "areaServed": ["Europe", "North America", "Middle East"] },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
        { "@type": "ListItem", "position": 2, "name": "Appointment Setting", "item": "https://www.nlgconsulting.co/appointment-setting" }
      ]},
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What is B2B appointment setting?", "acceptedAnswer": { "@type": "Answer", "text": "B2B appointment setting is the process of identifying, qualifying, and booking meetings with decision-makers at target companies on behalf of your sales team." } },
        { "@type": "Question", "name": "How many appointments can you set per month?", "acceptedAnswer": { "@type": "Answer", "text": "We typically book 15-30 qualified appointments per month per campaign, depending on your target market and ICP." } },
        { "@type": "Question", "name": "What's the difference between appointment setting and lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Lead generation identifies potential customers. Appointment setting goes further — it qualifies leads AND books confirmed meetings in your calendar with decision-makers." } },
        { "@type": "Question", "name": "Do you guarantee appointment quality?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every appointment is with a qualified decision-maker who matches your ICP and has expressed genuine interest in your solution." } },
        { "@type": "Question", "name": "What channels do you use for appointment setting?", "acceptedAnswer": { "@type": "Answer", "text": "We use multichannel outreach: LinkedIn, personalized email sequences, and cold calling to maximize response rates and meeting bookings." } }
      ]}
    ]
  };

  return (
    <>
      <Helmet>
        <title>B2B Appointment Setting | Qualified Meetings Booked for You | NLG Consulting</title>
        <meta name="description" content="Professional B2B appointment setting services. We book 15-30 qualified meetings per month with decision-makers. Multichannel outreach. Pay for results." />
        <link rel="canonical" href="https://www.nlgconsulting.co/appointment-setting" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/appointment-setting" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/appointment-setting" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/appointment-setting" />
        <meta property="og:title" content="B2B Appointment Setting | Qualified Meetings Booked for You | NLG Consulting" />
        <meta property="og:description" content="We book 15-30 qualified B2B meetings per month with decision-makers." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <MainNavbar />
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Appointment Setting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Appointment Setting That Fills Your Calendar</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We identify, qualify, and book meetings with decision-makers at your target companies. Your sales team focuses on closing — we handle the rest.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg text-muted-foreground max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Stop Prospecting. Start Closing.</h2>
            <p>Your senior sales reps should be closing deals, not cold calling. B2B appointment setting lets your closers do what they do best while trained specialists handle prospecting and qualification.</p>
            <p>NLG Consulting's appointment setting service delivers confirmed meetings with verified decision-makers who match your ICP and have expressed genuine interest. No tire-kickers. No gatekeepers. Just real conversations with real buyers.</p>
            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Set Appointments</h3>
            <ul>
              <li><strong>Target Definition:</strong> We map your ICP including industry, company size, revenue, and job titles.</li>
              <li><strong>Prospect Research:</strong> Verified contact data for decision-makers at target companies.</li>
              <li><strong>Multichannel Outreach:</strong> Coordinated LinkedIn, email, and phone campaigns.</li>
              <li><strong>Qualification:</strong> Every prospect is qualified against your criteria before booking.</li>
              <li><strong>Calendar Booking:</strong> Meetings booked directly in your team's calendar with full context.</li>
            </ul>
            <p>Combine appointment setting with our <Link to="/outsourced-sdr" className="text-primary hover:underline">outsourced SDR</Link> and <Link to="/ai-sales-outreach" className="text-primary hover:underline">AI outreach</Link> services for maximum pipeline velocity.</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ metric: "15-30", label: "Appointments / Month" }, { metric: "95%", label: "Show-Up Rate" }, { metric: "100%", label: "Qualified Meetings" }, { metric: "2 Weeks", label: "To First Meeting" }].map((item, i) => (
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
                { q: "What is B2B appointment setting?", a: "It's the process of identifying, qualifying, and booking meetings with decision-makers at target companies on behalf of your sales team." },
                { q: "How many appointments per month?", a: "We typically book 15-30 qualified appointments per month per campaign." },
                { q: "What's the difference vs lead generation?", a: "Lead gen identifies potential customers. Appointment setting qualifies AND books confirmed meetings." },
                { q: "Do you guarantee quality?", a: "Yes. Every appointment is with a qualified decision-maker matching your ICP." },
                { q: "What channels do you use?", a: "LinkedIn, personalized email, and cold calling for maximum response rates." }
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
            <h2 className="text-3xl font-bold mb-4">Ready to Fill Your Calendar?</h2>
            <p className="text-lg opacity-90 mb-8">Book a free consultation to see how we can deliver 15-30 qualified meetings per month.</p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/book">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AppointmentSetting;

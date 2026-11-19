import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone, ArrowRight } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import ContactForm from "@/components/ContactForm";
import CalendarEmbed from "@/components/CalendarEmbed";

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "Contact NLG Consulting",
        "description": "Get in touch with NLG Consulting to discuss AI-powered growth systems, revenue operations and strategic advisory for your business.",
        "url": "https://www.nlgconsulting.co/contact"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.nlgconsulting.co/contact" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact NLG Consulting | Growth Systems & AI Advisory</title>
        <meta name="description" content="Contact NLG Consulting to discuss AI-powered growth systems, revenue operations, strategic advisory and commercial execution for FinTech, PropTech and B2B companies." />
        <link rel="canonical" href="https://www.nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/contact" />
        <meta property="og:title" content="Contact NLG Consulting | Growth Systems & AI Advisory" />
        <meta property="og:description" content="Discuss AI-powered growth systems, revenue operations and strategic advisory with NLG Consulting." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <section className="pt-32 md:pt-40 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Growth Structure
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a clearly scoped service and request a written proposal, or book a short call if your project requires a different approach.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">How We Can Help</h2>
              <p>
                NLG Consulting works with founders, CEOs and growth leaders across FinTech, PropTech, SaaS and B2B services. Whether you need <Link to="/ai-consulting" className="text-primary hover:underline font-medium">AI consulting</Link>, <Link to="/sales" className="text-primary hover:underline font-medium">outbound infrastructure</Link>, <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link>, or a <Link to="/website-in-72-hours" className="text-primary hover:underline font-medium">conversion website</Link> — you can request a defined scope and written price without an exploratory call.
              </p>
              <p>
                Start with our fixed-scope AI Automation Sprint below, or describe the outcome you need for a tailored quote. A 15-minute call remains available if you prefer to discuss the scope first.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="fixed-price-offer" className="py-10 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6 md:p-8">
                <Badge variant="outline" className="mb-3">Defined scope · Written proposal</Badge>
                <h2 id="fixed-price-offer" className="text-2xl font-bold mb-3">AI Automation Sprint — €1,250 excl. VAT</h2>
                <p className="text-muted-foreground mb-4">A fixed-scope engagement for one clearly defined business workflow. We confirm the deliverables, inputs, exclusions and delivery plan in writing before acceptance. Third-party licences and additional integrations are quoted separately when needed.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:greg@nlgconsulting.co?subject=AI%20Automation%20Sprint%20%E2%80%94%20quote%20request&body=Hello%20Gregory%2C%0A%0AI%20would%20like%20a%20written%20proposal%20for%20one%20automation%20workflow.%0A%0ACompany%3A%0AWorkflow%20to%20automate%3A%0AExpected%20outcome%3A%0A" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Request the €1,250 Sprint proposal <ArrowRight className="h-4 w-4" /></a>
                  <a href="mailto:greg@nlgconsulting.co?subject=NLG%20Consulting%20%E2%80%94%20custom%20scope%20and%20quote" className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold hover:bg-muted">Request a custom quote</a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Requesting a proposal does not commit you to purchase. We confirm suitability and payment terms before work begins.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Book a Strategy Call</h2>
                    <p className="text-sm text-muted-foreground">15-minute focused conversation</p>
                  </div>
                </div>
                <CalendarEmbed />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Send a Message</h2>
                    <p className="text-sm text-muted-foreground">Send your scope for a written reply</p>
                  </div>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Request a Callback</h3>
                    <p className="text-sm text-muted-foreground">Request a callback using the contact form</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Direct Email</h3>
                    <p className="text-sm text-muted-foreground">greg@nlgconsulting.co</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default ContactPage;
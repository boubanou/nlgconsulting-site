import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone } from "lucide-react";
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
              Whether you are reviewing your outbound model, AI adoption strategy or commercial operating rhythm — we can assess where structure and leverage can be improved.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">How We Can Help</h2>
              <p>
                NLG Consulting works with founders, CEOs and growth leaders across FinTech, PropTech, SaaS and B2B services. Whether you need <Link to="/ai-consulting" className="text-primary hover:underline font-medium">AI consulting</Link>, <Link to="/sales" className="text-primary hover:underline font-medium">outbound infrastructure</Link>, <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link>, or a <Link to="/website-in-72-hours" className="text-primary hover:underline font-medium">conversion website</Link> — the first step is a focused conversation about your objectives.
              </p>
              <p>
                Book a 15-minute strategy call or send a message. We respond within 24 hours.
              </p>
            </div>
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
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
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
                    <p className="text-sm text-muted-foreground">We will call you back within 24 hours</p>
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
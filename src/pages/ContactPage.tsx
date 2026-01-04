import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
        "description": "Get in touch with NLG Consulting. Book a call or send us a message.",
        "url": "https://nlgconsulting.co/contact"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://nlgconsulting.co/contact" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact NLG Consulting | Get in Touch | Free Consultation</title>
        <meta 
          name="description" 
          content="Contact NLG Consulting for B2B lead generation, website development, or strategic advisory. Book a free 15-minute strategy call. Reach out today." 
        />
        <meta name="keywords" content="contact NLG Consulting, book consultation, strategy call, free business consultation, get in touch" />
        <link rel="canonical" href="https://nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/contact" />
        <meta property="og:title" content="Contact NLG Consulting | Get in Touch | Free Consultation" />
        <meta property="og:description" content="Book a free 15-minute strategy call or send us a message. We respond within 24 hours." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch With Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a free strategy call or send us a message. We respond within 24 hours.
            </p>
          </div>
        </section>

        {/* SEO Content - Contact Introduction */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">How Can We Help You Grow?</h2>
              <p>
                Whether you're looking to outsource your sales development, launch a revenue-ready website, or get strategic guidance on scaling your business, our team is here to help. We work with B2B companies, startups, and scale-ups across PropTech, FinTech, SaaS, and Professional Services.
              </p>
              <p>
                The best way to start is with a free 15-minute strategy call. During this call, we'll learn about your business, understand your challenges, and discuss how NLG Consulting might be able to help. There's no obligation—just a focused conversation about your growth goals.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What to Expect</h3>
              <p>
                When you book a call or send us a message, here's what happens next:
              </p>
              <ul>
                <li><strong>Within 24 hours:</strong> You'll receive a confirmation and any prep questions to make our conversation productive.</li>
                <li><strong>During the call:</strong> We'll discuss your current situation, growth goals, and potential approaches.</li>
                <li><strong>After the call:</strong> If there's a fit, we'll send a custom proposal. If not, we'll share relevant resources that might help.</li>
              </ul>
              <p>
                We pride ourselves on honest, straightforward communication. If we're not the right fit for your needs, we'll tell you—and we might even recommend someone who is.
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Embed */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Book a Call</h2>
                    <p className="text-sm text-muted-foreground">Schedule a 15-minute strategy call</p>
                  </div>
                </div>
                <CalendarEmbed />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
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
                    <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Request a Callback</h3>
                    <p className="text-sm text-muted-foreground">We'll call you back within 24 hours</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
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

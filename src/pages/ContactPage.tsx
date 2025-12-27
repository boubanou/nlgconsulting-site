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
        <title>Contact Us | NLG Consulting</title>
        <meta 
          name="description" 
          content="Contact NLG Consulting. Book a strategy call or send us a message. We're here to help with your business, tech, and growth needs." 
        />
        <link rel="canonical" href="https://nlgconsulting.co/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/contact" />
        <meta property="og:title" content="Contact Us | NLG Consulting" />
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
              Let's Talk
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a call or send us a message. We're here to help.
            </p>
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

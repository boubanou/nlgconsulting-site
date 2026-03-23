import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import RelatedServices from "@/components/RelatedServices";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "NLG Consulting",
          "url": "https://nlgconsulting.co",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "greg@nlgconsulting.co",
            "contactType": "Sales",
            "areaServed": ["FR", "BE", "CH", "CA", "IL"]
          }
        }
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
        <title>Contact NLG Consulting | Growth Systems & AI Advisory</title>
        <meta name="description" content="Contact NLG Consulting to discuss AI-powered growth systems, revenue operations and strategic advisory for FinTech, PropTech and B2B companies." />
        <link rel="canonical" href="https://nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/contact" />
        <meta property="og:title" content="Contact NLG Consulting | Growth Systems & AI Advisory" />
        <meta property="og:description" content="Discuss AI-powered growth systems, revenue operations and strategic advisory with NLG Consulting." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's discuss your growth structure</h1>
              <p className="text-xl text-muted-foreground">Share your details. If urgent, check 'Immediate callback'.</p>
            </div>

            <ContactForm />

            <p className="text-center text-muted-foreground mt-8 text-sm">
              Or <Link to="/book" className="text-primary hover:underline font-medium">book a strategy call directly</Link> to speak with our team.
            </p>
          </div>
        </main>

        <RelatedServices currentService="contact" />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
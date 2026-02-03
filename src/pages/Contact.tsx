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
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nlgconsulting.co"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://nlgconsulting.co/contact"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact NLG Consulting | Get in Touch | Response Within 24h</title>
        <meta name="description" content="Contact NLG Consulting. Share your details for B2B lead generation, website development, or strategic advisory. Immediate callback available." />
        <link rel="canonical" href="https://nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/contact" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/contact" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/contact" />
        <meta property="og:title" content="Contact NLG Consulting | Get in Touch" />
        <meta property="og:description" content="Contact NLG Consulting. Share your details for B2B lead generation, website development, or strategic advisory." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact NLG Consulting | Get in Touch" />
        <meta name="twitter:description" content="Contact NLG Consulting. Share your details for B2B lead generation, website development, or strategic advisory." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's talk about your growth goals</h1>
              <p className="text-xl text-muted-foreground">Share your details. If urgent, check 'Immediate callback'.</p>
            </div>

            <ContactForm />

            <p className="text-center text-muted-foreground mt-8 text-sm">
              Or <Link to="/book" className="text-primary hover:underline font-medium">book a call directly</Link> to speak with our team.
            </p>
          </div>
        </main>

        {/* Related Services */}
        <RelatedServices currentService="contact" />

        <Footer />
      </div>
    </>
  );
};

export default Contact;

import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

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
        <title>Contact Us - NLG Consulting</title>
        <meta name="description" content="Share your details. If urgent, check 'Immediate callback'." />
        <link rel="canonical" href="https://nlgconsulting.co/contact" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/contact" />
        <meta property="og:title" content="Contact Us - NLG Consulting" />
        <meta property="og:description" content="Share your details. If urgent, check 'Immediate callback'." />
        
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
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import CalendarEmbed from "@/components/CalendarEmbed";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import RelatedServices from "@/components/RelatedServices";

const Book = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Book Your Free Consultation",
        "description": "Schedule a 15-minute call to discuss how we can help you generate qualified B2B meetings",
        "url": "https://nlgconsulting.co/book",
        "potentialAction": {
          "@type": "ReserveAction",
          "target": "https://nlgconsulting.co/book",
          "result": {
            "@type": "Reservation",
            "name": "15-Minute Strategy Call"
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
            "name": "Book a Call",
            "item": "https://nlgconsulting.co/book"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Book Free Strategy Call | 15-Min Consultation | Response in 24h | NLG Consulting</title>
        <meta name="description" content="Schedule your free 15-minute strategy call. Discuss B2B lead generation, website development, or business advisory. Response within 24 hours. Limited slots." />
        <meta name="keywords" content="book strategy call, free consultation, B2B growth strategy, business advisory call, sales strategy meeting, book appointment" />
        <link rel="canonical" href="https://nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/book" />
        <meta property="og:title" content="Book Free Strategy Call | 15-Min Consultation | NLG Consulting" />
        <meta property="og:description" content="Schedule your free 15-minute strategy call. Discuss B2B lead generation, website development, or business advisory. Response within 24 hours." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Free Strategy Call | 15-Min Consultation | NLG Consulting" />
        <meta name="twitter:description" content="Schedule your free 15-minute strategy call. Discuss B2B lead generation, website development, or business advisory." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Consultation</h1>
              <p className="text-xl text-muted-foreground">Schedule a 15-minute call to discuss how we can help you generate qualified B2B meetings</p>
            </div>

            <CalendarEmbed />

            {/* Book CTA */}
            <div className="mt-16 text-center p-8 bg-muted/30 rounded-2xl">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-2">Read the Book</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Get strategic insights from Gregory Brenig's book on building and scaling businesses.
              </p>
              <Button asChild size="lg">
                <a href="https://a.co/d/3wU4Qgc" target="_blank" rel="noopener noreferrer">
                  Buy on Amazon <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            <p className="text-center text-muted-foreground text-sm">
              Not sure which service? Explore <Link to="/sales" className="text-primary hover:underline">Sales & BD</Link>, <Link to="/web" className="text-primary hover:underline">Web Studio</Link>, or <Link to="/advisory" className="text-primary hover:underline">Advisory</Link>.
            </p>
          </div>
        </main>

        {/* Related Services */}
        <RelatedServices currentService="book" />

        <MainFooter />
      </div>
    </>
  );
};

export default Book;

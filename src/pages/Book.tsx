import { Helmet } from "react-helmet-async";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import CalendarEmbed from "@/components/CalendarEmbed";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

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
        <title>Book a Free Strategy Call | 15-Minute Consultation | NLG Consulting</title>
        <meta name="description" content="Book a free 15-minute strategy call with NLG Consulting. Discuss your growth challenges and discover how we can help scale your business with B2B sales, websites, or advisory." />
        <meta name="keywords" content="book consultation, strategy call, free business consultation, B2B growth, sales strategy, business advisory" />
        <link rel="canonical" href="https://nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/book" />
        <meta property="og:title" content="Book Your Free Consultation - NLG Consulting" />
        <meta property="og:description" content="Schedule a 15-minute call to discuss how we can help you generate qualified B2B meetings" />
        
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
          </div>
        </main>

        <MainFooter />
      </div>
    </>
  );
};

export default Book;

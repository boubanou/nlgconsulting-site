import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import CalendarEmbed from "@/components/CalendarEmbed";
import { CheckCircle, XCircle } from "lucide-react";

const Book = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Book a Strategy Call | NLG Consulting",
        "description": "Schedule a 15-minute strategy call to discuss your growth systems, AI automation, revenue operations and commercial performance.",
        "url": "https://www.nlgconsulting.co/book",
        "potentialAction": { "@type": "ReserveAction", "target": "https://www.nlgconsulting.co/book", "result": { "@type": "Reservation", "name": "Strategy Call" } }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Book a Call", "item": "https://www.nlgconsulting.co/book" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Book a Strategy Call | NLG Consulting</title>
        <meta name="description" content="Schedule a 15-minute strategy call to discuss AI-powered growth systems, revenue operations and commercial performance for your business." />
        <link rel="canonical" href="https://www.nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/book" />
        <meta property="og:title" content="Book a Strategy Call | NLG Consulting" />
        <meta property="og:description" content="15-minute strategy call on growth systems, AI automation and revenue operations." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Strategy Call</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A focused 15-minute conversation about your growth systems, commercial structure and AI readiness — with an operator who has scaled revenue across FinTech, PropTech and B2B.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> This call is relevant if…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You are a founder, CEO or growth leader at a B2B, FinTech or PropTech company</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You need to structure your outbound, pipeline or revenue operations</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You want to deploy AI workflows, agents or automation into real business operations</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You are looking for execution support, not just strategic advice</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" /> This is not the right fit if…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You are looking for a freelance developer or designer</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You do not yet have a product or paying customers</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You are seeking free consulting or spec work</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You need an agency for subcontracting</li>
                </ul>
              </div>
            </div>

            <CalendarEmbed />

            <p className="text-center text-muted-foreground text-sm mt-8">
              Prefer to explore first? See our <Link to="/services" className="text-primary hover:underline">services</Link>, <Link to="/use-cases" className="text-primary hover:underline">use cases</Link>, <Link to="/ai-consulting" className="text-primary hover:underline">AI consulting</Link>, or <Link to="/advisory" className="text-primary hover:underline">strategic advisory</Link>.
            </p>
          </div>
        </main>

        <MainFooter />
      </div>
    </>
  );
};

export default Book;
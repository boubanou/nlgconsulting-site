import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import CalendarEmbed from "@/components/CalendarEmbed";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, XCircle, Zap } from "lucide-react";
import RelatedServices from "@/components/RelatedServices";

const Book = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Free Revenue Strategy Consultation",
        "description": "15-min strategy call with a SaaS & PropTech revenue expert. Walk away with 3 actionable growth ideas.",
        "url": "https://nlgconsulting.co/book",
        "potentialAction": { "@type": "ReserveAction", "target": "https://nlgconsulting.co/book", "result": { "@type": "Reservation", "name": "15-Minute Strategy Call" } }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Book a Call", "item": "https://nlgconsulting.co/book" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Free Revenue Strategy Call for SaaS Leaders | NLG</title>
        <meta name="description" content="15-min strategy call with a SaaS & PropTech revenue expert. Walk away with 3 actionable growth ideas. Limited slots this week." />
        <link rel="canonical" href="https://nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/book" />
        <meta property="og:title" content="Free Revenue Strategy Call | NLG Consulting" />
        <meta property="og:description" content="15-min strategy call. Walk away with 3 actionable growth ideas. Limited slots." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Revenue Strategy Consultation</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A focused 15-minute call with a SaaS & PropTech revenue expert. No pitch, no pressure — just actionable insights for your business.
              </p>
            </div>

            {/* Who it's for / not for */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> This is for you if…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You're a SaaS founder or PropTech operator scaling to $1M-$10M+ ARR</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You have paying customers and want to accelerate growth</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You need help with sales, pricing, go-to-market, or lead generation</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You're a B2B CEO looking for execution support, not just advice</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" /> This is NOT for you if…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You're an agency looking for subcontractors</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You don't have product-market fit yet</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You're looking for free work or spec projects</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> You need a freelance developer, not a growth partner</li>
                </ul>
              </div>
            </div>

            {/* What you'll get */}
            <div className="text-center mb-8 p-8 bg-muted/30 rounded-2xl">
              <Zap className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-4">What You'll Walk Away With</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="p-4"><strong className="text-foreground block mb-1">3 Actionable Ideas</strong>Concrete growth strategies tailored to your business</div>
                <div className="p-4"><strong className="text-foreground block mb-1">Revenue Blockers Identified</strong>Clarity on what's holding your growth back</div>
                <div className="p-4"><strong className="text-foreground block mb-1">90-Day Priority Plan</strong>A focused roadmap you can execute immediately</div>
              </div>
            </div>

            {/* Scarcity */}
            <p className="text-center text-sm text-muted-foreground mb-8">
              ⏱️ We take on <strong>3 new clients per month</strong>. Limited slots available this week.
            </p>

            {/* Calendar */}
            <CalendarEmbed />

            {/* Exploration links */}
            <p className="text-center text-muted-foreground text-sm mt-8">
              Not sure which service? Explore <Link to="/services" className="text-primary hover:underline">all services</Link>, <Link to="/sales" className="text-primary hover:underline">Sales & SDR</Link>, <Link to="/ai-lead-generation" className="text-primary hover:underline">AI Lead Generation</Link>, or <Link to="/advisory" className="text-primary hover:underline">Advisory</Link>.
            </p>
          </div>
        </main>

        <RelatedServices currentService="book" />
        <MainFooter />
      </div>
    </>
  );
};

export default Book;

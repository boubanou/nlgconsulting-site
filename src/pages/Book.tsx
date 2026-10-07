import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import CalendarEmbed from "@/components/CalendarEmbed";
import { CheckCircle } from "lucide-react";

type VoiceContext = {
  transcript: string;
  summary: string;
  recommendations?: Array<{ title: string; route: string }>;
};

const Book = () => {
  const [voiceContext, setVoiceContext] = useState<VoiceContext | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("nlg_voice_profile");
      if (stored) setVoiceContext(JSON.parse(stored));
    } catch {
      // no-op
    }
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Book a Strategy Call | NLG Consulting",
        "description": "Schedule a 15-minute call to identify where AI, automation and growth systems can save time, reduce costs, increase revenue or improve performance.",
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
        <meta name="description" content="Schedule a 15-minute call to identify where AI, automation and growth systems can save time, reduce costs, increase revenue or improve performance." />
        <link rel="canonical" href="https://www.nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/book" />
        <meta property="og:title" content="Book a Strategy Call | NLG Consulting" />
        <meta property="og:description" content="A practical 15-minute conversation about where AI and automation can create more value in your business." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {voiceContext && (
              <div className="mb-8 rounded-2xl border border-primary/15 bg-primary/[0.035] p-5 text-left sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Your NLG conversation continues here</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{voiceContext.summary}</p>
                {!!voiceContext.recommendations?.length && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {voiceContext.recommendations.slice(0, 3).map((item) => (
                      <span key={item.route} className="rounded-full border border-primary/10 bg-background px-3 py-1.5 text-xs text-muted-foreground">
                        {item.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Strategy Call</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A focused 15-minute conversation about how your business works, what you want to improve, and where AI, automation or growth systems can create measurable value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> This call is relevant if…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You run a small business, professional practice, agency, SaaS, FinTech, PropTech or growing B2B company</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You want to save time, reduce manual work or improve margins</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You want to increase leads, conversion, revenue or customer value</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> You know AI could help but do not want to spend days figuring out tools and integrations yourself</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> What we can explore together
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Which tasks or workflows are worth automating first</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Where AI can increase capacity, speed or quality even if nothing is currently “broken”</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> How technology could improve revenue, conversion, margins or customer experience</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Whether a €1,250 Automation Sprint or a broader engagement is the right next step</li>
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
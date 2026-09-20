import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import { getInsightsByLang } from "@/content/insights";

const InsightsHub = ({ lang }: { lang: "en" | "fr" }) => {
  const articles = getInsightsByLang(lang);
  const isFr = lang === "fr";
  const canonical = isFr ? "https://www.nlgconsulting.co/fr/ressources" : "https://www.nlgconsulting.co/insights";

  return (
    <>
      <Helmet>
        <title>{isFr ? "Ressources IA, Sales & Growth B2B | NLG Consulting" : "AI, Sales & B2B Growth Insights | NLG Consulting"}</title>
        <meta
          name="description"
          content={isFr
            ? "Guides pratiques NLG sur l’audit IA, l’automatisation, la prospection B2B, le SDR externalisé et les cas d’usage IA pour FinTech et PropTech."
            : "Practical NLG guides on AI audits, automation, B2B lead generation, outsourced SDR and AI use cases for FinTech and PropTech."}
        />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang={isFr ? "fr" : "en"} href={canonical} />
        <link rel="alternate" hrefLang={isFr ? "en" : "fr"} href={isFr ? "https://www.nlgconsulting.co/insights" : "https://www.nlgconsulting.co/fr/ressources"} />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/insights" />
      </Helmet>
      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4 border-b border-border">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-wide text-primary mb-4">{isFr ? "Ressources NLG" : "NLG Insights"}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isFr ? "Guides pratiques IA, Sales & Croissance B2B" : "Practical Guides for AI, Sales & B2B Growth"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {isFr
                ? "Des guides conçus pour transformer des sujets complexes en décisions opérationnelles : quoi automatiser, comment structurer l’outbound et où l’IA crée réellement du levier."
                : "Operator-focused guides that turn complex topics into execution decisions: what to automate, how to structure outbound, and where AI creates real leverage."}
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.path} to={article.path} className="border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-sm transition-all">
                <p className="text-xs uppercase tracking-wide text-primary mb-3">{article.eyebrow}</p>
                <h2 className="text-xl font-semibold mb-3">{article.h1}</h2>
                <p className="text-muted-foreground text-sm leading-6 mb-5">{article.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {isFr ? "Lire le guide" : "Read guide"} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <MainFooter />
    </>
  );
};

export default InsightsHub;

import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import { insightArticles, insightByPath } from "@/content/insights";

const InsightArticlePage = ({ lang }: { lang: "en" | "fr" }) => {
  const { slug } = useParams();
  const path = lang === "fr" ? `/fr/ressources/${slug}` : `/insights/${slug}`;
  const article = insightByPath[path];

  if (!article) {
    return (
      <>
        {lang === "fr" ? <MainNavbar /> : <MainNavbar />}
        <main className="min-h-screen pt-32 px-4">
          <div className="container-tight">
            <h1>{lang === "fr" ? "Ressource introuvable" : "Insight not found"}</h1>
          </div>
        </main>
        <MainFooter />
      </>
    );
  }

  const related = insightArticles
    .filter((item) => item.lang === lang && item.cluster === article.cluster && item.path !== article.path)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    author: { "@type": "Person", name: "Gregory Brenig" },
    publisher: {
      "@type": "Organization",
      name: "NLG Consulting",
      url: "https://www.nlgconsulting.co"
    },
    mainEntityOfPage: article.path.startsWith("/fr")
      ? `https://www.nlgconsulting.co${article.path}`
      : `https://www.nlgconsulting.co${article.path}`
  };

  const canonical = `https://www.nlgconsulting.co${article.path}`;
  const alternate = `https://www.nlgconsulting.co${article.alternatePath}`;

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang={article.lang} href={canonical} />
        <link rel="alternate" hrefLang={article.lang === "en" ? "fr" : "en"} href={alternate} />
        <link rel="alternate" hrefLang="x-default" href={article.lang === "en" ? canonical : alternate} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <MainNavbar />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-12 px-4 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-primary mb-4">{article.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{article.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">{article.intro}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CalendarDays className="w-4 h-4" />{article.updated}</span>
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{article.readingTime}</span>
            </div>
          </div>
        </section>

        <section className="py-14 px-4">
          <article className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              {article.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-8 mb-4">{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3 mt-5">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-14 p-6 rounded-xl bg-muted/40 border border-border">
              <h2 className="text-xl font-semibold mb-3">{lang === "fr" ? "À retenir" : "Key takeaway"}</h2>
              <p className="text-muted-foreground leading-7">{article.takeaway}</p>
            </div>

            <div className="mt-10 p-6 rounded-xl bg-primary text-primary-foreground">
              <h2 className="text-2xl font-bold mb-3">
                {lang === "fr" ? "Besoin d’un plan d’exécution ?" : "Need an execution plan?"}
              </h2>
              <p className="opacity-90 mb-5">
                {lang === "fr"
                  ? "Reliez ce guide à votre situation réelle avec un diagnostic ciblé."
                  : "Turn this framework into an operating plan for your company."}
              </p>
              <Link to={article.servicePath} className="inline-flex items-center gap-2 font-medium underline underline-offset-4">
                {article.serviceLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold mb-6">{lang === "fr" ? "Ressources associées" : "Related insights"}</h2>
                <div className="grid md:grid-cols-3 gap-5">
                  {related.map((item) => (
                    <Link key={item.path} to={item.path} className="border border-border rounded-xl p-5 hover:border-primary/40 transition-colors">
                      <p className="text-xs uppercase tracking-wide text-primary mb-2">{item.eyebrow}</p>
                      <h3 className="font-semibold mb-2">{item.h1}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </section>
      </main>
      <MainFooter />
    </>
  );
};

export default InsightArticlePage;

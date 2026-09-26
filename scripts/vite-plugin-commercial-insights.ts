import type { Plugin } from "vite";
import { commercialInsights } from "../src/content/commercial-insights";
import { acquisitionInsights } from "../src/content/acquisition-insights";
import type { InsightArticle } from "../src/content/insights";

const BASE_URL = "https://www.nlgconsulting.co";
const highIntentInsights = [...commercialInsights, ...acquisitionInsights];

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function stripExistingPrerender(template: string): string {
  return template.replace(/<div data-seo-prerender="true">[\s\S]*?<div id="root"><\/div>/, '<div id="root"></div>');
}

function renderArticle(article: InsightArticle): string {
  const sections = article.sections.map((section) => {
    const paragraphs = (section.paragraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("");
    const bullets = section.bullets?.length
      ? `<ul>${section.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
      : "";
    return `<section><h2>${escapeHtml(section.heading)}</h2>${paragraphs}${bullets}</section>`;
  }).join("");

  return `<div data-seo-prerender="true"><article><p>${escapeHtml(article.eyebrow)}</p><h1>${escapeHtml(article.h1)}</h1><p>${escapeHtml(article.intro)}</p>${sections}<h2>${article.lang === "fr" ? "À retenir" : "Key takeaway"}</h2><p>${escapeHtml(article.takeaway)}</p><p><a href="${escapeAttr(article.servicePath)}">${escapeHtml(article.serviceLabel)}</a></p></article></div>`;
}

function renderArticleHtml(template: string, article: InsightArticle): string {
  let html = stripExistingPrerender(template);
  const canonical = `${BASE_URL}${article.path}`;
  const alternate = `${BASE_URL}${article.alternatePath}`;
  const enUrl = article.lang === "en" ? canonical : alternate;
  const frUrl = article.lang === "fr" ? canonical : alternate;

  html = html.replace(/<html lang="[^"]*">/, `<html lang="${article.lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(article.title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escapeAttr(article.description)}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?\s*>/, `<link rel="canonical" href="${escapeAttr(canonical)}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${escapeAttr(canonical)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${escapeAttr(article.title)}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:title" content="${escapeAttr(article.title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${escapeAttr(article.description)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:description" content="${escapeAttr(article.description)}">`);
  html = html.replace(/<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="x-default" href="${escapeAttr(enUrl)}">`);
  html = html.replace(/<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="en" href="${escapeAttr(enUrl)}">`);
  html = html.replace(/<link rel="alternate" hreflang="fr" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="fr" href="${escapeAttr(frUrl)}">`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    author: { "@type": "Person", name: "Gregory Brenig" },
    publisher: { "@type": "Organization", name: "NLG Consulting", url: BASE_URL },
    mainEntityOfPage: canonical,
  };

  html = html.replace("</head>", `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script></head>`);
  html = html.replace('<div id="root"></div>', `${renderArticle(article)}<div id="root"></div>`);
  return html;
}

function commercialHubLinks(lang: "en" | "fr"): string {
  const articles = highIntentInsights.filter((article) => article.lang === lang);
  const title = lang === "fr" ? "Guides à forte intention commerciale" : "High-intent buying & execution guides";
  return `<section data-commercial-insights="true"><h2>${title}</h2><ul>${articles.map((article) => `<li><a href="${escapeAttr(article.path)}">${escapeHtml(article.h1)}</a><p>${escapeHtml(article.description)}</p></li>`).join("")}</ul></section>`;
}

export default function commercialInsightsPrerender(): Plugin {
  return {
    name: "nlg-commercial-insights-prerender",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const entry = bundle["index.html"];
      if (!entry || entry.type !== "asset") {
        this.warn("[nlg-commercial-insights] index.html not found");
        return;
      }

      const template = typeof entry.source === "string" ? entry.source : new TextDecoder().decode(entry.source);

      for (const article of highIntentInsights) {
        this.emitFile({
          type: "asset",
          fileName: article.path.replace(/^\//, "") + "/index.html",
          source: renderArticleHtml(template, article),
        });
      }

      const enHub = bundle["insights/index.html"];
      if (enHub?.type === "asset") {
        const source = typeof enHub.source === "string" ? enHub.source : new TextDecoder().decode(enHub.source);
        enHub.source = source.replace('<div id="root"></div>', `${commercialHubLinks("en")}<div id="root"></div>`);
      }

      const frHub = bundle["fr/ressources/index.html"];
      if (frHub?.type === "asset") {
        const source = typeof frHub.source === "string" ? frHub.source : new TextDecoder().decode(frHub.source);
        frHub.source = source.replace('<div id="root"></div>', `${commercialHubLinks("fr")}<div id="root"></div>`);
      }

      console.log(`[nlg-commercial-insights] generated ${highIntentInsights.length} high-intent commercial pages`);
    },
  };
}

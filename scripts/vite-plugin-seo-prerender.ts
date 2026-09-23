import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { seoRoutes, BASE_URL, type SeoRouteMeta } from "../src/lib/seo-route-metadata";
import { insightArticles, type InsightArticle } from "../src/content/insights";

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function clusterLinks(meta: SeoRouteMeta): string {
  const related = seoRoutes
    .filter((route) => route.cluster === meta.cluster && route.lang === meta.lang && route.path !== meta.path)
    .slice(0, 6);
  if (!related.length) return "";
  return `<nav aria-label="Related services"><ul>${related.map((route) => `<li><a href="${escapeAttr(route.path)}">${escapeHtml(route.h1)}</a></li>`).join("")}</ul></nav>`;
}

function renderSeoContent(meta: SeoRouteMeta): string {
  return `<div data-seo-prerender="true"><main><h1>${escapeHtml(meta.h1)}</h1><p>${escapeHtml(meta.description)}</p>${clusterLinks(meta)}</main></div>`;
}

function applyMeta(template: string, meta: SeoRouteMeta): string {
  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${meta.lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escapeAttr(meta.description)}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?\s*>/, `<link rel="canonical" href="${escapeAttr(meta.canonical)}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${escapeAttr(meta.canonical)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${escapeAttr(meta.title)}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:title" content="${escapeAttr(meta.title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${escapeAttr(meta.description)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:description" content="${escapeAttr(meta.description)}">`);

  const alternateUrl = meta.alternate === "/" ? `${BASE_URL}/` : `${BASE_URL}${meta.alternate}`;
  const enUrl = meta.lang === "en" ? meta.canonical : alternateUrl;
  const frUrl = meta.lang === "fr" ? meta.canonical : alternateUrl;
  html = html.replace(/<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="x-default" href="${escapeAttr(enUrl)}">`);
  html = html.replace(/<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="en" href="${escapeAttr(enUrl)}">`);
  html = html.replace(/<link rel="alternate" hreflang="fr" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="fr" href="${escapeAttr(frUrl)}">`);

  html = html.replace('<div id="root"></div>', `${renderSeoContent(meta)}<div id="root"></div>`);
  return html;
}


function renderInsightContent(article: InsightArticle): string {
  const sections = article.sections.map((section) => {
    const paragraphs = (section.paragraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("");
    const bullets = section.bullets?.length
      ? `<ul>${section.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
      : "";
    return `<section><h2>${escapeHtml(section.heading)}</h2>${paragraphs}${bullets}</section>`;
  }).join("");

  return `<div data-seo-prerender="true"><article><p>${escapeHtml(article.eyebrow)}</p><h1>${escapeHtml(article.h1)}</h1><p>${escapeHtml(article.intro)}</p>${sections}<h2>${article.lang === "fr" ? "À retenir" : "Key takeaway"}</h2><p>${escapeHtml(article.takeaway)}</p><p><a href="${escapeAttr(article.servicePath)}">${escapeHtml(article.serviceLabel)}</a></p></article></div>`;
}

function applyInsightMeta(template: string, article: InsightArticle): string {
  let html = template;
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
    mainEntityOfPage: canonical
  };
  html = html.replace("</head>", `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script></head>`);
  html = html.replace('<div id="root"></div>', `${renderInsightContent(article)}<div id="root"></div>`);
  return html;
}

function renderInsightsHub(template: string, lang: "en" | "fr"): string {
  const isFr = lang === "fr";
  const path = isFr ? "/fr/ressources" : "/insights";
  const canonical = `${BASE_URL}${path}`;
  const alternate = isFr ? `${BASE_URL}/insights` : `${BASE_URL}/fr/ressources`;
  const title = isFr ? "Ressources IA, Sales & Growth B2B | NLG Consulting" : "AI, Sales & B2B Growth Insights | NLG Consulting";
  const description = isFr
    ? "Guides pratiques NLG sur l’audit IA, l’automatisation, la prospection B2B, le SDR externalisé et les cas d’usage IA pour FinTech et PropTech."
    : "Practical NLG guides on AI audits, automation, B2B lead generation, outsourced SDR and AI use cases for FinTech and PropTech.";
  const h1 = isFr ? "Guides pratiques IA, Sales & Croissance B2B" : "Practical Guides for AI, Sales & B2B Growth";
  const articles = insightArticles.filter((article) => article.lang === lang);
  const links = articles.map((article) => `<li><a href="${escapeAttr(article.path)}">${escapeHtml(article.h1)}</a><p>${escapeHtml(article.description)}</p></li>`).join("");

  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escapeAttr(description)}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?\s*>/, `<link rel="canonical" href="${escapeAttr(canonical)}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${escapeAttr(canonical)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?\s*>/, `<meta property="og:title" content="${escapeAttr(title)}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:title" content="${escapeAttr(title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?\s*>/, `<meta property="og:description" content="${escapeAttr(description)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/?\s*>/, `<meta name="twitter:description" content="${escapeAttr(description)}">`);
  const enUrl = isFr ? alternate : canonical;
  const frUrl = isFr ? canonical : alternate;
  html = html.replace(/<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="x-default" href="${escapeAttr(enUrl)}">`);
  html = html.replace(/<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="en" href="${escapeAttr(enUrl)}">`);
  html = html.replace(/<link rel="alternate" hreflang="fr" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="fr" href="${escapeAttr(frUrl)}">`);
  html = html.replace('<div id="root"></div>', `<div data-seo-prerender="true"><main><h1>${escapeHtml(h1)}</h1><p>${escapeHtml(description)}</p><ul>${links}</ul></main></div><div id="root"></div>`);
  return html;
}


type SitemapEntry = {
  path: string;
  canonical: string;
  alternates: Record<string, string>;
};

function readSitemapEntries(): SitemapEntry[] {
  const xml = fs.readFileSync(path.resolve(process.cwd(), "public/sitemap.xml"), "utf8");
  const blocks = Array.from(xml.matchAll(/<url>([\s\S]*?)<\/url>/g)).map((m) => m[1]);
  return blocks.map((block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!loc) return null;
    const url = new URL(loc);
    const alternates: Record<string, string> = {};
    for (const match of block.matchAll(/<xhtml:link[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/g)) {
      alternates[match[1]] = match[2];
    }
    return { path: url.pathname === "/" ? "/" : url.pathname.replace(/\/$/, ""), canonical: loc, alternates };
  }).filter(Boolean) as SitemapEntry[];
}

function applySitemapCanonical(template: string, entry: SitemapEntry): string {
  let html = template;
  const lang = entry.path.startsWith("/fr") ? "fr" : "en";
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?\s*>/, `<link rel="canonical" href="${escapeAttr(entry.canonical)}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/, `<meta property="og:url" content="${escapeAttr(entry.canonical)}">`);
  if (entry.alternates["x-default"]) {
    html = html.replace(/<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="x-default" href="${escapeAttr(entry.alternates["x-default"])}">`);
  } else {
    html = html.replace(/\s*<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?\s*>/, "");
  }
  if (entry.alternates["en"]) {
    html = html.replace(/<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="en" href="${escapeAttr(entry.alternates["en"])}">`);
  } else {
    html = html.replace(/\s*<link rel="alternate" hreflang="en" href="[^"]*"\s*\/?\s*>/, "");
  }
  if (entry.alternates["fr"]) {
    html = html.replace(/<link rel="alternate" hreflang="fr" href="[^"]*"\s*\/?\s*>/, `<link rel="alternate" hreflang="fr" href="${escapeAttr(entry.alternates["fr"])}">`);
  } else {
    html = html.replace(/\s*<link rel="alternate" hreflang="fr" href="[^"]*"\s*\/?\s*>/, "");
  }
  return html;
}

export default function seoPrerender(): Plugin {
  return {
    name: "nlg-seo-prerender",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const entry = bundle["index.html"];
      if (!entry || entry.type !== "asset") {
        this.warn("[nlg-seo-prerender] index.html not found");
        return;
      }
      const template = typeof entry.source === "string" ? entry.source : new TextDecoder().decode(entry.source);
      const home = seoRoutes.find((route) => route.path === "/");
      if (home) entry.source = applyMeta(template, home);

      for (const meta of seoRoutes) {
        if (meta.path === "/") continue;
        this.emitFile({
          type: "asset",
          fileName: meta.path.replace(/^\//, "") + "/index.html",
          source: applyMeta(template, meta),
        });
      }
      this.emitFile({ type: "asset", fileName: "insights/index.html", source: renderInsightsHub(template, "en") });
      this.emitFile({ type: "asset", fileName: "fr/ressources/index.html", source: renderInsightsHub(template, "fr") });

      for (const article of insightArticles) {
        this.emitFile({
          type: "asset",
          fileName: article.path.replace(/^\//, "") + "/index.html",
          source: applyInsightMeta(template, article),
        });
      }

      const handled = new Set<string>([
        ...seoRoutes.map((route) => route.path),
        "/insights",
        "/fr/ressources",
        ...insightArticles.map((article) => article.path),
      ]);

      const sitemapEntries = readSitemapEntries();
      let fallbackCount = 0;
      for (const sitemapEntry of sitemapEntries) {
        if (handled.has(sitemapEntry.path) || sitemapEntry.path === "/") continue;
        this.emitFile({
          type: "asset",
          fileName: sitemapEntry.path.replace(/^\//, "") + "/index.html",
          source: applySitemapCanonical(template, sitemapEntry),
        });
        fallbackCount++;
      }

      console.log(`[nlg-seo-prerender] generated ${seoRoutes.length} SEO routes + ${insightArticles.length} insights + 2 hubs + ${fallbackCount} sitemap canonical fallbacks`);
    },
  };
}

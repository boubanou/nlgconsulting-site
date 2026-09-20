import type { Plugin } from "vite";
import { seoRoutes, BASE_URL, type SeoRouteMeta } from "../src/lib/seo-route-metadata";

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
      console.log(`[nlg-seo-prerender] generated ${seoRoutes.length} SEO route documents`);
    },
  };
}

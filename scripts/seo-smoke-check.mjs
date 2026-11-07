// SEO regression checks against Vite's generated HTML (no external dependencies).
// Run after: npm run build
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const priorityPages = [
  ["/fr/sdr-externalise", 3],
  ["/fr/agence-lead-generation-b2b", 2],
  ["/ai-for-proptech", 3],
  ["/fr/conseil-ia", 2],
  ["/outsourced-sdr", 3],
];
let failures = 0;
function check(label, work) {
  try { work(); console.log("PASS", label); }
  catch (error) { failures++; console.error("FAIL", label, error.message); }
}
function read(urlPath) {
  return fs.readFileSync(path.join(dist, urlPath.slice(1), "index.html"), "utf8");
}
function count(html, regex) { return [...html.matchAll(regex)].length; }

for (const [route, requiredH2] of priorityPages) {
  check(route + " is substantial, canonical and bilingual", () => {
    const html = read(route);
    const canonical = "https://www.nlgconsulting.co" + route;
    assert.match(html, /<div id="root">[\s\S]*?<h1\b/i, "missing actual server-rendered React root");
    assert.equal(count(html, /<h1\b/gi), 1, "multiple H1s (or duplicate prerender content)");
    assert.ok(count(html, /<h2\b/gi) >= requiredH2,
      "expected >= " + requiredH2 + " H2s, found " + count(html, /<h2\b/gi));
    assert.ok(html.includes('<link rel="canonical" href="' + canonical + '">'), "canonical mismatch");
    assert.match(html, /hreflang="en"/i, "missing English hreflang");
    assert.match(html, /hreflang="fr"/i, "missing French hreflang");
    assert.ok(!html.includes('data-seo-prerender="true"'), "old SEO placeholder was not replaced");
  });
}
check("unverified 3x/50% sales claims were removed", () => {
  for (const p of ["/ai-lead-generation", "/fr/generation-leads-ia"]) {
    const html = read(p);
    assert.doesNotMatch(html, /3x\s+(?:more|pipeline|plus)|50%\s+(?:lower|de coût|du coût)|-50%/i,
      p + ": unsupported results claim still present");
  }
});
check("sitemap and robots stay available", () => {
  const robots = fs.readFileSync(path.join(dist, "robots.txt"), "utf8");
  const a = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
  const b = fs.readFileSync(path.join(dist, "sitemap-commercial.xml"), "utf8");
  assert.match(robots, /Sitemap:/i);
  const urls = [...(a + b).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(urls.length >= 100, "unexpected sitemap URL reduction");
  assert.equal(new Set(urls).size, urls.length, "duplicate sitemap URLs");
  for (const [route] of priorityPages) {
    assert.ok(urls.includes("https://www.nlgconsulting.co" + route), "missing " + route);
  }
});
check("legal terms have their own prerendered page and correct routing", () => {
  const html = read("/web/terms");
  const canonical = "https://www.nlgconsulting.co/web/terms";
  assert.match(html, /<title>Terms and Conditions \| NLG Consulting<\/title>/);
  assert.ok(html.includes('<link rel="canonical" href="' + canonical + '">'), "terms canonical mismatch");
  assert.match(html, /<meta name="robots" content="noindex, follow">/);
  assert.ok(!/hreflang="fr"/.test(html), "no non-existent French terms alternate");
  assert.match(html, /<div id="root">[\s\S]*?<h1\b/i, "missing server-rendered terms content");
  assert.equal(count(html, /<h1\b/gi), 1, "terms have duplicate headings");
  const config = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
  assert.equal(config.rewrites.find((r) => r.source === "/web/terms")?.destination, "/web/terms/index.html");
  assert.equal(config.redirects.find((r) => r.source === "/terms")?.destination, "/web/terms");
});

check("all public sitemap pages have unique self-canonicals and one visible heading", () => {
  const origin = "https://www.nlgconsulting.co";
  const xml = ["sitemap.xml", "sitemap-commercial.xml"]
    .map(file => fs.readFileSync(path.join(dist, file), "utf8")).join("\n");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const publicPaths = new Set(urls.map(url => url.slice(origin.length)));
  const redirects = JSON.parse(fs.readFileSync("vercel.json", "utf8")).redirects;
  const permitted = new Set(["/web/terms", "/web/thank-you", "/auth", "/admin", "/access-denied"]);
  const seen = new Set();
  const problems = [];
  for (const url of urls) {
    const pathname = url.slice(origin.length);
    if (!url.startsWith(origin + "/") || seen.has(pathname)) {
      problems.push("duplicate/noncanonical: " + url);
      continue;
    }
    seen.add(pathname);
    let html;
    try { html = read(pathname); }
    catch { problems.push("missing HTML: " + pathname); continue; }
    const canon = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(m => m[1]);
    if (canon.length !== 1 || canon[0] !== url) problems.push("canonical: " + pathname + " " + JSON.stringify(canon));
    if (count(html, /<h1\b/gi) !== 1) problems.push("H1 count: " + pathname);
    if (!/<title>[^<]+<\/title>/i.test(html)) problems.push("missing title: " + pathname);
    if (!/name="description"\s+content="[^"]+"/i.test(html)) problems.push("missing description: " + pathname);
    if (/name="robots"\s+content="[^"]*noindex/i.test(html)) problems.push("unexpected noindex: " + pathname);
    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)/g)) {
      if (publicPaths.has(href) || permitted.has(href) || redirects.some(r => r.source === href)) continue;
      if (href.startsWith("/admin/") || href.startsWith("/auth/") || href.startsWith("/assets/")) continue;
      problems.push("dead internal link " + pathname + " => " + href);
    }
  }
  assert.deepEqual(problems.slice(0, 30), [], problems.length + " site-wide SEO or internal-link errors");
  assert.equal(publicPaths.size, urls.length, "duplicate public paths");
});

if (failures) { console.error(failures + " SEO regression check(s) failed"); process.exit(1); }
console.log("SEO smoke checks passed");

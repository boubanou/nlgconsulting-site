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
if (failures) { console.error(failures + " SEO regression check(s) failed"); process.exit(1); }
console.log("SEO smoke checks passed");

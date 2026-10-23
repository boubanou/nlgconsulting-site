// Browser smoke test for hydration and basic navigation after production build.
// Uses the Chrome installed on GitHub-hosted Ubuntu runners and playwright-core.
import assert from "node:assert/strict";
import fs from "node:fs";
import { spawn } from "node:child_process";
import { chromium } from "playwright-core";

const candidates = [process.env.CHROME_PATH, "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable", "/usr/bin/chromium"].filter(Boolean);
const executablePath = candidates.find((p) => fs.existsSync(p));
assert.ok(executablePath, "Chrome executable not found in CI runner");
const base = "http://127.0.0.1:4173";
const server = spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", "4173", "--strictPort"], { stdio: "ignore" });
let browser;

async function serverReady() {
  for (let i = 0; i < 40; i++) {
    if (server.exitCode !== null) throw new Error("Vite preview terminated before becoming ready");
    try {
      const res = await fetch(base, { signal: AbortSignal.timeout(1500) });
      if (res.ok) return;
    } catch { /* Vite preview has not started yet */ }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Vite preview did not start on port 4173");
}

try {
  await serverReady();
  browser = await chromium.launch({ executablePath, headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
  const routes = ["/", "/fr", "/fr/sdr-externalise", "/fr/agence-lead-generation-b2b", "/ai-for-proptech", "/outsourced-sdr"];
  for (const route of routes) {
    const page = await browser.newPage();
    const hydrationErrors = [];
    const pageErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error" && /hydration|hydrat|did not match|server html/i.test(msg.text())) hydrationErrors.push(msg.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    const res = await page.goto(base + route, { waitUntil: "domcontentloaded", timeout: 30000 });
    assert.equal(res?.status(), 200, route + " returned a non-200 status");
    await page.locator("h1").first().waitFor({ state: "visible", timeout: 12000 });
    await page.waitForTimeout(1500);
    const h1Count = await page.locator("h1").count();
    const h2Count = await page.locator("h2").count();
    assert.equal(h1Count, 1, route + " has duplicate H1s after hydration");
    assert.ok(h2Count >= 2, route + " has too little rendered content");
    assert.deepEqual(hydrationErrors, [], route + " hydration mismatch");
    assert.deepEqual(pageErrors, [], route + " uncaught page errors");
    console.log("PASS browser " + route + ": 1 H1, " + h2Count + " H2s, no runtime/hydration errors");
    await page.close();
  }
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}

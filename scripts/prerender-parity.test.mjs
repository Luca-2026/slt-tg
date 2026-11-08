import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdtemp, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import os from "node:os";
import { chromium } from "playwright";
import { loadRouteData, renderSnapshots } from "./prerender.mjs";
import { READY_SELECTORS, textDifference, visibleMainText } from "./prerender-checks.mjs";

test("Every route preserves visible main text with and without JavaScript (maximum 2%)", { timeout: 600_000 }, async () => {
  const { ALL_ROUTES } = await loadRouteData();
  // Default: verify the actual production export. Test fixtures may instead
  // snapshot the running preview; they never replace or build production dist.
  const fixtureSource = process.env.PRERENDER_TEST_SOURCE;
  const directory = fixtureSource ? await mkdtemp(path.join(os.tmpdir(), "slt-parity-")) : path.resolve("dist");
  let server, browser;
  const results = [];
  try {
    if (fixtureSource) await renderSnapshots({ sourceUrl: fixtureSource, outputDir: directory });
    else await readFile(path.join(directory, ".htaccess")); // fail if export is missing
    server = createServer(async (req, res) => {
      const pathname = new URL(req.url || "/", "http://localhost").pathname;
      const relative = path.extname(pathname) ? pathname : `${pathname.replace(/\/$/, "")}/index.html`;
      const file = path.resolve(directory, `.${relative}`);
      if (!file.startsWith(`${directory}${path.sep}`)) { res.writeHead(403); res.end(); return; }
      try {
        const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "application/javascript", ".svg": "image/svg+xml", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png" };
        res.setHeader("Content-Type", mime[path.extname(file)] || "application/octet-stream");
        res.end(await readFile(file));
      } catch {
        // Preview fixture media and Vite modules are served from the running app.
        if (fixtureSource && path.extname(pathname) !== ".html") { res.writeHead(307, { Location: `${fixtureSource}${pathname}${new URL(req.url || "/", "http://localhost").search}` }); res.end(); }
        else { res.writeHead(404); res.end(); }
      }
    });
    await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    const origin = `http://127.0.0.1:${address.port}`;
    browser = await chromium.launch({ headless: true });
    const js = await browser.newContext({ viewport: { width: 1280, height: 1800 }, reducedMotion: "reduce" });
    const nojs = await browser.newContext({ viewport: { width: 1280, height: 1800 }, javaScriptEnabled: false, reducedMotion: "reduce" });
    // No prerender flag in JS context: this verifies the real client mount.
    for (const route of ALL_ROUTES) {
      const client = await js.newPage(), staticPage = await nojs.newPage();
      const errors = [];
      client.on("pageerror", error => errors.push(error.message));
      try {
        const responses = await Promise.all([client.goto(`${origin}${route.path}`, { waitUntil: "networkidle" }), staticPage.goto(`${origin}${route.path}`, { waitUntil: "networkidle" })]);
        assert.ok(responses.every(response => response?.ok()), `Missing snapshot: ${route.path}`);
        await Promise.all([client, staticPage].flatMap(page => READY_SELECTORS.map(selector => page.locator(selector).first().waitFor({ state: "attached" }))));
        const [clientText, staticText] = await Promise.all([client.evaluate(visibleMainText), staticPage.evaluate(visibleMainText)]);
        const difference = textDifference(staticText, clientText);
        results.push({ path: route.path, difference, errors,
          ...(process.env.PRERENDER_TEST_REPORT ? { clientText, staticText } : {}) });
        console.log(`[parity] ${route.path}: ${(difference * 100).toFixed(2)}%`);
      } catch (error) { results.push({ path: route.path, difference: 1, errors: [...errors, error.message] }); }
      finally { await client.close(); await staticPage.close(); }
    }
    if (process.env.PRERENDER_TEST_REPORT) await writeFile(process.env.PRERENDER_TEST_REPORT, JSON.stringify(results, null, 2));
    const failures = results.filter(row => row.difference > 0.02 || row.errors.length);
    assert.equal(failures.length, 0, `Route mismatches:\n${failures.map(row => `${row.path}: ${(row.difference * 100).toFixed(2)}%; ${row.errors.join("; ")}`).join("\n")}`);
  } finally {
    await browser?.close();
    if (server) await new Promise(resolve => server.close(resolve));
    if (fixtureSource) await rm(directory, { recursive: true, force: true });
  }
});
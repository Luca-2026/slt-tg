/** Full-page build-time rendering. Apache serves static HTML; no runtime SSR. */
import { readFile, writeFile, mkdir, copyFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createServer } from "node:http";
import { build } from "esbuild";
import { chromium } from "playwright";
import { BASE_URL, buildSitemap } from "./seo-output.mjs";
import { inspectSnapshot, READY_SELECTORS, ROUTE_SELECTORS } from "./prerender-checks.mjs";
import { inspectRegionalSnapshot } from "./regional-checks.mjs";
import { regionalReportMarkdown } from "./regional-report.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

export async function loadRouteData() {
  const cache = path.join(ROOT, "node_modules/.prerender-cache/data.mjs");
  await mkdir(path.dirname(cache), { recursive: true });
  await build({ entryPoints: [path.join(ROOT, "scripts/_prerender-entry.mjs")], bundle: true,
    format: "esm", platform: "node", outfile: cache, logLevel: "silent" });
  const data = await import(pathToFileURL(cache).href);
  if (new Set(data.ALL_ROUTES.map(r => r.path)).size !== data.ALL_ROUTES.length) {
    throw new Error("Duplicate SEO routes");
  }
  return data;
}

export async function renderSnapshots({ sourceUrl, outputDir = DIST, browserOptions = {}, routes } = {}) {
  const { ALL_ROUTES, resolveRouteSchemas, routeMetadata, applyRouteMetadata, inspectRouteMetadata, REGIONEN, regionalDataViolations, isServiceKey } = await loadRouteData();
  const catalogue = routes ?? ALL_ROUTES;
  const regionalViolations = regionalDataViolations();
  if (!sourceUrl && regionalViolations.length) throw new Error(`Regional export blocked:\n${regionalViolations.join("\n")}`);
  // Production always requires the Vite-built template. A source URL is only
  // supplied by the browser test fixture; there is no SPA fallback on failure.
  const template = sourceUrl ? null : await readFile(path.join(DIST, "index.html"), "utf8");
  const mime = { ".js": "application/javascript", ".css": "text/css", ".svg": "image/svg+xml",
    ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2" };
  let server, browser;
  const rows = [], failures = [];
  try {
    if (!sourceUrl) {
      // Every route starts from the same clean template, never a previous snapshot.
      server = createServer(async (req, res) => {
        const pathname = decodeURIComponent(new URL(req.url || "/", "http://localhost").pathname);
        if (!path.extname(pathname) || pathname.endsWith(".html")) {
          res.setHeader("Content-Type", "text/html; charset=utf-8"); res.end(template); return;
        }
        const file = path.resolve(DIST, `.${pathname}`);
        if (!file.startsWith(`${DIST}${path.sep}`)) { res.writeHead(403); res.end(); return; }
        try { res.setHeader("Content-Type", mime[path.extname(file)] || "application/octet-stream"); res.end(await readFile(file)); }
        catch { res.writeHead(404); res.end(); }
      });
      await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
      const address = server.address();
      if (!address || typeof address === "string") throw new Error("Missing render server port");
      sourceUrl = `http://127.0.0.1:${address.port}`;
    }
    browser = await chromium.launch({ headless: true, ...browserOptions });
    const context = await browser.newContext({ viewport: { width: 1280, height: 1800 } });
    // Set before React starts; components retain their initial fallback markup.
    await context.addInitScript(() => { window.__PRERENDER__ = true; });
    const snapshotContext = await browser.newContext({ javaScriptEnabled: false,
      viewport: { width: 1280, height: 1800 }, reducedMotion: "reduce" });
    for (const route of catalogue) {
      const page = await context.newPage();
      let snapshotPage;
      const errors = [];
      page.on("pageerror", error => errors.push(error.message));
      try {
        await page.emulateMedia({ reducedMotion: "reduce" });
        await page.goto(`${sourceUrl}${route.path}`, { waitUntil: "networkidle" });
        await Promise.all([...READY_SELECTORS, ...(ROUTE_SELECTORS[route.path] ?? [])]
          .map(selector => page.locator(selector).first().waitFor({ state: "attached" })));
        if (new URL(page.url()).pathname !== route.path) throw new Error(`Route redirected: ${route.path}`);
        await page.evaluate(applyRouteMetadata, routeMetadata(route));
        await page.evaluate(({ route, schemas, base }) => {
          const setMeta = (attr, key, value) => {
            document.querySelectorAll(`meta[${attr}="${key}"]`).forEach(el => el.remove());
            const el = document.createElement("meta"); el.setAttribute(attr, key); el.content = value; document.head.append(el);
          };
          setMeta("name", "robots", route.noindex ? "noindex, follow" : "index, follow");
          setMeta("name", "twitter:url", `${base}${route.path}`);
          for (const lang of ["de", "x-default"]) {
            let el = document.querySelector(`link[hreflang="${lang}"]`);
            if (!el) { el = document.createElement("link"); el.rel = "alternate"; el.hreflang = lang; document.head.append(el); }
            el.href = `${base}${route.path}`;
          }
          document.querySelectorAll("script[data-route-schema]").forEach(el => el.remove());
          for (const schema of schemas) {
            const el = document.createElement("script"); el.type = "application/ld+json";
            el.dataset.routeSchema = "true";
            el.textContent = JSON.stringify(schema).replace(/</g, "\\u003c"); document.head.append(el);
          }
          document.querySelectorAll('link[rel="preload"][as="image"]').forEach(el => el.remove());
          // No root/content rewrites: reveal state and hotspot fallbacks belong to React.
          document.querySelectorAll("video, audio").forEach(el => el.pause());
        }, { route, schemas: resolveRouteSchemas(route), base: BASE_URL });
        const html = await page.content();
        const output = route.path === "/" ? path.join(outputDir, "index.html") : path.join(outputDir, route.path.slice(1), "index.html");
        await mkdir(path.dirname(output), { recursive: true });
        await writeFile(output, html);
        // Validate the serialized document after re-parsing, not only the live DOM.
        snapshotPage = await snapshotContext.newPage();
        await snapshotPage.setContent(await readFile(output, "utf8"));
        const stats = await snapshotPage.evaluate(inspectSnapshot);
        const regionalStats = route.city && REGIONEN[route.city] && isServiceKey(route.topic ?? "")
          ? await snapshotPage.evaluate(inspectRegionalSnapshot, { region: REGIONEN[route.city], key: route.topic }) : null;
        const violations = [...stats.violations, ...errors,
          ...(regionalStats?.violations ?? []),
          ...await snapshotPage.evaluate(inspectRouteMetadata, routeMetadata(route))];
        if (violations.length) {
          failures.push({ path: route.path, violations });
        } else {
          rows.push({ path: route.path, title: route.title, description: route.description,
            noindex: !!route.noindex, lastmod: route.lastmod || "", ...stats, ...(regionalStats ?? {}) });
          console.log(`[prerender] ${route.path}: ${stats.words} words`);
        }
      } catch (error) {
        failures.push({ path: route.path, violations: [error.message] });
      } finally {
        await snapshotPage?.close();
        await page.close();
      }
    }
    if (failures.length) {
      throw new Error(`Invalid snapshots (${failures.length} routes):\n${failures
        .map(item => `${item.path}: ${item.violations.join("; ")}`).join("\n")}`);
    }
    // Production scans every serialized route and text-based asset, not only main.
    if (template) {
      const scan = async directory => {
        for (const entry of await readdir(directory, { withFileTypes: true })) {
          const file = path.join(directory, entry.name);
          if (entry.isDirectory()) await scan(file);
          else if (/\.(html|js|css|json|svg|txt|xml|map)$/i.test(entry.name) && /Luca|Sandhoff|<GBP|\[REAKTIONSZEIT/i.test(await readFile(file, "utf8"))) throw new Error(`Forbidden public name/placeholder: ${path.relative(outputDir, file)}`);
        }
      };
      await scan(outputDir);
    }
    await writeFile(path.join(outputDir, "sitemap.xml"), buildSitemap(catalogue));
    await writeFile(path.join(outputDir, "regionalseiten-pruefbericht.md"), regionalReportMarkdown(rows, { preview: !!template === false }));
    await writeFile(path.join(sourceUrl && outputDir !== DIST ? outputDir : ROOT, ".prerender-audit.json"), JSON.stringify(rows, null, 2));
    await copyFile(path.join(ROOT, "public/.htaccess"), path.join(outputDir, ".htaccess"));
    console.log(`[prerender] ${rows.length} complete static pages; no runtime SSR`);
    return rows;
  } finally {
    await browser?.close();
    if (server) await new Promise(resolve => server.close(resolve));
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  renderSnapshots().catch(error => { console.error(error.message); process.exitCode = 1; });
}
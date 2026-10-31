/** Full-page build-time rendering. Apache serves static HTML; no runtime SSR. */
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createServer } from "node:http";
import { build } from "esbuild";
import { chromium } from "playwright";
import { BASE_URL, buildSitemap } from "./seo-output.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const template = await readFile(path.join(DIST, "index.html"), "utf8");
const cache = path.join(ROOT, "node_modules/.prerender-cache/data.mjs");
await mkdir(path.dirname(cache), { recursive: true });
await build({ entryPoints: [path.join(ROOT, "scripts/_prerender-entry.mjs")], bundle: true,
  format: "esm", platform: "node", outfile: cache, logLevel: "silent" });
const { ALL_ROUTES, resolveRouteSchemas } = await import(pathToFileURL(cache).href);
if (new Set(ALL_ROUTES.map(r => r.path)).size !== ALL_ROUTES.length) throw new Error("Duplicate SEO routes");
const mime = { ".js": "application/javascript", ".css": "text/css", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2" };
// Temporary build-only server: always start routes from the same clean SPA template.
const server = createServer(async (req, res) => {
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
const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 1800 }, reducedMotion: "reduce" });
  const rows = [];
  for (const route of ALL_ROUTES) {
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(`http://127.0.0.1:${address.port}${route.path}`, { waitUntil: "networkidle" });
    await page.waitForSelector("#root h1");
    if (new URL(page.url()).pathname !== route.path) throw new Error(`Route redirected: ${route.path}`);
    await page.evaluate(({ route, schemas, base }) => {
      const setMeta = (attr, key, value) => {
        document.querySelectorAll(`meta[${attr}="${key}"]`).forEach(el => el.remove());
        const el = document.createElement("meta"); el.setAttribute(attr, key); el.content = value; document.head.append(el);
      };
      document.title = route.title;
      setMeta("name", "description", route.description);
      setMeta("name", "robots", route.noindex ? "noindex, follow" : "index, follow");
      setMeta("name", "twitter:url", `${base}${route.path}`);
      for (const lang of ["de", "x-default"]) {
        let el = document.querySelector(`link[hreflang="${lang}"]`);
        if (!el) { el = document.createElement("link"); el.rel = "alternate"; el.hreflang = lang; document.head.append(el); }
        el.href = `${base}${route.path}`;
      }
      document.querySelectorAll("script[data-route-schema]").forEach(el => el.remove());
      for (const schema of schemas) { const el = document.createElement("script"); el.type = "application/ld+json";
        el.dataset.routeSchema = "true"; el.textContent = JSON.stringify(schema).replace(/</g, "\\u003c"); document.head.append(el); }
      document.querySelectorAll('link[rel="preload"][as="image"]').forEach(el => el.remove());
    }, { route, schemas: resolveRouteSchemas(route), base: BASE_URL });
    const stats = await page.evaluate(() => ({ h1: document.querySelectorAll("h1").length,
      words: (document.querySelector("main")?.textContent || document.querySelector("#root")?.textContent || "").trim().split(/\s+/).length,
      links: [...document.querySelectorAll("a[href]")].map(el => el.getAttribute("href")) }));
    if (stats.h1 !== 1 || errors.length) throw new Error(`Invalid render ${route.path}: h1=${stats.h1} ${errors.join("; ")}`);
    const output = route.path === "/" ? path.join(DIST, "index.html") : path.join(DIST, route.path.slice(1), "index.html");
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, await page.content());
    rows.push({ path: route.path, title: route.title, description: route.description, noindex: !!route.noindex, lastmod: route.lastmod || "", ...stats });
    console.log(`[prerender] ${route.path}: ${stats.words} words`);
    await page.close();
  }
  await writeFile(path.join(DIST, "sitemap.xml"), buildSitemap(ALL_ROUTES));
  await writeFile(path.join(ROOT, ".prerender-audit.json"), JSON.stringify(rows, null, 2));
  await copyFile(path.join(ROOT, "public/.htaccess"), path.join(DIST, ".htaccess"));
  console.log(`[prerender] ${rows.length} complete static pages; no runtime SSR`);
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }

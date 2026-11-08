import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createServer } from "node:http";
import { chromium } from "playwright";
import { loadRouteData } from "./prerender.mjs";
import { visibleMainText } from "./prerender-checks.mjs";
import { inspectPostbuildPage } from "./postbuild-checks.mjs";

export async function checkExport({ directory = path.resolve("dist"), report = path.resolve(".postbuild-audit.json") } = {}) {
  const { ALL_ROUTES, resolveRouteSchemas } = await loadRouteData();
  const files = new Map(ALL_ROUTES.map(route => [route.path, route.path === "/" ? "index.html" : `${route.path.slice(1)}/index.html`]));
  async function discover(relative = "") {
    for (const entry of await readdir(path.join(directory, relative), { withFileTypes: true })) {
      const file = path.posix.join(relative, entry.name);
      if (entry.isDirectory()) await discover(file);
      else if (entry.name.endsWith(".html")) {
        const route = file === "index.html" ? "/" : file.endsWith("/index.html") ? `/${file.slice(0, -11)}` : `/${file}`;
        files.set(route, file);
      }
    }
  }
  await discover();
  const server = createServer(async (req, res) => {
    const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
    const filename = files.get(pathname) ?? pathname.slice(1);
    const absolute = path.resolve(directory, filename);
    if (!absolute.startsWith(`${directory}${path.sep}`)) { res.writeHead(403); res.end(); return; }
    try {
      const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "application/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
      res.setHeader("Content-Type", mime[path.extname(absolute)] ?? "application/octet-stream");
      // Model Apache ErrorDocument delivery; production status is tested separately against Apache.
      if (pathname === "/404.html") res.statusCode = 404;
      res.end(await readFile(absolute));
    } catch { res.writeHead(404); res.end(); }
  });
  let browser;
  const rows = [];
  try {
    await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
    const address = server.address();
    if (!address || typeof address === "string") throw new Error("Missing check server port");
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce", viewport: { width: 1280, height: 1800 } });
    for (const [routePath] of files) {
      const page = await context.newPage();
      try {
        const response = await page.goto(`http://127.0.0.1:${address.port}${routePath}`, { waitUntil: "networkidle" });
        if (!response || (!response.ok() && !(routePath === "/404.html" && response.status() === 404))) throw new Error("Missing exported HTML");
        const route = ALL_ROUTES.find(r => r.path === routePath);
        const expectsFaq = route ? resolveRouteSchemas(route).some(schema => schema["@type"] === "FAQPage") : false;
        const visibleText = await page.evaluate(visibleMainText);
        rows.push(await page.evaluate(inspectPostbuildPage, { path: routePath, visibleText, expectsFaq, status: response.status() }));
      } catch (error) { rows.push({ path: routePath, violations: [error.message] }); }
      finally { await page.close(); }
    }
    await writeFile(report, JSON.stringify(rows, null, 2));
    const failures = rows.filter(row => row.violations.length);
    if (failures.length) throw new Error(`Post-build blocked (${failures.length}/${rows.length} routes):\n${failures.map(row => `${row.path}: ${row.violations.join("; ")}`).join("\n")}`);
    console.log(`[postbuild] ${rows.length} static routes passed all required checks`);
    return rows;
  } finally {
    await browser?.close();
    if (server.listening) await new Promise(resolve => server.close(resolve));
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  checkExport().catch(error => { console.error(error.message); process.exitCode = 1; });
}
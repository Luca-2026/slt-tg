/**
 * Build-Time Prerender für slt-tg.de.
 *
 * Wird nach `vite build` ausgeführt. Liest dist/index.html als
 * Template, ersetzt Title/Meta/OG/Robots/Hero/JSON-LD pro Route
 * und schreibt dist/{route}/index.html. Generiert außerdem
 * dist/sitemap.xml aus allen indexierbaren Routen.
 *
 * Hero-Strategie: statisches HTML aus route.h1 + route.intro[].
 * Hydration ist pragmatisch – React überschreibt den Hero beim Mount.
 */
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const TEMPLATE_PATH = path.join(DIST, "index.html");
const BASE_URL = "https://www.slt-tg.de";

// ────────────────────────────────────────────────────────
// TS-Quelldateien on-the-fly via esbuild bundlen → Daten laden
// ────────────────────────────────────────────────────────
async function loadDataModules() {
  const tmpDir = path.join(ROOT, "node_modules", ".prerender-cache");
  await mkdir(tmpDir, { recursive: true });
  const out = path.join(tmpDir, "data.mjs");

  await build({
    entryPoints: [path.join(ROOT, "scripts", "_prerender-entry.mjs")],
    bundle: true,
    format: "esm",
    platform: "node",
    outfile: out,
    logLevel: "silent",
    target: "node18",
    loader: { ".ts": "ts", ".tsx": "tsx" },
    resolveExtensions: [".ts", ".tsx", ".mjs", ".js"],
  });

  return await import(pathToFileURL(out).href + `?t=${Date.now()}`);
}

// ────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str = "") {
  return escapeHtml(str);
}

function jsonLdScripts(schemas) {
  if (!schemas?.length) return "";
  return schemas
    .map(
      (s) =>
        `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`,
    )
    .join("\n    ");
}

function heroHtml(route) {
  const intros = (route.intro || [])
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("\n      ");
  return `<div data-prerender="hero" style="display:none">
      <h1>${escapeHtml(route.h1)}</h1>
      ${intros}
    </div>`;
}

function applyTemplate(template, route, schemas) {
  const fullTitle = route.title;
  const url = `${BASE_URL}${route.path === "/" ? "/" : route.path}`;
  const ogImage = (route.ogImage || "/og-image.png").startsWith("http")
    ? route.ogImage
    : `${BASE_URL}${route.ogImage || "/og-image.png"}`;
  const ogType = route.ogType || "website";
  const robots = route.noindex ? "noindex, follow" : "index, follow";

  let html = template;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(fullTitle)}</title>`);

  // Meta-Helper
  const setMeta = (re, replacement) => {
    if (re.test(html)) html = html.replace(re, replacement);
    else html = html.replace(/<\/head>/i, `    ${replacement}\n  </head>`);
  };

  setMeta(
    /<meta\s+name=["']title["'][^>]*>/i,
    `<meta name="title" content="${escapeAttr(fullTitle)}">`,
  );
  setMeta(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${escapeAttr(route.description)}">`,
  );
  setMeta(
    /<meta\s+name=["']robots["'][^>]*>/i,
    `<meta name="robots" content="${robots}">`,
  );

  // Canonical
  const canonicalTag = `<link rel="canonical" href="${escapeAttr(url)}">`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, canonicalTag);
  } else {
    html = html.replace(/<\/head>/i, `    ${canonicalTag}\n  </head>`);
  }

  // OG / Twitter
  setMeta(
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${escapeAttr(fullTitle)}">`,
  );
  setMeta(
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${escapeAttr(route.description)}">`,
  );
  setMeta(
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${escapeAttr(url)}">`,
  );
  setMeta(
    /<meta\s+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${escapeAttr(ogType)}">`,
  );
  setMeta(
    /<meta\s+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${escapeAttr(ogImage)}">`,
  );
  setMeta(
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${escapeAttr(fullTitle)}">`,
  );
  setMeta(
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}">`,
  );
  setMeta(
    /<meta\s+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}">`,
  );

  // JSON-LD-Platzhalter
  const ldBlock = jsonLdScripts(schemas);
  if (html.includes("<!--PRERENDER:JSONLD-->")) {
    html = html.replace("<!--PRERENDER:JSONLD-->", ldBlock);
  } else {
    html = html.replace(/<\/head>/i, `    ${ldBlock}\n  </head>`);
  }

  // Hero-Platzhalter (vor Hydration sichtbar als hidden DOM)
  const hero = heroHtml(route);
  if (html.includes("<!--PRERENDER:HERO-->")) {
    html = html.replace("<!--PRERENDER:HERO-->", hero);
  } else {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root">${hero}</div>`);
  }

  return html;
}

function routeOutputPath(routePath) {
  if (routePath === "/") return path.join(DIST, "index.html");
  const clean = routePath.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(DIST, clean, "index.html");
}

// ────────────────────────────────────────────────────────
// Sitemap
// ────────────────────────────────────────────────────────
function buildSitemap(routes) {
  const indexable = routes.filter((r) => !r.noindex);
  const urls = indexable
    .map((r) => {
      const loc = `${BASE_URL}${r.path === "/" ? "/" : r.path}`;
      const lastmod = r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : "";
      const cf = r.changefreq ? `<changefreq>${r.changefreq}</changefreq>` : "";
      const pr = r.priority != null ? `<priority>${r.priority.toFixed(1)}</priority>` : "";
      return `  <url><loc>${loc}</loc>${lastmod}${cf}${pr}</url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// ────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(TEMPLATE_PATH)) {
    console.error(`[prerender] dist/index.html nicht gefunden – erst 'vite build' ausführen.`);
    process.exit(1);
  }

  const template = await readFile(TEMPLATE_PATH, "utf8");

  const { ALL_ROUTES, resolveRouteSchemas } = await loadDataModules();

  let count = 0;
  for (const route of ALL_ROUTES) {
    const schemas = resolveRouteSchemas(route);
    const html = applyTemplate(template, route, schemas);
    const out = routeOutputPath(route.path);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, html, "utf8");
    console.log(`[${route.path}] written (${schemas.length} schemas)`);
    count++;
  }

  // Sitemap
  const sitemap = buildSitemap(ALL_ROUTES);
  await writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");
  const indexable = ALL_ROUTES.filter((r) => !r.noindex).length;
  console.log(`\n[sitemap] ${indexable} URLs (von ${ALL_ROUTES.length} Routes)`);
  console.log(`[prerender] Done. ${count} Seiten geschrieben.`);
}

main().catch((err) => {
  console.error("[prerender] FAILED:", err);
  process.exit(1);
});

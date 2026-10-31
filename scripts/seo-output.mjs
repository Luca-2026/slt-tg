export const BASE_URL = "https://www.slt-tg.de";

export function buildSitemap(routes) {
  const seen = new Set();
  const entries = routes.filter(route => !route.noindex).map(route => {
    if (seen.has(route.path)) throw new Error(`Duplicate sitemap route: ${route.path}`);
    seen.add(route.path);
    const lastmod = route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : "";
    return `  <url><loc>${BASE_URL}${route.path}</loc>${lastmod}</url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}
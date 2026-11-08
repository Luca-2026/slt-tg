/** Listet alle Routen mit Title/Description-Längen und Regelverstößen. */
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cache = path.join(ROOT, "node_modules/.prerender-cache/data.mjs");
await build({
  entryPoints: [path.join(ROOT, "scripts/_prerender-entry.mjs")],
  bundle: true, format: "esm", platform: "node", outfile: cache, logLevel: "silent",
});
const { ALL_ROUTES } = await import(pathToFileURL(cache).href);

const BANNED = [/e\.on/i, /henkel/i, /japan-zentral/i, /bundesministeri/i, /sandhoff/i];
const problems = [];
for (const route of ALL_ROUTES) {
  const issues = [];
  const t = route.title, d = route.description;
  if (t.length > 60) issues.push(`title ${t.length}>60`);
  if (!/ \| SLT (Technology Group|TG)$/.test(t)) issues.push("title suffix fehlt/falsch");
  if (/SLT AV/.test(t)) issues.push("title enthält SLT AV");
  if (d.length < 120 || d.length > 155) issues.push(`description ${d.length} Zeichen`);
  if (d.includes("!")) issues.push("description enthält !");
  if (d.endsWith("...") || d.endsWith("…")) issues.push("description abgeschnitten");
  for (const pattern of BANNED) {
    if (pattern.test(t) || pattern.test(d)) issues.push(`banned: ${pattern}`);
  }
  if (route.routeType === "localseo" && route.city !== "nrw") {
    const expected = `${route.h1} | SLT Technology Group`;
    if (t !== expected) issues.push(`regional title != "${expected}"`);
  }
  if (issues.length) problems.push({ path: route.path, title: t, issues });
  console.log(`${route.path}\t${t.length}\t${d.length}\t${route.noindex ? "noindex" : "index"}\t${t}`);
}
console.log(`\n${ALL_ROUTES.length} Routen, ${problems.length} mit Problemen`);
for (const p of problems) console.log(`\n${p.path}\n  ${p.title}\n  - ${p.issues.join("\n  - ")}`);

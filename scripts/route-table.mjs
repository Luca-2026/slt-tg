/** Erzeugt die vollständige Routentabelle (Markdown + CSV) mit robots-Spalte. */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = process.argv[2] || "/mnt/documents";
const DATE = process.argv[3] || "2026-11-08";
const cache = path.join(ROOT, "node_modules/.prerender-cache/data.mjs");
await build({
  entryPoints: [path.join(ROOT, "scripts/_prerender-entry.mjs")],
  bundle: true, format: "esm", platform: "node", outfile: cache, logLevel: "silent",
});
const { ALL_ROUTES } = await import(pathToFileURL(cache).href);

const escCsv = (value) => `"${String(value).replace(/"/g, '""')}"`;
const csvRows = [
  "Route;Title;Title-Zeichen;Description;Description-Zeichen;Robots;Canonical",
  ...ALL_ROUTES.map((r) =>
    [
      r.path,
      escCsv(r.title),
      r.title.length,
      escCsv(r.description),
      r.description.length,
      r.noindex ? "noindex, follow" : "index, follow",
      `https://www.slt-tg.de${r.path}`,
    ].join(";"),
  ),
];

const escMd = (value) => String(value).replace(/\|/g, "\\|");
const mdRows = ALL_ROUTES.map(
  (r) =>
    `| \`${r.path}\` | ${escMd(r.title)} | ${r.title.length} | ${escMd(r.description)} | ${r.description.length} | ${r.noindex ? "noindex" : "index"} |`,
);

const md = `# SEO-Routentabelle SLT Technology Group – Stand ${DATE}

Alle ${ALL_ROUTES.length} Routen mit Title (max. 60 Zeichen inkl. Suffix), Description (120–155 Zeichen) und robots-Status.
Canonical und og:url zeigen pro Route auf https://www.slt-tg.de<route>.

| Route | Title | Zeichen | Description | Zeichen | Robots |
|---|---|---|---|---|---|
${mdRows.join("\n")}

## Offene Felder (Kunde liefert nach)

- **gbpUrl** für alle 7 Städte (Köln, Düsseldorf, Bonn, Krefeld, Essen, Duisburg, Mönchengladbach): Google-Business-Profil-URL des zuständigen Standorts („<GBP Krefeld>"). Bis dahin wird kein GBP-Link gerendert.
- **Bonn – FAQ „Welche Reaktionszeit gilt für Bonn?"**: Antwort „[REAKTIONSZEIT EINTRAGEN]" offen. Die Frage wird bis dahin nicht gerendert.
- **Zertifizierungen**: Bezeichnung und Jahr je Hersteller-Zertifizierung (Crestron, Q-SYS, Shure, Yealink, Huddly, Barco, Sennheiser, Samsung, PureLink, Lightware, Nureva, iiyama) – bis dahin nur Herstellername. Poly/Logitech: „Erfahrung mit" bis zur Bestätigung.
`;

await writeFile(path.join(OUT, `SEO-Routentabelle-${DATE}.md`), md);
await writeFile(path.join(OUT, `SEO-Routentabelle-${DATE}.csv`), csvRows.join("\n"));
console.log(`geschrieben: ${ALL_ROUTES.length} Routen nach ${OUT}`);

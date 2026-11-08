export function regionalReportMarkdown(rows, { preview = false } = {}) {
  const regional = rows.filter(row => row.faqCount != null);
  const lines = ["# Regionalseiten – Prüfbericht", "",
    preview ? "Vorschau-Snapshots geprüft; kein Produktionsbuild oder FTP-Export. 18 separate Descriptions stehen noch aus; der Produktionsexport bleibt gesperrt." : "Validierte statische Produktionsseiten.",
    "", "Wortzahl: sichtbarer Text in main, FAQ im geschlossenen Zustand. FAQ-Antworten sind vollständig im HTML enthalten.", "",
    "| Route | Wörter | FAQ | Gerenderte Referenzen | Title-Zeichen | Description-Zeichen | JSON-LD-Typen | Status |",
    "|---|---:|---:|---|---:|---:|---|---|"];
  for (const row of regional) lines.push(`| ${row.path} | ${row.visibleWords} | ${row.faqCount} | ${(row.references ?? []).join(", ") || "–"} | ${row.titleLength} | ${row.descriptionLength} | ${(row.schemaTypes ?? []).join(", ")} | ${row.pendingDescription ? "Description vom Nutzer offen" : "geprüft"} |`);
  return lines.join("\n") + "\n";
}
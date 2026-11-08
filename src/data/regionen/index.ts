/// <reference lib="es2022.intl" />
import koeln from "./koeln.json";
import duesseldorf from "./duesseldorf.json";
import bonn from "./bonn.json";
import krefeld from "./krefeld.json";
import essen from "./essen.json";
import duisburg from "./duisburg.json";
import moenchengladbach from "./moenchengladbach.json";

export const SERVICE_NAMES = {
  medientechnik: "Medientechnik", konferenztechnik: "Konferenztechnik",
  videokonferenz: "Videokonferenz", "it-netzwerk": "IT-Netzwerk", "digital-signage": "Digital Signage",
} as const;
export type ServiceKey = keyof typeof SERVICE_NAMES;
export interface RegionFaq { frage: string; antwort: string }
export interface RegionService {
  description?: string;
  einleitung?: string; anforderungen_titel?: string; anforderungen?: string;
  arbeitsweise?: string; faq?: RegionFaq[]; pruefen?: string;
}
export interface RegionReferenz {
  name: string; leistung: string[]; beschreibung: string; ort: string; freigabe: boolean; url?: string;
}
export interface Region {
  stadt: string; slug: string; standort: { name: string; zusatz: string };
  fahrzeit: string; ansprechpartner: { name: string; funktion: string };
  gbpUrl: string | null; quellen: { fakt: string; url: string }[];
  referenzen: RegionReferenz[]; leistungen: Partial<Record<ServiceKey, RegionService>>;
}
export const REGIONEN: Record<string, Region> = { koeln, duesseldorf, bonn, krefeld, essen, duisburg, moenchengladbach };
export const REGIONAL_MODIFIED = "2026-11-08";
export function getRegion(slug: string): Region | undefined { return REGIONEN[slug]; }
export function isServiceKey(key: string): key is ServiceKey { return key in SERVICE_NAMES; }
export function isPlaceholder(value: string | null | undefined): boolean {
  return !!value && (value.trim().startsWith("<") || /\[.*EINTRAGEN.*\]/.test(value));
}
export function visibleFaqs(region: Region, key: string): RegionFaq[] {
  if (!isServiceKey(key)) return [];
  return (region.leistungen[key]?.faq ?? []).filter(faq => faq.frage && faq.antwort && !isPlaceholder(faq.antwort));
}
export function referenzenFuerLeistung(region: Region, key: string): RegionReferenz[] {
  return region.referenzen.filter(ref => ref.freigabe === true && ref.leistung.includes(key));
}
export function sentences(text: string): string[] {
  return Array.from(new Intl.Segmenter("de", { granularity: "sentence" }).segment(text), part => part.segment.trim()).filter(Boolean);
}
export function sentenceSimilarity(a: string, b: string): number {
  const normalize = (text: string) => sentences(text).map(s => s.toLocaleLowerCase("de").replace(/\s+/g, " ").trim());
  const first = new Set(normalize(a)), second = new Set(normalize(b));
  if (!first.size || !second.size) return 0;
  return [...first].filter(s => second.has(s)).length / Math.min(first.size, second.size);
}
export function regionDescription(region: Region, key: ServiceKey): { text: string; pending: boolean } {
  const text = region.leistungen[key]?.description;
  if (typeof text !== "string" || !text.trim()) {
    throw new Error(`/${key}/${region.slug}: missing leistungen.${key}.description`);
  }
  if (text.length < 120 || text.length > 155 || /!|…|\.\.\./.test(text)) {
    throw new Error(`/${key}/${region.slug}: description must contain 120–155 characters without truncation`);
  }
  return { text, pending: false };
}
export const OPEN_FIELDS = Object.values(REGIONEN).flatMap(region => {
  const fields: { stadt: string; feld: string; hinweis: string }[] = [];
  if (isPlaceholder(region.gbpUrl)) fields.push({ stadt: region.stadt, feld: "gbpUrl", hinweis: "Google-Unternehmensprofil fehlt" });
  for (const key of Object.keys(SERVICE_NAMES) as ServiceKey[]) {
    if (regionDescription(region, key).pending) fields.push({ stadt: region.stadt, feld: `/${key}/${region.slug}`, hinweis: "Separate Description mit 120–155 Zeichen vom Nutzer erforderlich" });
  }
  return fields;
});
export function regionalDataViolations(): string[] {
  const violations: string[] = [];
  const regions = Object.values(REGIONEN);
  for (const key of Object.keys(SERVICE_NAMES) as ServiceKey[]) {
    for (const region of regions) {
      const content = region.leistungen[key];
      const route = `/${key}/${region.slug}`;
      if (!content?.einleitung || !content.anforderungen || visibleFaqs(region, key).length < 2) violations.push(`${route}: required editorial content missing`);
      const metadata = regionDescription(region, key);
      if (metadata.pending) violations.push(`${route}: separate 120–155 character description required`);
      if (`${SERVICE_NAMES[key]} ${region.stadt} | SLT Technology Group`.length > 64) violations.push(`${route}: title exceeds 64 characters`);
      const publicText = JSON.stringify({ einleitung: content?.einleitung, anforderungen: content?.anforderungen, arbeitsweise: content?.arbeitsweise, faq: visibleFaqs(region, key), refs: referenzenFuerLeistung(region, key), description: metadata.text });
      if (/Luca|Sandhoff|<GBP|\[REAKTIONSZEIT/i.test(publicText)) violations.push(`${route}: forbidden public content`);
    }
    for (let i = 0; i < regions.length; i++) for (let j = i + 1; j < regions.length; j++) {
      const a = regions[i].leistungen[key], b = regions[j].leistungen[key];
      if (sentenceSimilarity(`${a?.einleitung ?? ""} ${a?.anforderungen ?? ""}`, `${b?.einleitung ?? ""} ${b?.anforderungen ?? ""}`) > 0.2) violations.push(`${key}: ${regions[i].slug}/${regions[j].slug} share more than 20% identical sentences`);
    }
  }
  return violations;
}

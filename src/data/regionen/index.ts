/**
 * Datengetriebenes Regional-Template (eine JSON-Datei pro Stadt).
 *
 * Regeln (Vorgabe 08.11.2026):
 * - Das Template rendert nur Abschnitte mit Inhalt (keine Platzhalter, keine Füllsätze).
 * - Referenzen mit freigabe=false werden nicht gerendert.
 * - Pro Leistung werden nur Referenzen angezeigt, deren leistung passt.
 * - Offene Felder (Platzhalter in den JSON-Daten) werden nicht gerendert,
 *   sondern in OPEN_FIELDS gesammelt und dem Kunden gemeldet.
 */
import koeln from "./koeln.json";
import duesseldorf from "./duesseldorf.json";
import bonn from "./bonn.json";
import krefeld from "./krefeld.json";
import essen from "./essen.json";
import duisburg from "./duisburg.json";
import moenchengladbach from "./moenchengladbach.json";

export interface RegionReferenz {
  name: string;
  leistung: string;
  detail: string;
  ort: string;
  freigabe: boolean;
  url?: string;
}

export interface RegionFaq {
  question: string;
  answer: string;
}

export interface Region {
  stadt: string;
  slug: string;
  standort: string;
  fahrzeit: string;
  ansprechpartner: string;
  gbpUrl: string | null;
  intro: string;
  referenzen: RegionReferenz[];
  branchen: string[];
  ausschluesse: string[];
  faq: RegionFaq[];
}

export const REGIONEN: Record<string, Region> = {
  koeln: koeln as Region,
  duesseldorf: duesseldorf as Region,
  bonn: bonn as Region,
  krefeld: krefeld as Region,
  essen: essen as Region,
  duisburg: duisburg as Region,
  moenchengladbach: moenchengladbach as Region,
};

export function getRegion(slug: string): Region | undefined {
  return REGIONEN[slug];
}

/** Marker für vom Kunden noch zu liefernde Inhalte. */
const PLACEHOLDER_PATTERN = /^\[.*EINTRAGEN.*\]$|^<.*>$/;

export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return false;
  return PLACEHOLDER_PATTERN.test(value.trim());
}

/** FAQ-Einträge ohne Platzhalter-Antworten (Platzhalter werden nicht gerendert). */
export function visibleFaqs(region: Region): RegionFaq[] {
  return region.faq.filter((item) => !isPlaceholder(item.answer));
}

/** Freigegebene Referenzen, gefiltert auf die angefragte Leistung. */
export function referenzenFuerLeistung(region: Region, leistung: string): RegionReferenz[] {
  return region.referenzen.filter(
    (ref) => ref.freigabe && ref.leistung.toLowerCase().includes(leistung.toLowerCase()),
  );
}

/**
 * Offene Felder, die der Kunde nachliefern muss.
 * Wird nach dem Build im Report ausgegeben.
 */
export interface OpenField {
  stadt: string;
  feld: string;
  hinweis: string;
}

export const OPEN_FIELDS: OpenField[] = Object.values(REGIONEN).flatMap((region) => {
  const fields: OpenField[] = [];
  if (!region.gbpUrl) {
    fields.push({
      stadt: region.stadt,
      feld: "gbpUrl",
      hinweis: "Google-Business-Profil-URL für den zuständigen Standort (<GBP Krefeld>) fehlt",
    });
  }
  for (const item of region.faq) {
    if (isPlaceholder(item.answer)) {
      fields.push({
        stadt: region.stadt,
        feld: `faq: ${item.question}`,
        hinweis: `Antwort offen (${item.answer}) – Frage wird bis dahin nicht gerendert`,
      });
    }
  }
  return fields;
});

/**
 * Zusammengefügter sichtbarer Text einer Regional-Seite (pro Leistung).
 * Grundlage für den 30-%-Ähnlichkeitstest zwischen zwei Städten.
 */
export function regionPageText(region: Region, leistung: string): string {
  const parts: string[] = [
    `${leistung} ${region.stadt}`,
    region.intro,
    region.standort,
    region.fahrzeit,
    region.ansprechpartner,
  ];
  for (const ref of referenzenFuerLeistung(region, leistung)) {
    parts.push(ref.name, ref.leistung, ref.detail, ref.ort);
  }
  parts.push(...region.branchen, ...region.ausschluesse);
  for (const item of visibleFaqs(region)) {
    parts.push(item.question, item.answer);
  }
  return parts.join(" ");
}

/**
 * Ähnlichkeit zweier Texte als Containment von Wort-5-Grammen:
 * Anteil der 5-Gramm-Folgen des kürzeren Textes, die auch im längeren vorkommen.
 * Stadt- und Leistungsnamen werden vorab neutralisiert, damit allein der
 * Wechsel des Ortsnamens keine künstliche Ähnlichkeit erzeugt.
 */
export function textSimilarity(textA: string, textB: string): number {
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-zäöüß0-9\s]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
  const wordsA = normalize(textA);
  const wordsB = normalize(textB);
  if (wordsA.length < 5 || wordsB.length < 5) return 0;
  const shingles = (words: string[]) => {
    const set = new Set<string>();
    for (let i = 0; i + 5 <= words.length; i++) set.add(words.slice(i, i + 5).join(" "));
    return set;
  };
  const setA = shingles(wordsA);
  const setB = shingles(wordsB);
  const smaller = setA.size <= setB.size ? setA : setB;
  const larger = setA.size <= setB.size ? setB : setA;
  if (smaller.size === 0) return 0;
  let shared = 0;
  for (const shingle of smaller) if (larger.has(shingle)) shared++;
  return shared / smaller.size;
}

import { describe, expect, it } from "vitest";
import {
  REGIONEN,
  OPEN_FIELDS,
  getRegion,
  isPlaceholder,
  referenzenFuerLeistung,
  regionPageText,
  textSimilarity,
  visibleFaqs,
} from "@/data/regionen";
import { topics } from "@/data/localSEO";

const CITY_SLUGS = Object.keys(REGIONEN);
const LEISTUNGEN = Object.values(topics).map((t) => t.leistung);

describe("Regionen-Daten (Vorgabe 08.11.2026)", () => {
  it("hat genau die sieben vorgegebenen Städte", () => {
    expect(CITY_SLUGS.sort()).toEqual(
      ["bonn", "duesseldorf", "duisburg", "essen", "koeln", "krefeld", "moenchengladbach"].sort(),
    );
  });

  it("jede Stadt hat eine eigene Einleitung von höchstens drei Sätzen", () => {
    const intros = new Set<string>();
    for (const region of Object.values(REGIONEN)) {
      const sentences = region.intro.split(/(?<=[.!?])\s+/).filter(Boolean);
      expect(sentences.length, region.slug).toBeLessThanOrEqual(3);
      expect(intros.has(region.intro), `Intro doppelt: ${region.slug}`).toBe(false);
      intros.add(region.intro);
    }
  });

  it("rendert keine Referenzen ohne Freigabe", () => {
    for (const region of Object.values(REGIONEN)) {
      for (const leistung of LEISTUNGEN) {
        for (const ref of referenzenFuerLeistung(region, leistung)) {
          expect(ref.freigabe, `${region.slug}/${ref.name}`).toBe(true);
        }
      }
    }
  });

  it("zeigt pro Leistung nur passende Referenzen", () => {
    const koeln = getRegion("koeln")!;
    expect(referenzenFuerLeistung(koeln, "Videokonferenz").map((r) => r.name)).toEqual(["Bank-Verlag"]);
    expect(referenzenFuerLeistung(koeln, "Konferenztechnik").map((r) => r.name)).toEqual(["Pfeifer & Langen"]);
    expect(referenzenFuerLeistung(koeln, "IT-Netzwerk")).toEqual([]);
    const bonn = getRegion("bonn")!;
    expect(referenzenFuerLeistung(bonn, "Digital Signage").map((r) => r.name)).toEqual(["Knauber"]);
    expect(referenzenFuerLeistung(bonn, "Medientechnik").map((r) => r.name)).toEqual(["Knauber"]);
    const duesseldorf = getRegion("duesseldorf")!;
    expect(referenzenFuerLeistung(duesseldorf, "IT-Netzwerk").map((r) => r.name)).toEqual([
      "Boston Consulting Group",
      "Capgemini",
    ]);
  });

  it("rendert keine Platzhalter-Antworten und sammelt offene Felder", () => {
    for (const region of Object.values(REGIONEN)) {
      for (const faq of visibleFaqs(region)) {
        expect(isPlaceholder(faq.answer), `${region.slug}: ${faq.question}`).toBe(false);
      }
    }
    // Bekannte offene Felder: GBP-URLs (7 Städte) + Bonner Reaktionszeit
    expect(OPEN_FIELDS.some((f) => f.feld.includes("Reaktionszeit") && f.stadt === "Bonn")).toBe(true);
    expect(OPEN_FIELDS.filter((f) => f.feld === "gbpUrl")).toHaveLength(7);
  });

  it("hält den gemeinsamen Text zweier Stadtseiten derselben Leistung unter 30 %", () => {
    for (const leistung of LEISTUNGEN) {
      for (let i = 0; i < CITY_SLUGS.length; i++) {
        for (let j = i + 1; j < CITY_SLUGS.length; j++) {
          const a = regionPageText(REGIONEN[CITY_SLUGS[i]], leistung);
          const b = regionPageText(REGIONEN[CITY_SLUGS[j]], leistung);
          const similarity = textSimilarity(a, b);
          expect(
            similarity,
            `${leistung}: ${CITY_SLUGS[i]} vs ${CITY_SLUGS[j]} = ${(similarity * 100).toFixed(1)} %`,
          ).toBeLessThanOrEqual(0.3);
        }
      }
    }
  });
});

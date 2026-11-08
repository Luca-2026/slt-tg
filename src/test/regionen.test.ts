import { describe, expect, it } from "vitest";
import { REGIONEN, SERVICE_NAMES, referenzenFuerLeistung, regionDescription, sentenceSimilarity, visibleFaqs, regionalDataViolations, type ServiceKey } from "@/data/regionen";
import { ALL_ROUTES } from "@/data/seo-routes";
import { buildLocalSeoSchemas } from "@/data/schemas";

const keys = Object.keys(SERVICE_NAMES) as ServiceKey[];
describe("Final regional editorial data", () => {
  it("contains exactly seven cities and 35 service entries", () => {
    expect(Object.keys(REGIONEN).sort()).toEqual(["bonn", "duesseldorf", "duisburg", "essen", "koeln", "krefeld", "moenchengladbach"]);
    expect(Object.values(REGIONEN).reduce((sum, region) => sum + Object.keys(region.leistungen).length, 0)).toBe(35);
  });
  it("requires at least two complete FAQs per route", () => {
    for (const region of Object.values(REGIONEN)) for (const key of keys) {
      expect(visibleFaqs(region, key).length, `${region.slug}/${key}`).toBeGreaterThanOrEqual(2);
      expect(region.leistungen[key]?.einleitung).toBeTruthy();
      expect(region.leistungen[key]?.anforderungen).toBeTruthy();
    }
  });
  it("matches exact service keys and never publishes unapproved references", () => {
    const region = REGIONEN.koeln;
    expect(referenzenFuerLeistung(region, "videokonferenz").map(ref => ref.name)).toEqual(["Bank-Verlag", "Pfeifer & Langen"]);
    expect(referenzenFuerLeistung(region, "it-netzwerk")).toEqual([]);
    const candidate = { ...region, referenzen: [...region.referenzen, { name: "Unapproved", beschreibung: "Private", leistung: ["videokonferenz"], ort: "Köln", freigabe: false }] };
    expect(referenzenFuerLeistung(candidate, "videokonferenz").map(ref => ref.name)).not.toContain("Unapproved");
    expect(referenzenFuerLeistung(region, "video")).toEqual([]);
  });
  it("permits at most 20% identical sentences in intro and requirements", () => {
    expect(sentenceSimilarity("Gleicher Satz. Eigener Satz.", "Gleicher Satz. Anderer Satz.")).toBe(0.5);
    const cities = Object.values(REGIONEN);
    for (const key of keys) for (let i = 0; i < cities.length; i++) for (let j = i + 1; j < cities.length; j++) {
      const a = cities[i].leistungen[key], b = cities[j].leistungen[key];
      expect(sentenceSimilarity(`${a?.einleitung} ${a?.anforderungen}`, `${b?.einleitung} ${b?.anforderungen}`), `${key}/${cities[i].slug}/${cities[j].slug}`).toBeLessThanOrEqual(0.2);
    }
  });
  it("uses all four requested schemas with the real branch address and correct FAQ", () => {
    const route = ALL_ROUTES.find(route => route.path === "/videokonferenz/koeln");
    if (!route) throw new Error("Missing route");
    const schemas = JSON.parse(JSON.stringify(buildLocalSeoSchemas(route)));
    expect(schemas.flatMap((schema: Record<string, unknown>) => schema["@type"])).toEqual(["Service", "LocalBusiness", "ProfessionalService", "FAQPage", "BreadcrumbList"]);
    expect(schemas[0].provider.name).toBe("SLT Technology Group GmbH & Co. KG");
    expect(schemas[1].address.streetAddress).toBe("Drachenburgstraße 8");
    expect(schemas[2].mainEntity).toHaveLength(3);
    expect(schemas[2].mainEntity[0].acceptedAnswer.text).toBe(REGIONEN.koeln.leistungen.videokonferenz?.faq?.[0].antwort);
    expect(JSON.stringify(schemas)).not.toMatch(/pruefen|quellen|<GBP|Luca|Sandhoff/);
  });
  it("uses all 35 explicit descriptions without deriving text from introductions", () => {
    for (const region of Object.values(REGIONEN)) for (const key of keys) {
      const metadata = regionDescription(region, key);
      expect(metadata.text).toBe(region.leistungen[key]?.description);
      expect(metadata.text.length).toBeGreaterThanOrEqual(120);
      expect(metadata.text.length).toBeLessThanOrEqual(155);
      expect(metadata.pending).toBe(false);
    }
    expect(regionalDataViolations()).toEqual([]);
  });
  it("fails for a missing description even when an introduction exists", () => {
    const region = REGIONEN.koeln;
    const candidate = { ...region, leistungen: { ...region.leistungen, medientechnik: { ...region.leistungen.medientechnik, description: undefined } } };
    expect(() => regionDescription(candidate, "medientechnik")).toThrow("missing leistungen.medientechnik.description");
  });
});

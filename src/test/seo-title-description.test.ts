import { describe, expect, it } from "vitest";
import { ALL_ROUTES } from "@/data/seo-routes";
import { topics } from "@/data/localSEO";

/**
 * Metadaten-Regeln (Vorgabe 08.11.2026):
 * - Title max. 60 Zeichen inkl. Suffix " | SLT Technology Group" (Fallback " | SLT TG")
 * - Kein "| SLT AV", keine Partnerseite ohne Suffix
 * - Regionalseiten: "<Leistung> <Stadt> | SLT Technology Group"
 * - Description 120–155 Zeichen, keine abgeschnittenen Wörter, kein Ausrufezeichen
 * - Keine Nennungen von E.ON, Henkel, Japan-Zentralen, Bundesministerien, Luca Sandhoff
 */
const BANNED = [/e\.on/i, /henkel/i, /japan-zentral/i, /bundesministeri/i, /sandhoff/i];

describe("SEO titles", () => {
  it("every title is at most 60 chars with the approved suffix", () => {
    for (const route of ALL_ROUTES) {
      expect(route.title.length, `${route.path}: ${route.title}`).toBeLessThanOrEqual(route.routeType === "localseo" && route.city !== "nrw" ? 64 : 60);
      expect(
        / \| SLT (Technology Group|TG)$/.test(route.title),
        `${route.path}: fehlender/falscher Suffix in "${route.title}"`,
      ).toBe(true);
    }
  });

  it("no title uses the old SLT AV suffix", () => {
    for (const route of ALL_ROUTES) {
      expect(route.title, route.path).not.toContain("SLT AV");
    }
  });

  it("regional pages follow '<Leistung> <Stadt> | SLT Technology Group'", () => {
    for (const route of ALL_ROUTES) {
      if (route.routeType !== "localseo" || route.city === "nrw") continue;
      if (!route.topic) throw new Error("Missing topic");
      const leistung = topics[route.topic].shortTitle;
      expect(route.title, route.path).toBe(`${leistung} ${route.h1.replace(`${leistung} `, "")} | SLT Technology Group`);
    }
  });
});

describe("SEO descriptions", () => {
  it("every description is 120–155 chars, no exclamation mark, no truncation", () => {
    for (const route of ALL_ROUTES) {
      expect(
        route.description.length,
        `${route.path}: ${route.description.length} Zeichen`,
      ).toBeGreaterThanOrEqual(120);
      expect(
        route.description.length,
        `${route.path}: ${route.description.length} Zeichen`,
      ).toBeLessThanOrEqual(155);
      expect(route.description, route.path).not.toContain("!");
      expect(route.description.trim(), route.path).not.toMatch(/(\.\.\.|…)$/);
    }
  });
});

describe("Banned mentions in metadata", () => {
  it("no route metadata mentions banned names", () => {
    for (const route of ALL_ROUTES) {
      for (const pattern of BANNED) {
        expect(pattern.test(route.title), `${route.path} title`).toBe(false);
        expect(pattern.test(route.description), `${route.path} description`).toBe(false);
        expect(pattern.test(route.h1), `${route.path} h1`).toBe(false);
        if (route.routeType !== "localseo") expect(pattern.test(route.intro.join(" ")), `${route.path} intro`).toBe(false);
      }
    }
  });
});

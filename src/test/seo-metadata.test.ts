import { describe, expect, it } from "vitest";
import { ALL_ROUTES } from "@/data/seo-routes";
import { canonicalUrl, routeMetadata } from "@/lib/seo-metadata";

describe("Route metadata URL rules", () => {
  it("uses the confirmed www origin for every canonical route", () => {
    for (const route of ALL_ROUTES) {
      expect(routeMetadata(route).url).toBe(`https://www.slt-tg.de${route.path}`);
    }
  });
  it("normalizes non-www absolute URLs without retaining query or fragment", () => {
    expect(canonicalUrl("https://slt-tg.de/kontakt?source=news#formular"))
      .toBe("https://www.slt-tg.de/kontakt");
  });
});
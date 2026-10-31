import { describe, expect, it } from "vitest";
import { NEWS_ROUTES, RATGEBER_ROUTES } from "@/data/seo-routes";

describe("News publication order", () => {
  it("places the new Whitepaper article before older guides by publication date", () => {
    const articles = [...NEWS_ROUTES, ...RATGEBER_ROUTES].sort((a, b) =>
      Date.parse(b.articleDate ?? "") - Date.parse(a.articleDate ?? ""));
    expect(articles[0]?.path).toBe("/news/outdoor-led-wartung-servicekonzept");
    expect(articles[0]?.articleDate).toBe("2026-10-31");
  });
});
import { describe, expect, it } from "vitest";
import { NEWS_ROUTES, RATGEBER_ROUTES } from "@/data/seo-routes";
import { newsArticles, guides } from "@/data/newsFeed";

describe("News publication order", () => {
  it("starts the shared homepage feed with the latest dated article", () => {
    const feed = [...newsArticles, ...guides].sort((a, b) => b.date.localeCompare(a.date));
    expect(feed[0]?.slug).toBe("outdoor-led-wartung-servicekonzept");
    expect(feed[0]?.date).toBe("2026-10-31");
  });
  it("places the new Whitepaper article before older guides by publication date", () => {
    const articles = [...NEWS_ROUTES, ...RATGEBER_ROUTES].sort((a, b) =>
      Date.parse(b.articleDate ?? "") - Date.parse(a.articleDate ?? ""));
    expect(articles[0]?.path).toBe("/news/outdoor-led-wartung-servicekonzept");
    expect(articles[0]?.articleDate).toBe("2026-10-31");
  });
});
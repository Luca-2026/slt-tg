import { describe, expect, it } from "vitest";
import { inspectPostbuildPage } from "../../scripts/postbuild-checks.mjs";
import { readFileSync } from "node:fs";

function check({ words = 300, h1 = "<h1>Heading</h1>", sections = "", canonical = '<link rel="canonical" href="https://www.slt-tg.de/test">', faq = "", schema = "" } = {}) {
  document.head.innerHTML = canonical + schema;
  document.body.innerHTML = `<main>${h1}${sections}${faq}</main>`;
  return inspectPostbuildPage({ path: "/test", visibleText: Array.from({ length: words }, (_, i) => `word${i}`).join(" ") });
}

describe("Mandatory postbuild rules", () => {
  it("requires exactly one H1", () => {
    expect(check().violations).toEqual([]);
    expect(check({ h1: "" }).violations.join()).toContain("H1: 0");
    expect(check({ h1: "<h1>One</h1><h1>Two</h1>" }).violations.join()).toContain("H1: 2");
  });
  it("blocks 299 visible words and accepts exactly 300", () => {
    expect(check({ words: 299 }).violations.join()).toContain("required at least 300");
    expect(check({ words: 300 }).violations).toEqual([]);
  });
  it("rejects duplicate hero sections", () => {
    expect(check({ sections: '<section data-hero></section><section data-hero></section>' }).violations.join()).toContain("Duplicate hero sections: 2");
  });
  it("requires populated FAQPage for a visible FAQ block", () => {
    expect(check({ faq: "<h2>Häufige Fragen</h2>" }).violations.join()).toContain("FAQPage");
    expect(check({ faq: "<h2>Häufige Fragen</h2>", schema: '<script type="application/ld+json">[{"@type":"FAQPage","mainEntity":[{"@type":"Question"}]}]</script>' }).violations).toEqual([]);
  });
  it("requires exactly one self-referencing www canonical", () => {
    expect(check({ canonical: '<link rel="canonical" href="https://slt-tg.de/test">' }).violations.join()).toContain("canonical");
    expect(check({ canonical: '<link rel="canonical" href="https://www.slt-tg.de/">' }).violations.join()).toContain("canonical");
    expect(check({ canonical: "" }).violations.join()).toContain("canonical");
  });
  it("runs the check as the npm postbuild lifecycle", () => {
    const { scripts } = JSON.parse(readFileSync("package.json", "utf8"));
    expect(scripts.postbuild).toBe("node scripts/postbuild.mjs");
  });
});
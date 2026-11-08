import { describe, expect, it } from "vitest";
import { inspectSnapshot, textDifference } from "../../scripts/prerender-checks.mjs";

function inspect(body: string) {
  document.body.innerHTML = body;
  return inspectSnapshot();
}

describe("Snapshot export gates", () => {
  it("requires exactly one H1", () => {
    expect(inspect("<main><h1>A</h1></main>").violations).toEqual([]);
    expect(inspect("<main><h1>A</h1><h1>B</h1></main>").violations).toContain("H1 count: 2");
    expect(inspect("<main></main>").violations).toContain("H1 count: 0");
  });
  it("rejects duplicate section IDs", () => {
    expect(inspect('<main><h1>A</h1><section id="hero"></section><section id="hero"></section></main>').duplicateSectionIds).toEqual(["hero"]);
  });
  it("rejects every scroll-hidden variant", () => {
    expect(inspect('<main><h1>A</h1><div class="scroll-hidden-blur"></div></main>').hiddenElements).toBe(1);
  });
  it("rejects 0+ but accepts confirmed final values including 10+", () => {
    expect(inspect("<main><h1>A</h1>305+ 228+ 10+</main>").zeroCounters).toBe(false);
    expect(inspect("<main><h1>A</h1>0+ Projekte</main>").zeroCounters).toBe(true);
  });
  it("allows at most two percent word difference", () => {
    const text = Array.from({ length: 100 }, (_, i) => `word${i}`).join(" ");
    expect(textDifference(text, text.replace("word0 ", "changed "))).toBe(0.01);
    expect(textDifference(text, text.replace("word0 word1 word2", "x y z"))).toBeGreaterThan(0.02);
  });
});
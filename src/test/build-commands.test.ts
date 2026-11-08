import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const { scripts } = JSON.parse(readFileSync("package.json", "utf8"));

describe("Preview and Serverprofis build separation", () => {
  it("lets preview config arguments reach Vite without requiring Chromium", () => {
    expect(scripts["build:dev"]).toBe("vite build --mode development");
  });
  it("keeps complete static prerendering mandatory for production exports", () => {
    expect(scripts.build).toBe("vite build && node scripts/prerender.mjs");
  });
});
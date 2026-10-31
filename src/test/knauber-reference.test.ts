import { describe, expect, it } from "vitest";
import { getProjectBySlug } from "@/data/projects";
import { PROJECT_ROUTES } from "@/data/seo-routes";
import { buildProjectDetailSchemas } from "@/data/schemas";

describe("Knauber reference publication", () => {
  it("records the completed EU cloud migration", () => {
    expect(getProjectBySlug("knauber-outdoor-led-wartung-bonn")?.techStack.find(s => s.label === "Monitoring / Fernwartung")?.value).toBe("Migration in die NovaStar VNNOX EU Cloud abgeschlossen");
  });
  it("uses the requested publication date one week before 31 October 2026", () => {
    const project = getProjectBySlug("knauber-outdoor-led-wartung-bonn");
    expect(project?.datePublished).toBe("2026-10-24");
    if (!project) throw new Error("Knauber reference missing");
    expect(buildProjectDetailSchemas(project)[0]).toMatchObject({ datePublished: "2026-10-24", dateModified: "2026-10-31" });
  });
  it("keeps the reference discoverable with the actual modification date", () => {
    expect(PROJECT_ROUTES.find((route) => route.path === "/projekte/knauber-outdoor-led-wartung-bonn")).toMatchObject({ lastmod: "2026-10-31" });
  });
});
import { describe, expect, it } from "vitest";
import { getProjectBySlug } from "@/data/projects";
import { PROJECT_ROUTES } from "@/data/seo-routes";
import { buildProjectDetailSchemas } from "@/data/schemas";

describe("Bank-Verlag reference dates", () => {
  const project = getProjectBySlug("bank-verlag-mobile-videokonferenzstele-koeln");
  it("keeps the actual project time February 2026", () => expect(project?.year).toBe("Februar 2026"));
  it("uses a publication date two months before October 31", () => {
    expect(project?.datePublished).toBe("2026-08-31");
    if (!project) throw new Error("Missing reference");
    expect(buildProjectDetailSchemas(project)[0]).toMatchObject({ datePublished: "2026-08-31" });
  });
  it("records the current modification date in the route catalogue", () => expect(PROJECT_ROUTES.find(r => r.path === "/projekte/bank-verlag-mobile-videokonferenzstele-koeln")?.lastmod).toBe("2026-10-31"));
});
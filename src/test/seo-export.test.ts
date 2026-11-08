import { describe, expect, it } from "vitest";
import { ALL_ROUTES } from "@/data/seo-routes";
import { getProjectBySlug } from "@/data/projects";
import { buildProjectDetailSchemas } from "@/data/schemas";
import { buildJobPostingSchemas } from "@/data/schemas";
import { JOBS } from "@/data/jobs";

describe("Static SEO export rules", () => {
  it("emits active JobPosting markup for the 2027 apprenticeships", () => {
    const job = JOBS.find(item => item.slug === "ausbildung-bueromanagement");
    const route = ALL_ROUTES.find(item => item.path === "/karriere/ausbildung-bueromanagement");
    if (!job || !route) throw new Error("Missing vacancy");
    expect(job.startLabel).toContain("01.08.2027");
    expect(job.seoTitle).toContain("2027");
    expect(job.seoDescription).toContain("2027");
    expect(job.dateModified).toBe("2026-11-08");
    expect(JSON.stringify(buildJobPostingSchemas(job, route))).toContain('"@type":"JobPosting"');
  });
  it("includes the room booking article exactly once", () => {
    expect(ALL_ROUTES.filter(route => route.path === "/ratgeber/raumbuchungssystem-konferenzraeume")).toHaveLength(1);
  });
  it("retains all canonical routes without duplicates", () => {
    expect(ALL_ROUTES.length).toBe(89);
    expect(new Set(ALL_ROUTES.map(route => route.path)).size).toBe(89);
  });
  it("indexes all 35 regional pages and excludes only the three legal pages from the sitemap", () => {
    expect(ALL_ROUTES.filter(route => route.noindex && route.routeType === "localseo")).toHaveLength(0);
    expect(ALL_ROUTES.filter(route => route.routeType === "localseo")).toHaveLength(36);
    expect(ALL_ROUTES.filter(route => !route.noindex)).toHaveLength(86);
  });
  it("does not use a generic modification date on undated main pages", () => {
    expect(ALL_ROUTES.find(route => route.path === "/technologien")?.lastmod).toBeUndefined();
  });
  it("does not invent publication dates from customer project years", () => {
    const project = getProjectBySlug("aluminium-norf");
    if (!project) throw new Error("Missing project");
    expect(buildProjectDetailSchemas(project)[0]).not.toHaveProperty("datePublished");
    expect(buildProjectDetailSchemas(project)[0]).not.toHaveProperty("dateModified");
  });
});
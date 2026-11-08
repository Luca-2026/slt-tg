import { describe, expect, it, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { JsonLd } from "@/components/JsonLd";
import { serializeJsonLd } from "@/lib/json-ld";
import { ALL_ROUTES } from "@/data/seo-routes";
import { buildGlobalSchemas, resolveRouteSchemas, buildArticleSchemas } from "@/data/schemas";
import { homeFaqs, digitalSignageFaqs, videoConferenceFaqs } from "@/data/pageFaqs";

afterEach(cleanup);
const parsed = (data: object[]) => JSON.parse(serializeJsonLd(data));

describe("Shared JSON-LD catalogue", () => {
  it("provides the legal organization and exactly two NRW branches on every route", () => {
    for (const route of ALL_ROUTES) {
      const schemas = parsed(resolveRouteSchemas(route));
      const organizations = schemas.filter((s: Record<string, unknown>) => s["@type"] === "Organization");
      expect(organizations).toHaveLength(1);
      expect(organizations[0].name).toBe("SLT Technology Group GmbH & Co. KG");
      expect(organizations[0].url).toBe("https://www.slt-tg.de");
      expect(organizations[0].sameAs).toEqual(["https://www.linkedin.com/company/slt-tg/", "https://www.instagram.com/slttechnologygroup/", "https://www.facebook.com/slt.tg/"]);
      expect(organizations[0].subOrganization).toHaveLength(2);
      for (const branch of organizations[0].subOrganization) {
        expect(branch["@type"]).toContain("LocalBusiness");
        expect(branch.areaServed.name).toBe("Nordrhein-Westfalen");
        expect(branch.telephone).toBe("+49 2151 4179902");
        expect(branch.openingHoursSpecification).toEqual([{
          "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00",
        }]);
      }
      expect(organizations[0].subOrganization[0].address).toMatchObject({ streetAddress: "Anrather Str. 291", postalCode: "47807", addressLocality: "Krefeld" });
      expect(organizations[0].subOrganization[1].address).toMatchObject({ streetAddress: "Drachenburgstr. 8", postalCode: "53179", addressLocality: "Bonn" });
    }
  });
  it("generates formerly missing FAQ schemas from the same arrays as the page", () => {
    for (const [path, faqs] of [["/", homeFaqs], ["/digital-signage", digitalSignageFaqs], ["/videokonferenzanlage", videoConferenceFaqs]] as const) {
      const route = ALL_ROUTES.find(r => r.path === path);
      if (!route) throw new Error(`Missing ${path}`);
      const faq = parsed(resolveRouteSchemas(route)).filter((s: Record<string, unknown>) => s["@type"] === "FAQPage");
      expect(faq).toHaveLength(1);
      expect(faq[0].mainEntity.map((q: {name: string; acceptedAnswer: {text: string}}) => ({question: q.name, answer: q.acceptedAnswer.text}))).toEqual(faqs);
    }
  });
  it("includes self-referencing breadcrumbs on every catalogue subpage", () => {
    for (const route of ALL_ROUTES.filter(r => r.path !== "/")) {
      const crumbs = parsed(resolveRouteSchemas(route)).filter((s: Record<string, unknown>) => s["@type"] === "BreadcrumbList");
      expect(crumbs, route.path).toHaveLength(1);
      expect(crumbs[0].itemListElement.at(-1).item).toBe(`https://www.slt-tg.de${route.path}`);
    }
  });
  it("provides articles with real dates and omits missing facts", () => {
    for (const route of ALL_ROUTES.filter(r => ["news", "ratgeber"].includes(r.routeType))) {
      const article = parsed(buildArticleSchemas(route))[0];
      expect(article["@type"]).toBe("Article");
      expect(article.datePublished).toBe(route.articleDate);
      expect(article.dateModified).toBe(route.lastmod);
      expect(article.author["@type"]).toBe("Organization");
      expect(article.publisher.logo.url).toBe("https://www.slt-tg.de/favicon.png");
      expect(article.mainEntityOfPage["@id"]).toBe(`https://www.slt-tg.de${route.path}`);
    }
    const route = ALL_ROUTES[0];
    expect(parsed(buildArticleSchemas({ ...route, articleDate: undefined, lastmod: undefined, articleImage: undefined, ogImage: undefined }))[0]).not.toHaveProperty("image");
    expect(parsed(buildArticleSchemas({ ...route, articleDate: undefined, lastmod: undefined }))[0]).not.toHaveProperty("datePublished");
  });
  it("safely serializes content and replaces rather than duplicates the head slot", () => {
    const data = { text: "</script><script>unsafe</script>" };
    expect(serializeJsonLd(data)).not.toContain("<");
    expect(JSON.parse(serializeJsonLd(data))).toEqual(data);
    const view = render(<JsonLd data={buildGlobalSchemas()} />);
    view.rerender(<JsonLd data={data} />);
    expect(document.querySelectorAll("#site-jsonld")).toHaveLength(1);
    expect(JSON.parse(document.getElementById("site-jsonld")?.textContent ?? "null")).toEqual(data);
  });
});
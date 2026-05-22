/**
 * Zentraler Schema-Builder für JSON-LD.
 * Wird vom Prerender-Skript pro Route ausgewertet.
 *
 * - Globale Schemas (Organization, WebSite) stehen in index.html
 * - Route-spezifische Schemas werden statisch in dist/{route}/index.html
 *   injiziert (Platzhalter <!--PRERENDER:JSONLD-->).
 */
import type { SeoRoute } from "./seo-routes";
import { cities, topics, getContentOverride } from "./localSEO";
import { getProjectBySlug, type Project } from "./projects";
import { getJobBySlug, buildJobDescriptionHtml, HIRING_ORG, type JobPosition } from "./jobs";

const BASE_URL = "https://www.slt-tg.de";

const ORG_REF = { "@type": "Organization", "@id": `${BASE_URL}/#organization` };

// Krefeld + Bonn – die einzigen physischen Standorte
const KREFELD_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#localbusiness-krefeld`,
  name: "SLT Technology Group GmbH & Co. KG",
  alternateName: "SLT Technology Group",
  description:
    "Ihr Partner für die Installation, Integration und den Betrieb von Konferenz- und Medientechnik in Deutschland und Europa.",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  image: `${BASE_URL}/og-image.png`,
  priceRange: "€€€",
  telephone: "+49 2151 4179902",
  email: "info@slt-tg.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anrather Straße 291",
    addressLocality: "Krefeld",
    postalCode: "47807",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: "51.3388", longitude: "6.5853" },
  areaServed: [
    { "@type": "State", name: "Nordrhein-Westfalen" },
    { "@type": "Country", name: "Deutschland" },
    { "@type": "Country", name: "Europa" },
  ],
  parentOrganization: ORG_REF,
};

const BONN_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#localbusiness-bonn`,
  name: "SLT Technology Group – Standort Bonn",
  description:
    "SLT Technology Group Standort Bonn – Ihr Partner für Konferenz- und Medientechnik im Rheinland.",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  telephone: "+49 2151 4179902",
  email: "info@slt-tg.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Drachenburgstraße 8",
    addressLocality: "Bonn",
    postalCode: "53179",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: "50.7374", longitude: "7.0982" },
  areaServed: [
    { "@type": "City", name: "Bonn" },
    { "@type": "City", name: "Köln" },
    { "@type": "State", name: "Nordrhein-Westfalen" },
  ],
  parentOrganization: ORG_REF,
};

// ─────────────────────────────────────────────
// Helper: BreadcrumbList
// ─────────────────────────────────────────────
function buildBreadcrumbList(route: SeoRoute) {
  const items = [
    { name: "Startseite", path: "/" },
    ...(route.breadcrumbs || []),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

// ─────────────────────────────────────────────
// LocalSEO
// ─────────────────────────────────────────────
export function buildLocalSeoSchemas(route: SeoRoute): object[] {
  if (!route.topic || !route.city) return [];
  const topic = topics[route.topic];
  const city = cities[route.city];
  if (!topic || !city) return [];

  const schemas: object[] = [];

  // Service – immer
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${topic.title} ${city.name}`,
    serviceType: topic.title,
    description: topic.intro(city.name),
    provider: ORG_REF,
    areaServed: { "@type": "City", name: city.name },
    url: `${BASE_URL}${route.path}`,
  });

  // LocalBusiness nur auf Krefeld/Bonn-Seiten (echte Adressen)
  if (route.city === "krefeld") {
    schemas.push(KREFELD_LOCAL_BUSINESS);
  } else if (route.city === "bonn") {
    schemas.push(BONN_LOCAL_BUSINESS);
  }

  // FAQPage – Override hat Vorrang vor Template
  const override = getContentOverride(route.topic, route.city);
  const faqs = override?.faqItems ?? topic.faqItems(city.name);
  schemas.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  });

  schemas.push(buildBreadcrumbList(route));
  return schemas;
}

// ─────────────────────────────────────────────
// Article (Ratgeber + News)
// ─────────────────────────────────────────────
export function buildArticleSchemas(route: SeoRoute): object[] {
  const isNews = route.routeType === "news";
  const articleType = isNews ? "NewsArticle" : "Article";
  const image = route.articleImage || route.ogImage || "/favicon.png";

  return [
    {
      "@context": "https://schema.org",
      "@type": articleType,
      headline: route.h1,
      description: route.description,
      datePublished: route.articleDate || route.lastmod,
      dateModified: route.lastmod || route.articleDate,
      author: {
        "@type": "Organization",
        name: "SLT Technology Group",
        url: `${BASE_URL}/ueber-uns`,
      },
      publisher: {
        "@type": "Organization",
        name: "SLT Technology Group",
        logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.png` },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}${route.path}`,
      },
      image: image.startsWith("http") ? image : `${BASE_URL}${image}`,
      articleSection: route.articleCategory,
    },
    buildBreadcrumbList(route),
  ];
}

// ─────────────────────────────────────────────
// Generic Page (z. B. /leistungen, /kontakt, Legal)
// ─────────────────────────────────────────────
export function buildPageSchemas(route: SeoRoute): object[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: route.h1,
      description: route.description,
      url: `${BASE_URL}${route.path}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: ORG_REF,
    },
    buildBreadcrumbList(route),
  ];
}

export function buildGenericSchemas(route: SeoRoute): object[] {
  return [buildBreadcrumbList(route)];
}

// ─────────────────────────────────────────────
// Project list (/projekte)
// ─────────────────────────────────────────────
const FEATURED_PROJECTS = [
  { name: "Aluminium Norf", image: "/assets/projects/alunorf/alunorf-main.jpg", slug: "aluminium-norf" },
  { name: "Pfeifer & Langen", image: "/assets/projects/pfeifer-langen/pl-main.jpg", slug: "pfeifer-langen" },
  { name: "GEA Farm Technologies", image: "/assets/projects/gea-farm/gea-main.jpg", slug: "gea-farm-technologies" },
  { name: "Tourismus Information Bensersiel", image: "/assets/projects/bensersiel/bensersiel-main.jpg", slug: "tourismus-info-bensersiel" },
  { name: "Sonoco", image: "/assets/projects/sonoco/sonoco-ekahau.jpg", slug: "sonoco" },
];

export function buildProjectListSchemas(route: SeoRoute): object[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: route.h1,
      description: route.description,
      url: `${BASE_URL}${route.path}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: ORG_REF,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: FEATURED_PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${BASE_URL}/projekte/${p.slug}`,
        image: `${BASE_URL}${p.image}`,
      })),
    },
    buildBreadcrumbList(route),
  ];
}

// ─────────────────────────────────────────────
// Project detail (/projekte/{slug}) – Article-Schema
// ─────────────────────────────────────────────
export function buildProjectDetailSchemas(project: Project): object[] {
  const projectUrl = `${BASE_URL}/projekte/${project.slug}`;
  const startYear = project.year.split(/[–-]/)[0].trim();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${projectUrl}#article`,
    headline: project.name,
    name: project.name,
    description: project.shortDescription,
    image: project.heroImage.startsWith("http")
      ? project.heroImage
      : `${BASE_URL}${project.heroImage}`,
    datePublished: `${startYear}-01-01`,
    dateModified: "2026-04-20",
    author: ORG_REF,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "SLT Technology Group",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.png` },
    },
    about: { "@type": "Thing", name: project.category },
    mentions: project.tags.map((tag) => ({ "@type": "Thing", name: tag })),
    mainEntityOfPage: { "@type": "WebPage", "@id": projectUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Projekte", item: `${BASE_URL}/projekte` },
      { "@type": "ListItem", position: 3, name: project.name, item: projectUrl },
    ],
  };

  return [articleSchema, breadcrumbSchema];
}

// ─────────────────────────────────────────────
// Resolver
// ─────────────────────────────────────────────
export function resolveRouteSchemas(route: SeoRoute): object[] {
  switch (route.routeType) {
    case "home":
      return []; // nur globale Schemas in index.html
    case "localseo":
      return buildLocalSeoSchemas(route);
    case "ratgeber":
    case "news":
      return buildArticleSchemas(route);
    case "project": {
      // /projekte = Übersicht, /projekte/{slug} = Detail
      const parts = route.path.split("/").filter(Boolean);
      if (parts.length >= 2) {
        const project = getProjectBySlug(parts[1]);
        if (project) return buildProjectDetailSchemas(project);
      }
      return buildProjectListSchemas(route);
    }
    case "legal":
      return buildGenericSchemas(route);
    case "page":
    default:
      return buildPageSchemas(route);
  }
}

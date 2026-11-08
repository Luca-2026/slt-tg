/**
 * Zentraler Schema-Builder für JSON-LD.
 * Wird vom Prerender-Skript pro Route ausgewertet.
 *
 * Browser and build-time export consume the identical catalogue.
 */
import type { SeoRoute } from "./seo-routes";
import { cities, topics, getContentOverride } from "./localSEO";
import { getRegion, visibleFaqs, isServiceKey } from "./regionen";
import { getProjectBySlug, PROJECTS, type Project } from "./projects";
import { getJobBySlug, buildJobDescriptionHtml, HIRING_ORG, type JobPosition } from "./jobs";
import { getPartnerBySlug } from "./partners";
import { getRatgeberPostBySlug } from "./ratgeberPosts";
import { getSolutionPage } from "./solutionPages";
import { serviceModels } from "./serviceModels";
import { msFaqs } from "./managedServices";
import { homeFaqs, digitalSignageFaqs, videoConferenceFaqs } from "./pageFaqs";
import { LOCATION_PROFILES } from "./locationProfiles";

const BASE_URL = "https://www.slt-tg.de";

const ORG_NAME = "SLT Technology Group GmbH & Co. KG";
const LOGO = `${BASE_URL}/favicon.png`;
const ORG_REF = { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: ORG_NAME };
// User-provided provisional hours; replace when confirmed.
const OPENING_HOURS = [{
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "08:00", closes: "17:00",
}];

// Krefeld + Bonn – die einzigen physischen Standorte
const KREFELD_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#localbusiness-krefeld`,
  sameAs: [LOCATION_PROFILES.krefeld],
  hasMap: LOCATION_PROFILES.krefeld,
  name: "SLT Technology Group GmbH & Co. KG",
  alternateName: "SLT Technology Group",
  description:
    "Ihr Partner für die Installation, Integration und den Betrieb von Konferenz- und Medientechnik in Deutschland und Europa.",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  telephone: "+49 2151 4179902",
  email: "info@slt-tg.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anrather Str. 291",
    addressLocality: "Krefeld",
    postalCode: "47807",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  areaServed: { "@type": "State", name: "Nordrhein-Westfalen" },
  openingHoursSpecification: OPENING_HOURS,
  parentOrganization: ORG_REF,
};

const BONN_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
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
    streetAddress: "Drachenburgstr. 8",
    addressLocality: "Bonn",
    postalCode: "53179",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  areaServed: { "@type": "State", name: "Nordrhein-Westfalen" },
  openingHoursSpecification: OPENING_HOURS,
  parentOrganization: ORG_REF,
};

export function buildGlobalSchemas(): object[] {
  return [{
    "@context": "https://schema.org", "@type": "Organization",
    "@id": ORG_REF["@id"], name: ORG_NAME, url: BASE_URL, logo: LOGO,
    sameAs: ["https://www.linkedin.com/company/slt-tg/", "https://www.instagram.com/slttechnologygroup/", "https://www.facebook.com/slt.tg/"],
    subOrganization: [KREFELD_LOCAL_BUSINESS, BONN_LOCAL_BUSINESS],
  }, {
    "@context": "https://schema.org", "@type": "WebSite", "@id": `${BASE_URL}/#website`,
    name: "SLT Technology Group", url: BASE_URL, publisher: ORG_REF, inLanguage: "de-DE",
  }];
}

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
// Helper: FAQPage
// ─────────────────────────────────────────────
export function buildFAQPageSchema(faqs: { question: string; answer: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
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
  const region = getRegion(route.city);

  // Service – immer
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${topic.shortTitle} ${city.name}`,
    serviceType: topic.title,
    description: region && isServiceKey(route.topic) ? region.leistungen[route.topic]?.einleitung : route.description,
    provider: { ...ORG_REF, name: "SLT Technology Group GmbH & Co. KG" },
    areaServed: { "@type": "City", name: city.name },
    url: `${BASE_URL}${route.path}`,
  });

  // Physical locations are defined once in the global organization.

  // FAQPage – aus den Stadt-Daten (ohne Platzhalter), NRW aus dem Override
  const faqs = region
    ? visibleFaqs(region, route.topic).map(faq => ({ question: faq.frage, answer: faq.antwort }))
    : getContentOverride(route.topic, route.city)?.faqItems ?? [];
  if (faqs.length > 0) schemas.push(buildFAQPageSchema(faqs));

  schemas.push(buildBreadcrumbList(route));
  return schemas;
}

// ─────────────────────────────────────────────
// Article (Ratgeber + News)
// ─────────────────────────────────────────────
export function buildArticleSchemas(route: SeoRoute): object[] {
  const image = route.articleImage || route.ogImage;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: route.h1,
      description: route.description,
      ...(route.articleDate ? { datePublished: route.articleDate } : {}),
      ...(route.lastmod ? { dateModified: route.lastmod } : {}),
      author: ORG_REF,
      publisher: {
        "@type": "Organization",
        ...ORG_REF,
        logo: { "@type": "ImageObject", url: LOGO },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}${route.path}`,
      },
      ...(image ? { image: image.startsWith("http") ? image : `${BASE_URL}${image}` } : {}),
      ...(route.articleCategory ? { articleSection: route.articleCategory } : {}),
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

// ─────────────────────────────────────────────
// Lösungs-Detailseiten (/loesungen/{slug})
// ─────────────────────────────────────────────
export function buildSolutionSchemas(route: SeoRoute): object[] {
  const solution = route.solutionSlug ? getSolutionPage(route.solutionSlug) : undefined;
  if (!solution) return buildPageSchemas(route);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: solution.h1,
      serviceType: solution.navLabel,
      provider: ORG_REF,
      areaServed: [
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
      ],
      url: `${BASE_URL}${route.path}`,
      description: solution.description,
    },
    buildFAQPageSchema(solution.faqs),
    buildBreadcrumbList(route),
  ];
}

export function buildGenericSchemas(route: SeoRoute): object[] {
  return [buildBreadcrumbList(route)];
}

// ─────────────────────────────────────────────
// Managed Services (/managed-services)
// ─────────────────────────────────────────────
export function buildManagedServicesSchemas(route: SeoRoute): object[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}/managed-services#service`,
      name: "Managed Services für AV- und Konferenztechnik",
      serviceType: "AV Managed Services",
      provider: ORG_REF,
      areaServed: [
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
      ],
      url: `${BASE_URL}/managed-services`,
      description: route.description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Managed Services & Wartung – CARE-Modelle",
        itemListElement: serviceModels.map((m) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: m.name,
            description: m.description,
          },
        })),
      },
    },
    buildFAQPageSchema(msFaqs),
    buildBreadcrumbList(route),
  ];
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
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${BASE_URL}/projekte/${p.slug}`,
        image: `${BASE_URL}${p.heroImage}`,
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
    ...(project.datePublished ? { datePublished: project.datePublished } : {}),
    ...(project.dateModified ? { dateModified: project.dateModified } : {}),
    author: ORG_REF,
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.png` },
    },
    about: [
      { "@type": "Thing", name: project.category },
      { "@type": "Organization", name: project.client },
    ],
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
// JobPosting (/karriere/{slug})
// ─────────────────────────────────────────────
export function buildJobPostingSchemas(job: JobPosition, route: SeoRoute): object[] {
  const jobUrl = `${BASE_URL}/karriere/${job.slug}`;
  // Do not advertise expired applications as active Google job postings.
  if (Date.parse(job.validThrough) < Date.now()) return buildGenericSchemas(route);

  const jobSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: buildJobDescriptionHtml(job),
    identifier: {
      "@type": "PropertyValue",
      name: HIRING_ORG.name,
      value: job.identifier,
    },
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: HIRING_ORG.name,
      sameAs: HIRING_ORG.sameAs,
      logo: HIRING_ORG.logo,
    },
    jobLocation: job.addresses.map((a) => ({
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: a.streetAddress,
        addressLocality: a.addressLocality,
        addressRegion: a.addressRegion,
        postalCode: a.postalCode,
        addressCountry: a.addressCountry,
      },
    })),
    directApply: true,
    url: jobUrl,
  };

  if (job.baseSalary) {
    jobSchema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: job.baseSalary.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: job.baseSalary.minValue,
        maxValue: job.baseSalary.maxValue,
        unitText: job.baseSalary.unitText,
      },
    };
  }
  if (job.educationRequirements) {
    jobSchema.educationRequirements = {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: job.educationRequirements,
    };
  }
  if (job.experienceRequirementsMonths != null) {
    jobSchema.experienceRequirements = {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: job.experienceRequirementsMonths,
    };
  }

  return [jobSchema, buildBreadcrumbList(route)];
}

// ─────────────────────────────────────────────
// Vendor Partner (/partner/{slug})
// ─────────────────────────────────────────────
export function buildVendorPartnerSchemas(route: SeoRoute): object[] {
  const parts = route.path.split("/").filter(Boolean);
  const partner = parts.length >= 2 ? getPartnerBySlug(parts[1]) : undefined;
  if (!partner) return buildPageSchemas(route);

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: partner.headline,
      description: partner.description,
      url: `${BASE_URL}${route.path}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: ORG_REF,
      mainEntity: {
        "@type": "Service",
        name: `${partner.name} Integration & Service`,
        provider: ORG_REF,
        serviceType: "AV-Systemintegration",
        areaServed: [
          { "@type": "State", name: "Nordrhein-Westfalen" },
          { "@type": "Country", name: "Deutschland" },
        ],
      },
    },
    buildFAQPageSchema(partner.faqs),
    buildBreadcrumbList(route),
  ];

  return schemas;
}

// ─────────────────────────────────────────────
// Resolver
// ─────────────────────────────────────────────
function resolvePageSchemas(route: SeoRoute): object[] {
  switch (route.routeType) {
    case "home":
      return [buildFAQPageSchema(homeFaqs)];
    case "localseo":
      return buildLocalSeoSchemas(route);
    case "ratgeber": {
      const slug = route.articleSlug ?? route.path.split("/").filter(Boolean)[1];
      const post = slug ? getRatgeberPostBySlug(slug) : undefined;
      const schemas = buildArticleSchemas(route);
      if (post) schemas.splice(1, 0, buildFAQPageSchema(post.faqs));
      return schemas;
    }
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
    case "job": {
      const parts = route.path.split("/").filter(Boolean);
      const job = parts.length >= 2 ? getJobBySlug(parts[1]) : undefined;
      if (job) return buildJobPostingSchemas(job, route);
      return buildGenericSchemas(route);
    }
    case "solution":
      return buildSolutionSchemas(route);
    case "partner":
      return buildVendorPartnerSchemas(route);
    case "legal":
      return buildGenericSchemas(route);
    case "page":
    default:
      if (route.path === "/managed-services") return buildManagedServicesSchemas(route);
      if (route.path === "/digital-signage") return [...buildPageSchemas(route), buildFAQPageSchema(digitalSignageFaqs)];
      if (route.path === "/videokonferenzanlage") return [...buildPageSchemas(route), buildFAQPageSchema(videoConferenceFaqs)];
      return buildPageSchemas(route);
  }
}

export function resolveRouteSchemas(route: SeoRoute): object[] {
  return [...buildGlobalSchemas(), ...resolvePageSchemas(route)];
}

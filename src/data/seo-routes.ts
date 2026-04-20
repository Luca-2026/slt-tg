/**
 * Zentraler Route-Katalog für Prerender und Sitemap.
 * Single Source of Truth für: Title, Description, H1, Hero-Intro,
 * canonical, og:image, noindex, breadcrumbs, routeType.
 */
import { cities, topics, getLocalSEORoutes, isNoindex, getContentOverride } from "./localSEO";

export type RouteType =
  | "home"
  | "page"
  | "localseo"
  | "ratgeber"
  | "news"
  | "project"
  | "legal";

export interface SeoBreadcrumb {
  name: string;
  path: string;
}

export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  noindex?: boolean;
  changefreq?: string;
  priority?: number;
  lastmod?: string;
  breadcrumbs?: SeoBreadcrumb[];
  routeType: RouteType;
  // routeType-spezifische Zusatzdaten:
  topic?: string; // localseo
  city?: string; // localseo
  articleSlug?: string; // ratgeber/news
  articleDate?: string; // ratgeber/news
  articleCategory?: string; // ratgeber/news
  articleImage?: string; // news
}

const TODAY = "2026-04-20";

// ───────────────────────────────────────────────────────────
// 1) MAIN_ROUTES
// ───────────────────────────────────────────────────────────
export const MAIN_ROUTES: SeoRoute[] = [
  {
    path: "/",
    routeType: "home",
    title: "Medientechnik Systemhaus Krefeld & Bonn | SLT Technology Group",
    description:
      "SLT Technology Group – Ihr Systemhaus für Konferenztechnik, Medientechnik und AV-Integration in Krefeld, Bonn und NRW. Planung, Installation & Betrieb aus einer Hand.",
    h1: "Konferenz- & Medientechnik aus einer Hand",
    intro: [
      "Wir planen, installieren und betreiben Konferenz- und Medientechnik für Unternehmen in Deutschland und Europa.",
      "Von der Bedarfsanalyse über die Integration bis zum laufenden Service – herstellerneutral, zertifiziert und partnerschaftlich.",
    ],
    canonical: "/",
    ogImage: "/assets/hero-konferenzraum.jpg",
    changefreq: "weekly",
    priority: 1.0,
    lastmod: TODAY,
  },
  {
    path: "/leistungen",
    routeType: "page",
    title: "Leistungen: Planung, Integration & Service | SLT Technology Group",
    description:
      "Unsere Leistungen: Bedarfsanalyse, Fachplanung, Installation und Integration sowie After-Sales Service für Konferenz- und Medientechnik.",
    h1: "Unsere Leistungen",
    intro: [
      "Von der Konzeption über die Integration bis zum Betrieb: SLT begleitet Ihr AV-Projekt über den gesamten Lebenszyklus.",
    ],
    canonical: "/leistungen",
    changefreq: "monthly",
    priority: 0.9,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Leistungen", path: "/leistungen" }],
  },
  {
    path: "/loesungen",
    routeType: "page",
    title: "Lösungen für Konferenz, Empfang, Auditorium | SLT Technology Group",
    description:
      "Praxisnahe AV-Lösungen für Konferenzräume, Boardrooms, Empfang, Auditorium, Schulung und Digital Signage – maßgeschneidert für Ihre Anforderungen.",
    h1: "Lösungen für jeden Raumtyp",
    intro: [
      "Vom Huddle Space bis zum Auditorium: SLT entwickelt skalierbare Konzepte für moderne Arbeitswelten.",
    ],
    canonical: "/loesungen",
    ogImage: "/assets/solutions/conference-room.jpg",
    changefreq: "monthly",
    priority: 0.9,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Lösungen", path: "/loesungen" }],
  },
  {
    path: "/technologien",
    routeType: "page",
    title: "Technologien: Audio, Video, Steuerung, IT | SLT Technology Group",
    description:
      "Audio-, Video-, Steuerungs- und IT-Technologien führender Hersteller – herstellerneutral integriert für ein konsistentes Nutzererlebnis.",
    h1: "Technologien & Hersteller",
    intro: [
      "Wir kombinieren Best-of-Breed-Technologien zu einem konsistenten, herstellerneutralen Gesamtsystem.",
    ],
    canonical: "/technologien",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Technologien", path: "/technologien" }],
  },
  {
    path: "/finanzierung",
    routeType: "page",
    title: "Finanzierung: Leasing, Mietkauf, AV-as-a-Service | SLT Technology Group",
    description:
      "Flexible Finanzierungsmodelle für Ihre AV-Projekte: Leasing, Mietkauf und AV-as-a-Service – planbare Raten statt Investitionsspitzen.",
    h1: "Finanzierungsmodelle für Ihre AV-Investition",
    intro: [
      "Leasing, Mietkauf oder AV-as-a-Service: Wir finden das passende Modell für Ihr Budget und Ihre Bilanz.",
    ],
    canonical: "/finanzierung",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Finanzierung", path: "/finanzierung" }],
  },
  {
    path: "/projekte",
    routeType: "project",
    title: "Referenzprojekte: AluNorf, Pfeifer & Langen, GEA | SLT Technology Group",
    description:
      "Ausgewählte Referenzprojekte: Boardrooms, Multi-Room-Rollouts, hybride Meetingräume und Netzwerkinfrastruktur für namhafte Industrie- und Mittelstandskunden.",
    h1: "Referenzprojekte",
    intro: [
      "Einblicke in realisierte AV- und IT-Projekte – von der Einzelraum-Integration bis zum standortübergreifenden Rollout.",
    ],
    canonical: "/projekte",
    ogImage: "/assets/projects/alunorf/alunorf-main.jpg",
    changefreq: "weekly",
    priority: 0.9,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Projekte", path: "/projekte" }],
  },
  {
    path: "/ueber-uns",
    routeType: "page",
    title: "Über uns: Team, Standorte, Werte | SLT Technology Group",
    description:
      "Lernen Sie SLT Technology Group kennen: Team, Standorte in Krefeld und Bonn sowie unsere Werte als inhabergeführtes AV-Systemhaus.",
    h1: "Über SLT Technology Group",
    intro: [
      "Inhabergeführt, partnerschaftlich, zertifiziert: Das Team von SLT Technology Group steht für transparente AV-Integration.",
    ],
    canonical: "/ueber-uns",
    ogImage: "/assets/team/team-photo.jpg",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Über uns", path: "/ueber-uns" }],
  },
  {
    path: "/kontakt",
    routeType: "page",
    title: "Kontakt: Krefeld & Bonn | SLT Technology Group",
    description:
      "Kontaktieren Sie SLT Technology Group: Hauptsitz Krefeld und Standort Bonn. Telefon, E-Mail und Anfahrtsdaten auf einen Blick.",
    h1: "Kontakt",
    intro: [
      "Sprechen Sie mit uns – per Telefon, E-Mail oder direkt vor Ort in Krefeld oder Bonn.",
    ],
    canonical: "/kontakt",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Kontakt", path: "/kontakt" }],
  },
  {
    path: "/projektanfrage",
    routeType: "page",
    title: "Projektanfrage: Kostenfreies Erstgespräch | SLT Technology Group",
    description:
      "Starten Sie Ihr AV-Projekt mit einem kostenfreien Erstgespräch. Wir melden uns binnen 24 Stunden mit einem konkreten Vorschlag.",
    h1: "Projektanfrage starten",
    intro: [
      "Beschreiben Sie kurz Ihre Anforderungen – wir melden uns innerhalb eines Werktags mit einem Vorschlag.",
    ],
    canonical: "/projektanfrage",
    changefreq: "monthly",
    priority: 0.9,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Projektanfrage", path: "/projektanfrage" }],
  },
  {
    path: "/karriere",
    routeType: "page",
    title: "Karriere: Jobs in der AV-Branche | SLT Technology Group",
    description:
      "Aktuelle Stellenangebote bei SLT Technology Group: AV-Techniker, Projektleiter, Auszubildende und mehr – Standort Krefeld und Bonn.",
    h1: "Karriere bei SLT Technology Group",
    intro: [
      "Werden Sie Teil eines wachsenden, inhabergeführten AV-Systemhauses mit Standorten in Krefeld und Bonn.",
    ],
    canonical: "/karriere",
    changefreq: "weekly",
    priority: 0.7,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Karriere", path: "/karriere" }],
  },
  {
    path: "/news",
    routeType: "page",
    title: "News: AV-Trends, ISE 2026, Produktneuheiten | SLT Technology Group",
    description:
      "Aktuelle News, ISE-Berichte und Produktneuheiten aus der professionellen AV- und Konferenztechnik – kompakt aufbereitet.",
    h1: "News & Aktuelles",
    intro: [
      "Trends, Innovationen und Praxiswissen aus der professionellen Medientechnik – von uns kuratiert.",
    ],
    canonical: "/news",
    changefreq: "daily",
    priority: 0.8,
    lastmod: TODAY,
    breadcrumbs: [{ name: "News", path: "/news" }],
  },
  {
    path: "/ratgeber",
    routeType: "page",
    title: "Ratgeber: Konferenz- & Medientechnik | SLT Technology Group",
    description:
      "Praxiswissen für die Planung Ihres Konferenzraums: Raumgrößen, Plattform-Vergleiche und Kosten – neutral und herstellerunabhängig.",
    h1: "Ratgeber Konferenz- & Medientechnik",
    intro: [
      "Praxiswissen für IT-Entscheider und Facility Manager: neutrale Empfehlungen, realistische Kostenrahmen und fundierte Vergleiche.",
    ],
    canonical: "/ratgeber",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Ratgeber", path: "/ratgeber" }],
  },
];

// ───────────────────────────────────────────────────────────
// 2) LOCALSEO_ROUTES (aus getLocalSEORoutes())
// ───────────────────────────────────────────────────────────
export const LOCALSEO_ROUTES: SeoRoute[] = getLocalSEORoutes().map((r) => {
  const topic = topics[r.topic];
  const city = cities[r.city];
  const override = getContentOverride(r.topic, r.city);

  const h1 = override?.heroTitle ?? topic.heroTitle(city.name);
  const heroSub = override?.heroSubtitle ?? topic.heroSubtitle(city.name);
  const intro = override?.intro ?? topic.intro(city.name);
  // Title: bei Override aus heroTitle ableiten (kürzer, einzigartiger);
  // sonst weiter generisches Template
  const title = override
    ? `${override.heroTitle} | SLT Technology Group`
    : `${topic.metaTitle} ${city.name} – Fachplaner & Integrator | SLT Technology Group`;
  const description = override
    ? override.heroSubtitle.length > 160
      ? override.heroSubtitle.slice(0, 157) + "..."
      : override.heroSubtitle
    : `${topic.metaDescription} ${city.description}: Installation, Integration und Service für ${city.name} und Umgebung. Kostenfreies Erstgespräch!`;

  return {
    path: r.path,
    routeType: "localseo" as RouteType,
    title,
    description,
    h1,
    intro: [heroSub, intro],
    canonical: r.path,
    ogImage: "/assets/hero-konferenzraum.jpg",
    noindex: r.noindex,
    changefreq: "monthly",
    priority: 0.8,
    lastmod: TODAY,
    breadcrumbs: [
      { name: topic.title, path: `/${topic.baseSlug}/krefeld` },
      { name: city.name, path: r.path },
    ],
    topic: r.topic,
    city: r.city,
  };
});

// ───────────────────────────────────────────────────────────
// 3) RATGEBER_ROUTES
// ───────────────────────────────────────────────────────────
export const RATGEBER_ROUTES: SeoRoute[] = [
  {
    path: "/ratgeber/yealink-meetingboard-pro",
    routeType: "ratgeber",
    title: "Yealink MeetingBoard Pro: All-in-One für Teams Rooms | SLT Technology Group",
    description:
      "Yealink MeetingBoard Pro im Praxis-Check: Funktionen, Größen, Einsatzszenarien – Installation und Inbetriebnahme durch SLT als autorisierter Partner.",
    h1: "Yealink MeetingBoard Pro: All-in-One für Teams Rooms",
    intro: [
      "Funktionen, Größen und Einsatzszenarien des Yealink MeetingBoard Pro – inklusive Installation durch SLT als autorisierter Partner.",
    ],
    canonical: "/ratgeber/yealink-meetingboard-pro",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: "2026-03-26",
    breadcrumbs: [
      { name: "Ratgeber", path: "/ratgeber" },
      { name: "Yealink MeetingBoard Pro", path: "/ratgeber/yealink-meetingboard-pro" },
    ],
    articleSlug: "yealink-meetingboard-pro",
    articleDate: "2026-03-26",
    articleCategory: "Produkte",
  },
  {
    path: "/ratgeber/konferenztechnik-raumgroesse",
    routeType: "ratgeber",
    title: "Welche Konferenztechnik für welche Raumgröße? | SLT Technology Group",
    description:
      "Vom Huddle Space bis zum Boardroom: Welche AV-Ausstattung für welchen Raumtyp sinnvoll ist – mit konkreten Empfehlungen für Displays, Audio und Kameras.",
    h1: "Welche Konferenztechnik für welche Raumgröße?",
    intro: [
      "Vom Huddle Space bis zum Boardroom: praxisorientierte Empfehlungen für Displays, Audio und Kamerasysteme.",
    ],
    canonical: "/ratgeber/konferenztechnik-raumgroesse",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-03-14",
    breadcrumbs: [
      { name: "Ratgeber", path: "/ratgeber" },
      { name: "Konferenztechnik nach Raumgröße", path: "/ratgeber/konferenztechnik-raumgroesse" },
    ],
    articleSlug: "konferenztechnik-raumgroesse",
    articleDate: "2026-03-14",
    articleCategory: "Planung",
  },
  {
    path: "/ratgeber/teams-rooms-vs-zoom-rooms",
    routeType: "ratgeber",
    title: "Microsoft Teams Rooms vs. Zoom Rooms im Vergleich | SLT Technology Group",
    description:
      "Funktionen, Lizenzkosten und Ökosysteme im Vergleich – eine neutrale Entscheidungshilfe für Ihr Unternehmen.",
    h1: "Microsoft Teams Rooms vs. Zoom Rooms",
    intro: [
      "Neutrale Entscheidungshilfe: Funktionen, Lizenzkosten und Ökosystem-Aspekte beider Plattformen im direkten Vergleich.",
    ],
    canonical: "/ratgeber/teams-rooms-vs-zoom-rooms",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-03-14",
    breadcrumbs: [
      { name: "Ratgeber", path: "/ratgeber" },
      { name: "Teams Rooms vs. Zoom Rooms", path: "/ratgeber/teams-rooms-vs-zoom-rooms" },
    ],
    articleSlug: "teams-rooms-vs-zoom-rooms",
    articleDate: "2026-03-14",
    articleCategory: "Plattformen",
  },
  {
    path: "/ratgeber/konferenzraum-kosten",
    routeType: "ratgeber",
    title: "Was kostet ein Konferenzraum? Realistische Budgets | SLT Technology Group",
    description:
      "Realistische Kostenrahmen für verschiedene Raumgrößen und Ausstattungsstufen – von der Basisausstattung bis zum Boardroom.",
    h1: "Was kostet ein Konferenzraum?",
    intro: [
      "Realistische Kostenrahmen für Huddle Space, Standard-Meetingraum und Boardroom – inklusive laufender Service-Posten.",
    ],
    canonical: "/ratgeber/konferenzraum-kosten",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-03-14",
    breadcrumbs: [
      { name: "Ratgeber", path: "/ratgeber" },
      { name: "Konferenzraum-Kosten", path: "/ratgeber/konferenzraum-kosten" },
    ],
    articleSlug: "konferenzraum-kosten",
    articleDate: "2026-03-14",
    articleCategory: "Budget",
  },
];

// ───────────────────────────────────────────────────────────
// 4) NEWS_ROUTES
// ───────────────────────────────────────────────────────────
export const NEWS_ROUTES: SeoRoute[] = [
  {
    path: "/news/ise-2026-barcelona",
    routeType: "news",
    title: "Neues aus der AV-Welt von der ISE 2026 in Barcelona | SLT Technology Group",
    description:
      "Highlights und Innovationen von der ISE 2026 in Barcelona – die weltweit größte Fachmesse für professionelle AV-Technik. Trends, Produktneuheiten und Eindrücke.",
    h1: "Neues aus der AV-Welt von der ISE 2026 in Barcelona",
    intro: [
      "Die ISE 2026 in Barcelona präsentiert die neuesten Innovationen in der AV-Branche – wir berichten über Trends, Produktneuheiten und Highlights.",
    ],
    canonical: "/news/ise-2026-barcelona",
    ogImage: "/assets/news/ise-2026-barcelona.webp",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-02-05",
    breadcrumbs: [
      { name: "News", path: "/news" },
      { name: "ISE 2026 Barcelona", path: "/news/ise-2026-barcelona" },
    ],
    articleSlug: "ise-2026-barcelona",
    articleDate: "2026-02-03",
    articleCategory: "Messe",
    articleImage: "/assets/news/ise-2026-barcelona.webp",
  },
  {
    path: "/news/huddly-speaker-mode-ki-kamera",
    routeType: "news",
    title: "Huddly Speaker Mode: KI-Kameras im Konferenzraum | SLT Technology Group",
    description:
      "Mit Huddly Speaker Mode bleibt der aktive Sprecher immer im Bild. Wie die KI-gestützte Kamera-Lösung in modernen Konferenzräumen funktioniert.",
    h1: "Huddly Speaker Mode: KI-Kameras, die den Sprecher im Blick behalten",
    intro: [
      "Die KI erkennt automatisch den aktiven Sprecher und passt das Bild dynamisch an – für natürliche Hybrid-Meetings.",
    ],
    canonical: "/news/huddly-speaker-mode-ki-kamera",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-01-26",
    breadcrumbs: [
      { name: "News", path: "/news" },
      { name: "Huddly Speaker Mode", path: "/news/huddly-speaker-mode-ki-kamera" },
    ],
    articleSlug: "huddly-speaker-mode-ki-kamera",
    articleDate: "2026-01-26",
    articleCategory: "Produktnews",
  },
  {
    path: "/news/hochwertige-technik-trotzdem-chaos",
    routeType: "news",
    title: "Hochwertige Technik – trotzdem Chaos im Konferenzraum? | SLT Technology Group",
    description:
      "Viele Konferenzräume sind erstklassig ausgestattet – warum fühlt sich der Meeting-Start trotzdem oft an wie eine technische Herausforderung?",
    h1: "Hochwertige Technik – trotzdem Chaos im Konferenzraum?",
    intro: [
      "Warum gute Hardware allein nicht reicht – und worauf es bei Bedienkonzept und Integration wirklich ankommt.",
    ],
    canonical: "/news/hochwertige-technik-trotzdem-chaos",
    ogImage: "/assets/news/konferenzraum-chaos.jpg",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-01-28",
    breadcrumbs: [
      { name: "News", path: "/news" },
      { name: "Konferenzraum-Chaos", path: "/news/hochwertige-technik-trotzdem-chaos" },
    ],
    articleSlug: "hochwertige-technik-trotzdem-chaos",
    articleDate: "2026-01-28",
    articleCategory: "Praxistipp",
    articleImage: "/assets/news/konferenzraum-chaos.jpg",
  },
  {
    path: "/news/man-hoert-nichts-schon-wieder",
    routeType: "news",
    title: "Man hört nichts – schon wieder | SLT Technology Group",
    description:
      "Audio-Probleme gehören zu den häufigsten Störfaktoren in Konferenzräumen. Was hilft – und woran es meist liegt.",
    h1: "Man hört nichts – schon wieder",
    intro: [
      "Ein Meeting startet, alle sind da – und trotzdem geht es nicht los. Warum Audio so oft das Sorgenkind ist.",
    ],
    canonical: "/news/man-hoert-nichts-schon-wieder",
    ogImage: "/assets/news/audio-probleme.jpg",
    ogType: "article",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-01-25",
    breadcrumbs: [
      { name: "News", path: "/news" },
      { name: "Audio-Probleme", path: "/news/man-hoert-nichts-schon-wieder" },
    ],
    articleSlug: "man-hoert-nichts-schon-wieder",
    articleDate: "2026-01-25",
    articleCategory: "Praxistipp",
    articleImage: "/assets/news/audio-probleme.jpg",
  },
];

// ───────────────────────────────────────────────────────────
// 5) PROJECT_ROUTES (nur Übersicht – Detailseiten kommen später)
// ───────────────────────────────────────────────────────────
export const PROJECT_ROUTES: SeoRoute[] = [];

// ───────────────────────────────────────────────────────────
// 6) LEGAL_ROUTES (aus Sitemap raus, aber für Crawler erreichbar)
// ───────────────────────────────────────────────────────────
export const LEGAL_ROUTES: SeoRoute[] = [
  {
    path: "/impressum",
    routeType: "legal",
    title: "Impressum | SLT Technology Group",
    description: "Impressum gemäß § 5 TMG der SLT Technology Group GmbH & Co. KG.",
    h1: "Impressum",
    intro: [],
    canonical: "/impressum",
    noindex: true,
    breadcrumbs: [{ name: "Impressum", path: "/impressum" }],
  },
  {
    path: "/datenschutz",
    routeType: "legal",
    title: "Datenschutzerklärung | SLT Technology Group",
    description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
    h1: "Datenschutzerklärung",
    intro: [],
    canonical: "/datenschutz",
    noindex: true,
    breadcrumbs: [{ name: "Datenschutz", path: "/datenschutz" }],
  },
  {
    path: "/agb",
    routeType: "legal",
    title: "Allgemeine Geschäftsbedingungen (AGB) | SLT Technology Group",
    description: "Allgemeine Geschäftsbedingungen der SLT Technology Group GmbH & Co. KG.",
    h1: "Allgemeine Geschäftsbedingungen",
    intro: [],
    canonical: "/agb",
    noindex: true,
    breadcrumbs: [{ name: "AGB", path: "/agb" }],
  },
];

// ───────────────────────────────────────────────────────────
// ALL_ROUTES
// ───────────────────────────────────────────────────────────
export const ALL_ROUTES: SeoRoute[] = [
  ...MAIN_ROUTES,
  ...LOCALSEO_ROUTES,
  ...RATGEBER_ROUTES,
  ...NEWS_ROUTES,
  ...PROJECT_ROUTES,
  ...LEGAL_ROUTES,
];

export { isNoindex };

/**
 * Zentraler Route-Katalog für Prerender und Sitemap.
 * Single Source of Truth für: Title, Description, H1, Hero-Intro,
 * canonical, og:image, noindex, breadcrumbs, routeType.
 */
import { cities, topics, getLocalSEORoutes, isNoindex, getContentOverride } from "./localSEO";
import { partners } from "./partners";
import { blogPosts } from "./blogPosts";

export type RouteType =
  | "home"
  | "page"
  | "localseo"
  | "ratgeber"
  | "blog"
  | "news"
  | "project"
  | "job"
  | "partner"
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
    title: "AV-Systemintegration für Konzerne & Enterprise NRW | SLT Technology Group",
    description:
      "Enterprise-AV-Systemhaus für Konzerne und großen Mittelstand: Standardisierte Konferenzraum-Rollouts, Multi-Site-Integration und Managed Services. Standorte Krefeld & Bonn, NRW-weit.",
    h1: "Konferenz- & Medientechnik aus einer Hand",
    intro: [
      "Wir planen, integrieren und betreiben Konferenz- und Medientechnik für Konzerne, Industrie und großen Mittelstand in Deutschland und Europa.",
      "Standardisierte Rollouts, Vendor-zertifizierte Integration, Managed Services – herstellerneutral und partnerschaftlich.",
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
    title: "AV-Integration: Fachplanung, Rollout, Managed Services | SLT Technology Group",
    description:
      "Vollständige Leistungstiefe für Enterprise-AV: Bedarfsanalyse, AV-Fachplanung, Multi-Site-Rollout, Inbetriebnahme und Managed Services mit garantierten SLAs.",
    h1: "Leistungen für Enterprise-AV-Projekte",
    intro: [
      "Von der Konzeption über standortübergreifende Rollouts bis zum Managed Service: SLT begleitet Ihr AV-Programm über den gesamten Lebenszyklus.",
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
    title: "Konferenzraum-Lösungen: Huddle bis Boardroom & Auditorium | SLT AV",
    description:
      "Skalierbare AV-Lösungen für Enterprise: Huddle Space, Meetingraum, Boardroom, Auditorium, Empfang und Digital Signage – standardisierbar für Multi-Site-Rollouts.",
    h1: "Lösungen für jeden Raumtyp",
    intro: [
      "Vom Huddle Space bis zum Auditorium: SLT entwickelt skalierbare, standardisierbare Konzepte für moderne Enterprise-Arbeitswelten.",
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
    title: "Technologien: Crestron, Q-SYS, Poly, Logitech, Sennheiser | SLT AV",
    description:
      "Zertifizierter Integrator führender Enterprise-Hersteller: Crestron, Q-SYS, Poly, Logitech, Sennheiser, Shure, Barco, Yealink. Herstellerneutral integriert.",
    h1: "Technologien & Hersteller",
    intro: [
      "Best-of-Breed-Technologien führender Enterprise-Hersteller – zu einem konsistenten, herstellerneutralen Gesamtsystem integriert.",
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
    title: "Finanzierung: Leasing, Mietkauf & AV-as-a-Service | SLT AV",
    description:
      "Bilanzschonende Finanzierungsmodelle für AV-Investitionen: Leasing, Mietkauf, AV-as-a-Service. Planbare OPEX statt CAPEX-Spitzen – auch für Multi-Site-Rollouts.",
    h1: "Finanzierungsmodelle für Ihre AV-Investition",
    intro: [
      "Leasing, Mietkauf oder AV-as-a-Service: Wir finden das passende Modell für Budget, Bilanz und Rollout-Plan.",
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
    title: "Enterprise-Referenzen: GEA, Pfeifer & Langen, AluNorf, Sonoco | SLT AV",
    description:
      "Realisierte Großprojekte für Konzerne und Industrie: Boardrooms, standortübergreifende Rollouts, hybride Meetingräume und Enterprise-Netzwerkinfrastruktur.",
    h1: "Referenzprojekte",
    intro: [
      "Einblicke in realisierte Enterprise-AV- und IT-Projekte – vom Einzelraum bis zum standortübergreifenden Multi-Site-Rollout.",
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
    title: "Über SLT Technology Group: Team, Standorte Krefeld & Bonn | SLT AV",
    description:
      "Inhabergeführtes AV-Systemhaus für Enterprise-Kunden: Team, Standorte Krefeld und Bonn, Zertifizierungen, Werte. Lernen Sie SLT Technology Group kennen.",
    h1: "Über SLT Technology Group",
    intro: [
      "Inhabergeführt, partnerschaftlich, zertifiziert: Das Team von SLT Technology Group steht für transparente Enterprise-AV-Integration.",
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
    title: "Kontakt SLT Technology Group: Krefeld & Bonn | SLT AV",
    description:
      "Kontaktieren Sie SLT Technology Group: Hauptsitz Krefeld, Standort Bonn. Telefon, E-Mail, Anfahrt – Ihr Ansprechpartner für Enterprise-AV in NRW.",
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
    title: "Projektanfrage: Kostenfreies Enterprise-AV-Erstgespräch | SLT AV",
    description:
      "Starten Sie Ihr Enterprise-AV-Projekt: Kostenfreies Erstgespräch mit konkretem Vorschlag binnen 24 Stunden. Für Konzerne, Industrie und großen Mittelstand.",
    h1: "Projektanfrage starten",
    intro: [
      "Beschreiben Sie kurz Ihre Anforderungen – wir melden uns innerhalb eines Werktags mit einem konkreten Vorschlag.",
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
    title: "Karriere bei SLT Technology Group: AV-Jobs Krefeld & Bonn | SLT AV",
    description:
      "Aktuelle Stellenangebote bei SLT Technology Group: AV-Techniker, Projektleiter, Systemintegrator, Auszubildende – Standorte Krefeld und Bonn.",
    h1: "Karriere bei SLT Technology Group",
    intro: [
      "Werden Sie Teil eines wachsenden, inhabergeführten Enterprise-AV-Systemhauses mit Standorten in Krefeld und Bonn.",
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
    title: "News: AV-Trends, ISE 2026, Enterprise-Produktneuheiten | SLT AV",
    description:
      "News, ISE-Berichte und Produktneuheiten aus der Enterprise-AV-Welt – fundiert kuratiert für IT-Entscheider, Facility Manager und Workplace-Verantwortliche.",
    h1: "News & Aktuelles",
    intro: [
      "Trends, Innovationen und Praxiswissen aus der professionellen Enterprise-Medientechnik – von uns kuratiert.",
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
    title: "AV- & Medientechnik-Ratgeber für IT-Entscheider | SLT AV",
    description:
      "Praxiswissen für IT-Entscheider, Facility Manager und Workplace-Verantwortliche: Raumgrößen, Plattform-Vergleiche, Kostenrahmen, Rollout-Erfahrungen – neutral.",
    h1: "AV- & Medientechnik-Ratgeber",
    intro: [
      "Praxiswissen für IT-Entscheider, Facility Manager und Workplace-Verantwortliche: neutrale Empfehlungen, realistische Kostenrahmen und fundierte Vergleiche.",
    ],
    canonical: "/ratgeber",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Ratgeber", path: "/ratgeber" }],
  },
  {
    path: "/konferenzraum-ausstattung",
    routeType: "page",
    title: "Konferenzraum-Ausstattung: Huddle bis Boardroom & Auditorium | SLT AV",
    description:
      "Enterprise-Konferenzraum-Ausstattung nach Raumgröße: Huddle, Meeting, Boardroom, Auditorium. Hardware-Empfehlungen, Kostenrahmen, Lieferzeit und Rollout-Dauer – standardisierbar für Multi-Site.",
    h1: "Konferenzraum-Ausstattung nach Raumgröße",
    intro: [
      "Vom Huddle Space bis zum Auditorium: Wir empfehlen die optimale AV-Ausstattung für jeden Raumtyp – mit konkreten Hardware-Kombinationen, Kostenrahmen und Rollout-Zeitplan.",
      "Standardisierbar, skalierbar und herstellerneutral – für Konzerne, Industrie und großen Mittelstand.",
    ],
    canonical: "/konferenzraum-ausstattung",
    ogImage: "/assets/hero-konferenzraum.jpg",
    changefreq: "monthly",
    priority: 0.95,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Konferenzraum-Ausstattung", path: "/konferenzraum-ausstattung" }],
  },
  {
    path: "/service-wartung",
    routeType: "page",
    title: "AV-Service & Wartung: SLA, Fernwartung & Support | SLT Technology Group",
    description:
      "Professioneller Service für Ihre AV- und IT-Systeme: Wartungsverträge mit SLA, Fernwartung, Hardware-Ersatz und Helpdesk. Für Enterprise-Kunden in NRW und bundesweit.",
    h1: "AV-Service & Wartung",
    intro: [
      "Wartungsverträge mit festen SLAs, proaktive Fernüberwachung und schneller Vor-Ort-Service – damit Ihre Konferenzräume immer funktionieren.",
      "Von der regelmäßigen Inspektion bis zum 24/7-Notfallservice: Wir begleiten Ihre AV-Systeme über den gesamten Lebenszyklus.",
    ],
    canonical: "/service-wartung",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: TODAY,
    breadcrumbs: [{ name: "Service & Wartung", path: "/service-wartung" }],
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
// 5) PROJECT_ROUTES (Übersicht + Detailseiten)
// ───────────────────────────────────────────────────────────
import { PROJECTS } from "./projects";

export const PROJECT_ROUTES: SeoRoute[] = PROJECTS.map((project) => ({
  path: `/projekte/${project.slug}`,
  routeType: "project" as RouteType,
  title: `${project.name} – Referenzprojekt | SLT Technology Group`,
  description:
    project.shortDescription.length > 160
      ? project.shortDescription.slice(0, 157) + "..."
      : project.shortDescription,
  h1: project.name,
  intro: [project.shortDescription],
  canonical: `/projekte/${project.slug}`,
  ogImage: project.heroImage,
  ogType: "article",
  changefreq: "monthly",
  priority: 0.8,
  lastmod: TODAY,
  breadcrumbs: [
    { name: "Projekte", path: "/projekte" },
    { name: project.client, path: `/projekte/${project.slug}` },
  ],
}));

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
// 7) JOB_ROUTES (/karriere/{slug}) – Google for Jobs
// ───────────────────────────────────────────────────────────
import { JOBS } from "./jobs";

export const JOB_ROUTES: SeoRoute[] = JOBS.map((job) => ({
  path: `/karriere/${job.slug}`,
  routeType: "job" as RouteType,
  title: job.seoTitle,
  description: job.seoDescription,
  h1: job.title,
  intro: [
    job.description,
    `${job.locationLabel} · ${job.employmentTypeLabel} · ${job.startLabel}`,
  ],
  canonical: `/karriere/${job.slug}`,
  ogType: "article",
  changefreq: "weekly",
  priority: 0.7,
  lastmod: job.datePosted,
  breadcrumbs: [
    { name: "Karriere", path: "/karriere" },
    { name: job.title, path: `/karriere/${job.slug}` },
  ],
}));

// ───────────────────────────────────────────────────────────
// 8) PARTNER_ROUTES (/partner/{slug})
// ───────────────────────────────────────────────────────────
export const PARTNER_ROUTES: SeoRoute[] = partners.map((partner) => ({
  path: `/partner/${partner.slug}`,
  routeType: "partner" as RouteType,
  title: partner.headline,
  description: partner.description,
  h1: partner.headline,
  intro: [partner.longDescription],
  canonical: `/partner/${partner.slug}`,
  ogImage: partner.ogImage || "/og-image.png",
  changefreq: "monthly",
  priority: 0.85,
  lastmod: TODAY,
  breadcrumbs: [
    { name: "Partner", path: "/technologien" },
    { name: partner.name, path: `/partner/${partner.slug}` },
  ],
}));

// ───────────────────────────────────────────────────────────
// ALL_ROUTES
// ───────────────────────────────────────────────────────────
// ───────────────────────────────────────────────────────────
// Ratgeber-Fachbeiträge (aus src/data/ratgeberPosts.ts)
// ───────────────────────────────────────────────────────────
export const RATGEBER_POST_ROUTES: SeoRoute[] = ratgeberPosts.map<SeoRoute>((post) => ({
  path: `/ratgeber/${post.slug}`,
  routeType: "ratgeber" as const,
  title: post.metaTitle,
  description: post.description,
  h1: post.h1,
  intro: [post.excerpt],
  canonical: `/ratgeber/${post.slug}`,
  ogImage: post.ogImage,
  ogType: "article" as const,
  changefreq: "monthly",
  priority: 0.8,
  lastmod: post.date,
  breadcrumbs: [
    { name: "Ratgeber", path: "/ratgeber" },
    { name: post.title, path: `/ratgeber/${post.slug}` },
  ],
  articleSlug: post.slug,
  articleDate: post.date,
  articleCategory: post.category,
  articleImage: post.ogImage,
}));



export const ALL_ROUTES: SeoRoute[] = [
  ...MAIN_ROUTES,
  ...LOCALSEO_ROUTES,
  ...RATGEBER_ROUTES,
  ...NEWS_ROUTES,
  ...PROJECT_ROUTES,
  ...JOB_ROUTES,
  ...LEGAL_ROUTES,
  ...PARTNER_ROUTES,
  ...BLOG_ROUTES,
];

export { isNoindex };

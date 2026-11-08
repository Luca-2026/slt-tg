/**
 * Regional-Seiten: Städte, Leistungen und Routen.
 *
 * Die Inhalte der 35 Stadtseiten (7 Städte × 5 Leistungen) kommen aus
 * src/data/regionen/<stadt>.json – eine Datei pro Stadt, keine generierten
 * Füllsätze. Alle 35 Routen sind indexierbar.
 * Die NRW-Seite (/konferenztechnik/nrw) nutzt weiterhin einen redaktionellen
 * Override, weil sie keiner einzelnen Stadt zugeordnet ist.
 */

export interface LocalSEOCity {
  slug: string;
  name: string;
  region: string;
  description: string;
  coordinates: { lat: string; lng: string };
}

export interface LocalSEOTopic {
  baseSlug: string;
  /** Langer Name, z. B. "Videokonferenz-Lösungen" */
  title: string;
  /** Kurzer Leistungsname für Title/H1, z. B. "Videokonferenz" */
  shortTitle: string;
  /** Matching-Schlüssel für region.referenzen[].leistung */
  leistung: string;
}

export const cities: Record<string, LocalSEOCity> = {
  krefeld: { slug: "krefeld", name: "Krefeld", region: "Niederrhein", description: "am Niederrhein", coordinates: { lat: "51.3388", lng: "6.5853" } },
  duesseldorf: { slug: "duesseldorf", name: "Düsseldorf", region: "Rheinland", description: "in der Landeshauptstadt", coordinates: { lat: "51.2277", lng: "6.7735" } },
  koeln: { slug: "koeln", name: "Köln", region: "Rheinland", description: "am Rhein", coordinates: { lat: "50.9375", lng: "6.9603" } },
  bonn: { slug: "bonn", name: "Bonn", region: "Rhein-Sieg", description: "in der Bundesstadt", coordinates: { lat: "50.7374", lng: "7.0982" } },
  essen: { slug: "essen", name: "Essen", region: "Ruhrgebiet", description: "im Ruhrgebiet", coordinates: { lat: "51.4556", lng: "7.0116" } },
  duisburg: { slug: "duisburg", name: "Duisburg", region: "Ruhrgebiet", description: "im westlichen Ruhrgebiet", coordinates: { lat: "51.4344", lng: "6.7624" } },
  moenchengladbach: { slug: "moenchengladbach", name: "Mönchengladbach", region: "Niederrhein", description: "am Niederrhein", coordinates: { lat: "51.1805", lng: "6.4428" } },
  nrw: { slug: "nrw", name: "Nordrhein-Westfalen", region: "NRW", description: "in NRW", coordinates: { lat: "51.4332", lng: "7.6616" } },
};

export const topics: Record<string, LocalSEOTopic> = {
  medientechnik: {
    baseSlug: "medientechnik",
    title: "Medientechnik",
    shortTitle: "Medientechnik",
    leistung: "Medientechnik",
  },
  konferenztechnik: {
    baseSlug: "konferenztechnik",
    title: "Konferenztechnik",
    shortTitle: "Konferenztechnik",
    leistung: "Konferenztechnik",
  },
  videokonferenz: {
    baseSlug: "videokonferenz",
    title: "Videokonferenz-Lösungen",
    shortTitle: "Videokonferenz",
    leistung: "Videokonferenz",
  },
  "it-netzwerk": {
    baseSlug: "it-netzwerk",
    title: "IT-Netzwerktechnik",
    shortTitle: "IT-Netzwerk",
    leistung: "IT-Netzwerk",
  },
  "digital-signage": {
    baseSlug: "digital-signage",
    title: "Digital Signage",
    shortTitle: "Digital Signage",
    leistung: "Digital Signage",
  },
};

/**
 * Alle 35 Regionalrouten (7 Städte × 5 Leistungen) sind indexierbar –
 * der frühere Thin-Content-Noindex-Schutz entfällt mit dem
 * datengetriebenen Template (src/data/regionen/).
 */
export function isNoindex(_topic: string, _city: string): boolean {
  return false;
}

export interface LocalSEORoute {
  path: string;
  topic: string;
  city: string;
  noindex: boolean;
}

export function getLocalSEORoutes(): LocalSEORoute[] {
  const routes: LocalSEORoute[] = [];
  const allCities = ["krefeld", "duesseldorf", "koeln", "bonn", "essen", "duisburg", "moenchengladbach"];

  const push = (path: string, topic: string, city: string) => {
    routes.push({ path, topic, city, noindex: isNoindex(topic, city) });
  };

  allCities.forEach((city) => push(`/medientechnik/${city}`, "medientechnik", city));
  allCities.forEach((city) => push(`/konferenztechnik/${city}`, "konferenztechnik", city));
  push("/konferenztechnik/nrw", "konferenztechnik", "nrw");
  allCities.forEach((city) => push(`/videokonferenz/${city}`, "videokonferenz", city));
  allCities.forEach((city) => push(`/it-netzwerk/${city}`, "it-netzwerk", city));
  allCities.forEach((city) => push(`/digital-signage/${city}`, "digital-signage", city));

  return routes;
}

// ───────────────────────────────────────────────────────────
// CONTENT OVERRIDE – nur noch für die NRW-Seite, die keiner
// einzelnen Stadt zugeordnet ist und daher keine JSON-Datei hat.
// ───────────────────────────────────────────────────────────
export interface ContentOverride {
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  services: string[];
  faqItems: Array<{ question: string; answer: string }>;
  localAnchor?: string;
  localIndustries?: string[];
}

export function getOverrideKey(topic: string, city: string): string {
  return `${topic}-${city}`;
}

export function getContentOverride(topic: string, city: string): ContentOverride | undefined {
  return CONTENT_OVERRIDES[getOverrideKey(topic, city)];
}

export const CONTENT_OVERRIDES: Record<string, ContentOverride> = {
  "konferenztechnik-nrw": {
    heroTitle: "Konferenztechnik in Nordrhein-Westfalen",
    heroSubtitle:
      "Von Aachen bis Bielefeld, von Münster bis Siegen – wir planen und installieren Konferenzräume in ganz NRW. Zwei Standorte in Krefeld und Bonn.",
    intro:
      "Nordrhein-Westfalen ist Deutschlands größter Ballungsraum – und gleichzeitig eine Ansammlung von Wirtschaftsregionen mit sehr unterschiedlichen Anforderungen. Im Ruhrgebiet dominiert die Industrie, in Düsseldorf die Konzernzentralen, in Köln die Medien, in Bonn die Bundesverwaltung, in Ostwestfalen der Mittelstand. Wir betreuen von unseren Standorten Krefeld und Bonn aus Projekte in der gesamten Region. Je nach Projektgröße und Entfernung arbeiten wir mit lokalen Partnern zusammen oder rüsten direkt aus unserem Fuhrpark. Typische Einsatzradien: Krefeld deckt Niederrhein und Ruhrgebiet ab, Bonn das Rheinland bis Westerwald, zusammen erreichen wir jeden Punkt in NRW innerhalb von 90 Minuten.",
    services: [
      "Konferenzraum-Planung und Installation in ganz NRW",
      "Boardroom- und Präsidial-Ausstattung",
      "Multi-Site-Rollouts für NRW-weit verteilte Unternehmen",
      "Simultandolmetscher-Anlagen nach IEC 60914",
      "Integration mit bestehender IT-Infrastruktur",
      "Wartungsverträge mit NRW-Flächendeckung",
    ],
    faqItems: [
      {
        question: "Wie weit reicht Ihr Einsatzradius in NRW?",
        answer:
          "Von unseren Standorten Krefeld und Bonn erreichen wir jeden Punkt in NRW innerhalb von 90 Minuten. Typische Projektstandorte sind Düsseldorf, Köln, Essen, Dortmund, Aachen und Bielefeld. Für zeitkritische Serviceleistungen haben wir Wartungsverträge mit garantierten Reaktionszeiten.",
      },
      {
        question: "Können Sie NRW-weite Rollouts für Konzerne umsetzen?",
        answer:
          "Ja. Unsere Referenz Pfeifer & Langen in Köln (20+ Räume einheitlich ausgestattet) und Sonoco (mehrere deutschlandweite Werksstandorte) zeigen, dass wir Rollouts mit 10, 20 oder 50 Räumen parallel planen und umsetzen können. Dabei sorgen wir für einheitlichen Room-Standard, zentrales Monitoring und koordinierte Inbetriebnahme.",
      },
      {
        question: "Welche Branchen in NRW haben Sie bereits betreut?",
        answer:
          "Unsere NRW-Kunden kommen aus Chemie (Aluminium Norf Neuss), Lebensmittelindustrie (Pfeifer & Langen Köln), Maschinenbau (GEA Farm Technologies Bönen) und dem Mittelstand. Die Bandbreite erlaubt uns, jede NRW-Branche mit passenden Lösungen zu bedienen.",
      },
    ],
    localAnchor: "Zwei Standorte (Krefeld + Bonn), NRW-weiter Einsatzradius",
    localIndustries: ["Industrie", "Verwaltung", "Medien", "Mittelstand"],
  },
};

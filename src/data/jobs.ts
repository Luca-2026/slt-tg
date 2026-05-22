/**
 * Zentrale Datenquelle für alle Stellenangebote.
 * Wird sowohl von der Karriere-Übersicht (/karriere) als auch
 * von den dedizierten Detailseiten (/karriere/{slug}) genutzt.
 *
 * Felder sind so strukturiert, dass daraus ein vollständiges
 * Google-Jobs-konformes JobPosting-Schema gebaut werden kann.
 *
 * Pflichtfelder für Google Jobs:
 * - datePosted (ISO)
 * - description (HTML, vollständig)
 * - hiringOrganization (name, sameAs, logo)
 * - jobLocation ODER (jobLocationType TELECOMMUTE + applicantLocationRequirements)
 * - title
 *
 * Empfohlen: validThrough, employmentType, identifier, baseSalary,
 * educationRequirements, experienceRequirements, directApply.
 */

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACTOR"
  | "TEMPORARY"
  | "INTERN"
  | "VOLUNTEER"
  | "PER_DIEM"
  | "OTHER";

export interface JobAddress {
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string; // ISO 3166-1 alpha-2
}

export interface BaseSalary {
  currency: string;
  minValue: number;
  maxValue: number;
  unitText: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";
}

export interface JobPosition {
  slug: string;
  title: string;
  subtitle?: string;
  /** Lesbarer Anzeige-Ort, z. B. "Krefeld oder Bonn" */
  locationLabel: string;
  /** Strukturierte Adressen (1–n) für jobLocation */
  addresses: JobAddress[];
  employmentType: EmploymentType;
  employmentTypeLabel: string; // z. B. "Vollzeit"
  isAzubi: boolean;
  /** ISO-Datum, an dem die Stelle veröffentlicht wurde */
  datePosted: string;
  /** ISO-Datum, bis wann die Stelle gültig ist (Pflicht, sonst Risiko Spam-Filter) */
  validThrough: string;
  /** Frühestmöglicher Eintritt – Anzeige + Vorbelegung Formular */
  startLabel: string;
  /** Eindeutiger interner Identifier für PropertyValue */
  identifier: string;
  /** Optionales Gehalt (nicht bei Azubi) */
  baseSalary?: BaseSalary;
  /** Anforderungs-Schwellen für Schema */
  educationRequirements?: string; // z. B. "high school"
  experienceRequirementsMonths?: number;
  /** Kurzer Pitch oben auf der Seite (1–2 Sätze) */
  description: string;
  /** Aufgaben (Bullet Points) */
  tasks: string[];
  /** Anforderungen (Bullet Points) */
  requirements: string[];
  /** Optional: Was wir bieten – stellenspezifisch */
  weOffer?: string[];
  /** SEO */
  seoTitle: string;
  seoDescription: string;
  /** Lucide-Icon-Name (für UI-Mapping) */
  iconName: "GraduationCap" | "Wrench" | "Briefcase";
}

export const HIRING_ORG = {
  name: "SLT Technology Group GmbH & Co. KG",
  sameAs: "https://www.slt-tg.de",
  logo: "https://www.slt-tg.de/favicon.png",
};

const ADDR_KREFELD: JobAddress = {
  streetAddress: "Anrather Straße 291",
  postalCode: "47807",
  addressLocality: "Krefeld",
  addressRegion: "NW",
  addressCountry: "DE",
};

const ADDR_BONN: JobAddress = {
  streetAddress: "Drachenburgstraße 8",
  postalCode: "53179",
  addressLocality: "Bonn",
  addressRegion: "NW",
  addressCountry: "DE",
};

export const JOBS: JobPosition[] = [
  {
    slug: "ausbildung-bueromanagement",
    title: "Ausbildung zum Kaufmann / zur Kauffrau für Büromanagement (m/w/d)",
    locationLabel: "Krefeld oder Bonn",
    addresses: [ADDR_KREFELD, ADDR_BONN],
    employmentType: "INTERN",
    employmentTypeLabel: "Vollzeit · Ausbildung",
    isAzubi: true,
    datePosted: "2026-04-20",
    validThrough: "2026-07-31T23:59",
    startLabel: "Ausbildungsbeginn: 01.08.2026",
    identifier: "SLT-AZ-BM-2026",
    educationRequirements: "high school",
    description:
      "Du organisierst gerne, behältst den Überblick und möchtest in einem innovativen Tech-Unternehmen durchstarten? Dann ist diese Ausbildung genau das Richtige für dich.",
    tasks: [
      "Büroorganisation und Terminplanung",
      "Kundenkommunikation und -betreuung",
      "Rechnungswesen und Auftragsbearbeitung",
      "Unterstützung bei Projekten und Events",
      "Nutzung moderner KI-Tools zur Optimierung kaufmännischer Prozesse",
    ],
    requirements: [
      "Mittlere Reife oder (Fach-)Abitur",
      "Organisationstalent und Eigeninitiative",
      "Gute Deutsch- und Englischkenntnisse",
      "Sicherer Umgang mit MS Office",
      "Interesse an KI-gestützten Arbeitsmethoden und digitalen Tools",
    ],
    weOffer: [
      "Strukturierte Ausbildung mit erfahrenen Ausbildern",
      "Eigene Projekte ab dem ersten Lehrjahr",
      "Übernahmechance nach erfolgreicher Ausbildung",
      "Modernes Büro mit Getränken, Obst und Grillplatz",
    ],
    seoTitle:
      "Ausbildung Kaufmann/-frau für Büromanagement (m/w/d) Krefeld/Bonn 2026 | SLT Technology Group",
    seoDescription:
      "Ausbildungsplatz Büromanagement (m/w/d) ab 01.08.2026 in Krefeld oder Bonn. KI-gestützte Prozesse, eigene Projekte, Übernahmechance. Jetzt bewerben bei SLT.",
    iconName: "GraduationCap",
  },
  {
    slug: "ausbildung-veranstaltungstechnik",
    title: "Ausbildung zur Fachkraft für Veranstaltungstechnik (m/w/d)",
    subtitle: "Schwerpunkt: AV-Systemintegration",
    locationLabel: "Krefeld",
    addresses: [ADDR_KREFELD],
    employmentType: "INTERN",
    employmentTypeLabel: "Vollzeit · Ausbildung",
    isAzubi: true,
    datePosted: "2026-04-20",
    validThrough: "2026-07-31T23:59",
    startLabel: "Ausbildungsbeginn: 01.08.2026",
    identifier: "SLT-AZ-VT-2026",
    educationRequirements: "high school",
    description:
      "Du bist technikbegeistert und möchtest lernen, wie professionelle AV-Systeme geplant, installiert und konfiguriert werden? Werde Teil unseres Teams!",
    tasks: [
      "Planung und Installation von AV-Systemen",
      "Konfiguration von Videokonferenz-Lösungen",
      "Technischer Support und Inbetriebnahme",
      "Mitarbeit bei Kundenprojekten vor Ort",
    ],
    requirements: [
      "Mittlere Reife oder (Fach-)Abitur",
      "Technisches Verständnis und handwerkliches Geschick",
      "Teamfähigkeit und Zuverlässigkeit",
      "Führerschein Klasse B von Vorteil",
    ],
    weOffer: [
      "Praxisnahe Ausbildung an realen Kundenprojekten",
      "Arbeit mit Marken wie Crestron, Shure, Sennheiser, Yealink",
      "Übernahmechance nach erfolgreicher Ausbildung",
      "Eigenes Werkzeug und Arbeitskleidung",
    ],
    seoTitle:
      "Ausbildung Fachkraft Veranstaltungstechnik (m/w/d) AV-Systemintegration Krefeld 2026 | SLT",
    seoDescription:
      "Ausbildung Veranstaltungstechnik mit Schwerpunkt AV-Systemintegration in Krefeld ab 01.08.2026. Praxis an realen Projekten mit Crestron, Shure & Co.",
    iconName: "Wrench",
  },
  {
    slug: "medientechniker",
    title: "Medientechniker (m/w/d)",
    subtitle: "Schwerpunkt Installation & Konfiguration",
    locationLabel: "Krefeld",
    addresses: [ADDR_KREFELD],
    employmentType: "FULL_TIME",
    employmentTypeLabel: "Vollzeit",
    isAzubi: false,
    datePosted: "2026-04-20",
    validThrough: "2026-10-31T23:59",
    startLabel: "Arbeitsbeginn: ab sofort",
    identifier: "SLT-MT-2026-01",
    experienceRequirementsMonths: 24,
    baseSalary: {
      currency: "EUR",
      minValue: 42000,
      maxValue: 55000,
      unitText: "YEAR",
    },
    description:
      "Du bist erfahren in der Medientechnik und möchtest hochwertige Konferenz- und Kollaborationslösungen für namhafte Kunden realisieren? Dann suchen wir genau dich!",
    tasks: [
      "Installation und Konfiguration von AV-/UC-Systemen",
      "Inbetriebnahme von Videokonferenzräumen (Microsoft Teams Rooms, Zoom Rooms)",
      "Fehlerdiagnose und technischer Support",
      "Dokumentation und Kundeneinweisung",
    ],
    requirements: [
      "Abgeschlossene Ausbildung im Bereich Medientechnik oder vergleichbar",
      "Erfahrung mit Crestron, Extron, Shure, Sennheiser o. ä.",
      "Kenntnisse in Netzwerktechnik (IP, VLAN)",
      "Führerschein Klasse B erforderlich",
    ],
    weOffer: [
      "Unbefristete Festanstellung in einem wachsenden Systemhaus",
      "Eigener Laptop und moderne Werkzeugausstattung",
      "Herstellerzertifizierungen und kontinuierliche Weiterbildung",
      "Betriebliche Altersvorsorge & Bonussystem",
    ],
    seoTitle: "Medientechniker (m/w/d) Krefeld – AV/UC Installation | SLT Technology Group",
    seoDescription:
      "Medientechniker (m/w/d) in Krefeld gesucht: Installation und Konfiguration von Teams Rooms, Zoom Rooms, Crestron & Co. Unbefristet, ab sofort.",
    iconName: "Briefcase",
  },
];

export function getJobBySlug(slug: string): JobPosition | undefined {
  return JOBS.find((j) => j.slug === slug);
}

/**
 * Baut eine vollständige HTML-Beschreibung gemäß Google-Jobs-Vorgabe
 * (description muss vollständig sein, HTML mit <p>/<ul>/<li>).
 */
export function buildJobDescriptionHtml(job: JobPosition): string {
  const tasks = job.tasks.map((t) => `<li>${t}</li>`).join("");
  const reqs = job.requirements.map((r) => `<li>${r}</li>`).join("");
  const offer = job.weOffer?.length
    ? `<p>Das bieten wir dir:</p><ul>${job.weOffer
        .map((o) => `<li>${o}</li>`)
        .join("")}</ul>`
    : "";

  return [
    `<p>${job.description}</p>`,
    `<p>Einsatzort: ${job.locationLabel}. Beschäftigungsart: ${job.employmentTypeLabel}. ${job.startLabel}.</p>`,
    `<p>Deine Aufgaben:</p><ul>${tasks}</ul>`,
    `<p>Das bringst du mit:</p><ul>${reqs}</ul>`,
    offer,
    `<p>Bewirb dich direkt online über unser Bewerbungsformular oder per E-Mail an karriere@slt-tg.de. Wir freuen uns auf deine Bewerbung!</p>`,
  ].join("");
}

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
  /** ISO-Datum der letzten inhaltlichen Änderung (dateModified/Sitemap) */
  dateModified?: string;
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
  /** Editorial context derived from the published tasks and requirements. */
  roleContext?: string;
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
    dateModified: "2026-11-08",
    validThrough: "2027-07-31T23:59",
    startLabel: "Ausbildungsbeginn: 01.08.2027",
    identifier: "SLT-AZ-BM-2027",
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
    roleContext: "In dieser Ausbildung verbindet sich kaufmännische Organisation mit dem Umfeld eines AV- und IT-Systemhauses. Die veröffentlichten Aufgaben reichen von Terminplanung und Kundenkommunikation bis zu Rechnungswesen und Auftragsbearbeitung. Auch die Unterstützung bei Projekten und Events gehört zum Aufgabenprofil. Digitale Werkzeuge und KI-gestützte Arbeitsmethoden sind dabei Teil der beschriebenen Ausrichtung. Für den Einstieg sind deshalb sowohl Interesse an organisatorischen Abläufen als auch ein sicherer Umgang mit MS Office relevant. Gute Deutsch- und Englischkenntnisse unterstützen die Kommunikation. Die Ausbildung ist für Krefeld oder Bonn ausgeschrieben. Der Beginn ist der 01.08.2027; die konkreten Anforderungen und angebotenen Rahmenbedingungen findest du in den folgenden Abschnitten.",
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
    seoTitle: "Ausbildung Büromanagement 2027 | SLT Technology Group",
    seoDescription:
      "Ausbildung Büromanagement (m/w/d) ab 01.08.2027 in Krefeld oder Bonn: KI-gestützte Prozesse, eigene Projekte und Übernahmechance.",
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
    dateModified: "2026-11-08",
    validThrough: "2027-07-31T23:59",
    startLabel: "Ausbildungsbeginn: 01.08.2027",
    identifier: "SLT-AZ-VT-2027",
    educationRequirements: "high school",
    description:
      "Du bist technikbegeistert und möchtest lernen, wie professionelle AV-Systeme geplant, installiert und konfiguriert werden? Werde Teil unseres Teams!",
    tasks: [
      "Planung und Installation von AV-Systemen",
      "Konfiguration von Videokonferenz-Lösungen",
      "Technischer Support und Inbetriebnahme",
      "Mitarbeit bei Kundenprojekten vor Ort",
    ],
    roleContext: "Der Schwerpunkt dieser Ausbildung liegt auf AV-Systemintegration: Professionelle Bild-, Ton- und Konferenztechnik wird als zusammenhängende Lösung betrachtet. Zum veröffentlichten Aufgabenprofil gehören Planung, Installation und Konfiguration ebenso wie technischer Support und Inbetriebnahme. Die Mitarbeit bei realen Kundenprojekten verbindet technische Grundlagen mit der praktischen Umsetzung vor Ort. Interesse an Technik, handwerkliches Geschick und zuverlässige Zusammenarbeit im Team sind deshalb wichtige Voraussetzungen. Du arbeitest im Umfeld von Herstellern wie Crestron, Shure, Sennheiser und Yealink. Die Ausbildung ist für den Standort Krefeld ausgeschrieben und beginnt am 01.08.2027. Ein Führerschein der Klasse B ist von Vorteil, wird im Anforderungsprofil aber nicht als zwingende Voraussetzung genannt.",
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
    seoTitle: "Ausbildung Veranstaltungstechnik 2027 | SLT Technology Group",
    seoDescription:
      "Ausbildung Veranstaltungstechnik mit Schwerpunkt AV-Systemintegration in Krefeld ab 01.08.2027. Praxis an realen Projekten mit Crestron, Shure & Co.",
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
    dateModified: "2026-11-08",
    validThrough: "2027-04-30T23:59",
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
    roleContext: "Diese Stelle verbindet die praktische Installation mit der Konfiguration und Inbetriebnahme von AV- und UC-Systemen. Im Mittelpunkt stehen Videokonferenzräume, darunter Microsoft Teams Rooms und Zoom Rooms, sowie die Abstimmung der eingesetzten Komponenten. Fehlerdiagnose und technischer Support gehören ebenso zum Aufgabenprofil wie Dokumentation und Kundeneinweisung. Kenntnisse in IP-Netzwerken und VLANs sind relevant, weil Konferenztechnik mit der vorhandenen IT zusammenarbeitet. Gesucht wird eine Person mit abgeschlossener einschlägiger oder vergleichbarer Ausbildung und Erfahrung mit Herstellern wie Crestron, Extron, Shure oder Sennheiser. Der Einsatzort ist Krefeld, der Einstieg ab sofort vorgesehen. Für diese Stelle ist ein Führerschein der Klasse B erforderlich.",
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
    seoTitle: "Medientechniker (m/w/d) in Krefeld | SLT Technology Group",
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
    ...(job.roleContext ? [`<p>${job.roleContext}</p>`] : []),
    `<p>Einsatzort: ${job.locationLabel}. Beschäftigungsart: ${job.employmentTypeLabel}. ${job.startLabel}.</p>`,
    `<p>Deine Aufgaben:</p><ul>${tasks}</ul>`,
    `<p>Das bringst du mit:</p><ul>${reqs}</ul>`,
    offer,
    `<p>Wir sichten deine Bewerbungsunterlagen und melden uns anschließend bei dir zurück.</p>`,
    `<p>Bewirb dich direkt online über unser Bewerbungsformular oder per E-Mail an karriere@slt-tg.de. Wir freuen uns auf deine Bewerbung!</p>`,
  ].join("");
}

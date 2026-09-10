/**
 * Ratgeber-Fachbeiträge – Metadaten für Übersicht, SEO-Routen und Schemas.
 * Der Fließtext liegt in src/pages/RatgeberKiReadiness.tsx.
 */

export interface RatgeberFaq {
  question: string;
  answer: string;
}

export interface RatgeberPostMeta {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  description: string;
  keywords: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  category: string;
  author: string;
  ogImage: string; // absolut auflösbarer Pfad ab /
  faqs: RatgeberFaq[];
}

export const ratgeberPosts: RatgeberPostMeta[] = [
  {
    slug: "raumbuchungssystem-konferenzraeume",
    title: "Raumbuchungssystem für Konferenzräume",
    h1: "Raumbuchungssystem für Konferenzräume: Auswahl, Integration und Betrieb",
    metaTitle:
      "Raumbuchungssystem für Konferenzräume: Auswahl & Integration | SLT AV",
    description:
      "Raumbuchungssystem planen: Kalender-Integration in Microsoft 365 oder Google Workspace, Türpanels, Auto-Release, Netzwerk und Datenschutz – mit Auswahl-Checkliste.",
    keywords:
      "Raumbuchungssystem, Raumbuchung Konferenzraum, Raumbuchungssoftware, Konferenzraumbuchung, Room-Booking-Panel, Raumbuchung Microsoft 365, Türschild Besprechungsraum, Belegungsdaten Meetingräume",
    excerpt:
      "Belegte Räume, die leer stehen, und Doppelbuchungen im Flur: Woraus ein Raumbuchungssystem besteht, wie es sauber an Microsoft 365 oder Google Workspace andockt und welche sechs Kriterien vor der Bestellung geklärt gehören.",
    date: "2026-09-10",
    readTime: "7 Min.",
    category: "Planung",
    author: "SLT Technology Group, Redaktion AV Systemintegration",
    ogImage: "/assets/ratgeber/raumbuchung-og.jpg",
    faqs: [
      {
        question: "Brauchen wir eine eigene Raumbuchungssoftware, wenn wir Microsoft 365 nutzen?",
        answer:
          "Für die reine Buchung nicht: Raumpostfächer in Microsoft 365 reichen aus. Ein Raumbuchungssystem ergänzt das um die Sichtbarkeit am Raum (Türpanel), Ad-hoc-Buchung, Check-in mit automatischer Freigabe nicht genutzter Termine und auswertbare Belegungsdaten.",
      },
      {
        question: "Was ist Auto-Release beziehungsweise No-Show-Freigabe?",
        answer:
          "Der Raum muss zu Beginn des Termins am Panel bestätigt werden. Bleibt die Bestätigung aus, gibt das System die Buchung nach einer im Regelwerk festgelegten Frist automatisch frei, sodass der Raum wieder buchbar ist.",
      },
      {
        question: "Wie werden Raumbuchungspanels mit Strom und Netzwerk versorgt?",
        answer:
          "In der Regel über Power over Ethernet: Ein Netzwerkkabel am Raum liefert Daten und Strom. Erforderlich sind daher eine Datendose an der Montageposition, freie PoE-Ports am Switch und ein mit der IT abgestimmtes VLAN.",
      },
      {
        question: "Welche Datenschutzfragen sind bei Raumbuchung relevant?",
        answer:
          "Panels können Organisator und Betreff anzeigen, Sensorik erfasst Nutzungsdaten. Legen Sie vorab fest, welche Angaben sichtbar sind und wie lange Auswertungen gespeichert werden, und binden Sie Datenschutz sowie – wo vorhanden – den Betriebsrat frühzeitig ein.",
      },
    ],
  },
  {

    slug: "ki-readiness-av-medientechnik-2026",
    title: "KI-Readiness in der AV-Branche",
    h1: "KI-Readiness in der AV-Branche: So machen Sie Ihre Medientechnik 2026 fit für Künstliche Intelligenz",
    metaTitle:
      "KI-Readiness in der AV-Branche: So machen Sie Ihre Medientechnik 2026 KI-fähig | SLT Technology Group",
    description:
      "KI in Konferenzräumen, EU AI Act, NIS2 und Predictive Maintenance: Was KI-Readiness für Ihre Medientechnik bedeutet und wie Sie Ihr Unternehmen jetzt vorbereiten. Mit Checkliste.",
    keywords:
      "KI-Readiness AV, KI in der Medientechnik, KI Konferenzraum, AI Meetingraum, EU AI Act Unternehmen, KI Videokonferenz, Predictive Maintenance Medientechnik, AV/IT-Konvergenz, Medientechnik 2026",
    excerpt:
      "Kameras, die Sprecher verfolgen, DSPs, die Störgeräusche herausrechnen, Plattformen, die Ausfälle vorhersagen – und seit dem 2. August 2026 zentrale Pflichten der EU-KI-Verordnung. Was KI-Readiness für Ihre Medientechnik konkret bedeutet.",
    date: "2026-08-06",
    readTime: "8 Min.",
    category: "AV/IT-Konvergenz",
    author: "SLT Technology Group, Redaktion AV Systemintegration",
    ogImage: "/assets/ratgeber/ki-readiness-og.jpg",
    faqs: [
      {
        question: "Ist unser bestehender Konferenzraum automatisch KI-fähig?",
        answer:
          "Nicht zwingend. Viele Systeme der letzten Jahre erhalten KI-Funktionen per Firmware- oder Plattform-Update, ältere Hardware jedoch nicht. Eine Bestandsaufnahme durch einen AV-Fachplaner klärt, was per Update geht und wo sich ein Austausch lohnt.",
      },
      {
        question: "Betrifft der EU AI Act auch normale Videokonferenz-Funktionen?",
        answer:
          "Ja, zumindest mittelbar. Transparenzpflichten und die KI-Kompetenzpflicht nach Artikel 4 gelten unabhängig von der Risikoklasse für Unternehmen, die KI-Systeme einsetzen. KI-Funktionen wie automatische Transkription oder Meeting-Zusammenfassungen sollten daher erfasst, bewertet und in Schulungen berücksichtigt werden.",
      },
      {
        question: "Was kostet der Einstieg in KI-fähige Medientechnik?",
        answer:
          "Das hängt vom Bestand ab. Oft ist der wirtschaftlichste Weg ein Pilotraum auf Basis eines definierten Raumstandards, der anschließend auf weitere Räume übertragen wird. So bleiben Investitionen planbar und Erfahrungswerte fließen in den Rollout ein.",
      },
    ],
  },
];

export function getRatgeberPostBySlug(slug: string): RatgeberPostMeta | undefined {
  return ratgeberPosts.find((p) => p.slug === slug);
}

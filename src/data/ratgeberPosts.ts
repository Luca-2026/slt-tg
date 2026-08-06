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

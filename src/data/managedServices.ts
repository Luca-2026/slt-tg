/**
 * Inhalte für /managed-services.
 *
 * Basis sind ausschließlich die Leistungen, die SLT Technology Group
 * öffentlich kommuniziert (Service Desk, proaktives 24/7-Monitoring,
 * Managed Rooms, ITIL v4, Multi-Site-Betrieb, Standorte Krefeld & Bonn).
 * Konkrete CARE-Vertragsmodelle sind separat im Service-Modellkatalog
 * anhand der vom Kunden bereitgestellten Leistungsbeschreibung definiert.
 */

export interface MsModule {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export const msModules: MsModule[] = [
  {
    id: "service-desk",
    title: "Service Desk & Anwender-Support",
    description:
      "Eine zentrale Anlaufstelle für Ihre Nutzer – statt Suche nach Zuständigkeiten zwischen IT, Facility und Hersteller.",
    bullets: [
      "Zentraler Single Point of Contact für Störungen an Konferenz- und Medientechnik",
      "Ticketing mit durchgängiger Dokumentation je Raum und Standort",
      "Qualifizierte Ersteinschätzung: Endgerät, Netzwerk oder Plattform",
      "Eskalation an Hersteller und Übergabe an den Vor-Ort-Service",
    ],
  },
  {
    id: "monitoring",
    title: "Proaktives 24/7-Monitoring",
    description:
      "Wir überwachen Räume und Systeme kontinuierlich und reagieren, bevor die Störung im Meeting auffällt.",
    bullets: [
      "Laufende Verfügbarkeits- und Statusüberwachung von AV- und Netzwerk-Komponenten",
      "Automatische Alarmierung bei Ausfällen und Anomalien",
      "Remote-Analyse und Fernbehebung, wo technisch möglich",
      "Multi-Site-Monitoring über alle Standorte in einer Sicht",
    ],
  },
  {
    id: "managed-rooms",
    title: "Managed Rooms",
    description:
      "Betrieb kompletter Raum-Flotten inklusive Auswertung, wie Ihre Räume tatsächlich genutzt werden.",
    bullets: [
      "Regelmäßige Funktionsprüfung und Raum-Checks",
      "Auswertung von Nutzungs- und Belegungsdaten",
      "Konkrete Optimierungs-Empfehlungen zu Hardware, Akustik und Bedienung",
      "Anwender-Schulungen und Adoption-Begleitung auf Wunsch",
    ],
  },
  {
    id: "lifecycle",
    title: "Wartung, Updates & Lifecycle",
    description:
      "Planbare Wartungsfenster statt ungeplanter Ausfälle – über den gesamten Lebenszyklus Ihrer Anlagen.",
    bullets: [
      "Geplante Wartung mit dokumentierter Funktionsprüfung",
      "Firmware-Updates und Sicherheits-Patches abgestimmt mit Ihrer IT",
      "Ersatzteil- und Austauschprozess bei Hardware-Defekten",
      "Modernisierungs- und Migrationsplanung aus Altsystemen",
    ],
  },
  {
    id: "governance",
    title: "Service-Management & Reporting",
    description:
      "SLT Technology Group ist ITIL 4 zertifiziert und richtet Incident-, Problem- und Change-Management daran aus – besonders an den Schnittstellen zwischen AV, Netzwerk und Ihrer IT-Service-Organisation.",
    bullets: [
      "Incident-, Problem- und Change-Management nach ITIL v4",
      "Definierte Eskalationsstufen und Verantwortlichkeiten",
      "Dokumentierte Service-Berichte als Grundlage für Reviews",
      "Regelmäßige Service-Termine mit Ihren Ansprechpartnern",
    ],
  },
  {
    id: "it-infrastruktur",
    title: "Netzwerk- & IT-Integration im Betrieb",
    description:
      "AV endet nicht am Display: Wir betreiben die notwendige Netzwerk- und Infrastrukturseite mit.",
    bullets: [
      "Betreuung der raumseitigen Netzwerk- und WLAN-Anbindung",
      "Abstimmung mit Ihren IT-Richtlinien, VLANs und Security-Vorgaben",
      "Unterstützung bei Teams-/Zoom-Raumkonten und Geräteverwaltung",
      "Zusammenarbeit mit Ihrem internen IT-Service als verlängerte Werkbank",
    ],
  },
];

export const msProcess = [
  {
    step: "01",
    title: "Bestandsaufnahme",
    text: "Wir erfassen Räume, Technik, Standorte und den aktuellen Betriebszustand und prüfen den geeigneten Serviceumfang.",
  },
  {
    step: "02",
    title: "Service-Design",
    text: "Gemeinsam definieren wir Leistungsumfang, Servicezeiten, Erreichbarkeit, Eskalationswege und Schnittstellen zu Ihrer IT.",
  },
  {
    step: "03",
    title: "Onboarding",
    text: "Dokumentation, Monitoring-Anbindung, Ticket-Kanäle und Ansprechpartner werden eingerichtet und den Nutzern kommuniziert.",
  },
  {
    step: "04",
    title: "Betrieb",
    text: "Service Desk, Monitoring, Entstörung und Wartung laufen nach ITIL v4 – mit dokumentierten Vorgängen je Raum.",
  },
  {
    step: "05",
    title: "Review & Weiterentwicklung",
    text: "In regelmäßigen Service-Terminen bewerten wir Kennzahlen, Nutzung und offene Themen und planen Optimierungen.",
  },
];

export const msFaqs = [
  {
    question: "Was sind Managed Services für Konferenz- und Medientechnik?",
    answer:
      "Managed Services bedeuten, dass SLT Technology Group den laufenden Betrieb Ihrer AV- und Konferenztechnik übernimmt: zentraler Service Desk für Anwender, proaktives Monitoring der Systeme, Entstörung, planbare Wartung sowie Reporting und Weiterentwicklung – strukturiert nach ITIL v4.",
  },
  {
    question: "Übernehmt ihr auch Anlagen, die ein anderer Integrator installiert hat?",
    answer:
      "Die Übernahme wird im Rahmen einer Bestandsaufnahme individuell geprüft; eine pauschale Zusage für Fremdanlagen geben wir nicht.",
  },
  {
    question: "Welche Reaktionszeiten und SLAs bietet ihr?",
    answer:
      "CARE Plus bietet Montag bis Freitag von 08:00 bis 17:00 Uhr eine Reaktion innerhalb von vier Stunden mit Beginn der Remote-Analyse; falls remote nicht lösbar, erfolgt der Vor-Ort-Einsatz innerhalb von zwei Geschäftstagen. CARE Basic bietet definierte Reaktionszeiten optional. CARE Enterprise vereinbart priorisierte Reaktionszeiten nach Störungsklasse. Reaktionszeit ist keine garantierte Wiederherstellungszeit.",
  },
  {
    question: "Funktionieren Managed Services auch für mehrere Standorte?",
    answer:
      "Ja, Multi-Site ist der Regelfall. Monitoring und Ticketing laufen zentral über alle Standorte, während Vor-Ort-Einsätze über unser Technikernetz und die Standorte Krefeld und Bonn koordiniert werden.",
  },
  {
    question: "Wie greifen Managed Services und unsere interne IT ineinander?",
    answer:
      "Wir arbeiten als verlängerte Werkbank Ihrer IT. Durch ITIL-v4-konforme Prozesse lassen sich Incident-, Problem- und Change-Management sauber an bestehende IT-Service-Strukturen und Ticketsysteme andocken; Zuständigkeiten und Eskalationswege werden vorab schriftlich festgelegt.",
  },
  {
    question: "Warum sind Managed Services für Unternehmen sinnvoll?",
    answer:
      "Weil Störungen an Konferenz- und Medientechnik direkt Arbeitszeit kosten. Ein Managed Service verlagert Überwachung, Entstörung und Wartung auf einen festen Partner: Anwender haben eine Anlaufstelle, die interne IT wird entlastet, Ausfälle werden früher erkannt und die Betriebskosten sind als monatliche Pauschale planbar statt als unvorhersehbare Einzeleinsätze.",
  },
  {
    question: "Was ist der Unterschied zwischen Managed Services und klassischer Wartung?",
    answer:
      "Klassische Wartung ist ein wiederkehrender Prüftermin plus Reparatur im Störungsfall. Managed Services umfassen zusätzlich den laufenden Betrieb: Service Desk für Anwender, kontinuierliches Monitoring, Ticketing mit definierten Reaktionszeiten, Reporting und Optimierungsempfehlungen. Wartung ist damit ein Baustein innerhalb des Managed Service.",
  },
  {
    question: "Was kostet ein Managed-Service-Vertrag?",
    answer:
      "Die Kosten hängen von Raumanzahl, Technikstand, Servicezeiten und gewünschtem Leistungsmodell ab. Nach der Bestandsaufnahme erhalten Sie ein Angebot mit fester monatlicher Servicepauschale, sodass der AV-Betrieb budgetierbar wird.",
  },
];

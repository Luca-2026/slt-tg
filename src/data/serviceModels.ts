// Editorial source: user-supplied service-model brief, 31 October 2026.
export const serviceModels = [
  {
    id: "basic", name: "SLT CARE Basic", focus: "Wartungsvertrag Medientechnik",
    description: "Für einzelne Konferenzräume oder Standorte, die planbar gewartet werden sollen, ohne laufende Betriebsführung.",
    includes: ["Jährlicher Vor-Ort-Wartungstermin durch einen Medientechniker", "Firmware- und Software-Updates aller netzwerkfähigen Komponenten auf herstellerfreigegebene Stände", "Funktionsprüfung aller Audio-, Video- und Steuerungskomponenten", "Sichtprüfung von Verkabelung, Halterungen und Montagepunkten", "Batteriewechsel an Sensoren und Fernbedienungen inklusive Neukopplung", "Digitaler Wartungsbericht je Einsatz"],
    optional: ["Zweiter Vor-Ort-Termin pro Jahr", "Remote-Support-Kontingent", "Definierte Reaktionszeiten (SLA-Erweiterung)"],
    serviceLevel: [], prerequisites: "", conditions: "Laufzeit 12 Monate mit automatischer Verlängerung. Störungseinsätze außerhalb des Wartungstermins nach Aufwand. Preis auf Anfrage.",
    terms: { minimumMonths: 12, automaticRenewal: true },
  },
  {
    id: "plus", name: "SLT CARE Plus", focus: "Managed Service je Raum",
    description: "Für Unternehmen mit mehreren Besprechungsräumen auf Microsoft Teams Rooms oder vergleichbaren Plattformen, die Monitoring, Updates und Support abgeben wollen.",
    includes: ["Aufnahme jedes Raums in unser zentrales Monitoring über das Teams Rooms Pro Management Portal und das Teams Admin Center", "Proaktive Störungserkennung mit Alarmierung – in der Regel, bevor der erste Nutzer etwas meldet", "Firmware- und Software-Updates in abgestimmten Wartungsfenstern außerhalb der Nutzungszeiten", "Remote-Störungsanalyse und -behebung inklusive Abwicklung von Herstellergarantiefällen", "Zentrale Störungsannahme per Ticket und Telefon", "Quartalsweiser Statusbericht zu Verfügbarkeit, Störungen und Updates", "Vorzugskonditionen für Vor-Ort-Einsätze und Zusatzleistungen"],
    optional: [],
    serviceLevel: ["Servicezeit Montag bis Freitag, 08:00 bis 17:00 Uhr", "Reaktion auf Störungsmeldungen innerhalb von 4 Stunden, Beginn der Remote-Analyse", "Vor-Ort-Einsatz, falls remote nicht lösbar, innerhalb von 2 Geschäftstagen", "Raumausfälle werden vor Einzelfunktionsstörungen behandelt"],
    prerequisites: "Teams Rooms Pro Lizenz je Raum sowie ein administrativer Zugang für SLT Technology Group auf die Management-Portale; Einrichtung gemeinsam mit Ihrer IT bei Servicebeginn.",
    conditions: "Buchbar je Raum, für einzelne Räume bis zum gesamten Standort. Mindestlaufzeit 12 Monate, danach monatlich kündbar. Preis je Raum und Monat auf Anfrage, gestaffelt nach Raumanzahl.",
    terms: { minimumMonths: 12, cancellationMonthsAfterMinimum: 1, remoteResponseHours: 4, onsiteBusinessDays: 2, serviceWeekdays: [1, 2, 3, 4, 5], serviceStart: "08:00", serviceEnd: "17:00", teamsRoomsProRequired: true },
  },
  {
    id: "enterprise", name: "SLT CARE Enterprise", focus: "Anlagen- und Standortbetrieb",
    description: "Für komplexe Installationen, mehrere Standorte oder Anlagen mit besonderen Anforderungen: Konferenzzentren, Veranstaltungsräume, LED-Wände, Beschallungs- und Lichtsteuerungen.",
    includes: ["Alle Leistungen aus CARE Plus, erweitert auf die gesamte Anlage statt einzelner Räume", "Monitoring aller netzwerkfähigen Geräte und der zugehörigen Netzwerkinfrastruktur", "Regelmäßige Vor-Ort-Wartungen inklusive Reinigung, Helligkeits- und Funktionsabgleich, Foto-Dokumentation", "Festes Vor-Ort-Stundenkontingent pro Jahr für Störungen und Anpassungen", "Fester technischer Ansprechpartner mit Anlagenkenntnis", "Priorisierte Ersatzteilbereitstellung aus einem Komponentenpool", "Hubarbeitsbühne und Sonderlogistik für Outdoor- und Hochmontagen aus unserer Unternehmensgruppe", "Auftragsverarbeitungsvertrag und technisch-organisatorische Maßnahmen als Vertragsbestandteil"],
    serviceLevel: ["Priorisierte Reaktionszeiten nach Störungsklasse (Totalausfall / Teilausfall), vertraglich zugesichert", "Service-Gutschrift bei verfehlter Reaktionszeit"],
    optional: ["Cloud-Monitoring der LED-Technik über Hersteller-Plattformen mit automatischer Alarmierung", "Erweiterte Servicezeiten"],
    prerequisites: "", conditions: "Individueller Servicevertrag, Laufzeit und Kontingent nach Vereinbarung. Preis auf Anfrage.",
    terms: { individuallyAgreedTerm: true, responseByIncidentClass: true, serviceCredit: true },
  },
];

export const serviceComparison = [
  { label: "Zielgruppe", values: ["Einzelne Räume, Standorte", "Mehrere Räume, Teams Rooms", "Komplexe Anlagen, Multi-Site"] },
  { label: "Vor-Ort-Wartung", values: ["1× jährlich", "Nach Bedarf", "Mehrfach, inkl. Reinigung"] },
  { label: "Updates", values: ["Beim Wartungstermin", "Laufend in Wartungsfenstern", "Laufend in Wartungsfenstern"] },
  { label: "Proaktives Monitoring", values: ["Nicht enthalten", "Enthalten", "Erweitert"] },
  { label: "Ticket und Telefon", values: ["Nicht enthalten", "Enthalten", "Enthalten"] },
  { label: "Reaktionszeit", values: ["Optional", "4 h remote, 2 Geschäftstage vor Ort", "Nach Störungsklasse, zugesichert"] },
  { label: "Vor-Ort-Kontingent", values: ["Nicht enthalten", "Vorzugskonditionen", "Inkludiert"] },
  { label: "Ersatzteilpool", values: ["Nicht enthalten", "Garantieabwicklung", "Priorisiert"] },
  { label: "Reporting", values: ["Wartungsbericht", "Quartalsbericht", "Quartalsbericht, Protokolle"] },
  { label: "Laufzeit", values: ["12 Monate", "12 Monate, dann monatlich kündbar", "Individuell"] },
  { label: "Preis", values: ["Auf Anfrage", "Auf Anfrage, je Raum", "Auf Anfrage"] },
];
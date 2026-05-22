export interface LocalSEOCity {
  slug: string;
  name: string;
  region: string;
  description: string;
  coordinates: { lat: string; lng: string };
}

export interface LocalSEOService {
  title: string;
  description: string;
  link?: string;
}

export interface LocalSEOTopic {
  baseSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: (city: string) => string;
  heroSubtitle: (city: string) => string;
  intro: (city: string) => string;
  services: LocalSEOService[];
  faqItems: (city: string) => { question: string; answer: string }[];
}

const bonnRegion = ["Bonn", "Köln"];

function locationAnswer(city: string): string {
  if (city === "Bonn") {
    return `Ja, mit unserem Standort direkt in Bonn (Drachenburgstraße 8) sind wir vor Ort und betreuen Unternehmen in ${city} und der gesamten Region.`;
  }
  if (city === "Köln") {
    return `Ja, neben unserem Hauptsitz in Krefeld betreiben wir einen Standort in Bonn – ideal für kurze Wege nach ${city} und ins gesamte Rheinland.`;
  }
  return `Ja, von unserem Hauptsitz in Krefeld und unserem Standort in Bonn sind wir schnell in ${city} und der gesamten Region vor Ort.`;
}

function supportAnswer(city: string): string {
  if (bonnRegion.includes(city)) {
    return `Ja, über unseren Standort in Bonn bieten wir Service-Verträge mit garantierten Reaktionszeiten, Remote-Monitoring und regelmäßiger Wartung – besonders kurze Wege für ${city} und Umgebung.`;
  }
  return `Ja, wir bieten Service-Verträge mit garantierten Reaktionszeiten, Remote-Monitoring und regelmäßiger Wartung für alle installierten Systeme in ${city} und Umgebung.`;
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
    metaTitle: "Medientechnik & AV-Integration",
    metaDescription: "Enterprise-Medientechnik & AV-Integration für Konzerne und großen Mittelstand",
    heroTitle: (city) => `Medientechnik & AV-Integration ${city}`,
    heroSubtitle: (city) => `Enterprise-AV-Systemhaus für Konzerne und großen Mittelstand in ${city}: Fachplanung, standardisierte Rollouts, Managed Services – herstellerneutral und partnerschaftlich.`,
    intro: (city) => `Als zertifizierter Fachplaner und Integrator für Enterprise-Medientechnik betreuen wir Konzerne und großen Mittelstand in ${city} und der gesamten Region NRW. Von der Bedarfsanalyse über standortübergreifende Rollouts bis zum Managed Service – termingerecht, budgetsicher und mit klaren SLAs.`,

    services: [
      { title: "Videokonferenzsysteme", description: "Microsoft Teams Rooms, Zoom Rooms und herstellerneutrale Lösungen für produktive Meetings.", link: "/loesungen#konferenzraum-detail" },
      { title: "Displays & Visualisierung", description: "Interaktive Touch-Displays, LED-Wände und professionelle Präsentationsmonitore.", link: "/loesungen#empfang-detail" },
      { title: "Audiotechnik", description: "Deckenmikrofone, DSP-Systeme und Beschallungslösungen für kristallklare Kommunikation.", link: "/technologien#audio" },
      { title: "Mediensteuerung", description: "Intuitive Touch-Panel-Steuerungen und automatisierte Raumszenarien mit Crestron, Q-Sys & Co.", link: "/technologien#steuerung" },
      { title: "Digital Signage", description: "Digitale Beschilderung, Info-Displays und Empfangsbereich-Lösungen.", link: "/loesungen#empfang-detail" },
      { title: "IT-Infrastruktur & Netzwerk", description: "Strukturierte Verkabelung, Enterprise WLAN, Managed Switches und AV-over-IP für eine stabile Basis.", link: "/technologien#it-infrastruktur" },
      { title: "Installation & Integration", description: "Professionelle Montage, Verkabelung und Inbetriebnahme aller Systeme.", link: "/leistungen#integration" },
    ],
    faqItems: (city) => [
      { question: `Bieten Sie Medientechnik-Installation in ${city} an?`, answer: locationAnswer(city) },
      { question: `Was kostet ein Konferenzraum-Projekt in ${city}?`, answer: `Die Kosten hängen von Raumgröße, gewünschter Ausstattung und Komplexität ab. Wir erstellen Ihnen nach einem kostenfreien Erstgespräch ein individuelles Angebot.` },
      { question: `Welche Hersteller setzen Sie ein?`, answer: `Wir beraten herstellerneutral und arbeiten mit führenden Marken wie Crestron, Shure, Sennheiser, Barco, Samsung, Q-Sys und vielen weiteren zusammen.` },
      { question: `Bieten Sie auch Wartung und Support in ${city}?`, answer: supportAnswer(city) },
    ],
  },
  konferenztechnik: {
    baseSlug: "konferenztechnik",
    title: "Konferenztechnik",
    metaTitle: "Konferenztechnik & Boardroom-Integration",
    metaDescription: "Enterprise-Konferenztechnik & Boardroom-Integration für Konzerne",
    heroTitle: (city) => `Konferenztechnik & Boardroom-Integration ${city}`,
    heroSubtitle: (city) => `Standardisierte Konferenzraum-Rollouts für Konzerne und großen Mittelstand in ${city}: Huddle bis Boardroom, Microsoft Teams Rooms, Zoom Rooms, herstellerneutral integriert.`,
    intro: (city) => `Wir planen, integrieren und betreuen Konferenz- und Boardroom-Technik für Konzerne und großen Mittelstand in ${city} und ganz NRW. Vom Huddle Space bis zum repräsentativen Boardroom – standardisierbar für Multi-Site-Rollouts.`,

    services: [
      { title: "Microsoft Teams Rooms", description: "Zertifizierte Teams-Raum-Systeme für nahtlose Zusammenarbeit.", link: "/loesungen#konferenzraum-detail" },
      { title: "Zoom Rooms", description: "Professionelle Zoom-Raumlösungen für hybride Meetings.", link: "/loesungen#konferenzraum-detail" },
      { title: "Raumakustik & Audio", description: "Akustikberatung und Deckenmikrofone für beste Sprachverständlichkeit.", link: "/technologien#audio" },
      { title: "Fachplanung & Beratung", description: "Bedarfsgerechte Konzepte von der Analyse bis zur Ausschreibung.", link: "/leistungen#konzeption" },
      { title: "Hybride Meeting-Lösungen", description: "Brücken zwischen Präsenz- und Remote-Teilnehmern.", link: "/loesungen#konferenzraum-detail" },
      { title: "Service & Betrieb", description: "Wartung, Remote-Monitoring und garantierte Reaktionszeiten.", link: "/leistungen#service" },
      { title: "IT-Infrastruktur & Netzwerk", description: "Strukturierte Verkabelung, Enterprise WLAN und Netzwerklösungen als Basis für moderne AV-Systeme.", link: "/technologien#it-infrastruktur" },
    ],
    faqItems: (city) => [
      { question: `Planen Sie Konferenzräume in ${city}?`, answer: bonnRegion.includes(city) ? `Ja, mit unserem Standort in Bonn sind wir als Fachplaner und Integrator direkt in der Region ${city} vor Ort. Von der Konzeption bis zur schlüsselfertigen Übergabe.` : `Ja, wir sind als Fachplaner und Integrator in ${city} und ganz NRW tätig – mit Standorten in Krefeld und Bonn. Von der Konzeption bis zur schlüsselfertigen Übergabe.` },
      { question: `Wie lange dauert ein Konferenzraum-Projekt?`, answer: `Je nach Umfang rechnen Sie mit 4-12 Wochen von der Planung bis zur Inbetriebnahme. Einfache Huddle Spaces können auch schneller realisiert werden.` },
      { question: `Unterstützen Sie bei der Finanzierung?`, answer: `Ja, wir bieten verschiedene Finanzierungsmodelle an – von Leasing über Mietkauf bis zu AV-as-a-Service-Konzepten.` },
    ],
  },
  videokonferenz: {
    baseSlug: "videokonferenz",
    title: "Videokonferenz-Lösungen",
    metaTitle: "Videokonferenz & Hybrid-Meeting-Lösungen",
    metaDescription: "Enterprise-Videokonferenz & Hybrid-Meeting-Lösungen für Konzerne",
    heroTitle: (city) => `Videokonferenz & Hybrid-Meeting ${city}`,
    heroSubtitle: (city) => `Zertifizierte Videokonferenz- und Hybrid-Meeting-Systeme für Konzerne in ${city}: Microsoft Teams Rooms, Zoom Rooms, Webex – plattformneutral integriert und standardisierbar.`,
    intro: (city) => `Hybrides Arbeiten erfordert zuverlässige Enterprise-Videokonferenztechnik. Wir planen und installieren standardisierbare Systeme für Konzerne in ${city} – von der KI-Kamera über Deckenmikrofone bis zur kompletten Raumintegration mit Microsoft Teams Rooms oder Zoom Rooms.`,

    services: [
      { title: "Microsoft Teams Rooms", description: "Zertifizierte Hardware und nahtlose Integration in Ihre Microsoft-365-Umgebung.", link: "/loesungen#konferenzraum-detail" },
      { title: "Zoom Rooms", description: "Professionelle Zoom-Raumsysteme für einfache und zuverlässige Videokonferenzen.", link: "/loesungen#konferenzraum-detail" },
      { title: "BYOD-Lösungen", description: "Bring-Your-Own-Device-Konzepte mit drahtloser Präsentation via Barco ClickShare.", link: "/technologien#praesentationstechnik" },
      { title: "Kameras & Mikrofone", description: "KI-gestützte Kamerasysteme und Deckenmikrofone für natürliche Kommunikation.", link: "/technologien#videokonferenz" },
      { title: "Displays & Soundbars", description: "Professionelle Displays und integrierte Audiolösungen für jeden Raumtyp.", link: "/technologien#displays" },
      { title: "Netzwerk & Infrastruktur", description: "Bandbreiten-Optimierung und Quality-of-Service für stabile Videokonferenzen.", link: "/technologien#it-infrastruktur" },
    ],
    faqItems: (city) => [
      { question: `Welches Videokonferenzsystem passt für mein Unternehmen in ${city}?`, answer: `Das hängt von Ihrer bestehenden IT-Infrastruktur ab. Nutzen Sie Microsoft 365, empfehlen wir Teams Rooms. Nutzen Sie Zoom, setzen wir auf Zoom Rooms. Wir beraten Sie herstellerneutral.` },
      { question: `Was kostet ein Videokonferenzsystem?`, answer: `Ein Huddle Space startet ab ca. 3.000 €, ein vollausgestatteter Meetingraum liegt bei 8.000–25.000 €. Boardrooms und Speziallösungen werden individuell kalkuliert.` },
      { question: `Installieren Sie Videokonferenzsysteme in ${city}?`, answer: locationAnswer(city) },
      { question: `Bieten Sie Wartung für Videokonferenzsysteme?`, answer: supportAnswer(city) },
    ],
  },
  "it-netzwerk": {
    baseSlug: "it-netzwerk",
    title: "IT-Netzwerktechnik",
    metaTitle: "IT-Netzwerk & Enterprise-Infrastruktur",
    metaDescription: "Enterprise-IT-Netzwerk: Strukturierte Verkabelung, Cisco/Aruba, AV-over-IP",
    heroTitle: (city) => `IT-Netzwerk & Enterprise-Infrastruktur ${city}`,
    heroSubtitle: (city) => `Enterprise-Netzwerkinfrastruktur für Konzerne in ${city}: Strukturierte Verkabelung, Cisco/Aruba/Ubiquiti, AV-over-IP, Managed Services – die Basis für moderne AV-Systeme.`,
    intro: (city) => `Moderne Enterprise-Medientechnik funktioniert nur auf einer stabilen IT-Infrastruktur. Wir planen und installieren Netzwerklösungen für Konzerne in ${city} – von strukturierter Verkabelung über Enterprise-WLAN-Ausleuchtung bis zu AV-over-IP-Architekturen.`,

    services: [
      { title: "Strukturierte Verkabelung", description: "Cat6a/Cat7-Verkabelung nach DIN EN 50173 für zukunftssichere Infrastruktur." },
      { title: "Enterprise WLAN", description: "Professionelle WLAN-Ausleuchtung und -Planung mit Ubiquiti und Herstellern wie Aruba." },
      { title: "Managed Switches", description: "VLAN-Segmentierung, PoE und Quality-of-Service für AV- und IT-Konvergenz." },
      { title: "AV-over-IP", description: "Signalverteilung über das Netzwerk für flexible und skalierbare AV-Lösungen.", link: "/technologien#it-infrastruktur" },
      { title: "Serverraum & Schranksysteme", description: "19-Zoll-Racks, Patchfelder und Kabelmanagement für saubere Infrastruktur." },
      { title: "Netzwerk-Monitoring", description: "Proaktive Überwachung und Alarmierung für maximale Verfügbarkeit.", link: "/leistungen#service" },
    ],
    faqItems: (city) => [
      { question: `Bieten Sie IT-Netzwerkinstallation in ${city} an?`, answer: locationAnswer(city) },
      { question: `Was kostet eine Netzwerk-Infrastruktur?`, answer: `Die Kosten hängen von der Gebäudegröße, Anzahl der Ports und gewünschten Standards ab. Wir erstellen Ihnen ein individuelles Angebot nach einer Vor-Ort-Begehung.` },
      { question: `Arbeiten Sie mit bestehender IT-Infrastruktur?`, answer: `Ja, wir integrieren uns in bestehende Netzwerke und IT-Strukturen. Eine vorherige Analyse stellt sicher, dass die AV-Systeme optimal eingebunden werden.` },
      { question: `Bieten Sie Netzwerk-Wartung in ${city}?`, answer: supportAnswer(city) },
    ],
  },
  "digital-signage": {
    baseSlug: "digital-signage",
    title: "Digital Signage",
    metaTitle: "Digital Signage & LED-Werbeanlagen",
    metaDescription: "Enterprise-Digital-Signage, LED-Wände und Wegeleitsysteme für Konzerne",
    heroTitle: (city) => `Digital Signage & LED-Werbeanlagen ${city}`,
    heroSubtitle: (city) => `Enterprise-Digital-Signage für Konzerne und Industrie in ${city}: Empfangs- und Lobby-Displays, LED-Werbeanlagen, Wegeleitsysteme – zentral steuerbar, standortübergreifend.`,
    intro: (city) => `Von Empfangs-Displays über digitale Wegeleitsysteme bis zu großflächigen Outdoor-LED-Werbeanlagen – wir planen und betreiben Digital-Signage-Architekturen für Konzerne in ${city}. Zentrales Content-Management, Multi-Site-Rollout, Service- und Wartungsverträge.`,

    services: [
      { title: "Empfangs- & Lobby-Displays", description: "Professionelle Begrüßungslösungen und Raumbuchungssysteme.", link: "/loesungen#empfang-detail" },
      { title: "Info- & Wegeleitsysteme", description: "Digitale Orientierung für Besucher und Mitarbeiter." },
      { title: "LED-Wände", description: "Großflächige LED-Videowände für beeindruckende Darstellungen.", link: "/technologien#displays" },
      { title: "Content-Management", description: "Zentrale Verwaltung aller Inhalte und Displays über eine Plattform." },
      { title: "Raumbeschilderung", description: "Digitale Türschilder mit Kalender-Integration für Microsoft 365 und Google." },
      { title: "Wartung & Support", description: "Remote-Monitoring und proaktiver Service für maximale Verfügbarkeit.", link: "/leistungen#service" },
    ],
    faqItems: (city) => [
      { question: `Installieren Sie Digital Signage in ${city}?`, answer: locationAnswer(city) },
      { question: `Kann ich die Inhalte selbst verwalten?`, answer: `Ja, alle unsere Digital-Signage-Lösungen beinhalten ein Content-Management-System, das Sie selbst bedienen können. Wir schulen Ihre Mitarbeiter bei der Übergabe.` },
      { question: `Was kostet eine Digital-Signage-Lösung?`, answer: `Einzelne Info-Displays starten ab ca. 1.500 €. Größere Projekte mit LED-Wänden und Content-Management werden individuell kalkuliert.` },
    ],
  },
};

/**
 * Thin-Content-Schutz: Diese Topic+City-Kombinationen werden bis zum
 * Prerender/Content-Refactor von der Indexierung ausgeschlossen.
 * Format: "topic:city"
 */
export const NOINDEX_COMBINATIONS: ReadonlySet<string> = new Set([
  // Köln (3) – medientechnik & videokonferenz bleiben indexierbar
  "konferenztechnik:koeln",
  "it-netzwerk:koeln",
  "digital-signage:koeln",
  // Essen (5)
  "medientechnik:essen",
  "konferenztechnik:essen",
  "videokonferenz:essen",
  "it-netzwerk:essen",
  "digital-signage:essen",
  // Duisburg (5)
  "medientechnik:duisburg",
  "konferenztechnik:duisburg",
  "videokonferenz:duisburg",
  "it-netzwerk:duisburg",
  "digital-signage:duisburg",
  // Mönchengladbach (5)
  "medientechnik:moenchengladbach",
  "konferenztechnik:moenchengladbach",
  "videokonferenz:moenchengladbach",
  "it-netzwerk:moenchengladbach",
  "digital-signage:moenchengladbach",
]);

export function isNoindex(topic: string, city: string): boolean {
  return NOINDEX_COMBINATIONS.has(`${topic}:${city}`);
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
// CONTENT OVERRIDES – unique, stadt+topic-spezifischer Content
// für die 19 indexierbaren Landingpages.
// Key-Format: "<topic-slug>-<city-slug>"
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
  // ─── KREFELD ───────────────────────────────────────────
  "medientechnik-krefeld": {
    heroTitle: "Medientechnik in Krefeld – direkt vor Ihrer Tür",
    heroSubtitle:
      "Von unserem Hauptsitz in Krefeld-Fichtenhain aus betreuen wir Unternehmen am Niederrhein, im Ruhrgebiet und entlang der Rheinschiene. Lagerflächen, Vorführraum und Werkstatt unter einem Dach.",
    intro:
      "Unser Hauptstandort in der Anrather Straße 291 ist mehr als eine Adresse – er ist unser Zentrum für Beratung, Installation und Service. Mit direkter A44-Anbindung erreichen wir Kunden in Mönchengladbach, Düsseldorf und im gesamten Ruhrgebiet innerhalb einer Stunde. Als Krefelder Unternehmen kennen wir die Industriekultur der Region: vom Maschinenbau über Logistik bis zur Chemieindustrie. Wir haben Konferenzräume für mittelständische Traditionsunternehmen ebenso installiert wie moderne Kollaborationsflächen für junge Tech-Firmen am Niederrhein.",
    services: [
      "Vor-Ort-Beratung und Raumbesichtigung durch unsere Krefelder Projektleiter",
      "Installation von Medientechnik-Komplettlösungen für Mittelstand und Konzerne",
      "24/7-Wartungsverträge mit Reaktionszeit ab 4 Stunden am Standort Krefeld",
      "Showroom und Vorführraum direkt in Krefeld-Fichtenhain",
      "Elektrofachkraft-Installationen nach VDE/DGUV-Vorschriften",
      "Integration in bestehende IT-Infrastruktur vor Ort",
    ],
    faqItems: [
      {
        question: "Kann ich bei Ihnen in Krefeld Medientechnik live ausprobieren?",
        answer:
          "Ja. In unserem Vorführraum in der Anrather Straße 291 können Sie aktuelle Displays, Videokonferenzsysteme und Audio-Lösungen persönlich testen. Termine gerne nach Vereinbarung – rufen Sie uns an oder nutzen Sie unser Kontaktformular.",
      },
      {
        question: "Wie schnell können Sie bei einer Störung in Krefeld vor Ort sein?",
        answer:
          "Für Kunden mit Wartungsvertrag garantieren wir Reaktionszeiten ab 4 Stunden im Krefelder Stadtgebiet. Bei kritischen Meetings und Veranstaltungen sind wir auch außerhalb der Geschäftszeiten erreichbar.",
      },
      {
        question: "Welche Branchen in Krefeld betreuen Sie?",
        answer:
          "Unsere Kunden am Niederrhein kommen aus Chemie, Logistik, Maschinenbau, Steuerberatung und der öffentlichen Verwaltung. Typische Projekte sind Boardrooms, Schulungsräume und hybride Besprechungszonen für 8 bis 40 Personen.",
      },
    ],
    localAnchor: "Hauptstandort Krefeld-Fichtenhain, A44",
    localIndustries: ["Chemie", "Maschinenbau", "Logistik", "Steuerberatung"],
  },

  "konferenztechnik-krefeld": {
    heroTitle: "Konferenztechnik Krefeld – Lösungen aus einer Hand",
    heroSubtitle:
      "Ihr Spezialist für Konferenzräume von 4 bis 400 Personen. Wir planen, installieren und betreuen – direkt aus Krefeld.",
    intro:
      "Ein moderner Konferenzraum ist mehr als ein Display an der Wand. Er ist ein System aus Bild, Ton, Steuerung, Netzwerk und Akustik – und alle Komponenten müssen exakt aufeinander abgestimmt sein. Unsere Krefelder Fachplaner begleiten Sie von der ersten Skizze bis zur finalen Abnahme. Wir arbeiten mit Architekten, Innenausbauern und IT-Abteilungen in der Region zusammen, um Räume zu schaffen, die sowohl technisch präzise als auch intuitiv bedienbar sind. Für Krefelder Unternehmen ist der kurze Weg zu unserem Standort ein messbarer Vorteil: Baustellenbesuche, Abnahmen und Nachjustierungen erfolgen oft am selben Tag.",
    services: [
      "Raumakustik-Messung und passive akustische Ertüchtigung",
      "Planung nach VDI 6000 für professionelle Konferenzräume",
      "Installation von Kabeltrassen, Medienanschlüssen und Steuerpulten",
      "Integration in Gebäudeleittechnik (Licht, Verschattung, Klima)",
      "Schulung der Nutzer und Key-User vor Ort in Krefeld",
      "Dokumentation, Übergabe, Wartungsvertrag",
    ],
    faqItems: [
      {
        question: "Wie lange dauert die Installation eines Konferenzraums in Krefeld typischerweise?",
        answer:
          "Nach Planungsabschluss und Materialverfügbarkeit setzen wir mittlere Räume (8–16 Personen) meist innerhalb von 2–3 Tagen um. Großprojekte wie Boardrooms oder Veranstaltungssäle kalkulieren wir mit 1–2 Wochen Bauzeit, oft in Etappen parallel zum Bürobetrieb.",
      },
      {
        question: "Arbeiten Sie auch mit Krefelder Architekten und Innenausbauern zusammen?",
        answer:
          "Ja, regelmäßig. Wir liefern frühzeitig Medientechnik-Planungsunterlagen für die Bauphase: Kabelwege, Medienpulte, Steckdosen-Positionierung, Deckenaussparungen für Beamer und Mikrofone. So vermeiden Sie teure Nacharbeiten.",
      },
      {
        question: "Können Sie auch bestehende Konferenzräume modernisieren?",
        answer:
          "Das ist unser Tagesgeschäft. Wir übernehmen von der Bestandsaufnahme bis zur kompletten Neuausstattung. Oft können wir bestehende Kabelwege und Möblierung weiter nutzen und nur die Technik modernisieren.",
      },
    ],
    localAnchor: "Standort Krefeld, Einzugsgebiet Niederrhein / Ruhrgebiet",
    localIndustries: ["Mittelstand", "Öffentliche Verwaltung", "Chemie", "Handel"],
  },

  "videokonferenz-krefeld": {
    heroTitle: "Videokonferenz-Lösungen in Krefeld",
    heroSubtitle:
      "Microsoft Teams Rooms, Zoom Rooms und BYOD-Systeme – wir bringen hybride Zusammenarbeit in Ihr Krefelder Unternehmen.",
    intro:
      "Hybride Arbeitsmodelle sind in mittelständischen Unternehmen am Niederrhein längst Alltag. Was fehlt, ist häufig die Technik, die diesen Alltag reibungslos macht. Wir installieren in Krefeld Videokonferenzsysteme, die ohne Einweisung bedienbar sind – vom kleinen Huddle Space mit Yealink-Bar bis zum Großraum-Setup mit Deckenmikrofon, KI-Kamera und dualer Projektion. Unsere Empfehlung hängt nicht vom Hersteller ab, sondern vom Raum: Wir beraten herstellerunabhängig und wählen Komponenten, die zu Ihrer bestehenden IT-Landschaft passen. Für viele unserer Krefelder Kunden ist das ein wichtiger Faktor – weil sie keine Lock-in-Situationen mit einem einzigen Anbieter wollen.",
    services: [
      "Zertifizierte Microsoft Teams Rooms und Zoom Rooms Integration",
      "BYOD-Systeme wie Barco ClickShare für flexible Nutzung",
      "KI-gestützte Kameras (Huddly, AVer, Logitech) mit automatischem Speaker-Tracking",
      "Shure- und Nureva-Audio für sprachverständliche hybride Meetings",
      "Verbindung zu bestehenden UC-Plattformen (Teams, Webex, Zoom, Google Meet)",
      "Testinstallation und Nutzer-Schulung vor Ort",
    ],
    faqItems: [
      {
        question: "Wir nutzen aktuell Teams – müssen wir das für Zoom-Meetings wechseln?",
        answer:
          "Nein. Moderne Teams-Rooms-Systeme können über „Direct Guest Join“ auch Zoom- und Webex-Meetings beitreten. Alternativ empfehlen wir BYOD-Systeme wie Barco ClickShare, die plattformunabhängig funktionieren – der Nutzer bringt sein eigenes Gerät mit und nutzt den Raum als reines Audio-/Video-Interface.",
      },
      {
        question: "Was kostet ein kleiner Videokonferenzraum für 4–6 Personen?",
        answer:
          "Bei einem Standard-Huddle-Room mit zertifizierter All-in-One-Bar (Kamera, Mikrofon, Lautsprecher) plus Display liegen wir typischerweise zwischen 4.500 und 9.000 Euro – abhängig von Display-Größe, Raumakustik und gewünschter Plattform-Zertifizierung. Bei größeren Räumen kommen Deckenmikrofone und PTZ-Kameras hinzu.",
      },
      {
        question: "Welche Verbindung braucht ein professionelles Videokonferenzsystem?",
        answer:
          "Für stabile Meetings in HD/1080p empfehlen wir mindestens 10 Mbit/s symmetrisch pro Raum plus QoS-Konfiguration im Netzwerk. Wir prüfen Ihr vorhandenes Netzwerk und konfigurieren die Priorisierung gegebenenfalls mit – das ist Teil unseres IT-Netzwerk-Angebots.",
      },
    ],
    localAnchor: "Krefelder Mittelstand mit hybrid arbeitender Belegschaft",
    localIndustries: ["IT", "Beratung", "Industrie", "Handel"],
  },

  "it-netzwerk-krefeld": {
    heroTitle: "IT-Netzwerk in Krefeld – das Fundament moderner Medientechnik",
    heroSubtitle:
      "Strukturierte Verkabelung, zertifizierte Access Points, performante Netzwerke. Vom Niederrhein bis ins Ruhrgebiet.",
    intro:
      "Digitale Transformation baut auf eine verlässliche Netzwerkinfrastruktur auf. In Krefeld und Umgebung setzen wir strukturierte Verkabelung nach CAT-7, installieren Cisco Meraki oder gleichwertige Enterprise-Access-Points und führen professionelle WLAN-Ausleuchtungen mit EKAHAU durch. Unser Spezialgebiet: Medientechnik und IT aus einer Hand. Weil wir beides selbst planen, vermeiden Sie die klassischen Schnittstellenprobleme zwischen AV-Integrator und IT-Dienstleister – Streaming-Probleme, Bandbreiten-Engpässe, VLAN-Konfigurationsfehler werden direkt bei uns gelöst.",
    services: [
      "Strukturierte Verkabelung nach CAT-7 inklusive Messung und Zertifizierung",
      "Cisco Meraki Installation und Konfiguration (Access Points, Switches, Firewalls)",
      "Professionelle WLAN-Ausleuchtung mit EKAHAU-Survey",
      "Netzwerk-Segmentierung und VLAN-Konfiguration für Medientechnik",
      "Anbindung von IoT-Geräten und digitalen Anwendungen",
      "24/7-Monitoring und Wartungsverträge",
    ],
    faqItems: [
      {
        question: "Was macht eine EKAHAU-Ausleuchtung besser als „probiertes“ WLAN?",
        answer:
          "EKAHAU misst die tatsächliche Signalstärke, Interferenzen und die optimale Access-Point-Platzierung in Ihrem Gebäude. Das Ergebnis: nachweisbar bessere Abdeckung mit oft weniger Access Points als bei „Bauchgefühl“-Installationen. Für unseren Kunden Sonoco haben wir so mehrere Werksstandorte im laufenden 24/7-Betrieb umgestellt – ohne Ausfall.",
      },
      {
        question: "Macht es Sinn, IT und Medientechnik vom selben Dienstleister installieren zu lassen?",
        answer:
          "Ja, gerade in Krefelder Mittelstandsbetrieben ist das unser Standard. Wenn eine Videokonferenz ruckelt, liegt es zu 60 Prozent am Netzwerk – nicht am Videosystem. Wir lokalisieren solche Probleme sofort, weil wir beide Ebenen kennen. Bei getrennten Dienstleistern folgt oft ein Schwarze-Peter-Spiel.",
      },
      {
        question: "Installieren Sie auch in Produktions- und Logistikhallen am Niederrhein?",
        answer:
          "Ja. Wir verlegen CAT-7 und installieren WLAN in Produktionsumgebungen, inklusive Industrial Access Points für raue Umgebungen, PoE+-Stromversorgung für IP-Kameras und IoT-Geräte, sowie robuste Schaltschränke in Schutzklasse IP54.",
      },
    ],
    localAnchor: "Produktions- und Industriestandorte Niederrhein",
    localIndustries: ["Logistik", "Produktion", "Chemie", "Verwaltung"],
  },

  "digital-signage-krefeld": {
    heroTitle: "Digital Signage in Krefeld",
    heroSubtitle:
      "Empfangsdisplays, Mitarbeiterinformation, Retail-Signage – wir planen und betreiben digitale Informationsflächen für Krefelder Unternehmen.",
    intro:
      "Digitale Displays haben den Empfangsbereich, die Kantine, die Produktion und den Verkaufsraum erreicht. Wir installieren Samsung-, LG- und Iiyama-Displays in professioneller Ausführung – von 32-Zoll-Info-Screens bis zu 105-Zoll-Ultra-Wide-Touchdisplays wie zuletzt für die Tourismus Information Bensersiel. Alle Installationen integrieren wir mit einem zentralen Content Management System (CMS), häufig von unserem Partner Connect Signage. So können Ihre Mitarbeitenden Inhalte selbst pflegen, ohne Technik-Know-how oder Abhängigkeit von externem Dienstleister. Für Krefelder Empfangsbereiche, Schulungsräume und Besucherleitsysteme ist das unser bewährter Standard.",
    services: [
      "Samsung QMC, LG und Iiyama Displays in professioneller Ausführung (24/7-geeignet)",
      "Interaktive Touchdisplays bis 105 Zoll",
      "Cloud-basiertes CMS (Connect Signage, Onelan, BrightSign)",
      "Installation, Montage, Inbetriebnahme",
      "Schulung für die eigenständige Content-Pflege",
      "Wartungsverträge mit Display-Austausch bei Defekt",
    ],
    faqItems: [
      {
        question: "Können wir Inhalte auf unseren Displays selbst aktualisieren?",
        answer:
          "Absolut. Das CMS unserer Installationen ist so konzipiert, dass Ihre Mitarbeitenden ohne IT-Kenntnisse Inhalte einstellen können – Bilder hochladen, Texte ändern, Zeitpläne setzen. Wir liefern Schulung und Vorlagen. Ein Beispiel: Für die Tourismus Information Bensersiel pflegt das Team Fährabfahrtzeiten, Gastro-Tipps und Freizeitangebote vollkommen selbstständig.",
      },
      {
        question: "Wie lange hält ein Digital Signage Display im Dauerbetrieb?",
        answer:
          "Professionelle Displays in 24/7-Ausführung haben typische Lebensdauern von 50.000 bis 70.000 Stunden Backlight – also 5 bis 8 Jahre im Dauereinsatz. Consumer-Fernseher fallen oft schon nach 12 bis 18 Monaten aus. Der Unterschied im Anschaffungspreis rechnet sich schnell.",
      },
      {
        question: "Welche Inhalte eignen sich für Digital Signage?",
        answer:
          "Die klassische Empfangsbegrüßung mit Besuchername, interne Mitarbeiterinformation, Kantinen-Menü, Schichtplan-Anzeige, Kennzahlen-Dashboard, Werbung und Produktinformation im Retail, Raumbelegungsanzeigen an Konferenzräumen. Wir helfen bei der Konzeption und liefern die passende Technik.",
      },
    ],
    localAnchor: "Empfangsbereiche und Produktionsstandorte in Krefeld",
    localIndustries: ["Handel", "Produktion", "Gesundheitswesen", "Öffentliche Verwaltung"],
  },

  // ─── BONN ──────────────────────────────────────────────
  "medientechnik-bonn": {
    heroTitle: "Medientechnik in Bonn – nah am Regierungsviertel",
    heroSubtitle:
      "Von unserem Standort in Bonn betreuen wir Bundesministerien, Unternehmen am Rhein und öffentliche Einrichtungen in der Region.",
    intro:
      "Bonn ist ein Sonderfall unter den deutschen Städten: Sitz mehrerer Bundesministerien, der Deutschen Welle, der DHL Group und eines der größten UN-Standorte in Deutschland. Die Anforderungen an Medientechnik sind entsprechend hoch – von VS-NfD-konformen Konferenzräumen bis zu mehrsprachigen Simultandolmetscher-Anlagen. Unser Standort in Bonn ist die logische Ergänzung zu unserer Krefelder Zentrale: Wir sind näher an Köln, Bonn und dem linken Rheinufer, ohne unsere Kunden auf einen einzigen Standort reduzieren zu müssen.",
    services: [
      "Planung und Installation für öffentliche Auftraggeber nach VOB",
      "Simultandolmetscher-Anlagen und mehrsprachige Beschallung",
      "Boardroom- und Präsidialraum-Ausstattung auf höchstem Standard",
      "VS-NfD-konforme Konferenztechnik und geschirmte Räume",
      "Integration in SINA-/SNS-Netzwerke (bei Bundesbehörden)",
      "Wartungsverträge mit DL-freigegebenen Technikern",
    ],
    faqItems: [
      {
        question: "Sind Sie als Dienstleister für den Bund in Bonn freigegeben?",
        answer:
          "Wir haben mehrere Jahre Erfahrung in der Zusammenarbeit mit Bundesministerien und öffentlichen Einrichtungen in Bonn. Für VS-NfD-Projekte sind unsere Techniker entsprechend geprüft und eingewiesen. Details gerne im persönlichen Gespräch – manche Referenzen können wir aus Vertraulichkeitsgründen nicht öffentlich nennen.",
      },
      {
        question: "Betreuen Sie auch UN-Einrichtungen in Bonn?",
        answer:
          "Wir haben einzelne Projekte für UN-nahe Einrichtungen und Forschungseinrichtungen am Bonner Campus umgesetzt. Die Anforderungen – Mehrsprachigkeit, Zugänglichkeit, internationale Standards – sind uns vertraut.",
      },
      {
        question: "Wie unterstützen Sie Ministerien bei Umbauten im laufenden Betrieb?",
        answer:
          "Wir arbeiten in öffentlichen Gebäuden grundsätzlich geplant und abgestimmt. Das bedeutet: klare Bauzeitenpläne, abgesicherte Materiallager, Zusammenarbeit mit der BImA und Gebäudeverwaltung, Staubschutzmaßnahmen in laufenden Büros. Kritische Technikwechsel machen wir oft außerhalb der Kernarbeitszeit.",
      },
    ],
    localAnchor: "Standort Bonn, Nähe zu Ministerien und UN-Campus",
    localIndustries: ["Bundesverwaltung", "DHL Group", "Deutsche Welle", "UN-Organisationen"],
  },

  "konferenztechnik-bonn": {
    heroTitle: "Konferenztechnik in Bonn – für Ministerien, Konzerne und KMU",
    heroSubtitle:
      "Vom kleinen Besprechungsraum bis zum repräsentativen Kongresssaal – unser Bonner Team plant und realisiert.",
    intro:
      "Bonn ist eine Stadt der Konferenzen – politisch wie wirtschaftlich. Wir haben in den letzten Jahren Konferenzräume für Bundesministerien, für den Hauptsitz der DHL Group und für mittelständische Unternehmen im Bonner Bogen ausgestattet. Die Bandbreite reicht vom einfachen Besprechungsraum bis zu hochkomplexen Sitzungssälen mit Simultandolmetscher-Kabinen und Medien-Regie. Für alle Projekte gilt: Wir planen nach VDI 6000, beachten die Brandschutz-Anforderungen öffentlicher Gebäude, und arbeiten eng mit den Hausverwaltungen zusammen.",
    services: [
      "VDI 6000-konforme Planung für repräsentative Konferenzräume",
      "Simultandolmetscher-Kabinen mit Konferenztechnik nach IEC 60914",
      "Saal-Beschallung und Sprachalarmierungsanlagen (SAA)",
      "Kameraregie und Streaming-Technik für hybride Bundeskonferenzen",
      "Medienpulte mit intuitiver Einhand-Bedienung",
      "Wartungsverträge mit Technischen Kräften vor Ort",
    ],
    faqItems: [
      {
        question: "Wie planen Sie Konferenzräume in denkmalgeschützten Bonner Gebäuden?",
        answer:
          "Denkmalschutz und moderne Technik schließen sich nicht aus – wir haben das mehrfach bewiesen. Die Kunst liegt in der unsichtbaren Integration: Mikrofone in Deckenleuchten, Displays in Paneelen versenkt, Kabelwege durch bestehende Leerrohre. Wir arbeiten mit dem Bonner Denkmalschutz und Architekten eng zusammen.",
      },
      {
        question: "Was ist eine Sprachalarmierungsanlage und wann brauche ich sie?",
        answer:
          "Eine SAA ist eine speziell zertifizierte Beschallung, die im Brandfall Durchsagen ermöglicht. In Versammlungsstätten, großen Bürogebäuden und öffentlichen Einrichtungen in Bonn ist sie oft bauordnungsrechtlich vorgeschrieben. Wir planen SAA nach DIN VDE 0833-4 und führen die Inbetriebnahme mit TÜV/Sachverständiger durch.",
      },
      {
        question: "Können Sie Dolmetscher-Anlagen auch für kleine Konferenzen realisieren?",
        answer:
          "Ja. Für kleine Sitzungen mit 2–3 Sprachen bieten wir Tour-Guide-ähnliche Funksysteme. Für große Veranstaltungen planen wir feste Kabinen mit IEC 60914-Konformität. Beides haben wir in Bonn mehrfach installiert.",
      },
    ],
    localAnchor: "Bundesstadt Bonn, Bonner Bogen, Regierungsviertel",
    localIndustries: ["Bundesverwaltung", "Post/Logistik", "Forschung", "Entwicklungszusammenarbeit"],
  },

  "videokonferenz-bonn": {
    heroTitle: "Videokonferenzsysteme in Bonn",
    heroSubtitle:
      "Hybride Zusammenarbeit auf höchstem Standard – für Ministerien, Konzerne und wachsende Unternehmen am Rhein.",
    intro:
      "Bonn nutzt Videokonferenzen intensiv – für Abstimmungen zwischen Berlin und Bonn, für internationale Zusammenarbeit im UN-Campus, für die täglichen Meetings von Großkonzernen wie DHL. Die Anforderungen: absolute Zuverlässigkeit, professionelle Audio- und Videoqualität, und manchmal zusätzlich Sicherheitsaspekte wie Abhörschutz in Ministeriumsräumen. Wir installieren Microsoft Teams Rooms, Cisco Webex Room Systems und plattformneutrale BYOD-Lösungen mit Barco ClickShare CX. Besonderer Fokus in Bonn: die sichere Integration in bestehende IT-Umgebungen mit mehrstufiger Authentifizierung.",
    services: [
      "Microsoft Teams Rooms und Cisco Webex Room Kits für Konzerne",
      "BYOD-Systeme mit Barco ClickShare CX für maximale Flexibilität",
      "Plattformneutrale Lösungen für Ministerien (Zoom, Teams, Webex gleichzeitig)",
      "Sichere Einbindung in Corporate-VPNs und segmentierte Netzwerke",
      "Integration in MS365, Google Workspace oder On-Premise-UC",
      "Shure, Nureva und Sennheiser Audio für verständliche Meetings",
    ],
    faqItems: [
      {
        question: "Wir nutzen aktuell mehrere UC-Plattformen parallel (Teams, Zoom, Webex). Geht das in einem Raum?",
        answer:
          "Ja, und zwar ohne Umstecken. Mit BYOD-Systemen wie Barco ClickShare CX bringt jeder Nutzer sein eigenes Gerät mit und nutzt den Raum nur als Audio-/Video-Interface. Die Plattform wählt der Nutzer individuell. Für festinstallierte Room-Systeme mit MS Teams Rooms funktioniert zusätzlich „Direct Guest Join“ für Zoom- und Webex-Meetings.",
      },
      {
        question: "Wie sicher sind Videokonferenzen gegenüber externen Lauschangriffen?",
        answer:
          "Moderne Room-Systeme verschlüsseln alle Signale Ende-zu-Ende (AES-256). Für besonders sensible Umgebungen in Bonner Ministerien planen wir zusätzlich geschirmte Räume (TEMPEST), abhörsichere Mikrofone und segmentierte VLAN-Bereiche. Standardmäßig bieten Teams- und Zoom-Rooms bereits ein sehr hohes Sicherheitsniveau.",
      },
      {
        question: "Wie lange dauert die Installation eines Videokonferenzraums in Bonn?",
        answer:
          "Ein Standardraum (6–10 Personen, zertifiziertes Teams Rooms Setup) ist in 1–2 Arbeitstagen installiert. Bei Ministeriums-Projekten mit besonderen Sicherheitsanforderungen oder Denkmalschutz-Randbedingungen kalkulieren wir mehr Zeit, oft mit vorab zertifizierter Prototyp-Phase.",
      },
    ],
    localAnchor: "Bonner Konzerne, Ministerien, UN-Einrichtungen",
    localIndustries: ["Bundesverwaltung", "Logistik", "Forschung", "Medien"],
  },

  "it-netzwerk-bonn": {
    heroTitle: "IT-Netzwerk und WLAN in Bonn",
    heroSubtitle:
      "Professionelle Netzwerkinfrastruktur für Konzerne, öffentliche Einrichtungen und wachsende KMU am Rhein.",
    intro:
      "IT-Netzwerke am Standort Bonn stellen besondere Anforderungen: Die Altbausubstanz im Regierungsviertel ist anders zu verkabeln als ein moderner Büroneubau im Bonner Bogen. Wir planen strukturierte Verkabelung nach CAT-7 sowohl in repräsentativen Altbauten als auch in industriellen Logistikzentren entlang der A59. Für die DHL-Group und andere Konzerne im Raum Bonn haben wir komplette Netzwerk-Segmentierungen umgesetzt – mit Trennung von Office-, Medientechnik-, Gast- und IoT-Netzen.",
    services: [
      "Strukturierte CAT-7-Verkabelung für Alt- und Neubauten",
      "Cisco Meraki und Aruba Enterprise-Access-Points",
      "WLAN-Ausleuchtung mit EKAHAU Pro für große Gebäude",
      "VLAN-Segmentierung für sichere Multi-Tenant-Netze",
      "Glasfaser-Backbone zwischen Gebäuden",
      "Anbindung an Corporate-WANs und sichere VPN-Gateways",
    ],
    faqItems: [
      {
        question: "Können Sie Netzwerke in denkmalgeschützten Bonner Altbauten modernisieren?",
        answer:
          "Das ist eine unserer Spezialitäten. Wir nutzen vorhandene Leerrohre und Kabelkanäle, arbeiten mit unsichtbaren Brüstungskanälen und verlegen Access Points hinter abgehängten Decken. Abstimmung mit Denkmalschutz, Architekten und Bauleitung ist Standard bei uns.",
      },
      {
        question: "Wie funktioniert eine Netzwerk-Segmentierung in der Praxis?",
        answer:
          "Wir trennen typischerweise in separate VLANs: Büro-Netzwerk (Mitarbeiter-PCs), Medientechnik-Netzwerk (Displays, Konferenztechnik), IoT-Netzwerk (Sensoren, Smart Building), Gast-WLAN, und Voice-Netzwerk (VoIP). Jedes VLAN hat eigene Firewall-Regeln, unterschiedliche Bandbreiten-Priorisierung und kann bei einem Vorfall isoliert werden.",
      },
      {
        question: "Betreuen Sie auch die UN-Einrichtungen in Bonn?",
        answer:
          "Wir haben für einzelne UN-nahe Einrichtungen und Forschungsinstitute am Bonner Campus gearbeitet. Die Anforderungen – Mehrsprachigkeit der Dokumentation, internationale Standards, strenge Sicherheitsprüfungen – sind uns vertraut.",
      },
    ],
    localAnchor: "Regierungsviertel, Bonner Bogen, Campus Poppelsdorf",
    localIndustries: ["Bundesverwaltung", "Post/Logistik", "Forschung", "KMU"],
  },

  "digital-signage-bonn": {
    heroTitle: "Digital Signage in Bonn",
    heroSubtitle:
      "Professionelle Display-Systeme für Empfangsbereiche, öffentliche Gebäude und Bonner Einzelhandel.",
    intro:
      "Bonner Einrichtungen – von Ministerien über Konzern-Empfangshallen bis zum Einzelhandel – setzen zunehmend auf digitale Informationsflächen. Wir installieren Samsung-, LG- und Iiyama-Displays in professioneller 24/7-Ausführung, richten zentrale Content-Management-Systeme ein und schulen die Nutzer zur selbstständigen Pflege. Unser Fokus in Bonn: die Integration in bestehende Corporate-Designs großer Organisationen und die Einhaltung der Barrierefreiheits-Anforderungen öffentlicher Einrichtungen.",
    services: [
      "Samsung, LG und Iiyama Professional Displays",
      "Interaktive Touchdisplays für Self-Service und Wegeleitung",
      "Cloud-CMS mit Rollen- und Rechtesystem für große Organisationen",
      "Barrierefreie Anzeigen nach BITV-Standard",
      "Videowand-Installationen für Empfangshallen",
      "Wartungsverträge mit Hardware-Austausch-Service",
    ],
    faqItems: [
      {
        question: "Sind Ihre Digital-Signage-Installationen barrierefrei?",
        answer:
          "Wo erforderlich, ja. Für öffentliche Einrichtungen in Bonn planen wir nach BITV-Standard: ausreichender Kontrast, Text-in-Sprache-Ausgabe bei Touchdisplays, niedrige Anbringhöhen für Rollstuhlnutzer, taktile Bedienelemente. Die Anforderungen klären wir zu Projektbeginn und integrieren sie in die Planung.",
      },
      {
        question: "Können wir Inhalte zentral für mehrere Standorte pflegen?",
        answer:
          "Ja, das ist eine Kernstärke moderner CMS-Systeme. Über eine zentrale Oberfläche verwalten Sie Inhalte für alle Standorte – mit Rollen-Rechtesystem, damit lokale Teams nur ihre eigenen Standorte bearbeiten können. Inhalte können regional differenziert oder konzernweit ausgerollt werden.",
      },
      {
        question: "Wie schnell können wir Notfall-Informationen auf allen Displays anzeigen?",
        answer:
          "Nahezu in Echtzeit. Über das CMS können Sie vorkonfigurierte Notfall-Layouts (z.B. Evakuierungshinweise, Krisenkommunikation) mit einem Klick auf alle Displays ausspielen. Wir richten diese Funktion bei Projekten für öffentliche Einrichtungen standardmäßig mit ein.",
      },
    ],
    localAnchor: "Bonner Konzernsitze, öffentliche Einrichtungen, Einzelhandel",
    localIndustries: ["Bundesverwaltung", "Post", "Einzelhandel", "Gesundheitswesen"],
  },

  // ─── DÜSSELDORF ────────────────────────────────────────
  "medientechnik-duesseldorf": {
    heroTitle: "Medientechnik in Düsseldorf und Umgebung",
    heroSubtitle:
      "Düsseldorf ist Sitz großer Konzerne – von E.ON über Henkel bis zu den Japan-Zentralen am Rheinufer. Wir liefern die Medientechnik für moderne Führungsetagen.",
    intro:
      "Düsseldorf hat eine eigene Medientechnik-Identität: Repräsentative Boardrooms, internationale Standards, designbewusste Integration. Wir realisieren Projekte sowohl in klassischen Bürostandorten wie dem Stadttor als auch in modernen Gebäuden wie dem Kö-Bogen. Unsere jüngste Referenz in der Region ist die Aluminium Norf GmbH in Neuss – direkt vor den Toren Düsseldorfs – wo wir zwei Boardrooms mit Shure-Deckenmikrofonen, Nureva-Audio und AVer Tracking-Kameras ausgestattet haben. Für Düsseldorfer Unternehmen: Wir fahren von Krefeld aus in 25–30 Minuten auf die A44.",
    services: [
      "Boardroom- und Präsidiums-Ausstattung auf Konzern-Niveau",
      "Internationale Medientechnik-Standards (HDMI 2.1, SDVoE, Dante)",
      "Shure MXA920 und Nureva HDL310 für kristallklare Audio",
      "AVer, Huddly und Logitech KI-Kameras mit Presenter-Tracking",
      "Integration in bestehende Markenrichtlinien und Corporate Design",
      "Wartungsverträge mit Reaktionszeiten im Düsseldorfer Stadtgebiet",
    ],
    faqItems: [
      {
        question: "Haben Sie Referenzen im Großraum Düsseldorf?",
        answer:
          "Ja. Wir haben bei Aluminium Norf in Neuss – praktisch vor den Toren Düsseldorfs – zwei Boardrooms mit moderner Videokonferenztechnik ausgestattet. Weitere Projekte im Großraum Düsseldorf können wir gerne im persönlichen Gespräch referenzieren.",
      },
      {
        question: "Wie lange dauert die Anfahrt aus Krefeld nach Düsseldorf?",
        answer:
          "25 bis 30 Minuten über die A44 zum Düsseldorfer Süden, circa 35 Minuten in die Innenstadt. Für Kunden mit Wartungsvertrag sind Vor-Ort-Einsätze im Düsseldorfer Stadtgebiet problemlos am selben Tag möglich.",
      },
      {
        question: "Arbeiten Sie auch mit Düsseldorfer Architekturbüros zusammen?",
        answer:
          "Regelmäßig. Besonders für repräsentative Boardrooms und Kundencenter brauchen Architekten frühzeitig unsere Medientechnik-Planung: Kabelwege, Medienpulte, Deckenaussparungen, Stromversorgung. Je früher wir in der Planungsphase einbezogen werden, desto besser ist das Ergebnis.",
      },
    ],
    localAnchor: "Aluminium Norf Neuss, Düsseldorfer Innenstadt, Medienhafen",
    localIndustries: ["Konzernzentralen", "Japanische Firmen", "Immobilien", "Werbeagenturen"],
  },

  "konferenztechnik-duesseldorf": {
    heroTitle: "Konferenztechnik in Düsseldorf",
    heroSubtitle:
      "Professionelle Sitzungsräume, Präsidialräume und Auditorien – für die Landeshauptstadt und ihre Konzerne.",
    intro:
      "Düsseldorf ist Deutschlands Hauptstadt der Messe und Sitz vieler international agierender Unternehmen. Konferenztechnik bedeutet hier oft: mehrsprachige Dolmetscheranlagen, repräsentative Boardrooms mit Corporate-Design-Integration, und zuverlässige Technik für Präsentationen vor internationalen Kunden. Wir planen nach VDI 6000 und internationalen Standards. In Verbindung mit unserer AluNorf-Referenz in Neuss – wenige Kilometer von Düsseldorf – haben wir uns auf hochwertige Konferenztechnik im Rhein-Ruhr-Raum spezialisiert.",
    services: [
      "Präsidial- und Aufsichtsratsräume mit höchsten Ansprüchen",
      "Mehrsprachige Dolmetscher-Anlagen nach IEC 60914",
      "Repräsentative Medienpulte in Corporate Design",
      "Integration in Architekturkonzepte (unsichtbare Technik)",
      "Videowände und LED-Walls bis Großformat",
      "24/7-Servicevertrag für zeitkritische Anwendungen",
    ],
    faqItems: [
      {
        question: "Setzen Sie auch Designanforderungen von Architekten und Innenausstattern um?",
        answer:
          "Das ist unser Standard bei Projekten in Düsseldorf. Die Technik soll nicht dominieren, sondern sich integrieren. Mikrofone verschwinden in Deckenpaneelen, Displays werden in Möbel eingebaut, Lautsprecher sind hinter Akustikelementen versteckt. Wir arbeiten mit renommierten Düsseldorfer Innenarchitekten zusammen.",
      },
      {
        question: "Welche Ausstattung braucht ein moderner Aufsichtsratsraum?",
        answer:
          "Typischerweise: Einzelmikrofonierung für jeden Platz, synchrone Protokollierung via Dual-Kamera-System, hochauflösende Displays (auch als Tischeinbauvarianten), mehrsprachige Dolmetscher-Technik, hochgradig intuitive Einhand-Bedienung über Medienpult oder Touch-Panel, dezentrale Audio-Ausgabe (Ohrhörer optional), vollständige Protokoll- und Streaming-Option.",
      },
      {
        question: "Wie lange dauert die Planungsphase für einen repräsentativen Konferenzraum?",
        answer:
          "Für komplexe Räume kalkulieren wir 4–8 Wochen Planung, dann 3–6 Wochen Umsetzung. Für einfache Standardräume reichen 2–3 Wochen insgesamt. Parallel zu Innenausbau arbeiten wir oft im Takt mit den anderen Gewerken.",
      },
    ],
    localAnchor: "Düsseldorf Konzernstandorte, Kö-Bogen, Medienhafen",
    localIndustries: ["E.ON", "Henkel", "Japanische Konzerne", "Werbung/Medien"],
  },

  "videokonferenz-duesseldorf": {
    heroTitle: "Videokonferenz-Systeme in Düsseldorf",
    heroSubtitle:
      "Hybride Meeting-Räume für den internationalen Geschäftsverkehr – zertifiziert für Microsoft Teams, Zoom und Webex.",
    intro:
      "Düsseldorfer Unternehmen führen täglich Meetings zwischen Landeshauptstadt und Tokio, New York oder Shanghai. Die technischen Anforderungen: stabile Verbindungen über Zeitzonen hinweg, exzellente Audio-Qualität trotz Akzentvielfalt, und die Fähigkeit, Meetings mit 20+ Teilnehmern in klein dimensionierten Räumen zu ermöglichen. Wir installieren zertifizierte Microsoft Teams Rooms, Cisco Webex Room Kits und Zoom-Lösungen. Für ein international aktives Unternehmen wie Aluminium Norf in Neuss – direkt bei Düsseldorf – haben wir hybride Meetingräume mit Huddly-KI-Kameras, Nureva-Audio und Barco ClickShare eingerichtet.",
    services: [
      "Zertifizierte Microsoft Teams Rooms und Zoom Rooms",
      "Cisco Webex Room Kits für Konzernanforderungen",
      "Barco ClickShare CX für plattformunabhängiges BYOD",
      "Huddly und AVer KI-Kameras mit Speaker-Tracking",
      "Nureva HDL-Serie für großflächige Raumakustik",
      "Direct Guest Join für Cross-Platform-Meetings",
    ],
    faqItems: [
      {
        question: "Können wir in demselben Raum Teams, Zoom und Webex nutzen?",
        answer:
          "Ja, das ist gerade in international agierenden Düsseldorfer Firmen häufig erforderlich. Mit Barco ClickShare CX bringt jeder Nutzer sein eigenes Gerät mit, und der Raum wird zum reinen Audio-Video-Interface. Alternativ bietet Microsoft Teams Rooms mittlerweile „Direct Guest Join“ für Zoom- und Webex-Meetings.",
      },
      {
        question: "Wie funktioniert ein Meeting mit 20+ Teilnehmern im Raum plus Remote?",
        answer:
          "Mit einer Kombination aus Deckenmikrofonen (Shure MXA920), KI-Kameras mit automatischem Speaker-Tracking (Huddly L1 oder AVer CAM570) und großen Displays oder Videowänden. Die KI folgt dem jeweiligen Sprecher, die Decken-Array-Mikrofone nehmen jeden Platz gleichmäßig auf, und Remote-Teilnehmer sehen und hören alles klar.",
      },
      {
        question: "Welche Netzwerk-Anforderungen gibt es für große Videokonferenzen?",
        answer:
          "Für ein 20-Personen-Meeting in HD empfehlen wir mindestens 20–30 Mbit/s symmetrisch, QoS-konfiguriert, mit eigenem VLAN für Medientechnik. Für Düsseldorfer Konzerne planen wir solche Anforderungen grundsätzlich mit – wir sind auch IT-Netzwerk-Spezialist.",
      },
    ],
    localAnchor: "AluNorf Neuss (bei Düsseldorf), Düsseldorfer Konzern-Tochter",
    localIndustries: ["International tätige Konzerne", "Handelshäuser", "Japanische Firmen", "Consulting"],
  },

  "it-netzwerk-duesseldorf": {
    heroTitle: "IT-Netzwerk in Düsseldorf",
    heroSubtitle:
      "Strukturierte Verkabelung, WLAN-Ausleuchtung, Cisco Meraki – für Düsseldorfs Konzerne und wachsende Unternehmen.",
    intro:
      "Düsseldorfer Unternehmen stellen an ihre IT-Netzwerke hohe Ansprüche: hochverfügbar, skalierbar, sicher. Wir planen und installieren Enterprise-Netzwerke mit Cisco, Aruba und Juniper – von der strukturierten Verkabelung bis zur WLAN-Komplett-Ausleuchtung. Ein Schlüsselprojekt war für uns Sonoco, einen global agierenden Verpackungskonzern mit mehreren deutschen Standorten. Dort haben wir im laufenden 24/7-Betrieb die komplette WLAN-Infrastruktur erneuert: EKAHAU-Ausleuchtung, CAT-7-Verkabelung, Cisco Meraki Access Points – ohne Ausfallzeiten. Diese Erfahrung bringen wir in jedes Düsseldorfer Projekt ein.",
    services: [
      "Strukturierte CAT-7-Verkabelung mit Messung und Zertifizierung",
      "Cisco Meraki und Aruba Central WLAN-Management",
      "EKAHAU-basierte WLAN-Ausleuchtung auch für große Gebäude",
      "Industrial-Netzwerke für Produktions- und Logistik-Standorte",
      "Rechenzentrum-Verkabelung mit OM4/OM5-Glasfaser",
      "Multi-Site-Netzwerke mit SD-WAN",
    ],
    faqItems: [
      {
        question: "Können Sie im laufenden Betrieb ein Netzwerk erneuern?",
        answer:
          "Ja, das ist unsere Erfahrung bei Sonoco bewiesen: Werksstandorte mit 24/7-Produktion haben wir komplett auf neue WLAN-Infrastruktur mit Cat-7-Verkabelung umgestellt, ohne eine einzige Produktionsunterbrechung. Der Schlüssel: präzise Planung, phasenweise Inbetriebnahme, nächtliche Switch-Umstellungen.",
      },
      {
        question: "Was ist ein SD-WAN und wann brauche ich es?",
        answer:
          "Software-Defined WAN verbindet verschiedene Unternehmensstandorte über das Internet mit ähnlicher Qualität wie dedicated MPLS, aber zu deutlich geringeren Kosten. Für Düsseldorfer Firmen mit mehreren Niederlassungen (z.B. Vertriebsbüros in anderen Städten, Produktion im Umland) ist es meist die wirtschaftlichere Alternative zu klassischer Standortvernetzung.",
      },
      {
        question: "Installieren Sie auch für Düsseldorfer Handelshäuser oder Einzelhandel?",
        answer:
          "Ja. Retail-Netzwerke haben eigene Anforderungen: Kassen-Systeme, Warenwirtschafts-Anbindung, Gäste-WLAN, Überwachungskameras, teilweise Digital Signage – oft alle im selben Netzwerk, aber sauber segmentiert. Für Düsseldorfer Retail-Standorte haben wir passende Lösungen.",
      },
    ],
    localAnchor: "Sonoco (multinational), Düsseldorfer Konzern-IT, Retail Kö",
    localIndustries: ["Multinationale Konzerne", "Einzelhandel", "Logistik", "Industrie"],
  },

  "digital-signage-duesseldorf": {
    heroTitle: "Digital Signage in Düsseldorf",
    heroSubtitle:
      "Videowände, Empfangssysteme, Retail-Displays – professionelle Digital-Signage-Lösungen für die Landeshauptstadt.",
    intro:
      "Düsseldorf ist Modestadt, Konzernmetropole und Messestandort – drei Welten, in denen Digital Signage eine wichtige Rolle spielt. Wir installieren Samsung-, LG- und Iiyama-Displays in repräsentativen Empfangshallen, in Corporate-Showrooms und im Düsseldorfer Einzelhandel. Besonders gefragt: Videowände mit nahtlosen LED-Modulen, interaktive Touchdisplays für Self-Service, und Outdoor-Displays für den Einsatz in Kö-Schaufenstern und Messe-Ständen.",
    services: [
      "Nahtlose LED-Videowände für Empfangshallen und Konferenzräume",
      "Interaktive Touchdisplays bis 105 Zoll (Self-Service, Wegeleitung)",
      "Outdoor-Displays für Schaufenster und Außenbereich",
      "Cloud-CMS mit Multi-Site-Verwaltung",
      "Monitoring und Wartung aller installierten Displays",
      "Integration mit digitalen Besucher-Management-Systemen",
    ],
    faqItems: [
      {
        question: "Können Sie LED-Wände in Empfangshallen installieren?",
        answer:
          "Ja, LED-Wände sind besonders in repräsentativen Düsseldorfer Empfangsbereichen gefragt. Wir installieren fine-pitch-LED-Module (1.5mm bis 2.5mm Pixel-Pitch) für gestochen scharfe Bilder aus kurzer Entfernung. Inklusive Medienserver, redundanter Stromversorgung und Service-Vertrag.",
      },
      {
        question: "Wie lange hält ein 24/7-Digital-Signage-Display in einer Düsseldorfer Kö-Boutique?",
        answer:
          "Professionelle 24/7-Displays haben 50.000–70.000 Stunden Backlight-Lebensdauer – also 5–8 Jahre Dauerbetrieb. Consumer-TVs oft nur 1–2 Jahre, dann fallen sie aus. Der Anschaffungspreis-Unterschied rechnet sich in der Regel nach 18–24 Monaten.",
      },
      {
        question: "Integrieren Sie auch Besuchermanagement in Digital Signage?",
        answer:
          "Ja, besonders für Konzernzentralen in Düsseldorf. Das Besuchermanagement-System (z.B. Proxyclick, Envoy) zeigt den Besucher-Namen auf dem Empfangsdisplay an, informiert über die aktuelle Uhrzeit, Wettervorhersage, Meeting-Adresse. Wir liefern die komplette Hardware und Integration.",
      },
    ],
    localAnchor: "Düsseldorfer Innenstadt, Kö, Medienhafen, Messegelände",
    localIndustries: ["Konzernsitze", "Einzelhandel/Mode", "Werbung", "Immobilien"],
  },

  // ─── KÖLN ──────────────────────────────────────────────
  "medientechnik-koeln": {
    heroTitle: "Medientechnik in Köln",
    heroSubtitle:
      "Standardisierte Konferenzraum-Ausstattung, LED-Walls, Boardroom-Integration – mit Referenzen in der Domstadt.",
    intro:
      "Köln hat eine eigene Medienlandschaft: RTL, der Westdeutsche Rundfunk, die Deutsche Welle, große Zeitungshäuser und unzählige Agenturen. In dieser Stadt bedeutet Medientechnik zugleich Professionalität und Ausdrucksstärke. Wir haben für Pfeifer & Langen in Köln einen Multi-Room-Rollout mit über 20 Konferenzräumen durchgeführt – mit einer 136 Zoll großen LED-Wall als Aushängeschild. Das Projekt zeigt unsere Stärke: Wir standardisieren Raumausstattungen so, dass jeder Mitarbeitende sie intuitiv bedienen kann, und liefern eine zentrale Management-Plattform mit.",
    services: [
      "Multi-Room-Rollouts mit standardisierter Technik-Ausstattung",
      "LED-Walls bis Großformat (136 Zoll wie bei Pfeifer & Langen)",
      "Zentrales Monitoring und Remote-Management aller Räume",
      "Integration in Corporate Design und Markenrichtlinien",
      "Einheitliche Bedienkonzepte für alle Raumgrößen",
      "Wartungsverträge mit Hardware-Austausch",
    ],
    faqItems: [
      {
        question: "Was ist der Vorteil einer Multi-Room-Standardisierung?",
        answer:
          "Bei Pfeifer & Langen haben wir über 20 Räume mit identischer Technik ausgestattet. Das bedeutet: Nutzer können jeden Raum ohne Einweisung bedienen, die IT hat nur eine einzige Konfiguration zu verwalten, und Supportfälle werden drastisch reduziert. Pfeifer & Langen berichtet von deutlich weniger internen Supportanfragen seit dem Rollout.",
      },
      {
        question: "Was kostet eine 136-Zoll-LED-Wall?",
        answer:
          "Eine LED-Wall in diesen Dimensionen ist eine Investition im 5- bis 6-stelligen Bereich – abhängig von Pixel-Pitch (1.5mm für Close-Up oder 2.5mm für größeren Betrachtungsabstand), Installation (Wandmontage oder Free-Standing), Medienserver, Steuerung. Unsere LED-Wall für Pfeifer & Langen Köln ist als Aushängeschild für wichtige Kundenbesuche konzipiert.",
      },
      {
        question: "Können Sie auch für Kölner Agenturen und Medienhäuser installieren?",
        answer:
          "Sehr gerne. Kölner Agenturen haben besondere Anforderungen an Medientechnik: Farbechte Displays für Designfeedback, niedrige Latenz für Video-Editing-Feedback-Sessions, professionelle Audio für Voice-Over-Arbeiten. Wir planen solche Spezialräume individuell.",
      },
    ],
    localAnchor: "Pfeifer & Langen (20+ Räume mit LED-Wall), Kölner Medienlandschaft",
    localIndustries: ["Lebensmittelindustrie", "Medien/Rundfunk", "Agenturen", "Versicherungen"],
  },

  "videokonferenz-koeln": {
    heroTitle: "Videokonferenzsysteme in Köln",
    heroSubtitle:
      "Standardisierte Room-Systeme, BYOD-Lösungen, plattformübergreifende Installation – für Kölner Unternehmen und Medienhäuser.",
    intro:
      "Die Videokonferenz-Landschaft in Köln ist vielfältig: Konzerne wie Pfeifer & Langen, die Rheinbahn, viele Versicherungen und Medienhäuser wie RTL setzen auf hybride Meetingkultur. Für Pfeifer & Langen haben wir über 20 standardisierte Videokonferenzräume eingerichtet – mit einheitlicher Bedienung und zentraler Verwaltung. Dieser Rollout zeigt, was wir auch für andere Kölner Unternehmen leisten: einheitliche Nutzererfahrung, reduzierte Support-Last, und ein Room-Standard, der von 6-Personen-Huddle-Rooms bis zu 50-Personen-Auditorien reicht.",
    services: [
      "Multi-Room-Rollouts von 5 bis 50+ Räumen",
      "Einheitliche Bedienung über alle Raumgrößen hinweg",
      "Zentrales Monitoring und Remote-Support",
      "Zertifizierte Teams Rooms, Zoom Rooms, Cisco Webex",
      "BYOD-Systeme für flexible Nutzung",
      "Schulungskonzepte für Konzernbelegschaften",
    ],
    faqItems: [
      {
        question: "Was heißt „Multi-Room-Rollout“ in der Praxis?",
        answer:
          "Bei Pfeifer & Langen in Köln haben wir über 20 Räume identisch ausgestattet – von kleinen Huddle-Rooms mit 4 Personen bis zu großen Sitzungsräumen mit 20 Teilnehmern. Die Technik ist skaliert auf Raumgröße, aber die Bedienlogik ist in allen Räumen identisch. Ein Mitarbeiter, der einen Raum kennt, kennt sie alle.",
      },
      {
        question: "Wie reduzieren standardisierte Räume die IT-Supportlast?",
        answer:
          "Konkret bei Pfeifer & Langen Köln: weniger individuelle Support-Tickets seit dem Rollout. Weil jeder Raum gleich aufgebaut ist, wissen Nutzer, wie Technik bedient wird. Weil die IT nur eine Konfiguration pflegt, sind Updates schneller. Weil zentral monitored wird, werden Probleme oft proaktiv gelöst, bevor der Nutzer anruft.",
      },
      {
        question: "Können Sie Medienhäuser wie RTL oder WDR betreuen?",
        answer:
          "Prinzipiell ja. Medienhäuser haben zusätzlich Spezialanforderungen wie farbechte Displays, Broadcast-Qualität bei Live-Streaming-Meetings, Integration in professionelle Redaktionssysteme. Solche Projekte planen wir individuell, gerne in Zusammenarbeit mit den hauseigenen technischen Abteilungen.",
      },
    ],
    localAnchor: "Pfeifer & Langen Multi-Room-Rollout Köln, Kölner Konzerne, Versicherungen",
    localIndustries: ["Lebensmittelindustrie", "Versicherungen", "Medien", "Logistik (Flughafen)"],
  },

  // ─── NRW ───────────────────────────────────────────────
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
          "Unsere NRW-Kunden kommen aus Chemie (Aluminium Norf Neuss), Lebensmittelindustrie (Pfeifer & Langen Köln), Maschinenbau (GEA Farm Technologies Bönen), Bundesverwaltung (mehrere Ministerien in Bonn) und dem Mittelstand. Die Bandbreite erlaubt uns, jede NRW-Branche mit passenden Lösungen zu bedienen.",
      },
    ],
    localAnchor: "Zwei Standorte (Krefeld + Bonn), NRW-weiter Einsatzradius",
    localIndustries: ["Industrie", "Verwaltung", "Medien", "Mittelstand"],
  },
};

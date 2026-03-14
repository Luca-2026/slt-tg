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
    metaTitle: "Medientechnik",
    metaDescription: "Professionelle Medientechnik",
    heroTitle: (city) => `Medientechnik ${city}`,
    heroSubtitle: (city) => `Ihr Partner für professionelle Medien- und Konferenztechnik in ${city} und Umgebung. Installation, Integration und Service – alles aus einer Hand.`,
    intro: (city) => `Als erfahrener Fachplaner und Integrator für Medientechnik betreuen wir Unternehmen in ${city} und der gesamten Region. Von der Bedarfsanalyse über die Planung bis zur Installation und dem laufenden Betrieb – wir realisieren Ihr Projekt termingerecht und budgetsicher.`,
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
    metaTitle: "Konferenztechnik",
    metaDescription: "Professionelle Konferenztechnik",
    heroTitle: (city) => `Konferenztechnik ${city}`,
    heroSubtitle: (city) => `Professionelle Konferenzraum-Ausstattung für Unternehmen in ${city}. Von der Planung bis zur Inbetriebnahme – wir machen Ihre Meetings produktiver.`,
    intro: (city) => `Wir planen, installieren und betreuen Konferenztechnik für Unternehmen in ${city} und ganz NRW. Ob kleiner Huddle Space oder großer Boardroom – wir finden die passende Lösung.`,
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
    metaTitle: "Videokonferenztechnik",
    metaDescription: "Professionelle Videokonferenz-Lösungen",
    heroTitle: (city) => `Videokonferenz-Lösungen ${city}`,
    heroSubtitle: (city) => `Professionelle Videokonferenzsysteme für Unternehmen in ${city}. Microsoft Teams, Zoom, Webex – wir integrieren jede Plattform.`,
    intro: (city) => `Hybrides Arbeiten erfordert zuverlässige Videokonferenztechnik. Wir planen und installieren Videokonferenzsysteme für Unternehmen in ${city} – von der Kamera und dem Mikrofon bis zur kompletten Raumintegration mit Microsoft Teams Rooms oder Zoom Rooms.`,
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
    metaTitle: "IT-Netzwerktechnik",
    metaDescription: "Professionelle IT-Netzwerklösungen",
    heroTitle: (city) => `IT-Netzwerktechnik ${city}`,
    heroSubtitle: (city) => `Strukturierte Verkabelung, Enterprise WLAN und Managed Switches für Unternehmen in ${city}. Die Basis für zuverlässige AV- und IT-Systeme.`,
    intro: (city) => `Moderne Medien- und Konferenztechnik funktioniert nur auf einer stabilen IT-Infrastruktur. Wir planen und installieren Netzwerklösungen für Unternehmen in ${city} – von der strukturierten Verkabelung über Enterprise WLAN bis zu AV-over-IP.`,
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
    metaTitle: "Digital Signage",
    metaDescription: "Professionelle Digital-Signage-Lösungen",
    heroTitle: (city) => `Digital Signage ${city}`,
    heroSubtitle: (city) => `Digitale Beschilderung, Info-Displays und Empfangsbereich-Lösungen für Unternehmen in ${city}. Modern, flexibel und zentral steuerbar.`,
    intro: (city) => `Von Empfangs-Displays über Wegeleitsysteme bis zu großflächigen LED-Wänden – wir planen und installieren Digital-Signage-Lösungen für Unternehmen in ${city}. Inhalte zentral verwalten, Displays standortübergreifend steuern.`,
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

export function getLocalSEORoutes(): { path: string; topic: string; city: string }[] {
  const routes: { path: string; topic: string; city: string }[] = [];
  const allCities = ["krefeld", "duesseldorf", "koeln", "bonn", "essen", "duisburg", "moenchengladbach"];

  // Medientechnik - alle Städte
  allCities.forEach((city) => {
    routes.push({ path: `/medientechnik/${city}`, topic: "medientechnik", city });
  });

  // Konferenztechnik - alle Städte + NRW
  allCities.forEach((city) => {
    routes.push({ path: `/konferenztechnik/${city}`, topic: "konferenztechnik", city });
  });
  routes.push({ path: "/konferenztechnik/nrw", topic: "konferenztechnik", city: "nrw" });

  // Videokonferenz - alle Städte
  allCities.forEach((city) => {
    routes.push({ path: `/videokonferenz/${city}`, topic: "videokonferenz", city });
  });

  // IT-Netzwerk - alle Städte
  allCities.forEach((city) => {
    routes.push({ path: `/it-netzwerk/${city}`, topic: "it-netzwerk", city });
  });

  // Digital Signage - alle Städte
  allCities.forEach((city) => {
    routes.push({ path: `/digital-signage/${city}`, topic: "digital-signage", city });
  });

  return routes;
}

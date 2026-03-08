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
      { question: `Bieten Sie Medientechnik-Installation in ${city} an?`, answer: `Ja, wir installieren und integrieren professionelle Medientechnik in ${city} und der gesamten Region. Unser Firmensitz in Krefeld ermöglicht kurze Anfahrtswege in ganz NRW.` },
      { question: `Was kostet ein Konferenzraum-Projekt in ${city}?`, answer: `Die Kosten hängen von Raumgröße, gewünschter Ausstattung und Komplexität ab. Wir erstellen Ihnen nach einem kostenfreien Erstgespräch ein individuelles Angebot.` },
      { question: `Welche Hersteller setzen Sie ein?`, answer: `Wir beraten herstellerneutral und arbeiten mit führenden Marken wie Crestron, Shure, Sennheiser, Barco, Samsung, Q-Sys und vielen weiteren zusammen.` },
      { question: `Bieten Sie auch Wartung und Support in ${city}?`, answer: `Ja, wir bieten Service-Verträge mit garantierten Reaktionszeiten, Remote-Monitoring und regelmäßiger Wartung für alle installierten Systeme.` },
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
      { question: `Planen Sie Konferenzräume in ${city}?`, answer: `Ja, wir sind als Fachplaner und Integrator in ${city} und ganz NRW tätig. Von der Konzeption bis zur schlüsselfertigen Übergabe.` },
      { question: `Wie lange dauert ein Konferenzraum-Projekt?`, answer: `Je nach Umfang rechnen Sie mit 4-12 Wochen von der Planung bis zur Inbetriebnahme. Einfache Huddle Spaces können auch schneller realisiert werden.` },
      { question: `Unterstützen Sie bei der Finanzierung?`, answer: `Ja, wir bieten verschiedene Finanzierungsmodelle an – von Leasing über Mietkauf bis zu AV-as-a-Service-Konzepten.` },
    ],
  },
};

export function getLocalSEORoutes(): { path: string; topic: string; city: string }[] {
  const routes: { path: string; topic: string; city: string }[] = [];
  ["krefeld", "duesseldorf", "koeln", "bonn", "essen", "duisburg", "moenchengladbach"].forEach((city) => {
    routes.push({ path: `/medientechnik/${city}`, topic: "medientechnik", city });
  });
  routes.push({ path: "/konferenztechnik/nrw", topic: "konferenztechnik", city: "nrw" });
  return routes;
}

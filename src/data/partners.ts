/**
 * Partner-/Vendor-Daten für die Enterprise-Pillar-Seiten.
 * Jeder Eintrag ist eine Landingpage unter /partner/{slug}.
 */

export interface PartnerCategory {
  name: string;
  description: string;
  products: string[];
}

export interface PartnerUseCase {
  title: string;
  description: string;
}

export interface PartnerReference {
  projectName: string;
  description: string;
}

export interface PartnerFAQ {
  question: string;
  answer: string;
}

export interface Partner {
  slug: string;
  name: string;
  fullName: string;
  headline: string;
  description: string;
  longDescription: string;
  categories: PartnerCategory[];
  certifications: string[];
  useCases: PartnerUseCase[];
  references: PartnerReference[];
  faqs: PartnerFAQ[];
  websiteUrl: string;
  ogImage?: string;
}

export const partners: Partner[] = [
  {
    slug: "crestron",
    name: "Crestron",
    fullName: "Crestron Electronics, Inc.",
    headline: "Crestron Integrator NRW: Steuerung, AV-over-IP & Raumautomation",
    description:
      "Als zertifizierter Crestron-Partner planen und integrieren wir Mediensteuerung, AV-over-IP (NVX) und Raumautomation für Enterprise-Konferenzräume und Multi-Site-Rollouts.",
    longDescription:
      "Crestron ist der weltweite Standard für professionelle Mediensteuerung und Enterprise-AV. Mit Crestron NVX realisieren wir 4K-AV-over-IP-Distribution, während Crestron Control-Systeme alle Raumkomponenten – von Display über Licht bis Klima – zentral orchestrieren. Als Integrator mit jahrelanger Crestron-Erfahrung decken wir den gesamten Lifecycle ab: Planung, Programmierung, Inbetriebnahme, Schulung und Wartung.",
    categories: [
      {
        name: "Mediensteuerung & Touch-Panels",
        description: "Intuitive Touch-Controller für Konferenzräume, Auditorien und Campus-Umgebungen",
        products: ["Crestron TSW-1070", "Crestron TSW-770", "Crestron Horizon", "Crestron Home OS"],
      },
      {
        name: "AV-over-IP (NVX)",
        description: "4K-Signalverteilung über das bestehende Netzwerk mit nahezu null Latenz",
        products: ["Crestron DM-NVX-350", "Crestron DM-NVX-360", "Crestron NVX Encoder/Decoder", "DM-NVX-D30"],
      },
      {
        name: "Steuerungsprozessoren",
        description: "Zentrale Intelligenz für Raumautomation und Gebäudeintegration",
        products: ["Crestron CP4", "Crestron CP4-R", "Crestron PRO4", "Crestron VC-4"],
      },
      {
        name: "Crestron Flex (Teams/Zoom)",
        description: "Native Microsoft Teams Rooms und Zoom Rooms Integration auf Crestron-Hardware",
        products: ["Crestron Flex MM", "Crestron Flex UC-C100-T", "Crestron Flex UC-M150-T", "Crestron UC-C160-T"],
      },
    ],
    certifications: [
      "Crestron Authorized Partner",
      "Crestron Certified Programmer",
      "DM-NVX System Design Certified",
    ],
    useCases: [
      { title: "Boardroom-Steuerung", description: "Zentrale Touch-Bedienung für Beamer, Displays, Beschallung und Lichtszenen im Verwaltungsratssaal" },
      { title: "Campus-AV-over-IP", description: "Unternehmensweite 4K-Video-Distribution zwischen Standorten über das IP-Netzwerk" },
      { title: "Multi-Site-Rollout", description: "Standardisierte Crestron-Raumkonzepte für 50+ Meetingräume mit zentraler Fernüberwachung" },
    ],
    references: [
      { projectName: "GEA Farm Technologies", description: "Crestron-gesteuerte Präsentations- und Konferenzraumtechnik im Industrieumfeld" },
      { projectName: "Pfeifer & Langen", description: "Mediensteuerung und Signalverteilung für Meetingräume und Schulungsbereiche" },
    ],
    faqs: [
      { question: "Was kostet ein Crestron-Raumsystem?", answer: "Je nach Raumgröße und Komplexität liegt der Investitionsschwerpunkt bei 8.000–25.000 EUR pro Raum für einen vollintegrierten Crestron-Konferenzraum mit Steuerung, AV-over-IP und Beschallung." },
      { question: "Kann Crestron mit Microsoft Teams Rooms betrieben werden?", answer: "Ja. Crestron Flex ist eine nativ zertifizierte Teams-Rooms-Lösung, die Crestron-Hardware mit Microsoft-Software kombiniert – inkl. Touch-Panel-Bedienung und zentraler Verwaltung." },
      { question: "Was ist Crestron NVX?", answer: "Crestron NVX ist eine AV-over-IP-Plattform, die 4K-Videosignale mit nahezu keiner Latenz über Standard-IP-Netzwerke verteilt – ideal für Campus- und Multi-Site-Szenarien." },
      { question: "Wie lange dauert die Programmierung eines Crestron-Systems?", answer: "Für einen Standard-Meetingraum 2–3 Tage, für komplexe Boardrooms oder Auditorien mit Gebäudeintegration 1–2 Wochen." },
    ],
    websiteUrl: "https://www.crestron.com",
    ogImage: "/assets/partners/crestron.jpg",
  },
  {
    slug: "poly",
    name: "Poly",
    fullName: "HP | Poly (ehemals Polycom / Plantronics)",
    headline: "Poly Partner Deutschland: Videokonferenz, Headsets & USB-Soundbars",
    description:
      "Als autorisierter Poly-Partner liefern und integrieren wir Videokonferenzsysteme, USB-Soundbars und professionelle Headsets für hybride Arbeitswelten in Unternehmen.",
    longDescription:
      "Poly (heute Teil von HP) ist einer der führenden Anbieter für professionelle Videokonferenz und Unified Communications. Von der kompakten USB-Soundbar für Huddle Rooms bis zum hochauflösenden Boardroom-System – Poly-Lösungen zeichnen sich durch exzellente Audioqualität, einfache Integration und nahtlose Zusammenarbeit mit Microsoft Teams und Zoom aus.",
    categories: [
      {
        name: "Videokonferenz-Systeme",
        description: "Raumsysteme für kleine bis große Konferenzräume mit integrierter Kamera und Audio",
        products: ["Poly Studio X50", "Poly Studio X70", "Poly G7500", "Poly Studio P15"],
      },
      {
        name: "USB-Soundbars & Kameras",
        description: "Plug-and-Play-Lösungen für BYOM- und Bring-Your-Own-Device-Szenarien",
        products: ["Poly Studio R30", "Poly Studio P5", "Poly Studio P21", "Poly Studio E60"],
      },
      {
        name: "Headsets & Freisprech",
        description: "Professionelle Audio-Endgeräte für hybride Meetings und Callcenter",
        products: ["Poly Voyager Focus 2", "Poly Blackwire 8225", "Poly Sync 40", "Poly Sync 60"],
      },
      {
        name: "PTZ-Kameras",
        description: "Schwenk-Neige-Zoom-Kameras für große Räume und Auditorien",
        products: ["Poly Eagle Eye Cube", "Poly Eagle Eye Director II", "Poly Studio E70"],
      },
    ],
    certifications: [
      "Poly Authorized Reseller",
      "Poly Certified Integration Partner",
    ],
    useCases: [
      { title: "Huddle Room Upgrade", description: "Kompakte Poly Studio X30-Systeme für schnelle, standardisierte Ausstattung kleiner Besprechungsräume" },
      { title: "Hybrid-Boardroom", description: "Poly G7500 mit EagleEye-Director für gestensteuernde Kameraführung im Verwaltungsratssaal" },
      { title: "Headset-Flotte", description: "Unternehmensweite Headset-Ausstattung mit zentraler Verwaltung und Firmware-Updates" },
    ],
    references: [
      { projectName: "AluNorf", description: "Videokonferenz-Ausstattung für internationale Standortkommunikation" },
      { projectName: "Sonoco", description: "USB-Kameras und Soundbars für flexible Meeting-Spaces" },
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen Poly Studio und Poly G-Serie?", answer: "Poly Studio (X30/X50/X70) sind All-in-One-Bars mit integriertem Computer für native Teams/Zoom-Rooms. Die G-Serie (G7500) ist ein modulares System für individuelle Kamera-/Audio-Kombinationen in großen Räumen." },
      { question: "Funktionieren Poly-Geräte mit allen Videoplattformen?", answer: "Poly Studio X-Serie läuft nativ als Teams Rooms oder Zoom Rooms. Mit BYOM-Modus können auch Google Meet, Webex und andere Plattformen genutzt werden." },
      { question: "Wie lange ist die Garantie auf Poly-Hardware?", answer: "Standardmäßig 2 Jahre Herstellergarantie. Über SLT Technology Group können erweiterte Garantie- und Serviceverträge abgeschlossen werden." },
    ],
    websiteUrl: "https://www.hp.com/us-en/poly.html",
    ogImage: "/assets/partners/poly.jpg",
  },
  {
    slug: "q-sys",
    name: "Q-SYS",
    fullName: "Q-SYS (QSC, LLC)",
    headline: "Q-SYS zertifiziert: Audio-DSP, Raumautomation & Conferencing",
    description:
      "Als Q-SYS-Partner designen wir Audiobearbeitung, Raumautomation und native Conferencing-Lösungen auf einer einheitlichen Software-Plattform für Enterprise-Kunden.",
    longDescription:
      "Q-SYS ist die modernste Software-basierte AV-Plattform für Enterprise. Ein einziger Q-SYS Core-Prozessor ersetzt traditionell separate Geräte für Audio-DSP, Steuerung, Video und Conferencing. Besonders stark ist Q-SYS bei komplexen Beschallungsszenarien, aktiver Echo-Unterdrückung und nativer Microsoft Teams/Zoom-Rooms-Integration – alles auf einer einheitlichen Programmieroberfläche.",
    categories: [
      {
        name: "Q-SYS Core Prozessoren",
        description: "Zentrale Audio-DSP- und Steuerungsprozessoren für alle Raumgrößen",
        products: ["Q-SYS Core 110f", "Q-SYS Core 510i", "Q-SYS Core Nano", "Q-SYS Core 8 Flex"],
      },
      {
        name: "Native Conferencing",
        description: "Integrierte UC-Engine für Microsoft Teams und Zoom ohne externen PC",
 products: ["Q-SYS NV-32-H", "Q-SYS NC Series", "Q-SYS TSC Series Touch"],
      },
      {
        name: "Netzwerk-Audio & Endpunkte",
        description: "Dante-/AES67-fähige Lautsprecher, Mikrofone und Verstärker über PoE",
        products: ["Q-SYS AD-C Series", "Q-SYS NM Series Mics", "Q-SYS SPA Amplifiers", "Q-SYS AcousticDesign"],
      },
      {
        name: "Video & Signage",
        description: "AV-over-IP-Verteilung und Digital-Signage-Integration innerhalb Q-SYS",
        products: ["Q-SYS NV-32-H Encoder/Decoder", "Q-SYS QIO Series", "Q-SYS UCI Touch Panels"],
      },
    ],
    certifications: [
      "Q-SYS Certified Integration Partner",
      "Q-SYS Level 2 System Designer",
    ],
    useCases: [
      { title: "Auditoriums-Beschallung", description: "Mehrzonige Beschallung mit Beam-Steering und automatischer Lautstärkeregelung für Veranstaltungsräume" },
      { title: "Teams-Rooms-Integration", description: "Native Q-SYS Conferencing ohne zusätzlichen Meeting-PC – reine Software-Integration in Teams" },
      { title: "Campus-Verteilung", description: "Zentrale Audiostreaming- und Durchsagelösung über das gesamte Unternehmensgelände" },
    ],
    references: [
      { projectName: "Pfeifer & Langen", description: "Q-SYS-basierte Beschallung und Raumsteuerung für Meetingräume und Konferenzbereiche" },
    ],
    faqs: [
      { question: "Was ist der Vorteil von Q-SYS gegenüber traditioneller DSP-Hardware?", answer: "Q-SYS ist rein software-basiert: ein Core-Prozessor vereint DSP, Steuerung, Video und Conferencing. Updates, Erweiterungen und Fernwartung sind deutlich einfacher als bei proprietärer Hardware." },
      { question: "Kann Q-SYS in bestehende Dante-Netzwerke integriert werden?", answer: "Ja. Alle modernen Q-SYS Core-Prozessoren unterstützen Dante und AES67 als native Audio-Streaming-Protokolle." },
      { question: "Ist Q-SYS auch für kleine Räume geeignet?", answer: "Absolut. Der Q-SYS Core Nano und die Q-SYS NV-32-H sind speziell für kleine bis mittlere Konferenzräume und Huddle Spaces konzipiert." },
    ],
    websiteUrl: "https://www.qsys.com",
    ogImage: "/assets/partners/qsys.jpg",
  },
  {
    slug: "logitech",
    name: "Logitech",
    fullName: "Logitech Europe S.A.",
    headline: "Logitech Rally Partner: USB-Kameras, Tap-Controller & Teams Rooms",
    description:
      "Als Logitech-Partner integrieren wir die Rally-Familie, Tap-Controller und MeetUp-Systeme für skalierbare Videokonferenz-Lösungen in Unternehmen jeder Größe.",
    longDescription:
      "Logitech hat sich vom Peripherie-Hersteller zum führenden Anbieter für Enterprise-Videokonferenz entwickelt. Die Rally-Familie bietet modulare, skalierbare Systeme für alle Raumgrößen – von der kompakten MeetUp-Bar bis zum modularen Rally Plus für Boardrooms. Der Logitech Tap ist der meistverkaufte Touch-Controller für Microsoft Teams Rooms weltweit. Als Logitech-Partner bieten wir nicht nur Verkauf, sondern auch Integration, Zertifizierung und Managed Services.",
    categories: [
      {
        name: "Logitech Rally (Modular)",
        description: "Premium-Modulsystem mit separater Kamera, Hub und Mikrofon für mittlere bis große Räume",
        products: ["Logitech Rally", "Logitech Rally Plus", "Logitech Rally Bar", "Logitech Rally Bar Mini"],
      },
      {
        name: "All-in-One-Bars",
        description: "Integrierte Soundbar-Kamera-Kombinationen für schnelle Standardisierung",
        products: ["Logitech MeetUp", "Logitech Rally Bar", "Logitech Rally Bar Mini", "Logitech RoomMate"],
      },
      {
        name: "Logitech Tap",
        description: "Der führende Touch-Controller für Microsoft Teams Rooms und Zoom Rooms",
        products: ["Logitech Tap", "Logitech Tap IP", "Logitech Tap Scheduler", "Logitech Swytch"],
      },
      {
        name: "Zubehör & Erweiterungen",
        description: "Mikrofone, Halterungen, Kabel und Fernbedienungen für komplette Raumsysteme",
        products: ["Logitech Rally Mic Pod", "Logitech Mic Pod Hub", "Logitech Strong USB", "Logitech SC100"],
      },
    ],
    certifications: [
      "Logitech Video Collaboration Partner",
      "Logitech Tap Certified Installer",
    ],
    useCases: [
      { title: "50-Raum-Rollout", description: "Standardisierte Logitech Rally Bar-Ausstattung für alle Meetingräume mit einheitlicher Bedienung" },
      { title: "Teams-Rooms-Boardroom", description: "Rally Plus mit Tap-Controller und zwei Rally Mic Pods für große Konferenzräume" },
      { title: "Huddle-Space-Standard", description: "Rally Bar Mini für kleine Räume – Plug-and-Play mit automatischer Rahmung" },
    ],
    references: [
      { projectName: "AluNorf", description: "Logitech MeetUp und Rally-Systeme für internationale Videokonferenz" },
      { projectName: "Tourismus Info Bensersiel", description: "Logitech Tap und Rally Bar für Besprechungs- und Präsentationsräume" },
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen Rally Bar und Rally Plus?", answer: "Rally Bar ist eine All-in-One-Soundbar mit integrierter Kamera für kleine bis mittlere Räume. Rally Plus ist ein modulares System mit separater PTZ-Kamera, Hub und bis zu 7 Mikrofon-Pods für große Räume." },
      { question: "Funktioniert Logitech Tap auch mit Zoom Rooms?", answer: "Ja. Logitech Tap ist sowohl für Microsoft Teams Rooms als auch Zoom Rooms zertifiziert – die Software wird beim Setup ausgewählt." },
      { question: "Wie viele Mikrofone können an ein Rally-System angeschlossen werden?", answer: "Rally Plus unterstützt bis zu 7 Mic Pods (über den Mic Pod Hub). Rally Bar hat ein integriertes Mikrofonarray für kleine bis mittlere Räume." },
    ],
    websiteUrl: "https://www.logitech.com/de-de/video-collaboration",
    ogImage: "/assets/partners/logitech.jpg",
  },
  {
    slug: "sennheiser",
    name: "Sennheiser",
    fullName: "Sennheiser electronic GmbH & Co. KG",
    headline: "Sennheiser TeamConnect Partner: Premium-Audio für Konferenzräume",
    description:
      "Als Sennheiser-Partner integrieren wir TeamConnect Ceiling, Bar und Board für kristallklare Audioqualität in Konferenzräumen, Auditorien und hybriden Meeting-Spaces.",
    longDescription:
      "Sennheiser steht für audiophile Exzellenz – und genau das bringt die Marke in die Enterprise-Konferenztechnik. Der TeamConnect Ceiling ist die weltweit führende Deckenmikrofonlösung mit Beamforming-Technologie, die Sprecher automatisch ortet und gleichzeitig Störgeräusche unterdrückt. Für Enterprise-Kunden bedeutet das: keine sichtbaren Mikrofone auf dem Tisch, gleichbleibende Audioqualität unabhängig von Sitzposition, und nahtlose Integration in Teams- und Zoom-Rooms.",
    categories: [
      {
        name: "TeamConnect Ceiling",
        description: "Unsichtbare Deckenmikrofonlösung mit Beamforming für mittlere bis große Räume",
        products: ["TeamConnect Ceiling 2", "TeamConnect Ceiling Medium", "TeamConnect Ceiling Medium M"],
      },
      {
        name: "TeamConnect Bar",
        description: "Kompakte Soundbar mit integriertem Mikrofonarray für kleine bis mittlere Räume",
        products: ["TeamConnect Bar", "TeamConnect Bar S", "TeamConnect Bar M"],
      },
      {
        name: "TeamConnect Board",
        description: "Modulare Audio-Lösung für große Konferenzräume und Boardrooms",
        products: ["TeamConnect Board", "TeamConnect Board M"],
      },
      {
        name: "MobileConnect (Barrierefreiheit)",
        description: "Induktive Höranlage und Audio-Streaming über Smartphone für barrierefreie Teilnahme",
        products: ["MobileConnect", "MobileConnect Manager", "MobileConnect Station"],
      },
    ],
    certifications: [
      "Sennheiser TeamConnect Certified Partner",
      "Sennheiser Pro Audio Integrator",
    ],
    useCases: [
      { title: "Invisible Audio Boardroom", description: "TeamConnect Ceiling 2 – keine Mikrofone auf dem Tisch, dafür perfekte Sprachverständlichkeit für alle Sitzpositionen" },
      { title: "Hybrid-Auditorium", description: "TeamConnect Board mit Ceiling-Erweiterung für große Veranstaltungsräume mit hybriden Teilnehmern" },
      { title: "Barrierefreie Besprechung", description: "MobileConnect-Integration für Hörgeschädigte über eigene Smartphones statt separater Empfänger" },
    ],
    references: [
      { projectName: "GEA Farm Technologies", description: "TeamConnect Ceiling für Konferenzräume mit hoher Sprachqualität" },
    ],
    faqs: [
      { question: "Was ist Sennheiser Beamforming?", answer: "Beamforming ist eine digitale Mikrofontechnologie, die Schallwellen gezielt auf den Sprecher fokussiert und gleichzeitig Nebengeräusche ausblendet – für kristallklare Audioqualität aus der Deckenmontage." },
      { question: "Für welche Raumgrößen ist TeamConnect Ceiling geeignet?", answer: "TeamConnect Ceiling 2 deckt Räume bis ca. 60 m² ab, die Medium-Variante bis ca. 40 m². Für sehr große Räume können mehrere Ceiling-Systeme vernetzt werden." },
      { question: "Braucht TeamConnect Ceiling eine separate DSP-Hardware?", answer: "Nein. TeamConnect Ceiling hat eine integrierte DSP und kann direkt über USB oder Dante an das Raumsystem angeschlossen werden." },
    ],
    websiteUrl: "https://www.sennheiser.com/de-de/professional/audio-for-video/business-communication",
    ogImage: "/assets/partners/sennheiser.jpg",
  },
  {
    slug: "yealink",
    name: "Yealink",
    fullName: "Yealink Network Technology Co., Ltd.",
    headline: "Yealink Partner: Videokonferenz-Endgeräte, MeetingBoard & Teams Rooms",
    description:
      "Als autorisierter Yealink-Partner liefern und integrieren wir Videokonferenz-Endgeräte, MeetingBoards und MeetingBars für kosteneffiziente Enterprise-Konferenzräume.",
    longDescription:
      "Yealink ist der am schnellsten wachsende Hersteller für Enterprise-Videokonferenz. Das Unternehmen bietet ein besonders breites Portfolio an zertifizierten Microsoft Teams Rooms- und Zoom Rooms-Geräten – von kompakten USB-Kameras über All-in-One-MeetingBars bis hin zum innovativen MeetingBoard mit integriertem Whiteboard. Yealink-Produkte zeichnen sich durch herausragendes Preis-Leistungs-Verhältnis, einfache Bereitstellung und umfangreiche Remote-Management-Funktionen aus.",
    categories: [
      {
        name: "MeetingBar (All-in-One)",
        description: "Integrierte Soundbar-Kamera-Kombination für Teams und Zoom Rooms",
        products: ["Yealink MeetingBar A10", "Yealink MeetingBar A20", "Yealink MeetingBar A30"],
      },
      {
        name: "MeetingBoard",
        description: "All-in-One-Display mit integrierter Kamera, Audio und Whiteboard-Funktion",
        products: ["Yealink MeetingBoard 65", "Yealink MeetingBoard 86", "Yealink MeetingBoard 105"],
      },
      {
        name: "VC Endpunkte",
        description: "Standalone-Videokonferenzsysteme mit eigener Rechenleistung",
        products: ["Yealink VC210", "Yealink VC880", "Yealink VP59 (Teams Phone)"],
      },
      {
        name: "Headsets & Zubehör",
        description: "Professionelle Audio-Endgeräte für hybride Meetings",
        products: ["Yealink BH72", "Yealink WH66", "Yealink CP965 (Konferenztelefon)"],
      },
    ],
    certifications: [
      "Yealink Authorized Reseller",
      "Yealink Certified Integration Partner",
    ],
    useCases: [
      { title: "Kosteneffizienter Rollout", description: "MeetingBar A20 für standardisierte, budgetfreundliche Teams-Rooms-Ausstattung in mittleren Konferenzräumen" },
      { title: "Kreativ- & Brainstorming-Raum", description: "MeetingBoard 65 mit integriertem Whiteboard für agile Teams und Design-Thinking-Workshops" },
      { title: "Multi-Site-Standardisierung", description: "Einheitliche Yealink-Ausstattung über alle Standorte mit zentraler Device-Management-Plattform" },
    ],
    references: [
      { projectName: "Sonoco", description: "Yealink Videokonferenz-Endgeräte für internationale Standortvernetzung" },
    ],
    faqs: [
      { question: "Was ist der Unterschied zwischen MeetingBar und MeetingBoard?", answer: "MeetingBar ist eine Soundbar mit Kamera für bestehende Displays. MeetingBoard ist ein komplettes All-in-One-Display mit integrierter Kamera, Audio und interaktivem Whiteboard." },
      { question: "Sind Yealink-Geräte wirklich Teams-zertifiziert?", answer: "Ja. Yealink hat eines der umfassendsten Zertifizierungsportfolios für Microsoft Teams Rooms und Zoom Rooms weltweit." },
      { question: "Wie werden Yealink-Geräte zentral verwaltet?", answer: "Über die Yealink Device Management Platform (YDMP) oder Microsoft Teams Admin Center können alle Geräte zentral konfiguriert, aktualisiert und überwacht werden." },
    ],
    websiteUrl: "https://www.yealink.com",
    ogImage: "/assets/partners/yealink.jpg",
  },
];

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}

export function getAllPartnerSlugs(): string[] {
  return partners.map((p) => p.slug);
}

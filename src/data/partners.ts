/**
 * Partner-/Hersteller-Daten für die Vendor-Landingpages unter /partner/{slug}.
 *
 * GRUNDREGEL: Hier landen ausschließlich Hersteller, die SLT Technology Group
 * auf der Hauptseite slt-tg.de/technologien selbst als "Zertifizierter Partner"
 * ausweist. Referenz-Zuordnungen kommen nur dann hinein, wenn das jeweilige
 * Projekt unter slt-tg.de/projekte den Hersteller explizit nennt.
 * Keine erfundenen Cert-Level, keine erfundenen Preise, keine erfundenen
 * Reaktionszeiten.
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

/** Zeile einer Modell-/Auswahlmatrix. Nur Angaben aus offiziellen Hersteller-Produktseiten. */
export interface PartnerModelRow {
  model: string;
  roomFit: string;
  highlights: string;
}

export interface PartnerModelTable {
  title: string;
  intro?: string;
  columns: [string, string, string];
  rows: PartnerModelRow[];
  /** Quellenhinweis, wird unter der Tabelle ausgegeben. */
  sourceNote?: string;
}

/** Vertiefender Fließtext-Abschnitt (Integration, Betrieb, Auswahlkriterien). */
export interface PartnerSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PartnerRelatedLink {
  label: string;
  href: string;
  description: string;
}

export interface Partner {
  slug: string;
  name: string;
  fullName: string;
  headline: string;
  description: string;
  longDescription: string;
  categories: PartnerCategory[];
  /** Generische SLT-Aussage. Wir machen keine Aussagen zu konkreten Hersteller-Cert-Leveln. */
  partnerStatus: string;
  useCases: PartnerUseCase[];
  /** Nur verifizierte Referenzen aus slt-tg.de/projekte aufnehmen. */
  references: PartnerReference[];
  faqs: PartnerFAQ[];
  websiteUrl: string;
  ogImage?: string;
  /** Optionale Vertiefung für Fokus-Hersteller (Quick-Win-Seiten). */
  modelTable?: PartnerModelTable;
  sections?: PartnerSection[];
  relatedLinks?: PartnerRelatedLink[];
}


const DEFAULT_PARTNER_STATUS =
  "Zertifizierter Hersteller-Partner der SLT Technology Group";

export const partners: Partner[] = [
  {
    slug: "crestron",
    name: "Crestron",
    fullName: "Crestron Electronics, Inc.",
    headline: "Crestron Integrator NRW – Mediensteuerung, Touch-Panels & AV-over-IP",
    description:
      "SLT Technology Group integriert Crestron-Lösungen für Mediensteuerung, Touch-Panel-Bedienung und AV-over-IP in Enterprise-Konferenzräumen.",
    longDescription:
      "Crestron ist ein weltweit etablierter Anbieter für professionelle Mediensteuerung und Enterprise-AV-Technik. Wir setzen Crestron unter anderem für Mediensteuerung, Wireless Presentation (AirMedia) sowie Signal- und Netzwerktechnik ein. Die konkrete Auswahl an Steuerungsprozessoren, Touch-Controllern, NVX-AV-over-IP-Komponenten und Crestron Flex erfolgt projektspezifisch und herstellerneutral nach Ihrer Anforderung.",
    categories: [
      {
        name: "Touch-Controller",
        description: "Bedienoberflächen für Mediensteuerung und Raumautomation",
        products: ["Crestron TSW-Serie"],
      },
      {
        name: "Steuerungsprozessoren",
        description: "Zentrale Intelligenz für Raumautomation",
        products: ["Crestron CP4 / CP4-R"],
      },
      {
        name: "AV-over-IP (NVX / DM)",
        description: "Signalverteilung über IP- und HDBaseT-Infrastruktur",
        products: ["Crestron DM NVX", "Crestron DigitalMedia"],
      },
      {
        name: "Wireless Presentation",
        description: "Kabellose Inhalts-Übertragung in Meeting-Räumen",
        products: ["Crestron AirMedia"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "Mediensteuerung in Konferenzräumen",
        description:
          "Zentrale Touch-Bedienung für Displays, Wireless Presentation und Raumkomponenten.",
      },
      {
        title: "AV-Signalverteilung",
        description:
          "Verteilung von 4K-Video- und Audio-Signalen über bestehende IP- oder HDBaseT-Infrastruktur.",
      },
      {
        title: "Wireless Presentation",
        description:
          "BYOD-fähige Inhalte vom Notebook/Smartphone auf das Raum-Display – ohne Kabel.",
      },
    ],
    references: [],
    faqs: [
      {
        question: "Plant SLT Technology Group Crestron-Systeme herstellerneutral?",
        answer:
          "Ja. Wir setzen Crestron dort ein, wo es technisch und wirtschaftlich passt – nicht pauschal. Im Vorfeld jedes Projekts klären wir gemeinsam, welche Plattform Ihre Anforderungen am besten abdeckt.",
      },
      {
        question: "Lässt sich Crestron mit Microsoft Teams Rooms kombinieren?",
        answer:
          "Ja. Crestron Flex ist eine von Microsoft zertifizierte Teams-Rooms-Plattform. Ob Crestron Flex, ein Drittanbieter-Raumsystem oder eine Eigenintegration für Sie passt, klären wir in der Bedarfsanalyse.",
      },
      {
        question: "Was kostet eine Crestron-Integration?",
        answer:
          "Die Kosten hängen stark von Raumgröße, Komponenten und Programmieraufwand ab. Wir erstellen Ihnen ein konkretes Angebot nach Bedarfsanalyse – Pauschalpreise wären unseriös.",
      },
    ],
    websiteUrl: "https://www.crestron.com",
  },

  {
    slug: "q-sys",
    name: "Q-SYS",
    fullName: "Q-SYS (QSC, LLC)",
    headline: "Q-SYS Integrator – Audio-DSP, Steuerung und Conferencing auf einer Plattform",
    description:
      "SLT Technology Group plant und integriert Q-SYS für Audio-Signalverarbeitung, Raumsteuerung und Conferencing in Enterprise-Konferenzräumen.",
    longDescription:
      "Q-SYS (QSC) ist eine software-basierte AV-Plattform, die DSP, Steuerung und Conferencing auf einem System bündelt. Wir setzen Q-SYS für Audiotechnik (DSP, Lautsprecher) sowie Mediensteuerung ein. Die konkrete Hardware-Auswahl – Q-SYS Core, Touch-Controller, Endpunkte – richtet sich nach Raumgröße, Akustik und Conferencing-Anforderung.",
    categories: [
      {
        name: "Q-SYS Core (DSP & Steuerung)",
        description: "Zentraler Prozessor für Audio, Steuerung und Conferencing",
        products: ["Q-SYS Core"],
      },
      {
        name: "Touch-Controller",
        description: "Bedienung von Audio- und Raumsteuerung",
        products: ["Q-SYS TSC-Serie"],
      },
      {
        name: "Beschallung",
        description: "Professionelle Lautsprechersysteme für Konferenz- und Auditoriumsumgebungen",
        products: ["QSC Ceiling Speakers"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "Audio-DSP für Konferenzräume",
        description:
          "Echo-Unterdrückung, Mikrofon-Mixing und Beschallung auf einer einheitlichen Plattform.",
      },
      {
        title: "Steuerung & Conferencing",
        description:
          "Q-SYS als zentrale Raumlogik – inkl. Anbindung an Drittanbieter-Komponenten.",
      },
    ],
    references: [],
    faqs: [
      {
        question: "Wann ist Q-SYS die richtige Wahl?",
        answer:
          "Q-SYS spielt seine Stärken vor allem bei anspruchsvollen Audio-Szenarien aus – große Räume, hohe Anforderungen an Sprachverständlichkeit oder mehrere Audio-Zonen. Für Standard-Meetingräume können auch andere Plattformen wirtschaftlich sinnvoll sein.",
      },
      {
        question: "Kann Q-SYS in bestehende Netzwerke integriert werden?",
        answer:
          "Ja. Q-SYS Core-Prozessoren unterstützen Standard-Protokolle wie Dante und AES67 und werden auf abgestimmte Netzwerksegmente aufgesetzt.",
      },
      {
        question: "Welcher Q-SYS Core passt zu welchem Projekt?",
        answer:
          "QSC staffelt die Plattform nach Kanalzahl: Core Nano und Core 8 Flex bieten laut Hersteller 64×64 vernetzte Audiokanäle (Q-LAN/AES67) und acht AEC-Prozessoren – typisch für einzelne Konferenz- und Schulungsräume. Der Core 110f bringt 24 Kanäle analoges I/O und 16 AEC-Prozessoren mit. Für große, verteilte Installationen ist der Core 610 mit 256×256 Netzwerkkanälen (mit Scaling-Lizenz 384×384) und 64 AEC-Prozessoren ausgelegt.",
      },
      {
        question: "Ist Q-SYS für Microsoft Teams Rooms und Zoom Rooms zertifiziert?",
        answer:
          "Ja. QSC führt unter anderem Core Nano, Core 8 Flex, Core 110f und den NV-32-H (Core Capable) als für Microsoft Teams zertifiziert. Für Zoom Rooms nennt QSC zusätzlich Kameras der NC-Serie, Netzwerklautsprecher und den Touch-Controller TSC-101-G3 mit Q-SYS Connect als Attached Controller.",
      },
      {
        question: "Wie werden Q-SYS-Installationen im Betrieb überwacht?",
        answer:
          "Über Q-SYS Reflect Enterprise Manager – die Cloud-Plattform für Remote-Monitoring und -Management mit Asset-Übersicht, Security-Patches je System sowie Alerts per E-Mail oder Webhook. Für uns als Servicepartner ist das die Grundlage, um Störungen zu erkennen, bevor Nutzende sie melden.",
      },
      {
        question: "Lässt sich die Bedienoberfläche an unser Corporate Design anpassen?",
        answer:
          "Ja. Die User Control Interfaces (UCI) werden im UCI-Editor der Q-SYS Designer Software gestaltet und lassen sich per CSS gestalterisch anpassen. Sie laufen auf den nativen Touch-Controllern, im Browser, auf iOS-Geräten oder in der Desktop-UCI-Viewer-App – für alle Räume also ein einheitliches Bedienbild.",
      },
    ],
    modelTable: {
      title: "Q-SYS Prozessoren im Vergleich",
      intro:
        "Herstellerangaben von qsys.com. Kanalzahlen sind Maximalwerte; Dante-Nutzung reduziert je nach Modell die verfügbare Q-LAN-Kapazität.",
      columns: ["Modell", "Typischer Einsatz", "Technische Eckdaten"],
      rows: [
        {
          model: "Core Nano",
          roomFit: "einzelne Konferenz- und Schulungsräume",
          highlights:
            "64×64 Q-LAN/AES67, bis 32×32 Dante (8×8 inklusive), 8 AEC-Prozessoren, 8×8 USB-AV-Bridging, per Scaling-Lizenz erweiterbar",
        },
        {
          model: "Core 8 Flex",
          roomFit: "Räume mit analogem I/O-Bedarf",
          highlights:
            "64×64 Q-LAN/AES67, zusätzlich 8 Flex-Kanäle on board plus 8 GPIO, 8 AEC-Prozessoren, Audioaufnahme/-wiedergabe",
        },
        {
          model: "Core 110f",
          roomFit: "Boardrooms, Auditorien, Multi-Zonen-Audio",
          highlights:
            "24 Kanäle analoges I/O (davon 8 Flex), 16 AEC-Prozessoren, bis 4 NM-T1 Netzwerkmikrofone, 16×16 USB-AV-Bridging",
        },
        {
          model: "Core 610",
          roomFit: "Campus, Multi-Site, geschäftskritische Installationen",
          highlights:
            "256×256 Netzwerkkanäle (384×384 mit Lizenz), 64 AEC-Prozessoren (96 mit Lizenz), 64 VoIP-Instanzen, iDRAC-Monitoring",
        },
        {
          model: "NV-32-H (Core Capable)",
          roomFit: "Räume mit Video- und Audioanforderung in einem Gerät",
          highlights:
            "Netzwerk-Video-Endpunkt mit optionalem Core Mode: 32×32 Audiokanäle, 8 AEC-Kanäle, integrierter 3×2-HDMI-Videoschalter",
        },
      ],
      sourceNote:
        "Quelle: Produktangaben von qsys.com. Lizenzumfang und Kanalkapazität prüfen wir projektbezogen.",
    },
    sections: [
      {
        title: "Eine Plattform statt drei Gewerke",
        paragraphs: [
          "Der eigentliche Hebel von Q-SYS liegt nicht in einzelnen Geräten, sondern in der Konsolidierung: Audio-DSP, Raumsteuerung, USB-Conferencing und – über die NV-Serie – Videorouting laufen auf einer Softwareplattform mit einem Konfigurationswerkzeug, der Q-SYS Designer Software.",
          "Für den Betrieb bedeutet das weniger Schnittstellen zwischen Systemen, eine Fehlerquelle weniger je Raum und ein einheitliches Bedienkonzept über alle Raumklassen hinweg. Für die Programmierung stehen No-Code-Bausteine, der Block Controller und eine vollwertige Lua-Scripting-Umgebung zur Verfügung – wir wählen die Tiefe passend zu Ihrer Wartbarkeitsanforderung.",
        ],
      },
      {
        title: "Netzwerk-Audio: Q-LAN, AES67 und Dante",
        paragraphs: [
          "Q-SYS transportiert Audio nativ über Q-LAN und unterstützt AES67 sowie – je nach Modell und Lizenz – Dante. Damit lassen sich vorhandene Dante-Bestände einbinden, statt sie zu ersetzen. Wichtig ist die saubere Netzwerkplanung: eigenes VLAN oder abgestimmtes Segment, QoS-Priorisierung, PTP-Zeitsynchronisation und ausreichend dimensionierte Uplinks.",
        ],
        bullets: [
          "Getrenntes VLAN oder abgestimmtes Segment für AV-over-IP",
          "QoS/DSCP-Priorisierung für Audio- und Clock-Pakete",
          "PTP-Zeitsynchronisation mit definiertem Grandmaster",
          "Dante-Kanäle bewusst lizenzieren – sie zehren an der Q-LAN-Kapazität",
        ],
      },
      {
        title: "Betrieb und Monitoring als Managed Service",
        paragraphs: [
          "Mit Q-SYS Reflect Enterprise Manager überwachen wir Systemzustand, Versionsstände und Alarme zentral. In Kombination mit unseren Wartungsverträgen heißt das: definierte Reaktionswege, geplante Update-Fenster und dokumentierte Konfigurationsstände statt individueller Insellösungen je Standort.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Service & Wartung für AV-Systeme",
        href: "/service-wartung",
        description: "Monitoring, Wartungsverträge und Managed Services für Q-SYS-Installationen.",
      },
      {
        label: "Konferenzraum-Ausstattung",
        href: "/konferenzraum-ausstattung",
        description: "Raumklassen und Komponenten – von Huddle Room bis Boardroom.",
      },
      {
        label: "IT-Netzwerk als AV-Fundament",
        href: "/partner/cisco",
        description: "Netzwerkplanung für AV-over-IP, QoS und Segmentierung.",
      },
    ],
    websiteUrl: "https://www.qsys.com",

  },

  {
    slug: "sennheiser",
    name: "Sennheiser",
    fullName: "Sennheiser electronic GmbH & Co. KG",
    headline: "Sennheiser Partner – TeamConnect für unsichtbare Konferenzraum-Audio",
    description:
      "SLT Technology Group integriert Sennheiser TeamConnect für hochwertige Konferenzraum-Audio mit Deckenmikrofonen und Soundbars.",
    longDescription:
      "Sennheiser TeamConnect ist eine Audio-Plattform für Business-Kommunikation – mit Schwerpunkt auf Deckenmikrofonen (TeamConnect Ceiling) und integrierten Soundbars. Wir setzen Sennheiser dort ein, wo Audioqualität, dezente Optik (keine sichtbaren Tischmikrofone) und einfache Anbindung an Microsoft Teams oder Zoom Rooms gefragt sind.",
    categories: [
      {
        name: "TeamConnect Ceiling",
        description: "Deckenmikrofonlösung mit Beamforming für Konferenzräume",
        products: ["Sennheiser TeamConnect"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "Boardroom ohne sichtbare Mikrofone",
        description:
          "Deckenmikrofone halten den Tisch frei und liefern gleichmäßige Sprachqualität.",
      },
      {
        title: "Hybride Meeting-Räume",
        description:
          "Native Anbindung an Microsoft Teams Rooms- und Zoom-Rooms-Umgebungen.",
      },
    ],
    references: [],
    faqs: [
      {
        question: "Was ist Beamforming?",
        answer:
          "Eine digitale Mikrofontechnologie, die den Schall des aktiven Sprechers gezielt erfasst und Nebengeräusche unterdrückt – auch aus der Deckenmontage.",
      },
      {
        question: "Für welche Raumgrößen eignet sich TeamConnect Ceiling?",
        answer:
          "Die genaue Abdeckung hängt von Raumgeometrie und Akustik ab. Wir prüfen das im Rahmen der Bedarfs- und Akustik-Analyse, bevor wir eine konkrete Konfiguration vorschlagen.",
      },
    ],
    websiteUrl:
      "https://www.sennheiser.com/de-de/professional/audio-for-video/business-communication",
  },

  {
    slug: "shure",
    name: "Shure",
    fullName: "Shure Incorporated",
    headline: "Shure Integrator – Konferenzmikrofone und IntelliMix-Audio",
    description:
      "SLT Technology Group integriert Shure-Konferenzmikrofone und IntelliMix-DSP in Boardrooms, Schulungs- und Besprechungsräumen.",
    longDescription:
      "Shure ist einer der etabliertesten Hersteller für Konferenzmikrofone, inklusive der Microflex- und MXA-Reihe (z. B. MXA920 Deckenmikrofon) sowie IntelliMix-DSP. Wir setzen Shure in Räumen ein, in denen verlässliche Sprachverständlichkeit und automatische Mikrofon-Steuerung kritisch sind.",
    categories: [
      {
        name: "Konferenzmikrofone",
        description: "Tisch- und Deckenmikrofone für Besprechungs- und Schulungsräume",
        products: ["Shure MXA920", "Shure Microflex (MX-/MXW-Serie)"],
      },
      {
        name: "DSP / Audio-Verarbeitung",
        description: "Mikrofon-Mixing, Echo-Unterdrückung, Signalrouting",
        products: ["Shure IntelliMix"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "Schulungs- und Konferenzräume",
        description:
          "Automatisches Mikrofon-Mixing für hybride Meetings ohne sichtbare Tischmikrofone.",
      },
      {
        title: "Boardroom-Audio",
        description:
          "Hohe Sprachverständlichkeit kombiniert mit dezenter Decken- oder Tisch-Installation.",
      },
    ],
    references: [
      {
        projectName: "Aluminium Norf GmbH (Neuss, 2024)",
        description:
          "Ausbau von zwei Räumen zu Videokonferenz- und Schulungsumgebungen mit Shure, Nureva und AVer Tracking-Kameras.",
      },
    ],
    faqs: [
      {
        question: "Wann ist ein Shure MXA920 sinnvoll?",
        answer:
          "Wenn der Tisch frei bleiben soll und die Raumakustik eine Deckenlösung zulässt. Für sehr lange Tafeln oder mehrere Zonen prüfen wir alternativ Kombinationen aus Decken- und Tischmikrofonen.",
      },
      {
        question: "Lassen sich Shure-Komponenten mit anderen Plattformen kombinieren?",
        answer:
          "Ja. IntelliMix kann in viele Raum- und DSP-Plattformen integriert werden. Welche Kombination für Sie sinnvoll ist, klären wir in der Fachplanung.",
      },
    ],
    websiteUrl: "https://www.shure.com/de-DE",
  },

  {
    slug: "huddly",
    name: "Huddly",
    fullName: "Huddly AS",
    headline: "Huddly Partner – KI-gestützte Konferenzraum-Kameras",
    description:
      "SLT Technology Group integriert Huddly-Kameras (u. a. L1, S1, IQ) für KI-gestützte Video-Erkennung in Konferenz- und Besprechungsräumen.",
    longDescription:
      "Huddly ist ein norwegischer Hersteller für KI-gestützte Konferenzkameras mit Schwerpunkt auf intelligenter Rahmung, Sprecher-Erkennung und Auto-Framing. Wir setzen Huddly insbesondere in Räumen ein, in denen einfache Bedienung und eine ausgewogene Bildaufteilung für remote Teilnehmende wichtig sind.",
    categories: [
      {
        name: "USB-Konferenzkameras",
        description: "KI-gestützte Kameras mit Auto-Framing und Sprecher-Erkennung",
        products: ["Huddly L1", "Huddly S1", "Huddly IQ"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "Hybride Besprechungsräume",
        description:
          "Automatische Bildausschnitte sorgen für gleichberechtigte Wahrnehmung remote Teilnehmender.",
      },
      {
        title: "Management Rooms",
        description:
          "Mehrere Huddly-Kameras pro Raum für Multi-Perspektiv-Ansichten und Sprecher-Tracking.",
      },
    ],
    references: [
      {
        projectName: "GEA Farm Technologies (Bönen, 2024–2026)",
        description:
          "Management Room und drei Besprechungsräume mit Huddly L1 und S1 Kameras, Nureva HDL-310 Audio, Iiyama 65\" Displays und Barco ClickShare CX.",
      },
    ],
    faqs: [
      {
        question: "Was unterscheidet Huddly von klassischen PTZ-Kameras?",
        answer:
          "Huddly arbeitet rein digital mit KI-basierter Rahmung – ohne mechanische Schwenk-/Neige-Mechanik. Das bedeutet weniger Verschleiß und sehr schnelle Reaktionszeit, aber weniger Detail-Zoom als bei klassischer PTZ.",
      },
      {
        question: "Welche Plattformen werden unterstützt?",
        answer:
          "Huddly ist USB-basiert und arbeitet mit allen gängigen UC-Plattformen (Microsoft Teams, Zoom, Webex) sowie BYOD-Setups.",
      },
      {
        question: "Welche Huddly-Kamera passt zu welchem Raum?",
        answer:
          "Huddly ordnet die S1 kleinen bis mittleren Meetingräumen zu (12-MP-Sensor, 120° horizontales Sichtfeld) und die L1 mittleren bis großen Räumen (20,3-MP-1-Zoll-Sensor, 92° horizontal, bis 5x Digitalzoom). Für größere Räume gibt es Huddly Crew als KI-gesteuertes Multi-Kamera-System, das laut Hersteller auf bis zu fünf Kameras skaliert.",
      },
      {
        question: "Brauchen Huddly-Kameras PoE oder USB?",
        answer:
          "Das hängt vom Modell ab: die IQ wird über USB-C mit Strom versorgt, L1 und S1 sind netzwerkbasiert und werden über den Huddly USB-to-PoE-Adapter angebunden (Cat 5e/6/7). Das ist ein Vorteil bei größeren Kabelwegen – die Kamera kann deutlich weiter vom Raumrechner entfernt montiert werden als bei reinen USB-Lösungen.",
      },
      {
        question: "Für welche Plattformen sind die Kameras zertifiziert?",
        answer:
          "Huddly führt für L1 und S1 Zertifizierungen für Microsoft Teams sowie für Barco ClickShare, für die L1 zusätzlich Zoom Rooms inkl. Intelligent Director. Die IQ ist für Microsoft Teams und Teams Rooms zertifiziert, Huddly Crew für Microsoft Teams (auch im Fünf-Kamera-Setup) und Zoom Rooms. Das ist relevant, wenn Sie ein bestehendes ClickShare- oder Teams-Rooms-Konzept ergänzen.",
      },
      {
        question: "Was bringt Room Analytics konkret?",
        answer:
          "L1, S1 und IQ erkennen und zählen Personen im Sichtfeld; die Daten sind laut Hersteller über die Huddly InSights API abrufbar. Für Unternehmen heißt das: belastbare Auslastungsdaten je Raum statt Bauchgefühl – eine gute Grundlage, um Raumklassen und künftige Investitionen zu priorisieren. Datenschutz und Betriebsratsthemen klären wir dabei vorab mit Ihnen.",
      },
    ],
    modelTable: {
      title: "Huddly Kameras im Vergleich",
      intro:
        "Herstellerangaben von huddly.com. Die finale Kameraauswahl treffen wir nach Raumtiefe, Tischgeometrie und Montageort.",
      columns: ["Modell", "Raumgröße laut Hersteller", "Technische Eckdaten"],
      rows: [
        {
          model: "Huddly IQ",
          roomFit: "Huddle- und kleinere Besprechungsräume",
          highlights:
            "12-MP-Sensor (1/2.3\"), 120° horizontal / 150° diagonal, USB-C, Group Framing und Gallery View, zertifiziert für Microsoft Teams Rooms",
        },
        {
          model: "Huddly S1",
          roomFit: "kleine bis mittlere Meetingräume",
          highlights:
            "12-MP-Sensor, 120° horizontal / 150° diagonal, 4x Digitalzoom, Netzwerkanbindung über USB-to-PoE-Adapter, Genius Framing",
        },
        {
          model: "Huddly L1",
          roomFit: "mittlere bis große Meetingräume",
          highlights:
            "20,3-MP-1-Zoll-Sensor (6K), 92° horizontal / 103° diagonal, 5x Digitalzoom, PoE, Genius und Speaker Framing, InSights-Analytics",
        },
        {
          model: "Huddly Crew",
          roomFit: "6–12 Personen, mit Add-on-Kameras größere Räume",
          highlights:
            "KI-gesteuertes Multi-Kamera-System auf L1-Basis, laut Hersteller auf bis zu fünf Kameras skalierbar, Modi Speaker Focus und Team Engagement",
        },
      ],
      sourceNote:
        "Quelle: Produktangaben von huddly.com. Für verbindliche Detailwerte ziehen wir vor Angebotslegung das aktuelle Datenblatt heran.",
    },
    sections: [
      {
        title: "Warum digitales Framing statt mechanischer PTZ?",
        paragraphs: [
          "Huddly nimmt das gesamte Sichtfeld mit hoher Sensorauflösung auf und schneidet den relevanten Bildausschnitt digital heraus. Es gibt keine Motorik, die verschleißt, und keine hörbaren Fahrgeräusche im Raum. Umschnitte erfolgen praktisch verzögerungsfrei.",
          "Der Preis dafür ist ein begrenzter Detail-Zoom in sehr tiefen Räumen. Genau hier setzt Huddly Crew an: mehrere Kameras aus unterschiedlichen Perspektiven, aus denen die KI automatisch die passende Einstellung wählt – näher am Verhalten einer Bildregie als an einer einzelnen Frontkamera.",
        ],
      },
      {
        title: "Verkabelung und Montage in der Praxis",
        paragraphs: [
          "Weil L1, S1 und Crew über Ethernet und PoE-Adapter angebunden werden, sind längere Strecken zwischen Kamera und Raumrechner unkritisch. Das erlaubt eine Montage genau dort, wo der Blickwinkel stimmt – über oder unter dem Display, an der Wand oder auf einem Stativ –, ohne USB-Extender-Ketten.",
        ],
        bullets: [
          "Kameraposition auf Augenhöhe der sitzenden Teilnehmenden anstreben",
          "Gegenlicht durch Fenster in der Bildachse vermeiden oder verschatten",
          "Cat-Verkabelung und PoE-Port in der Raumplanung früh mitdenken",
          "Bei tiefen Räumen Multi-Kamera-Setup statt maximalem Digitalzoom",
        ],
      },
      {
        title: "Kombination mit Audio und Wireless Presentation",
        paragraphs: [
          "Kamera und Audio gehören zusammen betrachtet: In unserem Projekt bei GEA Farm Technologies haben wir Huddly L1 und S1 mit Nureva-HDL-310-Audio, 65-Zoll-Displays und Barco ClickShare CX kombiniert. Huddly führt für L1 und S1 zudem eine Zertifizierung für Barco ClickShare – für BYOD-Räume mit ClickShare ist das eine belastbare Grundlage.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Konferenzraum-Ausstattung planen",
        href: "/konferenzraum-ausstattung",
        description: "Kamera, Audio und Display als abgestimmtes Raumkonzept.",
      },
      {
        label: "Barco ClickShare",
        href: "/partner/barco",
        description: "Wireless Presentation und BYOM als Ergänzung zur Huddly-Kamera.",
      },
      {
        label: "Service & Wartung",
        href: "/service-wartung",
        description: "Betrieb, Firmware-Pflege und Support für Konferenzraumtechnik.",
      },
    ],
    websiteUrl: "https://www.huddly.com",

  },

  {
    slug: "barco",
    name: "Barco",
    fullName: "Barco N.V.",
    headline: "Barco Partner – ClickShare Wireless Presentation und Conferencing",
    description:
      "SLT Technology Group integriert Barco ClickShare für kabellose Präsentation und ClickShare Conference für hybride Meetings in Enterprise-Räumen.",
    longDescription:
      "Barco ClickShare ist eine etablierte Plattform für Wireless Presentation und BYOM-Conferencing. Wir setzen Barco vor allem dann ein, wenn Wireless Presentation, einfache BYOD-Bedienung und Kompatibilität mit unterschiedlichen Notebooks und Plattformen im Vordergrund stehen.",
    categories: [
      {
        name: "Wireless Presentation",
        description: "Kabellose Übertragung vom Notebook/Tablet auf das Raum-Display",
        products: ["Barco ClickShare"],
      },
      {
        name: "BYOM Conferencing",
        description: "Eigene Geräte nutzen ohne Plattform-Lock-In",
        products: ["Barco ClickShare Conference (CX-Serie)"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "BYOD-Meetingräume",
        description:
          "Gäste oder externe Geräte ohne Treiber-Installation auf das Raum-Display bringen.",
      },
      {
        title: "Hybride Meetings ohne Raum-PC",
        description:
          "ClickShare Conference verbindet das eigene Notebook mit Raum-Kamera und Audio.",
      },
    ],
    references: [
      {
        projectName: "GEA Farm Technologies (Bönen, 2024–2026)",
        description:
          "Barco ClickShare CX im Management Room und in den Besprechungsräumen – BYOD-fähig und sofort einsatzbereit.",
      },
    ],
    faqs: [
      {
        question: "Worin unterscheidet sich ClickShare Conference von klassischer Wireless Presentation?",
        answer:
          "Klassisches ClickShare überträgt nur Inhalte (Präsentation). ClickShare Conference verbindet zusätzlich Raum-Kamera und Audio mit dem Notebook – damit lässt sich jede UC-Plattform (Teams, Zoom, Webex …) ohne Raum-PC nutzen.",
      },
      {
        question: "Funktioniert ClickShare auch mit nicht-Windows-Geräten?",
        answer:
          "Ja. Neben Windows werden macOS, iOS und Android unterstützt – über den ClickShare Button und/oder die ClickShare-App.",
      },
    ],
    websiteUrl: "https://www.barco.com/de/clickshare",
  },

  {
    slug: "yealink",
    name: "Yealink",
    fullName: "Yealink Network Technology Co., Ltd.",
    headline: "Yealink Partner – Teams Rooms, MeetingBars und MeetingBoards",
    description:
      "SLT Technology Group integriert Yealink-Videokonferenz-Endgeräte, MeetingBars und MeetingBoards in Microsoft Teams Rooms- und Zoom-Rooms-Umgebungen.",
    longDescription:
      "Yealink bietet ein breites Portfolio an Microsoft-Teams- und Zoom-zertifizierten Raumsystemen, von MeetingBars (All-in-One Soundbar mit Kamera) über MeetingBoards (interaktive Displays mit Whiteboard) bis hin zu Telefonen und Headsets. Wir setzen Yealink dort ein, wo standardisierte Raumkonzepte und ein gutes Preis-Leistungs-Verhältnis im Vordergrund stehen.",
    categories: [
      {
        name: "MeetingBar (All-in-One)",
        description: "Soundbar mit integrierter Kamera für Teams- und Zoom-Rooms",
        products: [
          "Yealink MeetingBar A10",
          "Yealink MeetingBar A20",
          "Yealink MeetingBar A30",
          "Yealink MeetingBar A50",
        ],

      },
      {
        name: "MeetingBoard",
        description: "Interaktives Display mit integrierter Kamera, Audio und Whiteboard-Funktion",
        products: ["Yealink MeetingBoard"],
      },
      {
        name: "Headsets & Konferenztelefone",
        description: "Audio-Endgeräte für hybride Arbeit",
        products: ["Yealink BH-Serie Headsets", "Yealink CP-Serie Konferenztelefone"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "Standardisierter Teams-Rooms-Rollout",
        description:
          "MeetingBars als einheitliches Raumkonzept über mehrere Standorte – mit zentralem Device-Management.",
      },
      {
        title: "Kreativ- und Workshop-Räume",
        description:
          "MeetingBoards mit integriertem Whiteboard für agile Teams und Design-Workshops.",
      },
    ],
    references: [],
    faqs: [
      {
        question: "Worin unterscheiden sich MeetingBar und MeetingBoard?",
        answer:
          "Die MeetingBar ist eine Soundbar mit Kamera für ein bestehendes Raum-Display. Das MeetingBoard ist ein All-in-One-Display mit integrierter Kamera, Audio und interaktivem Whiteboard – ideal für Workshop-Räume.",
      },
      {
        question: "Lassen sich Yealink-Geräte zentral verwalten?",
        answer:
          "Ja. Über die Yealink Device Management Platform (YDMP) oder das Microsoft Teams Admin Center können Geräte zentral konfiguriert, aktualisiert und überwacht werden.",
      },
      {
        question: "Welche MeetingBar passt zu welcher Raumgröße?",
        answer:
          "Yealink gibt für die MeetingBar A10 Räume mit rund 1–5 Personen (Huddle/Fokusraum) an, für die A20 kleine bis mittlere Räume mit etwa 6–10 Personen und für die A30 mittelgroße Räume. Die A50 mit Triple-Kamerasystem (Schärfebereich laut Hersteller 0,7–8 m) und einer Mikrofon-Reichweite von bis zu 10 Metern ist für mittlere bis große Räume ausgelegt. Wir prüfen die Auswahl immer gegen Raumgeometrie, Akustik und Displaygröße.",
      },
      {
        question: "Sind Yealink-Raumsysteme für Microsoft Teams zertifiziert?",
        answer:
          "Ja. Die MeetingBar-Serie (A10, A20, A30, A50) ist von Yealink als Microsoft Teams Rooms on Android geführt, die MeetingBoard Pro zusätzlich für Zoom Rooms. Für BYOD-Szenarien lassen sich die Geräte in den USB-/BYOD-Modus umschalten und mit dem eigenen Notebook nutzen.",
      },
      {
        question: "Wie lässt sich ein Yealink-Rollout über mehrere Standorte betreiben?",
        answer:
          "Yealink bietet dafür zwei Wege: den Yealink Management Cloud Service (YMCS) als Cloud-Dienst und die Yealink Device Management Platform (YDMP) als On-Premise-Variante. Beide erlauben zentrale Konfiguration, Firmware-Verteilung und Monitoring. Da es sich um Teams-Rooms-on-Android-Geräte handelt, ordnen wir das Device-Management zusätzlich in Ihre bestehende Teams-Administration ein.",
      },
      {
        question: "Was ist bei Erweiterungen und Zubehör zu beachten?",
        answer:
          "Die MeetingBar A20 und A30 lassen sich mit dem Yealink RoomPanel und dem drahtlosen VCM36-Mikrofon erweitern; an die A30 lassen sich laut Hersteller bis zu vier WPP30 Wireless Presentation Pods koppeln. Bei der MeetingBoard Pro ist zu beachten, dass die PTZ-Kameras der ersten MeetingBoard-Generation nicht kompatibel sind – hier wird die MB-12X Pro benötigt.",
      },
    ],
    modelTable: {
      title: "Yealink Raumsysteme im Vergleich",
      intro:
        "Herstellerangaben von yealink.com als Orientierung für die Raumzuordnung. Verbindliche Auslegung erfolgt nach Aufmaß und Akustikbetrachtung.",
      columns: ["Modell", "Raumgröße laut Hersteller", "Technische Eckdaten"],
      rows: [
        {
          model: "MeetingBar A10",
          roomFit: "1–5 Personen (Huddle-/Fokusraum)",
          highlights:
            "4K-Kamera, 120° DFoV, 4x E-Zoom, Auto Framing & Speaker Tracking, Teams Rooms on Android, BYOD-Modus",
        },
        {
          model: "MeetingBar A20",
          roomFit: "6–10 Personen (kleiner bis mittlerer Raum)",
          highlights:
            "20-MP-Sensor, 120° FOV, 8er-MEMS-Mikrofonarray bis 6 m, erweiterbar mit RoomPanel und VCM36",
        },
        {
          model: "MeetingBar A30",
          roomFit: "mittelgroße Räume",
          highlights:
            "8er-MEMS-Mikrofonarray bis 6 m, AI Framing, bis zu vier WPP30 Wireless Presentation Pods",
        },
        {
          model: "MeetingBar A50",
          roomFit: "mittlere bis große Räume",
          highlights:
            "Triple-Kamerasystem (3×50 MP, Schärfebereich 0,7–8 m), 4K30-Ausgabe, Mikrofon-Pickup bis 10 m",
        },
        {
          model: "MeetingBoard Pro",
          roomFit: "65\", 75\" oder 86\" – Workshop- und Besprechungsräume",
          highlights:
            "4K-Multi-Touch-Display, integriertes Triple-50-MP-Kamerasystem, Dual-Display via HDMI-Out (4K@60 Hz), Teams Rooms on Android und Zoom Rooms",
        },
      ],
      sourceNote:
        "Quelle: Produktangaben von yealink.com. Ausstattungsdetails können sich modell- und firmwareabhängig ändern – wir prüfen den Stand vor jedem Angebot.",
    },
    sections: [
      {
        title: "Auswahl: MeetingBar oder MeetingBoard?",
        paragraphs: [
          "Die Entscheidung fällt in der Praxis über das Raumkonzept: Wo bereits ein Display vorhanden ist oder ein großes Bild benötigt wird, ist eine MeetingBar unter dem Display der wirtschaftliche Weg. Wo interaktiv gearbeitet wird – Whiteboarding, Workshops, Design Sessions – spielt das MeetingBoard Pro seine Stärken als All-in-One-Gerät mit Touch, Kamera und Audio aus.",
        ],
        bullets: [
          "Bestehendes Display, Standard-Meetingraum → MeetingBar A10 / A20 / A30",
          "Langer Konferenztisch, größerer Raum → MeetingBar A50 (Pickup bis 10 m)",
          "Interaktive Zusammenarbeit, Whiteboarding → MeetingBoard Pro",
          "Zweites Display für Inhalt + Teilnehmende → MeetingBoard Pro mit HDMI-Out",
        ],
      },
      {
        title: "Rollout und Betrieb über mehrere Standorte",
        paragraphs: [
          "Für Multi-Site-Rollouts standardisieren wir Raumtypen statt Einzelräume: identische Gerätekombination je Raumklasse, identische Verkabelung, identisches Bedienkonzept. Das reduziert Schulungsaufwand und macht Ersatzteil- und Servicelogistik planbar.",
          "Den laufenden Betrieb bilden wir über YMCS beziehungsweise YDMP ab – inklusive Firmware-Stand, Geräteinventar und Monitoring. Damit lassen sich Firmware-Wellen kontrolliert ausrollen, statt Räume einzeln anzufassen.",
        ],
      },
      {
        title: "Netzwerk- und Teams-Voraussetzungen",
        paragraphs: [
          "Yealink-Raumsysteme sind Netzwerkgeräte: sie benötigen ein sauber geplantes Segment, freigegebene Ports für den UC-Dienst, ausreichende QoS-Priorisierung für Sprach- und Videopakete sowie ein Konzept für Zertifikate und Geräte-Accounts. Diese Punkte klären wir gemeinsam mit Ihrer IT vor der Installation – erfahrungsgemäß entstehen die meisten Störungen im Betrieb nicht am Endgerät, sondern an Netzwerk- und Identity-Themen.",
        ],
      },
    ],
    relatedLinks: [
      {
        label: "Konferenzraum-Ausstattung planen",
        href: "/konferenzraum-ausstattung",
        description: "Raumklassen, Komponenten und Auslegung für Teams- und Zoom-Räume.",
      },
      {
        label: "Service & Wartung für AV-Technik",
        href: "/service-wartung",
        description: "Managed Services, Firmware-Pflege und Störungsmanagement im Rollout.",
      },
      {
        label: "Videokonferenz-Systeme",
        href: "/loesungen",
        description: "Lösungsüberblick für hybride Meetings und Multi-Site-Umgebungen.",
      },
    ],
    websiteUrl: "https://www.yealink.com",

  },

  {
    slug: "cisco",
    name: "Cisco",
    fullName: "Cisco Systems, Inc.",
    headline: "Cisco Partner – IT-Netzwerk, Meraki und WLAN für AV-Infrastruktur",
    description:
      "SLT Technology Group plant und integriert Cisco- und Cisco-Meraki-Netzwerkinfrastruktur als Fundament für moderne AV- und Kommunikationssysteme.",
    longDescription:
      "Cisco und Cisco Meraki sind etablierte Plattformen für Enterprise-Netzwerke, Switching, WLAN und Cloud-managed Infrastructure. Wir setzen Cisco insbesondere als Fundament für AV-over-IP, Unified Communications und sichere WLAN-Versorgung an mehreren Standorten ein – inklusive Funkausleuchtung (z. B. mit EKAHAU) und strukturierter Verkabelung.",
    categories: [
      {
        name: "Switching & Routing",
        description: "Managed Switches und Router für unternehmensweite Netzwerke",
        products: ["Cisco Catalyst", "Cisco Meraki MS-Switches"],
      },
      {
        name: "WLAN / Wireless",
        description: "Enterprise-WLAN inkl. Funkausleuchtung und Site Survey",
        products: ["Cisco Meraki MR Access Points"],
      },
      {
        name: "Sicherheit",
        description: "Firewall- und SD-WAN-Lösungen für Multi-Site-Umgebungen",
        products: ["Cisco Meraki MX"],
      },
    ],
    partnerStatus: DEFAULT_PARTNER_STATUS,
    useCases: [
      {
        title: "WLAN-Rollout über mehrere Werksstandorte",
        description:
          "Vom Site Survey über die Verkabelung bis zum laufenden Betrieb – Cloud-managed über Cisco Meraki.",
      },
      {
        title: "Sichere AV-Netzwerksegmentierung",
        description:
          "VLAN-Konzepte für AV-over-IP und UC, abgegrenzt vom restlichen Produktivnetz.",
      },
    ],
    references: [
      {
        projectName: "Sonoco – mehrere Standorte (deutschlandweit, 2022–2023)",
        description:
          "Komplette WiFi-Infrastruktur für mehrere Werksstandorte: EKAHAU-Ausleuchtung, Cat-7-Verkabelung und Cisco Meraki Implementierung im laufenden 24/7-Betrieb.",
      },
    ],
    faqs: [
      {
        question: "Warum oft Cisco Meraki statt klassischer Cisco-Catalyst-Switches?",
        answer:
          "Meraki ist Cloud-managed – das vereinfacht den Betrieb mehrerer Standorte deutlich. Für rein lokal verwaltete Umgebungen oder bestehende Catalyst-Landschaften kann klassisches Cisco besser passen. Wir bewerten das je Projekt.",
      },
      {
        question: "Übernimmt SLT auch die Funkausleuchtung?",
        answer:
          "Ja. Wir führen WLAN-Site-Surveys (z. B. mit EKAHAU) durch und planen die Access-Point-Positionierung auf Basis der gemessenen Ausleuchtung – nicht nach Bauchgefühl.",
      },
    ],
    websiteUrl: "https://www.cisco.com/c/de_de/index.html",
  },
];

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}

export function getAllPartnerSlugs(): string[] {
  return partners.map((p) => p.slug);
}

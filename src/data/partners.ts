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
        products: ["Yealink MeetingBar A20", "Yealink MeetingBar A30"],
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

/**
 * Datenmodell für Projekt-Detailseiten (/projekte/{slug}).
 * Liefert Inhalt für ProjectPage, Schema-Builder (CaseStudy/Article)
 * und PROJECT_ROUTES in seo-routes.ts.
 */

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectResult {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  location: string;
  year: string;
  datePublished?: string;
  dateModified?: string;
  logo?: string;
  relatedService?: { url: string; label: string };
  heroAlt?: string;
  imageAlts?: Record<string, string>;
  relatedArticle?: { url: string; label: string };
  partnerLink?: { url: string; label: string };
  category: string;
  shortDescription: string; // 1-2 Sätze, für Übersicht und Meta-Description
  heroImage: string;
  galleryImages?: string[];

  // Vollständiger Case-Study-Content
  challenge: string;
  solution: string;
  results: ProjectResult[];

  // Technik-Stack (additionalProperty für Schema)
  techStack: ProjectSpec[];

  tags: string[];

  // Optional: externer Link zur Kunden-Website
  externalLink?: { url: string; label: string };
}

export const PROJECTS: Project[] = [
  {
    slug: "knauber-outdoor-led-wartung-bonn",
    name: "Knauber – Outdoor-LED-Wartung in Bonn",
    client: "Carl Knauber Holding GmbH & Co. KG",
    location: "Bonn",
    year: "2026",
    datePublished: "2026-10-24",
    dateModified: "2026-10-31",
    category: "Outdoor-LED · Service & Wartung",
    shortDescription: "Knauber vertraut SLT Technology Group die Wartung seiner Outdoor-LED-Anlagen in Bonn an. Lüfter- und Netzteiltausch, Ersatzteilpool und Migration in die VNNOX EU Cloud.",
    heroImage: "/assets/projects/knauber/knauber-led-wartung-buehne.webp",
    heroAlt: "Outdoor-LED-Anlage bei Knauber in Bonn mit aufgestellter Höhenarbeitsbühne von SLT Rental",
    logo: "/assets/projects/knauber/knauber-logo.webp",
    galleryImages: ["/assets/projects/knauber/knauber-led-wartung-buehne.webp", "/assets/projects/knauber/knauber-led-servicezugang.webp", "/assets/projects/knauber/knauber-led-werbetafel-bonn.webp"],
    imageAlts: {
      "/assets/projects/knauber/knauber-led-wartung-buehne.webp": "Outdoor-LED-Anlage bei Knauber in Bonn mit Höhenarbeitsbühne von SLT Rental",
      "/assets/projects/knauber/knauber-led-servicezugang.webp": "Geöffnete rückseitige Serviceklappen der Knauber-LED-Anlage mit Lüftern, Netzteilen und Verkabelung",
      "/assets/projects/knauber/knauber-led-werbetafel-bonn.webp": "LED-Werbetafel am Knauber-Standort in Bonn mit angezeigtem Knauber-Logo",
    },
    challenge: "Outdoor-LED-Anlagen benötigen einen sicheren Zugang zu den technischen Komponenten und eine Wartung, die Bildausgabe, Lüftung und Steuerung zusammen betrachtet. Knauber aus Bonn hat die Wartung seiner LED-Outdoor-Anlagen vertrauensvoll in die Hände der SLT Technology Group gelegt. Die Kundenfotos zeigen die Anlage, den rückseitigen Servicezugang und die dafür bereitgestellte Höhenarbeitsbühne.",
    solution: "Zu Beginn haben wir die Lüfter und Netzteile der Outdoor-LED-Anlagen ausgetauscht. Damit wurden die Komponenten für Belüftung und Stromversorgung erneuert. Parallel haben wir einen passenden Ersatzteilpool aufgebaut, um den Kunden bei weiteren Servicefällen schnellstmöglich bedienen zu können. Anschließend haben wir die Anlagen vollständig in die NovaStar VNNOX EU Cloud migriert. Das verbindet kontinuierliches Monitoring und Fernwartung mit der Wartung vor Ort: Ein mechanischer oder elektrischer Austausch bleibt ein Vor-Ort-Einsatz. Über das verbundene Unternehmen SLT Rental koordinieren wir die erforderlichen Höhenarbeitsbühnen gemeinsam mit unserem Technikeinsatz. Zufahrt, Aufstellfläche und sicherer Zugang werden vor jedem Einsatz abgestimmt.",
    results: [
      { title: "Lüfter und Netzteile getauscht", description: "Als erste Maßnahmen wurden Lüfter und Netzteile erneuert – die Komponenten für Belüftung und Stromversorgung der LED-Anlagen." },
      { title: "Ersatzteilpool aufgebaut", description: "Ein auf die Kundenanlagen abgestimmter Ersatzteilpool unterstützt die schnelle Bereitstellung benötigter Komponenten." },
      { title: "Cloud-Migration abgeschlossen", description: "Die Anlagen wurden in die NovaStar VNNOX EU Cloud migriert, für kontinuierliches Monitoring und Fernwartung." },
      { title: "Technik und Höhenzugang aus einer Gruppe", description: "Der direkte Zugriff auf Arbeitsbühnen von SLT Rental erleichtert die flexible, kurzfristige Koordination von Vor-Ort-Einsätzen." },
    ],
    techStack: [{ label: "Anlage", value: "Outdoor-LED-Werbeanlagen" }, { label: "Erstmaßnahmen", value: "Lüfter- und Netzteiltausch" }, { label: "Ersatzteile", value: "Anlagenspezifischer Ersatzteilpool" }, { label: "Monitoring / Fernwartung", value: "Migration in die NovaStar VNNOX EU Cloud abgeschlossen" }, { label: "Höhenzugang", value: "Arbeitsbühnen über SLT Rental" }],
    relatedService: { url: "/managed-services", label: "Managed Services & Wartung: Service-Modelle ansehen" },
    tags: ["Outdoor-LED", "LED-Werbetafel", "Wartung", "Bonn"],
    externalLink: { url: "https://www.knauber.de/", label: "Carl Knauber Holding GmbH & Co. KG: Unternehmenswebsite" },
    partnerLink: { url: "https://www.slt-rental.de", label: "Höhenarbeitsbühnen bei SLT Rental" },
    relatedArticle: { url: "/news/outdoor-led-wartung-servicekonzept", label: "Outdoor-LED-Wartung: Prüfliste und Monitoring" },
  },
  {
    slug: "aluminium-norf",
    name: "Aluminium Norf – Boardroom & Schulungsraum AV",
    client: "Aluminium Norf GmbH",
    location: "Neuss",
    year: "2024",
    category: "Boardroom & Schulung (Videokonferenz)",
    shortDescription:
      "Ausbau von zwei Räumen zu modernen Videokonferenz- und Schulungsumgebungen mit Shure, Nureva und AVer Tracking-Kameras.",
    heroImage: "/assets/projects/alunorf/alunorf-main.jpg",
    galleryImages: [
      "/assets/projects/alunorf/alunorf-main.jpg",
      "/assets/projects/alunorf/alunorf-control.jpg",
      "/assets/projects/alunorf/alunorf-speaker.jpg",
      "/assets/projects/alunorf/alunorf-dual-screen.jpg",
      "/assets/projects/alunorf/alunorf-ceiling.jpg",
    ],
    challenge:
      "Die bestehenden Räume bei Aluminium Norf – einem der weltweit größten Aluminiumwalzwerke mit Sitz in Neuss – entsprachen nicht mehr den Anforderungen an moderne hybride Meetings und internationale Mitarbeiter-Schulungen. Die vorhandene Audio-/Videotechnik war in die Jahre gekommen und konnte weder die akustischen Herausforderungen großer Besprechungsräume bewältigen noch eine professionelle Zusammenarbeit mit international verteilten Partnerwerken und Lieferanten sicherstellen. Gefragt war eine zukunftssichere Komplettlösung, die höchsten technischen Ansprüchen genügt und gleichzeitig intuitiv bedienbar bleibt.",
    solution:
      "Wir haben zwei Räume bei AluNorf komplett neu ausgestattet. Das Audio-Konzept basiert auf Shure MXA 920 Deckenmikrofonen für lückenlose Sprachaufnahme über den gesamten Raum – kombiniert mit MXN5W-C PoE Deckeneinbaulautsprechern für eine gleichmäßige Beschallung ohne Hotspots. Ergänzend kam die Nureva HDL-310 Mikrofon- und Lautsprecher-Bar zum Einsatz, die durch ihre Microphone-Mist-Technologie eine aktive Raum-Adaption bietet. Für die Videoseite installierten wir AVer PTZ-Kameras mit intelligenter Presenter-Tracking-Funktion, die Sprecher automatisch erkennen und verfolgen. Alle Komponenten wurden nahtlos in die bestehende IT-Infrastruktur integriert – inklusive Anbindung an die im Konzern genutzten Unified-Communication-Plattformen.",
    results: [
      {
        title: "Nahtlose hybride Meetings",
        description:
          "Internationale Besprechungen mit Partnerwerken und Lieferanten funktionieren ohne technische Reibungsverluste – unabhängig davon, ob Teilnehmer im Raum oder remote teilnehmen.",
      },
      {
        title: "Intelligentes Presenter-Tracking",
        description:
          "AVer-Kameras folgen Sprechern automatisch, wodurch Schulungen professionell wirken und Remote-Teilnehmer den jeweils aktiven Referenten klar im Fokus haben.",
      },
      {
        title: "Zukunftssichere IT-Integration",
        description:
          "Die Lösung ist in die bestehende Konzern-IT eingebunden und lässt sich zentral administrieren, monitoring-fähig, und für zukünftige UC-Plattform-Migrationen vorbereitet.",
      },
      {
        title: "Hervorragende Audioqualität",
        description:
          "Die Kombination aus Shure-Deckenmikrofonen und Nureva-Bar liefert kristallklare Sprachverständlichkeit auch bei beweglichen Teilnehmern und akustisch herausfordernden Räumen.",
      },
    ],
    techStack: [
      { label: "Deckenmikrofone", value: "Shure MXA 920" },
      { label: "Deckeneinbaulautsprecher", value: "Shure MXN5W-C PoE" },
      { label: "Audiobar mit KI", value: "Nureva HDL-310" },
      { label: "Kameras", value: "AVer PTZ mit Presenter-Tracking" },
      { label: "Integration", value: "Teams Rooms / UC-Plattform-agnostisch" },
    ],
    tags: ["Shure", "Nureva", "AVer Tracking", "Hybride Meetings", "Boardroom", "Schulungsraum"],
  },
  {
    slug: "pfeifer-langen",
    name: "Pfeifer & Langen – 20+ Räume mit LED-Wall",
    client: "Pfeifer & Langen GmbH & Co. KG",
    location: "Köln",
    year: "2023",
    category: "Multi-Room Rollout (Videokonferenz)",
    shortDescription:
      "Standardisierte Ausstattung von über 20 Konferenzräumen inklusive einer 136-Zoll LED-Wall.",
    heroImage: "/assets/projects/pfeifer-langen/pl-main.jpg",
    galleryImages: [
      "/assets/projects/pfeifer-langen/pl-main.jpg",
      "/assets/projects/pfeifer-langen/pl-led-wall.jpg",
      "/assets/projects/pfeifer-langen/pl-teams-room.jpg",
      "/assets/projects/pfeifer-langen/pl-meeting-room.jpg",
      "/assets/projects/pfeifer-langen/pl-installation.jpg",
    ],
    challenge:
      'Pfeifer & Langen – einer der führenden deutschen Zuckerhersteller mit Hauptsitz in Köln – stand vor einem klassischen Wachstumsproblem: Die Konferenzraum-Ausstattung war historisch gewachsen und damit heterogen. Jeder Raum hatte andere Displays, Mikrofone, Bedienkonzepte und Verkabelungen. Mitarbeiter beklagten, dass sie vor jedem Meeting-Start erst einmal „die Technik verstehen" mussten. IT-Support-Tickets wegen AV-Problemen waren dauerhaft hoch. Video-Meetings scheiterten regelmäßig an kleinen Kompatibilitätsproblemen zwischen verschiedenen Systemen. Gefragt war ein durchgängiger Room-Standard, der den gesamten Bürokomplex in Köln modernisiert – mit einem klaren Aushängeschild für repräsentative Anlässe.',
    solution:
      "Wir haben einen einheitlichen Raumstandard für alle Raumgrößen bei Pfeifer & Langen entwickelt – von kleinen Huddle-Rooms mit 4 Personen bis zu großen Sitzungssälen mit über 20 Teilnehmern. Die Technik ist in jedem Raum auf die Größe skaliert, die Bedienlogik ist jedoch identisch. Jeder Mitarbeiter, der einen Raum kennt, kennt alle. Der Rollout über 20 Räume erfolgte parallel zum laufenden Betrieb, mit einer zentralen Managementplattform für Monitoring und Konfiguration. Als Highlight installierten wir im zentralen Managementbereich eine 136-Zoll LED-Wall für beeindruckende Präsentationen bei Kundenbesuchen und internen Strategie-Meetings. Die LED-Wall ist in das Steuerungssystem der umliegenden Räume integriert – Inhalte können mit einem Klick darauf gespiegelt werden.",
    results: [
      {
        title: "Einheitliche Nutzererfahrung",
        description:
          "In allen 20+ Räumen identische Bedienung – von der kleinen Huddle-Box bis zum Großraum-Sitzungssaal. Einweisungs-Aufwand für neue Mitarbeiter minimal.",
      },
      {
        title: "Zentrale Verwaltung und Monitoring",
        description:
          "Alle Systeme werden über eine zentrale Plattform überwacht und gepflegt. Firmware-Updates, Konfigurationsänderungen und Fehlerdiagnose erfolgen remote durch die IT.",
      },
      {
        title: "136-Zoll LED-Wall als Aushängeschild",
        description:
          "Das zentrale Flaggschiff-Installationsstück wird regelmäßig für Kundenbesuche, Investorengespräche und strategische Management-Meetings genutzt.",
      },
      {
        title: "Deutlich reduzierte Supportanfragen",
        description:
          "Die Anzahl interner AV-Support-Tickets ist seit dem Rollout spürbar zurückgegangen – nicht weil die Technik weniger Probleme macht, sondern weil Nutzer die einheitliche Bedienung nach kurzer Zeit beherrschen.",
      },
    ],
    techStack: [
      { label: "Anzahl Räume", value: "20+" },
      { label: "Raumgrößen", value: "Huddle bis Großraum-Sitzungssaal" },
      { label: "LED-Wall", value: "136 Zoll im Managementbereich" },
      { label: "Management", value: "Zentrale Monitoring-Plattform" },
      { label: "UC-Plattform", value: "Microsoft Teams-basiert, plattformoffen" },
    ],
    tags: ["Multi-Room Rollout", "LED-Wall", "136 Zoll", "Standardisierung", "Zentrale Verwaltung", "Enterprise"],
  },
  {
    slug: "gea-farm-technologies",
    name: "GEA Farm Technologies – Management Room & Besprechungsräume",
    client: "GEA Farm Technologies",
    location: "Bönen",
    year: "2024–2026",
    category: "Management Room & Besprechungsräume",
    shortDescription:
      "Management Room und drei weitere Besprechungsräume mit Huddly-Kameras, Nureva HDL-310, Iiyama Displays und Barco ClickShare CX – BYOD-fähig und sofort einsatzbereit.",
    heroImage: "/assets/projects/gea-farm/gea-main.jpg",
    galleryImages: [
      "/assets/projects/gea-farm/gea-main.jpg",
      "/assets/projects/gea-farm/gea-display-wall.jpg",
      "/assets/projects/gea-farm/gea-clickshare.jpg",
      "/assets/projects/gea-farm/gea-dual-display.jpg",
      "/assets/projects/gea-farm/gea-camera.jpg",
      "/assets/projects/gea-farm/gea-installation.jpg",
    ],
    challenge:
      "GEA Farm Technologies – weltweit führender Anbieter von Technologien für professionelle Milcherzeuger – hatte 2024 seinen Managementraum am Standort Bönen erfolgreich mit moderner AV-Technik ausstatten lassen. Das Feedback der Nutzer war durchweg positiv: intuitive Bedienung, exzellente Audio-Qualität, nahtlose BYOD-Nutzung. Im März 2026 folgte der konsequente nächste Schritt: drei weitere Besprechungsräume sollten mit identischer Technik ausgestattet werden, damit das bewährte Bedienkonzept auf den gesamten Standort ausgerollt werden kann. Gefragt war ein schlanker, schneller Rollout ohne Betriebsstörung – und mit derselben Qualität, die den Managementraum zum internen Benchmark gemacht hatte.",
    solution:
      "Wir haben alle drei neuen Räume nach dem bewährten GEA-Room-Standard ausgestattet: Iiyama 65-Zoll Professional Displays für klare Visualisierung, Huddly L1 und Huddly S1 KI-Kameras für automatisches Framing der jeweiligen Teilnehmer, Nureva HDL-310 Audiobars für kristallklare Sprachverständlichkeit bei flexibler Sitzordnung, und Barco ClickShare CX für plattformunabhängiges BYOD – jeder Mitarbeiter kann ohne Adapter-Gefummel sofort präsentieren, unabhängig von der UC-Plattform seines Teams. Die Installation erfolgte parallel zum laufenden Betrieb. Am ersten Tag Verkabelung und Montage, am zweiten Tag Konfiguration und Tests, am dritten Tag Nutzer-Schulung und Übergabe.",
    results: [
      {
        title: "Vier professionell ausgestattete Konferenzräume",
        description:
          "Der Managementraum aus 2024 und die drei neuen Räume aus 2026 bilden jetzt einen durchgängigen Raum-Standard am Standort Bönen.",
      },
      {
        title: "Kabelloses BYOD mit Barco ClickShare CX",
        description:
          "Jeder Mitarbeiter nutzt sein eigenes Notebook, verbindet es drahtlos mit dem Raum, und präsentiert ohne Setup-Verzögerung. Unabhängig davon, ob Teams, Zoom oder Webex genutzt wird.",
      },
      {
        title: "KI-gestützte Kameras mit Speaker-Tracking",
        description:
          "Huddly L1 und S1 erkennen Sprecher automatisch und passen Framing sowie Zoom in Echtzeit an. Remote-Teilnehmer sehen immer den aktiven Sprecher im Fokus.",
      },
      {
        title: "Einheitliche Raumausstattung für einfache Bedienung",
        description:
          "Mitarbeiter, die einen Raum kennen, können alle bedienen. IT-Support vereinfacht sich durch einheitliche Konfiguration und Monitoring.",
      },
      {
        title: "Nahtlose Integration in bestehende UC-Plattformen",
        description:
          "Die Lösung funktioniert mit Microsoft Teams, Zoom, Webex und anderen Plattformen – ohne Vendor-Lock-in.",
      },
    ],
    techStack: [
      { label: "Displays", value: "Iiyama 65 Zoll Professional" },
      { label: "Kameras", value: "Huddly L1 + Huddly S1 mit KI-Framing" },
      { label: "Audio", value: "Nureva HDL-310 (Microphone-Mist-Tech)" },
      { label: "BYOD", value: "Barco ClickShare CX" },
      { label: "Anzahl Räume gesamt", value: "4 (1 Managementraum + 3 Besprechungsräume)" },
    ],
    tags: ["Huddly L1", "Huddly S1", "Nureva HDL-310", "Iiyama 65 Zoll", "Barco ClickShare CX", "BYOD", "Multi-Room"],
  },
  {
    slug: "tourismus-info-bensersiel",
    name: "Tourismus Information Bensersiel – Interaktives Digital Signage",
    client: "Tourismus GmbH Gemeinde Esens / Bensersiel",
    location: "Bensersiel",
    year: "2025",
    category: "Digital Signage (interaktiv)",
    shortDescription:
      "Interaktives Digital-Signage-System mit Samsung QMC Displays und einem 105-Zoll Iiyama Ultra-Wide Touchdisplay für die Tourismus-Information.",
    heroImage: "/assets/projects/bensersiel/bensersiel-main.jpg",
    galleryImages: [
      "/assets/projects/bensersiel/bensersiel-main.jpg",
      "/assets/projects/bensersiel/bensersiel-strand.jpg",
    ],
    challenge:
      "Die Tourismus Information Bensersiel an der ostfriesischen Küste ist für viele Urlauber die erste Anlaufstelle beim Aufenthalt – egal, ob es um Fährabfahrtzeiten nach Langeoog, Gastronomie-Empfehlungen oder Freizeitaktivitäten geht. Die bisherige Info-Vermittlung über Aushänge, Flyer und Mitarbeiter-Gespräche stieß in der Hochsaison an ihre Grenzen. Gefragt war eine moderne, interaktive Lösung, die Gästen jederzeit aktuelle Informationen zugänglich macht – intuitiv bedienbar, auch für Nicht-Digital-Natives, und vor allem zentral pflegbar durch das lokale Team, ohne Abhängigkeit von externem IT-Support.",
    solution:
      "Wir haben ein mehrstufiges Digital-Signage-System installiert: Mehrere Samsung QMC Professional Displays als Info-Anzeigen im Eingangs- und Wartebereich, sowie als Highlight ein beeindruckendes 105-Zoll Iiyama 21:9 Ultra-Wide Touchdisplay als interaktives Zentrum. Gäste können über das Touchdisplay Informationen aktiv abrufen – von aktuellen Fährabfahrtzeiten über Gastronomie-Tipps mit Bildern und Beschreibungen bis zu Freizeitangeboten mit integrierter Karte. Alle Displays sind über das Content-Management-System unseres Partners Connect Signage zentral eingebunden. Die Inhalte pflegt das Bensersieler Team vollständig selbstständig – über die Cloud jederzeit und von überall erreichbar. Als offizieller Connect-Signage-Partner stellen wir nahtlose Integration und langfristigen Support sicher.",
    results: [
      {
        title: "Interaktive Gästeinformation auf 105 Zoll",
        description:
          "Das Ultra-Wide-Touchdisplay bietet eine Infofläche, die auch von mehreren Gästen gleichzeitig genutzt werden kann. Die ungewöhnliche Größe wirkt gleichzeitig als Blickfang und Info-Plattform.",
      },
      {
        title: "Mehrere Samsung QMC Displays für Passiv-Anzeigen",
        description:
          "Neben dem interaktiven Display laufen mehrere Samsung QMC Professional Displays als passive Info-Screens – für Durchsagen, Werbung lokaler Anbieter und allgemeine Hinweise.",
      },
      {
        title: "Cloud-basiertes Content Management",
        description:
          "Über Connect Signage kann das Bensersieler Team Inhalte jederzeit über jeden internetfähigen Computer ändern – ohne Login beim Techniker, ohne Ticket-System.",
      },
      {
        title: "Eigenständige Pflege durch den Kunden",
        description:
          "Nach kurzer Einweisung pflegt das Team Fährabfahrtzeiten, Gastro-Tipps und Freizeitangebote vollkommen selbstständig. Saisonwechsel, Sonderaktionen und kurzfristige Änderungen sind in wenigen Minuten umgesetzt.",
      },
      {
        title: "Intuitive Bedienung für Touristen",
        description:
          "Das Touchdisplay funktioniert ohne Einweisung – von jung bis alt finden Gäste auf Anhieb, was sie suchen. Die einfache Kategorienstruktur und große Touch-Flächen sind barrierearm konzipiert.",
      },
    ],
    techStack: [
      { label: "Info-Displays", value: "Samsung QMC Professional (mehrere)" },
      { label: "Highlight-Display", value: "Iiyama 105 Zoll 21:9 Ultra-Wide Touch" },
      { label: "Content-Management", value: "Connect Signage (Cloud-CMS)" },
      { label: "Partnerstatus", value: "Offizieller Connect Signage Partner" },
      { label: "Content-Pflege", value: "Vollständig eigenständig durch Kunde" },
    ],
    tags: ["Samsung QMC", "Iiyama 105 Zoll Ultra-Wide", "Digital Signage", "Touchdisplay", "Connect Signage", "CMS", "Interaktiv"],
    externalLink: { url: "https://www.langeoog.de", label: "Informationen Fähre Langeoog" },
  },
  {
    slug: "sonoco",
    name: "Sonoco – WiFi-Infrastruktur an mehreren Standorten",
    client: "Sonoco (mehrere Standorte)",
    location: "Deutschlandweit",
    year: "2022–2023",
    category: "WiFi-Infrastruktur & Netzwerk",
    shortDescription:
      "Komplette WiFi-Infrastruktur für mehrere Werksstandorte des globalen Verpackungskonzerns – von EKAHAU-Ausleuchtung über Cat-7-Verkabelung bis zur Cisco Meraki Implementierung im laufenden 24/7-Betrieb.",
    heroImage: "/assets/projects/sonoco/sonoco-ekahau.jpg",
    galleryImages: [
      "/assets/projects/sonoco/sonoco-ekahau.jpg",
      "/assets/projects/sonoco/sonoco-rack.jpg",
      "/assets/projects/sonoco/sonoco-ap.jpg",
      "/assets/projects/sonoco/sonoco-cabling.jpg",
      "/assets/projects/sonoco/sonoco-switch.jpg",
      "/assets/projects/sonoco/sonoco-installation.jpg",
    ],
    challenge:
      "Sonoco – einer der weltweit führenden Verpackungskonzerne mit globaler Präsenz – benötigte an mehreren deutschen Werksstandorten eine vollständig neue WiFi-Infrastruktur. Die bestehende Abdeckung reichte weder für die zunehmenden mobilen Anwendungen in der Produktion aus, noch für die Anbindung digitaler IoT-Systeme, die zur Qualitätssicherung und Prozessoptimierung eingesetzt werden sollten. Die zentrale Herausforderung: Alle Arbeiten mussten während des laufenden 24/7-Betriebs umgesetzt werden. Ein Produktionsausfall an einem Standort hätte Kettenreaktionen in der konzernweiten Logistik ausgelöst. Gefragt war ein Konzept, das moderne WiFi-Standards mit maximaler Betriebssicherheit verbindet.",
    solution:
      "Wir haben für jeden Sonoco-Standort zunächst einen professionellen On-Site-Survey mit EKAHAU durchgeführt, um die optimale Platzierung und Dichte der Access Points zu ermitteln. Die Messung liefert nicht nur Signalstärke-Karten, sondern auch Interferenzquellen – entscheidend in Produktionsumgebungen mit starken Störquellen. Anschließend haben wir die komplette strukturierte Verkabelung auf CAT-7 erneuert, mit Messung und Zertifizierung jeder einzelnen Strecke. Die neue Infrastruktur wurde mit Cisco Meraki Access Points und Switches ausgestattet, die zentrale Verwaltung, Monitoring und automatisches Firmware-Management bieten. Die Umsetzung erfolgte phasenweise im Schichtbetrieb: Verkabelung während Produktionspausen, Switch-Umstellungen nachts, Access-Point-Installation parallel zum Betrieb mit vorübergehender Dual-Abdeckung. Das Ergebnis: keine einzige Minute Produktionsausfall an keinem Standort.",
    results: [
      {
        title: "Professionelle EKAHAU-Ausleuchtung aller Standorte",
        description:
          "Die Messung lieferte nicht nur die optimale AP-Platzierung, sondern dokumentierte auch Problemzonen (Interferenzen, Funk-Tote Bereiche), die dann gezielt adressiert wurden.",
      },
      {
        title: "Vollständige CAT-7-Verkabelung inklusive Zertifizierung",
        description:
          "Jede einzelne Strecke wurde nach Installation vermessen und zertifiziert. Die Dokumentation ist vollständig an die Sonoco-IT übergeben und dient als Basis für zukünftige Erweiterungen.",
      },
      {
        title: "Cisco Meraki für zentrale Verwaltung",
        description:
          "Access Points und Switches lassen sich zentral über die Cisco-Meraki-Cloud administrieren. Firmware-Updates, Monitoring und Troubleshooting erfolgen standortübergreifend aus einer Plattform.",
      },
      {
        title: "IoT-Anwendungen in der Produktion einsatzbereit",
        description:
          "Die neue Infrastruktur unterstützt die zunehmende Digitalisierung der Produktion – mit sauber segmentierten IoT-VLANs und ausreichender Bandbreite für Echtzeit-Daten.",
      },
      {
        title: "Gesamte Umsetzung ohne Ausfallzeit",
        description:
          "Der gesamte Rollout an allen Standorten erfolgte ohne eine einzige Produktionsunterbrechung. Sonoco bezeichnet das Projekt intern als Referenzbeispiel für präzise Projektdurchführung.",
      },
    ],
    techStack: [
      { label: "WLAN-Ausleuchtung", value: "EKAHAU Pro (On-Site-Survey)" },
      { label: "Strukturierte Verkabelung", value: "CAT-7 inkl. Zertifizierung" },
      { label: "Access Points", value: "Cisco Meraki" },
      { label: "Switches", value: "Cisco Meraki" },
      { label: "Verwaltung", value: "Cisco Meraki Cloud" },
      { label: "Anwendungsgebiet", value: "WiFi + IoT in Produktion" },
      { label: "Besonderheit", value: "Umsetzung im 24/7-Betrieb ohne Ausfall" },
    ],
    tags: ["Cisco Meraki", "EKAHAU", "CAT-7", "WiFi", "IoT", "24/7 Betrieb", "Multi-Site", "Produktionsumgebung"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 2): Project[] {
  const others = PROJECTS.filter((p) => p.slug !== slug);
  return others.slice(0, count);
}

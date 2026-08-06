/**
 * Detailseiten je Anwendungsfall unter /loesungen/{slug}.
 *
 * Redaktionsregeln:
 * - Keine erfundenen Referenzen, Preise, Zertifizierungsstufen oder Marktzahlen.
 * - Normen/Standards nur nennen, wenn sie öffentlich belegbar und einschlägig sind
 *   (z. B. DIN EN 50173 strukturierte Verkabelung, IEEE 802.3af/at/bt PoE,
 *   DIN EN 62676 Videoüberwachungsanlagen, DSGVO Art. 5/6, BetrVG § 87).
 * - Themen mit eigener Pillar-Page (Konferenzräume, Digital Signage,
 *   Videokonferenz) werden hier NICHT dupliziert, sondern verlinkt.
 */

export interface SolutionSection {
  id: string;
  title: string;
  body: string;
  bullets: string[];
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionLink {
  to: string;
  label: string;
}

export interface SolutionPage {
  slug: string;
  /** Kurzlabel für Navigation und Karten */
  navLabel: string;
  title: string; // <title>
  description: string; // meta description
  h1: string;
  badge: string;
  heroLead: string;
  keywords: string;
  image: string;
  imagePosition?: string;
  /** Kernkriterien – erscheinen als Karten-Grid oben */
  criteria: { title: string; text: string }[];
  sections: SolutionSection[];
  useCases: string[];
  faqs: SolutionFaq[];
  relatedLinks: SolutionLink[];
}

export const solutionPages: SolutionPage[] = [
  // ───────────────────────────────────────────── Kollaboration
  {
    slug: "kollaborationsraeume-kreativzonen",
    navLabel: "Kollaborationsräume & Kreativzonen",
    title: "Kollaborationsräume & Kreativzonen ausstatten | SLT Technology Group",
    description:
      "Kollaborationsräume und Kreativzonen ausstatten: digitale Whiteboards, Wireless Presentation, mobile Videokonferenz-Carts und Buchungslogik – geplant und integriert vom AV-Fachbüro.",
    h1: "Kollaborationsräume & Kreativzonen",
    badge: "Agiles Arbeiten",
    heroLead:
      "Offene Zonen, Projekträume und Kreativflächen brauchen Technik, die ohne Einweisung funktioniert: Inhalte teilen in Sekunden, digital mitschreiben, spontan jemanden dazuholen.",
    keywords:
      "Kollaborationsraum ausstatten, digitales Whiteboard Unternehmen, Wireless Presentation, Projektraum Medientechnik, Kreativzone AV",
    image: "/assets/solutions/collaboration-space.jpg",
    criteria: [
      {
        title: "Ohne Einweisung nutzbar",
        text: "Ein Kabel oder ein Klick. Wer erst eine Schulung braucht, nutzt den Raum nicht.",
      },
      {
        title: "Inhalte statt Geräte",
        text: "Whiteboard-Inhalte müssen nach dem Termin auffindbar sein – im Teams- oder Workspace-Konto, nicht auf dem Gerät.",
      },
      {
        title: "Hybrid von Anfang an",
        text: "Auch spontane Sessions haben Remote-Teilnehmende. Kamera und Mikrofon gehören zur Grundausstattung.",
      },
      {
        title: "Beweglich bleiben",
        text: "Flächen ändern sich. Rollbare Carts und modulare Halterungen halten die Investition flexibel.",
      },
    ],
    sections: [
      {
        id: "digitale-whiteboards",
        title: "Digitale Whiteboards und interaktive Displays",
        body:
          "Interaktive Displays ersetzen das analoge Flipchart und lösen dessen Kernproblem: Ergebnisse gehen nicht verloren. Entscheidend ist weniger die Diagonale als die Anbindung an die Konto-Landschaft – Microsoft Whiteboard, Microsoft 365 oder Google Workspace –, damit Notizen nach dem Termin im richtigen Team landen. Wir prüfen im Vorfeld, welche Anmelde- und Freigabewege Ihre IT zulässt, und richten das Gerät entsprechend ein.",
        bullets: [
          "Displaygröße nach Betrachtungsabstand und Raumtiefe wählen",
          "Anmeldung über Ihr Unternehmenskonto statt über lokale Geräteprofile",
          "Whiteboard-Sessions automatisch in die Ablage der Nutzenden speichern",
          "Mobile Ständer oder Wandmontage je nach Nutzungsdichte",
        ],
      },
      {
        id: "wireless-presentation",
        title: "Kabellose Präsentation und BYOD",
        body:
          "In Kreativzonen wechseln die Geräte ständig – Notebook, Tablet, Gastgerät. Wireless-Presentation-Systeme oder USB-C-Anschlusspunkte machen das Teilen unabhängig vom Betriebssystem. Für die IT ist relevant, ob das System im Unternehmens-WLAN, in einem eigenen VLAN oder ohne Netzwerkanbindung über einen eigenen Access Point betrieben wird. Diese Entscheidung treffen wir gemeinsam mit Ihrer Netzwerk- und Security-Seite, bevor Hardware bestellt wird.",
        bullets: [
          "USB-C-Anschlusspunkt mit Bild, Ton, Netzwerk und Ladeleistung über ein Kabel",
          "Wireless-Sharing mit oder ohne Client-Software – abgestimmt auf Ihre Endgeräte-Policy",
          "Gästezugang ohne Zugriff auf interne Netzsegmente",
          "Einheitliche Bedienlogik über alle Räume und Zonen hinweg",
        ],
      },
      {
        id: "mobile-hybrid",
        title: "Mobile Videokonferenz für spontane Sessions",
        body:
          "Nicht jede Kreativfläche lässt sich fest verkabeln. Rollbare Carts mit All-in-one-Videobar, Display und internem Rechner machen jede Fläche für 30 Minuten zum Meetingraum. Wichtig sind saubere Kabelführung, ein definierter Ladeplatz und eine Grenze für die Akkulaufzeit, damit das Gerät nicht mitten in der Session ausfällt. Feste Räume planen wir dagegen wie klassische Videokonferenzräume – Details dazu auf unserer Seite zur Videokonferenzanlage.",
        bullets: [
          "Cart mit Videobar, Display, Stromversorgung und definiertem Standplatz",
          "WLAN-Abdeckung der Fläche vorab prüfen, nicht nachträglich reparieren",
          "Einheitliche Raumkonten, damit Termine auf dem Gerät erscheinen",
          "Feste Zonen alternativ mit Deckenmikrofon und fest montierter Kamera",
        ],
      },
      {
        id: "buchung-betrieb",
        title: "Buchung, Auffindbarkeit und Betrieb",
        body:
          "Kreativflächen scheitern selten an der Technik, sondern an der Organisation: Niemand weiß, ob der Raum frei ist, und niemand meldet Defekte. Türpanels und Belegungsanzeigen lösen das erste Problem, ein zentrales Monitoring das zweite. Wir binden die Räume in Ihre bestehende Raumbuchung ein und melden Geräteausfälle über dieselben Kanäle wie Ihre übrige AV-Landschaft.",
        bullets: [
          "Room-Booking-Panels an Ad-hoc-Zonen mit Sofortbuchung",
          "Belegungsanzeige im Flur oder Foyer über Digital Signage",
          "Zentrale Statusüberwachung der Displays und Konferenzgeräte",
          "Störungsannahme über den Service Desk statt über Zuruf",
        ],
      },
    ],
    useCases: [
      "Projekt- und Scrum-Räume",
      "Design-Thinking-Flächen",
      "Innovation Labs",
      "Ad-hoc-Zonen in Open Space",
    ],
    faqs: [
      {
        question: "Lohnt sich ein digitales Whiteboard gegenüber einem Flipchart?",
        answer:
          "Immer dann, wenn Ergebnisse weiterverwendet werden oder Remote-Teilnehmende mitarbeiten. Wird nur im Raum skizziert und danach fotografiert, ist ein analoges Board oft ausreichend. Wir bewerten das je Fläche anhand der tatsächlichen Nutzung statt pauschal.",
      },
      {
        question: "Wie groß sollte das Display in einem Kollaborationsraum sein?",
        answer:
          "Ausschlaggebend ist der Abstand der hintersten Position zum Bild und die Schriftgröße der typischen Inhalte. Tabellen und CAD-Ansichten brauchen deutlich mehr Fläche als Präsentationen. Wir prüfen das anhand Ihrer Raummaße und typischen Dokumente.",
      },
      {
        question: "Können wir vorhandene Displays weiterverwenden?",
        answer:
          "Häufig ja. Wir nehmen den Bestand auf, prüfen Anschlussarten, Touch-Fähigkeit und Softwarestand und schlagen vor, was ergänzt, umgehängt oder ersetzt werden sollte.",
      },
      {
        question: "Wer betreut die Geräte im laufenden Betrieb?",
        answer:
          "Auf Wunsch wir – im Rahmen unserer Service- und Wartungsleistungen nach ITIL v4, inklusive Störungsannahme und turnusmäßiger Prüfung. Alternativ übergeben wir dokumentiert an Ihre interne IT.",
      },
    ],
    relatedLinks: [
      { to: "/konferenzraum-ausstattung", label: "Konferenzraum-Ausstattung nach Raumgröße" },
      { to: "/videokonferenzanlage", label: "Videokonferenzanlage planen lassen" },
      { to: "/partner/barco", label: "Barco Wireless Presentation" },
      { to: "/service-wartung", label: "Service & Wartung (ITIL v4)" },
    ],
  },

  // ───────────────────────────────────────────── Auditorien
  {
    slug: "auditorien-veranstaltungsraeume",
    navLabel: "Auditorien & Veranstaltungsräume",
    title: "Auditorium & Veranstaltungsraum: Medientechnik planen | SLT Technology Group",
    description:
      "Medientechnik für Auditorien und Veranstaltungsräume: Beschallung, LED-Wall oder Projektion, Kamera und Streaming, Mediensteuerung und barrierefreie Höranlagen – Fachplanung und Integration.",
    h1: "Auditorien & Veranstaltungsräume",
    badge: "Große Räume",
    heroLead:
      "Hauptversammlung, Townhall, Kongress: In großen Räumen entscheidet Sprachverständlichkeit über den Erfolg – nicht die Bildgröße. Wir planen Audio, Bild, Kamera und Bedienung als ein System.",
    keywords:
      "Auditorium Medientechnik, Veranstaltungsraum Technik, Beschallungsanlage Unternehmen, Townhall Streaming, LED-Wall Saal, Höranlage Induktionsschleife",
    image: "/assets/solutions/auditorium.jpg",
    criteria: [
      {
        title: "Sprachverständlichkeit zuerst",
        text: "Beschallung und Raumakustik werden vor der Bildtechnik ausgelegt – nicht danach.",
      },
      {
        title: "Bedienbar unter Druck",
        text: "Ein Bedienkonzept, das auch ohne Techniker vor Ort funktioniert, plus Regie-Modus für große Events.",
      },
      {
        title: "Hybrid und Aufzeichnung",
        text: "Kamera, Regie und Streaming werden mitgeplant, nicht nachgerüstet.",
      },
      {
        title: "Barrierefreiheit",
        text: "Höranlagen und kontrastreiche Darstellung gehören für öffentlich genutzte Säle zur Planung.",
      },
    ],
    sections: [
      {
        id: "beschallung",
        title: "Beschallung und Raumakustik",
        body:
          "In großen Räumen ist die Nachhallzeit der bestimmende Faktor. Bevor Lautsprecher ausgewählt werden, bewerten wir Geometrie, Oberflächen und vorhandene Absorption und leiten daraus die Beschallungsart ab: Line-Array, Deckenbeschallung oder dezentrale Zonen. DSP-basierte Systeme erlauben es anschließend, jede Zone separat zu entzerren und Pegelunterschiede zwischen vorderen und hinteren Reihen auszugleichen. Drahtlose Mikrofonstrecken planen wir mit Frequenzkonzept, damit sie im Betrieb störungsfrei nebeneinander laufen.",
        bullets: [
          "Bewertung von Nachhall und Störgeräuschpegel vor der Systemauswahl",
          "Zonenweise DSP-Entzerrung und Pegelanpassung",
          "Frequenzkonzept für Funkmikrofone inklusive Reserve-Kanälen",
          "Rednerpult, Handsender, Ansteckmikrofone und Publikumsmikrofone im Zusammenspiel",
        ],
      },
      {
        id: "bild-projektion",
        title: "LED-Wall oder Projektion",
        body:
          "Die Entscheidung zwischen LED-Wall und Projektion hängt an drei Größen: Umgebungslicht, Betrachtungsabstand und Betriebsdauer. LED-Wände bleiben auch bei hellem Tageslicht ablesbar und benötigen keine Verdunkelung; der sinnvolle Pixelabstand ergibt sich aus dem Abstand der ersten Sitzreihe. Projektion ist bei sehr großen Bildflächen und abgedunkelten Sälen weiterhin wirtschaftlich. Wir rechnen beide Varianten für Ihren Raum durch und legen Signalwege, Redundanzen und Ansteuerung entsprechend aus.",
        bullets: [
          "Auslegung nach Umgebungslicht, Sitzabstand und Inhaltsart",
          "Pixelabstand der LED-Wall aus dem Abstand der ersten Reihe ableiten",
          "Signalverteilung über AV-over-IP oder Matrix – je nach Raumanzahl",
          "Nebenbilder, Confidence-Monitore und Foyer-Ausspielung mitplanen",
        ],
      },
      {
        id: "kamera-streaming",
        title: "Kamera, Regie und Streaming",
        body:
          "Townhalls und Hauptversammlungen werden heute regelmäßig übertragen oder aufgezeichnet. Dafür braucht es mehr als eine Kamera: definierte Bildausschnitte, eine Bildmischung, sauber getrennte Audiowege für Saal und Stream sowie eine Rückkanal-Lösung für Fragen aus dem Remote-Publikum. Wir legen fest, welche Szenarien ohne externes Personal laufen sollen, und automatisieren diese über Presets – aufwendigere Events bleiben über den Regieplatz steuerbar.",
        bullets: [
          "PTZ-Kameras mit Presets für Rednerpult, Podium und Publikum",
          "Getrennte Mischungen für Saalbeschallung und Stream",
          "Aufzeichnung mit definierter Ablage und Zugriffsrechten",
          "Rückkanal für Fragen aus dem Remote-Publikum",
        ],
      },
      {
        id: "steuerung-barrierefreiheit",
        title: "Mediensteuerung und Barrierefreiheit",
        body:
          "Ein Saal wird von wechselnden Personen bedient. Deshalb bekommt er ein Touchpanel mit wenigen, klar benannten Szenarien – „Vortrag“, „Podium“, „Pause“ – statt einer Geräteliste. Für öffentlich zugängliche oder öffentlich geförderte Veranstaltungsräume gehören außerdem Höranlagen zur Planung: Induktionsschleifen nach dem Hörgeräte-Telefonspulenstandard oder funkbasierte Systeme. Beides berücksichtigen wir bereits in der Elektro- und Bodenplanung, weil eine nachträgliche Schleifenverlegung teuer wird.",
        bullets: [
          "Szenario-Bedienung statt Geräteliste auf dem Touchpanel",
          "Separater Regie-Zugang für Veranstaltungsteams",
          "Induktive Höranlage oder Funk-Höranlage nach Nutzung",
          "Dolmetsch- und Übersetzungsanlagen als Option vorsehen",
        ],
      },
    ],
    useCases: [
      "Hauptversammlungen",
      "Townhalls & Mitarbeiterevents",
      "Kongresse und Tagungen",
      "Produktpräsentationen",
    ],
    faqs: [
      {
        question: "LED-Wall oder Projektor – was ist im Saal die bessere Wahl?",
        answer:
          "Bei hellen Räumen ohne Verdunkelung und dauerhaftem Betrieb spricht vieles für eine LED-Wall. Bei sehr großen Bildbreiten in abgedunkelten Sälen bleibt Projektion oft wirtschaftlicher. Wir rechnen beide Varianten anhand Ihrer Raum- und Lichtsituation durch.",
      },
      {
        question: "Brauchen wir eine Induktionsschleife?",
        answer:
          "Für öffentlich zugängliche Veranstaltungsräume ist eine Höranlage üblicher Bestandteil barrierefreier Planung, teils gefordert durch Bauherrenvorgaben oder Förderbedingungen. Wir klären den konkreten Rahmen mit Ihnen und planen entweder eine induktive Schleife oder ein Funksystem ein.",
      },
      {
        question: "Kann der Saal ohne Techniker bedient werden?",
        answer:
          "Für Standardnutzungen ja: Über Szenario-Tasten lassen sich Bestuhlungsvarianten, Bild- und Tonwege sowie Licht in einem Schritt aufrufen. Für aufwendige Events empfehlen wir zusätzlich einen Regieplatz mit vollem Zugriff.",
      },
      {
        question: "Lässt sich vorhandene Technik weiterverwenden?",
        answer:
          "Wir nehmen den Bestand auf und bewerten Lautsprecher, Endstufen, Verkabelung und Signalwege einzeln. Häufig bleiben Verkabelung und Traversen nutzbar, während Endstufen, DSP und Kameras erneuert werden.",
      },
    ],
    relatedLinks: [
      { to: "/partner/q-sys", label: "Q-SYS Audio- und Steuerungsplattform" },
      { to: "/partner/sennheiser", label: "Sennheiser Konferenz- und Funktechnik" },
      { to: "/digital-signage", label: "Digital Signage für Foyer und Wegeleitung" },
      { to: "/service-wartung", label: "Service & Wartung (ITIL v4)" },
    ],
  },

  // ───────────────────────────────────────────── Bildung
  {
    slug: "bildung-schulung",
    navLabel: "Bildung & Schulung",
    title: "Schulungsräume & Lernumgebungen ausstatten | SLT Technology Group",
    description:
      "Medientechnik für Schulungsräume, Akademien und Hörsäle: interaktive Displays, Lecture Capture, hybride Trainings und robuste Bedienung für wechselnde Nutzergruppen.",
    h1: "Bildung & Schulung",
    badge: "Lernumgebungen",
    heroLead:
      "Schulungsräume werden täglich von wechselnden Personen genutzt. Technik muss dort ohne Support starten, den Ton im ganzen Raum verständlich halten und Inhalte reproduzierbar aufzeichnen.",
    keywords:
      "Schulungsraum Ausstattung, Seminarraum Medientechnik, Hörsaal Technik, Lecture Capture, hybride Schulung, interaktives Display Schulung",
    image: "/assets/solutions/education.jpg",
    criteria: [
      {
        title: "Start in unter einer Minute",
        text: "Anschließen, Bild da, Ton da. Jede zusätzliche Aktion kostet Unterrichtszeit.",
      },
      {
        title: "Ton im ganzen Raum",
        text: "Sprachverstärkung und Rückfragen-Mikrofone sind in Schulungsräumen wichtiger als Bilddiagonale.",
      },
      {
        title: "Hybrid reproduzierbar",
        text: "Ein Raumsetup, das jede Woche gleich funktioniert – nicht ein Aufbau pro Trainer.",
      },
      {
        title: "Robust und diebstahlsicher",
        text: "Feste Montage, gesicherte Kabelanschlüsse und wartungsarme Komponenten.",
      },
    ],
    sections: [
      {
        id: "raumsetup",
        title: "Standard-Raumsetup für Seminar- und Schulungsräume",
        body:
          "Wir definieren mit Ihnen wenige Raumtypen statt individueller Einzellösungen. Jeder Typ bekommt dieselbe Anschlussposition, dieselbe Bedienlogik und dieselbe Beschriftung. Das reduziert Supportfälle deutlich, weil Trainerinnen und Trainer in jedem Raum dasselbe vorfinden. Anschlusspunkt ist in der Regel ein HDMI- und USB-C-Feld am Pult, das Bild, Ton, Kamera und Netzwerk in einem Schritt übergibt.",
        bullets: [
          "Zwei bis drei standardisierte Raumtypen statt Einzelplanungen",
          "Einheitlicher Anschlusspunkt mit HDMI und USB-C am Trainerplatz",
          "Beschriftung und Kurzanleitung direkt am Pult",
          "Automatisches Einschalten bei Signalanlage, automatisches Abschalten nach Nutzung",
        ],
      },
      {
        id: "audio-verstaendlichkeit",
        title: "Sprachverstärkung und Rückfragen",
        body:
          "In tiefen Räumen und Hörsälen verliert die hintere Hälfte Sprachanteile, besonders bei Nebengeräuschen durch Lüftung. Eine dezente Sprachverstärkung über Deckenlautsprecher hebt die Verständlichkeit spürbar, ohne dass es nach „Beschallung“ klingt. Für hybride Formate kommen Rückfragen-Mikrofone hinzu – sonst hören Remote-Teilnehmende die Fragen aus dem Raum nicht.",
        bullets: [
          "Sprachverstärkung über Deckenlautsprecher statt Frontboxen",
          "Ansteck- oder Bügelmikrofon für die vortragende Person",
          "Deckenmikrofon-Arrays oder Handmikrofone für Publikumsfragen",
          "Echo- und Störgeräuschunterdrückung für den Stream",
        ],
      },
      {
        id: "lecture-capture",
        title: "Aufzeichnung und hybride Formate",
        body:
          "Lecture Capture zahlt sich vor allem dort aus, wo Inhalte wiederkehrend geschult werden. Technisch ist entscheidend, dass Kamerabild und Präsentationsinhalt getrennt aufgezeichnet und anschließend automatisch am richtigen Ort abgelegt werden. Wir stimmen die Ablage mit Ihrer IT ab – ob Microsoft-365-Ablage, ein Videoportal oder Ihr Lernmanagementsystem – und definieren gemeinsam die Aufbewahrungs- und Zugriffsregeln.",
        bullets: [
          "Getrennte Aufzeichnung von Kamera und Präsentationsinhalt",
          "Automatische Ablage in der abgestimmten Zielumgebung",
          "Anbindung an vorhandene Lernmanagement- oder Videoplattformen",
          "Datenschutzkonformer Umgang mit Aufnahmen von Teilnehmenden",
        ],
      },
      {
        id: "betrieb-schule",
        title: "Betrieb mit wechselnden Nutzergruppen",
        body:
          "Bildungsräume haben eine hohe Nutzungsfrequenz und selten dediziertes Fachpersonal vor Ort. Deshalb planen wir für Ausfallsicherheit: fest installierte Komponenten statt loser Geräte, gesicherte Anschlussfelder und eine zentrale Statusüberwachung. Störungen sollen auffallen, bevor die nächste Gruppe den Raum betritt.",
        bullets: [
          "Feste Montage von Display, Kamera und Lautsprechern",
          "Gesicherte Kabelanschlüsse und Ersatzkabel im Raum",
          "Zentrale Statusüberwachung mit Meldung an den Service Desk",
          "Kurze Einweisung für Trainer und internen First-Level-Support",
        ],
      },
    ],
    useCases: [
      "Unternehmensakademien",
      "Weiterbildungszentren",
      "Hörsäle und Seminarräume",
      "Schulungen an Produktionsstandorten",
    ],
    faqs: [
      {
        question: "Was ist im Schulungsraum wichtiger: Display oder Audio?",
        answer:
          "In der Praxis Audio. Ein zu kleines Bild schränkt ein, schlecht verständliche Sprache macht die Veranstaltung unbrauchbar – besonders in hybriden Formaten mit Rückfragen aus dem Raum.",
      },
      {
        question: "Wie viele unterschiedliche Raumtypen sollten wir definieren?",
        answer:
          "Meist reichen zwei bis drei: kleiner Seminarraum, großer Schulungsraum und optional Hörsaal. Weniger Varianten bedeuten weniger Ersatzteile, weniger Supportfälle und einheitliche Bedienung.",
      },
      {
        question: "Wie gehen wir mit Aufzeichnungen datenschutzrechtlich um?",
        answer:
          "Aufzeichnungen mit erkennbaren Teilnehmenden brauchen eine klare Rechtsgrundlage, Transparenz gegenüber den Betroffenen und definierte Löschfristen. Technisch unterstützen wir das durch getrennte Kameraausschnitte, definierte Ablageorte und Zugriffsrechte; die rechtliche Bewertung trifft Ihre Datenschutzorganisation.",
      },
      {
        question: "Können Trainerinnen und Trainer eigene Notebooks nutzen?",
        answer:
          "Ja. Über einen USB-C- oder HDMI-Anschlusspunkt werden Bild, Ton, Kamera und Mikrofon des Raums an das mitgebrachte Gerät übergeben – unabhängig von der Konferenzplattform.",
      },
    ],
    relatedLinks: [
      { to: "/videokonferenzanlage", label: "Videokonferenzanlage für hybride Trainings" },
      { to: "/konferenzraum-ausstattung", label: "Konferenzraum-Ausstattung nach Raumgröße" },
      { to: "/partner/sennheiser", label: "Sennheiser Deckenmikrofone" },
      { to: "/service-wartung", label: "Service & Wartung (ITIL v4)" },
    ],
  },

  // ───────────────────────────────────────────── Industrie
  {
    slug: "industrie-produktion",
    navLabel: "Industrie & Produktion",
    title: "Medientechnik für Industrie, Leitwarten & Produktion | SLT Technology Group",
    description:
      "Medientechnik für Produktion und Leitwarten: industrietaugliche Displays, Shopfloor-Boards, Beschallung in lauten Hallen und 24/7-Betrieb mit Fernüberwachung.",
    h1: "Industrie & Produktion",
    badge: "Raue Umgebung",
    heroLead:
      "Staub, Lärm, Temperatur und Dauerbetrieb: In Produktionsumgebungen entscheidet nicht die Bildqualität über den Erfolg, sondern die Standfestigkeit der Installation.",
    keywords:
      "Industrie Medientechnik, Leitwarte Ausstattung, Shopfloor Display, Produktionshalle Beschallung, Kontrollraum Videowand, Andon Board",
    image: "/assets/solutions/industry.jpg",
    criteria: [
      {
        title: "Auf die Umgebung ausgelegt",
        text: "Schutzart, Temperaturbereich und Helligkeit werden je Standort festgelegt – nicht pauschal.",
      },
      {
        title: "Dauerbetrieb",
        text: "Displays und Player für 24/7 statt Büro-Panels mit begrenzter Betriebsstundenfreigabe.",
      },
      {
        title: "Hörbar trotz Lärm",
        text: "Beschallung wird gegen den realen Störpegel der Halle ausgelegt.",
      },
      {
        title: "Fernwartbar",
        text: "Statusmeldung und Fernzugriff, damit niemand für einen Neustart in die Halle laufen muss.",
      },
    ],
    sections: [
      {
        id: "shopfloor",
        title: "Shopfloor-Displays und Kennzahlen-Boards",
        body:
          "Produktionskennzahlen, Störmeldungen und Schichtinformationen werden dort gebraucht, wo gearbeitet wird. Technisch sind drei Punkte entscheidend: ausreichende Helligkeit gegen Hallenlicht und Oberlichter, eine geeignete Schutzart gegen Staub und Feuchtigkeit sowie ein Player, der auch nach einem Spannungsausfall selbstständig wieder startet. Die Inhalte kommen aus Ihren Systemen – wir klären mit Ihrer IT und OT, über welche Schnittstelle die Daten bereitgestellt werden dürfen.",
        bullets: [
          "Hochhelle Displays für Hallen mit Tageslichteinfall",
          "Gehäuse mit passender Schutzart für Staub, Feuchte und Reinigung",
          "Automatischer Neustart und Wiederanlauf nach Spannungsausfall",
          "Datenanbindung über die von Ihrer IT freigegebene Schnittstelle",
        ],
      },
      {
        id: "leitwarte",
        title: "Leitwarten und Kontrollräume",
        body:
          "In Leitwarten laufen viele Quellen auf wenige Bildflächen. Eine Videowand mit Wall-Controller oder eine AV-over-IP-Verteilung erlaubt es, Bildquellen frei zu positionieren und Layouts per Knopfdruck zu wechseln – etwa zwischen Normalbetrieb und Störungsfall. Ergonomie ist dabei kein Nebenaspekt: Blickwinkel, Blendfreiheit und Schichttauglichkeit der Arbeitsplätze bestimmen, ob die Warte über Jahre nutzbar bleibt. Für den Dauerbetrieb planen wir Redundanzen bei Controller, Netzteilen und Signalwegen ein.",
        bullets: [
          "Videowand oder Monitorwand mit frei konfigurierbaren Layouts",
          "AV-over-IP-Verteilung für flexible Quellenzuordnung",
          "Redundante Auslegung kritischer Komponenten",
          "Ergonomie: Blickwinkel, Entspiegelung, Schichtbetrieb",
        ],
      },
      {
        id: "hallenbeschallung",
        title: "Beschallung und Alarmierung in lauten Bereichen",
        body:
          "Durchsagen in Produktionshallen müssen den Störpegel der Maschinen deutlich übertreffen und dürfen trotzdem nicht durch Nachhall unverständlich werden. Deshalb messen wir den vorhandenen Pegel und legen dezentrale Lautsprecherlinien statt weniger lauter Punktquellen aus. Wenn die Anlage auch der Alarmierung dient, gelten zusätzliche Anforderungen an Überwachung, Notstromversorgung und Vorrangschaltung – das stimmen wir mit Ihrem Brandschutzkonzept und den Fachplanern ab.",
        bullets: [
          "Auslegung gegen den gemessenen Störpegel, nicht gegen Schätzwerte",
          "Dezentrale Lautsprecherlinien für gleichmäßige Verständlichkeit",
          "Zonenweise Durchsagen für einzelne Hallenbereiche",
          "Abstimmung mit Brandschutz und Sicherheitskonzept bei Alarmierungsfunktion",
        ],
      },
      {
        id: "betrieb-industrie",
        title: "Betrieb, Fernwartung und Ersatzteile",
        body:
          "Produktionsnahe Technik darf keine langen Stillstände verursachen. Wir hinterlegen deshalb je Standort ein Ersatzteilkonzept, überwachen die Geräte zentral und definieren Reaktionszeiten passend zur Kritikalität. Zugriffe erfolgen über die mit Ihrer IT- und OT-Seite abgestimmten Wege, inklusive Netztrennung zwischen Produktionsnetz und Medientechnik.",
        bullets: [
          "Zentrale Überwachung mit Alarmierung bei Geräteausfall",
          "Definierte Reaktionszeiten nach Kritikalität der Fläche",
          "Ersatzteilbevorratung für kritische Displays und Player",
          "Netzsegmentierung zwischen Produktions- und Medientechniknetz",
        ],
      },
    ],
    useCases: [
      "Fertigungs- und Montagelinien",
      "Leitwarten und Kontrollräume",
      "Logistikzentren",
      "Qualitätslabore und Prüffelder",
    ],
    faqs: [
      {
        question: "Warum kein normales Büro-Display in der Halle?",
        answer:
          "Büro-Panels sind meist nicht für Dauerbetrieb, hohe Umgebungshelligkeit und staubige Umgebungen freigegeben. Die Folge sind Ausfälle außerhalb der Gewährleistung. Wir wählen Displays nach Betriebsstundenfreigabe, Helligkeit und Schutzart aus.",
      },
      {
        question: "Wie werden Produktionsdaten auf die Displays gebracht?",
        answer:
          "Über eine von Ihrer IT freigegebene Schnittstelle – etwa eine bestehende Dashboard-Oberfläche, ein Webportal oder eine Signage-Playlist. Wir greifen nicht direkt auf Steuerungssysteme zu, sondern nehmen die Daten dort ab, wo sie bereits bereitgestellt werden.",
      },
      {
        question: "Können bestehende Leitwarten schrittweise modernisiert werden?",
        answer:
          "Ja. Häufig wird zuerst die Bildverteilung auf AV-over-IP umgestellt, während Arbeitsplätze und Quellen zunächst bleiben. Die Umstellung lässt sich so in Wartungsfenstern durchführen.",
      },
      {
        question: "Übernehmen Sie auch den laufenden Betrieb?",
        answer:
          "Ja, im Rahmen unserer Service- und Wartungsleistungen nach ITIL v4 – mit Störungsannahme, Fernzugriff, turnusmäßiger Prüfung und definierten Reaktionszeiten.",
      },
    ],
    relatedLinks: [
      { to: "/digital-signage", label: "Digital Signage für Standorte und Hallen" },
      { to: "/loesungen/it-infrastruktur-netzwerk", label: "IT-Infrastruktur & Netzwerk" },
      { to: "/loesungen/videoueberwachung-sicherheit", label: "Videoüberwachung & Sicherheit" },
      { to: "/service-wartung", label: "Service & Wartung (ITIL v4)" },
    ],
  },

  // ───────────────────────────────────────────── IT-Infrastruktur
  {
    slug: "it-infrastruktur-netzwerk",
    navLabel: "IT-Infrastruktur & Netzwerk",
    title: "IT-Infrastruktur & strukturierte Verkabelung | SLT Technology Group",
    description:
      "Strukturierte Verkabelung nach DIN EN 50173, Netzwerk-Design, PoE-Versorgung und Enterprise-WLAN – als Fundament für Konferenztechnik, Digital Signage und Videoüberwachung.",
    h1: "IT-Infrastruktur & Netzwerk",
    badge: "Fundament",
    heroLead:
      "Konferenztechnik, Signage und Kameras sind heute Netzwerkgeräte. Wir planen und bauen die Infrastruktur darunter – Verkabelung, Switching, PoE und WLAN – nach anerkannten Normen.",
    keywords:
      "strukturierte Verkabelung, DIN EN 50173, Netzwerkverkabelung Unternehmen, PoE Switch, Enterprise WLAN, Glasfaser Backbone, Netzwerkplanung",
    image: "/assets/solutions/it-network.jpg",
    criteria: [
      {
        title: "Normkonform verkabelt",
        text: "Struktur, Klassen und Messprotokolle nach DIN EN 50173 – dokumentiert und abnahmefähig.",
      },
      {
        title: "PoE richtig dimensioniert",
        text: "Leistungsbudget nach IEEE 802.3af/at/bt je Port und Switch – nicht nur nach Portanzahl.",
      },
      {
        title: "Segmentiert",
        text: "AV, Signage, Kameras und Client-Netze getrennt – mit abgestimmten VLANs und Regeln.",
      },
      {
        title: "Dokumentiert",
        text: "Portpläne, Messprotokolle und Beschriftung, damit spätere Erweiterungen planbar bleiben.",
      },
    ],
    sections: [
      {
        id: "verkabelung",
        title: "Strukturierte Verkabelung nach DIN EN 50173",
        body:
          "Die Normenreihe DIN EN 50173 beschreibt anwendungsneutrale Kommunikationskabelanlagen und teilt sie in Primär-, Sekundär- und Tertiärbereich. Genau daran orientieren wir uns: Glasfaser im Backbone zwischen Gebäuden und Etagenverteilern, Kupfer bis zum Arbeitsplatz oder Endgerät. Jede Strecke wird nach der geplanten Klasse gemessen und protokolliert – das Messprotokoll ist Teil der Abnahme und später die Grundlage für Fehlersuche und Erweiterung.",
        bullets: [
          "Primär-, Sekundär- und Tertiärbereich sauber getrennt geplant",
          "Glasfaser-Backbone, Kupfer in der Etage – Reserven eingeplant",
          "Messung und Protokollierung jeder Strecke vor der Abnahme",
          "Eindeutige Beschriftung von Dosen, Patchfeldern und Ports",
        ],
      },
      {
        id: "aktive-technik",
        title: "Switching, PoE und Netzsegmentierung",
        body:
          "Konferenzbars, Deckenmikrofone, Touchpanels, Signage-Player, Access Points und IP-Kameras werden fast alle über Power over Ethernet versorgt. Deshalb planen wir nicht nur Ports, sondern Leistungsbudgets: IEEE 802.3af liefert bis 15,4 W, 802.3at bis 30 W und 802.3bt je nach Typ bis 60 bzw. 90 W am Port – die Summe muss das Switch-Netzteil dauerhaft tragen. Parallel legen wir die Segmentierung fest: eigene VLANs für AV, Signage und Videoüberwachung, mit definierten Übergängen statt pauschaler Freigaben.",
        bullets: [
          "PoE-Budget je Switch aus der realen Gerätelast berechnet",
          "Eigene VLANs für AV, Signage, Kameras und Clients",
          "QoS für Echtzeit-Audio und -Video im AV-Netz",
          "Redundanz und unterbrechungsfreie Versorgung für kritische Verteiler",
        ],
      },
      {
        id: "wlan",
        title: "Enterprise-WLAN und Funkversorgung",
        body:
          "WLAN-Planung nach Grundriss allein führt regelmäßig zu Funklöchern in genau den Räumen, in denen Videokonferenzen stattfinden. Wir arbeiten deshalb mit Ausleuchtungsplanung und – wo sinnvoll – Vor-Ort-Messung, insbesondere in Hallen, Kellergeschossen und Bereichen mit Metallregalen. Neue Standards wie Wi-Fi 6E und Wi-Fi 7 nutzen zusätzlich das 6-GHz-Band; ob das im konkreten Fall Vorteile bringt, hängt an den vorhandenen Endgeräten.",
        bullets: [
          "Ausleuchtungsplanung statt Access Points nach Gefühl",
          "Berücksichtigung von Hallen, Lagern und schwierigen Baustoffen",
          "Getrennte Netze für Mitarbeitende, Gäste und Geräte",
          "Bewertung von Wi-Fi 6E/7 anhand Ihrer tatsächlichen Endgeräte",
        ],
      },
      {
        id: "raeume-betrieb",
        title: "Technikräume, Racks und Übergabe",
        body:
          "Technikräume entscheiden über die Lebensdauer der Installation. Wir planen Rackaufteilung, Kabelführung, Belüftung und Stromversorgung so, dass spätere Erweiterungen ohne Umbau möglich sind. Zur Übergabe gehören Dokumentation, Messprotokolle, Portpläne und eine Einweisung Ihrer IT – damit Ihr Team die Anlage selbst betreiben kann. Auf Wunsch übernehmen wir Monitoring und Wartung.",
        bullets: [
          "Rack- und Wegeplanung mit Reserve für Erweiterungen",
          "Belüftung und abgesicherte Stromversorgung berücksichtigt",
          "Vollständige Übergabedokumentation inklusive Messprotokollen",
          "Optionales Monitoring und Wartung im Managed Service",
        ],
      },
    ],
    useCases: [
      "Neubau und Erstausstattung",
      "Bestandssanierung im laufenden Betrieb",
      "Campus- und Multi-Site-Netze",
      "Technikräume und Verteilerebenen",
    ],
    faqs: [
      {
        question: "Was bedeutet strukturierte Verkabelung konkret?",
        answer:
          "Eine anwendungsneutrale Verkabelung nach DIN EN 50173: klar getrennte Bereiche vom Gebäude-Backbone bis zur Anschlussdose, definierte Übertragungsklassen, einheitliche Komponenten und dokumentierte Messwerte. Sie ist damit unabhängig davon nutzbar, welche Systeme später angeschlossen werden.",
      },
      {
        question: "Welche PoE-Klasse brauchen unsere AV-Geräte?",
        answer:
          "Das hängt vom Gerät ab: Touchpanels und Access Points kommen oft mit 802.3at aus, leistungsstärkere Videobars, Kameras mit Heizung oder Displays benötigen 802.3bt. Wir erstellen die Leistungsbilanz je Switch, bevor die aktive Technik ausgewählt wird.",
      },
      {
        question: "Müssen AV-Geräte in ein eigenes Netzsegment?",
        answer:
          "In der Regel ja. Eigene VLANs für AV, Signage und Kameras erleichtern Priorisierung, Fehlersuche und Absicherung. Die konkreten Regeln stimmen wir mit Ihrer Netzwerk- und Security-Organisation ab.",
      },
      {
        question: "Können Sie im laufenden Betrieb sanieren?",
        answer:
          "Ja. Wir arbeiten abschnittsweise, mit Umschaltungen in Wartungsfenstern und – wo nötig – Parallelbetrieb der alten Strecken bis zur erfolgreichen Messung der neuen.",
      },
    ],
    relatedLinks: [
      { to: "/videokonferenzanlage", label: "Videokonferenzanlage planen lassen" },
      { to: "/digital-signage", label: "Digital Signage für Unternehmen" },
      { to: "/loesungen/videoueberwachung-sicherheit", label: "Videoüberwachung & Sicherheit" },
      { to: "/service-wartung", label: "Service & Wartung (ITIL v4)" },
    ],
  },

  // ───────────────────────────────────────────── Sicherheit
  {
    slug: "videoueberwachung-sicherheit",
    navLabel: "Videoüberwachung & Sicherheit",
    title: "Videoüberwachung für Unternehmen: Planung & Betrieb | SLT Technology Group",
    description:
      "Videoüberwachung für Unternehmen: IP-Kameras, Video-Management-Software, Zutrittskontrolle und Intercom – geplant nach DIN EN 62676 und datenschutzkonform umgesetzt.",
    h1: "Videoüberwachung & Sicherheit",
    badge: "Sicherheitstechnik",
    heroLead:
      "Videoüberwachung im Unternehmen ist immer beides: ein technisches und ein rechtliches Projekt. Wir planen Kameratechnik entlang eines definierten Schutzziels – und entlang der Datenschutzanforderungen.",
    keywords:
      "Videoüberwachung Unternehmen, IP-Kamera Firmengelände, Video-Management-Software, DIN EN 62676, Zutrittskontrolle, Intercom Türsprechanlage",
    image: "/assets/solutions/surveillance.jpg",
    imagePosition: "object-[50%_25%]",
    criteria: [
      {
        title: "Schutzziel zuerst",
        text: "Erkennen, Wiedererkennen oder Identifizieren – das Ziel bestimmt Auflösung und Kameraposition.",
      },
      {
        title: "Rechtssicher aufgesetzt",
        text: "Rechtsgrundlage, Kennzeichnung, Löschfristen und Mitbestimmung werden mitgeplant.",
      },
      {
        title: "Netzwerk mitgedacht",
        text: "Kameras sind Netzlast: Bandbreite, PoE-Budget und Speicher werden vorab gerechnet.",
      },
      {
        title: "Auswertbar",
        text: "Ein VMS, das Vorfälle in Minuten findet – nicht ein Rekorder, den niemand bedienen kann.",
      },
    ],
    sections: [
      {
        id: "schutzziel",
        title: "Schutzziel, Kameraauswahl und Ausleuchtung",
        body:
          "Die Normenreihe DIN EN 62676 beschreibt Videoüberwachungsanlagen für Sicherungsanwendungen und arbeitet mit abgestuften Betriebsaufgaben – von der reinen Beobachtung bis zur Identifizierung. Aus dieser Aufgabe leiten sich Auflösung, Brennweite und Montagehöhe je Kameraposition ab, nicht umgekehrt. Genauso wichtig ist Licht: Gegenlicht an Toren, dunkle Hofflächen oder Scheinwerfer im Bild machen sonst auch hochauflösende Kameras unbrauchbar.",
        bullets: [
          "Je Position festlegen, ob beobachtet, wiedererkannt oder identifiziert werden soll",
          "Objektiv, Auflösung und Montagehöhe daraus ableiten",
          "Gegenlicht-, Nacht- und Witterungssituation bewerten",
          "Dome-, Bullet- oder PTZ-Kameras je nach Fläche und Aufgabe",
        ],
      },
      {
        id: "vms",
        title: "Video-Management-Software und Auswertung",
        body:
          "Eine Anlage ist nur so gut wie die Auswertbarkeit ihrer Aufnahmen. Ein Video-Management-System bündelt Kameras, verwaltet Aufzeichnung und Speicherfristen und protokolliert, wer wann Aufnahmen gesehen oder exportiert hat – das ist für Datenschutzauskünfte und Ermittlungen gleichermaßen relevant. Analysefunktionen wie Bereichsüberwachung oder Objektklassifizierung reduzieren Fehlalarme, sind aber ihrerseits datenschutzrechtlich zu bewerten.",
        bullets: [
          "Zentrale Verwaltung aller Standorte und Kameras",
          "Rollenbasierte Zugriffsrechte und lückenloses Zugriffsprotokoll",
          "Automatische Löschung nach hinterlegter Frist",
          "Analysefunktionen nur dort, wo sie rechtlich tragfähig sind",
        ],
      },
      {
        id: "datenschutz",
        title: "Datenschutz und Mitbestimmung",
        body:
          "Videoüberwachung verarbeitet personenbezogene Daten und braucht eine Rechtsgrundlage nach Art. 6 DSGVO sowie eine transparente Information der Betroffenen; Datensparsamkeit und Speicherbegrenzung nach Art. 5 DSGVO bestimmen Bildausschnitt und Aufbewahrungsdauer. Werden Beschäftigte erfasst, ist die Anlage in Betrieben mit Betriebsrat regelmäßig mitbestimmungspflichtig nach § 87 BetrVG. Wir liefern die technischen Grundlagen dafür – Kamerapläne, Blickfelder, Maskierungen und Löschkonzepte –; die rechtliche Bewertung trifft Ihre Datenschutz- und Rechtsorganisation.",
        bullets: [
          "Kamerapläne mit dokumentierten Blickfeldern als Grundlage der Bewertung",
          "Technische Maskierung nicht zu erfassender Bereiche",
          "Hinterlegte Löschfristen statt manueller Bereinigung",
          "Beschilderung und Hinweisinformationen an den Zugängen",
        ],
      },
      {
        id: "zutritt-intercom",
        title: "Zutrittskontrolle und Intercom",
        body:
          "Videoüberwachung entfaltet ihren Nutzen im Zusammenspiel mit Zutritt und Kommunikation: Wer darf wann wohin, und wie meldet sich jemand am Tor außerhalb der Öffnungszeiten? Türstationen mit Kamera, Zutrittsleser und die Anbindung an Empfang oder Leitstelle bilden diesen Ablauf ab. Da alle Komponenten über das Netzwerk laufen, planen wir sie gemeinsam mit der Verkabelung und dem PoE-Budget.",
        bullets: [
          "Zutrittsleser und Berechtigungsgruppen entlang Ihrer Organisationsstruktur",
          "IP-Türstationen mit Weiterleitung an Empfang, Pforte oder Leitstelle",
          "Kopplung von Ereignissen: Türöffnung erzeugt Kamerabild-Bezug",
          "Gemeinsame Planung mit Verkabelung, PoE und Netzsegmentierung",
        ],
      },
    ],
    useCases: [
      "Firmengelände und Zufahrten",
      "Produktions- und Lagerhallen",
      "Parkflächen und Parkhäuser",
      "Empfang und Zutrittspunkte",
    ],
    faqs: [
      {
        question: "Welche Auflösung brauchen wir pro Kamera?",
        answer:
          "Das ergibt sich aus der Aufgabe: Beobachten einer Fläche stellt deutlich geringere Anforderungen als das Identifizieren einer Person an einem Zugang. DIN EN 62676 beschreibt diese Abstufung; wir legen sie je Kameraposition mit Ihnen fest.",
      },
      {
        question: "Wie lange dürfen Aufnahmen gespeichert werden?",
        answer:
          "Nur so lange, wie es für den festgelegten Zweck erforderlich ist – die konkrete Frist ergibt sich aus Ihrer Zweckbestimmung und der Bewertung Ihrer Datenschutzorganisation. Technisch hinterlegen wir die Frist im VMS, sodass automatisch gelöscht wird.",
      },
      {
        question: "Ist der Betriebsrat zu beteiligen?",
        answer:
          "Wenn Beschäftigte durch die Anlage erfasst werden können, ist in Betrieben mit Betriebsrat regelmäßig eine Mitbestimmung nach § 87 BetrVG einschlägig. Wir liefern dafür Kamerapläne, Blickfelder und Löschkonzepte als Entscheidungsgrundlage.",
      },
      {
        question: "Können vorhandene Kameras eingebunden werden?",
        answer:
          "Häufig ja, sofern sie gängige Standards unterstützen. Wir prüfen Bestand, Bildqualität und Firmware-Stand und schlagen vor, welche Positionen übernommen und welche ersetzt werden sollten.",
      },
    ],
    relatedLinks: [
      { to: "/loesungen/it-infrastruktur-netzwerk", label: "IT-Infrastruktur & Netzwerk" },
      { to: "/loesungen/industrie-produktion", label: "Industrie & Produktion" },
      { to: "/service-wartung", label: "Service & Wartung (ITIL v4)" },
      { to: "/projektanfrage", label: "Projekt anfragen" },
    ],
  },
];

export function getSolutionPage(slug?: string): SolutionPage | undefined {
  return solutionPages.find((p) => p.slug === slug);
}

/**
 * Navigationsstruktur „Lösungen“.
 * Themen mit eigener Pillar-Page zeigen dorthin (keine Doppelseiten,
 * keine Keyword-Kannibalisierung).
 */
export interface SolutionNavEntry {
  name: string;
  href: string;
}

export const solutionsNav: SolutionNavEntry[] = [
  { name: "Konferenzräume & Meeting-Spaces", href: "/konferenzraum-ausstattung" },
  { name: "Videokonferenzanlagen", href: "/videokonferenzanlage" },
  { name: "Kollaborationsräume & Kreativzonen", href: "/loesungen/kollaborationsraeume-kreativzonen" },
  { name: "Auditorien & Veranstaltungsräume", href: "/loesungen/auditorien-veranstaltungsraeume" },
  { name: "Empfangsbereiche & Digital Signage", href: "/digital-signage" },
  { name: "Bildung & Schulung", href: "/loesungen/bildung-schulung" },
  { name: "Industrie & Produktion", href: "/loesungen/industrie-produktion" },
  { name: "IT-Infrastruktur & Netzwerk", href: "/loesungen/it-infrastruktur-netzwerk" },
  { name: "Videoüberwachung & Sicherheit", href: "/loesungen/videoueberwachung-sicherheit" },
];

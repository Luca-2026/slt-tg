import { outdoorLedArticle } from "./outdoorLedArticle";

interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  videoBackground?: string;
  youtubeEmbed?: string;
  externalLink?: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  { ...outdoorLedArticle, id: outdoorLedArticle.slug, excerpt: outdoorLedArticle.description, featured: true },
  {
    id: "ise-2026",
    slug: "ise-2026-barcelona",
    title: "Neues aus der AV-Welt von der ISE 2026 in Barcelona",
    excerpt: "Die ISE 2026 in Barcelona präsentiert die neuesten Innovationen in der AV-Branche. Wir berichten über die wichtigsten Trends, Produktneuheiten und Highlights der weltweit größten Fachmesse für professionelle audiovisuelle Technik und Systemintegration.",
    date: "2026-02-03",
    readTime: "5 Min.",
    category: "Messe",
    image: "/assets/news/ise-2026-barcelona.webp",
    featured: true,
  },
  {
    id: "konferenzraum-chaos",
    slug: "hochwertige-technik-trotzdem-chaos",
    title: "Hochwertige Technik – trotzdem Chaos im Konferenzraum?",
    excerpt: "Viele Konferenzräume sind mit erstklassiger Technik ausgestattet. Doch warum fühlt sich der Start eines Meetings trotzdem oft an wie eine technische Herausforderung?",
    date: "2026-01-28",
    readTime: "3 Min.",
    category: "Praxistipp",
    image: "/assets/news/konferenzraum-chaos.jpg",
  },
  {
    id: "huddly-speaker-mode",
    slug: "huddly-speaker-mode-ki-kamera",
    title: "Huddly Speaker Mode: KI-Kameras, die den Sprecher im Blick behalten",
    excerpt: "Mit dem Huddly Speaker Mode sehen Sie jederzeit, wer spricht – unabhängig vom Platz im Raum. Die KI erkennt automatisch den aktiven Sprecher und passt das Bild dynamisch an.",
    date: "2026-01-26",
    readTime: "4 Min.",
    category: "Produktnews",
    videoBackground: "https://stream.mux.com/7sXxfory8L02Y8tU2Ih02WajBQWENTUAnBcpQiKag021Dw.m3u8?min_resolution=720p",
    youtubeEmbed: "https://www.youtube.com/watch?v=L-BYXom1cxw",
    externalLink: "https://www.huddly.com",
  },
  {
    id: "audio-probleme",
    slug: "man-hoert-nichts-schon-wieder",
    title: "Man hört nichts – schon wieder",
    excerpt: "Ein Meeting startet, alle sind da – und trotzdem geht es nicht los, weil niemand etwas hört. Audio-Probleme gehören zu den häufigsten Störfaktoren in Konferenzräumen.",
    date: "2026-01-25",
    readTime: "4 Min.",
    category: "Praxistipp",
    image: "/assets/news/audio-probleme.jpg",
  },
];

export const guides = [
  {
    slug: "raumbuchungssystem-konferenzraeume",
    image: "/assets/ratgeber/raumbuchung-og.jpg",
    title: "Raumbuchungssystem für Konferenzräume: Auswahl, Integration und Betrieb",
    description: "Kalender-Integration in Microsoft 365 oder Google Workspace, Türpanels, Auto-Release, Netzwerk und Datenschutz – mit Checkliste in sechs Punkten.",
    date: "2026-09-10",
    readTime: "7 Min.",
    category: "Planung",
    featured: true,
  },
  {
    slug: "ki-readiness-av-medientechnik-2026",
    image: "/assets/ratgeber/ki-readiness.jpg",
    title: "KI-Readiness in der AV-Branche: Medientechnik 2026 KI-fähig machen",
    description: "KI in Konferenzräumen, EU AI Act, NIS2 und Predictive Maintenance – mit Checkliste in sechs Schritten.",
    date: "2026-08-06",
    readTime: "8 Min.",
    category: "AV/IT-Konvergenz",
    featured: false,
  },
  {
    slug: "yealink-meetingboard-pro",
    image: "/assets/ratgeber/meetingboard.jpg",
    title: "Yealink MeetingBoard Pro: All-in-One für Teams Rooms",
    description: "Funktionen, Größen und Einsatzszenarien – inklusive Installation und Inbetriebnahme durch SLT als autorisierter Partner.",
    date: "2026-03-26",
    readTime: "7 Min.",
    category: "Produkte",
    featured: false,
  },
  {
    slug: "konferenztechnik-raumgroesse",
    image: "/assets/ratgeber/raumgroesse.jpg",
    title: "Welche Konferenztechnik für welche Raumgröße?",
    description: "Vom Huddle Space bis zum Boardroom: Welche AV-Ausstattung für welchen Raumtyp sinnvoll ist.",
    date: "2026-03-14",
    readTime: "8 Min.",
    category: "Planung",
    featured: false,
  },
  {
    slug: "teams-rooms-vs-zoom-rooms",
    image: "/assets/ratgeber/plattformen.jpg",
    title: "Microsoft Teams Rooms vs. Zoom Rooms",
    description: "Funktionen, Lizenzkosten und Ökosysteme im Vergleich – eine neutrale Entscheidungshilfe.",
    date: "2026-03-14",
    readTime: "6 Min.",
    category: "Plattformen",
    featured: false,
  },
  {
    slug: "konferenzraum-kosten",
    image: "/assets/ratgeber/kosten.jpg",
    title: "Was kostet ein Konferenzraum?",
    description: "Realistische Kostenrahmen für verschiedene Raumgrößen und Ausstattungsstufen.",
    date: "2026-03-14",
    readTime: "7 Min.",
    category: "Budget",
    featured: false,
  },
];


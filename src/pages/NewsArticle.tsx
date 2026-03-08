import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Download } from "lucide-react";

interface ArticleData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  content: React.ReactNode;
}

// Generate Article Schema for SEO
const generateArticleSchema = (article: ArticleData) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.metaDescription,
  "datePublished": article.date,
  "dateModified": article.date,
  "author": {
    "@type": "Organization",
    "name": "SLT Technology Group",
    "url": "https://www.slt-tg.de/ueber-uns"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SLT Technology Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.slt-tg.de/favicon.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.slt-tg.de/news/${article.slug}`
  },
  "image": article.image ? `https://www.slt-tg.de${article.image}` : "image": article.image ? `https://www.slt-tg.de${article.image}` : "https://www.slt-tg.de/favicon.png",,
  "articleSection": article.category,
  "keywords": article.keywords
});

const articlesData: Record<string, ArticleData> = {
  "ise-2026-barcelona": {
    slug: "ise-2026-barcelona",
    title: "Neues aus der AV-Welt von der ISE 2026 in Barcelona",
    metaDescription: "Highlights und Innovationen von der ISE 2026 in Barcelona – die weltweit größte Fachmesse für professionelle AV-Technik. Trends, Produktneuheiten und Eindrücke.",
    keywords: "ISE 2026, Barcelona, AV Messe, Medientechnik Trends, ProAV, Integrated Systems Europe",
    date: "2026-02-03",
    readTime: "5 Min.",
    category: "Messe",
    image: "/assets/news/ise-2026-barcelona.webp",
    content: (
      <div className="prose prose-lg max-w-none">
        {/* Hero Image */}
        <div className="aspect-video rounded-lg overflow-hidden mb-8 bg-black flex items-center justify-center">
          <img 
            src="/assets/news/ise-2026-barcelona.webp" 
            alt="Integrated Systems Europe ISE 2026 Barcelona - Weltleitmesse für AV und Systemintegration vom 3. bis 6. Februar 2026"
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Fira Barcelona, Gran Via</span>
          </div>
          <p className="text-muted-foreground mb-0">
            <strong>Datum:</strong> 3. – 6. Februar 2026<br />
            <strong>Ort:</strong> Barcelona, Spanien
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die ISE 2026 – Weltleitmesse für AV und Systemintegration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Die Integrated Systems Europe (ISE) ist die weltweit größte Fachmesse für professionelle 
          audiovisuelle Technik und Systemintegration. Jährlich versammeln sich hier die führenden 
          Hersteller, Integratoren und Experten der Branche, um die neuesten Innovationen zu präsentieren 
          und sich über aktuelle Trends auszutauschen.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Unsere Highlights von der ISE 2026
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Produktneuheiten:</strong> Die spannendsten Launches und Ankündigungen der führenden Hersteller</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Technologie-Trends:</strong> KI in der AV-Technik, Cloud-basierte Lösungen, Nachhaltigkeit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Collaboration-Lösungen:</strong> Neue Ansätze für hybride Meetings und moderne Arbeitsplätze</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Display-Technologien:</strong> LED, MicroLED, OLED – die Zukunft der Visualisierung</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Audio-Innovationen:</strong> Neue Lösungen für Konferenzräume und Auditorien</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Highlight: Barco ClickShare Hub
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-6">
          <img 
            src="/assets/news/barco-clickshare-hub-ise2026.jpg" 
            alt="Barco ClickShare Hub auf der ISE 2026 - Modulares Video Conferencing Room System"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Eines der Highlights auf der ISE 2026: Der neue <strong>Barco ClickShare Hub</strong> – ein vollwertiges 
          <strong>Microsoft Teams Room System auf Android-Basis</strong> mit integriertem ClickShare-System. 
          Diese Kombination vereint das Beste aus beiden Welten: Die native Teams-Erfahrung mit der 
          bewährten ClickShare-Einfachheit für kabelloses Präsentieren.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
          ClickShare Hub Core vs. Hub Pro
        </h3>
        <div className="rounded-lg overflow-hidden mb-6 bg-muted max-w-sm">
          <img 
            src="/assets/news/barco-clickshare-hub-vergleich.png" 
            alt="Barco ClickShare Hub Produktvergleich - Hub Core vs Hub Pro mit Dual-Screen Support"
            className="w-full h-auto"
          />
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Der <strong>ClickShare Hub Pro</strong> unterscheidet sich vom Core-Modell insbesondere durch die 
          <strong>Dual-Screen-Unterstützung</strong> – ideal für größere Konferenzräume mit zwei Displays.
        </p>
        
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Microsoft Teams Room on Android:</strong> Natives Teams-Erlebnis mit voller Meeting-Integration</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Integriertes ClickShare:</strong> Kabelloses Präsentieren ohne zusätzliche Hardware</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Hub Pro mit Dual-Screen:</strong> Zwei Displays für erweiterte Präsentationen und Videokonferenzen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Next-Gen USB-C Button:</strong> Einfache Verbindung für sofortiges, kabelloses Teilen</span>
          </li>
        </ul>
        
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-foreground font-medium mb-2">🚀 Kommendes Update</p>
          <p className="text-muted-foreground text-sm">
            Ein Software-Update soll <strong>vollständiges Bring Your Own Device (BYOD)</strong> ermöglichen – 
            mit bidirektionalem ClickShare, wie bei der CX-Serie. Damit wird der Hub zum absoluten Top-Produkt 
            für hybride Zusammenarbeit.
          </p>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <Button variant="outline" asChild>
            <a href="/assets/docs/barco-clickshare-hub-brochure.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Produktbroschüre (PDF)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.barco.com/de/products/clickshare-conferencing-collaboration/room-systems-video-conferencing" target="_blank" rel="noopener noreferrer">
              Barco ClickShare Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
          Crestron CCC-120-T: Die neue UC Compute Engine
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="/assets/news/crestron-ccc-120-t.png" 
              alt="Crestron CCC-120-T UC Compute Engine für Microsoft Teams Rooms - Produktansicht"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="/assets/news/crestron-ccc-120-ise2026.jpg" 
              alt="Crestron CCC-120-T auf der ISE 2026 Barcelona"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Ein weiteres Highlight: Die neue <strong>Crestron CCC-120-T</strong> – eine extrem leistungsstarke 
          UC Compute Engine für <strong>Microsoft Teams Rooms</strong>. Mit dem <strong>Intel Core Ultra 7 Prozessor</strong> 
          ist sie bereit für KI-Funktionen und bietet optimale Leistung für Echtzeit-Meeting-Verbesserungen 
          und intelligente Kollaborationstools.
        </p>
        
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Intel Core Ultra 7:</strong> KI-ready Prozessor für intelligente Meeting-Funktionen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Direkte Touchpanel-Anbindung:</strong> PoE+ Port für Crestron TS(W)-1080-UC Touchscreens</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Single oder Dual Display:</strong> Unterstützung für bis zu zwei Videoausgänge</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Enterprise-Sicherheit:</strong> Für große Unternehmen, Universitäten und Behörden geeignet</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>XiO Cloud Management:</strong> Zentrale Verwaltung und Provisionierung tausender Geräte</span>
          </li>
        </ul>

        <div className="p-4 bg-card border rounded-lg mb-6">
          <p className="text-foreground font-medium mb-2">📱 Neue TSW-1080 Touchpanel-Serie</p>
          <p className="text-muted-foreground text-sm">
            Wir haben auch die neue <strong>Crestron TSW-1080 Serie</strong> live getestet – die Touchpanels 
            lassen sich direkt per PoE+ an die CCC-120-T anschließen und bieten die native Microsoft Teams Rooms 
            Benutzeroberfläche mit optionaler Raumsteuerung für Licht, Jalousien und Klimaanlage.
          </p>
        </div>

        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mb-6">
          <p className="text-foreground font-medium mb-2">🚀 Coming Soon: BYOD Conferencing</p>
          <p className="text-muted-foreground text-sm">
            Neben der BYOD-Präsentation via HDMI wird bald auch <strong>vollständiges BYOD Conferencing</strong> verfügbar sein – 
            Laptop per USB-C an das Touchpanel anschließen und die eigene Konferenzplattform nutzen, 
            während Kameras, Mikrofone und Lautsprecher des Raums verwendet werden.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" asChild>
            <a href="/assets/docs/crestron-ccc-120-t-datenblatt.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Datenblatt (PDF)
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.crestron.com/Products/Workspace-Solutions/Unified-Communications/Crestron-Flex-Tabletop-Conferencing-Systems/CCC-120-T" target="_blank" rel="noopener noreferrer">
              Crestron Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
          PureLink FlexInstall ProAV Kabel
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-6">
          <img 
            src="/assets/news/purelink-flexinstall-proav-ise2026.jpg" 
            alt="PureLink FlexInstall ProAV Kabel auf der ISE 2026 - HDMI, USB-A, USB-B, USB-C und CAT.6A"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          PureLink präsentiert mit der <strong>FlexInstall ProAV</strong> Serie eine neue Generation 
          professioneller AV-Kabel, die speziell für Installateure entwickelt wurden. Die Kabel überzeugen 
          durch ein <strong>superflexibles, schlankes Kabeldesign</strong> mit kompakten Steckern und 
          farbkodierten, abnehmbaren Knickschutzhülsen.
        </p>
        
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>HDMI 2.1 8K:</strong> Zukunftssicher für höchste Auflösungen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>USB-C (USB4 Gen2, 20 Gbps):</strong> Schnelle Datenübertragung und Videoübermittlung</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>USB-A & USB-B (USB 3.2 Gen2):</strong> Für Peripheriegeräte und Konferenztechnik</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>CAT.6A S/FTP:</strong> Geschirmte Netzwerkkabel für zuverlässige Signalübertragung</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Funktions- & Längenkodierung:</strong> Einfache Identifikation bei der Installation</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
          PureLink Unified Control Touch Panels
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-6">
          <img 
            src="/assets/news/purelink-control-displays-ise2026.jpg" 
            alt="PureLink Unified Control Touch Panels in 4 bis 10 Zoll auf der ISE 2026"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Ebenfalls neu bei PureLink: Die <strong>Unified Control Touch Panels</strong> – eine kostenoptimierte 
          Steuerungslösung in Größen von <strong>4 bis 10 Zoll</strong>. Die Panels eignen sich ideal für 
          einfache Steuerungsszenarien in Konferenzräumen, Klassenzimmern und Büros.
        </p>
        
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>4" bis 10" Displays:</strong> Flexible Größen für jede Raumanforderung</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>PoE oder DC:</strong> Stromversorgung über Netzwerk oder externes Netzteil</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Intuitive Steuerung:</strong> Displays, Quellenwahl, Raumsteuerung auf einen Touch</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Integrierte Sensorik:</strong> Licht, Präsenz, Temperatur und Luftfeuchtigkeit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Remote-Management:</strong> Updates, Verwaltung und GUI-Anpassung aus der Ferne</span>
          </li>
        </ul>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" asChild>
            <a href="https://www.purelink.de" target="_blank" rel="noopener noreferrer">
              PureLink Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-8 p-6 bg-card border rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Mehr zur ISE
          </h3>
          <p className="text-muted-foreground mb-4">
            Offizielle Website der Integrated Systems Europe:
          </p>
          <Button variant="outline" asChild>
            <a href="https://www.iseurope.org" target="_blank" rel="noopener noreferrer">
              iseurope.org besuchen
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    ),
  },
  "huddly-speaker-mode-ki-kamera": {
    slug: "huddly-speaker-mode-ki-kamera",
    title: "Huddly Speaker Mode: KI-Kameras, die den Sprecher im Blick behalten",
    metaDescription: "Huddly Kameras mit Speaker Mode erkennen automatisch den aktiven Sprecher und passen das Bild dynamisch an. Erfahren Sie mehr über die C1 Videobar und KI-gesteuerte Kamerasysteme.",
    keywords: "Huddly Speaker Mode, Huddly C1, KI Kamera, Videokonferenz Kamera, AI Tracking, Huddly L1, Huddly Crew",
    date: "2026-01-26",
    readTime: "4 Min.",
    category: "Produktnews",
    image: "/assets/partners/huddly.png",
    content: (
      <div className="prose prose-lg max-w-none">
        {/* Video Header */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8 bg-black">
          <video 
            src="https://stream.mux.com/7sXxfory8L02Y8tU2Ih02WajBQWENTUAnBcpQiKag021Dw.m3u8?min_resolution=720p"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Intelligentes Framing für natürliche Meetings
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Mit dem <strong>Huddly Speaker Mode</strong> sehen Sie jederzeit, wer spricht – unabhängig vom Platz 
          im Raum. Die KI erkennt automatisch den aktiven Sprecher und passt das Bild dynamisch an. 
          Sobald das Gespräch weitergeht, folgt das Bild automatisch.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Als wäre immer ein Regisseur am Werk</strong>, der den Sprecher im Blick hält, damit Sie 
          sich ganz auf den Inhalt konzentrieren können.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die Huddly C1 Videobar – KI-Power für kleine und mittlere Räume
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Die <strong>Huddly C1</strong> ist eine AI-gesteuerte Videobar, die erstklassige Videoqualität mit 
          innovativer Audio-Technologie verbindet. Mit einem ultra-weiten <strong>150°-Objektiv</strong> wird 
          jeder Platz im Raum erfasst – niemand sitzt außerhalb des Bildes.
        </p>
        
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>4K-Sensor</strong> mit intelligenter Bildverarbeitung für gestochen scharfe Videos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Huddly Intelligence:</strong> Onboard-KI für dynamisches Framing von Einzelpersonen und Gruppen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Premium-Audio:</strong> Integrierte Mikrofone und Lautsprecher für kristallklare Kommunikation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Modulares Design:</strong> Erweiterbar für zukünftige Anforderungen</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Huddly Crew – Multi-Kamera-System mit KI-Regie
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Für größere Räume bietet <strong>Huddly Crew</strong> ein revolutionäres Multi-Kamera-System. 
          Die onboard KI übernimmt die Rolle eines virtuellen Regisseurs und wählt automatisch die beste 
          Kameraperspektive – ob Sprecherfokus oder Gruppenansicht.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Mit der neuesten <strong>3D Spatial Awareness</strong> Technologie erstellt das System eine 
          dreidimensionale Karte des Raums für noch präziseres und natürlicheres Framing.
        </p>

        {/* YouTube Embed */}
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Speaker Mode in Aktion
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/L-BYXom1cxw"
            title="Huddly Speaker Mode Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-0"
          />
        </div>

        {/* Partner Box */}
        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            🎁 Exklusiv als Huddly Partner
          </h3>
          <p className="text-muted-foreground mb-4">
            Als offizieller <strong>Huddly Partner</strong> bieten wir Ihnen:
          </p>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Sonderpreise</strong> für Huddly Kameras und Zubehör</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Kostenlose Teststellungen</strong> zum Ausprobieren in Ihren Räumen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Fachberatung</strong> zur optimalen Kamera-Auswahl und Platzierung</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/projektanfrage">
                Teststellung anfragen
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/assets/docs/huddly-c1-datenblatt.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Datenblatt C1 (PDF)
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.huddly.com" target="_blank" rel="noopener noreferrer">
                Huddly Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  "hochwertige-technik-trotzdem-chaos": {
    slug: "hochwertige-technik-trotzdem-chaos",
    title: "Hochwertige Technik – trotzdem Chaos im Konferenzraum?",
    metaDescription: "Warum erstklassige Technik allein nicht reicht. Erfahren Sie, wie durchdachte Systemintegration den Unterschied macht.",
    keywords: "Konferenzraum Technik, Mediensteuerung, AV Integration, Meeting Raum, Systemintegration",
    date: "2026-01-28",
    readTime: "3 Min.",
    category: "Praxistipp",
    image: "/assets/news/konferenzraum-chaos.jpg",
    content: (
      <div className="prose prose-lg max-w-none">
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img 
            src="/assets/news/konferenzraum-chaos.jpg" 
            alt="Chaos im Konferenzraum"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Technik vorhanden – trotzdem Chaos?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Viele Konferenzräume sind mit erstklassiger Technik ausgestattet. Doch warum fühlt sich 
          der Start eines Meetings trotzdem oft an wie eine technische Herausforderung?
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Fünf Fernbedienungen</strong>, ein Kabelsalat unter dem Tisch und die ewige Frage: 
          <em>Welcher Eingang war nochmal der richtige?</em>
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Das Problem: Fehlende Integration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Die beste Technik nützt wenig, wenn sie nicht aufeinander abgestimmt ist. Einzelne 
          Komponenten – Display, Kamera, Mikrofon, Mediensteuerung – müssen als 
          <strong> Gesamtsystem</strong> funktionieren.
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Zeitverlust:</strong> Jedes Meeting beginnt mit technischen Problemen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Frustration:</strong> Mitarbeiter meiden den Raum oder nutzen private Geräte</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Unprofessionalität:</strong> Externe Teilnehmer erleben holprige Meetings</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die Lösung: Durchdachte Systemintegration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Bei <strong>SLT Technology Group</strong> sorgen wir dafür, dass Ihre Technik 
          zusammenarbeitet. Ein Knopfdruck startet das Meeting – Display, Beleuchtung und 
          Videokonferenz sind sofort bereit.
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>One-Touch-Join:</strong> Meeting starten mit einem einzigen Klick</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Intuitive Bedienung:</strong> Jeder kann die Technik nutzen – ohne Schulung</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Zukunftssicher:</strong> Modulare Systeme, die mitwachsen</span>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Lassen Sie uns Ordnung schaffen
          </h3>
          <p className="text-muted-foreground mb-4">
            Ich bin gerne Ihr Ansprechpartner, wenn Ihr Konferenzraum endlich so funktionieren soll, 
            wie er sollte.
          </p>
          <Button asChild>
            <Link to="/projektanfrage">
              Beratung anfragen
            </Link>
          </Button>
        </div>
      </div>
    ),
  },
  "man-hoert-nichts-schon-wieder": {
    slug: "man-hoert-nichts-schon-wieder",
    title: "Man hört nichts – schon wieder",
    metaDescription: "Audio-Probleme in Konferenzräumen vermeiden. Erfahren Sie, wie professionelle Audioplanung für klare Kommunikation sorgt.",
    keywords: "Audio Probleme, Konferenzraum Audio, Mikrofon Platzierung, Raumakustik, Meeting Audio",
    date: "2026-01-25",
    readTime: "4 Min.",
    category: "Praxistipp",
    image: "/assets/news/audio-probleme.jpg",
    content: (
      <div className="prose prose-lg max-w-none">
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img 
            src="/assets/news/audio-probleme.jpg" 
            alt="Audio-Probleme im Meeting"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Ein alltägliches Szenario
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Ein Meeting startet. Alle sind da. Und trotzdem geht es nicht los, weil 
          <strong> niemand etwas hört</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Audio-Probleme gehören zu den häufigsten Störfaktoren in Konferenzräumen. 
          Das Frustrierende: Die Technik funktioniert – nur nicht zusammen.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Die häufigsten Ursachen
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Falsche Mikrofonplatzierung:</strong> Zu weit vom Sprecher entfernt oder ungünstig positioniert</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Schlechte Raumakustik:</strong> Hall, Echo und Hintergrundgeräusche stören die Verständlichkeit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Nicht abgestimmte Komponenten:</strong> Mikrofon, Verstärker und Lautsprecher arbeiten nicht optimal zusammen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Fehlende Echounterdrückung:</strong> Rückkopplungen und doppelte Stimmen verwirren Teilnehmer</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Was das kostet
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Schlechte Audioqualität ist nicht nur nervig – sie hat konkrete Auswirkungen:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Zeitverlust:</strong> Die ersten Minuten gehen für Troubleshooting drauf</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Konzentrationsverlust:</strong> Wer sich anstrengen muss zu hören, ermüdet schneller</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Unprofessioneller Eindruck:</strong> Externe Partner erleben ein holpriges Meeting</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
          Klare Kommunikation – so geht's
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Bei <strong>SLT Technology Group</strong> sorgen wir dafür, dass Sprache klar, 
          verständlich und zuverlässig übertragen wird:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Raumanalyse:</strong> Wir bewerten Akustik und identifizieren Problemzonen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Mikrofonkonzept:</strong> Die richtige Technologie am richtigen Ort</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Systemabstimmung:</strong> Alle Komponenten arbeiten nahtlos zusammen</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Akustikoptimierung:</strong> Falls nötig, Empfehlungen für bauliche Maßnahmen</span>
          </li>
        </ul>

        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Kommunikation, die funktioniert
          </h3>
          <p className="text-muted-foreground mb-4">
            Ich bin gerne Ihr Ansprechpartner, wenn Kommunikation wieder funktionieren soll.
          </p>
          <Button asChild>
            <Link to="/projektanfrage">
              Beratung anfragen
            </Link>
          </Button>
        </div>
      </div>
    ),
  },
};

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <Layout>
      <SEOHead
        title={`${article.title} – News`}
        description={article.metaDescription}
        keywords={article.keywords}
        canonical={`/news/${article.slug}`}
        type="article"
        structuredData={generateArticleSchema(article)}
      />

      {/* Article Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zur Übersicht
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <Badge>{article.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime} Lesezeit
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {article.content}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Haben Sie Fragen zu AV-Technologien?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Wir beraten Sie gerne zu den neuesten Lösungen für Ihre Anforderungen.
          </p>
          <Button asChild>
            <Link to="/projektanfrage">
              Projekt anfragen
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticle;

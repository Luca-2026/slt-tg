import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

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

const newsArticles: NewsArticle[] = [
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
    excerpt: "Viele Konferenzräume sind mit erstklassiger Technik ausgestattet. Doch warum fühlt sich der Start eines Meetings trotzdem oft an wie eine technische Herausforderung? Fünf Fernbedienungen, ein Kabelsalat unter dem Tisch und die ewige Frage: Welcher Eingang war nochmal der richtige?",
    date: "2026-01-28",
    readTime: "3 Min.",
    category: "Praxistipp",
    image: "/assets/news/konferenzraum-chaos.jpg",
  },
  {
    id: "huddly-speaker-mode",
    slug: "huddly-speaker-mode-ki-kamera",
    title: "Huddly Speaker Mode: KI-Kameras, die den Sprecher im Blick behalten",
    excerpt: "Mit dem Huddly Speaker Mode sehen Sie jederzeit, wer spricht – unabhängig vom Platz im Raum. Die KI erkennt automatisch den aktiven Sprecher und passt das Bild dynamisch an. Sobald das Gespräch weitergeht, folgt das Bild automatisch. Als wäre immer ein Regisseur am Werk, der den Sprecher im Blick hält, damit Sie sich ganz auf den Inhalt konzentrieren können.",
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

// Generate CollectionPage Schema for News overview
const generateNewsListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "News & Aktuelles aus der Medientechnik-Welt",
  "description": "Neuigkeiten, Trends und Innovationen aus der professionellen Medientechnik. Berichte von ISE, InfoComm und aktuelle AV-Branchenthemen.",
  "url": "https://www.slt-tg.de/news",
  "publisher": {
    "@type": "Organization",
    "name": "SLT Technology Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.slt-tg.de/assets/sandhoff-logo.jpg"
    }
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": newsArticles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.slt-tg.de/news/${article.slug}`,
      "name": article.title
    }))
  }
});

const News = () => {
  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <Layout>
      <SEOHead
        title="News: Aktuelles aus der Medientechnik-Welt"
        description="Neuigkeiten, Trends und Innovationen aus der professionellen Medientechnik. Berichte von ISE, InfoComm und aktuelle AV-Branchenthemen."
        keywords="Medientechnik News, AV Trends, ISE 2026, ProAV Innovationen, Konferenztechnik Neuheiten"
        canonical="/news"
        structuredData={generateNewsListSchema()}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Aktuelles
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              News aus der AV- & IT-Welt
            </h1>
            <p className="text-lg text-muted-foreground">
              Trends, Innovationen und Neuigkeiten aus der professionellen Medientechnik – 
              von uns für Sie zusammengefasst.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-auto bg-black flex items-center justify-center overflow-hidden">
                  {featuredArticle.image ? (
                    <img 
                      src={featuredArticle.image} 
                      alt="Integrated Systems Europe ISE 2026 Barcelona - Weltleitmesse für AV und Systemintegration vom 3. bis 6. Februar 2026"
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">ISE 2026 Barcelona</p>
                      <p className="text-sm text-muted-foreground">4. – 7. Februar 2026</p>
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge>{featuredArticle.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredArticle.date).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <Button asChild>
                      <Link to={`/news/${featuredArticle.slug}`}>
                        Weiterlesen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime} Lesezeit
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-card">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-foreground mb-8">Weitere Beiträge</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Card key={article.id} className="card-hover overflow-hidden flex flex-col">
                  {article.videoBackground ? (
                    <div className="aspect-video bg-muted overflow-hidden relative">
                      <video 
                        src={article.videoBackground}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  ) : article.image ? (
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null}
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.date).toLocaleDateString("de-DE")}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/news/${article.slug}`}>
                        Weiterlesen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Note */}
      <section className="py-16 lg:py-20">
        <div className="section-container text-center">
          <p className="text-muted-foreground mb-6">
            Weitere Beiträge folgen in Kürze. Schauen Sie regelmäßig vorbei!
          </p>
          <Button asChild variant="outline">
            <Link to="/kontakt">
              Newsletter anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default News;

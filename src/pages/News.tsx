import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const generateNewsListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "News & Aktuelles aus der Medientechnik-Welt",
  "description": "Neuigkeiten, Trends und Innovationen aus der professionellen Medientechnik.",
  "url": "https://www.slt-tg.de/news",
  "publisher": {
    "@type": "Organization",
    "name": "SLT Technology Group",
    "logo": { "@type": "ImageObject", "url": "https://www.slt-tg.de/favicon.png" }
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

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="News & Trends aus der AV-Branche"
        description="Neuigkeiten, Trends und Innovationen aus der professionellen Medientechnik. Berichte von ISE, InfoComm und aktuelle AV-Branchenthemen."
        keywords="Medientechnik News, AV Trends, ISE 2026, ProAV Innovationen, Konferenztechnik Neuheiten"
        canonical="/news"
        structuredData={generateNewsListSchema()}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={heroRef}
          className={`section-container relative z-10 scroll-hidden-blur ${heroVisible ? "scroll-visible-blur" : ""}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Aktuelles</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              News aus der{" "}
              <span className="text-primary">AV- & IT-Welt</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground">
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
            <div
              ref={featuredRef}
              className={`scroll-hidden-scale ${featuredVisible ? "scroll-visible-scale" : ""}`}
            >
              <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="aspect-video lg:aspect-auto bg-black flex items-center justify-center overflow-hidden">
                    {featuredArticle.image ? (
                      <img 
                        src={featuredArticle.image} 
                        alt="Integrated Systems Europe ISE 2026 Barcelona - Weltleitmesse für AV und Systemintegration"
                        className="w-full h-full object-contain p-4"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">ISE 2026 Barcelona</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge>{featuredArticle.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredArticle.date).toLocaleDateString("de-DE", {
                          day: "numeric", month: "long", year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <Button asChild>
                        <Link to={`/news/${featuredArticle.slug}`}>
                          Weiterlesen
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <span className="text-xs lg:text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredArticle.readTime} Lesezeit
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="section-container">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-8">Weitere Beiträge</h2>
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {regularArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className={`overflow-hidden flex flex-col hover:border-primary/30 hover:shadow-md transition-all duration-300 scroll-hidden ${gridVisible ? "scroll-visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {article.videoBackground ? (
                    <div className="aspect-video bg-muted overflow-hidden relative">
                      <video 
                        src={article.videoBackground}
                        autoPlay muted loop playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  ) : article.image ? (
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={`${article.title} – ${article.category} Beitrag von SLT Technology Group`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : null}
                  <CardHeader className="p-4 lg:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-[10px]">{article.category}</Badge>
                      <span className="text-[10px] lg:text-xs text-muted-foreground">
                        {new Date(article.date).toLocaleDateString("de-DE")}
                      </span>
                    </div>
                    <CardTitle className="text-sm lg:text-base">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 lg:p-5 pt-0">
                    <CardDescription className="text-xs lg:text-sm mb-3 line-clamp-3">{article.excerpt}</CardDescription>
                    <Button variant="ghost" size="sm" asChild className="text-xs">
                      <Link to={`/news/${article.slug}`}>
                        Weiterlesen
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon */}
      <section className="py-16 lg:py-20">
        <div
          ref={ctaRef}
          className={`section-container text-center scroll-hidden-scale ${ctaVisible ? "scroll-visible-scale" : ""}`}
        >
          <p className="text-sm text-muted-foreground mb-6">
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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Calendar, Clock, MapPin, BookOpen } from "lucide-react";


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

const guides = [
  {
    slug: "ki-readiness-av-medientechnik-2026",
    image: "/assets/ratgeber/ki-readiness.jpg",
    title: "KI-Readiness in der AV-Branche: Medientechnik 2026 KI-fähig machen",
    description: "KI in Konferenzräumen, EU AI Act, NIS2 und Predictive Maintenance – mit Checkliste in sechs Schritten.",
    readTime: "8 Min.",
    category: "AV/IT-Konvergenz",
    featured: true,
  },
  {
    slug: "yealink-meetingboard-pro",
    image: "/assets/ratgeber/meetingboard.jpg",
    title: "Yealink MeetingBoard Pro: All-in-One für Teams Rooms",
    description: "Funktionen, Größen und Einsatzszenarien – inklusive Installation und Inbetriebnahme durch SLT als autorisierter Partner.",
    readTime: "7 Min.",
    category: "Produkte",
  },
  {
    slug: "konferenztechnik-raumgroesse",
    image: "/assets/ratgeber/raumgroesse.jpg",
    title: "Welche Konferenztechnik für welche Raumgröße?",
    description: "Vom Huddle Space bis zum Boardroom: Welche AV-Ausstattung für welchen Raumtyp sinnvoll ist.",
    readTime: "8 Min.",
    category: "Planung",
  },
  {
    slug: "teams-rooms-vs-zoom-rooms",
    image: "/assets/ratgeber/plattformen.jpg",
    title: "Microsoft Teams Rooms vs. Zoom Rooms",
    description: "Funktionen, Lizenzkosten und Ökosysteme im Vergleich – eine neutrale Entscheidungshilfe.",
    readTime: "6 Min.",
    category: "Plattformen",
  },
  {
    slug: "konferenzraum-kosten",
    image: "/assets/ratgeber/kosten.jpg",
    title: "Was kostet ein Konferenzraum?",
    description: "Realistische Kostenrahmen für verschiedene Raumgrößen und Ausstattungsstufen.",
    readTime: "7 Min.",
    category: "Budget",
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

interface HighlightSlide {
  key: string;
  kind: "News" | "Ratgeber";
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date?: string;
  image?: string;
  videoBackground?: string;
  to: string;
}

const highlightSlides: HighlightSlide[] = [
  ...[...newsArticles].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).map((a) => ({
    key: `news-${a.id}`,
    kind: "News" as const,
    category: a.category,
    title: a.title,
    excerpt: a.excerpt,
    readTime: a.readTime,
    date: a.date,
    image: a.image,
    videoBackground: a.videoBackground,
    to: `/news/${a.slug}`,
  })),
  ...guides.map((g) => ({
    key: `guide-${g.slug}`,
    kind: "Ratgeber" as const,
    category: g.category,
    title: g.title,
    excerpt: g.description,
    readTime: g.readTime,
    image: g.image,
    to: `/ratgeber/${g.slug}`,
  })),
];

const News = () => {
  const regularArticles = newsArticles.filter((article) => !article.featured);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => api.scrollNext(), 6000);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <Layout>
      <SEOHead
        title="News & Wissen – Medientechnik & IT-Trends"
        description="Aktuelle News, Fachwissen und Trends aus der AV-Branche: ISE-Berichte, Ratgeber zu Konferenztechnik, IT-Infrastruktur und Systemintegration."
        keywords="Medientechnik News, AV Trends, ISE 2026, ProAV Innovationen, Konferenztechnik Neuheiten"
        canonical="/news"
        structuredData={generateNewsListSchema()}
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-primary/3 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10 animate-fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Aktuelles & Wissen</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              News & Ratgeber{" "}
              <span className="text-primary">AV- & IT-Welt</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground">
              Trends, Innovationen und Praxiswissen aus der professionellen Medientechnik – 
              von uns für Sie zusammengefasst.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Carousel */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent>
              {highlightSlides.map((slide) => (
                <CarouselItem key={slide.key}>
                  <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="aspect-video lg:aspect-auto bg-black flex items-center justify-center overflow-hidden">
                        {slide.videoBackground ? (
                          <video
                            src={slide.videoBackground}
                            autoPlay muted loop playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : slide.image ? (
                          <img
                            src={slide.image}
                            alt={`${slide.title} – ${slide.category} | SLT Technology Group`}
                            className="w-full h-full object-contain p-4"
                          />
                        ) : (
                          <div className="text-center p-8">
                            {slide.kind === "Ratgeber" ? (
                              <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                            ) : (
                              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                            )}
                            <p className="text-muted-foreground text-sm">{slide.category}</p>
                          </div>
                        )}
                      </div>
                      <div className="p-6 lg:p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge>{slide.kind}</Badge>
                          <Badge variant="outline">{slide.category}</Badge>
                          {slide.date && (
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(slide.date).toLocaleDateString("de-DE", {
                                day: "numeric", month: "long", year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                          {slide.title}
                        </h2>
                        <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                          {slide.excerpt}
                        </p>
                        <div className="flex items-center gap-4">
                          <Button asChild>
                            <Link to={slide.to}>
                              {slide.kind === "Ratgeber" ? "Ratgeber lesen" : "Weiterlesen"}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <span className="text-xs lg:text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {slide.readTime} Lesezeit
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-6" />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {highlightSlides.map((slide, index) => (
              <button
                key={`dot-${slide.key}`}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Beitrag ${index + 1} anzeigen`}
                aria-current={current === index}
                className={`h-2 rounded-full transition-all ${
                  current === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-card/50">
          <div className="section-container">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-8">Weitere Beiträge</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {regularArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="overflow-hidden flex flex-col hover:border-primary/30 hover:shadow-md transition-all duration-300"
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

      {/* Ratgeber Section */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl lg:text-2xl font-bold text-foreground">Ratgeber & Praxiswissen</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {guides.map((guide) => {
              const isFeatured = 'featured' in guide && guide.featured;
              return (
              <Link key={guide.slug} to={`/ratgeber/${guide.slug}`} className={`group block ${isFeatured ? "sm:col-span-2 lg:col-span-3" : ""}`}>
                <Card className={`h-full transition-all duration-300 group-hover:shadow-lg ${isFeatured ? "border-primary/30 bg-secondary hover:border-primary/50" : "bg-card border-border hover:border-primary/30"}`}>
                  <CardHeader className="p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-2">
                      {isFeatured && <Badge className="text-[10px]">⭐ Neu</Badge>}
                      <Badge variant="secondary" className="text-[10px]">{guide.category}</Badge>
                      <span className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <CardTitle className={`group-hover:text-primary transition-colors ${isFeatured ? "text-base lg:text-lg" : "text-sm lg:text-base"}`}>
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-5 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">{guide.description}</p>
                    <span className="text-primary text-xs sm:text-sm font-medium flex items-center gap-1">
                      Ratgeber lesen <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 lg:py-16">
        <div className="section-container text-center">
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

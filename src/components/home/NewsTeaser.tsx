import { newsArticles, guides } from "@/data/newsFeed";
import { ContentCarousel, type HomeSlide } from "./ContentCarousel";

const slides: HomeSlide[] = [
  ...newsArticles.map(a => ({ id: a.id, title: a.title, description: a.excerpt, image: a.image ?? "/assets/partners/huddly.png", portrait: !a.image, alt: a.image ? a.title : "Huddly – Kameratechnologie", category: a.category, date: a.date, to: `/news/${a.slug}` })),
  ...guides.map(a => ({ id: a.slug, title: a.title, description: a.description, image: a.image, alt: a.title, category: a.category, date: a.date, to: `/ratgeber/${a.slug}` })),
].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

export function NewsTeaser() {
  return <ContentCarousel title="Aktuelle News & Wissen" slides={slides} allTo="/news" allLabel="Alle Beiträge" />;
}
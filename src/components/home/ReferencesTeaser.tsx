import { PROJECTS } from "@/data/projects";
import { ContentCarousel } from "./ContentCarousel";

export function ReferencesTeaser() {
  return <ContentCarousel title="Ausgewählte Referenzen" allTo="/projekte" allLabel="Alle Projekte ansehen" slides={PROJECTS.map(p => ({
    id: p.slug, title: p.client, description: p.shortDescription,
    image: p.slideshowImages?.[0] ?? p.heroImage, alt: p.heroAlt ?? `${p.client} – ${p.category}`,
    to: `/projekte/${p.slug}`, category: p.category, portrait: p.portraitGallery,
  }))} />;
}
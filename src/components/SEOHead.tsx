import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ALL_ROUTES } from "@/data/seo-routes";
import { applyRouteMetadata, routeMetadata } from "@/lib/seo-metadata";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Legacy input only; keywords are never written to the document head. */
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  ogImage = "/og-image.jpg",
  type = "website",
  structuredData,
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const route = ALL_ROUTES.find(item => item.path === pathname);
  const baseUrl = "https://www.slt-tg.de";
  title = route?.title ?? title;
  description = route?.description ?? description;
  ogImage = route?.ogImage ?? ogImage;
  type = route?.ogType === "article" ? "article" : type;
  const metadata = routeMetadata({ path: route?.path ?? pathname, title, description });
  const fullTitle = metadata.title;
  const fullCanonical = metadata.url;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
  const robots = route?.noindex ? "noindex, follow" : "index, follow";

  useEffect(() => {
    applyRouteMetadata({ title: fullTitle, description, url: fullCanonical });

    const updateMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    updateMetaTag("robots", robots);

    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", fullOgImage, true);

    updateMetaTag("twitter:image", fullOgImage);

    // Hreflang de
    let hreflangDe = document.querySelector('link[hreflang="de"]');
    if (hreflangDe) {
      hreflangDe.setAttribute("href", fullCanonical);
    } else {
      hreflangDe = document.createElement("link");
      hreflangDe.setAttribute("rel", "alternate");
      hreflangDe.setAttribute("hreflang", "de");
      hreflangDe.setAttribute("href", fullCanonical);
      document.head.appendChild(hreflangDe);
    }

    // Hreflang x-default
    let hreflangDefault = document.querySelector('link[hreflang="x-default"]');
    if (hreflangDefault) {
      hreflangDefault.setAttribute("href", fullCanonical);
    } else {
      hreflangDefault = document.createElement("link");
      hreflangDefault.setAttribute("rel", "alternate");
      hreflangDefault.setAttribute("hreflang", "x-default");
      hreflangDefault.setAttribute("href", fullCanonical);
      document.head.appendChild(hreflangDefault);
    }

    // JSON-LD is owned by Layout's JsonLd and the shared export catalogue.
  }, [fullTitle, description, fullCanonical, fullOgImage, type, structuredData, robots]);

  return null;
}

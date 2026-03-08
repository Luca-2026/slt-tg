import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  type = "website",
  structuredData,
}: SEOHeadProps) {
  const baseUrl = "https://www.slt-tg.de";
  const fullTitle = `${title} | SLT Technology Group`;
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;

  useEffect(() => {
    document.title = fullTitle;

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

    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);

    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullCanonical, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", fullOgImage, true);

    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullOgImage);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullCanonical);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", fullCanonical);
      document.head.appendChild(canonicalLink);
    }

    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo-structured]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-structured", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.querySelector('script[data-seo-structured]');
      if (script) script.remove();
    };
  }, [fullTitle, description, keywords, fullCanonical, fullOgImage, type, structuredData]);

  return null;
}

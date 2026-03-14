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

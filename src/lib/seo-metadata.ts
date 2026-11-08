export const SEO_BASE_URL = "https://www.slt-tg.de";

export function canonicalUrl(pathname: string): string {
  const url = new URL(pathname, `${SEO_BASE_URL}/`);
  return `${SEO_BASE_URL}${url.pathname}`;
}

export function routeMetadata(route: { path: string; title: string; description: string }) {
  return { title: route.title, description: route.description, url: canonicalUrl(route.path) };
}

/** Self-contained so the same writer can also run inside build-time Chromium. */
export function applyRouteMetadata(metadata: { title: string; description: string; url: string }) {
  document.head.querySelectorAll('meta[name="title" i], meta[name="keywords" i]').forEach(tag => tag.remove());
  const titles = document.head.querySelectorAll("title");
  titles.forEach((tag, index) => { if (index > 0) tag.remove(); });
  document.title = metadata.title;

  const tags: [string, string, string][] = [
    ["name", "description", metadata.description],
    ["property", "og:title", metadata.title],
    ["property", "og:description", metadata.description],
    ["property", "og:url", metadata.url],
    ["name", "twitter:title", metadata.title],
    ["name", "twitter:description", metadata.description],
    ["name", "twitter:url", metadata.url],
  ];
  for (const [attribute, key, value] of tags) {
    document.head.querySelectorAll(`meta[${attribute}="${key}" i]`).forEach(tag => tag.remove());
    const tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    tag.content = value;
    document.head.append(tag);
  }
  document.head.querySelectorAll('link[rel="canonical" i]').forEach(tag => tag.remove());
  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = metadata.url;
  document.head.append(canonical);
}

/** Validate the parsed head, including serialized snapshots, against the catalogue. */
export function inspectRouteMetadata(metadata: { title: string; description: string; url: string }) {
  const violations: string[] = [];
  if (document.head.querySelectorAll("title").length !== 1 || document.title !== metadata.title) {
    violations.push("Title missing, duplicated or different from route catalogue");
  }
  if (document.head.querySelector('meta[name="title" i], meta[name="keywords" i]')) {
    violations.push("Obsolete meta title/keywords present");
  }
  for (const [selector, expected] of [
    ['meta[name="description"]', metadata.description],
    ['meta[property="og:title"]', metadata.title],
    ['meta[property="og:description"]', metadata.description],
    ['meta[property="og:url"]', metadata.url],
    ['meta[name="twitter:title"]', metadata.title],
    ['meta[name="twitter:description"]', metadata.description],
  ]) {
    const tags = document.head.querySelectorAll(selector);
    if (tags.length !== 1 || tags[0]?.getAttribute("content") !== expected) {
      violations.push(`Incorrect or duplicated ${selector}`);
    }
  }
  const canonicals = document.head.querySelectorAll('link[rel="canonical"]');
  if (canonicals.length !== 1 || canonicals[0]?.getAttribute("href") !== metadata.url) {
    violations.push("Canonical missing, duplicated or different from route URL");
  }
  return violations;
}
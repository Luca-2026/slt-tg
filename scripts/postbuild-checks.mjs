/** Runs in Chromium against static HTML with JavaScript disabled. */
export function inspectPostbuildPage({ path, visibleText, expectsFaq = false, status = 200 }) {
  const violations = [];
  const isErrorPage = path === "/404.html";
  const words = visibleText.trim().split(/\s+/u).filter(Boolean).length;
  const h1 = document.querySelectorAll("h1").length;
  if (h1 !== 1) violations.push(`H1: ${h1}, required exactly 1`);
  if (!isErrorPage && words < 300) violations.push(`Visible main text: ${words} words, required at least 300`);
  if (isErrorPage) {
    if (status !== 404) violations.push(`Error page HTTP status: ${status}, required 404`);
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
    if (!robots.split(/[\s,]+/).includes("noindex")) violations.push("Error page requires noindex");
  }
  const heroes = new Set(document.querySelectorAll('[data-home-hero], [data-hero], section[id*="hero" i]'));
  document.querySelectorAll("h1").forEach(el => { const section = el.closest("section"); if (section) heroes.add(section); });
  if (heroes.size > 1) violations.push(`Duplicate hero sections: ${heroes.size}`);
  const sections = [...document.querySelectorAll("main section")];
  const fingerprints = sections.map(el => (el.textContent ?? "").replace(/\s+/g, " ").trim());
  if (fingerprints.some((text, index) => text.split(/\s+/).length >= 20 && fingerprints.indexOf(text) !== index)) violations.push("Duplicated section content (possible duplicate hero)");
  const ids = sections.map(el => el.id).filter(Boolean);
  if (ids.some((id, i) => ids.indexOf(id) !== i)) violations.push("Duplicate section IDs");
  const canonical = document.querySelectorAll('link[rel="canonical"]');
  if (!isErrorPage && (canonical.length !== 1 || canonical[0]?.getAttribute("href") !== `https://www.slt-tg.de${path}`)) violations.push("Missing, duplicated or non-self-referencing www canonical");
  const schemas = [];
  const visit = value => {
    if (Array.isArray(value)) { value.forEach(visit); return; }
    if (!value || typeof value !== "object") return;
    schemas.push(value);
    Object.entries(value).filter(([key]) => key !== "@context").forEach(([, child]) => visit(child));
  };
  for (const el of document.querySelectorAll('script[type="application/ld+json"]')) {
    try { visit(JSON.parse(el.textContent ?? "")); }
    catch { violations.push("Invalid JSON-LD"); }
  }
  const hasFaqBlock = expectsFaq || !!document.querySelector('[data-regional-faq]') || [...document.querySelectorAll("main h2, main h3")].some(el => /FAQ|Häufige Fragen|Häufig gestellte Fragen/i.test(el.textContent ?? ""));
  const faqSchemas = schemas.filter(s => [s["@type"]].flat().includes("FAQPage"));
  if (hasFaqBlock && (faqSchemas.length !== 1 || !faqSchemas[0]?.mainEntity?.length)) violations.push("FAQ block requires exactly one populated FAQPage JSON-LD");
  return { path, words, h1, heroes: heroes.size, hasFaqBlock, violations };
}
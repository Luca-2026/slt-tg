/** Runs against a re-parsed, JavaScript-disabled snapshot. */
export function inspectRegionalSnapshot({ region, key }) {
  const violations = [];
  const content = region.leistungen[key];
  const normalize = text => (text ?? "").replace(/\s+/g, " ").trim();
  const main = document.querySelector("main");
  if (!content || !main) return { violations: ["Missing regional content/main"] };
  if (document.querySelector("h1")?.textContent !== `${({ medientechnik: "Medientechnik", konferenztechnik: "Konferenztechnik", videokonferenz: "Videokonferenz", "it-netzwerk": "IT-Netzwerk", "digital-signage": "Digital Signage" })[key]} ${region.stadt}`) violations.push("Regional H1 mismatch");
  if (normalize(main.querySelector("[data-regional-intro]")?.textContent) !== normalize(content.einleitung)) violations.push("Editorial introduction mismatch");
  if (normalize(main.querySelector("[data-regional-requirements]")?.textContent) !== normalize(content.anforderungen)) violations.push("Editorial requirements mismatch");
  const faqs = [...main.querySelectorAll("[data-regional-faq]")];
  if (faqs.length < 2 || faqs.length !== (content.faq ?? []).length) violations.push("Regional FAQ count mismatch");
  for (const faq of content.faq ?? []) {
    if (!faqs.some(el => normalize(el.querySelector("summary")?.textContent) === normalize(faq.frage) && normalize(el.querySelector("p")?.textContent) === normalize(faq.antwort))) violations.push(`Static FAQ answer missing: ${faq.frage}`);
  }
  const approved = region.referenzen.filter(ref => ref.freigabe === true && ref.leistung.includes(key));
  const rendered = [...main.querySelectorAll("[data-regional-reference]")];
  if (rendered.length !== approved.length) violations.push("Regional reference count mismatch");
  for (const ref of approved) if (!rendered.some(el => normalize(el.textContent).includes(normalize(ref.name)) && normalize(el.textContent).includes(normalize(ref.beschreibung)))) violations.push(`Approved reference missing: ${ref.name}`);
  for (const ref of region.referenzen.filter(ref => !ref.freigabe)) if (normalize(main.textContent).includes(ref.name)) violations.push(`Unapproved reference: ${ref.name}`);
  const html = document.documentElement.outerHTML;
  if (/Luca|Sandhoff|<GBP|&lt;GBP|\[REAKTIONSZEIT/i.test(html)) violations.push("Forbidden name/placeholder in HTML");
  const allText = normalize(main.textContent);
  for (const item of region.quellen ?? []) if (allText.includes(item.fakt)) violations.push("Private source leaked into HTML");
  for (const service of Object.values(region.leistungen)) if (service.pruefen && html.includes(service.pruefen)) violations.push("Private review note leaked into HTML");
  const schemaTypes = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(el => {
    const data = JSON.parse(el.textContent || "{}");
    return [data, ...(data["@graph"] ?? [])].flatMap(item => [item["@type"] ?? []].flat());
  });
  for (const type of ["Service", "LocalBusiness", "FAQPage", "BreadcrumbList"]) if (!schemaTypes.includes(type)) violations.push(`Missing schema type: ${type}`);
  const visibleText = main.innerText.replace(/\s+/g, " ").trim();
  return { violations, visibleWords: visibleText.split(/\s+/).filter(Boolean).length, faqCount: faqs.length,
    references: approved.map(ref => ref.name), titleLength: document.title.length,
    descriptionLength: (document.querySelector('meta[name="description"]')?.content ?? "").length,
    schemaTypes: [...new Set(schemaTypes)] };
}
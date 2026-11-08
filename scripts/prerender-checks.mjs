export const READY_SELECTORS = ["#root h1", "main", "footer"];
export const ROUTE_SELECTORS = {
  "/": ["[data-home-hero]", "main [data-state='closed']"],
  "/kontakt": ["main form", "main a[href^='tel:']", "main a[href^='mailto:']"],
  "/projektanfrage": ["main input#company", "main input#contactName"],
};

// Passed directly to Playwright; keep this function self-contained.
export function inspectSnapshot() {
  const main = document.querySelector("main");
  const text = main?.textContent ?? "";
  const ids = [...document.querySelectorAll("section[id]")].map(el => el.id);
  const duplicateSectionIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  const hiddenElements = [...document.querySelectorAll("[class]")].filter(el =>
    [...el.classList].some(cls => cls.startsWith("scroll-hidden"))).length;
  // Match a zero counter, not the tail of legitimate values such as 10+ or 300+.
  const zeroCounters = /(^|[^\d])0\+/.test(text);
  const h1 = document.querySelectorAll("h1").length;
  const violations = [];
  if (h1 !== 1) violations.push(`H1 count: ${h1}`);
  if (duplicateSectionIds.length) violations.push(`Duplicate section IDs: ${duplicateSectionIds.join(", ")}`);
  if (hiddenElements) violations.push(`scroll-hidden elements: ${hiddenElements}`);
  if (zeroCounters) violations.push("Zero counter: 0+");
  return { h1, duplicateSectionIds, hiddenElements, zeroCounters, violations,
    words: text.trim().split(/\s+/).filter(Boolean).length,
    links: [...document.querySelectorAll("a[href]")].map(el => el.getAttribute("href")) };
}

/** Word edit distance, including substitutions, insertions and deletions. */
export function textDifference(a, b) {
  const words = value => value.normalize("NFC").trim().split(/\s+/).filter(Boolean);
  const left = words(a), right = words(b);
  let previous = Array.from({ length: right.length + 1 }, (_, i) => i);
  for (let i = 1; i <= left.length; i++) {
    const current = [i];
    for (let j = 1; j <= right.length; j++) {
      current[j] = Math.min(current[j - 1] + 1, previous[j] + 1,
        previous[j - 1] + (left[i - 1] === right[j - 1] ? 0 : 1));
    }
    previous = current;
  }
  return previous[right.length] / Math.max(left.length, right.length, 1);
}

/** Visible text throughout main, not just text within the current viewport.
 * Excludes closed FAQs, hidden sizing layers and opacity-zero content, but not
 * horizontally clipped carousel slides (they remain readable page content).
 */
export function visibleMainText() {
  const main = document.querySelector("main");
  if (!main) throw new Error("Missing main");
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  const chunks = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.textContent) continue;
    let element = node.parentElement;
    let visible = true;
    while (element && element !== main.parentElement) {
      const style = getComputedStyle(element);
      if (element.hidden || style.display === "none" || style.visibility === "hidden" ||
          style.visibility === "collapse" || Number(style.opacity) === 0 ||
          ["SCRIPT", "STYLE", "NOSCRIPT"].includes(element.tagName)) { visible = false; break; }
      if (element.tagName === "DETAILS" && !element.hasAttribute("open") &&
          !element.querySelector(":scope > summary")?.contains(node)) { visible = false; break; }
      element = element.parentElement;
    }
    if (visible) {
      // Preserve adjacent React text nodes: 305 + must remain 305+, not
      // artificially diverge from the HTML parser's merged text node.
      const parent = node.parentElement;
      const block = parent && !["inline", "contents"].includes(getComputedStyle(parent).display);
      if (block && node === parent.firstChild) chunks.push(" ");
      chunks.push(node.textContent);
      if (block && node === parent.lastChild) chunks.push(" ");
    }
  }
  return chunks.join("").replace(/\s+/g, " ").trim();
}
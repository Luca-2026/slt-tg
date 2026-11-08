/** Shared capture contract: never branch initial React markup on this flag. */
export function isPrerendering() {
  return typeof window !== "undefined" && Reflect.get(window, "__PRERENDER__") === true;
}

export function motionDisabled() {
  return isPrerendering() || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
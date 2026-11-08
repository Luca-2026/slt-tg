// Entrypoint nur für esbuild-Bundling der TS-Datenmodule.
// Re-exportiert, was prerender.mjs zur Laufzeit braucht.
export { ALL_ROUTES } from "../src/data/seo-routes.ts";
export { resolveRouteSchemas } from "../src/data/schemas.ts";
export { routeMetadata, applyRouteMetadata, inspectRouteMetadata } from "../src/lib/seo-metadata.ts";
export { REGIONEN, regionalDataViolations, isServiceKey, visibleFaqs, referenzenFuerLeistung, OPEN_FIELDS } from "../src/data/regionen/index.ts";

import { useEffect } from "react";
import { serializeJsonLd } from "@/lib/json-ld";

interface JsonLdProps {
  data: object | object[];
  id?: string;
}

/** Reuses the export's head slot; navigation replaces it rather than accumulating schemas. */
export function JsonLd({ data, id = "site-jsonld" }: JsonLdProps) {
  const json = serializeJsonLd(data);
  useEffect(() => {
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.setAttribute("type", "application/ld+json");
      document.head.append(script);
    }
    script.textContent = json;
    return () => { script?.remove(); };
  }, [id, json]);
  return null;
}
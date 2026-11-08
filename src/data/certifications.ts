/**
 * Zentrale Zertifizierungs-Liste (Vorgabe 08.11.2026).
 *
 * Diese Hersteller-Zertifizierungen sind bestätigt und dürfen als
 * "zertifiziert" ausgewiesen werden. Bezeichnung und Jahr je Zertifizierung
 * liefert der Kunde nach – bis dahin steht nur der Herstellername.
 * Poly und Logitech werden ausschließlich mit "Erfahrung mit" genannt,
 * bis der Kunde eine Zertifizierung bestätigt.
 */
export const CERTIFIED_MANUFACTURERS = [
  "Crestron",
  "Q-SYS",
  "Shure",
  "Yealink",
  "Huddly",
  "Barco",
  "Sennheiser",
  "Samsung",
  "PureLink",
  "Lightware",
  "Nureva",
  "iiyama",
] as const;

export const EXPERIENCED_MANUFACTURERS = ["Poly", "Logitech"] as const;

/** Prüft Herstellernamen case-insensitiv und tolerant gegenüber Schreibweisen (Q-Sys/Q-SYS, Iiyama/iiyama). */
export function isCertifiedManufacturer(name: string): boolean {
  const normalized = name.toLowerCase().replace(/[^a-z]/g, "");
  return CERTIFIED_MANUFACTURERS.some(
    (certified) => certified.toLowerCase().replace(/[^a-z]/g, "") === normalized,
  );
}

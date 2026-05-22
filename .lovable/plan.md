# Strategischer SEO-Relaunch — SLT Technology Group (AV-Systemintegration Enterprise)

## Strategischer Kern

Die Marke "SLT" wird nicht erobert — sie ist durch **SLT Rental** (Baumaschinen-Vermietung, B2C-Volumen) besetzt. Wir verschieben den SEO-Fokus von Brand- und Stadt-Generika zu **kaufnahen Enterprise-Intents**: Lösungs-Suchen ("Konferenzraum-Ausstattung"), Vendor-Authority ("Crestron Integrator NRW") und Compliance/Standardisierung ("ISO-konforme Videokonferenz", "Multi-Site Rollout"). Lokale Seiten bleiben — werden aber auf Enterprise statt KMU/Privat zugespitzt.

**Brand-Token künftig immer "SLT Technology Group" oder "SLT AV"** — niemals nur "SLT" allein. Dadurch entkoppelt Google uns vom Rental-Geschäft im Knowledge-Graph.

---

## Sprint 1 — Brand-Entkopplung & Title-/Meta-Refresh (sofort umsetzbar)

**Ziel:** Bessere CTR auf existierenden Rankings (Pos 5–15, aktuell 0 % CTR) + saubere Brand-Trennung von SLT Rental.

1. `src/data/seo-routes.ts` — alle MAIN_ROUTES Titles auf Enterprise-Sprache umstellen:
   - Brand-Token vorne, Spezifität rein, Zahlen/USPs für Klick-Anreiz
   - Beispiel `/`: `"AV-Systemintegration für Konzerne & Enterprise | SLT Technology Group"`
   - Beispiel `/leistungen`: `"AV-Integration: Fachplanung, Rollout, Managed Services | SLT AV"`
   - Beispiel `/projekte`: `"Enterprise-Referenzen: GEA, Pfeifer & Langen, AluNorf | SLT AV"`
2. `src/data/localSEO.ts` — `metaTitle`, `metaDescription`, `heroSubtitle` aller Topics auf B2B-Enterprise zuspitzen ("Standardisierte Konferenzraum-Rollouts für Unternehmen in [Stadt]" statt generisch).
3. Schema-Anpassung in `index.html` Organization-JSON-LD: `alternateName` auf `"SLT AV"`, `"SLT Technology Group"` setzen (nicht nur `"SLT"`), `disambiguatingDescription` ergänzen.
4. `<h1 class="sr-only">` in `HeroSection.tsx` auf neuen Claim umstellen.

**Erfolgsmessung:** CTR der Top-10 Pages in GSC nach 14–28 Tagen.

---

## Sprint 2 — Tracking-Fundament (parallelisierbar mit Sprint 1)

**Ziel:** Ohne Conversion-Daten arbeiten wir blind. Muss vor Content-Investments stehen.

1. Google Tag Manager-Container einbinden (Container-ID via Secret).
2. GA4-Property anlegen, IP-Anonymisierung, Cookieless-Mode bis Consent.
3. `CookieConsent.tsx` erweitern: granulare Zustimmung für Analytics + Marketing, GTM Consent Mode v2.
4. Conversion-Events:
   - `lead_form_submit` (Projektanfrage)
   - `whitepaper_download` (LED-PDF)
   - `phone_click` (tel:-Links)
   - `email_click` (mailto:-Links)
   - `job_application_submit` (Karriere)
5. Optional: Microsoft Clarity einbinden (DSGVO-konform via Consent).

**Was wir vom Nutzer brauchen:** GA4-Measurement-ID, GTM-Container-ID.

---

## Sprint 3 — Enterprise-Pillar "Konferenzraum-Ausstattung" + Vendor-Hubs

**Ziel:** Bedienung von 20+ ungenutzten Long-Tail-Cluster-Suchen mit einer Architektur.

1. Neue Pillar-Seite `/konferenzraum-ausstattung` mit Raumgrößen-Matrix (Huddle / Small / Medium / Boardroom / Auditorium) — pro Raumtyp Empfehlung Hardware, Kostenrahmen, Lieferzeit, Rollout-Dauer.
2. 4–6 Vendor-Landingpages unter `/partner/{slug}`:
   - `/partner/crestron` ("Crestron Integrator NRW")
   - `/partner/poly` ("Poly Partner Deutschland")
   - `/partner/q-sys` ("Q-SYS zertifiziert")
   - `/partner/logitech` ("Logitech Rally Partner")
   - `/partner/sennheiser`, `/partner/yealink`
   - Jeweils Authority-Signale: Zertifizierungslogo, Use-Cases, Referenzen, FAQ.
3. Neue Hub-Seite `/service-wartung` (sammelt LED-Whitepaper, AV-Wartung, IT-Wartung in einer Architektur mit FAQPage-Schema).
4. `seo-routes.ts` + `App.tsx` + Sitemap entsprechend erweitern, Prerender-Coverage prüfen.

**Erfolgsmessung:** Neue Impressionen-Cluster in GSC nach 4–8 Wochen (Indexierungs-Vorlauf einkalkulieren).

---

## Sprint 4 — LocalSEO-Schärfung & On-Page-Optimierung

**Ziel:** Existierende Local-Seiten (`/it-netzwerk/krefeld` etc.) aus Pos 30–60 in die Top 10 ziehen.

1. Pro Top-5-LocalSEO-Page (Krefeld IT-Netzwerk, Düsseldorf Videokonferenz, Köln Medientechnik, Bonn Digital Signage, NRW Konferenztechnik): konkretes Praxis-Case einbauen, Preisrahmen, FAQPage-Schema mit Long-Tail-Fragen aus GSC.
2. Internal Linking ausbauen: Pillar → Vendor-Hubs → LocalSEO ↔ Referenzen.
3. `/ratgeber`-Hub umbenennen + Title auf Topic-Driven ("AV- & Medientechnik Ratgeber für IT-Entscheider").
4. Breadcrumb-Schema-Audit (alle Detail-Routen).

---

## Sprint 5 — Off-Page & GBP (nicht-Code, später zu besprechen)

Außerhalb des Code-Scopes — wird im Anschluss als Maßnahmen-Liste geliefert:

- Google Business Profile Krefeld + Bonn (Kategorien, Posts, Fotos, Q&A, Bewertungsworkflow).
- LinkedIn Company Page Editorial-Plan (Case-Snippets, Behind-the-Scenes Großinstallationen).
- Linkbuilding: Branchenverzeichnisse (AVIXA, BIV-OWS, IHK), Vendor-Partnerlisten.

---

## Technische Details

- **Stack-Konformität:** Alle Änderungen in bestehender Vite + react-router-dom + Prerender-Pipeline. Kein React-Helmet — Routes werden bereits zentral via `seo-routes.ts` + `scripts/prerender.mjs` injiziert.
- **Schema-Erweiterungen:** `src/data/schemas.ts` bekommt `buildVendorPartnerSchema()` (Service + Organization-Partner-Relation) und `buildFAQPageSchema()` als wiederverwendbarer Builder.
- **Routes:** Neue Pfade in `src/data/seo-routes.ts` (`MAIN_ROUTES` und ggf. neues `PARTNER_ROUTES`-Array), in `App.tsx` registriert, Prerender + Sitemap erzeugen sie automatisch.
- **Tracking-Code:** GTM-Snippet in `index.html`, Custom Hook `useTrackEvent()` in `src/lib/analytics.ts`, Aufrufe in Formularen + Whitepaper-Badge + Footer-Kontakt-Links.
- **Brand-Konsistenz:** "SLT Technology Group" / "SLT AV" — niemals nackt "SLT". Ggf. globale Search-and-Replace-Audit in Components.

---

## Vorschlag der Sprint-Reihenfolge

1. **Sprint 1** (Brand + Title/Meta) — heute starten, kleinster Aufwand, größter Quick Win.
2. **Sprint 2** (Tracking) — sobald GA4-/GTM-IDs vorliegen, parallel zu Sprint 1.
3. **Sprint 3** (Pillar + Vendor-Hubs) — 2. Welle, sobald Daten aus Sprint 2 fließen.
4. **Sprint 4** (LocalSEO-Schärfung) — 3. Welle.
5. **Sprint 5** (Off-Page) — als Maßnahmen-Liste, kein Code.

Beginnt mit Sprint 1 nach Freigabe.

# Roadmap: SEO-Metadaten & Regionalseiten (08.11.2026)

## Neue Regionalredaktion (hochgeladene finale JSON-Dateien)
- [ ] Sieben Dateien unverändert übernehmen und 35 redaktionelle Seiten rendern.
- [ ] Satz-/Komma-Metadaten, Standort-/Service-/FAQ-/Breadcrumb-Schemas aktualisieren.
- [ ] Export bei fehlenden Inhalten, unfreigegebenen Referenzen oder mehr als 20 % identischen Sätzen blockieren.
- [ ] Statische Seiten und Browseransicht prüfen; Bericht je Route mit Wortzahl, FAQ, Referenzen, Metadatenlängen und Schematypen liefern.

## A. Metadaten
- [x] A1 Routentabelle um Spalte "robots" (index/noindex) für alle 89 Routen ergänzt → /mnt/documents/SEO-Routentabelle-2026-11-08.md + .csv
- [x] A2 Titles max. 60 Zeichen, Suffix " | SLT Technology Group" / " | SLT TG"; kein "| SLT AV" mehr; Regionalseiten "<Leistung> <Stadt> | SLT Technology Group" (Test: seo-title-description.test.ts)
- [x] A3 Descriptions 120–155 Zeichen, keine abgeschnittenen Wörter, kein "!" (Test prüft alle 89 Routen)
- [x] A4 E.ON/Henkel/Japan-Zentralen/Bundesministerien entfernt (alte Overrides gelöscht); "zertifiziert für Microsoft Teams, Zoom und Webex" ersetzt; src/data/certifications.ts mit 12 bestätigten Herstellern auf /technologien, Partnerseiten, Startseite; Poly/Logitech = "Erfahrung mit"; Cisco neutral "Hersteller-Partner"
- [x] A5 "Luca Sandhoff": keine Fundstelle in src/, public/, index.html, scripts (Impressum nennt nur Benedikt Nöchel als Geschäftsführer)
- [x] A6 Ausbildungsseiten: Start 01.08.2027, 2027 in Title/Description, dateModified 2026-11-08, validThrough 2027-07-31, Sitemap-lastmod via route.lastmod
- [x] A7 /service-wartung: 301 in .htaccess + Navigate in App.tsx; alle 17 internen Links auf /managed-services umgestellt

## B. Regionalseiten (35 Routen, alle index)
- [x] B8 Datengetriebenes Template: src/data/regionen/<stadt>.json + Loader (freigabe-Filter, Leistungs-Matching, Platzhalter-Erkennung); LocalBusiness je zuständigem Standort, FAQPage aus faq[]; 30-%-Test (5-Gramm-Containment) in regionen.test.ts
- [x] B9 JSON für koeln, duesseldorf, bonn, krefeld, essen, duisburg, moenchengladbach exakt mit Vorgabe befüllt
- [x] B10 Eigene Einleitung pro Stadt (max. 3 Sätze, nur Stadtfelder, keine identischen Sätze)
- [x] B11 Offene Felder: gbpUrl (7 Städte) + Bonner Reaktionszeit – nicht gerendert, im Report gelistet; Routentabelle vollständig ausgegeben

## Offen (Kunde liefert nach)
- GBP-URLs (7 Städte), Bonner Reaktionszeit, Zertifizierungs-Bezeichnungen + Jahre, Poly/Logitech-Bestätigung

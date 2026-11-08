# Roadmap: SEO-Metadaten & Regionalseiten (08.11.2026)

## Post-Build & Serverprofis-Upload
- [x] Verbindlichen Post-Build-Check für H1, 300 sichtbare Wörter, Hero, FAQ-Schema und www-Canonical ergänzen; 70 Tests bestanden.
- [x] Sitemap auf 86 indexierbare Routen aktualisiert; .htaccess mit Apache getestet; robots.txt geprüft, llms.txt ergänzt. 89 gespeicherte Vorschau-Snapshots plus 404 ohne JavaScript geprüft.
- [x] Entscheidung 08.11.: 300 Wörter für Inhaltsseiten beibehalten; 404 separat mit HTTP 404 und noindex prüfen, ohne Wortzahl-/Canonical-Pflicht.
- [x] Inhaltsarbeit anhand des Prüfberichts gebündelt: 24 finale Stadttexte benötigen jeweils 6–53 zusätzliche Wörter; 17 weitere Seiten umfassen Kontakt/Anfrage (2), Karriere (4), Ratgeberübersicht (1), News (3), Partner (5), NRW (1), Impressum (1).
- [ ] Inhaltserweiterung: ausdrückliche Freigabe für Zusätze zur unveränderlichen Regionalredaktion fehlt; konkrete neue Unternehmens-/Personal-/Rechtsangaben dürfen nicht erfunden werden.
- [ ] Produktions-Upload-Paket: bleibt bis zur geprüften Inhaltserweiterung blockiert; kein künstliches Auffüllen und kein eigenmächtiges Ändern der finalen Regionalredaktion.

## JSON-LD (08.11.2026)
- [x] Wiederverwendbare Ausgabe für globale Organisation, Standorte und route-spezifische Schemas ohne Duplikate.
- [x] FAQ-Daten gemeinsam nutzen; Artikel, Referenzen und Unterseiten-Breadcrumbs prüfen.
- [x] 64 Tests bestanden; 89 Browserseiten und 89 Vorschau-Snapshots geprüft (0 % Textabweichung); beide JSON-LD-Beispiele bereitgestellt. Kein Produktionsbuild oder Upload.

## Neue Regionalredaktion (hochgeladene finale JSON-Dateien)
- [x] Sieben Dateien unverändert übernehmen und 35 redaktionelle Seiten rendern.
- [x] Satz-/Komma-Metadaten, Standort-/Service-/FAQ-/Breadcrumb-Schemas aktualisieren.
- [x] Export bei fehlenden Inhalten, unfreigegebenen Referenzen oder mehr als 20 % identischen Sätzen blockieren.
- [x] 35 Vorschau-Snapshots ohne JavaScript geprüft, identischer sichtbarer Text; FAQ, Referenzlink und mobile Seite geprüft; Bericht je Route erstellt.
- [x] Alle 35 gelieferten Descriptions aus leistungen.<key>.description wortgetreu verwenden; fehlende oder ungültige Felder blockieren den Build, keine Ableitung mehr.

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
- GBP Krefeld (Platzhalter in Krefeld, Essen, Duisburg, Mönchengladbach), Zertifizierungs-Bezeichnungen + Jahre, Poly/Logitech-Bestätigung

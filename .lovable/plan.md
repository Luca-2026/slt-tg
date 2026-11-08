# Schrittweise zur uploadreifen Website

## Ziel und verbindliche Regeln
Die 41 bisher zu kurzen Inhaltsseiten gezielt nacharbeiten und anschließend ein geprüftes statisches Upload-Paket für Serverprofis bereitstellen.

- Mindestens **300 sichtbare Wörter im Hauptinhalt** je Inhaltsseite; sinnvoller kleiner Puffer statt exakt 300.
- Keine erfundenen Kunden, Leistungsversprechen, Zertifizierungen, Personal- oder Rechtsangaben.
- Bestehendes Design beibehalten; nötige Textabsätze in die vorhandene Gestaltung einfügen.
- Die 404-Ausnahme ist bereits umgesetzt und getestet: keine Mindestwortzahl oder Canonical-Pflicht, stattdessen 404 und noindex. Die echte HTTP-Antwort wird abschließend mit Apache geprüft.
- Finale regionale Texte und alle 35 gelieferten Descriptions bleiben unverändert. Separate Zusätze benötigen eine ausdrückliche Freigabe im Regional-Schritt.

## Zusammenarbeit: jeweils nur ein Paket
Ich recherchiere in den vorhandenen Projektunterlagen, formuliere die Ergänzungen und prüfe die betroffenen Seiten. Du bekommst konkrete Entwürfe bzw. Ergebnisse und nur die Fragen, die für das aktuelle Paket tatsächlich offen sind. Keine 41 Einzelaufgaben für dich und keine Sammelliste fehlender Angaben.

Nicht betroffene Seiten bleiben unverändert. Neue, bestätigte Fakten werden nur auf passenden Seiten verwendet. Freigaben für Rechts- oder Regionalinhalte werden nicht aus einer allgemeinen Planfreigabe abgeleitet.

## 1. Kontakt und Projektanfrage — zuerst
**Seiten:** `/kontakt`, `/projektanfrage` (bisher 64 bzw. 33 sichtbare Wörter).

- Relevante Beratungsanlässe und Leistungen aus den vorhandenen Lösungsseiten konkret erläutern.
- Projektumfang, Räume, bestehende Ausstattung und Plattformen fachlich einordnen, ohne bloß die Formularbedienung zu beschreiben.
- Kontaktwege, Standorte und bestehende Formulare erhalten; keine zusätzlichen Reaktionszeitversprechen aufnehmen.
- Fehlende oder unbelegte Prozessangaben zuerst gezielt klären, statt sie zu erfinden.

**Ergebnis:** Zwei geprüfte Seiten mit nützlichem statischem Inhalt über 300 Wörtern. Vor der Umsetzung werden die vorgesehenen Ergänzungen und eventuell nötigen Fragen für dieses Paket vorgestellt.

## 2. Ratgeberübersicht und drei Newsbeiträge
**4 Seiten:** `/ratgeber`, `/news/huddly-speaker-mode-ki-kamera`, `/news/hochwertige-technik-trotzdem-chaos`, `/news/man-hoert-nichts-schon-wieder`.

Vorhandene Themen fachlich einordnen, konkrete Planungs- und Betriebsfragen beantworten und passende bestehende Beiträge verlinken. Produktaussagen mit Herstellerquellen prüfen. Artikelmetadaten und sichtbare Inhalte konsistent halten.

## 3. Fünf Herstellerpartner-Seiten
**Seiten:** Crestron, Sennheiser, Shure, Barco, Cisco.

Belegte Einsatzbereiche, Schnittstellen und Integrationsfragen ergänzen. Herstellerquellen und bestehende Leistungs-/Projektinformationen verwenden. Zertifizierungsstatus ausschließlich aus dem bestätigten Katalog übernehmen. Keine neue Partnerschaft oder Zertifizierung behaupten.

## 4. Karriereübersicht und drei Stellenprofile
**4 Seiten:** `/karriere` und die drei bestehenden Stellenprofile.

Vorhandene Aufgaben, Anforderungen und bestätigte Vorteile verständlich ausführen. Ausbildungsbeginn **01.08.2027** beibehalten. Für neue Angaben zu Ausbildung, Arbeitsalltag, Arbeitsbedingungen oder Bewerbungsablauf gezielt deine Bestätigung einholen. Keine Arbeitgeberversprechen erfinden.

## 5. Die 24 zu kurzen Regionalseiten
Laut bisherigem Bericht fehlen pro Seite nur **6–53 Wörter**.

- Zuerst an einer Seite einen separaten, belegten Zusatzabsatz zur Prüfung vorlegen.
- Erst nach deiner ausdrücklichen Zustimmung weitere passende Zusätze erstellen.
- Originaltexte und Descriptions nicht bearbeiten; keine pauschalen Stadtfloskeln oder Ortsreferenzen erfinden.
- Die vorhandenen Regeln zu Quellen, privaten Hinweisen und maximal 20 % identischen Sätzen in Einleitung/Anforderungen beibehalten; Zusätze ebenfalls auf unnötige Wiederholungen prüfen.

**Deine Entscheidung in diesem Schritt:** Separate Ergänzungen freigeben oder eigene zusätzliche freigegebene Texte liefern.

## 6. NRW-Seite und Impressum
**2 Seiten:** `/konferenztechnik/nrw`, `/impressum`.

NRW-Leistungen anhand belegter vorhandener Informationen ergänzen; unbelegte Reichweiten oder Reaktionszeiten klären bzw. nicht übernehmen. Beim Impressum keine Marketingfülltexte oder Rechtsklauseln zur Wortzahl hinzufügen. Bestehende Unternehmensangaben und rechtliche Aktualität prüfen; fehlende notwendige Angaben mit dir klären. Bleibt das Impressum ohne sachlich vertretbare Ergänzung unter 300 Wörtern, diesen konkreten Konflikt vor Abschluss gemeinsam lösen — keine stillschweigende Ausnahme.

## 7. Abschlussprüfung und Upload-Paket
Erst nach Abschluss der Inhaltsarbeit:

1. Alle Routen erneut prüfen: 300 sichtbare Wörter, genau eine H1, keine doppelten Hero-Abschnitte, FAQ-Schema, individuelle Metadaten und www-Canonical.
2. Vollständiges statisches Pre-Rendering und JS-/No-JS-Textvergleich durchführen; Formulare und mobile Darstellung der geänderten Seiten prüfen.
3. Sitemap gegen die tatsächlichen indexierbaren Routen abgleichen; `.htaccess`, Weiterleitungen, echte 404, `robots.txt` und `llms.txt` abschließend prüfen.
4. Öffentliche Dateien auf interne Berichte, Quellen, Platzhalter und private Whitepapers kontrollieren.
5. Bei bestandenen Prüfungen Upload-ZIP und bei Bedarf kleinere Teilarchive bereitstellen; mit kurzer FTP-Anleitung und abschließendem Bericht.

**Freigabekriterium:** Keine ungeklärten Pflichtverstöße. Ein Upload-Paket wird nicht als veröffentlichungsreif bezeichnet, solange ein Pflichtcheck scheitert. Nicht gelieferte optionale Angaben bleiben ausgelassen und werden separat dokumentiert.

## Technische Details
Bestehender Stack: React 18, Vite 5, TypeScript; eigenes Playwright-/Chromium-Pre-Rendering und Node-Postbuild-Prüfung. Serverprofis erhält fertige HTML-, CSS-, JavaScript- und Mediendateien; kein Runtime-SSR und keine Node-/Chromium-Installation auf dem Webspace erforderlich. Der Lovable-Vorschaubuild bleibt Vite-only. Produktionsexport und Auslieferungsprüfung müssen gemeinsam bestehen; Vorschauergebnisse allein sind keine Upload-Freigabe.

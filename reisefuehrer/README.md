# Mein Schiff 4 — Adria 2026 — Premium Reiseführer

Ein vollständiger, recherchierter Reiseführer für die Mein-Schiff-4-Adriaroute
(Triest – Bari – Dubrovnik – Kotor – Split – Triest, Anfang August 2026),
für einen 27-jährigen Alleinreisenden mit Fokus auf Action, Kulinarik,
Fotospots und authentische Erlebnisse.

## Ergebnisse (`dist/`)

- `Mein-Schiff-4-Adria-2026-Reisefuehrer.pdf` — 88-seitiges Magazin-Layout,
  mit echtem, verschachteltem PDF-Lesezeichen-Baum (interaktive Navigation)
  und scanbaren QR-Codes.
- `Mein-Schiff-4-Adria-2026-Reisefuehrer.md` — vollständiger Markdown-Export.
- `Mein-Schiff-4-Adria-2026-Reisefuehrer.docx` — Word-Export mit
  Formatvorlagen (Heading 1–3), Inhaltsverzeichnis-Feld und echten Tabellen.
- `Mein-Schiff-4-Adria-2026-Reisefuehrer.html` — Zwischenformat, aus dem das
  PDF gerendert wird (nützlich zum Debuggen im Browser).

## Recherche (`data/research/`)

Rohe, ausführliche Recherche-Dossiers pro Hafen und für Schiff/Vorbereitung
(Web-Recherche Sommer 2026, mit Quellenangaben und offen geflaggten
Unsicherheiten). Die strukturierten Daten in `build/data/*.js` sind daraus
verdichtet.

## Design-Entscheidung: keine Stock-Fotos

Dieses Build-Environment hat keinen Netzwerkzugriff auf Bildquellen
(Wikimedia, Kartenkacheln etc.). Statt Platzhalter oder rechtlich fragwürdige
Bilder zu verwenden, ist der Guide bewusst **illustrationsgetrieben**
gestaltet: eigene Vektor-Skylines (`build/skylines.js`), schematische
Orientierungskarten (`build/mapgen.js`, keine Google-/OSM-Kartenkacheln —
für ein verkäufliches Produkt ohnehin die rechtlich sauberere Wahl) und
lokal generierte, echte QR-Codes (`build/gen_qr.py`).

## Struktur (`build/`)

- `components.js` — HTML-Komponentenbibliothek (Infoboxen, Karten, Tabellen,
  Sterne-Ratings, Zeitstrahl, QR-Blöcke …)
- `style.css` — Magazin-Designsystem (Farben, Typografie, Druckformat)
- `skylines.js`, `mapgen.js` — Vektor-Illustrationen
- `templates/` — Seiten-Layouts (Cover, Kapiteltrenner, Hafenkapitel-Vorlage,
  Schiff, Reisevorbereitung, Top-Listen, Abschluss)
- `data/*.js` — strukturierte Inhaltsdaten je Hafen (eine Quelle der Wahrheit
  für PDF, Markdown und DOCX)
- `build.js` — baut das PDF (Playwright/Chromium, inkl. Lesezeichen-Baum)
- `gen_markdown.js` — baut die Markdown-Datei aus denselben Daten
- `gen_docx.js` — baut die DOCX-Datei aus denselben Daten (npm-Paket `docx`)

## Neu bauen

```bash
cd build
npm install            # einmalig (playwright, docx, markdown-it)
pip3 install --user qrcode pillow    # einmalig, für QR-Codes
node build.js           # -> dist/*.pdf + *.html
node gen_markdown.js    # -> dist/*.md
node gen_docx.js        # -> dist/*.docx
```

## Wichtiger Hinweis

Preise, Öffnungszeiten, Liegeplätze und Tour-Verfügbarkeiten ändern sich.
Alle Angaben vor der Reise über die Mein-Schiff-App bzw. die jeweilige
Buchungsseite gegenprüfen — siehe auch das Kapitel „Über diesen Reiseführer"
im Guide selbst.

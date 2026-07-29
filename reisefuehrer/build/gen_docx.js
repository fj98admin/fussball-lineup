'use strict';
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, AlignmentType, PageBreak, TableOfContents,
  LevelFormat, convertInchesToTwip, VerticalAlign,
} = require('docx');

const NAVY = '0B2E4F';
const CORAL = 'E8623D';
const TEAL = '0E7C86';

const PORT_ORDER = ['triest', 'bari', 'dubrovnik', 'kotor', 'split'];
const ports = PORT_ORDER.map(k => require(path.join(__dirname, 'data', `${k}.js`)));

const strip = (s) => String(s ?? '')
  .replace(/<br\s*\/?>/gi, ' ')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();

function h1(text, pageBreakBefore = true) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_1, pageBreakBefore, spacing: { after: 200 } });
}
function h2(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 240, after: 120 } });
}
function h3(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_3, spacing: { before: 160, after: 80 } });
}
function p(text, opts = {}) {
  return new Paragraph({ children: [new TextRun({ text: strip(text), ...opts })], spacing: { after: 120 } });
}
function pBold(label, text) {
  return new Paragraph({
    children: [new TextRun({ text: `${label}: `, bold: true }), new TextRun({ text: strip(text) })],
    spacing: { after: 100 },
  });
}
function quote(text, attr) {
  return new Paragraph({
    children: [new TextRun({ text: `„${strip(text)}"`, italics: true })],
    indent: { left: convertInchesToTwip(0.4) },
    border: { left: { style: BorderStyle.SINGLE, size: 12, color: CORAL, space: 8 } },
    spacing: { before: 160, after: attr ? 40 : 160 },
  });
}
function bulletPara(text) {
  return new Paragraph({ text: strip(text), bullet: { level: 0 }, spacing: { after: 60 } });
}
function cell(text, { header = false, width } = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    shading: header ? { type: ShadingType.CLEAR, fill: NAVY } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({
      children: [new TextRun({ text: strip(text), bold: header, color: header ? 'FFFFFF' : undefined, size: header ? 19 : 19 })],
    })],
  });
}
function table(headers, rows, widths) {
  const total = 9360; // ~6.5in usable width in DXA
  const colWidths = widths || headers.map(() => Math.floor(total / headers.length));
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [
      new TableRow({ tableHeader: true, children: headers.map((hd, i) => cell(hd, { header: true, width: colWidths[i] })) }),
      ...rows.map(r => new TableRow({ children: r.map((c, i) => cell(c, { width: colWidths[i] })) })),
    ],
  });
}
function spacer(h = 100) { return new Paragraph({ spacing: { after: h }, children: [] }); }

function portSection(d) {
  const out = [];
  out.push(h1(`${d.name} (${d.country})`));
  out.push(new Paragraph({ children: [new TextRun({ text: d.tagline, italics: true, color: TEAL })], spacing: { after: 160 } }));
  out.push(p(`Action: ${'★'.repeat(d.ratings.action)}${'☆'.repeat(5 - d.ratings.action)}   ·   Kulinarik: ${'★'.repeat(d.ratings.kulinarik)}${'☆'.repeat(5 - d.ratings.kulinarik)}   ·   Fotospots: ${'★'.repeat(d.ratings.fotospots)}${'☆'.repeat(5 - d.ratings.fotospots)}   ·   Kreuzfahrt: ${'★'.repeat(d.ratings.kreuzfahrt)}${'☆'.repeat(5 - d.ratings.kreuzfahrt)}`));

  out.push(h2('Ankunft & Orientierung'));
  out.push(p(d.arrivalInfobox));
  Object.entries(d.quickFacts).forEach(([k, v]) => out.push(bulletPara(`${k}: ${strip(v)}`)));

  out.push(h2('Highlights & Sehenswürdigkeiten'));
  d.highlights.forEach(hl => {
    out.push(h3(hl.name));
    out.push(p(hl.desc));
    if (hl.history) out.push(pBold('Geschichte', hl.history));
    out.push(p(`Beste Zeit: ${strip(hl.time)} · Foto-Tipp: ${strip(hl.photoTip)} · ${strip(hl.maps)}`, { size: 19, color: '555555' }));
  });

  out.push(h2('Kulinarik — Was man essen muss'));
  out.push(table(['Gericht', 'Preis', 'Wo', 'Tipp'],
    d.dishes.map(dd => [dd.name, dd.price, strip(dd.where), strip(dd.tip || '')]),
    [2400, 1200, 2760, 3000]));
  out.push(spacer());
  if (d.culinaryNote) out.push(p(d.culinaryNote));

  out.push(h2('Restaurants — Top 5'));
  d.restaurants.forEach(r => {
    out.push(new Paragraph({
      children: [
        new TextRun({ text: r.name, bold: true }),
        new TextRun({ text: `  (${r.category}) — ${r.area}${r.rating ? ', ' + r.rating : ''} — ${r.price}`, italics: true, size: 19 }),
      ],
      spacing: { before: 100 },
    }));
    out.push(p(r.note));
  });
  if (d.drinksNote) out.push(p(d.drinksNote));

  out.push(h2('Aktivitäten — Top 3'));
  d.activities.forEach((a, i) => {
    out.push(new Paragraph({
      children: [new TextRun({ text: `${a.emoji} ${a.name}`, bold: true }), new TextRun({ text: `  —  ${a.price}, ${a.duration}`, italics: true, size: 19 })],
      spacing: { before: 100 },
    }));
    out.push(p(a.desc));
    out.push(pBold('Warum', a.why));
    if (a.link) out.push(p(a.link, { size: 18, color: '555555' }));
  });
  if (d.activityNote) out.push(p(d.activityNote));

  out.push(h2('Top 10 Fotospots'));
  d.photoSpots.forEach(s => out.push(bulletPara(`${s.name} — ${strip(s.time)}, ${strip(s.dir)}. ${strip(s.why)}`)));

  out.push(h2('Zeitplan — ein perfekter Hafentag'));
  d.itinerary.forEach(i => out.push(bulletPara(`${i.time} — ${strip(i.text)}`)));
  out.push(pBold('Plan A (perfektes Wetter)', d.planA));
  out.push(pBold('Plan B (Wind & Regen)', d.planB));
  out.push(pBold('Plan C (ohne Ausflug)', d.planC));

  out.push(h2('Budget'));
  out.push(table(['Low Budget', 'Normal', 'Premium'], [[d.budget.low, d.budget.normal, d.budget.premium]]));
  out.push(spacer());

  out.push(h2('Praktisches'));
  out.push(p(d.practicalHtml));
  out.push(h2('Für Alleinreisende'));
  out.push(p(d.soloHtml));
  if (d.shoppingHtml) { out.push(h2('Shopping')); out.push(p(d.shoppingHtml)); }

  return out;
}

function build() {
  const children = [];

  // Title page
  children.push(new Paragraph({ text: 'MEIN SCHIFF 4 — ADRIA 2026', heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER, spacing: { before: 2000, after: 200 } }));
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: 'Premium Reiseführer für Triest · Bari · Dubrovnik · Kotor · Split', size: 28, color: NAVY })] }));
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: 'Persönlicher Guide für Action, Kulinarik, Fotospots und authentische Erlebnisse — Anfang August 2026.', italics: true })] }));
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: 'Triest → Seetag → Bari → Dubrovnik → Kotor → Split → Seetag → Triest', bold: true, color: CORAL })] }));

  // TOC page
  children.push(new Paragraph({ children: [new PageBreak()] }));
  children.push(h1('Inhaltsverzeichnis', false));
  children.push(new TableOfContents('Inhaltsverzeichnis', { hyperlink: true, headingStyleRange: '1-2' }));

  // Kapitel 1
  children.push(h1('Kapitel 1 — Reisevorbereitung'));
  children.push(h2('Die Route'));
  children.push(p('Acht Tage, sieben Nächte, fünf Häfen und zwei Seetage — eine kompakte Adria-Rundreise, die Italien, Kroatien und Montenegro in einer Woche verbindet.'));
  children.push(table(['Tag', 'Hafen', 'Land'], [
    ['1', 'Triest (Einschiffung)', 'Italien'], ['2', 'Seetag', '—'], ['3', 'Bari', 'Italien'],
    ['4', 'Dubrovnik', 'Kroatien'], ['5', 'Kotor', 'Montenegro'], ['6', 'Split', 'Kroatien'],
    ['7', 'Seetag', '—'], ['8', 'Triest (Ausschiffung)', 'Italien'],
  ], [1200, 5400, 2760]));
  children.push(spacer());
  children.push(h2('Wetter im August'));
  children.push(p('Tageshöchstwerte 28–34 °C, Wassertemperatur 24–27 °C, trockenster Monat des Jahres — kurze Nachmittagsgewitter sind möglich, aber keine ausgefallenen Tage zu erwarten.'));
  children.push(h2('Packliste'));
  ['Wasseraktivitäten: schnelltrocknende Badebekleidung, Rash Guard, Wasserschuhe, kleiner Dry Bag, reef-safe Sonnencreme.',
    'Fotografie: Kamera/Smartphone, Polfilter, Ersatzakku, wasserdichte Handyhülle.',
    'Hitze: leichte Kleidung, Regenjacke, Hut, SPF 50, Wasserflasche.',
    'Bordabende: 1–2 Smart-Casual-Outfits, bequeme Schuhe.'].forEach(t => children.push(bulletPara(t)));
  children.push(h2('Budget, Trinkgeld & Währung'));
  children.push(p('Tagesbudget an Land: Low €90–110 / Normal €110–150 / Premium €200+. An Bord (TUI Cruises) gibt es keinen automatischen Trinkgeld-Zuschlag — er ist bereits im Premium-All-Inclusive-Preis enthalten. An Land sind 5–10% üblich, aber optional.'));
  children.push(p('Währung: Euro in allen drei Ländern (Italien, Kroatien seit 2023, Montenegro einseitig seit 2002). Bargeld bleibt wichtig, v.a. in Kotor (~€60–80 empfohlen).'));
  children.push(h2('Internet, WLAN & Apps'));
  children.push(p('TUI-Pakete reichen von SurfLight (1GB/€15) bis SurfMax (7 Tage Flatrate/€175). Wichtig: Montenegro liegt außerhalb der EU-Roaming-Zone — Datenroaming am Kotor-Tag deaktivieren, stattdessen eSIM oder Offline-Karten nutzen.'));
  children.push(p('Empfohlene Apps: Organic Maps (offline), Google Translate, GetYourGuide, Mein Schiff App, Windy/Wetter.com.'));
  children.push(h2('Tipps für Alleinreisende'));
  children.push(p('Alleinreisendentreff am ersten Seetag, freie Tischwahl im Restaurant Atlantik, die Bartheke als sozialer Treffpunkt. Einzelkabinen-Zuschlag am besten direkt bei TUI für die konkrete Abfahrt erfragen.'));

  // Kapitel 2
  children.push(h1('Kapitel 2 — Mein Schiff 4'));
  children.push(p('295 m Länge, ~99.500 BRZ, ~2.506 Gäste, Baujahr 2015 (Meyer Turku), Refit Februar 2025 (neue Propeller, erneuerter Pool & Sauna).'));
  children.push(h2('Bars'));
  [['Schau Bar', 'Deck 5 — Kronleuchter, Glasbrücke, teils Live-Musik/Tanz'],
    ['Diamant Bar', 'Aperitif/Digestif am Heck — Getränke nicht im All-Inclusive'],
    ['Café Lounge', 'Ab 7 Uhr, ruhigste Bar an Bord'],
    ['Außenalster Bar & Grill', 'Deck 14 — beliebter Sonnenuntergangsplatz']].forEach(([n, d]) => children.push(pBold(n, d)));
  children.push(h2('Restaurants'));
  [['Atlantik & Anckelmannsplatz', 'Hauptrestaurant & Hauptbuffet — inklusive, freie Sitzplatzwahl'],
    ['Hanami', 'Sushi & japanische Spezialitäten, mitentwickelt von Sternekoch Tim Raue'],
    ['Surf & Turf', 'Steakhouse mit Grilltischen für 4–6 Personen und Privatkoch'],
    ['La Spezia & Bistro La Vue', 'Italienisch/mediterran bzw. französisch angehauchte Fischküche']].forEach(([n, d]) => children.push(pBold(n, d)));
  children.push(h2('Fitness, Spa & Pool'));
  children.push(p('Fitnessraum mit Kraftstationen, ~280m Joggingstrecke, 5 Saunen (im Premium-All-Inclusive enthalten), 25m Außenpool + Innenpool für jedes Wetter.'));
  children.push(h2('Shows & Entertainment'));
  children.push(p('Hauptheater über drei Decks (~1.000 Plätze) und das Klanghaus — ein 300-Plätze-Kammermusiksaal, einzigartig auf Mein Schiff 3 & 4.'));
  children.push(h2('Die besten Fotoplätze an Bord'));
  children.push(p('Einlaufen Kotor ist der Bordfoto-Moment der Reise: mindestens 30 Minuten vor Ankunft an Deck 14/15 (Bug) für die Durchfahrt der Verige-Meerenge postieren. Dubrovnik dagegen bietet keinen Bordfoto-Moment (Anlegestelle Gruž, ca. 3 km von der Altstadt) — das beste Foto entsteht dort an Land.'));

  // Die Häfen
  children.push(h1('Kapitel 3 — Die Häfen'));
  children.push(p('Jeder Hafen folgt demselben Aufbau: Übersicht, Highlights, Kulinarik, Restaurants, Aktivitäten, Fotospots, Zeitplan, Budget und Praktisches.'));
  ports.forEach(pd => portSection(pd).forEach(el => children.push(el)));

  // Kapitel 4
  children.push(h1('Kapitel 4 — Praktisches & Listen'));
  children.push(h2('Kajak-Vergleich: Dubrovnik vs. Kotor'));
  children.push(pBold('Dubrovnik', 'Offene Adria-Küstenpaddelei unter der Stadtmauer, Höhlenstopp, Lokrum-Runde — "unter den GoT-Mauern paddeln".'));
  children.push(pBold('Kotor', 'Ruhige, fjordartige Bucht, anfängerfreundlicher, führt zur 500 Jahre alten Insel-Kirche Our Lady of the Rocks.'));

  children.push(h2('Für Alleinreisende — die Übersicht'));
  children.push(table(['Ort', 'Bester Social-Spot'], [
    ['An Bord', 'Bartheke + Alleinreisendentreff'], ['Triest', 'Café-Terrassen Piazza Unità / Canal Grande'],
    ['Bari', 'Foodtour, Kochkurs, Fahrradtour'], ['Dubrovnik', 'Buža Bar'],
    ['Kotor', 'Hostelbars in der Altstadt'], ['Split', 'Bačvice Beach'],
  ], [2500, 6860]));
  children.push(spacer());

  children.push(h2('Notfall'));
  children.push(p('112 — der EU-weite Notruf funktioniert in Italien, Kroatien und Montenegro gleichermaßen. Bordarzt: 24/7 über die Rezeption erreichbar. Auslandskrankenversicherung mit Rücktransport wird empfohlen — Montenegro ist kein EU-Land, die EHIC-Karte gilt dort nicht.'));

  children.push(h2('Top 25 Restaurants'));
  children.push(table(['Hafen', 'Kategorie', 'Name', 'Preis'],
    ports.flatMap(pd => pd.restaurants.map(r => [pd.name, r.category, r.name, r.price])), [1800, 2200, 3600, 1760]));
  children.push(spacer());

  children.push(h2('Top Bars, Cafés & Rooftops'));
  const barsCafes = [['Mein Schiff 4', 'Show Bar', 'Schau Bar'], ['Mein Schiff 4', 'Gehoben', 'Diamant Bar'], ['Mein Schiff 4', 'Ruhig', 'Café Lounge'], ['Mein Schiff 4', 'Sonnenuntergang', 'Außenalster Bar & Grill']];
  ports.forEach(pd => pd.restaurants.forEach(r => { if (/bar|café|cafe|rooftop|cocktail|frühstück|gelato/i.test(r.category)) barsCafes.push([pd.name, r.category, r.name]); }));
  children.push(table(['Ort', 'Typ', 'Name'], barsCafes, [2500, 2860, 4000]));
  children.push(spacer());

  children.push(h2('Top 25 Fotospots'));
  children.push(table(['Hafen', 'Spot', 'Beste Zeit'],
    ports.flatMap(pd => pd.photoSpots.slice(0, 5).map(s => [pd.name, s.name, strip(s.time)])), [1800, 4160, 3400]));
  children.push(spacer());

  children.push(h2('Top Aktivitäten'));
  children.push(table(['Hafen', 'Aktivität', 'Preis'],
    ports.flatMap(pd => pd.activities.map(a => [pd.name, `${a.emoji} ${a.name}`, a.price])), [1800, 4960, 2600]));
  children.push(spacer());

  children.push(h2('Top 10 Gerichte'));
  children.push(table(['Hafen', 'Gericht', 'Preis'],
    ports.flatMap(pd => pd.dishes.slice(0, 2).map(dd => [pd.name, dd.name, dd.price])), [1800, 4960, 2600]));
  children.push(spacer());

  children.push(h2('Top Getränke'));
  ['Capo in b (Triest)', 'Primitivo & Negroamaro (Bari)', 'Pošip & Plavac Mali (Dubrovnik/Split)', 'Vranac (Kotor)', 'Aperitivo-Spritz (Triest)', 'Cocktails an der Diamant Bar (Mein Schiff 4)']
    .forEach(t => children.push(bulletPara(t)));

  children.push(h1('Abschluss — Die persönliche Empfehlung'));
  children.push(pBold('Der beste Ausflug der ganzen Reise', 'Kotor — die Kombination aus Festungsaufstieg im Morgenlicht und Speedboot zur Blauen Grotte samt Our-Lady-of-the-Rocks-Stopp ist auf dieser Route konkurrenzlos.'));
  children.push(h3('Lohnt sich wirklich'));
  ['Foodtour Bari — dichteste kulinarische Erfahrung pro Stunde', 'Festung Kotor bei Sonnenaufgang', 'Stadtmauer Dubrovnik direkt bei Öffnung', 'Blue Lagoon Split (statt Rafting, wegen Zeitrisiko)'].forEach(t => children.push(bulletPara(t)));
  children.push(h3('Eher vorsichtig einplanen'));
  ['Cetina-Rafting Split — Zeitrisiko bei kurzem Hafentag real', 'Dubrovnik am frühen Nachmittag — Hitze + Hauptandrang', 'Feinschmecker-Restaurants ohne Reservierung'].forEach(t => children.push(bulletPara(t)));
  children.push(quote('Die Adria in einer Woche ist kein Widerspruch — man muss nur wissen, wann man rennt und wann man Kaffee trinkt.', 'Der Autor'));

  children.push(new Paragraph({ spacing: { before: 400 }, children: [new TextRun({ text: 'Mein Schiff® ist eine Marke der TUI Cruises GmbH. Dieser Reiseführer ist ein unabhängig erstelltes Fan-/Reisebegleitwerk und steht in keiner Verbindung zu TUI Cruises GmbH. Preise, Öffnungszeiten und Verfügbarkeiten bitte vor der Reise gegenprüfen.', italics: true, size: 16, color: '777777' })] }));

  const doc = new Document({
    creator: 'Mein Schiff 4 Adria Reiseführer',
    title: 'Mein Schiff 4 — Adria 2026 Reiseführer',
    styles: {
      default: {
        document: { run: { font: 'Calibri', size: 22 } }, // 11pt
      },
      paragraphStyles: [
        { id: 'Title', name: 'Title', basedOn: 'Normal', next: 'Normal', run: { size: 56, bold: true, color: NAVY, font: 'Georgia' } },
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 40, bold: true, color: NAVY, font: 'Georgia' }, paragraph: { spacing: { before: 200, after: 200 } } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, color: NAVY, font: 'Georgia' }, paragraph: { border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: CORAL, space: 2 } } } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 23, bold: true, color: NAVY } },
      ],
    },
    numbering: {
      config: [{ reference: 'default-bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: convertInchesToTwip(0.3), hanging: convertInchesToTwip(0.15) } } } }] }],
    },
    sections: [{
      properties: { page: { margin: { top: 1000, bottom: 1000, left: 1100, right: 1100 } } },
      children,
    }],
  });

  return Packer.toBuffer(doc).then(buf => {
    const out = path.join(__dirname, '..', 'dist', 'Mein-Schiff-4-Adria-2026-Reisefuehrer.docx');
    fs.writeFileSync(out, buf);
    console.log(`DOCX written: ${out} (${(buf.length / 1024).toFixed(0)} KB)`);
  });
}

build().catch(e => { console.error(e); process.exit(1); });

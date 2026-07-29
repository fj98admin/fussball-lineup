'use strict';
const fs = require('fs');
const path = require('path');
const C = require('./components');
const { coverPage } = require('./templates/cover');
const { tocPage } = require('./templates/toc');
const { dividerPage } = require('./templates/divider');
const { buildPrepPages } = require('./templates/prep');
const { buildShipPages } = require('./templates/ship');
const { buildPortPages } = require('./templates/portChapter');
const { buildTopListenPages } = require('./templates/toplisten');
const { kajakVergleichPage, notfallPage, alleinreisendeSummaryPage, abschlussPage, impressumPage } = require('./templates/closing');
const { renderPagesToPdf } = require('./render');

const PORT_ORDER = ['triest', 'bari', 'dubrovnik', 'kotor', 'split'];

function loadPort(key) {
  return require(path.join(__dirname, 'data', `${key}.js`));
}

function main() {
  const ports = PORT_ORDER.map(loadPort);

  const sections = [];

  sections.push({
    tocTitle: 'Kapitel 1 — Reisevorbereitung', tocNum: '01',
    pages: [
      dividerPage({ num: '01', title: 'Reisevorbereitung', sub: 'Route, Wetter, Budget, Packliste und alles, was vor dem Ablegen wichtig ist.', skyline: 'wave' }),
      ...buildPrepPages(),
    ],
  });

  sections.push({
    tocTitle: 'Kapitel 2 — Mein Schiff 4', tocNum: '02',
    pages: [
      dividerPage({ num: '02', title: 'Mein Schiff 4', sub: 'Decks, Bars, Restaurants, Wellness und die besten Fotoplätze an Bord.', skyline: 'ship' }),
      ...buildShipPages(),
    ],
  });

  sections.push({
    tocTitle: 'Die Häfen', tocNum: '03', divider: true,
    pages: [
      dividerPage({ num: '03', title: 'Die Häfen', sub: 'Fünf Häfen, ein Aufbau: Übersicht, Highlights, Kulinarik, Restaurants, Aktivitäten, Fotospots, Zeitplan, Budget.', skyline: 'wave' }),
    ],
  });

  ports.forEach((p, i) => {
    sections.push({ tocTitle: p.name, tocNum: `03.${i + 1}`, pages: buildPortPages(p) });
  });

  sections.push({
    tocTitle: 'Praktisches & Listen', tocNum: '04',
    pages: [
      dividerPage({ num: '04', title: 'Praktisches & Listen', sub: 'Kajak-Vergleich, Alleinreisende, Notfall, Top-Listen und die persönliche Empfehlung.', skyline: 'wave' }),
      kajakVergleichPage(),
      alleinreisendeSummaryPage(),
      notfallPage(),
      ...buildTopListenPages(ports),
      abschlussPage(),
      impressumPage(),
    ],
  });

  // Compute TOC page numbers: page 1 = cover, page 2 = TOC, content starts page 3.
  let pageCursor = 3;
  const tocEntries = sections.map(s => {
    const isSub = s.tocNum.includes('.');
    const entry = { num: s.tocNum, title: (isSub ? '— ' : '') + s.tocTitle, page: String(pageCursor), bold: !isSub };
    pageCursor += s.pages.length;
    return entry;
  });

  const allPages = [
    coverPage(),
    tocPage(tocEntries),
    ...sections.flatMap(s => s.pages),
  ];

  console.log(`Total pages: ${allPages.length}`);
  return renderPagesToPdf(
    allPages,
    path.join(__dirname, '..', 'dist', 'Mein-Schiff-4-Adria-2026-Reisefuehrer.pdf'),
    path.join(__dirname, '..', 'dist', 'Mein-Schiff-4-Adria-2026-Reisefuehrer.html'),
  );
}

main().catch(e => { console.error(e); process.exit(1); });

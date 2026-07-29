'use strict';
const C = require('../components');

function buildTopListenPages(ports) {
  // ports: array of the 5 port data objects, in route order
  const pages = [];

  pages.push(C.page(`
    <div class="eyebrow">Top-Listen</div>
    <h2 class="page-title mb-0">Top 25 Restaurants</h2>
    <div class="divider-line"></div>
    <p class="small mt-2">Fünf Restaurants pro Hafen, quer über alle Preisklassen und Kategorien — die vollständige Restaurant-Auswahl dieses Guides auf einen Blick.</p>
    ${C.table(['Hafen', 'Kategorie', 'Name', 'Preis'],
      ports.flatMap(p => p.restaurants.map(r => [p.name, r.category, `<b>${r.name}</b>`, r.price]))
    )}
  `, { footerRight: 'Top-Listen' }));

  const barsCafes = [];
  ports.forEach(p => {
    p.restaurants.forEach(r => {
      if (/bar|café|cafe|rooftop|cocktail|frühstück|gelato/i.test(r.category)) barsCafes.push([p.name, r.category, `<b>${r.name}</b>`]);
    });
  });
  const shipBars = [
    ['Mein Schiff 4', 'Show Bar', '<b>Schau Bar</b> — Kronleuchter & Glasbrücke'],
    ['Mein Schiff 4', 'Gehoben', '<b>Diamant Bar</b> — Aperitif/Digestif am Heck'],
    ['Mein Schiff 4', 'Ruhig', '<b>Café Lounge</b> — Barista-Kaffee ab 7 Uhr'],
    ['Mein Schiff 4', 'Sonnenuntergang', '<b>Außenalster Bar & Grill</b>'],
  ];
  pages.push(C.page(`
    ${C.sectionTitle('Top Bars, Cafés & Rooftops', '🍸')}
    <p class="small">Bewusst kuratiert statt auf eine runde Zahl aufgefüllt: jeder Eintrag ist ein echter, recherchierter Ort.</p>
    ${C.table(['Ort', 'Typ', 'Name'], [...shipBars, ...barsCafes])}
  `, { footerRight: 'Top-Listen' }));

  const spots25 = ports.flatMap(p => p.photoSpots.slice(0, 5).map(s => [p.name, `<b>${s.name}</b>`, s.time]));
  pages.push(C.page(`
    ${C.sectionTitle('Top 25 Fotospots', '📸')}
    <p class="small">Die fünf besten Fotospots je Hafen — für die komplette Top-10-Liste pro Hafen siehe das jeweilige Hafenkapitel.</p>
    ${C.table(['Hafen', 'Spot', 'Beste Zeit'], spots25)}
  `, { footerRight: 'Top-Listen' }));

  const acts = ports.flatMap(p => p.activities.map((a, i) => [p.name, a.emoji, `<b>${a.name}</b>`, a.price]));
  pages.push(C.page(`
    ${C.sectionTitle('Top Aktivitäten', '⚡')}
    <p class="small">Alle Top-3-Aktivitäten aus jedem Hafenkapitel — 15 real recherchierte, buchbare Erlebnisse.</p>
    ${C.table(['Hafen', '', 'Aktivität', 'Preis'], acts)}
  `, { footerRight: 'Top-Listen' }));

  const dishPicks = ports.flatMap(p => p.dishes.slice(0, 2).map(d => [p.name, `<b>${d.name}</b>`, d.price]));
  pages.push(C.page(`
    ${C.sectionTitle('Top 10 Gerichte', '🍽️')}
    ${C.table(['Hafen', 'Gericht', 'Preis'], dishPicks)}
    <div class="mt-6">${C.sectionTitle('Top Getränke', '🍷')}</div>
    <p class="small">Statt erfundener Cocktail-Namen: die tatsächlich recherchierten Signature-Getränke dieser Route.</p>
    ${C.table(['Was', 'Wo'], [
      ['Capo in b (Kaffee im Glas)', 'Triest — Caffè San Marco, Tommaseo'],
      ['Primitivo & Negroamaro', 'Bari — Mostofiore Weinbar'],
      ['Pošip & Plavac Mali', 'Dubrovnik/Split — jede gute Konoba'],
      ['Vranac', 'Kotor — lokale Weinbars'],
      ['Aperitivo-Spritz', 'Triest — Canal-Grande-Bars, abends'],
      ['Cocktails an der Diamant Bar', 'Mein Schiff 4, Heck'],
    ])}
  `, { footerRight: 'Top-Listen' }));

  return pages;
}

module.exports = { buildTopListenPages };

'use strict';
const path = require('path');
const C = require('../components');
const SK = require('../skylines');
const MAP = require('../mapgen');
const ICONS = require('../icons');

const ASSETS_ROOT = path.resolve(__dirname, '..', '..', 'assets');
function qrImg(key) { return `file://${ASSETS_ROOT}/qr/${key}.png`; }

function heroMapPage(d) {
  const sky = SK[d.key] ? SK[d.key]('#0E7C86') : '';
  const ratingItems = [
    { label: 'Action', value: d.ratings.action },
    { label: 'Kulinarik', value: d.ratings.kulinarik },
    { label: 'Fotospots', value: d.ratings.fotospots },
    { label: 'Kreuzfahrt', value: d.ratings.kreuzfahrt },
  ];
  const meta = Object.entries(d.quickFacts).map(([k, v]) => `<div><span class="k">${k}</span>${v}</div>`).join('');
  const inner = `
    <div style="height:58mm; background:linear-gradient(180deg, var(--navy) 0%, var(--navy) 85%, var(--sand) 100%); color:var(--white); position:relative; overflow:hidden;">
      <div style="position:absolute; bottom:0; left:0; right:0; height:24mm; opacity:0.4;">${sky}</div>
      <div style="padding:7mm 16mm 0 16mm; position:relative;">
        <div class="eyebrow on-dark" style="margin-bottom:1mm;">Hafentag · ${C.esc(d.country)}</div>
        <h1 class="port-hero-name" style="font-size:20pt;">${C.esc(d.name)}</h1>
        <div class="port-hero-tag" style="margin-top:1mm; font-size:9pt;">${C.esc(d.tagline)}</div>
        <div class="port-hero-meta" style="margin-top:2.5mm; gap:6mm;">${meta}</div>
        ${C.ratingBlock(ratingItems, { dense: true })}
      </div>
    </div>
    <div style="padding:4mm 16mm 0 16mm;">
      ${C.sectionTitle(`${d.name} — Orientierungskarte`, '🗺️')}
      <div class="map-frame" style="height:92mm;">${MAP.orientationMap(d.map)}</div>
      ${MAP.legendHtml(d.map.points)}
      <div class="section-title mt-2" style="font-size:10.5pt; margin-bottom:1.5mm; padding-bottom:1mm;"><span class="icon">🧭</span>Ankunft & Orientierung</div>
      <div class="grid-2" style="gap:4mm;">
        <div class="qr-row">${C.qrBlock('Google Maps: Liegeplatz → Zentrum', d.qr.routeLabel, qrImg(`${d.key}_route`))}</div>
        <div class="qr-row">${C.qrBlock('Offizielle Stadtkarte / Tourismusbüro', d.qr.tourismLabel, qrImg(`${d.key}_tourism`))}</div>
      </div>
      <div class="tiny-scope two-col-text mt-2" style="column-gap:6mm;">
        ${d.arrivalInfobox}
        ${d.orientationNote}
      </div>
    </div>
  `;
  return C.page(inner, { footerRight: d.name, noPad: true });
}

function highlightsPage(d) {
  const items = d.highlights;
  return C.page(`
    ${C.watermark(SK[d.key] ? SK[d.key]('#0B2E4F') : '')}
    <div class="eyebrow">${C.esc(d.name)}</div><h2 class="page-title mb-0">Highlights & Sehenswürdigkeiten</h2><div class="divider-line"></div>
    <div class="grid-3 mt-2 highlights-grid">
      ${items.map(h => C.card(`
        ${C.iconTiles(ICONS.pickPlaceIcons(h), ICONS.renderIcon, 'sm')}
        <div class="card-title">${C.esc(h.name)}</div>
        <p class="tiny">${h.desc}</p>
        ${h.history ? `<p class="tiny"><b>Geschichte:</b> ${h.history}</p>` : ''}
        <p class="tiny">🕐 <b>Beste Zeit:</b> ${C.esc(h.time)} &nbsp;·&nbsp; 📸 ${h.photoTip}</p>
        <p class="tiny">🔗 ${C.esc(h.maps)}</p>
      `, { dense: true })).join('')}
    </div>
  `, { footerRight: d.name });
}

function culinaryPages(d) {
  const pages = [];
  const items = d.dishes;
  const perPage = 9;
  const pageCount = Math.ceil(items.length / perPage);
  for (let i = 0; i < items.length; i += perPage) {
    const slice = items.slice(i, i + perPage);
    const isLast = i + perPage >= items.length;
    pages.push(C.page(`
      ${pageCount === 1 || i > 0 ? '' : C.watermark(SK[d.key] ? SK[d.key]('#0B2E4F') : '')}
      ${i === 0 ? `<div class="eyebrow">${C.esc(d.name)}</div><h2 class="page-title mb-0">Kulinarik — Was man essen MUSS</h2><div class="divider-line"></div>` : C.sectionTitle('Was man essen muss (Fortsetzung)', '🍽️')}
      <div class="grid-3 mt-2">${slice.map(dd => C.dishCard(dd, ICONS, { dense: true })).join('')}</div>
      ${isLast && d.culinaryNote ? `<div class="mt-4">${d.culinaryNote}</div>` : ''}
    `, { footerRight: d.name }));
  }
  return pages;
}

function restaurantsActivitiesPage(d) {
  return C.page(`
    ${C.sectionTitle('Restaurants — Top 5', '🍴')}
    <div class="grid-3">${d.restaurants.map(r => C.restaurantCard(r, { dense: true })).join('')}</div>
    ${d.drinksNote ? `<div class="mt-2">${d.drinksNote}</div>` : ''}
    <div class="mt-4">${C.sectionTitle('Aktivitäten — Top 3', '⚡')}</div>
    ${C.medalRow(d.activities, { dense: true })}
    ${d.activityNote ? `<div class="mt-2">${d.activityNote}</div>` : ''}
  `, { footerRight: d.name });
}

function itineraryPhotoSpotsPage(d) {
  return C.page(`
    ${C.sectionTitle('Zeitplan — ein perfekter Hafentag', '🕐')}
    <div class="grid-2">
      <div>${C.timeline(d.itinerary, { dense: true })}</div>
      <div>
        ${C.infobox('Plan A — Perfektes Wetter', d.planA, 'teal', '☀️', { dense: true })}
        ${C.infobox('Plan B — Wind & Regen', d.planB, 'gold', '🌧️', { dense: true })}
        ${C.infobox('Plan C — Ohne Ausflug', d.planC, 'navy', '🚶', { dense: true })}
      </div>
    </div>
    <div class="mt-4">${C.sectionTitle('Top 10 Fotospots', '📸')}</div>
    ${C.spotGrid(d.photoSpots, { dense: true })}
  `, { footerRight: d.name });
}

function budgetPracticalPage(d) {
  return C.page(`
    ${C.watermark(SK[d.key] ? SK[d.key]('#0B2E4F') : '')}
    ${C.sectionTitle('Budget', '💶')}
    ${C.budgetRow(d.budget.low, d.budget.normal, d.budget.premium)}
    <div class="grid-2 mt-6">
      <div>
        ${C.sectionTitle('Praktisches', 'ℹ️')}
        ${d.practicalHtml}
      </div>
      <div>
        ${C.sectionTitle('Für Alleinreisende', '🧑‍🤝‍🧑')}
        ${d.soloHtml}
        ${d.shoppingHtml ? `${C.sectionTitle('Shopping', '🛍️')}${d.shoppingHtml}` : ''}
      </div>
    </div>
  `, { footerRight: d.name });
}

function buildPortPages(d) {
  return [
    heroMapPage(d),
    highlightsPage(d),
    ...culinaryPages(d),
    restaurantsActivitiesPage(d),
    itineraryPhotoSpotsPage(d),
    budgetPracticalPage(d),
  ];
}

module.exports = { buildPortPages };

'use strict';
const path = require('path');
const C = require('../components');
const SK = require('../skylines');
const MAP = require('../mapgen');
const ICONS = require('../icons');

const ASSETS_ROOT = path.resolve(__dirname, '..', '..', 'assets');
function qrImg(key) { return `file://${ASSETS_ROOT}/qr/${key}.png`; }

function heroPage(d) {
  const sky = SK[d.key] ? SK[d.key]('#0E7C86') : '';
  const ratingItems = [
    { label: 'Action', value: d.ratings.action },
    { label: 'Kulinarik', value: d.ratings.kulinarik },
    { label: 'Fotospots', value: d.ratings.fotospots },
    { label: 'Kreuzfahrt', value: d.ratings.kreuzfahrt },
  ];
  const meta = Object.entries(d.quickFacts).map(([k, v]) => `<div><span class="k">${k}</span>${v}</div>`).join('');
  const inner = `
    <div style="height:172mm; background:linear-gradient(180deg, var(--navy) 0%, var(--navy) 82%, var(--sand) 100%); color:var(--white); position:relative; overflow:hidden;">
      <div style="padding:18mm 16mm 0 16mm;">
        <div class="eyebrow on-dark">Hafentag · ${C.esc(d.country)}</div>
        <h1 class="port-hero-name">${C.esc(d.name)}</h1>
        <div class="port-hero-tag">${C.esc(d.tagline)}</div>
        <div class="port-hero-meta">${meta}</div>
        ${C.ratingBlock(ratingItems)}
      </div>
      <div style="position:absolute; bottom:0; left:0; right:0; height:52mm; opacity:0.9;">${sky}</div>
    </div>
    <div style="padding:6mm 16mm 0 16mm;">
      ${C.sectionTitle('Ankunft & Orientierung', '🧭')}
      ${d.arrivalInfobox}
    </div>
  `;
  return C.page(inner, { footerRight: d.name, noPad: true });
}

function mapPage(d) {
  return C.page(`
    ${C.sectionTitle(`${d.name} — Orientierungskarte`, '🗺️')}
    <p class="tiny">Schematische Karte mit echten Straßennamen, nicht maßstabsgetreu · Route Schiff → Altstadt in Orange gestrichelt</p>
    <div class="map-frame" style="height:120mm;">${MAP.orientationMap(d.map)}</div>
    ${MAP.legendHtml(d.map.points)}
    <div class="grid-2 mt-4">
      <div>${C.sectionTitle('Wichtige QR-Codes', '📱')}
        <div style="display:flex; flex-direction:column; gap:3mm;">
          ${C.qrBlock('Google Maps: Liegeplatz → Zentrum', d.qr.routeLabel, qrImg(`${d.key}_route`))}
          ${C.qrBlock('Offizielle Stadtkarte / Tourismusbüro', d.qr.tourismLabel, qrImg(`${d.key}_tourism`))}
        </div>
      </div>
      <div>${d.orientationNote}</div>
    </div>
  `, { footerRight: d.name });
}

function highlightsPages(d) {
  const chunks = [];
  const items = d.highlights;
  const perPage = 4;
  for (let i = 0; i < items.length; i += perPage) {
    const slice = items.slice(i, i + perPage);
    chunks.push(C.page(`
      ${C.watermark(SK[d.key] ? SK[d.key]('#0B2E4F') : '')}
      ${i === 0 ? `<div class="eyebrow">${C.esc(d.name)}</div><h2 class="page-title mb-0">Highlights & Sehenswürdigkeiten</h2><div class="divider-line"></div>` : `${C.sectionTitle('Highlights (Fortsetzung)', '★')}`}
      <div class="grid-2 mt-2">
        ${slice.map(h => C.card(`
          ${C.iconTiles(ICONS.pickPlaceIcons(h), ICONS.renderIcon)}
          <div class="card-title">${C.esc(h.name)}</div>
          <p class="small">${h.desc}</p>
          ${h.history ? `<p class="tiny"><b>Geschichte:</b> ${h.history}</p>` : ''}
          <p class="tiny">🕐 <b>Beste Zeit:</b> ${C.esc(h.time)} &nbsp;·&nbsp; 📸 ${h.photoTip}</p>
          <p class="tiny">🔗 ${C.esc(h.maps)}</p>
        `)).join('')}
      </div>
    `, { footerRight: d.name }));
  }
  return chunks;
}

function culinaryPages(d) {
  const pages = [];
  const items = d.dishes;
  const perPage = 4;
  for (let i = 0; i < items.length; i += perPage) {
    const slice = items.slice(i, i + perPage);
    pages.push(C.page(`
      ${C.watermark(SK[d.key] ? SK[d.key]('#0B2E4F') : '')}
      ${i === 0 ? `<div class="eyebrow">${C.esc(d.name)}</div><h2 class="page-title mb-0">Kulinarik — Was man essen MUSS</h2><div class="divider-line"></div>` : C.sectionTitle('Was man essen muss (Fortsetzung)', '🍽️')}
      <div class="grid-2 mt-2">${slice.map(dd => C.dishCard(dd, ICONS)).join('')}</div>
    `, { footerRight: d.name }));
  }
  if (d.culinaryNote) {
    pages.push(C.page(`
      ${C.sectionTitle('Streetfood & Märkte', '🥘')}
      ${d.culinaryNote}
    `, { footerRight: d.name }));
  }
  return pages;
}

function restaurantsPage(d) {
  return C.page(`
    ${C.sectionTitle('Restaurants — Top 5', '🍴')}
    <div class="grid-2">${d.restaurants.map(C.restaurantCard).join('')}</div>
    ${d.drinksNote ? `<div class="mt-4">${d.drinksNote}</div>` : ''}
  `, { footerRight: d.name });
}

function activitiesPage(d) {
  return C.page(`
    ${C.watermark(SK[d.key] ? SK[d.key]('#0B2E4F') : '')}
    ${C.sectionTitle('Aktivitäten — Top 3', '⚡')}
    ${C.medalRow(d.activities)}
    ${d.activityNote ? `<div class="mt-4">${d.activityNote}</div>` : ''}
    ${d.activityQr ? `<div class="mt-4">${C.qrBlock('GetYourGuide — direkt buchen', d.activityQr.label, qrImg(d.activityQr.key))}</div>` : ''}
  `, { footerRight: d.name });
}

function photoSpotsPage(d) {
  return C.page(`
    ${C.sectionTitle('Top 10 Fotospots', '📸')}
    ${C.spotGrid(d.photoSpots)}
  `, { footerRight: d.name });
}

function itineraryPage(d) {
  return C.page(`
    ${C.sectionTitle('Zeitplan — ein perfekter Hafentag', '🕐')}
    <div class="grid-2">
      <div>${C.timeline(d.itinerary)}</div>
      <div>
        ${C.infobox('Plan A — Perfektes Wetter', d.planA, 'teal', '☀️')}
        ${C.infobox('Plan B — Wind & Regen', d.planB, 'gold', '🌧️')}
        ${C.infobox('Plan C — Ohne Ausflug', d.planC, 'navy', '🚶')}
      </div>
    </div>
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
    heroPage(d),
    mapPage(d),
    ...highlightsPages(d),
    ...culinaryPages(d),
    restaurantsPage(d),
    activitiesPage(d),
    photoSpotsPage(d),
    itineraryPage(d),
    budgetPracticalPage(d),
  ];
}

module.exports = { buildPortPages };

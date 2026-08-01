'use strict';
/* Component library: data -> HTML string. Shared by every chapter builder
   so the whole 100+ page guide stays visually consistent. */

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');

function page(innerHtml, { footerLeft = 'MEIN SCHIFF 4 · ADRIA REISEFÜHRER', footerRight = '', noPad = false } = {}) {
  const body = noPad ? innerHtml : `<div class="page-pad">${innerHtml}</div>`;
  const footer = footerRight !== null
    ? `<div class="page-footer"><span class="brand">${esc(footerLeft)}</span><span>${esc(footerRight)}</span></div>`
    : '';
  return `<section class="page">${body}${footer}</section>`;
}

function stars(n, max = 5) {
  let s = '<span class="stars">';
  for (let i = 0; i < max; i++) s += `<span class="${i < n ? 'on' : 'off'}">★</span>`;
  s += '</span>';
  return s;
}

function ratingBlock(ratings) {
  // ratings: [{label, value}]
  return `<div class="rating-block">${ratings.map(r => `
    <div class="rating-item"><span class="k">${esc(r.label)}</span>${stars(r.value)}</div>
  `).join('')}</div>`;
}

function infobox(title, html, variant = '', icon = '💡') {
  return `<div class="infobox ${variant}">
    <div class="infobox-title"><span class="icon">${icon}</span>${esc(title)}</div>
    ${html}
  </div>`;
}

function sectionTitle(text, icon = '') {
  return `<h2 class="section-title">${icon ? `<span class="icon">${icon}</span>` : ''}${esc(text)}</h2>`;
}

function card(inner, { tag = '', tagVariant = '', dense = false } = {}) {
  return `<div class="card${dense ? ' dense' : ''}">${tag ? `<span class="tag ${tagVariant}">${esc(tag)}</span><br/>` : ''}${inner}</div>`;
}

function iconTiles(keys, renderIcon, variant = '') {
  return `<div class="icon-tiles">${keys.map(k => `<div class="icon-tile ${variant}">${renderIcon(k)}</div>`).join('')}</div>`;
}

function dishCard(d, ICONS, { dense = false } = {}) {
  // d: {name, desc, price, where, tip}
  const tiles = ICONS ? iconTiles(ICONS.pickFoodIcons(d), ICONS.renderIcon, dense ? 'coral-tile sm' : 'coral-tile') : '';
  return card(`
    ${tiles}
    <div class="card-title">${esc(d.name)}</div>
    <p class="${dense ? 'tiny' : 'small'}">${d.desc}</p>
    <p class="tiny"><b>Preis:</b> ${esc(d.price)} &nbsp;·&nbsp; <b>Wo:</b> ${esc(d.where)}</p>
    ${d.tip && !dense ? `<p class="tiny"><b>Tipp:</b> ${esc(d.tip)}</p>` : ''}
  `, { dense });
}

function restaurantCard(r, { dense = false } = {}) {
  // r: {category, name, area, price, rating, pick, note, mapsUrl}
  return card(`
    <div class="flex-between">
      <div class="card-title">${esc(r.name)}</div>
      <div class="price">${esc(r.price)}</div>
    </div>
    <p class="tiny">${esc(r.area)}${r.rating ? ` &nbsp;·&nbsp; ${esc(r.rating)}` : ''}</p>
    <p class="${dense ? 'tiny' : 'small'}">${r.note}</p>
    ${r.pick && !dense ? `<p class="tiny"><b>Bestellen:</b> ${esc(r.pick)}</p>` : ''}
  `, { tag: r.category, tagVariant: 'coral', dense });
}

function medalCard(rank, a, { dense = false } = {}) {
  // rank: 1|2|3, a: {emoji, name, desc, price, duration, link, why}
  const cls = rank === 1 ? 'gold-rank' : rank === 2 ? 'silver-rank' : 'bronze-rank';
  const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉';
  return `<div class="medal-card ${cls}${dense ? ' dense' : ''}">
    <div class="medal-emoji">${medal}</div>
    <div class="card-title">${esc(a.name)}</div>
    <p class="${dense ? 'tiny' : 'small'}">${a.desc}</p>
    <div class="medal-stat-row">
      <div class="medal-stat">Preis<b>${esc(a.price)}</b></div>
      <div class="medal-stat">Dauer<b>${esc(a.duration)}</b></div>
    </div>
    ${a.why && !dense ? `<p class="tiny"><b>Warum:</b> ${a.why}</p>` : ''}
    ${a.link && !dense ? `<p class="tiny">🔗 ${esc(a.link)}</p>` : ''}
  </div>`;
}

function medalRow(activities, opts = {}) {
  return `<div class="medal-row">${activities.map((a, i) => medalCard(i + 1, a, opts)).join('')}</div>`;
}

function table(headers, rows) {
  return `<table class="clean"><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
  <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function qrBlock(label, sub, qrSrc) {
  return `<div class="qr-row">
    <img src="${qrSrc}" alt="QR" />
    <div class="qr-label"><b>${esc(label)}</b>${esc(sub)}</div>
  </div>`;
}

function timeline(items) {
  // items: [{time, text}]
  return `<div class="timeline">${items.map(i => `
    <div class="tl-item"><div class="tl-time">${esc(i.time)}</div><div class="tl-text">${i.text}</div></div>
  `).join('')}</div>`;
}

function spotGrid(spots) {
  // spots: [{n, name, time, dir, why}]
  return `<div class="spot-grid">${spots.map(s => `
    <div class="spot"><span class="spot-num">${s.n}</span>
      <div class="card-title">${esc(s.name)}</div>
      <p class="tiny">🕐 ${esc(s.time)} &nbsp;·&nbsp; 🧭 ${esc(s.dir)}</p>
      <p class="small">${s.why}</p>
    </div>
  `).join('')}</div>`;
}

function budgetRow(low, normal, premium) {
  const col = (l, v) => `<div class="budget-col"><div class="amt">${esc(v)}</div><div class="lbl">${esc(l)}</div></div>`;
  return `<div class="budget-row">${col('Low Budget', low)}${col('Normal', normal)}${col('Premium', premium)}</div>`;
}

function pullQuote(text, attr) {
  return `<div class="pull-quote">&bdquo;${text}&ldquo;${attr ? `<span class="attr">${esc(attr)}</span>` : ''}</div>`;
}

function toc(items) {
  // items: [{num, title, page}]
  return items.map(i => `<div class="toc-row"><span class="toc-num">${esc(i.num)}</span>
    <span style="flex:1; font-weight:${i.bold ? 700 : 400}; color:${i.bold ? 'var(--navy)' : 'var(--ink)'}">${esc(i.title)}</span>
    <span class="small">${esc(i.page)}</span></div>`).join('');
}

function watermark(svg) {
  return `<div style="position:absolute; left:0; right:0; bottom:0; height:70mm; opacity:0.07; pointer-events:none;">${svg}</div>`;
}

module.exports = {
  watermark, iconTiles,
  esc, page, stars, ratingBlock, infobox, sectionTitle, card, dishCard,
  restaurantCard, medalRow, table, qrBlock, timeline, spotGrid, budgetRow,
  pullQuote, toc,
};

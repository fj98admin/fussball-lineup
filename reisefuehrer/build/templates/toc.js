'use strict';
const C = require('../components');

function tocPage(entries) {
  return C.page(`
    <div class="eyebrow">Inhalt</div>
    <h2 class="page-title mb-0">Inhaltsverzeichnis</h2>
    <div class="divider-line"></div>
    <div class="mt-4">${C.toc(entries)}</div>
  `, { footerRight: 'Inhalt' });
}

module.exports = { tocPage };

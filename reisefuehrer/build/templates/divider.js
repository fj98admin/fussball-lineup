'use strict';
const C = require('../components');
const SK = require('../skylines');

function dividerPage({ num, title, sub, skyline = 'wave' }) {
  const sk = SK[skyline] ? SK[skyline]('#C99A3E') : '';
  return C.page(`
    <div class="divider" style="height:297mm; position:relative;">
      <div style="position:absolute; bottom:0; left:0; right:0; height:60mm; opacity:0.5;">${sk}</div>
      <div class="divider-inner">
        <div class="divider-num">${C.esc(num)}</div>
        <h1 class="divider-title">${title}</h1>
        <div class="divider-rule"></div>
        ${sub ? `<div class="divider-sub">${sub}</div>` : ''}
      </div>
    </div>
  `, { noPad: true, footerRight: null });
}

module.exports = { dividerPage };

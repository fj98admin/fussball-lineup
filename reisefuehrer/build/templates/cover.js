'use strict';
const C = require('../components');
const SK = require('../skylines');

function coverPage() {
  const ship = SK.ship('#C99A3E');
  return C.page(`
    <div class="cover" style="height:297mm;">
      <div class="cover-pattern"></div>
      <div class="cover-frame"></div>
      <div class="cover-content">
        <div>
          <div class="cover-kicker">Premium Reiseführer · Anfang August 2026</div>
          <h1 class="cover-title">MEIN SCHIFF 4<br/><em>ADRIA</em></h1>
          <div class="cover-subtitle">Der persönliche Guide für Action, Kulinarik, Fotospots und authentische Erlebnisse an jedem Hafen deiner Route — von Triest bis Kotor.</div>
        </div>
        <div>
          <div style="height:38mm; opacity:0.9; margin-bottom:6mm;">${ship}</div>
          <div class="cover-route">
            <span class="stop">TRIEST</span><span class="arrow">✈</span>
            <span class="stop">SEETAG</span><span class="arrow">✈</span>
            <span class="stop">BARI</span><span class="arrow">✈</span>
            <span class="stop">DUBROVNIK</span><span class="arrow">✈</span>
            <span class="stop">KOTOR</span><span class="arrow">✈</span>
            <span class="stop">SPLIT</span><span class="arrow">✈</span>
            <span class="stop">SEETAG</span><span class="arrow">✈</span>
            <span class="stop">TRIEST</span>
          </div>
          <div class="cover-footer-row">
            <div class="cover-badge">★★★★★ Kreuzfahrtgeeignet</div>
            <div class="small" style="color:#CFE2E6;">Für Alleinreisende · 27 · Action, Kulinarik & Fotografie</div>
          </div>
        </div>
      </div>
    </div>
  `, { noPad: true, footerRight: null });
}

module.exports = { coverPage };

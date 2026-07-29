'use strict';
/* Schematic "Google-Maps-Stil" orientation maps — hand-built vector diagrams
   (not tile imagery, so no licensing issue) showing ship, route, and POIs.
   Coordinates are relative (0-100) hand-placed per port from the research. */

const CATS = {
  ship:    { color: '#0B2E4F', icon: '⚓' },
  gate:    { color: '#0B2E4F', icon: '🚪' },
  sight:   { color: '#E8623D', icon: '★' },
  food:    { color: '#C99A3E', icon: '🍽' },
  cafe:    { color: '#0E7C86', icon: '☕' },
  photo:   { color: '#0E7C86', icon: '📷' },
  practical:{ color: '#6B7280', icon: '●' },
  activity:{ color: '#8E3B46', icon: '⚡' },
};

function pin(p) {
  const cat = CATS[p.cat] || CATS.sight;
  const x = p.x * 6, y = p.y * 4.2; // scale 0-100 -> 0-600 x 0-420
  return `
    <g>
      <circle cx="${x}" cy="${y}" r="9" fill="${cat.color}" stroke="white" stroke-width="1.6"/>
      <text x="${x}" y="${y + 3.6}" font-size="9" text-anchor="middle" fill="white" font-family="Liberation Sans, sans-serif" font-weight="bold">${p.n}</text>
      <text x="${x}" y="${y - 12}" font-size="9.5" text-anchor="middle" fill="#0B2E4F" font-family="Liberation Serif, serif" font-weight="bold">${p.label}</text>
    </g>`;
}

function routePath(points) {
  const pts = points.map(p => `${p.x * 6},${p.y * 4.2}`).join(' ');
  return `<polyline points="${pts}" fill="none" stroke="#E8623D" stroke-width="2.4" stroke-dasharray="1,6" stroke-linecap="round"/>`;
}

function orientationMap({ water, land = [], route = [], points = [], compass = true }) {
  // water: array of {x,y} polygon points (0-100 scale) for sea area
  const waterPts = water.map(p => `${p.x * 6},${p.y * 4.2}`).join(' ');
  const landShapes = land.map(l => `<polygon points="${l.map(p => `${p.x*6},${p.y*4.2}`).join(' ')}" fill="#F1E9D8"/>`).join('');
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:#FAF6EF">
    <rect x="0" y="0" width="600" height="420" fill="#F1E9D8"/>
    <polygon points="${waterPts}" fill="#BEE0E2"/>
    ${landShapes}
    ${routePath(route)}
    ${points.map(pin).join('')}
    ${compass ? `<g transform="translate(552,32)">
      <circle r="16" fill="white" stroke="#0B2E4F" stroke-width="1"/>
      <line x1="0" y1="-11" x2="0" y2="11" stroke="#0B2E4F" stroke-width="1.2"/>
      <line x1="-11" y1="0" x2="11" y2="0" stroke="#0B2E4F" stroke-width="1.2"/>
      <text x="0" y="-14" font-size="8" text-anchor="middle" fill="#0B2E4F" font-weight="bold">N</text>
    </g>` : ''}
  </svg>`;
}

function legendHtml(points) {
  const seen = new Map();
  points.forEach(p => { if (!seen.has(p.n)) seen.set(p.n, p.label); });
  const rows = [...seen.entries()].map(([n, label]) => `<div class="li"><b>${n}</b>&nbsp;${label}</div>`).join(' &nbsp; ');
  return `<div class="map-legend">${rows}</div>`;
}

function routeMap(stops) {
  // stops: [{x,y,label,day,sea}] on a 0-100 grid depicting the Adriatic basin schematically
  const pts = stops.filter(s => !s.sea).map(s => `${s.x * 6},${s.y * 4.2}`);
  const line = stops.map(s => `${s.x * 6},${s.y * 4.2}`).join(' ');
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <rect width="600" height="420" fill="#BEE0E2"/>
    <polygon points="0,0 600,0 600,420 0,420" fill="#BEE0E2"/>
    <polygon points="0,0 130,0 90,120 60,260 0,420" fill="#F1E9D8"/>
    <polygon points="600,0 420,0 460,90 430,220 480,340 600,420 600,0" fill="#F1E9D8"/>
    <polyline points="${line}" fill="none" stroke="#E8623D" stroke-width="2.6" stroke-dasharray="1,7" stroke-linecap="round"/>
    ${stops.map((s, i) => {
      const x = s.x * 6, y = s.y * 4.2;
      if (s.sea) {
        return `<g><circle cx="${x}" cy="${y}" r="6" fill="#0E7C86"/><text x="${x}" y="${y - 11}" font-size="9" text-anchor="middle" fill="#0E7C86" font-family="Liberation Sans" font-weight="bold">⚓ Seetag</text></g>`;
      }
      return `<g><circle cx="${x}" cy="${y}" r="10" fill="#0B2E4F" stroke="white" stroke-width="1.8"/>
        <text x="${x}" y="${y + 3.6}" font-size="9.5" text-anchor="middle" fill="white" font-family="Liberation Sans" font-weight="bold">${s.day}</text>
        <text x="${x}" y="${y - 15}" font-size="11" text-anchor="middle" fill="#0B2E4F" font-family="Liberation Serif" font-weight="bold">${s.label}</text></g>`;
    }).join('')}
  </svg>`;
}

module.exports = { orientationMap, legendHtml, CATS, routeMap };

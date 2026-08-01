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

let clipCounter = 0;

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function next() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function rotatePoint(p, cx, cy, deg) {
  const rad = (deg * Math.PI) / 180;
  const dx = p.x - cx, dy = p.y - cy;
  return {
    x: cx + dx * Math.cos(rad) - dy * Math.sin(rad),
    y: cy + dy * Math.cos(rad) + dx * Math.sin(rad),
  };
}

// A rotated rectilinear grid of unnamed minor streets — for planned quarters
// (Borgo Teresiano in Trieste, Diocletian's Palace/Murat in Split & Bari).
function gridMesh({ cx, cy, w, h, cols, rows, angle = 0 }) {
  const streets = [];
  for (let i = 0; i <= cols; i++) {
    const lx = cx - w / 2 + (w * i) / cols;
    streets.push({ path: [rotatePoint({ x: lx, y: cy - h / 2 }, cx, cy, angle), rotatePoint({ x: lx, y: cy + h / 2 }, cx, cy, angle)], main: false });
  }
  for (let j = 0; j <= rows; j++) {
    const ly = cy - h / 2 + (h * j) / rows;
    streets.push({ path: [rotatePoint({ x: cx - w / 2, y: ly }, cx, cy, angle), rotatePoint({ x: cx + w / 2, y: ly }, cx, cy, angle)], main: false });
  }
  return streets;
}

// A tangled, deterministic (seeded) mesh of short unnamed alleys — for
// organic medieval old towns (Bari Vecchia, Kotor, Dubrovnik, Split alleys).
function organicMesh({ cx, cy, w, h, density = 16, seed = 1 }) {
  const rand = seededRandom(seed);
  const streets = [];
  for (let i = 0; i < density; i++) {
    const x1 = cx - w / 2 + rand() * w;
    const y1 = cy - h / 2 + rand() * h;
    const angle = rand() * Math.PI * 2;
    const len = 4 + rand() * 8;
    const x2 = x1 + Math.cos(angle) * len;
    const y2 = y1 + Math.sin(angle) * len;
    streets.push({ path: [{ x: x1, y: y1 }, { x: x2, y: y2 }], main: false });
    if (rand() > 0.45) {
      const bx = x1 + Math.cos(angle) * len * 0.55;
      const by = y1 + Math.sin(angle) * len * 0.55;
      const pAngle = angle + (Math.PI / 2) * (rand() > 0.5 ? 1 : -1);
      const pLen = 3 + rand() * 5;
      streets.push({ path: [{ x: bx, y: by }, { x: bx + Math.cos(pAngle) * pLen, y: by + Math.sin(pAngle) * pLen }], main: false });
    }
  }
  return streets;
}

function bboxOf(land) {
  let x0 = 100, y0 = 100, x1 = 0, y1 = 0;
  land.forEach(poly => poly.forEach(p => {
    x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y);
    x1 = Math.max(x1, p.x); y1 = Math.max(y1, p.y);
  }));
  return { x0, y0, x1, y1 };
}

// Full-coverage grid mesh: covers the ENTIRE land bounding box (oversized,
// then clipped precisely to the real land polygon by orientationMap), so
// every part of the visible land shows streets — not just a hand-picked
// sub-region. angle gives each port a distinct grid orientation.
function autoGridMesh(land, { step = 7.5, angle = 0 } = {}) {
  const { x0, y0, x1, y1 } = bboxOf(land);
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const w = (x1 - x0) * 1.5 + 20, h = (y1 - y0) * 1.5 + 20;
  const cols = Math.max(4, Math.round(w / step));
  const rows = Math.max(4, Math.round(h / step));
  return gridMesh({ cx, cy, w, h, cols, rows, angle });
}

function pin(p) {
  const cat = CATS[p.cat] || CATS.sight;
  const x = p.x * 6, y = p.y * 4.2; // scale 0-100 -> 0-600 x 0-420
  const r = p.minor ? 6.4 : 9;
  const anchor = p.anchor || 'middle';
  const lx = anchor === 'start' ? x + 12 : anchor === 'end' ? x - 12 : x;
  const label = p.minor ? '' : `<text x="${lx}" y="${y - 12}" text-anchor="${anchor}" font-size="9" fill="#0B2E4F" font-family="Liberation Serif, serif" font-weight="bold" paint-order="stroke" stroke="#FAF6EF" stroke-width="3">${p.label}</text>`;
  return `
    <g>
      <circle cx="${x}" cy="${y}" r="${r}" fill="${cat.color}" stroke="white" stroke-width="1.4"/>
      <text x="${x}" y="${y + (p.minor ? 3 : 3.6)}" font-size="${p.minor ? 7.2 : 9}" text-anchor="middle" fill="white" font-family="Liberation Sans, sans-serif" font-weight="bold">${p.n}</text>
      ${label}
    </g>`;
}

function routePath(points) {
  const pts = points.map(p => `${p.x * 6},${p.y * 4.2}`).join(' ');
  return `<polyline points="${pts}" fill="none" stroke="#E8623D" stroke-width="2.4" stroke-dasharray="1,6" stroke-linecap="round"/>`;
}

function streetLine(s) {
  // s: {path:[{x,y}...], main?:bool, name?:string}
  const pts = s.path.map(p => `${p.x * 6},${p.y * 4.2}`).join(' ');
  const w = s.main ? 3.4 : 1.7;
  const casing = s.main ? '#D9CFAE' : '#E4DDC6';
  const fill = s.main ? '#FFFFFF' : '#FBF8EF';
  const label = (() => {
    if (!s.name) return '';
    const mid = s.path[Math.floor((s.path.length - 1) / 2)];
    const nxt = s.path[Math.min(s.path.length - 1, Math.floor((s.path.length - 1) / 2) + 1)];
    const x = mid.x * 6, y = mid.y * 4.2;
    let angle = Math.atan2((nxt.y - mid.y) * 4.2, (nxt.x - mid.x) * 6) * 180 / Math.PI;
    if (angle > 90) angle -= 180; if (angle < -90) angle += 180;
    return `<text x="${x}" y="${y - 3}" font-size="${s.main ? 7.4 : 6.4}" font-style="italic" text-anchor="middle"
      fill="#8A8370" font-family="Liberation Sans, sans-serif" transform="rotate(${angle.toFixed(1)} ${x} ${y})">${s.name}</text>`;
  })();
  return `<polyline points="${pts}" fill="none" stroke="${casing}" stroke-width="${w + 1.8}" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="${pts}" fill="none" stroke="${fill}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>
    ${label}`;
}

function orientationMap({ water, land = [], route = [], points = [], streets = [], mesh = [], compass = true }) {
  // water: array of {x,y} polygon points (0-100 scale) for sea area
  const clipId = `land-clip-${++clipCounter}`;
  const waterPts = water.map(p => `${p.x * 6},${p.y * 4.2}`).join(' ');
  const landPolyPoints = land.map(l => l.map(p => `${p.x * 6},${p.y * 4.2}`).join(' '));
  const landShapes = landPolyPoints.map(pts => `<polygon points="${pts}" fill="#F1E9D8"/>`).join('');
  // Fine unnamed street texture (mesh), clipped strictly to the land polygons so it
  // never spills into the water — this is what makes it read as a real city plan.
  const meshLayer = mesh.length
    ? `<defs><clipPath id="${clipId}">${landPolyPoints.map(pts => `<polygon points="${pts}"/>`).join('')}</clipPath></defs>
       <g clip-path="url(#${clipId})" opacity="0.9">${mesh.map(streetLine).join('')}</g>`
    : '';
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:#FAF6EF">
    <rect x="0" y="0" width="600" height="420" fill="#F1E9D8"/>
    <polygon points="${waterPts}" fill="#BEE0E2"/>
    ${landShapes}
    ${meshLayer}
    ${streets.map(streetLine).join('')}
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

module.exports = { orientationMap, legendHtml, CATS, routeMap, gridMesh, organicMesh, autoGridMesh };

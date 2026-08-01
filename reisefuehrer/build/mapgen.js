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

// Compute a tight SVG viewBox around the actual mapped content — the named
// street network plus the "core" POI pins — instead of always showing the
// full fixed 0-100 canvas. We deliberately do NOT use the land polygon's own
// bbox: that shape is often authored oversized (e.g. to include an inland
// plateau or hillside with no streets) so its bbox is close to the full
// canvas and would defeat any cropping. Points whose label is a distant,
// off-map direction pointer (e.g. "Grotta Gigante → 20 km") are excluded
// from the crop too, so a single far-flung arrow marker can't force the
// whole map to zoom back out.
function computeCropViewBox(streets, points, targetAspect) {
  let x0 = 100, y0 = 100, x1 = 0, y1 = 0;
  const consider = (px, py) => { x0 = Math.min(x0, px); y0 = Math.min(y0, py); x1 = Math.max(x1, px); y1 = Math.max(y1, py); };
  streets.forEach(s => s.path.forEach(p => consider(p.x, p.y)));
  points.filter(p => !/→/.test(p.label || '')).forEach(p => consider(p.x, p.y));
  if (x1 < x0 || y1 < y0) return { x: 0, y: 0, w: 600, h: 420 };
  const padX = (x1 - x0) * 0.14 + 3;
  const padY = (y1 - y0) * 0.14 + 3;
  x0 -= padX; x1 += padX; y0 -= padY; y1 += padY;
  let vx0 = x0 * 6, vy0 = y0 * 4.2, vx1 = x1 * 6, vy1 = y1 * 4.2;
  let vw = vx1 - vx0, vh = vy1 - vy0;
  const curAspect = vw / vh;
  if (curAspect < targetAspect) {
    const newW = vh * targetAspect;
    const cx = (vx0 + vx1) / 2;
    vx0 = cx - newW / 2; vw = newW;
  } else {
    const newH = vw / targetAspect;
    const cy = (vy0 + vy1) / 2;
    vy0 = cy - newH / 2; vh = newH;
  }
  return { x: vx0, y: vy0, w: vw, h: vh };
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
  // Colors tuned to evoke the real Google Maps "light" style: near-white
  // land, thin light-grey minor streets, slightly bolder white-on-grey
  // arterials — no OSM-style orange casing.
  const pts = s.path.map(p => `${p.x * 6},${p.y * 4.2}`).join(' ');
  const w = s.main ? 3.0 : 1.1;
  const casing = s.main ? '#C4C4BE' : '#D9D9D3';
  const fill = s.main ? '#FFFFFF' : '#D9D9D3';
  const label = (() => {
    if (!s.name) return '';
    const mid = s.path[Math.floor((s.path.length - 1) / 2)];
    const nxt = s.path[Math.min(s.path.length - 1, Math.floor((s.path.length - 1) / 2) + 1)];
    const x = mid.x * 6, y = mid.y * 4.2;
    let angle = Math.atan2((nxt.y - mid.y) * 4.2, (nxt.x - mid.x) * 6) * 180 / Math.PI;
    if (angle > 90) angle -= 180; if (angle < -90) angle += 180;
    return `<text x="${x}" y="${y - 3}" font-size="${s.main ? 7.4 : 6.4}" text-anchor="middle"
      fill="#5F6368" font-family="Liberation Sans, sans-serif" font-weight="${s.main ? 600 : 400}" letter-spacing="0.3" paint-order="stroke" stroke="#F4F3F0" stroke-width="2.2"
      transform="rotate(${angle.toFixed(1)} ${x} ${y})">${s.name}</text>`;
  })();
  return `<polyline points="${pts}" fill="none" stroke="${casing}" stroke-width="${w + (s.main ? 1.3 : 0)}" stroke-linecap="round" stroke-linejoin="round"/>
    ${s.main ? `<polyline points="${pts}" fill="none" stroke="${fill}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
    ${label}`;
}

function orientationMap({ water, land = [], route = [], points = [], streets = [], mesh = [], compass = true }) {
  // water: array of {x,y} polygon points (0-100 scale) for sea area
  const clipId = `land-clip-${++clipCounter}`;
  const waterPts = water.map(p => `${p.x * 6},${p.y * 4.2}`).join(' ');
  const landPolyPoints = land.map(l => l.map(p => `${p.x * 6},${p.y * 4.2}`).join(' '));
  const landShapes = landPolyPoints.map(pts => `<polygon points="${pts}" fill="#EEEDE9"/>`).join('');
  // Fine unnamed street texture (mesh), clipped strictly to the land polygons so it
  // never spills into the water — this is what makes it read as a real city plan.
  const meshLayer = mesh.length
    ? `<defs><clipPath id="${clipId}">${landPolyPoints.map(pts => `<polygon points="${pts}"/>`).join('')}</clipPath></defs>
       <g clip-path="url(#${clipId})" opacity="0.95">${mesh.map(streetLine).join('')}</g>`
    : '';
  // Crop tightly to the actual street + core-POI extent (not the full fixed
  // canvas) so the visible frame is filled edge-to-edge, like a zoomed map.
  const vb = computeCropViewBox(streets, points, 182 / 92);
  // Distant, off-map direction pointers (e.g. "Grotta Gigante → 20 km") were
  // excluded from the crop so they can't force the whole map to zoom out —
  // but they still need to be visible, so pull them onto the inner edge of
  // the crop instead of letting them fall outside it and disappear.
  const marginPx = 24;
  // Reserve the top-right corner for the compass rose — nudge any clamped
  // point that would otherwise land underneath it.
  const compassX0 = vb.x + vb.w - 62, compassY1 = vb.y + 62;
  const renderedPoints = points.map(p => {
    if (!/→/.test(p.label || '')) return p;
    const x = p.x * 6, y = p.y * 4.2;
    let cx = Math.min(Math.max(x, vb.x + marginPx), vb.x + vb.w - marginPx);
    let cy = Math.min(Math.max(y, vb.y + marginPx), vb.y + vb.h - marginPx);
    if (cx > compassX0 && cy < compassY1) cy = compassY1;
    return { ...p, x: cx / 6, y: cy / 4.2 };
  });
  return `<svg viewBox="${vb.x.toFixed(1)} ${vb.y.toFixed(1)} ${vb.w.toFixed(1)} ${vb.h.toFixed(1)}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;background:#A6D3EF">
    <rect x="-400" y="-400" width="1400" height="1200" fill="#EEEDE9"/>
    <polygon points="${waterPts}" fill="#A6D3EF"/>
    ${landShapes}
    ${meshLayer}
    ${streets.map(streetLine).join('')}
    ${routePath(route)}
    ${renderedPoints.map(pin).join('')}
    ${compass ? `<g transform="translate(${(vb.x + vb.w - 34).toFixed(1)},${(vb.y + 34).toFixed(1)})">
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

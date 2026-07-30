'use strict';
/* Small flat-illustration icon library (no external images needed) +
   a keyword classifier that picks 1-3 relevant icons per dish/highlight. */

function wrap(inner, vb = '0 0 100 100') {
  return `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">${inner}</svg>`;
}

// Each icon: two-tone flat pictogram, c1 = fill, c2 = accent/line
const ICONS = {
  // --- FOOD ---
  pasta: (c1, c2) => wrap(`<circle cx="50" cy="55" r="34" fill="${c1}" opacity="0.15"/>
    <ellipse cx="50" cy="58" rx="30" ry="18" fill="${c1}" opacity="0.3"/>
    <path d="M25 55 q6 -14 14 0 q6 -14 14 0 q6 -14 14 0 q6 -14 8 2" fill="none" stroke="${c2}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M28 63 q6 -12 14 0 q6 -12 14 0 q6 -12 14 0" fill="none" stroke="${c2}" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="35" cy="46" r="3" fill="${c2}"/><circle cx="60" cy="44" r="3" fill="${c2}"/>`),
  'pizza-focaccia': (c1, c2) => wrap(`<circle cx="50" cy="52" r="34" fill="${c1}" opacity="0.18"/>
    <circle cx="50" cy="52" r="27" fill="none" stroke="${c2}" stroke-width="3"/>
    <circle cx="42" cy="45" r="4" fill="${c2}"/><circle cx="58" cy="48" r="4" fill="${c2}"/>
    <circle cx="47" cy="62" r="4" fill="${c2}"/><circle cx="62" cy="60" r="3" fill="${c2}"/>
    <circle cx="38" cy="60" r="3" fill="${c2}"/>`),
  'seafood-raw': (c1, c2) => wrap(`<ellipse cx="50" cy="60" rx="32" ry="16" fill="${c1}" opacity="0.2"/>
    <path d="M30 55 Q50 30 70 55 Q60 66 50 62 Q40 66 30 55 Z" fill="${c2}" opacity="0.85"/>
    <path d="M50 62 L50 30" stroke="${c1}" stroke-width="2"/>
    <circle cx="43" cy="45" r="1.6" fill="${c1}"/><circle cx="57" cy="46" r="1.6" fill="${c1}"/>`),
  'grilled-fish': (c1, c2) => wrap(`<path d="M20 55 Q35 35 60 45 Q78 50 80 55 Q78 60 60 65 Q35 75 20 55 Z" fill="${c2}" opacity="0.85"/>
    <path d="M80 55 L92 45 L92 65 Z" fill="${c2}" opacity="0.85"/>
    <circle cx="32" cy="52" r="2.6" fill="${c1}"/>
    <path d="M40 48 Q50 55 40 62" fill="none" stroke="${c1}" stroke-width="2"/>
    <path d="M48 46 Q58 55 48 64" fill="none" stroke="${c1}" stroke-width="2"/>`),
  'meat-cured': (c1, c2) => wrap(`<rect x="24" y="40" width="52" height="34" rx="4" fill="${c1}" opacity="0.15"/>
    <path d="M28 45 L72 45 L64 68 L36 68 Z" fill="${c2}" opacity="0.85"/>
    <path d="M32 50 L68 50 M30 57 L70 57 M34 64 L66 64" stroke="${c1}" stroke-width="2"/>`),
  cheese: (c1, c2) => wrap(`<path d="M22 62 L50 30 L78 62 Z" fill="${c2}" opacity="0.85"/>
    <circle cx="45" cy="52" r="2.6" fill="${c1}"/><circle cx="58" cy="55" r="2" fill="${c1}"/><circle cx="50" cy="45" r="1.8" fill="${c1}"/>`),
  'soup-stew': (c1, c2) => wrap(`<path d="M24 52 Q24 76 50 76 Q76 76 76 52 Z" fill="${c2}" opacity="0.85"/>
    <ellipse cx="50" cy="52" rx="26" ry="7" fill="${c1}" opacity="0.4"/>
    <path d="M38 30 Q34 38 40 42" fill="none" stroke="${c2}" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M50 28 Q46 36 52 40" fill="none" stroke="${c2}" stroke-width="2.6" stroke-linecap="round"/>
    <rect x="16" y="50" width="8" height="4" rx="2" fill="${c2}"/><rect x="76" y="50" width="8" height="4" rx="2" fill="${c2}"/>`),
  dessert: (c1, c2) => wrap(`<path d="M30 70 L38 40 Q50 30 62 40 L70 70 Z" fill="${c2}" opacity="0.85"/>
    <ellipse cx="50" cy="70" rx="22" ry="5" fill="${c1}" opacity="0.4"/>
    <circle cx="50" cy="32" r="4" fill="${c2}"/>`),
  wine: (c1, c2) => wrap(`<path d="M36 28 h28 l-4 26 a10 10 0 0 1 -20 0 Z" fill="${c2}" opacity="0.85"/>
    <rect x="48" y="60" width="4" height="16" fill="${c2}"/><rect x="38" y="76" width="24" height="4" rx="2" fill="${c2}"/>`),
  coffee: (c1, c2) => wrap(`<path d="M28 42 h34 v22 a17 17 0 0 1 -34 0 Z" fill="${c2}" opacity="0.85"/>
    <path d="M62 46 q14 0 14 12 q0 12 -14 10" fill="none" stroke="${c2}" stroke-width="4"/>
    <path d="M35 30 q4 6 0 10 M45 30 q4 6 0 10" fill="none" stroke="${c1}" stroke-width="2.4" stroke-linecap="round"/>`),
  'fried-snack': (c1, c2) => wrap(`<path d="M50 26 L70 66 Q50 78 30 66 Z" fill="${c2}" opacity="0.85"/>
    <circle cx="44" cy="48" r="2" fill="${c1}"/><circle cx="56" cy="52" r="2" fill="${c1}"/><circle cx="50" cy="60" r="2" fill="${c1}"/>`),
  bread: (c1, c2) => wrap(`<ellipse cx="50" cy="55" rx="30" ry="20" fill="${c2}" opacity="0.85"/>
    <path d="M32 48 Q40 40 48 48 M52 46 Q60 38 68 46" stroke="${c1}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`),
  // --- PLACES ---
  fortress: (c1, c2) => wrap(`<rect x="26" y="46" width="48" height="30" fill="${c2}" opacity="0.85"/>
    <rect x="26" y="38" width="8" height="10" fill="${c2}"/><rect x="46" y="38" width="8" height="10" fill="${c2}"/><rect x="66" y="38" width="8" height="10" fill="${c2}"/>
    <rect x="45" y="54" width="10" height="22" fill="${c1}"/>`),
  cathedral: (c1, c2) => wrap(`<rect x="30" y="50" width="40" height="26" fill="${c2}" opacity="0.85"/>
    <polygon points="30,50 50,32 70,50" fill="${c2}" opacity="0.85"/>
    <rect x="46" y="20" width="8" height="16" fill="${c2}"/><rect x="47" y="16" width="6" height="6" fill="${c1}"/>
    <rect x="46" y="62" width="8" height="14" fill="${c1}"/>`),
  square: (c1, c2) => wrap(`<rect x="20" y="60" width="60" height="16" fill="${c1}" opacity="0.25"/>
    <circle cx="50" cy="45" r="10" fill="none" stroke="${c2}" stroke-width="3"/>
    <path d="M50 55 L50 68" stroke="${c2}" stroke-width="3"/>
    <rect x="22" y="66" width="6" height="10" fill="${c2}"/><rect x="72" y="66" width="6" height="10" fill="${c2}"/>`),
  promenade: (c1, c2) => wrap(`<rect x="18" y="62" width="64" height="6" fill="${c2}"/>
    <path d="M18 62 Q50 44 82 62" fill="none" stroke="${c1}" stroke-width="4" opacity="0.4"/>
    <rect x="30" y="46" width="4" height="16" fill="${c2}"/><rect x="50" y="40" width="4" height="22" fill="${c2}"/><rect x="68" y="48" width="4" height="14" fill="${c2}"/>`),
  viewpoint: (c1, c2) => wrap(`<path d="M20 70 L45 34 L58 54 L68 40 L80 70 Z" fill="${c2}" opacity="0.85"/>
    <circle cx="66" cy="30" r="7" fill="${c1}"/>`),
  cave: (c1, c2) => wrap(`<path d="M20 76 Q20 34 50 30 Q80 34 80 76 Z" fill="${c2}" opacity="0.85"/>
    <ellipse cx="50" cy="76" rx="20" ry="7" fill="${c1}" opacity="0.5"/>`),
  theatre: (c1, c2) => wrap(`<rect x="26" y="44" width="48" height="30" fill="${c2}" opacity="0.85"/>
    <polygon points="26,44 50,26 74,44" fill="${c2}" opacity="0.85"/>
    <rect x="34" y="54" width="10" height="20" fill="${c1}"/><rect x="56" y="54" width="10" height="20" fill="${c1}"/>`),
  market: (c1, c2) => wrap(`<path d="M20 44 L28 30 L72 30 L80 44 Z" fill="${c2}" opacity="0.85"/>
    <rect x="24" y="44" width="52" height="30" fill="${c1}" opacity="0.2"/>
    <rect x="30" y="50" width="12" height="10" fill="${c2}"/><rect x="58" y="50" width="12" height="10" fill="${c2}"/>`),
  museum: (c1, c2) => wrap(`<polygon points="24,46 50,28 76,46" fill="${c2}" opacity="0.85"/>
    <rect x="24" y="46" width="52" height="6" fill="${c2}"/>
    <rect x="30" y="54" width="6" height="20" fill="${c2}"/><rect x="47" y="54" width="6" height="20" fill="${c2}"/><rect x="64" y="54" width="6" height="20" fill="${c2}"/>`),
  monument: (c1, c2) => wrap(`<rect x="44" y="26" width="12" height="40" fill="${c2}" opacity="0.85"/>
    <rect x="34" y="66" width="32" height="8" fill="${c2}"/><rect x="30" y="74" width="40" height="5" fill="${c1}"/>`),
  harbor: (c1, c2) => wrap(`<path d="M20 60 Q50 46 80 60 L74 72 Q50 62 26 72 Z" fill="${c2}" opacity="0.85"/>
    <rect x="47" y="30" width="3" height="30" fill="${c1}"/><path d="M50 32 L64 40 L50 42 Z" fill="${c2}"/>`),
  beach: (c1, c2) => wrap(`<path d="M18 70 Q50 55 82 70 Z" fill="${c2}" opacity="0.4"/>
    <circle cx="66" cy="34" r="10" fill="${c1}"/>
    <path d="M30 70 Q40 50 55 46" fill="none" stroke="${c2}" stroke-width="3"/>`),
  'street-alley': (c1, c2) => wrap(`<path d="M40 24 L28 76 M60 24 L72 76" stroke="${c2}" stroke-width="4" fill="none"/>
    <rect x="20" y="30" width="10" height="20" fill="${c1}" opacity="0.4"/><rect x="70" y="40" width="10" height="20" fill="${c1}" opacity="0.4"/>`),
  garden: (c1, c2) => wrap(`<circle cx="35" cy="44" r="10" fill="${c2}" opacity="0.7"/><circle cx="60" cy="38" r="12" fill="${c2}" opacity="0.7"/><circle cx="50" cy="56" r="11" fill="${c2}" opacity="0.7"/>
    <rect x="47" y="60" width="4" height="16" fill="${c1}"/>`),
  camera: (c1, c2) => wrap(`<rect x="22" y="38" width="56" height="36" rx="4" fill="${c2}" opacity="0.85"/>
    <circle cx="50" cy="56" r="12" fill="${c1}"/><rect x="40" y="30" width="20" height="10" fill="${c2}"/>`),
  boat: (c1, c2) => wrap(`<path d="M22 58 L78 58 L68 72 L32 72 Z" fill="${c2}" opacity="0.85"/>
    <rect x="48" y="30" width="3" height="28" fill="${c1}"/><path d="M51 32 L68 44 L51 44 Z" fill="${c2}" opacity="0.6"/>`),
};

const FOOD_RULES = [
  ['pasta', ['orecchiette', 'pasta', 'makaruli', 'gnocchi', 'njoki', 'rižot', 'risotto']],
  ['pizza-focaccia', ['focaccia', 'panzerott', 'soparnik', 'pizza']],
  ['seafood-raw', ['crudo', 'auster', 'oyster', 'muschel', 'mussel', 'kamenice', 'dagnje', 'urchin', 'seeigel', 'vongole']],
  ['grilled-fish', ['fisch', 'fish', 'branzino', 'orada', 'riba na', 'grillfisch', 'grilled fish']],
  ['meat-cured', ['pršut', 'prosciutto', 'porzina', 'speck', 'schinken', 'ham']],
  ['cheese', ['käse', 'sir', 'cheese', 'burrata']],
  ['soup-stew', ['jota', 'suppe', 'soup', 'gulasch', 'goulash', 'kačamak', 'peka', 'pašticada', 'ragù', 'ragu']],
  ['dessert', ['gelato', 'presnitz', 'fritule', 'rozata', 'priganice', 'dolce', 'dessert', 'kuchen', 'süß']],
  ['wine', ['wein', 'wine', 'vranac', 'pošip', 'plavac', 'primitivo', 'negroamaro', 'prosecco', 'grk']],
  ['coffee', ['kaffee', 'coffee', 'capo', 'espresso', 'illy']],
  ['fried-snack', ['sgagliozze', 'taralli', 'cevapcici', 'burek', 'sokol']],
  ['bread', ['brot', 'bread', 'pekar']],
];

const PLACE_RULES = [
  ['fortress', ['burg', 'fortress', 'castello', 'castle', 'fort', 'festung', 'zitadelle', 'mauer', 'wall']],
  ['cathedral', ['kathedrale', 'dom', 'cathedral', 'kirche', 'church', 'basilica', 'chiesa']],
  ['square', ['piazza', 'platz', 'square', 'trg', 'peristil', 'peristyle']],
  ['promenade', ['lungomare', 'promenade', 'riva', 'ufer', 'seafront', 'waterfront', 'strandpromenade']],
  ['viewpoint', ['aussicht', 'viewpoint', 'panorama', 'belvedere', 'hügel', 'hill', 'srđ', 'marjan', 'ladder', 'leiter']],
  ['cave', ['grotta', 'höhle', 'cave', 'grotte']],
  ['theatre', ['teatro', 'theatre', 'theater', 'petruzzelli']],
  ['market', ['markt', 'market', 'mercato', 'pazar', 'fischmarkt', 'ribarnica']],
  ['museum', ['museum', 'palast', 'palace', 'palazzo']],
  ['monument', ['statue', 'denkmal', 'monument', 'gate', 'tor', 'gitter']],
  ['harbor', ['hafen', 'harbor', 'porto', 'molo', 'pier', 'audace', 'boot', 'boat']],
  ['beach', ['strand', 'beach', 'spiaggia', 'bačvice']],
  ['street-alley', ['gasse', 'alley', 'strada', 'street', 'arco basso', 'altstadt', 'stradun']],
  ['garden', ['garten', 'park', 'giardino', 'lokrum']],
];

function classify(text, rules, fallback) {
  const t = String(text || '').toLowerCase();
  const hits = [];
  for (const [key, kws] of rules) {
    if (kws.some(k => t.includes(k))) hits.push(key);
    if (hits.length >= 3) break;
  }
  if (hits.length === 0) hits.push(fallback);
  return hits.slice(0, 3);
}

function pickFoodIcons(item) {
  const keys = classify(`${item.name} ${item.desc}`, FOOD_RULES, 'bread');
  if (keys.length < 2) keys.push('wine');
  return keys.slice(0, 3);
}

function pickPlaceIcons(item) {
  const keys = classify(`${item.name} ${item.desc}`, PLACE_RULES, 'monument');
  if (keys.length < 2) keys.push('camera');
  return keys.slice(0, 3);
}

function renderIcon(key, c1 = '#0E7C86', c2 = '#0B2E4F') {
  const fn = ICONS[key] || ICONS.monument;
  return fn(c1, c2);
}

module.exports = { renderIcon, pickFoodIcons, pickPlaceIcons, ICONS };

'use strict';
/* Minimal flat-silhouette skyline illustrations per port — hand-drawn SVG,
   no external image assets needed. viewBox 0 0 800 180. */

function wrap(inner, vb = '0 0 800 180') {
  return `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width:100%;height:100%">${inner}</svg>`;
}

const skylines = {
  triest: (c = '#0B2E4F') => wrap(`
    <rect x="0" y="150" width="800" height="30" fill="${c}"/>
    <rect x="20" y="120" width="60" height="60" fill="${c}"/>
    <polygon points="30,120 50,95 70,120" fill="${c}"/>
    <rect x="120" y="100" width="26" height="80" fill="${c}"/>
    <rect x="150" y="110" width="26" height="70" fill="${c}"/>
    <circle cx="330" cy="118" r="30" fill="${c}"/>
    <rect x="300" y="118" width="60" height="62" fill="${c}"/>
    <rect x="322" y="70" width="16" height="48" fill="${c}"/>
    <polygon points="330,55 340,70 320,70" fill="${c}"/>
    <rect x="430" y="105" width="18" height="75" fill="${c}"/>
    <rect x="452" y="95" width="18" height="85" fill="${c}"/>
    <rect x="474" y="112" width="18" height="68" fill="${c}"/>
    <rect x="600" y="60" width="10" height="120" fill="${c}"/>
    <rect x="560" y="130" width="120" height="50" fill="${c}"/>
    <rect x="592" y="40" width="36" height="20" fill="${c}"/>
    <rect x="700" y="118" width="30" height="62" fill="${c}"/>
    <rect x="740" y="128" width="40" height="52" fill="${c}"/>
  `),
  bari: (c = '#0B2E4F') => wrap(`
    <rect x="0" y="152" width="800" height="28" fill="${c}"/>
    <rect x="40" y="120" width="70" height="60" fill="${c}"/>
    <rect x="55" y="90" width="14" height="34" fill="${c}"/>
    <rect x="90" y="90" width="14" height="34" fill="${c}"/>
    <circle cx="70" cy="80" r="7" fill="${c}"/>
    <circle cx="97" cy="80" r="7" fill="${c}"/>
    <ellipse cx="230" cy="118" rx="46" ry="30" fill="${c}"/>
    <rect x="184" y="118" width="92" height="62" fill="${c}"/>
    <circle cx="230" cy="90" r="6" fill="${c}"/>
    <rect x="340" y="100" width="120" height="80" fill="${c}"/>
    <rect x="355" y="70" width="16" height="30" fill="${c}"/>
    <rect x="430" y="70" width="16" height="30" fill="${c}"/>
    <rect x="500" y="128" width="200" height="52" fill="${c}"/>
    <rect x="520" y="105" width="18" height="23" fill="${c}"/>
    <rect x="560" y="95" width="18" height="33" fill="${c}"/>
    <rect x="600" y="105" width="18" height="23" fill="${c}"/>
    <rect x="640" y="98" width="18" height="30" fill="${c}"/>
    <rect x="730" y="132" width="50" height="48" fill="${c}"/>
  `),
  dubrovnik: (c = '#0B2E4F') => wrap(`
    <polygon points="0,180 0,140 60,90 130,140 130,180" fill="${c}"/>
    <rect x="55" y="70" width="20" height="70" fill="${c}"/>
    <polygon points="45,70 65,45 85,70" fill="${c}"/>
    <rect x="140" y="120" width="500" height="60" fill="${c}"/>
    <rect x="150" y="95" width="16" height="30" fill="${c}"/>
    <rect x="190" y="90" width="16" height="35" fill="${c}"/>
    <rect x="230" y="95" width="16" height="30" fill="${c}"/>
    <rect x="270" y="88" width="18" height="37" fill="${c}"/>
    <rect x="312" y="95" width="16" height="30" fill="${c}"/>
    <rect x="352" y="90" width="16" height="35" fill="${c}"/>
    <rect x="392" y="95" width="16" height="30" fill="${c}"/>
    <rect x="432" y="88" width="18" height="37" fill="${c}"/>
    <rect x="474" y="95" width="16" height="30" fill="${c}"/>
    <rect x="514" y="90" width="16" height="35" fill="${c}"/>
    <rect x="554" y="95" width="16" height="30" fill="${c}"/>
    <rect x="594" y="90" width="16" height="35" fill="${c}"/>
    <polygon points="660,180 660,130 720,80 780,130 780,180" fill="${c}"/>
    <rect x="705" y="60" width="18" height="70" fill="${c}"/>
    <polygon points="694,60 714,35 734,60" fill="${c}"/>
  `),
  kotor: (c = '#0B2E4F') => wrap(`
    <polygon points="0,180 40,80 90,150 140,40 200,150 260,60 320,150 380,20 440,150 500,90 800,180"
      fill="none" stroke="${c}" stroke-width="6" stroke-linejoin="round"/>
    <polygon points="0,180 40,80 90,150 140,40 200,150 260,60 320,150 380,20 440,150 500,90 800,180 800,180 0,180"
      fill="${c}" opacity="0.12"/>
    <rect x="0" y="155" width="220" height="25" fill="${c}"/>
    <rect x="20" y="130" width="16" height="30" fill="${c}"/>
    <rect x="55" y="125" width="16" height="35" fill="${c}"/>
    <rect x="90" y="132" width="16" height="28" fill="${c}"/>
    <rect x="130" y="128" width="16" height="32" fill="${c}"/>
    <circle cx="180" cy="140" r="14" fill="${c}"/>
    <rect x="155" y="140" width="50" height="20" fill="${c}"/>
  `),
  split: (c = '#0B2E4F') => wrap(`
    <rect x="0" y="150" width="800" height="30" fill="${c}"/>
    <rect x="30" y="110" width="600" height="70" fill="${c}"/>
    <rect x="60" y="80" width="20" height="30" fill="${c}"/>
    <rect x="140" y="80" width="20" height="30" fill="${c}"/>
    <rect x="220" y="80" width="20" height="30" fill="${c}"/>
    <rect x="300" y="80" width="20" height="30" fill="${c}"/>
    <rect x="450" y="80" width="20" height="30" fill="${c}"/>
    <rect x="530" y="80" width="20" height="30" fill="${c}"/>
    <rect x="600" y="80" width="20" height="30" fill="${c}"/>
    <rect x="352" y="50" width="26" height="130" fill="${c}"/>
    <polygon points="352,50 365,20 378,50" fill="${c}"/>
    <rect x="360" y="30" width="10" height="16" fill="${c}"/>
    <rect x="670" y="130" width="90" height="50" fill="${c}"/>
    <path d="M 670 130 Q 715 90 760 130" fill="none" stroke="${c}" stroke-width="10"/>
  `),
  ship: (c = '#0B2E4F') => wrap(`
    <path d="M 40 120 L 760 120 L 720 165 L 90 165 Z" fill="${c}"/>
    <rect x="120" y="60" width="500" height="60" fill="${c}"/>
    <rect x="150" y="40" width="60" height="24" fill="${c}"/>
    <rect x="230" y="30" width="60" height="34" fill="${c}"/>
    <rect x="310" y="40" width="60" height="24" fill="${c}"/>
    <rect x="430" y="20" width="14" height="45" fill="${c}"/>
    <rect x="500" y="35" width="70" height="29" fill="${c}"/>
    <path d="M 0 165 Q 50 150 100 165 T 200 165 T 300 165 T 400 165 T 500 165 T 600 165 T 700 165 T 800 165"
      fill="none" stroke="${c}" stroke-width="6" opacity="0.35"/>
  `, '0 0 800 180'),
  wave: (c = '#0E7C86') => wrap(`
    <path d="M 0 90 Q 100 40 200 90 T 400 90 T 600 90 T 800 90 L 800 180 L 0 180 Z" fill="${c}" opacity="0.15"/>
    <path d="M 0 120 Q 100 70 200 120 T 400 120 T 600 120 T 800 120 L 800 180 L 0 180 Z" fill="${c}" opacity="0.25"/>
  `),
};

module.exports = skylines;

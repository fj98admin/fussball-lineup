'use strict';
const fs = require('fs');
const path = require('path');

const PORT_ORDER = ['triest', 'bari', 'dubrovnik', 'kotor', 'split'];
const ports = PORT_ORDER.map(k => require(path.join(__dirname, 'data', `${k}.js`)));

const strip = (s) => String(s ?? '')
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/\s+\n/g, '\n')
  .trim();

function stars(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }

function portMarkdown(d) {
  let md = `\n\n---\n\n# ${d.name} (${d.country})\n\n*${d.tagline}*\n\n`;
  md += `**Action:** ${stars(d.ratings.action)} · **Kulinarik:** ${stars(d.ratings.kulinarik)} · **Fotospots:** ${stars(d.ratings.fotospots)} · **Kreuzfahrtgeeignet:** ${stars(d.ratings.kreuzfahrt)}\n\n`;
  md += Object.entries(d.quickFacts).map(([k, v]) => `- **${k}:** ${strip(v)}`).join('\n') + '\n\n';
  md += `## Ankunft & Orientierung\n\n${strip(d.arrivalInfobox)}\n\n`;

  md += `## Highlights & Sehenswürdigkeiten\n\n`;
  d.highlights.forEach(h => {
    md += `### ${h.name}\n${strip(h.desc)}\n\n`;
    if (h.history) md += `*Geschichte:* ${strip(h.history)}\n\n`;
    md += `Beste Zeit: ${strip(h.time)} · Foto-Tipp: ${strip(h.photoTip)}\n${strip(h.maps)}\n\n`;
  });

  md += `## Kulinarik — Was man essen muss\n\n`;
  md += `| Gericht | Beschreibung | Preis | Wo | Tipp |\n|---|---|---|---|---|\n`;
  d.dishes.forEach(dd => {
    md += `| ${dd.name} | ${strip(dd.desc)} | ${dd.price} | ${strip(dd.where)} | ${strip(dd.tip || '')} |\n`;
  });
  if (d.culinaryNote) md += `\n${strip(d.culinaryNote)}\n`;

  md += `\n## Restaurants — Top 5\n\n`;
  d.restaurants.forEach(r => {
    md += `**${r.name}** _(${r.category})_ — ${r.area}${r.rating ? `, ${r.rating}` : ''} — ${r.price}\n${strip(r.note)}${r.pick ? ` *Bestellen:* ${strip(r.pick)}` : ''}\n\n`;
  });
  if (d.drinksNote) md += `${strip(d.drinksNote)}\n\n`;

  md += `## Aktivitäten — Top 3\n\n`;
  d.activities.forEach((a, i) => {
    md += `${i + 1}. ${a.emoji} **${a.name}** — ${a.price}, ${a.duration}\n   ${strip(a.desc)}\n   *Warum:* ${strip(a.why)}\n   ${strip(a.link || '')}\n\n`;
  });
  if (d.activityNote) md += `${strip(d.activityNote)}\n\n`;

  md += `## Top 10 Fotospots\n\n`;
  d.photoSpots.forEach(s => {
    md += `${s.n}. **${s.name}** — ${strip(s.time)}, ${strip(s.dir)}. ${strip(s.why)}\n`;
  });

  md += `\n## Zeitplan — ein perfekter Hafentag\n\n`;
  d.itinerary.forEach(i => { md += `- **${i.time}** — ${strip(i.text)}\n`; });
  md += `\n**Plan A (perfektes Wetter):** ${strip(d.planA)}\n\n`;
  md += `**Plan B (Wind & Regen):** ${strip(d.planB)}\n\n`;
  md += `**Plan C (ohne Ausflug):** ${strip(d.planC)}\n\n`;

  md += `## Budget\n\nLow: ${d.budget.low} · Normal: ${d.budget.normal} · Premium: ${d.budget.premium}\n\n`;
  md += `## Praktisches\n\n${strip(d.practicalHtml)}\n\n`;
  md += `## Für Alleinreisende\n\n${strip(d.soloHtml)}\n\n`;
  if (d.shoppingHtml) md += `## Shopping\n\n${strip(d.shoppingHtml)}\n\n`;

  return md;
}

function main() {
  let md = `# MEIN SCHIFF 4 — ADRIA 2026\n## Premium Reiseführer für Triest · Bari · Dubrovnik · Kotor · Split\n\n`;
  md += `*Persönlicher Guide für Action, Kulinarik, Fotospots und authentische Erlebnisse — Anfang August 2026.*\n\n`;
  md += `**Route:** Triest → Seetag → Bari → Dubrovnik → Kotor → Split → Seetag → Triest\n\n`;
  md += `---\n\n## Inhaltsverzeichnis\n\n`;
  md += `1. Reisevorbereitung\n2. Mein Schiff 4\n3. Die Häfen (Triest, Bari, Dubrovnik, Kotor, Split)\n4. Praktisches & Listen\n\n`;

  md += `\n\n---\n\n# Kapitel 1 — Reisevorbereitung\n\n`;
  md += `## Die Route\n\nAcht Tage, sieben Nächte, fünf Häfen und zwei Seetage.\n\n`;
  md += `| Tag | Hafen | Land |\n|---|---|---|\n| 1 | Triest (Einschiffung) | Italien |\n| 2 | Seetag | — |\n| 3 | Bari | Italien |\n| 4 | Dubrovnik | Kroatien |\n| 5 | Kotor | Montenegro |\n| 6 | Split | Kroatien |\n| 7 | Seetag | — |\n| 8 | Triest (Ausschiffung) | Italien |\n\n`;
  md += `## Wetter im August\n\n28–34 °C Tageshöchstwerte, Wassertemperatur 24–27 °C, trockenster Monat des Jahres, aber kurze Nachmittagsgewitter möglich.\n\n`;
  md += `## Packliste\n\n**Wasseraktivitäten:** Schnelltrocknende Badebekleidung, Rash Guard, Wasserschuhe, kleiner Dry Bag, reef-safe Sonnencreme.\n\n**Fotografie:** Kamera/Smartphone, Polfilter, Ersatzakku, wasserdichte Handyhülle.\n\n**Hitze:** Leichte Kleidung, Regenjacke, Hut, SPF 50, Wasserflasche.\n\n**Bordabende:** 1–2 Smart-Casual-Outfits, bequeme Schuhe.\n\n`;
  md += `## Budget, Trinkgeld & Währung\n\nTagesbudget an Land: Low €90–110 / Normal €110–150 / Premium €200+.\n\nAn Bord (TUI Cruises): kein automatischer Trinkgeld-Zuschlag, bereits im Premium-All-Inclusive-Preis enthalten. An Land: optional, 5–10% üblich.\n\nWährung: Euro in allen drei Ländern (Italien, Kroatien seit 2023, Montenegro einseitig seit 2002). Bargeld trotzdem wichtig, v.a. in Kotor (~€60–80 empfohlen).\n\n`;
  md += `## Internet, WLAN & Apps\n\nTUI-Pakete: SurfLight 1GB/€15 bis SurfMax 7 Tage/€175. **Wichtig:** Montenegro liegt außerhalb der EU-Roaming-Zone — Datenroaming am Kotor-Tag deaktivieren, eSIM oder Offline-Karten nutzen.\n\nEmpfohlene Apps: Organic Maps (offline), Google Translate, GetYourGuide, Mein Schiff App, Windy/Wetter.com.\n\n`;
  md += `## Tipps für Alleinreisende\n\nAlleinreisendentreff am ersten Seetag, freie Tischwahl im Atlantik, Bartheke als sozialer Treffpunkt. Einzelkabinen-Zuschlag direkt bei TUI erfragen.\n\n`;

  md += `\n\n---\n\n# Kapitel 2 — Mein Schiff 4\n\n`;
  md += `**Schiffsdaten:** 295 m Länge, ~99.500 BRZ, ~2.506 Gäste, Baujahr 2015 (Meyer Turku), Refit Februar 2025.\n\n`;
  md += `## Bars\n\n- **Schau Bar** (Deck 5) — Kronleuchter, Glasbrücke, Live-Musik\n- **Diamant Bar** — Aperitif/Digestif am Heck (nicht im All-Inclusive)\n- **Café Lounge** — ab 7 Uhr, ruhigste Bar an Bord\n- **Außenalster Bar & Grill** (Deck 14) — Sonnenuntergangsplatz\n\n`;
  md += `## Restaurants\n\n- **Atlantik & Anckelmannsplatz** — inklusive, freie Sitzplatzwahl\n- **Hanami** — Sushi, mitentwickelt von Tim Raue\n- **Surf & Turf** — Steakhouse mit Grilltischen\n- **La Spezia & Bistro La Vue** — italienisch/französisch\n\n`;
  md += `## Fitness, Spa & Pool\n\nFitnessraum, ~280m Joggingstrecke, 5 Saunen (im All-Inclusive enthalten), 25m Außenpool + Innenpool.\n\n`;
  md += `## Shows\n\nHauptheater (3 Decks, ~1.000 Plätze), **Klanghaus** (300-Plätze-Kammermusiksaal, einzigartig auf Mein Schiff 3 & 4).\n\n`;
  md += `## Die besten Fotoplätze an Bord\n\n**Einlaufen Kotor** ist der Bordfoto-Moment der Reise — 30 Minuten vor Ankunft an Deck 14/15 (Bug) für die Durchfahrt der Verige-Meerenge. Dubrovnik dagegen bietet keinen Bordfoto-Moment (Anlegestelle Gruž, 3km von der Altstadt) — das beste Foto entsteht dort an Land.\n\n`;

  md += `\n\n---\n\n# Kapitel 3 — Die Häfen\n`;
  ports.forEach(p => { md += portMarkdown(p); });

  md += `\n\n---\n\n# Kapitel 4 — Praktisches & Listen\n\n`;
  md += `## Kajak-Vergleich: Dubrovnik vs. Kotor\n\n**Dubrovnik:** offene Adria-Küstenpaddelei unter der Stadtmauer, Höhlenstopp, Lokrum-Runde — "unter den GoT-Mauern paddeln".\n\n**Kotor:** ruhige, fjordartige Bucht, anfängerfreundlicher, führt zur 500 Jahre alten Insel-Kirche Our Lady of the Rocks.\n\n`;
  md += `## Für Alleinreisende — die Übersicht\n\n| Ort | Bester Social-Spot |\n|---|---|\n| An Bord | Bartheke + Alleinreisendentreff |\n| Triest | Café-Terrassen Piazza Unità / Canal Grande |\n| Bari | Foodtour, Kochkurs, Fahrradtour |\n| Dubrovnik | Buža Bar |\n| Kotor | Hostelbars in der Altstadt |\n| Split | Bačvice Beach |\n\n`;
  md += `## Notfall\n\n**112** — EU-weiter Notruf, funktioniert in Italien, Kroatien und Montenegro. Bordarzt: 24/7 über die Rezeption. Auslandskrankenversicherung mit Rücktransport empfohlen (Montenegro: kein EU-Land, EHIC gilt nicht).\n\n`;

  md += `## Top 25 Restaurants\n\n`;
  ports.forEach(p => p.restaurants.forEach(r => { md += `- **${r.name}** (${p.name}, ${r.category}) — ${r.price}\n`; }));

  md += `\n## Top Bars, Cafés & Rooftops\n\n- Schau Bar, Diamant Bar, Café Lounge, Außenalster Bar & Grill (Mein Schiff 4)\n`;
  ports.forEach(p => p.restaurants.forEach(r => { if (/bar|café|cafe|rooftop|cocktail|frühstück|gelato/i.test(r.category)) md += `- **${r.name}** (${p.name}, ${r.category})\n`; }));

  md += `\n## Top 25 Fotospots\n\n`;
  ports.forEach(p => p.photoSpots.slice(0, 5).forEach(s => { md += `- **${s.name}** (${p.name}) — ${strip(s.time)}\n`; }));

  md += `\n## Top Aktivitäten\n\n`;
  ports.forEach(p => p.activities.forEach(a => { md += `- ${a.emoji} **${a.name}** (${p.name}) — ${a.price}\n`; }));

  md += `\n## Top 10 Gerichte\n\n`;
  ports.forEach(p => p.dishes.slice(0, 2).forEach(d => { md += `- **${d.name}** (${p.name}) — ${d.price}\n`; }));

  md += `\n## Top Getränke\n\n- Capo in b (Triest) · Primitivo & Negroamaro (Bari) · Pošip & Plavac Mali (Dubrovnik/Split) · Vranac (Kotor) · Aperitivo-Spritz (Triest) · Cocktails an der Diamant Bar (Mein Schiff 4)\n\n`;

  md += `\n\n---\n\n## Abschluss — Die persönliche Empfehlung\n\n`;
  md += `**Der beste Ausflug der ganzen Reise:** Kotor — die Kombination aus Festungsaufstieg im Morgenlicht und Speedboot zur Blauen Grotte ist konkurrenzlos.\n\n`;
  md += `**Lohnt sich wirklich:** Foodtour Bari, Festung Kotor bei Sonnenaufgang, Stadtmauer Dubrovnik direkt bei Öffnung, Blue Lagoon Split.\n\n`;
  md += `**Eher vorsichtig einplanen:** Cetina-Rafting Split (Zeitrisiko), Dubrovnik am frühen Nachmittag (Hitze + Andrang), Feinschmecker-Restaurants ohne Reservierung.\n\n`;
  md += `> "Die Adria in einer Woche ist kein Widerspruch — man muss nur wissen, wann man rennt und wann man Kaffee trinkt."\n\n`;

  md += `\n---\n\n*Mein Schiff® ist eine Marke der TUI Cruises GmbH. Dieser Reiseführer ist ein unabhängig erstelltes Fan-/Reisebegleitwerk und steht in keiner Verbindung zu TUI Cruises GmbH. Preise, Öffnungszeiten und Verfügbarkeiten bitte vor der Reise gegenprüfen.*\n`;

  const out = path.join(__dirname, '..', 'dist', 'Mein-Schiff-4-Adria-2026-Reisefuehrer.md');
  fs.writeFileSync(out, md, 'utf8');
  console.log(`Markdown written: ${out} (${md.length} chars)`);
}

main();

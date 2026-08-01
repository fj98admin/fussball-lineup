'use strict';
const C = require('../components');
const SK = require('../skylines');

function shipHeroPage() {
  const ship = SK.ship('#0E7C86');
  return C.page(`
    <div style="height:90mm; background:linear-gradient(180deg, var(--navy) 0%, var(--navy-deep) 100%); position:relative; color:var(--white); padding:16mm;">
      <div class="eyebrow on-dark">Kapitel 2</div>
      <h1 class="chapter-title">Mein Schiff 4</h1>
      <div style="position:absolute; bottom:0; left:0; right:0; height:40mm; opacity:0.7;">${ship}</div>
    </div>
    <div class="page-pad" style="position:relative; padding-top:6mm;">
      <div class="grid-3">
        ${C.card('<div class="card-title">295 m</div><p class="tiny">Länge · ~99.500 BRZ · Baujahr 2015 (Meyer Turku)</p>')}
        ${C.card('<div class="card-title">~2.506 Gäste</div><p class="tiny">1.253 Kabinen · Deck 13 ausgelassen (springt auf 14)</p>')}
        ${C.card('<div class="card-title">Refit Feb. 2025</div><p class="tiny">Neue Propeller (4–7% Treibstoffersparnis), Pool & Sauna erneuert</p>')}
      </div>
      <div class="mt-4">${C.infobox('Premium All-Inclusive, deutschsprachig', '<p>TUI Cruises positioniert Mein Schiff als deutschsprachige Premium-Marke — ca. 70–80% deutsch/österreichisch/schweizerische Gäste, Deutsch ist Bordsprache. Getränke in Spezialitätenrestaurants und der Diamant Bar sind <b>nicht</b> im All-Inclusive-Preis enthalten.</p>', 'teal', 'ℹ️')}</div>
      <div class="mt-4">${C.sectionTitle('Deck-Tipps', '🧭')}</div>
      ${C.table(['Deck', 'Was dort ist'], [
        ['5', 'Spezialitätenrestaurants La Spezia & Surf and Turf, Schau Bar'],
        ['12', 'Neu gestalteter Indoor-Poolbereich (Refit 2025)'],
        ['14', '„Große Freiheit" — Diamant-Glasfassade, Diamant Bar, Außenalster Bar & Grill'],
        ['15', 'Sonnendeck — beste Aussicht, Bug-Ausguck, neue Relax-Inseln'],
        ['Spa', 'Nordisch inspiriert, 5 Saunen — genaues Deck vor Ort im Bordprogramm prüfen'],
      ])}
    </div>
  `, { noPad: true, footerRight: 'Mein Schiff 4' });
}

function barsRestaurantsPage() {
  return C.page(`
    ${C.sectionTitle('Bars an Bord', '🍹')}
    <div class="grid-2">
      ${C.card('<div class="card-title">Schau Bar</div><p class="tiny">Deck 5 · ~250 Plätze, großer Kronleuchter, gläserne Brücke, teils Live-Musik/Tanz.</p>', { tag: 'Show', tagVariant: 'coral' })}
      ${C.card('<div class="card-title">Diamant Bar</div><p class="tiny">Aperitif/Digestif in der beleuchteten Glasfassade am Heck. Getränke nicht im All-Inclusive enthalten.</p>', { tag: 'Gehoben', tagVariant: 'gold' })}
      ${C.card('<div class="card-title">Café Lounge</div><p class="tiny">Ab 7 Uhr, Barista-Kaffee mit Meerblick — die ruhigste Bar an Bord, ideal für Alleinreisende am Morgen.</p>', { tag: 'Ruhig' })}
      ${C.card('<div class="card-title">Außenalster Bar & Grill</div><p class="tiny">Deck 14, Heck — lässige Außenbar, beliebter Sonnenuntergangsplatz.</p>', { tag: 'Sonnenuntergang', tagVariant: 'coral' })}
    </div>
    <div class="mt-6">${C.sectionTitle('Restaurants', '🍴')}</div>
    <div class="grid-2">
      ${C.card('<div class="card-title">Atlantik & Anckelmannsplatz</div><p class="tiny">Hauptrestaurant & Hauptbuffet — im Kreuzfahrtpreis inklusive, freie Sitzplatzwahl.</p>', { tag: 'Inklusive' })}
      ${C.card('<div class="card-title">Hanami</div><p class="tiny">Sushi & japanische Spezialitäten, mitentwickelt von Sternekoch Tim Raue. Aufpreis, Reservierung empfohlen.</p>', { tag: 'Spezialität', tagVariant: 'gold' })}
      ${C.card('<div class="card-title">Surf & Turf</div><p class="tiny">Steakhouse mit Grilltischen für 4–6 Personen und Privatkoch. Täglich 18:30–23 Uhr, Pier Deck.</p>', { tag: 'Spezialität', tagVariant: 'gold' })}
      ${C.card('<div class="card-title">La Spezia & Bistro La Vue</div><p class="tiny">Italienisch/mediterran (nur abends 18–22 Uhr) bzw. französisch angehauchte Fischküche.</p>', { tag: 'Spezialität', tagVariant: 'gold' })}
    </div>
    <p class="tiny mt-2">Reservierung für Spezialitätenrestaurants über die Mein-Schiff-App bis ~4 Monate vorab möglich.</p>
  `, { footerRight: 'Mein Schiff 4' });
}

function wellnessShowsPage() {
  return C.page(`
    ${C.sectionTitle('Fitness, Spa & Pool', '🧖'  )}
    <div class="grid-2">
      ${C.card('<div class="card-title">Fitnessraum & Joggingstrecke</div><p class="small">Laufbänder, Crosstrainer, Kraftstationen. ~280 m Außendeck-Runde, geöffnet ca. 7–9 Uhr und 19–21 Uhr.</p>')}
      ${C.card('<div class="card-title">Spa & Sauna</div><p class="small">5 Saunen (finnische Panoramasauna, Kräuterdampfbad, Biosauna, Infrarot, Salzsauna). Saunanutzung im Premium-All-Inclusive-Preis enthalten. Mindestalter 12 Jahre.</p>')}
      ${C.card('<div class="card-title">Pools</div><p class="small">25 m Außenpool am Bug + 2 Whirlpools; separater Innenpool am Heck (2025 neu gestaltet) + 2 weitere Whirlpools für jedes Wetter.</p>')}
      ${C.card('<div class="card-title">Sportdeck</div><p class="small">Fußball-/Basketballplatz. Minigolf/Kletterwand für Mein Schiff 4 nicht bestätigt — vor Ort im Deckplan prüfen.</p>')}
    </div>
    <div class="mt-6">${C.sectionTitle('Shows & Entertainment', '🎭')}</div>
    <div class="grid-2">
      ${C.card('<div class="card-title">Hauptheater</div><p class="small">Über drei Decks, ~1.000 Plätze, moderne Bühnentechnik — die großen Abendshows.</p>')}
      ${C.card('<div class="card-title">Klanghaus</div><p class="small">Einzigartig auf Mein Schiff 3 & 4: 300-Plätze-Kammermusiksaal — die „einzige philharmonische Kammermusikbühne auf See". Unbedingt einmal reinschauen.</p>', { tag: 'Highlight', tagVariant: 'coral' })}
    </div>
    <p class="small mt-2">Weiteres Programm: Vortragsreihen, Verkostungen, Cocktail-Workshops, Shantychor, Malkurse, Shuffleboard-Turniere.</p>
  `, { footerRight: 'Mein Schiff 4' });
}

function fotoplaetzeSoloPage() {
  return C.page(`
    ${C.sectionTitle('Ruhezonen & die besten Fotoplätze an Bord', '📸')}
    <div class="grid-2">
      ${C.infobox('Ruhezonen', '<p>Café Lounge (Heck, ab 7 Uhr) · Sonnendeck/Ausguck Deck 15 (Bug) · Sauna/Spa-Landschaft · Innenpool Deck 12 an vollen Seetagen.</p>', 'teal', '🧘', { dense: true })}
      ${C.infobox('Pooldeck im Golden Hour Licht', '<p>Früh morgens vor dem Ansturm oder zum Sonnenuntergang — klassisches Liegestuhl-und-Architektur-Motiv.</p>', 'gold', '🌅', { dense: true })}
    </div>
    <div class="mt-2">${C.infobox('Einlaufen Kotor — DER Bordfoto-Moment der Reise', `
      <p>Die Durchfahrt der engen <b>Verige-Meerenge</b> in die Bucht von Kotor ist das fotografische Highlight der gesamten Kreuzfahrt. <b>Mindestens 30 Minuten vor der geplanten Ankunft</b> an einem bugseitigen Außendeck (Deck 14/15) postieren. <b>Motive:</b> der Glockenturm der St.-Nikolaus-Kirche in Perast, die beiden Inselchen Sveti Đorđe und Our Lady of the Rocks, die scheinbar auf dem Wasser schwimmen, und Kotors uralte Stadtmauer, die sich den Berg hinaufzieht. Frühmorgens sind die Lichtbedingungen meist am besten.</p>
    `, 'coral', '⚓', { dense: true })}</div>
    <div class="grid-2 mt-2">
      ${C.infobox('Dubrovnik — kein Bordfoto-Moment', '<p>Die meisten großen Schiffe (auch Mein Schiff 4) legen in Gruž an, ca. 3 km von der Altstadt entfernt — das dramatische „Vorbeifahren an der Stadtmauer" gibt es hier nicht vom Deck aus. Das beste Foto entsteht an Land (Stadtmauer, Mt Srđ).</p>', 'navy', '🏰', { dense: true })}
      ${C.infobox('Auslaufen', '<p>Heck-Decks bieten meist die schönere Blickrichtung auf die zurückweichende Küste — welche Schiffsseite optimal ist, hängt vom jeweils zugewiesenen Liegeplatz ab. Im Bordprogramm oder bei der Rezeption erfragen.</p>', 'gold', '🌊', { dense: true })}
    </div>

    <div class="mt-3">${C.sectionTitle('Für Alleinreisende an Bord', '🧑‍🤝‍🧑')}</div>
    <div class="grid-2">
      ${C.card('<div class="card-title">Alleinreisendentreff</div><p class="tiny">Organisiertes Treffen für Solo-Gäste, meist am ersten Seetag — die beste Gelegenheit, andere Alleinreisende kennenzulernen und sich für Landgänge oder Abendessen zu verabreden.</p>', { dense: true })}
      ${C.card('<div class="card-title">Freie Sitzplatzwahl</div><p class="tiny">Keine feste Tischzuteilung im Atlantik — genuin solo-freundlich. Auf manchen Abfahrten wird zusätzlich ein reservierter Tisch für Alleinreisende angeboten.</p>', { dense: true })}
      ${C.card('<div class="card-title">Die Bartheke als sozialer Ort</div><p class="tiny">An der Theke sitzen statt an einem separaten Tisch — Barkeeper gelten als „kommunikativster Ort an Bord" und stellen Solo-Gäste oft einander vor.</p>', { dense: true })}
      ${C.card('<div class="card-title">Einzelkabinen-Realität</div><p class="tiny">Mein Schiff 4 hat vermutlich keine echten Solo-Kabinen — meist Einzelbelegungszuschlag auf Doppelkabine, für die konkrete Abfahrt direkt bei TUI erfragen.</p>', { dense: true })}
    </div>
    <div class="mt-2">${C.pullQuote('Der erste Seetag entscheidet oft über die ganze Woche — wer zum Alleinreisendentreff geht, isst am zweiten Abend selten mehr allein.', 'Praxistipp')}</div>
  `, { footerRight: 'Mein Schiff 4' });
}

function buildShipPages() {
  return [shipHeroPage(), barsRestaurantsPage(), wellnessShowsPage(), fotoplaetzeSoloPage()];
}

module.exports = { buildShipPages };

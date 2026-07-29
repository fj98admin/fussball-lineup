'use strict';
const C = require('../components');
const MAP = require('../mapgen');

function routeOverviewPage() {
  const stops = [
    { x: 12, y: 18, label: 'Triest', day: '1' },
    { x: 22, y: 40, sea: true },
    { x: 30, y: 62, label: 'Bari', day: '3' },
    { x: 62, y: 55, label: 'Dubrovnik', day: '4' },
    { x: 66, y: 68, label: 'Kotor', day: '5' },
    { x: 55, y: 35, label: 'Split', day: '6' },
    { x: 35, y: 25, sea: true },
    { x: 12, y: 18, label: 'Triest', day: '8' },
  ];
  return C.page(`
    <div class="eyebrow">Kapitel 1 · Reisevorbereitung</div>
    <h2 class="page-title mb-0">Die Route</h2>
    <div class="divider-line"></div>
    <p class="lede mt-2">Acht Tage, sieben Nächte, fünf Häfen und zwei Seetage — eine kompakte Adria-Rundreise, die Italien, Kroatien und Montenegro in einer Woche verbindet.</p>
    <div class="map-frame mt-4" style="height:95mm;">${MAP.routeMap(stops)}</div>
    <div class="grid-3 mt-4">
      ${C.table(['Tag', 'Hafen', 'Land'], [
        ['1', 'Triest (Einschiffung)', 'Italien'],
        ['2', 'Seetag', '—'],
        ['3', 'Bari', 'Italien'],
        ['4', 'Dubrovnik', 'Kroatien'],
        ['5', 'Kotor', 'Montenegro'],
        ['6', 'Split', 'Kroatien'],
        ['7', 'Seetag', '—'],
        ['8', 'Triest (Ausschiffung)', 'Italien'],
      ])}
    </div>
  `, { footerRight: 'Reisevorbereitung' });
}

function wetterPacklistePage() {
  return C.page(`
    ${C.sectionTitle('Wetter im August', '☀️')}
    <div class="grid-3">
      ${C.card('<div class="card-title">28–34 °C</div><p class="tiny">Tageshöchstwerte, Spitzen über 35 °C möglich (v.a. Triest, Bari)</p>')}
      ${C.card('<div class="card-title">24–27 °C</div><p class="tiny">Wassertemperatur — von der nördlichen bis zur südlichen Adria, überall bestens zum Schwimmen</p>')}
      ${C.card('<div class="card-title">Trockenster Monat</div><p class="tiny">Kurze, heftige Nachmittagsgewitter möglich, v.a. landeinwärts — Regenjacke einpacken, aber keine ausgefallenen Tage erwarten</p>')}
    </div>
    <div class="mt-4">${C.sectionTitle('Packliste', '🎒')}</div>
    <div class="grid-2">
      ${C.card(`<div class="card-title">Wasseraktivitäten</div><ul class="list-clean small">
        <li>Schnelltrocknende Badebekleidung (2×)</li>
        <li>Rash Guard / UV-Shirt, Wasserschuhe</li>
        <li>Kleiner Dry Bag für Boote</li>
        <li>Reef-safe Sonnencreme, After-Sun</li>
        <li>Mikrofaser-Handtuch</li>
      </ul>`)}
      ${C.card(`<div class="card-title">Fotografie</div><ul class="list-clean small">
        <li>Kamera/Smartphone + genug Speicher</li>
        <li>Polfilter (hilft bei Wasserglanz, v.a. Kotor-Bucht)</li>
        <li>Ersatzakku / Powerbank</li>
        <li>Wasserdichte Handyhülle für Boote</li>
      </ul>`)}
      ${C.card(`<div class="card-title">Hitze & Mittelmeer</div><ul class="list-clean small">
        <li>Leichte, atmungsaktive Kleidung</li>
        <li>1 packbare Regenjacke</li>
        <li>Hut, gute Sonnenbrille, SPF 50</li>
        <li>Wiederbefüllbare Wasserflasche</li>
      </ul>`)}
      ${C.card(`<div class="card-title">Bordabende & Solo-Reise</div><ul class="list-clean small">
        <li>1–2 Smart-Casual-Outfits fürs Abendessen</li>
        <li>Gepflegte, bequeme Schuhe</li>
        <li>Passkopien digital & getrennt aufbewahrt</li>
        <li>Kleiner Tagesrucksack für Landgänge</li>
      </ul>`)}
    </div>
  `, { footerRight: 'Reisevorbereitung' });
}

function budgetPage() {
  return C.page(`
    ${C.sectionTitle('Tagesbudget an Land', '💶')}
    <p class="small">Realistische Spanne pro Hafentag (1 Aktivität + Essen + Getränke), zusätzlich zum Kreuzfahrtpreis:</p>
    ${C.budgetRow('€90–110', '€110–150', '€200+')}
    <p class="tiny mt-2">Aktivität Kajak/Schnorcheln ~€35–45 · Speedboot/Höhle/Insel-Tour ~€65–90+ · Essen an Land ~€15–30 · Getränke ~€10–20 · Bargeld-Puffer ~€20–30.</p>

    <div class="mt-6">${C.sectionTitle('Trinkgeld', '🙏')}</div>
    <div class="grid-2">
      ${C.infobox('An Bord (TUI Cruises)', '<p>Kein automatischer Trinkgeld-Zuschlag — bereits im Premium-All-Inclusive-Preis enthalten. Optionale Umschläge für einzelne Crewmitglieder an der Rezeption, meist am letzten Abend.</p>', 'teal', '🚢')}
      ${C.infobox('An Land', '<p><b>Italien:</b> optional 5–10%, viele runden nur auf. „Coperto" (€1–3) ist kein Trinkgeld. <b>Kroatien:</b> optional, Aufrunden üblich. <b>Montenegro:</b> ähnlich informell — Bargeld mitführen.</p>', 'gold', '💰')}
    </div>

    <div class="mt-4">${C.sectionTitle('Währung', '💱')}</div>
    <p class="small">Alle drei Länder dieser Route nutzen den <b>Euro</b> — eine praktische Vereinfachung: Italien (EU/Eurozone), Kroatien (Euro seit 1.1.2023), Montenegro (Euro einseitig seit 2002, trotz Nicht-EU-Mitgliedschaft). Bargeld bleibt trotzdem wichtig für kleine Cafés, Märkte und Cash-only-Stopps — insbesondere in Kotor (~€60–80 Bargeld für den Tag empfohlen: Festungseintritt, Perast-Boot).</p>
  `, { footerRight: 'Reisevorbereitung' });
}

function internetPage() {
  return C.page(`
    ${C.sectionTitle('Internet & WLAN an Bord', '📶')}
    ${C.table(['Paket', 'Datenvolumen', 'Preis'], [
      ['SurfLight', '1 GB', '€15'],
      ['SurfFlow', '10 GB', '€75'],
      ['SurfStream', '25 GB (Streaming/Calls)', '€99'],
      ['SurfSocialMedia', 'Unbegrenzt, nur Social Apps', '€49/Kreuzfahrt'],
      ['SurfMax', 'Echte Flatrate, 7 Tage', '€175'],
    ])}
    <p class="tiny">Junior-Suite aufwärts: Internet inklusive. Bord-WLAN gilt als spürbar langsamer als Landverbindungen — für Messaging okay, für Streaming eher SurfMax nötig.</p>

    <div class="mt-4">${C.infobox('Montenegro — wichtige Ausnahme', '<p>Montenegro liegt <b>außerhalb der EU-Roaming-Zone</b>. Standard-EU-Roaming deckt Kotor NICHT automatisch ab — Datenroaming-Gebühren gelten (gedeckelt bei ~€14/GB, viele Anbieter berechnen mehr). <b>Empfehlung:</b> Datenroaming am Kotor-Tag deaktivieren, stattdessen Montenegro-eSIM, Schiffs-WLAN oder Offline-Karten nutzen.</p>', 'coral', '⚠️')}</div>

    <div class="mt-6">${C.sectionTitle('Empfohlene Apps', '📱')}</div>
    <div class="grid-2">
      <ul class="list-clean small">
        <li><b>Organic Maps</b> — offline, kostenlos, OSM-basiert (Nachfolger von Maps.me)</li>
        <li><b>Google Translate</b> — Offline-Sprachpakete Italienisch/Kroatisch vorab laden</li>
        <li><b>GetYourGuide</b> — unabhängige Aktivitätsbuchungen</li>
      </ul>
      <ul class="list-clean small">
        <li><b>Mein Schiff App</b> — Tagesprogramm, Restaurant-Reservierung, Deckplan</li>
        <li><b>Windy / Wetter.com</b> — Wind- und Wetterbedingungen für Wasseraktivitäten</li>
        <li>Währungs-App nicht nötig — alle drei Länder nutzen Euro</li>
      </ul>
    </div>
  `, { footerRight: 'Reisevorbereitung' });
}

function offlineMapsKreuzfahrtPage() {
  return C.page(`
    ${C.sectionTitle('Offline-Karten-Tipp', '🗺️')}
    <p class="small">Gebiete <b>vor der Abreise</b> über Heim-WLAN herunterladen, nicht erst an Bord (begrenzte Bandbreite). Empfohlen: Triest, Bari, Dubrovnik (inkl. Gruž-Hafen), Kotor (inkl. Perast), Split — Download-Bereich großzügiger als geplant wählen, für spontane Abstecher. Bei &gt;30 Tagen vor Abreise: vor Abfahrt erneuern.</p>

    <div class="mt-4">${C.sectionTitle('Allgemeine Kreuzfahrttipps', '🚢')}</div>
    <div class="grid-2">
      ${C.infobox('All-Aboard-Disziplin', '<p>Typisch ~30 Min. vor tatsächlicher Abfahrt — als echte Deadline behandeln. Bei eigenen Ausflügen trägt man bei Verspätung die volle Verantwortung; bei Schiffs-Ausflügen haftet TUI. Faustregel: zeitkritische Aktivitäten (v.a. Kotor, Split-Rafting) eher über das Schiff buchen oder großzügigen Puffer einplanen.</p>', 'navy', '⏱️')}
      ${C.infobox('Foto-Timing', '<p>20–40 Min. vor offizieller Ankunft/Abfahrt an Deck sein — der spannende Teil (Meerenge Kotor, Hafeneinfahrt) passiert vor dem „offiziellen" Zeitpunkt im Programm.</p>', 'gold', '📸')}
      ${C.infobox('Seekrankheit & Sonne', '<p>Eher gemäßigt bei dieser Küstenroute, aber Tabletten/Bänder für die 2 Seetage einpacken. Sonnencreme alle 2 Std. erneuern bei Wasseraktivitäten.</p>', 'teal', '🌊')}
      ${C.infobox('Schiffsausflug vs. unabhängig', '<p>Ähnliche Preisspanne (€50–150). Schiffsausflug = Rückkehr-Garantie; unabhängig = günstiger/flexibler, aber volles Zeitrisiko. Für entspannte Häfen (Bari, Split) unabhängig buchen, für Kotor Puffer einplanen.</p>', 'coral', '🎯')}
    </div>
  `, { footerRight: 'Reisevorbereitung' });
}

function alleinreisendePage() {
  return C.page(`
    ${C.sectionTitle('Tipps für Alleinreisende', '🧑‍🤝‍🧑')}
    <div class="grid-2">
      ${C.card(`<div class="card-title">An Bord</div><p class="small">Freie Tischwahl im Restaurant Atlantik — keine feste Zuteilung, solo-freundlich. Der <b>Alleinreisendentreff</b> am ersten Seetag ist die beste organisierte Gelegenheit, andere Solo-Gäste zu treffen. Praxistipp: an der Bartheke sitzen statt an einem Tisch — Barkeeper stellen Gäste oft einander vor.</p>`)}
      ${C.card(`<div class="card-title">Einzelkabinen-Realität</div><p class="small">Mein Schiff 4 hat vermutlich keine echten Solo-Kabinen (die gibt es v.a. auf neueren Schiffen der Flotte) — meist Einzelbelegungszuschlag auf eine Doppelkabine, der bei Aktionen auf ~20% statt 100%+ sinken kann. Für die konkrete Abfahrt direkt bei TUI nachfragen.</p>`)}
      ${C.card(`<div class="card-title">An Land: Leute kennenlernen</div><p class="small">Kleine Gruppentouren (Foodtour Bari, Kajak Dubrovnik/Kotor) sind der einfachste natürliche Kontaktpunkt. Bačvice Beach in Split gilt als der beste informelle Ort der ganzen Reise, um Reisende und Locals zu treffen.</p>`)}
      ${C.card(`<div class="card-title">Sicherheit</div><p class="small">Alle fünf Häfen dieser Route gelten als sicher für Alleinreisende, auch Frauen. Übliche Vorsicht reicht: Taschendiebstahl in Menschenmengen ist überall das häufigste Risiko, nicht Gewaltkriminalität.</p>`)}
    </div>
    <div class="mt-6">${C.pullQuote('Die beste Reisebegleitung findet man nicht am Buffet, sondern an der Bartheke.', 'Praxistipp aus dem Bordalltag')}</div>
  `, { footerRight: 'Reisevorbereitung' });
}

function buildPrepPages() {
  return [
    routeOverviewPage(),
    wetterPacklistePage(),
    budgetPage(),
    internetPage(),
    offlineMapsKreuzfahrtPage(),
    alleinreisendePage(),
  ];
}

module.exports = { buildPrepPages };

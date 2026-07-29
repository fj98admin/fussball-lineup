'use strict';
module.exports = {
  key: 'split',
  name: 'Split',
  country: 'Kroatien',
  tagline: 'Leben in den Mauern eines Römerpalasts — Kroatiens fußgängerfreundlichster Hafen',
  ratings: { action: 5, kulinarik: 4, fotospots: 4, kreuzfahrt: 5 },
  quickFacts: {
    Liegeplatz: 'Gat Sv. Petra (innen) oder Gat Svetog Duje (außen)*',
    Gehzeit: '5–20 Min. zur Altstadt',
    Tender: 'Nein',
    Landessprache: 'Kroatisch',
  },
  arrivalInfobox: `
    <p><b>Einer der fußgängerfreundlichsten Kreuzfahrthäfen im Mittelmeer.</b> Mein Schiff 4 legt direkt im Stadthafen von Split an, unmittelbar neben der Altstadt. Zwei Liegeplatz-Zonen sind möglich: <b>Gat Sv. Petra (innen)</b> — nur ~5 Min./~490 m zum Silbernen Tor — oder <b>Gat Svetog Duje (außen)</b>, zunehmend von größeren Schiffen genutzt, 15–20 Min. entlang der flachen, schönen Riva-Promenade (kein Shuttle nötig). In beiden Fällen liegt der Diokletianpalast maximal ~1 km/13 Gehminuten entfernt.</p>
    <p><b>Baustellen-Risiko 2026/2027:</b> Mehrjährige Umbauarbeiten am inneren Kai können Anläufe auf den äußeren Liegeplatz umleiten — <b>im Tagesprogramm an Bord unbedingt prüfen</b>, wo genau angelegt wird.</p>
    <p><b>Orientierung:</b> Von jedem Liegeplatz aus die Riva Richtung Osten/Südosten zur hafenseitigen Altstadt-Einfahrt gehen. Die Altstadt ist ein kompaktes Gassenlabyrinth — jede Gasse führt irgendwann zurück zum Peristil oder zur Riva. Bus-/Fährterminal und Taxis bündeln sich direkt am Hafen; Treffpunkte für Tagesausflüge (Rafting/Zipline/Blue Lagoon) liegen meist beim „SPLIT"-Schriftzug nahe dem Busbahnhof.</p>
    <p class="tiny">* Kein Tender-Hafen — das Schiff legt in beiden Fällen direkt an. Exakte Anlegezeiten für 2026 unbestätigt, typischerweise ca. 08:00–17:00/18:00 Uhr — im Bordprogramm prüfen.</p>
  `,
  map: {
    water: [{ x: 0, y: 82 }, { x: 35, y: 76 }, { x: 65, y: 74 }, { x: 100, y: 80 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
    land: [[{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 80 }, { x: 65, y: 74 }, { x: 35, y: 76 }, { x: 0, y: 82 }]],
    route: [{ x: 52, y: 79 }, { x: 50, y: 64 }, { x: 58, y: 54 }, { x: 66, y: 48 }, { x: 74, y: 54 }],
    points: [
      { n: 1, x: 52, y: 79, cat: 'ship', label: 'Schiff (Riva-Hafen)' },
      { n: 2, x: 50, y: 64, cat: 'gate', label: 'Goldenes Tor' },
      { n: 3, x: 58, y: 54, cat: 'sight', label: 'Peristil' },
      { n: 4, x: 66, y: 48, cat: 'sight', label: 'Kathedrale St. Domnius' },
      { n: 5, x: 32, y: 72, cat: 'food', label: 'Fischmarkt/Pazar' },
      { n: 6, x: 10, y: 40, cat: 'photo', label: 'Marjan-Hügel' },
      { n: 7, x: 90, y: 68, cat: 'sight', label: 'Bačvice Beach' },
      { n: 8, x: 28, y: 52, cat: 'practical', label: 'Apotheke/ATM' },
    ],
  },
  qr: {
    routeLabel: "Diocletian's Palace, Split",
    tourismLabel: 'Visit Split',
  },
  orientationNote: `
    ${'<div class="section-title" style="border:none;padding:0"></div>'}
    <div class="infobox coral">
      <div class="infobox-title"><span class="icon">🚶</span>Kürzester Palast-Weg der ganzen Reise</div>
      <p>Split ist DER Fußgänger-Hafen dieser Reise: Der Diokletianpalast liegt in jedem Fall unter 1 km/13 Gehminuten vom Schiff entfernt — kein Bus, kein Shuttle nötig. Nur für den Marjan-Hügel (15–20 Min. Anstieg) oder Bačvice Beach (10–15 Min. östlich der Altstadt) etwas mehr Zeit einplanen.</p>
    </div>
  `,
  highlights: [
    { name: 'Diokletianpalast (UNESCO)', desc: 'Um 295–305 n. Chr. als Alterssitz Kaiser Diokletians erbaut — kein Museum, sondern ein lebendiges Stadtviertel innerhalb römischer Mauern, mit Wohnungen, Läden und Cafés zwischen 1700 Jahre alten Steinen.', history: 'Bonus: Die Substruktionen/Kellergewölbe unter dem Palast dienten „Game of Thrones" als Daenerys\' Thronsaal — Mittelschiff meist frei zugänglich, Seitenhallen ca. €5–10.', time: '07:00–09:00 Uhr oder nach 19:00 Uhr — dann fast menschenleer', photoTip: 'Enge Gassen mit Blick auf die Steinbögen, tief ansetzen', maps: 'Google Maps: „Diocletian\'s Palace Split"' },
    { name: 'Peristil (Peristyle)', desc: 'Der monumentale zentrale Hof des Palasts — rote ägyptische Granitsäulen, schwarze Granit-Sphinx und der Glockenturm der Kathedrale ragt darüber empor. Das fotogenste Zentrum der Altstadt.', time: 'Vor 09:00 Uhr oder beleuchtet am Abend', photoTip: 'Zwischen den Säulen hindurch Richtung Kathedrale/Glockenturm', maps: 'Google Maps: „Peristil Split"' },
    { name: 'Kathedrale St. Domnius & Glockenturm', desc: 'Einst Diokletians eigenes Mausoleum, heute vermutlich die älteste katholische Kathedrale, die noch in ihrer ursprünglichen Bausubstanz steht. Rund 200 Stufen führen den Glockenturm aus dem 13. Jh. hinauf — der beste 360°-Blick der ganzen Stadt.', time: 'Zur Öffnung oder ca. 1 Std. vor Schließung (Mo–Sa 08–20, So 12–18 Uhr, vor Ort prüfen)', photoTip: 'Von der Turmspitze: Dächer im Osten, Hafen/Riva im Süden, Marjan im Westen', maps: 'Google Maps: „Cathedral of Saint Domnius Split" · Ticket ~€10, kombiniert ~€11' },
    { name: 'Riva-Promenade', desc: 'Die palmengesäumte Uferpromenade — Splits Wohnzimmer unter freiem Himmel, gesäumt von Cafés, mit direktem Blick auf die einlaufenden Fähren und Schiffe.', time: 'Früher Morgen (Fischer, Ruhe) oder Sonnenuntergang/blaue Stunde', photoTip: 'Richtung Westen zur Hafeneinfahrt/Marjan', maps: 'Google Maps: „Riva Split Croatia"' },
    { name: 'Marjan-Hügel — Vidilica & Telegrin', desc: 'Bewaldete Halbinsel mit Pinienwald, dem Alten Jüdischen Friedhof (1573) und Eremitagen-Kapellen. Zwei Aussichtspunkte: Vidilica (15–20 Min. Anstieg ab Veli Varoš, Café-Terrasse) und Telegrin (178 m, höchster Punkt, riesige Flagge und Steinkreuz).', time: 'Golden Hour vor Sonnenuntergang — der Blick geht nach Osten über die Stadt', photoTip: 'Weites Panorama über Altstadt, Hafen und Adria', maps: 'Google Maps: „Marjan Hill Vidilica Split"' },
    { name: 'Bačvice Beach', desc: 'Splits sandiger Stadtstrand direkt östlich der Altstadt — Geburtsort von Picigin, dem für die UNESCO-Liste vorgeschlagenen Wasser-Volleyball-Spiel. Tagsüber Familienstrand, abends Beachbar-Meile.', time: 'Früher Morgen (ruhig, goldenes Licht) oder Abend (Stimmung)', photoTip: 'Vom erhöhten Uferweg nach Osten übers Wasser, rosa-goldene Spiegelungen', maps: 'Google Maps: „Bacvice Beach Split"' },
    { name: 'Fischmarkt (Ribarnica) & Pazar', desc: 'Über 120 Jahre alte Art-Nouveau-Markthalle, seit mindestens 1312 wird hier Fisch verkauft. Lokale Legende: Dank einer Schwefelquelle unter der Altstadt soll die Halle angeblich völlig geruchs- und fliegenfrei sein. Gleich nebenan der Pazar (Grünmarkt) mit Obst, Gemüse und warmem Soparnik.', time: 'Vor 09:00 Uhr — dann volles Marktleben', photoTip: 'Verkäuferinnen und Morgenlicht durch die Eisen-/Glaskonstruktion', maps: 'Google Maps: „Fish Market Ribarnica Split"' },
    { name: 'Goldenes Tor & Grgur-Ninski-Statue', desc: 'Das prächtigste der vier Palasttore. Direkt davor: Ivan Meštrovićs 8,5 m hohe Bronzestatue des Bischofs Grgur Ninski — der große Zeh ist goldglänzend blank gerieben, weil er angeblich Glück bringt, wenn man ihn berührt.', time: 'Morgens, bevor Reisegruppen eintreffen', photoTip: 'Tiefer Blickwinkel, der die Statue monumental wirken lässt', maps: 'Google Maps: „Golden Gate Diocletian\'s Palace Split"' },
  ],
  dishes: [
    { name: 'Soparnik', desc: 'Dünne, ungesäuerte Teigfladen-Pastete mit Mangold, Zwiebel, Knoblauch und Olivenöl, unter glühender Asche gebacken — von der EU als geschützte geografische Angabe (PGI) gelistet.', price: '€3–4/Stück', where: 'Pazar (Grünmarkt), von älteren Marktfrauen verkauft', tip: 'Vor 11:00 Uhr kommen und warm direkt vom Markt essen.' },
    { name: 'Pašticada', desc: 'Festtagsgericht: Rindfleisch bis zu 24 Std. mariniert, dann langsam geschmort mit Backpflaumen, Wurzelgemüse und Prosciutto zu einer süß-säuerlichen Sauce — traditionell über Gnocchi.', price: '€20–28 (einfache Tavernen €12–15)', where: 'Konoba Fetivi, Konoba Varoš, Tavern Pimpinella, Konoba Stare Grede', tip: 'Braucht Zeit — am besten zum späten Mittagessen statt schnellem Lunch bestellen.' },
    { name: 'Gegrillter Fisch (Brancin/Orada)', desc: 'Frischer Adria-Fisch mit Blitva (Mangold-Kartoffel-Stampf) — schlicht mit Olivenöl und Zitrone, nach Gewicht abgerechnet.', price: '~€40–60/kg ganz, Filets €18–30', where: 'Konoba Nikola, Waterfront-Konobas in Veli Varoš', tip: 'Fragen, was heute Morgen gefangen wurde.' },
    { name: 'Dalmatinischer Pršut & Käse', desc: 'Luftgetrockneter Rohschinken mit Schafskäse (oft von der Insel Pag) — die klassische Teilerplatte zum Einstieg.', price: '€12–18', where: 'Jede Konoba als Vorspeise', tip: 'Perfekt zu einem Glas Pošip vor dem Hauptgang.' },
    { name: 'Fritule', desc: 'Frittierte Teigbällchen mit Zitrusaroma, Rum und Rosinen, mit Puderzucker bestäubt — Kroatiens Antwort auf den Krapfen.', price: '€3–5', where: 'Bäckereien und Dessertcafés', tip: 'Am besten warm direkt aus der Fritteuse.' },
    { name: 'Plavac Mali & Pošip (Wein)', desc: 'Plavac Mali — kräftiger Rotwein, verwandt mit Zinfandel; Pošip und Grk — mineralische Weißweine von den Inseln Korčula/Hvar/Vis.', price: '€5–8/Glas, €15–35/Flasche', where: 'Jede Weinkarte in der Altstadt', tip: 'Pošip zu Fisch, Plavac Mali zu Pašticada.' },
    { name: 'Burek', desc: 'Filoteig-Gebäck mit Fleisch-, Käse- oder Spinatfüllung — schnelles, herzhaftes Frühstück balkanischer Herkunft.', price: '€2,50–4', where: 'Bäckereien in der ganzen Altstadt', tip: 'Heiß am Morgen mit einem Becher Joghurt zum Dippen.' },
  ],
  culinaryNote: `
    <div class="infobox gold"><div class="infobox-title"><span class="icon">🐟</span>Der Fischmarkt, der angeblich nicht riecht</div>
    <p>Die Ribarnica direkt am Rand der Altstadt verkauft seit mindestens 1312 Fisch — und laut lokaler Legende dank einer Schwefelquelle unter der Stadt völlig geruchs- und fliegenfrei. Ob Mythos oder Mikroklima: Ein Frühstücksbesuch vor 09:00 Uhr lohnt sich, direkt gefolgt vom Pazar-Grünmarkt gleich nebenan, wo warmer Soparnik von Marktfrauen verkauft wird — die authentischste (und günstigste) Art, in Split zu frühstücken.</p></div>
  `,
  restaurants: [
    { category: 'Preis-Leistung', name: 'Konoba Stare Grede / Tavern Tri Volta', area: 'Altstadt-Gassen', price: '€', rating: '', note: 'Traditionelle dalmatinische Küche, Hauptgerichte schon ab ca. €12 — verlässlich und ehrlich bepreist mitten im Palast.', pick: 'Pašticada oder Peka-Gericht des Tages' },
    { category: 'Gehoben', name: 'Storija Fine Dining / Restaurant Dvor', area: 'Innerhalb der Palastmauern / Sug', price: '€€€', rating: 'Michelin Guide gelistet', note: 'Moderne dalmatinische Küche in historischer Kulisse, Menüs meist €50–100+ pro Person — Reservierung empfohlen.', pick: 'Degustationsmenü mit Meeresfrüchten' },
    { category: 'Geheimtipp', name: 'Konoba Fetivi', area: 'Veli Varoš', price: '€€', rating: 'Michelin Bib Gourmand', note: 'Tageskarte richtet sich nach dem, was am Pazar frisch war — ehrliche Hausmannskost ohne Touristenaufschlag.', pick: 'Tagesfrische Pašticada oder Fisch' },
    { category: 'Frühstück/Café', name: 'KaKantun Specialty Coffee & Gin', area: 'Gasse innerhalb des Palasts', price: '€', rating: '', note: 'Guter Specialty-Kaffee in einer versteckten Palastgasse; Alternative The Daltonist. Für den Nachtisch später: Ela\'s Gelateria in der Altstadt (4,9★) gilt als bestes Gelato der Stadt.', pick: 'Flat White + Burek zum Mitnehmen' },
    { category: 'Beachbar/Solo-Treff', name: 'Tropic Club (Bačvice)', area: 'Bačvice Beach', price: '€€', rating: 'Bester Solo-Treffpunkt', note: 'Tropische Open-Air-Bar direkt am Strand, freier Eintritt, ab dem Abend bis spätnachts belebt — die geselligste Adresse dieses Hafens.', pick: 'Ein kaltes Ožujsko bei Sonnenuntergang' },
  ],
  drinksNote: `<div class="infobox navy"><div class="infobox-title"><span class="icon">🏖️</span>Bačvice — bester Solo-Treffpunkt des ganzen Reiseführers</div><p>Tagsüber wird am Sandstrand Picigin gespielt — ein Wasser-Volleyball-Spiel, das hier erfunden wurde und für die UNESCO-Liste vorgeschlagen ist; Mitspielen ist ausdrücklich erwünscht und der schnellste Weg, mit Locals ins Gespräch zu kommen. Abends übernehmen Strandbars wie der Tropic Club, ab ca. 22:00 Uhr im August richtig laut und lebendig, mit einer natürlichen Mischung aus Einheimischen und Reisenden. Von keinem anderen Hafen dieser Reise ist der ungezwungene Anschluss zu anderen so leicht wie hier.</p></div>`,
  activities: [
    { emoji: '🥇', name: 'Rafting auf der Cetina (bei Omiš)', desc: 'Wildwasser-Rafting Grad II–III durch eine dramatische grüne Schlucht, einsteigerfreundlich, mit Schwimm- und Klippensprung-Stopps.', price: '~€38–57', duration: '~4,5–6 Std. gesamt inkl. Transfer', why: 'Das intensivste Naturerlebnis der drei Optionen — Canyon, Klippensprünge, kühles Flusswasser mitten im August.', link: 'GetYourGuide/Viator „Split/Omiš: Rafting with Cliff Jump & Swimming" · Treffpunkt meist am „SPLIT"-Schriftzug nahe dem Busbahnhof' },
    { emoji: '🥈', name: 'Zipline Cetina-Canyon (bei Omiš)', desc: '8-Leitungen-Parcours über insgesamt ca. 2.100 m, erste Strecke ca. 700 m auf ~150 m Höhe über dem Canyonboden.', price: '~€80–100', duration: '~4–5 Std. gesamt inkl. Transfer', why: 'Adrenalin ohne Wasser, spektakuläre Ausblicke von oben in die Schlucht, planbarer als Rafting.', link: 'GetYourGuide „Omiš: 2.5-Hour Cetina Canyon ZIPLINE" · 4,9★ (1.200+ Bewertungen)' },
    { emoji: '🥉', name: 'Blue Lagoon Bootstour (Krknjaši-Bucht)', desc: 'Speedboot-Tagestour zur türkisfarbenen, seichten Krknjaši-Bucht nahe Trogir/Šolta, meist kombiniert mit Trogir (UNESCO) und einer dritten Insel.', price: '~€53–95', duration: '5–5,5 Std.', why: 'Startet direkt im Hafen von Split, keine Straßenanfahrt nötig — die zeitlich sicherste der drei Optionen.', link: 'GetYourGuide „Split: Small-Group Blue Lagoon and 3 Islands Speedboat Tour"' },
  ],
  activityNote: `<div class="infobox coral"><div class="infobox-title"><span class="icon">⚠️</span>Timing-Check: Welche Aktivität passt zu Ihrer Anlegezeit?</div><p><b>Rafting</b> ist mit bis zu 6 Std. Tür-zu-Tür (inkl. Straßentransfer nach/von Omiš) die zeitlich riskanteste Option — nur bei einem langen Hafentag (9–10 Std.) und der kürzesten Tour-Variante empfehlenswert. <b>Zipline</b> liegt mit ca. 4–5 Std. dazwischen. <b>Die Blue-Lagoon-Bootstour hat das geringste Timing-Risiko</b>, da sie direkt im Hafen von Split ablegt und keinen Straßentransfer benötigt — bei kürzeren oder unsicheren Anlegezeiten die sicherste Wahl.</p></div>`,
  photoSpots: [
    { n: 1, name: 'Marjan-Hügel — Telegrin-Aussichtspunkt', time: 'Golden Hour, 1,5–2 Std. vor Sonnenuntergang', dir: 'Nach Osten über Stadt und Hafen', why: 'Der weiteste Panoramablick über ganz Split.' },
    { n: 2, name: 'Glockenturm der Kathedrale', time: 'Kurz nach Öffnung oder letzter Einlass', dir: '360°: Dächer im Osten, Hafen/Riva im Süden, Marjan im Westen', why: 'Der einzige echte 360°-Blick der Altstadt.' },
    { n: 3, name: 'Riva-Promenade', time: '30 Min. um Sonnenuntergang', dir: 'Nach Westen zur Hafeneinfahrt/Marjan', why: 'Splits klassisches Postkartenmotiv am Wasser.' },
    { n: 4, name: 'Peristil', time: 'Vor 09:00 Uhr', dir: 'Zwischen den Säulen Richtung Kathedrale/Glockenturm', why: 'Nur in den ersten Morgenstunden ohne Menschenmassen.' },
    { n: 5, name: 'Bačvice — erhöhter Uferweg', time: 'Sonnenaufgang', dir: 'Nach Osten übers Wasser', why: 'Rosa-goldene Spiegelungen, fast menschenleer.' },
    { n: 6, name: 'Palast-Substruktionen/Kellergewölbe', time: 'Jederzeit (Indoor)', dir: 'Gewölbte Gänge, Weitwinkel, wenig Licht', why: 'Der „Game of Thrones"-Look mitten im Palast.' },
    { n: 7, name: 'Vidilica-Aussichtsterrasse', time: 'Später Nachmittag', dir: 'Kurzer Anstieg, schnelles Panorama', why: 'Fast der Telegrin-Blick, aber halb so viel Aufstieg.' },
    { n: 8, name: 'Goldenes Tor & Grgur-Ninski-Statue', time: 'Morgen', dir: 'Tiefer Blickwinkel, Statue wirkt monumental', why: 'Vor den ersten Reisegruppen fast leer.' },
    { n: 9, name: 'Fischmarkt (Ribarnica) innen', time: 'Vor 09:00 Uhr', dir: 'Verkäuferinnen im Morgenlicht durch die Eisenkonstruktion', why: 'Authentisches Marktleben, kaum Touristen.' },
    { n: 10, name: 'Silbernes Tor & Pazar', time: 'Morgen', dir: 'Marktgetümmel vom Hafen aus kommend', why: 'Lokales Alltagsleben direkt am Weg vom Schiff.' },
  ],
  itinerary: [
    { time: '08:00', text: 'Von Bord, Riva-Spaziergang in die Altstadt' },
    { time: '08:15', text: 'Kaffee + Burek zum Frühstück, frühe Fotos am Peristil/Goldenen Tor' },
    { time: '08:45', text: 'Fischmarkt & Pazar, ein Stück warmer Soparnik' },
    { time: '09:30', text: 'Zum hafennahen Bootsanleger für die Blue-Lagoon-&-3-Inseln-Tour' },
    { time: '09:45', text: 'Bootstour: Blue Lagoon (Krknjaši), Trogir, Inselzeit' },
    { time: '14:30', text: 'Rückkehr im Hafen, kurz umziehen' },
    { time: '15:00', text: 'Spätes Mittagessen: Pašticada/Fisch bei Konoba Fetivi oder Villa Spiza' },
    { time: '16:00', text: 'Glockenturm der Kathedrale (letzten Einlass prüfen) oder Vidilica-Aussichtspunkt' },
    { time: '16:45', text: 'Fritule + Gelato bei Ela\'s, letzter Riva-Spaziergang' },
    { time: '17:15', text: 'Rückweg zum Schiff' },
  ],
  planA: '<p>Blue-Lagoon-Bootstour am Vormittag (geringstes Timing-Risiko, startet direkt im Hafen), am Nachmittag Diokletianpalast, Kathedrale/Glockenturm und Riva — perfekte Kombination aus Wasser und Kultur bei gutem Wetter.</p>',
  planB: '<p>Bei Wind/Regen: Palast-Substruktionen/Kellergewölbe (überdacht, atmosphärisch, GoT-Kulisse), Innenraum der Kathedrale St. Domnius und der überdachte Teil des Pazar-/Fischmarkts als wettergeschützte Alternativen.</p>',
  planC: '<p>Ohne Ausflugsbuchung: Diokletianpalast komplett auf eigene Faust (Goldenes Tor → Peristil → Kathedrale → Silbernes Tor), danach Marjan-Hügel bis Vidilica und zum Abschluss Bačvice Beach zum Schwimmen und Picigin — Split lässt sich komplett zu Fuß erleben.</p>',
  budget: { low: '€35–55', normal: '€70–110', premium: '€150–250+' },
  practicalHtml: `
    <p><b>Apotheke:</b> Pharmacy Matejuška, nahe der Riva/dem kleinen Fischerhafen — englischsprachiges Personal.</p>
    <p><b>Geldautomat:</b> Entlang der Riva und der Marmontova-Straße, außerdem nahe Trg Republike/Fischmarkt.</p>
    <p><b>Supermarkt:</b> Studenac/Konzum/Tommy in den Altstadt-Gassen verteilt, größere Filialen entlang der Marmontova.</p>
    <p><b>Sicherheit:</b> Insgesamt sehr sicher; Taschendiebstähle sollen 2026 in belebten Zonen (Riva, Altstadt-Gassen, Bus-/Fährbahnhof) etwas zugenommen haben — übliche Vorsicht reicht aus.</p>
  `,
  soloHtml: `<p>Bačvice Beach ist der klare Solo-Höhepunkt dieses Hafens: Tagsüber einfach beim Picigin mitspielen — dem hier erfundenen, für die UNESCO-Liste vorgeschlagenen Wasserspiel — ist die schnellste Art, mit Locals ins Gespräch zu kommen. Abends übernimmt der Tropic Club und die übrige Beachbar-Meile, ab ca. 22:00 Uhr im August laut und lebendig, mit einer natürlichen Mischung aus Einheimischen und Reisenden — kein anderer Hafen dieser Reise bietet einen so leichten, ungezwungenen Anschluss.</p>`,
  shoppingHtml: `<p>Plavac Mali oder Pošip als Flaschenmitbringsel, Pager Schafskäse und Lavendelprodukte von den vorgelagerten Inseln, handgefertigte Silberfiligran-Schmuckstücke aus der Altstadt — abseits der Peristil-nahen Läden meist deutlich günstiger.</p>`,
};

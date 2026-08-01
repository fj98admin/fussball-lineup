'use strict';
module.exports = {
  key: 'triest',
  name: 'Triest',
  country: 'Italien',
  tagline: 'Wiener Kaffeehauskultur trifft Adria — Habsburger Erbe am Wasser',
  ratings: { action: 3, kulinarik: 4, fotospots: 4, kreuzfahrt: 5 },
  quickFacts: {
    Liegeplatz: 'Molo Bersaglieri (zentral)*',
    Gehzeit: '2–15 Min. zur Piazza',
    Tender: 'Nein',
    Landessprache: 'Italienisch',
  },
  arrivalInfobox: `
    <p><b>Meist zentral, manchmal weiter draußen.</b> Mein Schiff 4 legt meist direkt hinter der Piazza Unità d'Italia an (Molo Bersaglieri/Stazione Marittima) — nur 2–5 Gehminuten ins Zentrum. In der Hauptsaison wird gelegentlich der weiter entfernte Liegeplatz „Ormeggio 57" (Molo VII, ca. 4 km, Shuttle nötig) genutzt. <b>Tipp:</b> Liegeplatz im Bordprogramm am Ankunftsmorgen prüfen.</p>
    <p class="tiny">* Kein Tender-Hafen — das Schiff legt in beiden Fällen direkt an.</p>
  `,
  map: {
    water: [{ x: 0, y: 55 }, { x: 0, y: 100 }, { x: 44, y: 100 }, { x: 33, y: 72 }, { x: 10, y: 58 }],
    land: [[{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 44, y: 100 }, { x: 33, y: 72 }, { x: 10, y: 58 }, { x: 0, y: 55 }]],
    route: [{ x: 9, y: 74 }, { x: 18, y: 69 }, { x: 27, y: 64 }, { x: 36, y: 53 }, { x: 47, y: 31 }],
    streets: [
      { main: true, name: 'Riva Nazario Sauro', path: [{ x: 6, y: 78 }, { x: 13, y: 84 }, { x: 20, y: 76 }, { x: 27, y: 69 }] },
      { main: true, name: 'Corso Italia', path: [{ x: 27, y: 69 }, { x: 31, y: 65 }, { x: 34, y: 60 }, { x: 34, y: 68 }] },
      { main: true, name: 'Via Genova', path: [{ x: 30, y: 58 }, { x: 36, y: 53 }, { x: 42, y: 47 }, { x: 46, y: 42 }] },
      { main: false, name: 'Via San Michele', path: [{ x: 42, y: 47 }, { x: 44, y: 40 }, { x: 47, y: 31 }] },
      { main: false, name: 'Via Cassa di Risparmio', path: [{ x: 20, y: 59 }, { x: 26, y: 62 }, { x: 30, y: 58 }] },
      { main: false, name: 'Via del Monte', path: [{ x: 34, y: 68 }, { x: 38, y: 58 }, { x: 42, y: 47 } ] },
    ],
    points: [
      { n: 1, x: 9, y: 74, cat: 'ship', label: 'Schiff' },
      { n: 2, x: 27, y: 69, cat: 'sight', label: 'Piazza Unità d\'Italia' },
      { n: 3, x: 13, y: 84, cat: 'photo', label: 'Molo Audace' },
      { n: 4, x: 47, y: 28, cat: 'sight', label: 'San Giusto' },
      { n: 5, x: 36, y: 53, cat: 'sight', label: 'Canal Grande' },
      { n: 6, x: 44, y: 39, cat: 'sight', label: 'Römisches Theater' },
      { n: 7, x: 9, y: 47, cat: 'sight', label: 'Barcola-Promenade' },
      { n: 8, x: 6, y: 10, cat: 'sight', label: 'Miramare Castle → 7 km', anchor: 'start' },
      { n: 9, x: 85, y: 16, cat: 'sight', label: 'Grotta Gigante → 20 km', anchor: 'end' },
      { n: 10, x: 30, y: 63, cat: 'food', label: 'Trattoria Nerodiseppia', minor: true },
      { n: 11, x: 41, y: 57, cat: 'food', label: 'Harry\'s Piccolo', minor: true },
      { n: 12, x: 48, y: 45, cat: 'food', label: 'Buffet da Pepi', minor: true },
      { n: 13, x: 19, y: 60, cat: 'cafe', label: 'Caffè San Marco', minor: true },
      { n: 14, x: 23, y: 67, cat: 'food', label: 'Gelateria Zampolli', minor: true },
      { n: 15, x: 35, y: 74, cat: 'practical', label: 'Despar/ATM', minor: true },
    ],
  },
  qr: {
    routeLabel: 'Piazza Unità d\'Italia, Triest',
    tourismLabel: 'discover-trieste.it',
  },
  orientationNote: `
    ${'<div class="section-title" style="border:none;padding:0"></div>'}
    <div class="infobox coral">
      <div class="infobox-title"><span class="icon">🚶</span>Zu Fuß erreichbar</div>
      <p>Triest ist ein Fußgänger-Hafen: Alle Top-Highlights liegen innerhalb von 15–20 Gehminuten. Für Miramare Castle oder die Karst-Hochebene (Grotta Gigante) lohnt Bus Linie 6 ab Piazza Oberdan oder eine gebuchte Tour.</p>
    </div>
  `,
  highlights: [
    { name: 'Piazza Unità d\'Italia', desc: 'Der größte direkt am Meer gelegene Platz Europas, gesäumt von prachtvollen Palazzi — das Herzstück von Triests Habsburger Blütezeit als Haupthafen der Monarchie.', history: 'Im 19. Jahrhundert im Zuge von Triests Aufstieg zum k.u.k. Welthafen angelegt.', time: 'Golden Hour oder nach Einbruch der Dunkelheit (beleuchtete Fassaden)', photoTip: 'Brunnen der vier Kontinente im Vordergrund', maps: 'Google Maps: „Piazza Unità d\'Italia Triest"' },
    { name: 'Molo Audace', desc: '246 m langer Steinpier direkt vor der Piazza — Triests liebster Sonnenuntergangsplatz mit 360°-Blick zurück auf die Stadt.', time: 'Sonnenuntergang, 60–90 Min. früher kommen', photoTip: 'Von der Pierspitze zurück zur Skyline', maps: 'Google Maps: „Molo Audace Triest"' },
    { name: 'San Giusto — Burg & Kathedrale', desc: 'Venezianische Hügelburg (1468–1636) mit byzantinischen Mosaiken in der angrenzenden Kathedrale — 360°-Panorama über Stadt, Hafen und bei klarer Sicht bis Slowenien.', history: 'Erbaut auf einer Anhöhe, die seit der Römerzeit Trieste militärischer und religiöser Hochpunkt ist.', time: 'Später Nachmittag bis Sonnenuntergang', photoTip: 'Von den Wehrmauern über die Dächer', maps: 'Google Maps: „Castello di San Giusto Triest"' },
    { name: 'Miramare Castle & Park', desc: 'Weißes Märchenschloss (1856–1860), erbaut für Erzherzog Ferdinand Maximilian, auf einer Felsnase direkt am Meer, umgeben von 22 ha Gartenanlage.', time: 'Vormittag (weiches Licht, weniger Trubel)', photoTip: 'Vom unteren Gartenweg, Schloss im Gegenlicht', maps: 'Google Maps: „Miramare Castle Triest" · Bus 6 ab Piazza Oberdan, 20–30 Min.' },
    { name: 'Canal Grande & Sant\'Antonio Nuovo', desc: 'Schiffskanal aus dem 18. Jh. mitten im planmäßig angelegten Borgo Teresiano, gesäumt von Cafés und pastellfarbenen Palazzi, endet an der neoklassizistischen Kirche.', time: 'Vormittag für Fassaden, abends für Café-Leben', photoTip: 'Symmetrisch den Kanal entlang Richtung Kirche', maps: 'Google Maps: „Canal Grande Triest"' },
    { name: 'Römisches Theater', desc: 'Theater aus augusteischer Zeit, unter Trajan erweitert, 1814 wiederentdeckt, 1938 vollständig freigelegt — direkt am Fuß des San-Giusto-Hügels.', time: 'Vormittag (sonst Schatten)', photoTip: 'Tief ansetzen, Burg San Giusto im Hintergrund', maps: 'Google Maps: „Teatro Romano Triest"' },
    { name: 'Grotta Gigante', desc: 'Die größte für Besucher zugängliche Tropfsteinhöhle der Welt (Guinness-Rekord), 98,5 m hoch, auf der Karst-Hochebene bei Sgonico. Nur mit Führung, feste Abfahrtszeiten.', time: 'Ganztägig konstant 11 °C — Uhrzeit egal, vorab buchen', photoTip: '500 Stufen hinab in die Riesenkaverne', maps: 'Google Maps: „Grotta Gigante Triest"' },
    { name: 'Barcola-Promenade', desc: 'Beliebte Strandpromenade Richtung Miramare mit den charakteristischen runden Betonterrassen „i Topolini" — hier lebt das echte Triest.', time: 'Später Nachmittag/früher Abend', photoTip: 'Entlang der Terrassen Richtung Miramare', maps: 'Google Maps: „Barcola Triest"' },
  ],
  dishes: [
    { name: 'Jota', desc: 'Deftige Suppe aus Sauerkraut, Bohnen und Kartoffeln mit Schweinefleisch — Habsburger Erbe pur.', price: '€6–9', where: 'Klassisches „Buffet" oder Trattoria', tip: 'Ganzjährig erhältlich, ideal als Vorspeise.' },
    { name: 'Porzina (Caldaia)', desc: 'Gekochtes Schweinefleisch mit Sauerkraut, Senf und Kren — das definitive Triestiner „Buffet"-Gericht.', price: '€10–20', where: 'Buffet da Pepi (seit 1897)', tip: 'Als Sandwich zum Mitnehmen oder als geteilte Platte.' },
    { name: 'Gulasch triestino', desc: 'Rindergulasch nach Wiener Vorbild, aber mit Olivenöl statt Schmalz — serviert mit Polenta oder Gnocchi.', price: '€10–14', where: 'Jede klassische Trattoria', tip: 'Comfort Food für kühlere Tage — im August meist als Mittagsgericht.' },
    { name: 'Sardoni in Savor', desc: 'Frittierte Sardellen in süß-saurer Zwiebel-Essig-Rosinen-Marinade — alte venezianische Konservierungsmethode.', price: '€8–12', where: 'Traditionelle Trattorien nahe der Uferpromenade', tip: 'Kalte Vorspeise, perfekt im Sommer.' },
    { name: 'Presnitz', desc: 'Gerolltes Gebäck mit Trockenfrüchten, Nüssen, Schokolade und Gewürzen — Triests Wahrzeichen-Süßspeise.', price: '€3–5/Stück', where: 'Historische Pasticcerie in der Altstadt', tip: 'Perfekt zum „capo in b" (Kaffee im Glas).' },
    { name: 'Cevapcici', desc: 'Kleine gegrillte Hackfleisch-Röllchen balkanischen Ursprungs — Zeugnis von Triests Lage an der Kreuzung der Kulturen.', price: '€6–10', where: 'Buffets und Grillstuben in der Altstadt', tip: 'Im Brot mit roher Zwiebel, manchmal Ajvar.' },
    { name: 'Triestiner Kaffeekultur', desc: '„Nero" = Espresso, „Capo" = Macchiato, „Capo in b" = im Glas — eigenes Kaffee-Vokabular. Triest ist Illy-Stadt (Hauptsitz seit 1933).', price: '€1–1,50 am Tresen, €4–6+ an der Piazza', where: 'Caffè San Marco, Caffè Tommaseo, Caffè degli Specchi', tip: 'Mindestens einmal „capo in b" probieren.' },
    { name: 'Osmizza (Karst-Hochebene)', desc: 'Bäuerliche Hofschänken auf dem Karst, die saisonal eigenen Wein, Speck und Käse verkaufen — Tradition seit einem Habsburger Erlass von 1784.', price: 'variabel, meist €15–25 für eine Verkostung', where: 'Karst-Hochebene oberhalb der Stadt, per Tour', tip: 'Das authentischste lokale Erlebnis der Region — am besten mit Halbtagestour.' },
  ],
  culinaryNote: `
    <div class="infobox gold"><div class="infobox-title"><span class="icon">☕</span>Illy — Kaffeestadt Triest</div>
    <p>Illy ist seit 1933 in Triest beheimatet. Die „Università del Caffè" bietet gelegentlich Führungen/Verkostungen an — meist für den Handel gedacht, öffentliche Verfügbarkeit vorab prüfen.</p></div>
  `,
  restaurants: [
    { category: 'Preis-Leistung', name: 'Trattoria Nerodiseppia', area: 'Zentrum', price: '€', rating: '', note: 'Variationsteller für eine Person ab €11, Hausewein unter €3/Glas — großartiges Preis-Leistungs-Verhältnis.', pick: 'Den Verkostungsteller' },
    { category: 'Gehoben', name: 'Harry\'s Piccolo', area: 'Palazzo Dreher', price: '€€€', rating: '2 Michelin-Sterne', note: 'Zwei-Sterne-Küche von Metullio & De Pra, drei Degustationsmenüs (Fleisch/Fisch/Klassiker). Reservierung essenziell.', pick: 'Das „Harrysotto"-Risotto' },
    { category: 'Geheimtipp', name: 'Buffet da Pepi', area: 'Altstadt, seit 1897', price: '€', rating: '4,3 ★', note: 'Triestiner Institution für Porzina & Cotechino mit Sauerkraut, Senf, Kren.', pick: 'Porzina-Sandwich mit Kren' },
    { category: 'Frühstück/Café', name: 'Caffè San Marco', area: 'Borgo Teresiano, seit 1914', price: '€€', rating: '~4,5 ★', note: 'Wiener-Secessions-Café, literarischer Treffpunkt von Joyce & Svevo — Art-Nouveau-Interieur.', pick: '„Capo in b" + Presnitz' },
    { category: 'Gelato', name: 'Gelateria Zampolli', area: 'Altstadt', price: '€', rating: '', note: 'Traditionsreiche Gelateria mit über 50 Sorten zu fairen Preisen.', pick: 'Pistazie-Ricotta oder Saisonfrucht' },
  ],
  drinksNote: C_drinksNote(),
  activities: [
    { emoji: '🥇', name: 'Kajak-Tour Duino-Küste', desc: 'Kajaktour unter den dramatischen Klippen von Duino mit Blick auf die Burg, Badestopp an einer versteckten Bucht.', price: 'ab ca. $77–78 (~€70)', duration: '3 Std.', why: 'Einzigartige Perspektive, kühlt bei Hitze ab, aktiv und fotogen.', link: 'GetYourGuide: „Trieste Kayak Adventure: Duino Coast and Castles"' },
    { emoji: '🥈', name: 'E-Bike Altstadt & Miramare', desc: 'E-Bike-Tour durch die Altstadt bis zum Schloss Miramare, Abschluss mit Gelato.', price: 'ab ca. $173–177 (~€160)', duration: '6 Std.', why: 'Kombiniert Sightseeing mit Aktivität, schont die Zeit.', link: 'GetYourGuide: „Trieste E-Bike Tour: Old Town, Miramare Castle and Gelato"' },
    { emoji: '🥉', name: 'Grotta Gigante geführt', desc: 'Eine Stunde unter Tage in der rekordhaltenden Riesenhöhle, 500 Stufen zu einer 80 m tiefen Kammer bei konstant 11 °C.', price: 'ab ca. $17 (~€16)', duration: '1 Std.', why: 'Günstig, ungewöhnlich, leicht mit Taxi/Bus kombinierbar.', link: 'GetYourGuide: „Grotta Gigante Guided Tour & Museum Entry" · 4,8★ (41 Bew.)' },
  ],
  activityNote: `<div class="infobox teal"><div class="infobox-title"><span class="icon">🍷</span>Alternative: Prosecco & Karst</div><p>„Napoleonic Way, Prosecco & Miramare Walking Tour" (4 Std., ~5★, ab ca. $68–85) verbindet die Panoramastrecke Strada Napoleonica mit einer Weinverkostung auf dem Karst — ideal für „authentisch + Aussicht + lokale Spezialitäten".</p></div>`,
  photoSpots: [
    { n: 1, name: 'Molo Audace (Pierspitze)', time: 'Sonnenuntergang, 60–90 Min. früher', dir: 'West für Sonnenuntergang, Ost für Skyline', why: 'Triests bester Sonnenuntergangsplatz.' },
    { n: 2, name: 'Piazza Unità (Brunnen)', time: 'Blaue Stunde, ~30 Min. nach Sonnenuntergang', dir: 'Richtung Rathaus/Uhrturm', why: 'Beleuchtete Fassaden, Brunnen im Vordergrund.' },
    { n: 3, name: 'San-Giusto-Wehrmauern', time: 'Später Nachmittag/Sonnenuntergang', dir: 'Breit Richtung Süden/Westen über die Dächer', why: '360°-Panorama im goldenen Licht.' },
    { n: 4, name: 'Miramare, unterer Gartenweg', time: 'Vormittag', dir: 'Schloss im Gegenlicht der Morgensonne', why: 'Ikonisches Schloss-am-Meer-Motiv.' },
    { n: 5, name: 'Canal Grande, Ponte Rosso', time: 'Vormittag/Abend', dir: 'Kanal entlang zur Kirche', why: 'Spiegelungen und Fassaden-Symmetrie.' },
    { n: 6, name: 'Römisches Theater', time: 'Vormittag', dir: 'Tief, Burghügel im Hintergrund', why: 'Antike trifft Moderne.' },
    { n: 7, name: 'Barcola „i Topolini"', time: 'Golden Hour', dir: 'Entlang der Terrassen Richtung Miramare', why: 'Authentisches Alltagsleben der Triestiner.' },
    { n: 8, name: 'Molo Fratelli Bandiera', time: 'Früher Morgen', dir: 'Zurück zu Piazza Unità/Molo Audace', why: 'Sonnenaufgang, Schiff im Hafen.' },
    { n: 9, name: 'Via del Monte (Treppen)', time: 'Mittag bis später Nachmittag', dir: 'Die Stufengasse hinauf', why: 'Versteckte Gassenaufnahme, die kaum jemand macht.' },
    { n: 10, name: 'Obelisk Opicina / Napoleonische Straße', time: 'Später Nachmittag', dir: 'Weit über den Golf hinaus', why: 'Lokaler Geheimtipp, erreichbar mit der historischen Straßenbahn.' },
  ],
  itinerary: [
    { time: '08:00', text: 'Von Bord, Spaziergang zur Piazza Unità (oder Shuttle bei Ormeggio 57)' },
    { time: '08:15', text: 'Kaffee-Ritual bei Caffè Tommaseo oder San Marco' },
    { time: '08:45', text: 'Molo Audace → Canal Grande, Morgenlicht-Fotos' },
    { time: '09:30', text: 'San-Giusto-Hügel: Kathedrale, Burg, Römisches Theater' },
    { time: '10:30', text: 'Kajaktour Duino oder Grotta Gigante / Karst-Kombi' },
    { time: '13:00', text: 'Mittagessen: Buffet da Pepi oder Trattoria Nerodiseppia' },
    { time: '14:00', text: 'Miramare Castle (falls nicht am Vormittag) oder Napoleonische Straße' },
    { time: '15:30', text: 'Borgo Teresiano, Shopping, Gelato bei Zampolli' },
    { time: '16:30', text: 'Goldene-Stunde-Fotos an Molo Audace / San Giusto' },
    { time: '17:00', text: 'Rückweg zum Schiff' },
  ],
  planA: '<p>Kajak an der Duino-Küste am Vormittag, Miramare und Altstadt am Nachmittag — volles Aktiv- und Fotoprogramm.</p>',
  planB: '<p>Bei Wind/Regen: Grotta Gigante (konstant 11 °C, wettergeschützt), danach Café-Kultur und Museen in der Altstadt (San Giusto, Römisches Theater überdacht erreichbar).</p>',
  planC: '<p>Ohne Ausflug: Zu Fuß San Giusto, Canal Grande, Piazza Unità, Barcola-Promenade — Triest ist komplett zu Fuß erlebbar.</p>',
  budget: { low: '€20–30', normal: '€70–100', premium: '€250–350+' },
  practicalHtml: `
    <p><b>Geldautomat:</b> Corso Italia/Piazza Unità — Bankfilial-Automaten bevorzugen (Ablenkungs-Betrugsfälle an Straßenautomaten gemeldet).</p>
    <p><b>Apotheke:</b> Farmacia All'Angelo, nahe Piazza della Borsa (angeblich 24 Std. — vor Ort prüfen).</p>
    <p><b>Supermarkt:</b> Despar, Piazza Unità d'Italia 4 (Mo–Sa 8–20, So 9–19).</p>
    <p><b>Sicherheit:</b> Sehr sichere Stadt; auf Taschendiebe in Menschenmengen achten, Geldautomaten-Betrug an Corso Italia, nach Feierabend Hafenzone bei Ormeggio 57 meiden.</p>
  `,
  soloHtml: `<p>Café-Terrassen an der Piazza Unità (Caffè degli Specchi, Tommaseo) zum Leute-Beobachten; Canal-Grande-Gegend abends für ein jüngeres, lokales/Expat-Publikum bei einem Aperitivo-Spritz.</p>`,
  shoppingHtml: `<p>Presnitz und Illy-Kaffee als Mitbringsel, Taralli-ähnliche Gebäcke, lokaler Karst-Wein aus einer Osmizza.</p>`,
};

function C_drinksNote() {
  return `<div class="infobox navy"><div class="infobox-title"><span class="icon">🍷</span>Kaffeehaus-Alternative</div><p>Caffè degli Specchi (seit 1839, direkt an der Piazza Unità) ist die teuerste, aber schönste Lage der Stadt — für Prime-Seat-Kaffee mit Blick.</p></div>`;
}

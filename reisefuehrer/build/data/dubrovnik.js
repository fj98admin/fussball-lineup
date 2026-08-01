'use strict';
const { organicMesh } = require('../mapgen');
module.exports = {
  key: 'dubrovnik',
  name: 'Dubrovnik',
  country: 'Kroatien',
  tagline: 'Die „Perle der Adria" — Festungsmauern, Stradun-Glanz und Game-of-Thrones-Kulisse',
  ratings: { action: 4, kulinarik: 4, fotospots: 5, kreuzfahrt: 5 },
  quickFacts: {
    Liegeplatz: 'Hafen Gruž (~2,5–3 km)*',
    Gehzeit: '30–40 Min. zu Fuß / Bus 10–20 Min.',
    Tender: 'Nein',
    Landessprache: 'Kroatisch',
  },
  arrivalInfobox: `
    <p><b>Kein Fußgänger-Hafen — Gruž liegt spürbar außerhalb.</b> Mein Schiff 4 legt im Hafen von Gruž an, ca. 2,5–3 km nordwestlich der Altstadt. Zu Fuß sind das 30–40 Minuten an der Hafenstraße entlang — machbar, aber bei Augusthitze kein Vergnügen. Deutlich komfortabler: die öffentliche Buslinie <b>1A/1B</b> (auch 1, 1C, 8) bis Pile Gate, ca. €2–2,50 pro Fahrt, 10–20 Minuten und mit Abstand das beste Preis-Leistungs-Verhältnis. Alternativ ein Bord-Shuttle (oft gegen Gebühr, bis zu ca. €15 retour — im Tagesprogramm prüfen) oder Taxi (~€15–20).</p>
    <p><b>Kreuzfahrt-Deckel & Buchungspflicht 2026:</b> Seit 2018 begrenzt Dubrovnik im Rahmen von „Respect the City" den Kreuzfahrtverkehr auf max. 2 Großschiffe plus 1 kleineres Schiff pro Tag und zielt auf ca. 8.000 Landgänger an Spitzentagen. Schiffe bleiben dafür länger (8–12 Std. statt früher 4 Std.), was den Andrang über den Tag verteilt. <b>Ab 2026 ist für die Stadtmauer eine Zeitfenster-Buchung im Voraus Pflicht</b>, Bustouristen erhalten feste Ablade-Slots am Pile Gate. Trotz Deckel gilt: In der Hochsaison sind Stradun und Mauern zwischen 10:00 und 17:00 Uhr voll — wer um 08:00 Uhr an der Maueröffnung steht, hat den größten Vorteil des ganzen Tages.</p>
    <p class="tiny">* Kein Tender-Hafen — das Schiff legt direkt am Kai an, der Weg in die Altstadt ist aber der weiteste aller Adria-Häfen dieser Reise.</p>
  `,
  map: {
    water: [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
    land: [
      [{ x: 0, y: 30 }, { x: 14, y: 22 }, { x: 22, y: 34 }, { x: 10, y: 46 }, { x: 0, y: 44 }],
      [{ x: 44, y: 62 }, { x: 60, y: 55 }, { x: 92, y: 60 }, { x: 96, y: 80 }, { x: 88, y: 96 }, { x: 60, y: 96 }, { x: 46, y: 84 }],
    ],
    route: [{ x: 8, y: 34 }, { x: 22, y: 40 }, { x: 34, y: 52 }, { x: 46, y: 64 }, { x: 55, y: 70 }, { x: 66, y: 74 }],
    streets: [
      { main: true, name: 'Ul. Ante Starčevića', path: [{ x: 8, y: 34 }, { x: 22, y: 40 }, { x: 34, y: 52 }, { x: 46, y: 64 }, { x: 55, y: 70 }] },
      { main: true, name: 'Stradun (Placa)', path: [{ x: 55, y: 70 }, { x: 66, y: 74 }, { x: 75, y: 78 }] },
      { main: false, name: 'Ul. Od Puča', path: [{ x: 75, y: 78 }, { x: 81, y: 80 }, { x: 86, y: 82 }] },
      { main: false, name: 'Ul. Svetog Dominika', path: [{ x: 55, y: 70 }, { x: 60, y: 65 }, { x: 62, y: 62 }] },
      { main: false, name: 'Ul. Zamanjina', path: [{ x: 66, y: 74 }, { x: 72, y: 70 }, { x: 78, y: 66 }] },
      { main: false, name: 'Ul. Miha Pracata', path: [{ x: 55, y: 70 }, { x: 52, y: 76 }, { x: 50, y: 82 }] },
    ],
    mesh: [
      // Old Town — famous herringbone grid of narrow lanes off Stradun
      ...organicMesh({ cx: 70, cy: 78, w: 48, h: 36, density: 24, seed: 31 }),
    ],
    points: [
      { n: 1, x: 8, y: 34, cat: 'ship', label: 'Schiff (Gruž)' },
      { n: 2, x: 55, y: 70, cat: 'gate', label: 'Pile Gate' },
      { n: 3, x: 65, y: 64, cat: 'sight', label: 'Stadtmauer' },
      { n: 4, x: 61, y: 85, cat: 'sight', label: 'Stradun' },
      { n: 5, x: 94, y: 72, cat: 'photo', label: 'Buža Bar', anchor: 'end' },
      { n: 6, x: 56, y: 56, cat: 'sight', label: 'Fort Lovrijenac' },
      { n: 7, x: 89, y: 60, cat: 'food', label: 'Konoba Dubrava', minor: true },
      { n: 8, x: 47, y: 87, cat: 'practical', label: 'Apotheke/ATM', minor: true },
      { n: 9, x: 73, y: 71, cat: 'sight', label: 'Rektorenpalast' },
      { n: 10, x: 82, y: 82, cat: 'sight', label: 'Fort St. John & Aquarium' },
      { n: 11, x: 68, y: 28, cat: 'sight', label: 'Mt Srđ (Seilbahn) → 412 m' },
      { n: 12, x: 97, y: 96, cat: 'sight', label: 'Lokrum-Insel → Fähre 15 Min.', anchor: 'end' },
      { n: 13, x: 72, y: 88, cat: 'food', label: 'Dalmatino', minor: true },
      { n: 14, x: 95, y: 84, cat: 'food', label: 'Restaurant 360', minor: true },
      { n: 15, x: 56, y: 90, cat: 'cafe', label: 'Cogito Coffee Shop', minor: true },
    ],
  },
  qr: {
    routeLabel: 'Pile Gate / Stradun, Dubrovnik',
    tourismLabel: 'tzdubrovnik.hr',
  },
  orientationNote: `
    ${'<div class="section-title" style="border:none;padding:0"></div>'}
    <div class="infobox coral">
      <div class="infobox-title"><span class="icon">🚌</span>Bus statt Fußweg</div>
      <p>Anders als in Triest oder Bari ist Dubrovniks Altstadt vom Liegeplatz aus <b>nicht</b> bequem zu Fuß erreichbar. Linie 1A/1B ab der Haltestelle nahe dem Terminal bringt in 10–20 Minuten zum Pile Gate — Ticket beim Fahrer oder am Kiosk kaufen, in der Hauptsaison volle Busse einplanen.</p>
    </div>
  `,
  highlights: [
    { name: 'Stadtmauer (City Walls)', desc: 'Der 2 km lange Rundgang auf den Wehrmauern aus dem 13.–16. Jahrhundert ist DAS Wahrzeichen Dubrovniks — Blick über Terrakotta-Dächer, die Altstadt und das offene Meer.', history: 'Über Jahrhunderte gegen venezianische und osmanische Begehrlichkeiten ausgebaut, nie erfolgreich erstürmt.', time: 'Exakt zur Öffnung um 08:00 Uhr — bis 10:00 Uhr bereits dicht gedrängt und ohne Schatten', photoTip: 'Westabschnitt bei Bokar/Minčeta, Blick südöstlich über die Dächer zum Hafen', maps: 'Google Maps: „Walls of Dubrovnik, Pile Gate" · 2026 Zeitfenster-Ticket vorab buchen' },
    { name: 'Stradun (Placa)', desc: '300 m lange, glattpolierte Kalksteinpromenade mit Barockfassaden, Franziskanerkloster samt Alter Apotheke und Uhrturm am Luža-Platz — das pulsierende Herz der Altstadt.', time: 'Goldene Stunde für warmen Steinglanz, vor 08:30 oder nach 21:00 Uhr für Leere', photoTip: 'Längsachse vom Onofrio-Brunnen Richtung Uhrturm', maps: 'Google Maps: „Stradun Dubrovnik"' },
    { name: 'Fort Lovrijenac', desc: '37 m hohe Klippenfestung vor den Stadtmauern — als „Red Keep" aus Game of Thrones weltberühmt. Der beste Blick gelingt von außen, von den Buža-Klippen oder vom Kajak aus.', time: 'Später Nachmittag, Golden Hour', photoTip: 'Von den Buža-Klippen aus, Festung im Gegenlicht über dem Meer', maps: 'Google Maps: „Fort Lovrijenac Dubrovnik" · ~€15 einzeln, gratis mit 3-Tage-Mauerticket' },
    { name: 'Rektorenpalast (Rector\'s Palace)', desc: 'Gotisch-renaissancistischer Palast, einst Sitz der Republik Ragusa, heute Kulturhistorisches Museum — ein kühler, schattiger Ausweichpunkt in der Mittagshitze.', time: '09:00–18:00 (Sommer), ideal in der Mittagshitze', photoTip: 'Arkadenhof mit Säulenreihen', maps: 'Google Maps: „Rector\'s Palace Dubrovnik" · ~€15' },
    { name: 'Fort St. John & Aquarium', desc: 'Bewacht die Einfahrt zum Alten Hafen; beherbergt ein kleines Adria-Aquarium und das Maritime Museum — kompakt, aber charmant für eine kurze Pause.', time: '~10:00–19:00, montags geschlossen', photoTip: 'Vom Fort zurück Richtung Alter Hafen und Fischerboote', maps: 'Google Maps: „Fort St John Dubrovnik" · ~€8–20' },
    { name: 'Mt Srđ — Gipfel-Panorama', desc: '412 m hoher Hausberg mit Seilbahn, Blick über die gesamte Halbinsel und die Elaphiten-Inseln — der beste Sonnenuntergangspunkt der ganzen Region.', time: 'Sonnenuntergang, 60–90 Min. früher ankommen', photoTip: 'Weites Panorama Richtung Westen über Altstadt und Meer', maps: 'Google Maps: „Mount Srđ Dubrovnik" · Talstation 10–15 Gehmin. ab Pile Gate, Retourticket ~€30' },
    { name: 'Lokrum-Insel', desc: '15-minütige Fähre vor die Altstadt: botanischer Garten, das salzige „Tote Meer", ein GoT-„Eiserner Thron"-Nachbau und versteckte Badestellen.', time: 'Mittag bis später Nachmittag, letzte Fähre beachten', photoTip: 'Aussichtspunkt mit Blick zurück auf die ummauerte Altstadt', maps: 'Google Maps: „Lokrum Island" · Fähre + Eintritt kombiniert ~€30' },
    { name: 'Buža Bar & GoT-Spaziergang', desc: 'Klippenbars direkt über der Adria, nur Bargeld, Kultur des Cliff-Jumpings — Dubrovniks fotogenster Treffpunkt. Kombinierbar mit dem kostenlosen Game-of-Thrones-Rundgang (Pile Gate, Jesuiten-Treppe, Lovrijenac-Außenansicht, Minčeta-Turm).', time: 'Golden Hour bis Sonnenuntergang', photoTip: 'Vom Klippenrand westlich übers offene Meer oder Richtung Lovrijenac', maps: 'Google Maps: „Buža Bar Dubrovnik"' },
  ],
  dishes: [
    { name: 'Crni rižot (schwarzes Risotto)', desc: 'Risotto mit Tintenfischtinte geschwärzt und mit Meeresfrüchten verfeinert — dalmatinischer Klassiker mit intensivem, salzigem Meeresgeschmack.', price: '€18–25', where: 'Konoba Dubrava, Restaurant Proto', tip: 'Mit einem Glas Pošip dazu bestellen.' },
    { name: 'Peka (unter der Eisenglocke)', desc: 'Fleisch oder Oktopus mit Gemüse, stundenlang unter einer glühenden Eisenglocke gegart — butterzart, aromatisch, immer für mindestens zwei Personen.', price: '€25–35/Portion (für 2+)', where: 'Traditionelle Konobas abseits der Stradun', tip: 'Unbedingt 24–48 Std. im Voraus bestellen!' },
    { name: 'Gegrillter Fisch (Wolfsbarsch/Dorade)', desc: 'Frischer Adria-Fisch, meist nach Gewicht abgerechnet und für zwei Personen geteilt — schlicht mit Olivenöl, Zitrone und gegrilltem Gemüse serviert.', price: '€60–90+/kg', where: 'Restaurants entlang des Alten Hafens', tip: 'Vor der Bestellung Gewicht/Preis genau bestätigen lassen.' },
    { name: 'Dalmatinischer Pršut & Käse', desc: 'Luftgetrockneter Rohschinken mit Paški sir (Schafskäse von der Insel Pag) — die klassische Vorspeisenplatte zum Teilen.', price: '€12–18', where: 'Jede Konoba', tip: 'Perfekt als leichter Einstieg vor Peka oder Fisch.' },
    { name: 'Rozata', desc: 'Dubrovniks eigene Karamell-Crème-Variante, mit Rosenlikör verfeinert — leicht, blumig, die perfekte Antwort auf die Sommerhitze.', price: '€6–8', where: 'Fast jede Konoba als Dessert', tip: 'Süß, aber nicht schwer — auch nach einer großen Peka noch machbar.' },
    { name: 'Pošip & Plavac Mali (Wein)', desc: 'Pošip — mineralischer Weißwein von der Insel Korčula; Plavac Mali — kräftiger Rotwein von der Halbinsel Pelješac, Verwandter des Zinfandel.', price: '€6–10/Glas, €25–45/Flasche', where: 'Jede Weinkarte in der Altstadt', tip: 'Pošip zu Fisch/Risotto, Plavac Mali zu Peka.' },
    { name: 'Šporki makaruli („schmutzige Makkaroni")', desc: 'Dubrovniks eigene Pasta mit langsam geschmortem Rindfleisch-Ragù — historisch mit dem Fest des Heiligen Blasius verbunden, deutlich weniger touristisch als Crni rižot.', price: '€14–18', where: 'Konobas abseits der Stradun', tip: 'Gezielt danach fragen — steht selten prominent auf der Karte.' },
  ],
  culinaryNote: `
    <div class="infobox gold"><div class="infobox-title"><span class="icon">💶</span>Stradun-Aufschlag</div>
    <p>Faustregel: Bäckerei/Streetfood €7–10, Mittelklasse-Konoba €20–35, Abendessen zu zweit mit Wein €60–90, Spitzengastronomie €150–200+ zu zweit. Straßen nur eine Gasse landeinwärts von der Stradun kosten oft nur die Hälfte des Preises direkt an der Promenade — ein paar Schritte weglaufen lohnt sich fast immer.</p></div>
  `,
  restaurants: [
    { category: 'Preis-Leistung', name: 'Dalmatino', area: 'Nahe Gundulić-Platz', price: '€€', rating: '', note: 'Verlässliche Meeresfrüchteküche mit besonders gutem Thunfischsteak, faires Preisniveau für die Altstadtlage.', pick: 'Das Thunfischsteak' },
    { category: 'Gehoben', name: 'Restaurant 360', area: 'In die Stadtmauer integriert', price: '€€€', rating: 'Michelin-Stern', note: 'Adriatisch-französische Küche mit Blick auf den Alten Hafen — Reservierung essenziell, Preise ab €100+/Person.', pick: 'Degustationsmenü mit Meerblick-Tisch' },
    { category: 'Geheimtipp', name: 'Konoba Dubrava', area: 'Wohnviertel, Nord-Altstadt', price: '€€', rating: '', note: 'Ehrlichere Preise abseits des Touristenstroms, hervorragender Oktopus-Peka und Crni rižot.', pick: 'Oktopus-Peka (vorbestellen!)' },
    { category: 'Frühstück/Café', name: 'Cogito Coffee Shop', area: '2 Standorte in der Altstadt', price: '€', rating: 'Dubrovniks bester Kaffee', note: 'Konsequent als bestes Kaffeehaus der Stadt gehandelt — ideal für den Kaffeestopp nach dem Mauer-Rundgang.', pick: 'Flat White + hausgemachtes Gebäck' },
    { category: 'Rooftop/Klippenbar', name: 'Buža Bar', area: 'Klippen außerhalb der Stadtmauer', price: '€€', rating: '', note: 'Kultstatus-Cliffside-Bar über der offenen Adria, nur Bargeld — legendär für Sonnenuntergang und Cliff-Jumping.', pick: 'Kaltes Karlovačko mit Meerblick' },
  ],
  drinksNote: `<div class="infobox navy"><div class="infobox-title"><span class="icon">🏖️</span>Buža-Klippenkultur</div><p>Die Buža-Bars hängen buchstäblich in der Stadtmauer und öffnen sich direkt zur offenen Adria — nur Bargeld, einfache Getränke, aber die vielleicht beste Aussicht der Stadt. Trotz Dubrovniks mondänem Ruf ist die Stimmung hier jung und leger — ein guter Ort für Alleinreisende zum Anschluss finden.</p></div>`,
  activities: [
    { emoji: '🥇', name: 'Kajak — Stadtmauer & Lokrum', desc: 'Seekajak ab Pile Bay direkt unter der Stadtmauer und Fort Lovrijenac entlang, Schwimm-/Schnorchelstopp an der Betina-Höhle, Schleife zur Insel Lokrum.', price: 'Tagestour €32–35 (2–2,5 Std.) · Sunset-Tour €40–45 (3 Std., inkl. Wein) · Ganztags Elaphiten €70–100+', duration: '2–3 Std.', why: 'Einzigartiger Tiefwinkel-Blick auf Mauer und Lovrijenac, aktiv, kühlt in der Augusthitze ab und fühlt sich abenteuerlich statt touristisch an.', link: 'GetYourGuide/Viator „Dubrovnik Sea Kayaking & Snorkelling — Guided Day/Sunset Tour" (Adventure Dubrovnik, mehrfach TripAdvisor „Best of the Best")' },
    { emoji: '🥈', name: 'Speedboot — Elaphiten & Blaue Grotte', desc: 'Speedboot-Tour zu den Elaphiten-Inseln mit Stopp an der Blauen Grotte (Koločep), Lopud/Šunj-Strand, gelegentlich Šipan.', price: 'ab ca. $57–89 (4–8 Std., je nach Tour) · Privatcharter (6–7 Pers., 6 Std.) ~€570–630 gesamt', duration: '4–8 Std.', why: 'Deckt gleich mehrere Inseln und die berühmte Blaue Grotte an einem Nachmittag ab — ideal, wer mehr Wasser und weniger Gehen will.', link: '„Elaphiti Islands & Blue Cave Speedboat Tour" · 4,8★ (719 Bew.) — Achtung: Treibstoffzuschlag (~€60–150) oft an Bord fällig' },
    { emoji: '🥉', name: 'Stadtmauer — geführt/selbstständig', desc: 'Der 2-km-Rundgang auf der historischen Wehrmauer, wahlweise mit Skip-the-Line-Ticket oder Führung.', price: '€35–40', duration: '1–2 Std.', why: 'Unverhandelbares Pflichtprogramm — nur auf Platz 3, weil es ein Spaziergang statt Adrenalin ist. Termin unbedingt auf 08:00 Uhr legen, egal was sonst gebucht ist.', link: 'wallsofdubrovnik.com / ulaznice.hr oder GetYourGuide/Viator Skip-the-Line — 2026 Zeitfenster-Buchung Pflicht' },
  ],
  activityNote: `<div class="infobox teal"><div class="infobox-title"><span class="icon">🛶</span>Kajak-Vergleich: Dubrovnik vs. Kotor</div><p><b>Dubrovnik</b> bietet eine offene Adria-Route direkt an der Stadtmauer entlang, mit Höhlenstopp und Lokrum-Schleife — ein Premium-Produkt mit Postkarten-Sonnenuntergang, aber spürbarem Wellengang. <b>Kotor</b> dagegen paddelt in einer geschützten, fjordartigen Bucht: ruhigeres, flacheres Wasser, dramatische Bergkulisse und rund 35 % günstiger — besser für Einsteiger und alle, die Landschaft über Adrenalin stellen. Wer beide Häfen dieser Reise anläuft, sollte sich bewusst für eine der beiden Erfahrungen entscheiden statt beide zu buchen.</p></div>`,
  photoSpots: [
    { n: 1, name: 'Stadtmauer West (Bokar/Minčeta)', time: 'Sonnenaufgang / 08:00 Öffnung', dir: 'SO über die Dächer zum Hafen', why: 'Nur in den ersten 30–45 Min. wirklich menschenleer.' },
    { n: 2, name: 'Mt Srđ Gipfel', time: 'Sonnenuntergang, 60–90 Min. früher', dir: 'Westlich über Halbinsel und Meer', why: 'Das beste Sonnenuntergangs-Panorama der ganzen Region.' },
    { n: 3, name: 'Buža Bar/Gate Klippen', time: 'Golden Hour/Sonnenuntergang', dir: 'Westlich über die Adria oder Richtung Lovrijenac', why: 'Nur Bargeld — früh kommen für einen Sitzplatz.' },
    { n: 4, name: 'Alter Hafen (Stara Luka)', time: 'Früher Morgen/Blaue Stunde', dir: 'Richtung Fort St. John/Fischerboote', why: 'Tolle Spiegelungen, ruhig im Morgengrauen.' },
    { n: 5, name: 'Buža-Klippen → Fort Lovrijenac', time: 'Später Nachmittag/Golden Hour', dir: 'NW Richtung Lovrijenac + Mauern', why: 'DAS ikonische Dubrovnik-Postkartenmotiv.' },
    { n: 6, name: 'Lokrum-Aussichtspunkt', time: 'Mittag bis später Nachmittag', dir: 'Zurück Richtung Altstadt', why: 'Weites Bild der gesamten ummauerten Halbinsel.' },
    { n: 7, name: 'Ploče Gate (Außenansicht)', time: 'Morgen', dir: 'Westlich Richtung Mauern/Lovrijenac', why: 'Deutlich weniger Trubel als auf der Pile-Seite.' },
    { n: 8, name: 'Stradun (Onofrio-Brunnen)', time: 'Vor 08:30 oder nach 21:00', dir: 'Die Promenade entlang', why: 'Nur an den Tagesrändern wirklich leer.' },
    { n: 9, name: 'Fort Bokar/Pile Gate Außenseite', time: 'Morgen', dir: 'Zugbrücke/Mauern im Rahmen', why: 'Klassischer „King\'s-Landing-Eingang"-Blick.' },
    { n: 10, name: 'Kajak/Boot unter der Mauer', time: 'Sunset-Tour', dir: 'Aufwärts zu Mauer + Lovrijenac vom Wasser aus', why: 'Einzigartiger Blickwinkel, nur vom Wasser aus möglich.' },
  ],
  itinerary: [
    { time: '08:00', text: 'Von Bord, Bus/Shuttle Gruž → Pile Gate (~15 Min.)' },
    { time: '08:20', text: 'Stadtmauer-Rundgang direkt zur Öffnung — leer und kühl' },
    { time: '10:00', text: 'Kaffeepause bei Orlando Café oder Cogito Coffee Shop' },
    { time: '10:30', text: 'Game-of-Thrones-Spaziergang: Pile Gate, Jesuiten-Treppe, Lovrijenac-Außenansicht' },
    { time: '11:15', text: 'Fort Lovrijenac besichtigen (im Mauerticket inbegriffen)' },
    { time: '12:15', text: 'Mittagessen abseits der Stradun, z. B. Richtung Konoba Dubrava' },
    { time: '13:15', text: 'Seekajak-Tour: Mauer, Betina-Höhle, Lokrum-Schleife — zugleich Abkühlung' },
    { time: '16:15', text: 'Kaltes Getränk mit Klippenblick in der Buža Bar' },
    { time: '17:00', text: 'Rückweg zum Pile Gate, Bus/Shuttle nach Gruž, an Bord' },
  ],
  planA: '<p>Stadtmauer exakt zur Öffnung um 08:00 Uhr, danach GoT-Spaziergang und Fort Lovrijenac, am Nachmittag Kajaktour unter der Mauer bis Lokrum — das volle Aktiv- und Fotoprogramm bei perfektem Wetter.</p>',
  planB: '<p>Bei Wind/Regen: Rektorenpalast und Franziskanerkloster mit Alter Apotheke als überdachte Highlights, danach Café-Kultur entlang der geschützten, überdachten Stradun-Passagen und ein längerer Museumsbesuch im Fort St. John.</p>',
  planC: '<p>Ohne Ausflugsbuchung: Stadtmauer zur Öffnung, GoT-Spaziergang, Stradun, Rektorenpalast und ein Nachmittagsdrink in der Buža Bar — Dubrovnik lässt sich komplett zu Fuß ab Pile Gate erleben.</p>',
  budget: { low: '€50–70', normal: '€100–150', premium: '€250–400+' },
  practicalHtml: `
    <p><b>Geldautomat/Apotheke:</b> Alte Apotheke (seit 1317, arbeitende Apotheke + Museum) direkt hinter dem Pile Gate an der Stradun. Weitere Apotheken/Geldautomaten bündeln sich rund um Pile Gate und entlang der Stradun — Bankwand-Automaten freistehenden Euronet-artigen Automaten vorziehen (schlechtere Kurse/Gebühren).</p>
    <p><b>Nahe dem Hafen (Gruž):</b> Konzum-Supermarkt sowie Apotheken/Geldautomaten am Busterminal/Markt von Gruž — spürbar günstiger als Altstadtpreise.</p>
    <p><b>Sicherheit:</b> Insgesamt sehr sicher; Hauptrisiko sind Taschendiebe in Engpässen — Stradun, Warteschlange am Pile Gate, Mauereingang, Seilbahn-Warteschlange, Busse und Hafenbereich.</p>
    <p><b>Dubrovnik ist der teuerste Hafen dieser Reise</b> — Budget entsprechend höher ansetzen als in Triest oder Bari.</p>
  `,
  soloHtml: `<p>Die Buža Bar wirkt trotz Dubrovniks mondänem Ruf jung und leger (Backpacker-Publikum) — guter Anschlusspunkt zum Sonnenuntergang. Auch die Bars am Banje Beach nahe dem Ploče Gate ziehen ein gemischtes, gesellig-solotaugliches Publikum an.</p>`,
  shoppingHtml: `<p>Pošip oder Plavac Mali als Flaschenmitbringsel, Lavendelprodukte von den Elaphiten, kleine Steinmetz-/Keramikarbeiten aus der Altstadt — abseits der Stradun-Läden meist deutlich günstiger.</p>`,
};

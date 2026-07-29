'use strict';
module.exports = {
  key: 'kotor',
  name: 'Kotor',
  country: 'Montenegro',
  tagline: 'Festungsmauern über einem Fjord — Montenegros dramatischster Hafentag',
  ratings: { action: 5, kulinarik: 4, fotospots: 5, kreuzfahrt: 5 },
  quickFacts: {
    Liegeplatz: 'Direkt an der Altstadtmauer*',
    Gehzeit: '~5 Min. zum Seetor',
    Tender: 'Selten (bei Doppelbelegung)',
    Landessprache: 'Montenegrinisch',
  },
  arrivalInfobox: `
    <p><b>Eine der spektakulärsten Anlegestellen der Adria.</b> Mein Schiff 4 legt direkt an der östlichen mittelalterlichen Stadtmauer der UNESCO-Altstadt an — kein Hafenvorfeld, kein Industriegelände, sondern Festungsmauer zum Anfassen direkt an der Gangway. Bis zum Seetor (Morska vrata) sind es nur ca. 300–400 m, rund 5 Minuten flacher Uferweg, am Vormittag noch im Schatten der Mauer. An manchen Tagen liegt das Schiff sogar praktisch direkt am nächstgelegenen Punkt — dann ist es buchstäblich ein Katzensprung.</p>
    <p><b>Selten: Tender-Betrieb.</b> Liegen an Spitzentagen mehrere Kreuzfahrtschiffe gleichzeitig in der Bucht oder ist das Schiff zu groß für den Hauptkai, wird stattdessen zu einer nahen Anlegestelle getendert — im Bordprogramm des Ankunftsmorgens prüfen.</p>
    <p><b>Orientierung:</b> Durch das Seetor direkt auf den Trg od Oružja (Waffenplatz) — die gesamte ummauerte Altstadt lässt sich in ca. 10 Minuten von einem Ende zum anderen durchqueren. Der Einstieg zum Festungs-/Mauerpfad liegt an der Nordostseite, nahe der Kirche Our Lady of Health.</p>
    <p class="tiny">* Kein Tender-Hafen im Regelfall — das Schiff liegt direkt an der Kaimauer, in Sichtweite der historischen Stadtmauer.</p>
  `,
  map: {
    water: [{ x: 0, y: 60 }, { x: 100, y: 55 }, { x: 100, y: 100 }, { x: 0, y: 100 }],
    land: [
      [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 55 }, { x: 0, y: 60 }],
    ],
    route: [{ x: 12, y: 58 }, { x: 20, y: 55 }, { x: 28, y: 51 }, { x: 34, y: 44 }, { x: 38, y: 32 }, { x: 40, y: 20 }],
    points: [
      { n: 1, x: 12, y: 58, cat: 'ship', label: 'Schiff (an der Mauer)' },
      { n: 2, x: 24, y: 54, cat: 'gate', label: 'Seetor' },
      { n: 3, x: 37, y: 49, cat: 'sight', label: 'Kathedrale St. Tryphon' },
      { n: 4, x: 50, y: 53, cat: 'sight', label: 'Cats Museum' },
      { n: 5, x: 40, y: 20, cat: 'activity', label: 'Festung San Giovanni' },
      { n: 6, x: 64, y: 46, cat: 'food', label: 'Konoba Scala Santa' },
      { n: 7, x: 20, y: 40, cat: 'practical', label: 'ATM/Apotheke' },
      { n: 8, x: 78, y: 78, cat: 'photo', label: 'Bucht Richtung Perast' },
    ],
  },
  qr: {
    routeLabel: 'Kotor Old Town, Sea Gate',
    tourismLabel: 'Montenegro Tourism',
  },
  orientationNote: `
    ${'<div class="section-title" style="border:none;padding:0"></div>'}
    <div class="infobox coral">
      <div class="infobox-title"><span class="icon">🚶</span>Direkt an der Mauer</div>
      <p>Kein anderer Hafen dieser Reise liegt näher am Ziel: Vom Schiff bis zum Seetor sind es nur wenige Gehminuten am Wasser entlang. Der Festungspfad startet direkt in der Altstadt an der Nordostecke — kein Bus, kein Taxi nötig, dafür umso wichtiger: früh starten, bevor die Hitze zuschlägt.</p>
    </div>
  `,
  highlights: [
    { name: 'Kotor Altstadt (Stari Grad)', desc: 'Ummauerte mittelalterliche UNESCO-Altstadt mit venezianischen Gassen, Palazzi und Plätzen aus dem 12.–18. Jahrhundert — frei zugänglich und zu Fuß in Minuten durchquert.', time: 'Früh am Morgen (vor 9 Uhr, leer und warmes Licht) oder nach 18:00 Uhr, wenn die Tagesgäste abziehen', photoTip: 'Enge Gassen nahe der Kathedrale und des St.-Lukas-Platzes, Katzen und Steintexturen', maps: 'Google Maps: „Kotor Old Town"' },
    { name: 'Stadtmauer & Festung San Giovanni (Sveti Ivan)', desc: 'Der Aufstieg über ca. 1.350 unregelmäßige Stufen und 260–280 Höhenmeter zur Festungsruine — gebaut in illyrisch-byzantinisch-venezianischen Schichten vom 9. bis 19. Jahrhundert. Die Plattform kurz unterhalb des Gipfels bietet den besseren Ausblick als die Spitze selbst.', history: 'Über 1.000 Jahre als Verteidigungsanlage der Bucht ausgebaut und erweitert.', time: 'Start unbedingt 7:00–7:30 Uhr — im August 28–32 °C, kaum Schatten am Weg, Rekordwerte bis 40 °C', photoTip: 'Plattform kurz vor dem Gipfel, Blick SW über Dächer und Bucht — Sonnenuntergang lohnt hier NICHT, der Berg blockiert das Abendlicht', maps: 'Google Maps: „Fortress of San Giovanni Kotor" · Eintritt ~€8, Ticketschalter am Nordtor oder online Skip-the-Line' },
    { name: 'Kathedrale des Heiligen Tryphon', desc: 'Romanische Kathedrale von 1166 auf einem Fundament aus dem 9. Jahrhundert, mit zwei ungleichen Barock-Türmen (Wiederaufbau nach dem Erdbeben von 1667) und den Reliquien des Stadtheiligen.', time: 'Vormittags, kühl und ruhig', photoTip: 'Fassade vom Trg od Oružja aus, Turmpaar im Rahmen', maps: 'Google Maps: „Cathedral of Saint Tryphon Kotor" · Eintritt ~€4, nur Bargeld' },
    { name: 'Aussichten über die Bocca di Cattaro', desc: 'Die Bucht von Kotor gilt als Europas südlichster „Fjord" — geologisch ein versunkenes Flusstal zwischen Kalksteinbergen. Die besten Überblicke liefern Festungsaufstieg, Leiter von Kotor oder Seilbahn.', time: 'Ganztägig, morgens klarste Sicht', photoTip: 'Von oben wirkt die Bucht wie ein Bergsee — Weitwinkel einsetzen', maps: 'Google Maps: „Bay of Kotor"' },
    { name: 'Perast & Our Lady of the Rocks', desc: 'Perast: makelloser Barockort ca. 25 Fahrminuten entfernt, venezianische Palazzi, deutlich weniger Trubel als Kotor. Vorgelagert die künstliche Insel Gospa od Škrpjela mit Kirche von 1452 (Legende: eine Ikone auf einem Felsen gefunden), 68 Barockfresken von Tripo Kokolja und über 2.500 silbernen Votivtafeln.', history: 'Der Legende nach begannen Fischer 1452 mit dem Aufschütten des Felsens, nachdem dort eine Marienikone gefunden wurde — bis heute wird jährlich mit Steinwürfen die Insel symbolisch erweitert.', time: 'Meist als 15–20-minütiger Stopp auf der Speedboot-Tour', photoTip: 'Von Bord bei der Anfahrt oder vom Perast-Ufer bei Sonnenuntergang', maps: 'Google Maps: „Our Lady of the Rocks Perast" · Inseleintritt ca. €5' },
    { name: 'Cats Museum', desc: 'Kleines, liebevolles Museum nahe der Kirche Our Lady of Angels mit über 1.500 katzenthematischen Exponaten — Hommage an Kotors Ruf als „Stadt der Katzen", die überall in den Gassen unterwegs sind.', time: '30–60 Min., jederzeit', photoTip: 'Katzen in den Gassen davor sind oft das bessere Motiv', maps: 'Google Maps: „Cats Museum Kotor" · Eintritt ~€1' },
    { name: 'Leiter von Kotor (Ladder of Kotor)', desc: 'Historischer Zickzack-Maultierpfad mit über 25 Serpentinen hinauf Richtung Krstac-Pass (940 m), Njeguši und Cetinje — der klassische Postkartenblick auf Festung, Altstadt und Bucht zugleich, deutlich weniger besucht als die Festung selbst.', time: 'Vormittag, vor dem Dunst', photoTip: 'Serpentine ~16–18 (nach 500–600 m) — die meisten gehen nur bis hierhin, reicht für das komplette Panorama', maps: 'Google Maps: „Ladder of Kotor Viewpoint"' },
    { name: 'Kotor–Lovćen Seilbahn (Bonus)', desc: 'Seit August 2023 in Betrieb, ca. 11 Minuten Fahrzeit hinauf zum Lovćen-Massiv — dasselbe Buchtpanorama ohne den Aufstieg. Die Talstation ist vom Hafen aus nicht zu Fuß erreichbar und lässt sich an einem Tag kaum mit Festung und Bootstour kombinieren.', time: 'Nachmittags, als Alternative statt Ergänzung zum Festungsaufstieg', photoTip: 'Von der Bergstation weiter Blick über die gesamte Bucht', maps: 'Google Maps: „Kotor Lovcen Cable Car" · Retourticket ca. €20' },
  ],
  dishes: [
    { name: 'Njeguški pršut', desc: 'Kaltgeräucherter Rohschinken aus Njeguši am Fuß des Lovćen, ca. 4 Monate gereift — würzig-rauchig, Montenegros bekannteste Delikatesse.', price: '€8–14 (gemischte Platte)', where: 'Jede Konoba in der Altstadt', tip: 'Immer zusammen mit Njeguški sir und einem Glas Vranac bestellen.' },
    { name: 'Njeguški sir', desc: 'Fester, würzig-scharfer Schafskäse aus derselben Region wie der Pršut — vergleichbar mit reifem Pecorino.', price: '€6–10 (Platte)', where: 'Konobas & Käsestände in der Altstadt', tip: 'Klassische Kombination mit Pršut und Oliven.' },
    { name: 'Muscheln & Austern aus der Bucht', desc: 'Brackwasser-Zucht bei Risan/Ljuta ergibt kleinere, intensiv schmeckende Austern (kamenice); Muscheln (dagnje) meist „na buzaru" in Wein, Knoblauch und Tomate geschmort.', price: 'Muscheln €12–18, Austern €1,50–3/Stück', where: 'Konoba Scala Santa oder direkt ab Farm bei Boka Seafood/Luka\'s Oyster Farm (Risan)', tip: 'Wer Zeit hat: direkt an der Farm probieren, frischer geht es nicht.' },
    { name: 'Gegrillter Fisch (riba na žaru)', desc: 'Frischer Brancin oder Orada, nach Gewicht abgerechnet — schlicht gegrillt mit Olivenöl und Zitrone.', price: '€35–55/kg', where: 'Pescaria Dekaderon, Forza Mare, Hafen-Konobas', tip: 'Preis pro Kilo vor der Bestellung bestätigen lassen — klassische Touristenfalle.' },
    { name: 'Kačamak', desc: 'Deftiger Maisgrieß-Kartoffel-Brei mit Käse und Kajmak — bergige Hausmannskost, die auf touristischen Speisekarten selten prominent steht.', price: '€8–12', where: 'Traditionelle, weniger touristische Konobas', tip: 'Gezielt danach fragen, wenn es nicht auf der Karte steht.' },
    { name: 'Vranac (Rotwein)', desc: 'Montenegros einheimische Rebsorte, vollmundig wie Zinfandel/Primitivo — Plantaže ist die große Marke, es lohnt sich aber, kleinere Erzeuger zu suchen.', price: '€3–6/Glas, €15–25/Flasche', where: 'Jede Weinkarte in der Altstadt', tip: 'Perfekte Begleitung zu Pršut und gegrilltem Fleisch.' },
    { name: 'Priganice', desc: 'Frittierte Teigbällchen, süß oder salzig serviert — traditionelles Gastfreundschaftsgebäck, das in Montenegro Gästen klassisch als Willkommensgruß angeboten wird.', price: '€4–7', where: 'Konobas als Dessert', tip: 'Mit Honig oder Marmelade zum Abschluss des Essens.' },
  ],
  culinaryNote: `
    <div class="infobox gold"><div class="infobox-title"><span class="icon">🦪</span>Austern direkt ab Farm</div>
    <p>Bei Risan bzw. am Flüsschen Ljuta betreiben Familienbetriebe wie Boka Seafood/Luka's Oyster Farm ihre eigene Muschel- und Austernzucht mitten in der Bucht — Genuss wenige Meter von der Ernte entfernt, per kurzer Taxifahrt oder Bootstransfer erreichbar. Ein authentisches Erlebnis, das man an kaum einem anderen Adria-Hafen dieser Reise so unmittelbar hat.</p></div>
  `,
  restaurants: [
    { category: 'Preis-Leistung', name: 'Konoba Scala Santa', area: 'Altstadt, seit 1931', price: '€€', rating: '~4,5 ★ (939+ Bew.)', note: 'Kotors erstes Fischrestaurant überhaupt — Fischsuppe, Thunfisch, Oktopus und schwarzes Risotto in familiärer Atmosphäre; Tisch vorab reservieren.', pick: 'Fischsuppe + schwarzes Risotto' },
    { category: 'Gehoben', name: 'Forza Mare', area: 'Uferpromenade', price: '€€€', rating: '', note: 'Elegante Wasserterrasse, technisch anspruchsvolle mediterrane Küche mit montenegrinischen Scampi als Highlight.', pick: 'Montenegrinische Scampi' },
    { category: 'Geheimtipp', name: 'Boka Seafood / Luka\'s Oyster Farm', area: 'Risan/Ljuta (kurzer Transfer)', price: '€€', rating: '', note: 'Arbeitende Muschel- und Austernfarm mit eigenem Restaurantbetrieb — Meeresfrüchte direkt von der Zucht auf den Teller.', pick: 'Austern & Muscheln na buzaru' },
    { category: 'Bester Fisch', name: 'Pescaria Dekaderon', area: 'Hafen-Terrasse', price: '€€', rating: '', note: 'Terrasse mit Hafenblick, gegrillter Fisch, Meeresfrüchte-Risotto und Muscheln in verlässlicher Qualität.', pick: 'Gegrillter Fisch des Tages' },
    { category: 'Frühstück/Café', name: 'Mon Bistro Cafétéria / Dojmi', area: 'Nahe Kathedrale / an der Riva', price: '€', rating: 'Kotors bester Kaffee', note: 'Französisch inspiriertes Café mit sehr gutem Ruf; Dojmi an der Riva punktet mit Porridge, French Toast und Trilece.', pick: 'Flat White + French Toast bei Dojmi' },
  ],
  drinksNote: `<div class="infobox navy"><div class="infobox-title"><span class="icon">💶</span>Euro ohne EU</div><p>Kurioser Fakt: Montenegro verwendet den Euro als Zahlungsmittel, ist aber weder EU- noch Eurozonen-Mitglied — für deutsche Reisende bedeutet das keinen Geldwechsel, aber auch keine EU-Verbraucherschutzstandards. Karten werden fast überall akzeptiert, etwas Bargeld für Kathedrale, Cats Museum und kleine Konobas trotzdem einplanen.</p></div>`,
  activities: [
    { emoji: '🥇', name: 'Speedboot Blaue Grotte & Our Lady of the Rocks', desc: 'Speedboot-Gruppentour entlang Perast, Stopp an Our Lady of the Rocks (15–20 Min.), Schwimmstopp in der Blauen Grotte (Plava Špilja), teils inklusive der WWII-U-Boot-Tunnel.', price: 'Gruppentour ca. €30–45 p.P., Privatboot ab ca. €90+', duration: '~3 Std.', why: 'Deckt die schönsten Punkte der Bucht — Perast, Klosterinsel, Höhle — an einem Vormittag ab, mit garantiertem Bade-/Schnorchelstopp.', link: 'GetYourGuide: „Kotor: The #1 Rated Blue Cave & Our Lady of the Rocks Tour" · durchgehend 4,5–5★ bewertet' },
    { emoji: '🥈', name: 'Kajak — Bucht von Kotor', desc: 'Geführte Seekajak-Tour an der Küste entlang, vorbei an Fischerdörfern, mit Schwimm-/Schnorchelstopps und optionalem Klippensprung; keine Vorkenntnisse nötig, Ausrüstung inklusive.', price: 'ab ca. $42 (3,5 Std., inkl. Cliff-Jumping) bzw. ab ca. $58 (2,5-Std.-Variante)', duration: '2,5–3,5 Std.', why: 'Ruhiges, geschütztes Wasser in fjordartiger Kulisse — deutlich entspannter als die offene Adria, dabei genauso fotogen.', link: 'GetYourGuide: „Guided Kotor Bay Kayaking Tour" 4,9★ (62 Bew.) · „Bay of Kotor: 2.5-Hour Kayak Tour" 4,8★ (55 Bew.)' },
    { emoji: '🥉', name: 'Festung San Giovanni — Selbstständiger Aufstieg', desc: 'Der 1.350-Stufen-Aufstieg zur Festungsruine über der Altstadt, selbstständig ohne Führung begehbar.', price: '~€8 Eintritt', duration: '2 Std. (mit Abstieg)', why: 'Nur auf Platz 3, weil kein buchbares Produkt — de facto aber die beste kostenlose Fotogelegenheit des Tages. 1,5 L+ Wasser, Kopfbedeckung, Sonnenschutz und feste Schuhe sind Pflicht.', link: 'Ticketschalter am Nordtor oder Online-Skip-the-Line-Ticket' },
  ],
  activityNote: `<div class="infobox teal"><div class="infobox-title"><span class="icon">🛶</span>Kajak-Vergleich: Kotor vs. Dubrovnik</div><p><b>Kotor</b> paddelt in einer geschützten, fjordartigen Bucht zwischen steilen Bergflanken — glattes, ruhiges Wasser, ideal für Einsteiger, mit dem einzigartigen Ziel, zu einer 500 Jahre alten Kirche auf einer künstlichen Insel zu paddeln (Our Lady of the Rocks). <b>Dubrovnik</b> dagegen bietet eine offene Adria-Route direkt an der Stadtmauer entlang, mit spürbarerem Wellengang und dem Reiz, die Festung vom Wasser aus zu sehen. Wer beide Häfen dieser Reise anläuft, sollte sich bewusst für eine der beiden Erfahrungen entscheiden statt beide zu buchen.</p></div>`,
  photoSpots: [
    { n: 1, name: 'Festungsplattform knapp unter dem Gipfel', time: 'Sonnenaufgang/früher Morgen', dir: 'SW über Dächer und Bucht', why: 'Besserer Blick als von der eigentlichen Spitze — Abends blockiert der Berg das Licht.' },
    { n: 2, name: 'Festungspfad, halbe Höhe (Kirchenruine)', time: 'Vormittag', dir: 'Mauern, die sich die Felswand hinaufschlängeln', why: 'Weitwinkel-Motiv der gesamten Anlage.' },
    { n: 3, name: 'Hafen/Pier mit Schiff im Bild', time: 'Früher Morgen oder Golden Hour', dir: 'Von der Promenade südlich des Kais', why: 'Ungewöhnlich nahes Schiff-vor-Altstadt-Motiv.' },
    { n: 4, name: 'Leiter von Kotor, Serpentine ~16–18', time: 'Vormittag, vor dem Dunst', dir: 'Zurück auf Festung, Altstadt und Bucht zugleich', why: 'Das vollständigste Panoramamotiv des ganzen Tages.' },
    { n: 5, name: 'Altstadtgassen bei der Kathedrale/St.-Lukas-Platz', time: 'Früher Morgen oder blaue Stunde', dir: 'Enge Gassen, Wäscheleinen, Katzen', why: 'Nur außerhalb der Stoßzeiten wirklich menschenleer.' },
    { n: 6, name: 'Trg od Oružja (Waffenplatz)', time: 'Vormittag oder beleuchteter Abend', dir: 'Uhrturm und Kathedralenfassaden', why: 'Zentraler Platz mit den schönsten Fassaden der Altstadt.' },
    { n: 7, name: 'Perast-Uferpromenade', time: 'Mittag bis später Nachmittag', dir: 'Vom Boot oder Ufer auf die Barockpalazzi', why: 'Spiegelungen der Palazzi im Wasser, deutlich ruhiger als Kotor.' },
    { n: 8, name: 'Our Lady of the Rocks', time: 'Bei der Boots-Anfahrt oder Sonnenuntergang vom Perast-Ufer', dir: 'Insel im Gegenlicht vor den Bergen', why: 'Die Insel „glüht" in der tief stehenden Sonne.' },
    { n: 9, name: 'Gurdić-Bastion (Hafenmauern)', time: 'Golden Hour', dir: 'Mauern, die auf das Wasser treffen', why: 'Klassisches Licht-auf-Stein-Motiv am Wasser.' },
    { n: 10, name: 'Bar Monte 1350 (Seilbahn-Bergstation)', time: 'Später Nachmittag', dir: 'Weit über die gesamte Bucht', why: 'Nur sinnvoll, wenn die Seilbahn separat als Alternativprogramm eingeplant wird.' },
  ],
  itinerary: [
    { time: '08:00', text: 'Von Bord, ~5 Min. zu Fuß zum Seetor, kurzer Kaffee/Gebäck' },
    { time: '08:15', text: 'Aufstieg zur Festung San Giovanni (~€8) — jetzt starten, bevor Hitze und Menschen kommen' },
    { time: '10:15', text: 'Abstieg, Abkühlung mit kaltem Getränk/frischem Saft' },
    { time: '10:45', text: 'Altstadtbummel: Kathedrale St. Tryphon (€4), Cats Museum (€1)' },
    { time: '11:30', text: 'Zum Hafen für die vorgebuchte Speedboot-Tour Blaue Grotte & Our Lady of the Rocks' },
    { time: '11:30–14:30', text: 'Speedboottour: Perast, Our Lady of the Rocks (15–20 Min.), Schwimmstopp Blaue Grotte' },
    { time: '14:30', text: 'Spätes Mittagessen: Muscheln/Austern na buzaru in einer Konoba' },
    { time: '15:15', text: 'Freizeit: Shopping (Pršut, Käse, Wein), Fotos, Kaffeepause' },
    { time: '16:00', text: 'Optional: Leiter von Kotor teilweise hinauf für ein letztes Panoramafoto (nur bei Energiereserven)' },
    { time: '16:45', text: 'Rückweg zum Schiff einplanen — Zeitpuffer 30–45 Min.' },
  ],
  planA: '<p>Festungsaufstieg im Morgengrauen (7:00–7:30 Uhr Start), danach Altstadt mit Kathedrale und Cats Museum, am späteren Vormittag Speedboot-Tour zu Blauer Grotte und Our Lady of the Rocks — das volle Aktiv- und Fotoprogramm. Wichtig: Aufstieg plus Bootstour ist körperlich anspruchsvoll und zeitlich eng — Sonnenaufgang-Start ist unverzichtbar, ausreichend Wasser ist nicht verhandelbar.</p>',
  planB: '<p>Bei Wind/Regen: Kathedrale des Heiligen Tryphon und Cats Museum als überdachte Highlights, dazu ein gemütlicher Bummel durch die geschützten Altstadtgassen — den exponierten, bei Nässe rutschigen Festungsaufstieg an diesem Tag auslassen.</p>',
  planC: '<p>Ohne Ausflugsbuchung: Altstadt zu Fuß erkunden, Kathedrale und Cats Museum besuchen, dann einen Teilaufstieg der Festung wagen (schon die ersten Plattformen bieten großartige Ausblicke) — Kotor lässt sich komplett ohne Bootstour genießen.</p>',
  budget: { low: '€30–45', normal: '€70–110', premium: '€150–250+' },
  practicalHtml: `
    <p><b>Geldautomat:</b> rund um Seetor/Waffenplatz, zusätzlich ein freistehender Kiosk-Automat nahe dem Hafenausgang und im Einkaufszentrum Kamelija (~5 Gehminuten).</p>
    <p><b>Apotheke:</b> nahe dem Nordtor, meist 8–20 Uhr; größere Auswahl im Kamelija-Center.</p>
    <p><b>Supermarkt:</b> Ketten Voli und Idea entlang der Uferstraße, Voli auch im Kamelija-Center.</p>
    <p><b>Sicherheit:</b> Regional sehr sicher, kaum Gewaltkriminalität, sichtbare Polizeipräsenz, Altstadt auch abends unbedenklich. Einziges nennenswertes Risiko: Taschendiebstahl an belebten Aussichtspunkten und am Hauptplatz in der Hochsaison.</p>
    <p><b>Montenegro ist generell günstiger als Dubrovnik</b> — allerdings können Restaurants direkt am Kreuzfahrtkai in der Altstadt preislich mithalten; eine Gasse weiter weg lohnt sich fast immer.</p>
  `,
  soloHtml: `<p>Old Town Hostel Kotor und Montenegro Hostel 4U organisieren abendliche Pub-Crawls, BBQs und Bootspartys, teils auch für Nicht-Gäste offen — hier konzentriert sich die Barszene der Stadt. Da das Nachtleben erst spät am Abend Fahrt aufnimmt, lässt sich das an einem Tagesstopp nur bedingt mitnehmen, ein Kaffee oder Drink am frühen Abend an der Riva lohnt sich trotzdem für Kontakte.</p>`,
  shoppingHtml: `<p>Njeguški pršut und Njeguški sir vakuumverpackt als Mitbringsel, eine Flasche Vranac, kleine Ikonen- oder Muschelschmuck-Andenken aus den Altstadtgassen — abseits der Hauptgasse rund um den Waffenplatz meist günstiger.</p>`,
};

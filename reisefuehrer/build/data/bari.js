'use strict';
module.exports = {
  key: 'bari',
  name: 'Bari',
  country: 'Italien',
  tagline: 'Puglias Hauptstadt der Streetfood-Kultur — Nonnen, Nudeln und rohes Meer',
  ratings: { action: 3, kulinarik: 5, fotospots: 4, kreuzfahrt: 4 },
  quickFacts: {
    Liegeplatz: 'Nuova Stazione Marittima, Molo San Vito',
    Gehzeit: '20–35 Min. zu Fuß nach Bari Vecchia',
    Tender: 'Nein',
    Landessprache: 'Italienisch',
  },
  arrivalInfobox: `
    <p><b>Zu Fuß machbar, aber nicht malerisch am Anfang.</b> Mein Schiff 4 legt an der Nuova Stazione Marittima (Molo San Vito) an, einem modernen Terminal ohne Geldautomat im Gebäude — der nächste (Banco Popolare di Bari) liegt nur ca. 2 Gehminuten vor dem Tor. Nach Bari Vecchia sind es 1–2,5 km bzw. 20–35 Minuten zu Fuß: zunächst durch das Hafen-/Industriegelände, dann links in den Corso Antonio De Tullio und weiter Richtung Altstadt — deutlich angenehmer wird der letzte Abschnitt entlang der Lungomare.</p>
    <p><b>Shuttle/Bus:</b> Manche Linien fahren zur Piazza Aldo Moro (Bahnhof-Knotenpunkt) — für diesen konkreten TUI-Anlauf unbestätigt, im Tagesprogramm an Bord prüfen. Taxis sind verfügbar (~10 Min. in die Altstadt), Linie 6 verbindet laut Berichten Hafen und Piazza Aldo Moro.</p>
    <p class="tiny">* Kein Tender-Hafen — das Schiff legt direkt am Kai an. Genaue Liegeplatz-/Shuttle-Zeiten für Anläufe 2026 im Bordprogramm bestätigen.</p>
  `,
  map: {
    water: [{ x: 0, y: 0 }, { x: 55, y: 0 }, { x: 45, y: 22 }, { x: 20, y: 30 }, { x: 0, y: 24 }],
    land: [[{ x: 0, y: 24 }, { x: 20, y: 30 }, { x: 45, y: 22 }, { x: 55, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }]],
    route: [{ x: 8, y: 20 }, { x: 22, y: 34 }, { x: 36, y: 44 }, { x: 48, y: 52 }, { x: 60, y: 58 }, { x: 72, y: 62 }],
    points: [
      { n: 1, x: 8, y: 20, cat: 'ship', label: 'Schiff (Molo San Vito)' },
      { n: 2, x: 30, y: 40, cat: 'food', label: 'Nderr a la Lanz (Fischmarkt)' },
      { n: 3, x: 42, y: 48, cat: 'sight', label: 'Basilica San Nicola' },
      { n: 4, x: 55, y: 40, cat: 'food', label: 'Strada Arco Basso' },
      { n: 5, x: 66, y: 50, cat: 'sight', label: 'Cattedrale San Sabino' },
      { n: 6, x: 50, y: 66, cat: 'sight', label: 'Castello Svevo' },
      { n: 7, x: 78, y: 62, cat: 'sight', label: 'Piazza Mercantile' },
      { n: 8, x: 88, y: 78, cat: 'sight', label: 'Teatro Petruzzelli' },
    ],
  },
  qr: {
    routeLabel: 'Basilica San Nicola, Bari',
    tourismLabel: 'Comune di Bari Tourism',
  },
  orientationNote: `
    ${'<div class="section-title" style="border:none;padding:0"></div>'}
    <div class="infobox coral">
      <div class="infobox-title"><span class="icon">🚶</span>Zu Fuß erreichbar</div>
      <p>Bari Vecchia ist ein dichter mittelalterlicher Gassenknoten mit zwei „Gesichtern": die Hafen-/Fischmarkt-Seite im Westen und die Lungomare Nazario Sauro Richtung Schiffskanal. Offline-Karten vorab herunterladen lohnt sich — GPS verliert in den engen Gassen schnell die Orientierung. Empfohlene Route: Hafen → Lungomare → Castello Svevo → Gassen von Bari Vecchia (Arco Basso/San Nicola/Kathedrale) → Piazza Mercantile → Murat-Viertel → zurück zum Schiff.</p>
    </div>
  `,
  highlights: [
    { name: 'Basilica di San Nicola', desc: 'Romanische Festungskirche, 1087 begonnen, beherbergt die Reliquien des Heiligen Nikolaus und eine seltene orthodoxe Kapelle im Inneren — geistliches Zentrum der ganzen Region.', history: 'Erbaut um die aus Myra übergeführten Reliquien des Heiligen Nikolaus, bis heute Wallfahrtsort für katholische und orthodoxe Pilger.', time: 'Morgens, bestes Licht auf der Fassade', photoTip: 'Von vorne, leicht seitlich versetzt für weniger Trubel', maps: 'Google Maps: „Basilica San Nicola Bari"' },
    { name: 'Cattedrale di San Sabino', desc: 'Romanische Kathedrale aus dem 12. Jahrhundert, intimer als San Nicola, mit charakteristischen Blendarkaden und einer zylindrischen „Trulla" an der Rückseite.', time: 'Golden Hour für die Rückansicht', photoTip: 'Von der Via del Carmine bzw. der Gasse hinter der Kathedrale auf die Trulla', maps: 'Google Maps: „Cattedrale di San Sabino Bari"' },
    { name: 'Castello Svevo', desc: '1131 unter Roger II. errichtet, ab 1223 von Friedrich II. erweitert — Wassergraben, eine Gipsabguss-Sammlung und Wehrgänge mit Meerblick machen die Burg zum architektonischen Höhepunkt der Stadt.', history: 'Wechselte über Jahrhunderte zwischen normannischer, staufischer, aragonesischer und spanischer Herrschaft.', time: 'Später Nachmittag, honigfarbenes Licht auf dem Stein', photoTip: 'Von der Brücke über den Burggraben, dann von innen Richtung Meer', maps: 'Google Maps: „Castello Svevo Bari" · ~€8–10 Eintritt' },
    { name: 'Strada Arco Basso — die „Orecchiette-Straße"', desc: 'Nonnen rollen an Klapptischen mitten in der Gasse frische Orecchiette von Hand und verkaufen sie kiloweise — eines der bekanntesten Streetfood-Fotomotive Italiens.', time: 'Aktiv ca. 8:00–12:00 Uhr, oft schon gegen Mittag ausverkauft', photoTip: 'Tief ansetzen, Mehlstaub im Gegenlicht einfangen — beim Fotografieren aus der Nähe immer erst fragen und etwas kaufen', maps: 'Google Maps: „Strada Arco Basso Bari"' },
    { name: 'Lungomare Nazario Sauro', desc: 'Über 1 km lange Belle-Époque-Uferpromenade entlang des Schiffskanals — Barias Bühne für den Abendspaziergang.', time: 'Sonnenuntergang', photoTip: 'Von Osten, wo die Burg elegant ins Bild schwenkt', maps: 'Google Maps: „Lungomare Nazario Sauro Bari"' },
    { name: 'Teatro Petruzzelli', desc: 'Italiens viertgrößtes Opernhaus, 1903 eröffnet, nach einem Brandanschlag 1991 originalgetreu wiederaufgebaut und 2009 neu eröffnet.', history: 'Der Brand von 1991 galt lange als ungeklärt und traumatisierte die Stadt — der Wiederaufbau wurde zum Symbol der Erneuerung.', time: 'Tagsüber für die Fassade', photoTip: 'Frontal vom Corso Cavour aus für die neoklassizistische Symmetrie', maps: 'Google Maps: „Teatro Petruzzelli Bari"' },
    { name: 'Piazza Mercantile', desc: 'Historischer Marktplatz mit Arkadengängen und der „Colonna della Giustizia" (Schandsäule) — tagsüber Alltagsleben, abends Aperitivo-Bühne.', time: 'Aperitivo-Stunde ab 18:00 Uhr', photoTip: 'Weitwinklig, Arkaden plus Café-Leben einfangen', maps: 'Google Maps: „Piazza Mercantile Bari"' },
    { name: 'Fischereihafen / Molo San Nicola', desc: 'Kleine bunt bemalte Boote, Fischer löschen und verkaufen ihren Fang jeden Morgen direkt am Kai — roheste, unmittelbarste Szene der Stadt.', time: '7:00–10:00 Uhr', photoTip: 'Boote mit der Altstadt-Silhouette im Hintergrund', maps: 'Google Maps: „Molo San Nicola Bari fish market"' },
  ],
  dishes: [
    { name: 'Focaccia Barese', desc: 'Dicke, olivenölige Focaccia mit zerdrückten Tomaten, Oliven und Oregano — knuspriger Boden, innen wolkig-weich. Puglias berühmtestes Grundnahrungsmittel.', price: '~€3–4/kg, Handstück ~€1–1,50', where: 'Panificio Fiore (Strada Palazzo di Città 38, seit 1508, „Tempel der Focaccia Barese")', tip: 'Bis 12:00 bzw. 19:00 Uhr meist ausverkauft — am besten 7:30–10:00 Uhr kommen und stehend auf der Straße essen.' },
    { name: 'Orecchiette', desc: 'Von Hand geformte „kleine Ohren", klassisch mit Cime di Rapa (Stängelkohl) oder Ragù — auf der Strada Arco Basso live beim Herstellen zusehen (~€5/kg zum Mitnehmen).', price: '€8–14 als Hauptgericht', where: 'Le Arpie, Antò, Orecchietteria San Nicola, La Uascezze, La Cantina dello Zio', tip: 'La Cantina dello Zio kombiniert die Orecchiette klassisch mit einem Glas Primitivo.' },
    { name: 'Burrata', desc: 'Cremiger Frischkäse, eigentlich aus dem ca. 1 Std. entfernten Andria, 1956 von Lorenzo Bianchino erfunden und heute als „Burrata di Andria" g.g.A. geschützt.', price: '€6–12 als Vorspeise', where: 'Jede Alimentari/Trattoria in Bari Vecchia', tip: 'Immer nach „di giornata" (vom Tag) fragen — und innerhalb weniger Stunden nach dem Kauf essen.' },
    { name: 'Panzerotti', desc: 'Frittierte Halbmond-Teigtaschen, klassisch mit Mozzarella und Tomate gefüllt — Barias liebster Snack für zwischendurch.', price: '€3–6,50/Stück', where: 'Panzeropoli by Benny (Piazza Mercantile 35, ~17 Sorten), Mastrociccio, Nonno Marcello, Pizzeria Di Cosimo', tip: 'Sofort essen — der geschmolzene Kern ist frisch aus der Fritteuse extrem heiß.' },
    { name: 'Gelato', desc: 'Klassisches italienisches Handwerksgelato, in Bari mit langer Tradition seit dem 19. Jahrhundert.', price: '€2,50–4', where: 'Gelateria Gentile (seit 1880), Caruso Gelateria (Piazza Garibaldi 22, seit 1956)', tip: 'Fior di Latte oder die saisonale Feigen-Mandel-Sorte probieren.' },
    { name: 'Taralli', desc: 'Knusprige Ring-Cracker aus Mehl, Olivenöl und Weißwein — pur oder mit Fenchelsamen, das ideale essbare Souvenir.', price: '€3–6/Beutel', where: 'Jede Panificio/Alimentari', tip: 'Halten sich lange — gleich mehrere Beutel für die Heimreise mitnehmen.' },
    { name: 'Sgagliozze (frittierte Polenta)', desc: 'Goldene, gesalzene Polenta-Würfel — echte „Cucina Povera", das Arme-Leute-Streetfood der Stadt, klassisch als Abendsnack.', price: '€1–3/Beutel', where: 'Maria delle Sgagliozze (frittiert ab ca. 18:00 direkt vor ihrer Haustür), rund um die Piazza Mercantile', tip: 'Erst am Abend erhältlich — nicht morgens danach suchen.' },
    { name: 'Crudo di mare (rohes Meer)', desc: 'Barias kulinarisches Markenzeichen: Seeigel, Austern, Muscheln und Oktopus roh direkt vom Boot — eine seit dem 16. Jahrhundert reglementierte Tradition.', price: 'variabel, meist €10–25 je nach Menge', where: 'Fischmarkt „Nderr a la Lanz" am Molo San Nicola, nur morgens', tip: 'Ein echtes Risikoerlebnis für abenteuerlustige Gaumen — ehrlich gesagt nicht für jeden, aber unvergesslich für alle, die sich trauen.' },
    { name: 'Primitivo & Negroamaro (Wein)', desc: 'Primitivo — mit Zinfandel verwandt, vollmundig (Primitivo di Manduria/Gioia del Colle); Negroamaro aus dem Salento — dunkle Frucht, Tabak, bittermandeliger Abgang.', price: 'Glas €4–7, Flasche ab €15', where: 'Weinbar Mostofiore', tip: 'Primitivo zu Orecchiette mit Ragù, Negroamaro zu gegrilltem Fleisch oder reifem Käse.' },
  ],
  culinaryNote: `
    <div class="infobox gold"><div class="infobox-title"><span class="icon">🐙</span>Nderr a la Lanz — der Fischmarkt am Molo San Nicola</div>
    <p>Nahe dem alten Teatro Margherita legen Fischer ihren Fang direkt auf Tischen und Kisten aus — Oktopus, Jakobsmuscheln, Austern, Muscheln, Klaffmuscheln, Sardinen, Seeigel, Venusmuscheln. Hier wird das <b>Crudo di mare</b> gegessen, roh und ungekühlt, so wie es seit Jahrhunderten Tradition ist. <b>Nur morgens aktiv, ca. 7:00–12:00 Uhr</b>, am frühen Nachmittag ist alles wieder eingepackt — deshalb gehört dieser Stopp ganz an den Anfang des Hafentags. Es ist ein genuines Risikoerlebnis: informelle Hygienestandards, kein Restaurant-Ambiente, dafür maximale Authentizität — wer mutig ist, bekommt hier das ehrlichste Essenserlebnis der ganzen Adria-Reise.</p></div>
  `,
  restaurants: [
    { category: 'Preis-Leistung', name: 'Antò', area: 'Altstadt, ~200 m von San Nicola', price: '€', rating: '', note: 'Familiär geführt, hausgemacht, Fokus auf Orecchiette — ehrliche Küche zu fairen Preisen mitten in Bari Vecchia.', pick: 'Orecchiette con cime di rapa' },
    { category: 'Gehoben', name: 'Le Arpie', area: 'Altstadt', price: '€€€', rating: '', note: 'Eines der besten Restaurants der Stadt, raffinierte Orecchiette- und Meeresfrüchtegerichte — unbedingt einen Tag vorher reservieren.', pick: 'Das Degustationsmenü mit Meeresfrüchten' },
    { category: 'Geheimtipp', name: 'Orecchietteria San Nicola', area: 'Gewölbekeller nahe der Basilika', price: '€€', rating: '', note: 'Ungezwungener Keller unter Steingewölben, spezialisiert auf Orecchiette mit Braciole — kaum touristisch trotz Top-Lage.', pick: 'Orecchiette con braciole' },
    { category: 'Rooftop/Aussicht', name: 'Sparano Palace Cafe & Rooftop', area: 'Murat-Viertel / Altstadtmauern', price: '€€', rating: '', note: 'Terrasse mit Ausblick; alternativ eine Weinbar direkt an den alten Stadtmauern nahe dem Fortino Sant\'Antonio für Sonnenuntergangsdrinks mit Meerblick.', pick: 'Aperol Spritz zur goldenen Stunde' },
    { category: 'Cocktailbar', name: 'Dilman Lounge / POP Bottega', area: 'Murat-Viertel', price: '€€', rating: 'hohe TheFork-Bewertungen', note: 'Angesagte, gut bewertete Cocktailbars im eleganten Murat-Grid — ideal für den Abend nach dem Streetfood-Marathon.', pick: 'Signature Cocktail der Bar' },
  ],
  drinksNote: `<div class="infobox navy"><div class="infobox-title"><span class="icon">🍷</span>Mostofiore — Naturwein-Adresse</div><p>Für einen ruhigeren, lokalen Abend statt trendiger Cocktailbar: Mostofiore setzt auf Naturweine und die beiden Puglia-Klassiker Primitivo und Negroamaro — unkompliziert, günstig und ein guter Ort, um mit Einheimischen ins Gespräch zu kommen.</p></div>`,
  activities: [
    { emoji: '🥇', name: 'Streetfood-Tour mit lokalem Guide', desc: 'Geführter Streetfood-Spaziergang durch Bari Vecchia: Focaccia, Panzerotto, frisch handgemachte Orecchiette zum Probieren, Gelato und ein Abstecher am Castello Svevo vorbei.', price: '~€40–50 (Preis vor Ort bestätigen)', duration: '2,5 Std.', why: 'Die beste Art, Barias dichtes Streetfood-Universum an einem Vormittag zu erschließen, ohne selbst nach den besten Adressen suchen zu müssen — und ein natürlicher Anschlusspunkt für Alleinreisende.', link: '„Bari: Street Food Walking Tour with a Local Guide" · 4,9★ (638+ Bewertungen)' },
    { emoji: '🥈', name: 'Pasta-Kochkurs (Orecchiette)', desc: 'Hands-on-Workshop: Orecchiette selbst von Hand formen, dazu eine Weinverkostung mit Primitivo und zum Abschluss Gelato.', price: '~€60–65', duration: '~2,5–3 Std.', why: 'Wer Puglias Küche nicht nur essen, sondern auch verstehen will — die Handbewegung der Nonnen von der Strada Arco Basso selbst nachmachen.', link: '„Bari: Pasta Experience Walking Tour" · beliebte Alternative: „Private Pasta-Making Class at a Local\'s Home"' },
    { emoji: '🥉', name: 'Geführte Fahrradtour mit lokaler Verkostung', desc: 'Fahrradtour durch Bari, die Sightseeing mit Streetfood-Stopps kombiniert — kompakt und zeitschonend.', price: 'ab ca. €55', duration: '2 Std.', why: 'Ideal für alle, die aktiv unterwegs sein wollen, aber nicht die ganze Zeit fürs Essen investieren können — spart Zeit für Castello Svevo und Piazza Mercantile am Nachmittag.', link: '„Bari: Guided Bike Tour with Local Tasting" · 4,7★ (540+ Bewertungen)' },
  ],
  activityNote: `<div class="infobox teal"><div class="infobox-title"><span class="icon">🚲</span>Alternativen & Kombi-Varianten</div><p>Als Ausweichoption zur Streetfood-Tour eignet sich „The Original Bari Street Food Experience" (3 Std.). Bei der Fahrradtour gibt es außerdem eine explizit streetfood-fokussierte Variante, „Bari: The Original Street Food Tour by Bike" — praktisch, wer Rad und Essen in einem Rutsch erledigen will. Alle drei Top-3-Touren sollten wegen kleiner Gruppengrößen (besonders der Pasta-Kurs) vorab gebucht werden; kostenlose Stornierung ist bei allen Anbietern üblich.</p></div>`,
  photoSpots: [
    { n: 1, name: 'Lungomare Nazario Sauro (Kurve zur Burg)', time: 'Sonnenuntergang (~20:15–20:30 Anfang August)', dir: 'W/SW entlang der Kurve', why: 'Burg, Hafen und goldenes Adria-Licht in einem Bild.' },
    { n: 2, name: 'Strada Arco Basso', time: '8:00–11:00 Uhr', dir: 'Tief in der Gasse, Mehlstaub im Gegenlicht', why: 'Das ikonische Pasta-Nonnen-Motiv Italiens.' },
    { n: 3, name: 'Unbenannte Gassen von Bari Vecchia', time: 'Mittag (hartes Licht) oder Golden Hour', dir: 'Frei wandern, Wäscheleinen/Bögen/Katzen suchen', why: 'Klassische, authentische Puglia-Ästhetik.' },
    { n: 4, name: 'Fischereihafen Molo San Nicola', time: '7:00–9:00 Uhr', dir: 'Boote mit Altstadt-Silhouette im Hintergrund', why: 'Rohe Authentizität, arbeitende Fischerboote.' },
    { n: 5, name: 'Teatro-Petruzzelli-Fassade', time: 'Später Vormittag/früher Nachmittag', dir: 'Frontal vom Corso Cavour', why: 'Neoklassizistische Symmetrie.' },
    { n: 6, name: 'Castello Svevo, Wehrgänge/Innenhof', time: 'Später Nachmittag', dir: 'Über die Graben-Brücke, dann innen Richtung Meer', why: 'Honigfarbenes Steinglühen im Licht.' },
    { n: 7, name: 'Piazza Mercantile', time: 'Aperitivo 18:00–19:30 Uhr', dir: 'Weitwinklig, Arkaden plus Straßenleben', why: 'Goldenes Licht und pulsierendes Alltagsleben.' },
    { n: 8, name: 'Basilica San Nicola, Fassade', time: 'Morgens 9:00–10:30 Uhr', dir: 'Von vorne, leicht seitlich versetzt', why: 'Klare Geometrie, noch wenig Trubel.' },
    { n: 9, name: 'Cattedrale San Sabino, Trulla (Rückseite)', time: 'Golden Hour', dir: 'Von der Via del Carmine/Hintergasse', why: 'Ungewöhnliches zylindrisches Architekturdetail.' },
    { n: 10, name: 'Stadtmauern/Bastionen nahe Fortino Sant\'Antonio', time: 'Sonnenuntergang', dir: 'Richtung Wasser, Mauer im Vordergrund', why: 'Mauer, Meer und Himmel in Schichten — Weinbar gleich nebenan.' },
  ],
  itinerary: [
    { time: '08:00', text: 'Von Bord, Spaziergang Hafen → Lungomare (~25–30 Min.), erstes Morgenlicht fotografieren' },
    { time: '08:30', text: 'Fischmarkt „Nderr a la Lanz" — Crudo di mare direkt vom Boot' },
    { time: '09:15', text: 'Basilica San Nicola im Morgenlicht' },
    { time: '09:45', text: 'Strada Arco Basso — Orecchiette-Herstellung beobachten, eine Tüte kaufen' },
    { time: '10:30', text: 'Panificio Fiore — warme Focaccia Barese, bevor sie ausverkauft ist' },
    { time: '11:15', text: 'Durch die Gassen zur Cattedrale San Sabino schlendern' },
    { time: '12:00', text: 'Panzerotto bei Panzeropoli/Mastrociccio, Bar-Kaffee' },
    { time: '13:00', text: 'Castello Svevo — Innenhof, Wehrgänge, Meerblick' },
    { time: '14:30', text: 'Murat-Viertel: Teatro-Petruzzelli-Fassade, Gelato bei Gentile/Caruso' },
    { time: '15:30', text: 'Rückweg über die Lungomare, optionaler Weinbar-Stopp an den alten Stadtmauern' },
    { time: '16:30', text: 'Aperitivo-Bummel über die Piazza Mercantile, Taralli als Souvenir' },
    { time: '17:00', text: 'Rückweg zum Terminal (25–30 Min. Puffer einplanen)' },
  ],
  planA: '<p>Fischmarkt zur Öffnungszeit, danach Streetfood-Crawl (Arco Basso, Panificio Fiore, Panzerotti) durch Bari Vecchia, am Nachmittag Castello Svevo und Murat-Viertel — das volle Foto- und Genussprogramm bei perfektem Wetter. Wer lieber geführt isst, bucht die Streetfood-Tour oder den Pasta-Kochkurs für 09:00–12:00 statt der Eigenregie.</p>',
  planB: '<p>Bei Wind/Regen: Castello Svevo (überdachte Innenräume, Gipsabguss-Sammlung) als Kernprogramm, dazu die überdachten Marktgänge/Portici an der Piazza Mercantile und die Teatro-Petruzzelli-Fassade als kurzer Fotostopp zwischen den Regenschauern.</p>',
  planC: '<p>Ohne Ausflugsbuchung: reiner Selbstlauf-Streetfood-Walk — Fischmarkt, Arco Basso, Panificio Fiore, Panzerotti, Piazza Mercantile — Castello Svevo einfach auslassen, wenn die Zeit knapp wird. Bari Vecchia ist komplett zu Fuß ab dem Terminal erlebbar.</p>',
  budget: { low: '€25–40', normal: '€60–100', premium: '€120–180+' },
  practicalHtml: `
    <p><b>Geldautomat:</b> Keiner im Terminal — Banco Popolare di Bari ca. 2 Gehminuten vor dem Hafentor, weitere Automaten im Murat-Viertel und in der Altstadt üblich.</p>
    <p><b>Apotheke/Supermarkt:</b> Keine feste Adresse nahe dem Terminal bestätigt — vor Ort per Live-Suche „Apotheke in der Nähe" prüfen, wahrscheinlich entlang des Corso Antonio De Tullio oder in Bari Vecchia.</p>
    <p><b>Sicherheit:</b> Insgesamt angemessen sicher; Taschendiebstahl ist das Hauptrisiko in den engen Gassen von Bari Vecchia, rund um die Piazza Aldo Moro/den Bahnhof und in Bussen. Übliche Vorsicht: Tasche vor dem Körper tragen, Handy nicht auf Cafétischen liegen lassen.</p>
    <p><b>Bari ist der günstigste Genuss-Hafen dieser Reise</b> — schon mit kleinem Budget lässt sich hier hervorragend essen.</p>
  `,
  soloHtml: `<p>Kleine Gruppentouren (Streetfood, Fahrrad, Pasta-Kurs) sind der einfachste natürliche Anschlusspunkt für Alleinreisende. Auch Weinbars wie Mostofiore, Cocktailbars im Murat-Viertel und die Aperitivo-Szene an der Piazza Mercantile ziehen ein gesellig-lockeres Publikum an.</p>`,
  shoppingHtml: `<p>Taralli und eine Flasche Primitivo oder Negroamaro als Mitbringsel, getrocknete Orecchiette aus der Alimentari zum Selberkochen zu Hause — abseits der Piazza Mercantile meist günstiger als direkt an der Promenade.</p>`,
};

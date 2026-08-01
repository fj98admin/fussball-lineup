'use strict';
const C = require('../components');

function kajakVergleichPage() {
  return C.page(`
    ${C.sectionTitle('Kajak-Vergleich: Dubrovnik vs. Kotor', '🛶')}
    <p class="lede">Beide Häfen bieten geführte Kajaktouren an — aber es sind zwei völlig unterschiedliche Erlebnisse.</p>
    <div class="grid-2 mt-4">
      ${C.card(`<div class="card-title">Dubrovnik</div>
        <p class="small">Offene Adria-Küstenpaddelei direkt unter der Stadtmauer und Fort Lovrijenac, mit Höhlenstopp (Betina Cave) und Lokrum-Insel-Runde. Spürbarer Seegang, etwas anspruchsvoller. Sonnenuntergangstouren sind das Signature-Erlebnis.</p>
        <p class="tiny"><b>USP:</b> „Unter den Game-of-Thrones-Mauern paddeln"</p>`, { tag: 'Offenes Meer', tagVariant: 'coral' })}
      ${C.card(`<div class="card-title">Kotor</div>
        <p class="small">Ruhige, fjordartige Bucht, steile Berge auf beiden Seiten, oft spiegelglattes Wasser — anfängerfreundlicher. Route führt zu einem 500 Jahre alten Inselkirchlein (Our Lady of the Rocks).</p>
        <p class="tiny"><b>USP:</b> „Zu einer 500 Jahre alten Insel-Kirche paddeln"</p>`, { tag: 'Geschützte Bucht' })}
    </div>
    <div class="mt-4">${C.infobox('Fazit', '<p>Wer Adrenalin und die berühmteste Stadtmauer-Kulisse der Adria sucht, wählt Dubrovnik. Wer ruhigeres Wasser, dramatischere Berg-Optik und ein günstigeres, entspannteres Erlebnis will, wählt Kotor.</p>', 'teal', '⚖️')}</div>
    <div class="mt-6">${C.sectionTitle('Für Alleinreisende — die Übersicht', '🧑‍🤝‍🦱')}</div>
    <p class="small">Wo lernt man auf dieser Route am ehesten Leute kennen? Eine Zusammenfassung über alle Stationen.</p>
    ${C.table(['Ort', 'Bester Social-Spot', 'Warum'], [
      ['An Bord', 'Bartheke + Alleinreisendentreff (1. Seetag)', 'Organisiert, niedrigschwellig, Barkeeper stellen vor'],
      ['Triest', 'Café-Terrassen Piazza Unità / Canal Grande abends', 'Aperitivo-Kultur, junges Publikum am Kanal'],
      ['Bari', 'Foodtour, Kochkurs, Fahrradtour', 'Kleine Gruppen erzeugen automatisch Gespräche'],
      ['Dubrovnik', 'Buža Bar (Klippenbar)', 'Junge, lockere Stimmung trotz teurer Altstadt'],
      ['Kotor', 'Hostelbars in der Altstadt (Pub Crawls)', 'Aktive Abendprogramme, auch für Nicht-Gäste teils offen'],
      ['Split', 'Bačvice Beach', 'Picigin-Spiel + Beachbars, mischt Locals & Reisende'],
    ])}
    <div class="mt-4">${C.pullQuote('Man muss niemanden aktiv ansprechen — man muss nur an den richtigen Ort gehen. Der Rest ergibt sich.', 'Fazit dieses Kapitels')}</div>
  `, { footerRight: 'Die Häfen im Vergleich' });
}

function notfallPage() {
  return C.page(`
    ${C.sectionTitle('Notfall', '🚨')}
    <div class="grid-3">
      ${C.card('<div class="card-title">112</div><p class="tiny">EU-weiter Notruf — funktioniert in Italien, Kroatien und Montenegro gleichermaßen (Polizei, Feuerwehr, Rettungsdienst).</p>', { tag: 'Überall', tagVariant: 'coral' })}
      ${C.card('<div class="card-title">Schiffsarzt</div><p class="tiny">Mein Schiff 4 hat ein 24/7 besetztes Bordhospital. Bei jedem gesundheitlichen Notfall zuerst die Rezeption kontaktieren.</p>')}
      ${C.card('<div class="card-title">Reiseversicherung</div><p class="tiny">Auslandskrankenversicherung mit Rücktransport-Deckung wird für alle drei Länder empfohlen — Montenegro ist kein EU-Land, die EHIC-Karte gilt dort nicht.</p>')}
    </div>
    <div class="mt-6">${C.sectionTitle('Apotheken je Hafen', '💊')}</div>
    ${C.table(['Hafen', 'Apotheke', 'Hinweis'], [
      ['Triest', 'Farmacia All\'Angelo, nahe Piazza della Borsa', 'angeblich 24 Std. — vor Ort prüfen'],
      ['Bari', 'Grüne-Kreuz-Schilder in Bari Vecchia/Murat', 'live per Karten-App suchen'],
      ['Dubrovnik', 'Alte Apotheke im Franziskanerkloster, Stradun', 'seit 1317 in Betrieb'],
      ['Kotor', 'Nahe dem Nordtor der Altstadt', 'meist 8–20 Uhr'],
      ['Split', 'Pharmacy Matejuška, an der Riva', 'englischsprachiges Personal'],
    ])}
    <div class="mt-4">${C.infobox('Taxi & Rückweg zum Schiff', '<p>In jedem Hafen stehen Taxis am Terminal/Liegeplatz bereit. Bei Unsicherheit über die Rückkehrzeit: lieber 45–60 Minuten Puffer einplanen als das Schiff zu verpassen — bei eigenständig organisierten Ausflügen wartet das Schiff nicht.</p>', 'navy', '🚕')}</div>
  `, { footerRight: 'Notfall & Praktisches' });
}

function abschlussPage() {
  return C.page(`
    ${C.sectionTitle('Abschluss — Die persönliche Empfehlung', '✍️')}
    <p class="lede">Nach fünf Häfen, zwei Seetagen und Dutzenden recherchierten Optionen: Was würde sich wirklich lohnen — und was eher nicht?</p>
    <div class="mt-4">${C.infobox('Der beste Ausflug der ganzen Reise', '<p><b>Kotor.</b> Die Kombination aus Festungsaufstieg im Morgenlicht und Speedboot zur Blauen Grotte samt Our-Lady-of-the-Rocks-Stopp ist auf dieser Route konkurrenzlos — dramatische Kulisse, überschaubarer Preis, und die Bucht-Einfahrt selbst ist bereits das beste Bordfoto der Reise.</p>', 'coral', '🥇')}</div>
    <div class="grid-2 mt-4">
      ${C.infobox('Lohnt sich wirklich', '<ul class="list-clean small"><li>Foodtour Bari — dichteste kulinarische Erfahrung pro Stunde</li><li>Festung Kotor bei Sonnenaufgang</li><li>Stadtmauer Dubrovnik direkt bei Öffnung</li><li>Blue Lagoon Split (statt Rafting, wegen Zeitrisiko)</li></ul>', 'teal', '✅')}
      ${C.infobox('Eher vorsichtig einplanen', '<ul class="list-clean small"><li>Cetina-Rafting Split — Zeitrisiko bei kurzem Hafentag real, nur mit frühestem Slot buchen</li><li>Dubrovnik am frühen Nachmittag — Hitze + Hauptandrang treffen zusammen</li><li>Feinschmecker-Restaurants ohne Reservierung — an allen Häfen vorab buchen</li></ul>', 'gold', '⚠️')}
    </div>
    <div class="mt-4">${C.pullQuote('Die Adria in einer Woche ist kein Widerspruch — man muss nur wissen, wann man rennt und wann man Kaffee trinkt.', 'Der Autor')}</div>
    <div class="mt-6">${C.sectionTitle('Über diesen Reiseführer', 'ℹ️')}</div>
    <p class="tiny">Dieser Reiseführer wurde speziell für die Mein-Schiff-4-Adriaroute Anfang August 2026 zusammengestellt (Triest–Bari–Dubrovnik–Kotor–Split–Triest). Inhalte basieren auf aktueller Web-Recherche (Stand Sommer 2026) aus Tourismus-Portalen, Reiseblogs, Bewertungsplattformen und offiziellen Anbieter-Seiten. Alle Karten sind <b>schematische, selbst gezeichnete Orientierungsdiagramme</b>, nicht maßstabsgetreu — für Live-Navigation die verlinkten QR-Codes zu Google Maps nutzen. Preise, Öffnungszeiten und Tour-Verfügbarkeiten bitte kurz vor der Reise gegenprüfen. Mein Schiff® ist eine Marke der TUI Cruises GmbH; dieser Reiseführer ist ein unabhängig erstelltes Fan-/Reisebegleitwerk ohne Verbindung zu TUI Cruises GmbH.</p>
  `, { footerRight: 'Abschluss' });
}

module.exports = { kajakVergleichPage, notfallPage, abschlussPage };

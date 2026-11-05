# AdventskalenderDerTire

# Modularer JavaScript Adventskalender

Ein klassischer Adventskalender für den Browser, bei dem hinter jedem Türchen ein Vollbild-Bild samt Titel hinterlegt ist.

## Features
- **Zeit-Logik:** Türchen lassen sich erst öffnen, wenn das reale Datum erreicht ist.
- **Persistenz:** Einmal geöffnete Türen behalten ihren Status dank `localStorage` auch nach einem Seiten-Reload.
- **Modularität:** Code ist strikt via ES6-Modulen getrennt.
- **Config-Generator:** Integrierte Hilfsseite, um die Zuordnung von Bildern und Titeln zu generieren.

## Vorbereitung
Da dieses Projekt ES6-Module (`import`/`export`) nutzt, **muss** es über einen lokalen Webserver ausgeführt werden (z. B. VS Code "Live Server" Erweiterung oder ein lokaler Python/Node-Server). Ein direktes Öffnen der `index.html` aus dem Dateisystem (`file://...`) wird vom Browser blockiert (CORS-Policy).

## Einrichtung
1. Lege deine 24 Bilder in den Ordner `img/` des Repositories.
2. Starte deinen lokalen Webserver und öffne `config.html`.
3. Trage dort alle Dateipfade und Titel ein und drücke auf "Config generieren".
4. Kopiere den Code aus dem Textfeld komplett in die Datei `js/config.js`.

## Wichtig für Tests vor Dezember
In der Datei `js/calendar.js` existiert die Variable `testMode = true`. Solange diese aktiv ist, werden die Datum-Checks ignoriert, damit du prüfen kannst, ob alles läuft. **Vergiss nicht, diese Variable auf `false` zu setzen, bevor du den Kalender veröffentlichst.**

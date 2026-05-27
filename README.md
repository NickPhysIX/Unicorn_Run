# Unicorn Run

**Unicorn Run** is een kleine arcade-style browsergame rond een vliegende/rennende unicorn, gebouwd als één losse HTML-game met lokale assets. De game kan direct in een browser worden geopend en is geschikt om op iPhone/iPad via Safari op het beginscherm te zetten.

Current package version: **v0.5.8**

## Starten

Open:

```text
index.html
```

Voor GitHub Pages of een simpele webserver is `index.html` het basisbestand. De oudere `unicorn_run_v0.5.x.html` bestanden in deze zip zijn vooral handig als terugvalpunt of historisch referentiebestand.

## Installeren op iPhone/iPad

1. Open de game in Safari.
2. Tik op de deelknop.
3. Kies **Zet op beginscherm**.
4. Start daarna de game via het nieuwe icoon op je homescreen.

De package bevat iOS/iPadOS homescreen icons en een web-app manifest. Op iOS blijft installeren een handmatige Safari-actie; browsers geven daar geen echte programmeerbare “install”-knop voor.

## Besturing

### Auto-Run

- De unicorn loopt automatisch.
- Op touch devices gebruik je de roze **SPRING**-knop rechtsonder.
- Op desktop werkt springen ook via muis/klik of toetsenbord, afhankelijk van de bestaande controls in de game.

### Gecontroleerd / Manual

- Links op het scherm zit een floating touch-controller.
- De joystick verschijnt waar je aanraakt aan de linkerzijde.
- Sleep links/rechts om te sturen.
- Gebruik de roze **SPRING**-knop rechtsonder om te springen.

## Features in deze bekende buildlijn

- Arcade runner gameplay met unicorn/rainbow-sfeer.
- Auto-Run en gecontroleerde/manual speelmodus.
- Lokale Top 5 highscore board per modus met initialen en datum.
- In-game pauzeknop rechtsboven, met pauzemenu.
- Automatische pauze/audio-stop wanneer de app/browser naar de achtergrond gaat of sluit.
- Passieve update-check bij openen/terugkeren, met offline fallback via service worker.
- Zichtbare game-tekst en uitleg in het Nederlands.
- Game-over sfeer met fairy/melancholische animatie en muziek.
- iPhone/iPad homescreen ondersteuning met app-icon.
- Install-CTA op het startscherm.
- Startscreen-credit: **Niels Braakman**.

## Bestanden

Belangrijkste bestanden:

- `index.html` — actuele startfile voor de game.
- `manifest.json` — web-app manifest voor PWA/homescreen metadata.
- `sw.js` — service worker voor caching/offline fallback en soepelere updates.
- `version.json` — klein versiebestand voor passieve update-checks.
- `app-icon-*.png` — homescreen/app icon formaten.
- `app-icon-source.png` — bronbestand van het app icon.
- `fairy_fly_sheet.png` — fairy sprite sheet.
- `pixel_hooves.mp3` — muziek/audio asset.
- `gameover_lullaby.mp3` — game-over muziek/audio asset.
- `CHANGELOG.md` — wijzigingsgeschiedenis.
- `README.md` — dit bestand.

## Credits / herkomst van onderdelen

Deze README legt alleen vast wat bekend is uit de projectcontext en de door Niels aangeleverde toelichting.

- **Concept, richting, feedback en uiteindelijke keuzes:** Niels Braakman.
- **Basis HTML/game richting t/m ongeveer v0.4/v0.5:** door Claude gemaakt of voorgesteld, volgens projectnotities van Niels.
- **Pixel assets:** afkomstig uit Gemini, volgens projectnotities van Niels.
- **Muziek/audio:** afkomstig uit Gemini, volgens projectnotities van Niels.
- **Prompts voor unicorn, regenboog, ijsjes, steen en modder:** afkomstig uit Claude, volgens projectnotities van Niels.
- **Fairy prompt:** gestart door Niels op basis van de unicorn prompt en verder afgerond met hulp van ChatGPT.
- **Animatie-inzichten:** gebaseerd op Claude's inzichten, volgens projectnotities van Niels.
- **v0.5.1 t/m v0.5.8 patches:** door ChatGPT verwerkt op basis van Niels' verzoeken en aangeleverde bestanden/assets.

## Privacy / opslag

De highscore board gebruikt lokale browseropslag (`localStorage`). Er zijn geen externe services nodig voor het opslaan van scores. Scores blijven op het apparaat/in de browser staan waar ze zijn ingevoerd.

Vanaf v0.5.8 kan de game bij openen/terugkeren `version.json` ophalen om te kijken of er een nieuwere versie beschikbaar is. Als er netwerk is, probeert de service worker de nieuwste app-shell te laden; offline draait de huidige/cached versie door.

## Bekende aandachtspunten

- iOS/iPadOS installatie vereist Safari en de handmatige route **Delen → Zet op beginscherm**.
- Highscores zijn lokaal per browser/apparaat en worden niet gesynchroniseerd.
- De passieve update-check helpt vooral vanaf v0.5.8 en verder. Een oudere homescreen-installatie die nog oude HTML hardnekkig cachet, moet mogelijk één keer Safari/herladen of opnieuw openen voordat deze nieuwe update-logica actief is.
- De game is bedoeld als compacte HTML/browsergame; bij verdere uitbreiding is het verstandig om assets en code op termijn te splitsen in mappen/bestanden.

# Unicorn Run v0.5.9 patch — full-height game-over fairy path

## Doel

De fairy op het game-over scherm moest de volledige beschikbare schermhoogte kunnen benutten, met een willekeurige verticale startpositie per game-over, terwijl zij achter de score/tekst/UI blijft vliegen.

## Aangepast

- `index.html` bijgewerkt naar v0.5.9.
- `#gameover-fairy-canvas` vult nu de volledige game-over menu/viewport overlay.
- De fairy-positie gebruikt nu de actuele overlaybreedte/-hoogte in plaats van de vaste 480×270 game-canvas maat.
- De verticale sine-beweging gebruikt vrijwel de volledige beschikbare hoogte.
- Per game-over reset wordt de verticale fase willekeurig gezet, waardoor de fairy hoog, laag of rond het midden kan starten.
- Sparkles volgen de fairy nu proportioneel met de geschaalde fairy-grootte.
- `version.json`, `manifest.json`, `sw.js`, `README.md` en `CHANGELOG.md` bijgewerkt.

## Niet aangepast

- Geen gameplaywijzigingen.
- Geen score/highscorewijzigingen.
- Geen audio/lifecyclewijzigingen.
- Geen touch-controlwijzigingen.
- Geen nieuwe sprites of grafische assets toegevoegd.

# Unicorn Run v0.5.8 patch

## Doel

Deze patch richt zich op twee punten:

1. Muziek/audio moet stoppen wanneer de browserpagina, tab of homescreen web-app naar de achtergrond gaat of wordt gesloten.
2. De homescreen/PWA-versie moet bij openen passief kunnen controleren of er een nieuwere versie beschikbaar is, zonder offline gebruik kapot te maken.

## Gewijzigd

- `index.html` is bijgewerkt naar v0.5.8.
- `unicorn_run_v0.5.8.html` is toegevoegd als historisch/los HTML-bestand.
- `sw.js` toegevoegd als service worker.
- `version.json` toegevoegd als klein versiebestand voor update-checks.
- `manifest.json` bijgewerkt met versie en stabiele app-id.
- `README.md` en `CHANGELOG.md` bijgewerkt.

## Audio lifecycle

Nieuwe handlers luisteren naar onder meer:

- `visibilitychange`
- `pagehide`
- `beforeunload`
- `freeze`

Bij verbergen/sluiten:

- stopt de normale muziek;
- stopt de game-over muziek;
- wordt een lopende joystick/touch-input gereset;
- gaat de game tijdens actief spelen naar het pauzescherm.

De game hervat niet automatisch met geluid. De speler kiest bewust **Doorspelen**, wat ook beter past bij mobiele browser-audioregels.

## Passieve update-check

Bij openen/terugkeren probeert de game `version.json` zonder cache op te halen.

- Als de versie gelijk is: niets doen.
- Als er geen netwerk is: niets doen; huidige/cached versie blijft werken.
- Als er een nieuwere versie is: service worker updaten en herladen wanneer de speler niet actief aan het spelen is.

## Let op

Deze update-logica helpt vooral vanaf v0.5.8 en verder. Een reeds geïnstalleerde oude homescreen-versie die hardnekkig oude HTML blijft tonen, moet mogelijk één keer succesvol de nieuwe bestanden laden voordat deze service worker/update-check actief wordt.

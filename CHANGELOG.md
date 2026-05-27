# Changelog

Alle noemenswaardige wijzigingen in deze bekende buildlijn worden hier bijgehouden. Sommige oudere onderdelen zijn gebaseerd op projectcontext/notities en niet op een volledig beschikbaar Git-achtig historisch archief.

## v0.5.5 — Documentation + `index.html` package

### Added

- Added `README.md` with project overview, controls, install notes, file overview, credits and storage/privacy notes.
- Added `CHANGELOG.md` with the known version history.
- Added `index.html` as the active/base HTML start file for hosting and local play.

### Changed

- Updated `manifest.json` so `start_url` points to `./index.html`.
- Updated the active game file title/version display in `index.html` to v0.5.5.

### Notes

- No gameplay, sprite, icon, audio, scoreboard or control behavior was intentionally changed in this version.

## v0.5.4 — Auto-Run jump button + start-screen credit

### Changed

- Auto-Run on touch devices now uses the fixed pink **JUMP** button instead of tapping anywhere on the canvas.
- Manual/control mode keeps the floating left joystick plus the same pink **JUMP** button.
- Desktop Auto-Run still supports mouse/canvas click to jump.
- Start screen now shows the credit name: **Niels Braakman**.
- Updated visible version text and HTML title to v0.5.4.

## v0.5.3 — Floating touch controls

### Changed

- Replaced the old bottom touch-control bar with a floating controller zone on the left side.
- In manual/controlled mode, the controller appears wherever the left-side touch starts.
- Drag left/right from that point to move the unicorn.
- Added a fixed pink **JUMP** button at the lower-right with safe margins from screen edges.
- Auto-Run retained jump support and the pink jump button also works on touch devices.

### Notes

- No gameplay, sprite, icon, audio, score or leaderboard logic was intentionally changed.

## v0.5.2 — iOS homescreen icon + install CTA

### Added

- Added iPhone/iPad homescreen icon support via `apple-touch-icon`.
- Added `manifest.json` and 192/512 px icons for web-app install support.
- Added mobile/PWA metadata: standalone display, app title, theme color and iOS status bar styling.
- Added a start-menu CTA for iPhone/iPad: **Delen → Zet op beginscherm**.
- Added support for the standard browser install prompt where available.

### Files added

- `app-icon-32.png`
- `app-icon-152.png`
- `app-icon-167.png`
- `app-icon-180.png`
- `app-icon-192.png`
- `app-icon-512.png`
- `app-icon-source.png`
- `manifest.json`

### Notes

- On iOS/iPadOS, Safari does not expose a normal JavaScript install button. The CTA therefore shows the manual route.
- Once opened from the homescreen, the CTA hides automatically.

## v0.5.1 — Arcade highscore board

### Added

- Arcade-style local Top 5 highscore board on the Game Over screen.
- 2–3 character initials entry when the final score qualifies for the current mode's Top 5.
- Date display in `YYYY/MM/DD` format next to each stored score.
- Separate boards for Auto-Run and Gecontroleerd modes.
- Last-used initials are remembered locally for faster repeat entry.
- Newly saved score is highlighted in the board.

### Technical notes

- Scores are stored in browser `localStorage` under `unicornRunLeaderboardV1`.
- Existing single-mode best scores remain under `unicornRunHigh`.
- The board stores only initials, score, date and timestamp.
- Keyboard input is ignored by movement controls while the initials text box is active.

## v0.5 / v0.4 and earlier — Foundation phase

### Known from project context

- Claude made or proposed the base HTML/game direction through roughly v0.4/v0.5.
- Pixel assets came from Gemini.
- Music/audio came from Gemini.
- Prompts for unicorn, rainbow, ice creams, stone and mud came from Claude.
- The fairy prompt was started by Niels based on the unicorn prompt and completed with help from ChatGPT.
- Animation choices were based on Claude's insights.

### Notes

- Exact older change boundaries are not fully reconstructed in this package. This section is therefore deliberately high-level.

# Unicorn Run v0.5.10 — Fairy dust healing patch

## Summary

This patch adds a rare in-run fairy event. During normal play, the fairy can fly across the screen from right to left and drop collectible fairy dust. When the unicorn touches fairy dust, she regains up to 2 hearts, capped at the normal maximum.

## Gameplay changes

- Added a rare fairy fly-by event during active play.
- First fairy event is scheduled after roughly 1–2 minutes of play.
- Subsequent events are randomized, with at least 1 minute before another event can start.
- Fairy travels right-to-left across the play screen using the existing fairy sprite sheet.
- Fairy dust falls from the fairy while she is on-screen.
- Touching fairy dust restores up to 2 hearts.
- Healing is capped at the existing maximum heart count.

## Files updated

- `index.html`
- `unicorn_run_v0.5.10.html`
- `manifest.json`
- `version.json`
- `sw.js`
- `README.md`
- `CHANGELOG.md`

## Notes

No touch-control, PWA update, audio lifecycle, leaderboard or game-over fairy behavior was intentionally changed.

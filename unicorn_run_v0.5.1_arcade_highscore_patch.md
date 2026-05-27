# Unicorn Run v0.5.1 — Arcade Highscore Board Patch

Built on v0.5.0.

## Added

- Arcade-style local Top 5 highscore board on the Game Over screen.
- 2–3 character initials entry when the final score qualifies for the current mode's Top 5.
- Date display in `YYYY/MM/DD` format next to each stored score.
- Separate boards for Auto-Run and Gecontroleerd modes, to avoid comparing the easier/harder control schemes directly.
- Last-used initials are remembered locally for faster repeat entry.
- Newly saved score is highlighted in the board.

## Technical notes

- Scores are stored in browser `localStorage` under `unicornRunLeaderboardV1`.
- Existing single-mode best scores remain under `unicornRunHigh`; the new board does not break the old best-score label.
- The board stores only initials, score, date and timestamp. No external services, no network calls.
- Keyboard input is ignored by movement controls while the initials text box is active.

## Suggested manual test

1. Start Auto-Run and intentionally score >0.
2. On Game Over, verify the initials box appears.
3. Enter two or three letters and tap OK / Enter.
4. Verify the score appears in rank order with today's date.
5. Retry with a lower score once five scores exist; verify the input box no longer appears unless the score beats #5.
6. Repeat in Gecontroleerd mode and verify it has a separate board.

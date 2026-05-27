# Unicorn Run v0.5.7 — Damage grace / blinking invincibility patch

## Changed

- `index.html` is updated to v0.5.7.
- Added `DAMAGE_INVINCIBILITY_MS = 1000` as the post-hit grace period.
- After taking damage from mud or stone, the unicorn now blinks for about 1 second.
- During that blink/grace window, additional mud or stone collisions do not cause damage.
- This prevents one obstacle or an impossible double-obstacle setup from draining several hearts at once.
- Added `unicorn_run_v0.5.7.html` as a versioned copy of the current game file.
- Updated `README.md` and `CHANGELOG.md`.

## Not changed

- No sprite changes.
- No icon changes.
- No audio/music changes.
- No touch-control layout changes.
- No pause-menu changes.
- No leaderboard/localStorage schema changes.

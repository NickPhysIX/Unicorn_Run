# Unicorn Run v0.5.2 — iOS homescreen icon + install CTA

## Added
- Uses `app-icon-180.png` as the iPhone/iPad homescreen icon via `apple-touch-icon`.
- Added `manifest.json` and 192/512 px icons for web-app install support.
- Added mobile/PWA metadata: standalone display, app title, theme color, and iOS status bar styling.
- Added a start-menu CTA for iPhone/iPad: “Delen → Zet op beginscherm”.
- Added support for the standard browser install prompt where available.

## Files added
- `app-icon-32.png`
- `app-icon-152.png`
- `app-icon-167.png`
- `app-icon-180.png`
- `app-icon-192.png`
- `app-icon-512.png`
- `app-icon-source.png`
- `manifest.json`

## Notes
On iOS/iPadOS, Safari does not expose a normal JavaScript “install” button. The CTA therefore shows the correct manual route: share button → add to homescreen. Once opened from the homescreen, the CTA hides automatically.

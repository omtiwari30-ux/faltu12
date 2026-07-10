# Key Display

A minimal single-page web app that displays whatever key you press on your keyboard, right in the center of the screen.

## Demo

Open `index.html` in a browser, press any key, and it shows up big on screen. Press the spacebar and it shows `spc`.

## How it works

- `index.html` — Sets up a full-screen dark page with a centered `<h1>` element (`#main`) that starts by showing "hello".
- `script.js` — Listens for `keydown` events on the window. When a key is pressed:
  - If it's the spacebar, the text updates to `spc`.
  - Otherwise, it updates to whatever `event.key` returns (e.g. `a`, `Enter`, `Shift`, `ArrowUp`), and logs the full event object to the console for debugging.

## File structure

```
.
├── index.html   # Page structure and styling
└── script.js    # Keydown event handling logic
```

## Usage

No build tools or dependencies needed. Just open `index.html` directly in any modern browser, or serve it with a simple local server:

```bash
# Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes / possible improvements

- Currently only handles `keydown`; could add `keyup` to reset the display.
- Special keys (`Shift`, `Control`, `ArrowUp`, etc.) display their full name — could be mapped to shorter symbols/icons.
- Font is set to `'Gilroy'` but isn't loaded via `@font-face` or a CDN, so it silently falls back to the default sans-serif.
- The global `* { background-color: #222; }` rule applies to every element, which is a bit heavy-handed — scoping it to `html, body` would be cleaner.

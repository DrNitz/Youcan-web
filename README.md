# Youcan-web

Web prototype of the Youcan study companion. This first slice is **only the character and the nature/ocean theme**, as requested. No timer, room decoration, or social features yet.

## Run it

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## What works

- Tap or activate the companion: it switches to a happy pose, shows a short greeting, then returns to idle.
- Drag the companion anywhere inside the room, with bounds so it cannot leave the scene.
- "Move companion back" returns it to its starting spot.
- Keyboard: Tab to the companion, press Enter or Space to greet it. A visible focus ring marks focus.
- Responsive down to phone widths; reduced-motion preference removes transitions.

## Files

- `index.html` - page structure
- `styles.css` - palette, layout, states
- `app.js` - interaction logic
- `assets/*.svg` - original hand-authored art
- `DESIGN.md` - design direction and dials

## Notes

The image-generation service was unavailable during this slice, so the art is original SVG drawn for this repo. It is intentionally simple and can be replaced with richer illustrations later without changing the interaction code.

# Youcan-web

Web prototype of the Youcan study companion. This first slice is **only the character and the nature/ocean theme**, as requested. No timer, room decoration, or social features yet.

## Run it

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## What works

- Tap or activate the companion: it smiles, waves, shows a short greeting, then returns to idle.
- The companion breathes, sways and blinks on slow ambient loops; the room drifts gently like a sea breeze.
- Drag the companion anywhere inside the room, with bounds so it cannot leave the scene.
- "Move companion back" returns it to its starting spot.
- Keyboard: Tab to the companion, press Enter or Space to greet it. A visible focus ring marks focus.
- Responsive down to phone widths; reduced-motion preference stops all animation.

## Files

- `index.html` - page structure
- `styles.css` - palette, layout, states
- `app.js` - interaction logic
- `assets/room.jpg` - original room art generated with the free Pollinations.ai cloud API
- `assets/character-*.svg` - static character references; the animated character is inline in `index.html`
- `DESIGN.md` - design direction and dials

## Notes

The room art came from the free Pollinations.ai cloud image API. The character is inline layered SVG so its parts can animate; this also avoids the white halo left by background removal on the generated character images. All art is original and can be replaced later without changing the interaction code.

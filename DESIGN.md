# Design direction

Source: owner's explicit choices in session (nature / ocean calm theme, original art, Youcan app).

## Identity
- **Product:** Youcan, a calm study companion.
- **Personality:** quiet, warm, by the sea. No urgency, no hype.
- **Visual language:** hand-drawn 2D, watercolor and ink texture, soft rounded shapes.

## Palette
| Role | Color | Hex |
| --- | --- | --- |
| Wall / sand | `#e8dec9` | warm neutral base |
| Paper / cream | `#fbf3e4` | light surface and text background |
| Driftwood | `#8a694e` | structure, borders, hair |
| Sea glass | `#4f8f8b` | the single accent, used on the primary control and focus ring |
| Ink | `#3a2e26` | body text |

The palette comes from the nature/ocean theme, not from a default gradient set. Teal is the one deliberate accent.

## Typography
- Headings: Georgia, a soft serif that suits the hand-drawn art and avoids the default sans look.
- Body: system UI stack for legibility at small sizes.

## Dials
- **ENERGY 1 (calm):** the scene is still; nothing shouts for attention.
- **RHYTHM 1 (uniform):** one stage, one caption, one control.
- **MOTION 2 (balanced):** slow ambient motion makes the companion feel alive while studying beside the user. Purpose: breathing and blinking read as a living study partner, a gentle head sway and scene drift read as a sea breeze, and the wave is direct feedback to a tap. All loops are slow and stop under `prefers-reduced-motion`.

## Art
- `assets/room.jpg`: original art generated with the free Pollinations.ai cloud API from a text prompt describing this exact room. No existing app's art was used.
- Character art: inline layered SVG in `index.html`, so head, eyes, mouth and hand can animate independently. The standalone `character-idle.svg` and `character-happy.svg` remain as static references.
No art or code was copied from another app.

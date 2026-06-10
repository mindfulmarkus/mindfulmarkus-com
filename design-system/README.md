# mindfulmarkus — design system

One design language across everything: mindfulmarkus.com, the Abundance app, and
every future tool (Mindful Scroll, Visibility Planner, …). The **live website is
the source of truth**, and these files are extracted directly from it so any
project can adopt the exact same look.

> **Brand feel:** calm, private, grounded. Non-preachy, mindful — not strict.
> Warm and earthy, never clinical or "finance-bro." Yoga for modern life.

---

## What's in this folder

| File | Use it when |
|---|---|
| `tokens.css` | **Always.** Framework-agnostic CSS variables (`--mm-forest`, …). The foundation. |
| `fonts.css` | Loading Cormorant + Montserrat (CDN, or see the Next.js note inside). |
| `tailwind-preset.js` | Your project uses **Tailwind** — gives the same utilities (`text-forest`, `rounded-xl2`, …). |
| `components.css` | Your project does **not** use Tailwind — ready-made `.mm-btn`, `.mm-eyebrow`, `.mm-card`, … |

### Adopt in a Tailwind project (like the website)
```js
// tailwind.config.js
module.exports = {
  presets: [require('./design-system/tailwind-preset.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
}
```
Load the fonts (next/font or `fonts.css`) and you're done — every brand utility works.

### Adopt in a non-Tailwind project (e.g. the Vite Abundance app)
```css
/* in your global stylesheet, in this order */
@import './design-system/fonts.css';
@import './design-system/tokens.css';
@import './design-system/components.css';
```
Then use `var(--mm-forest)` for custom styling and `.mm-btn--primary`, `.mm-card`, etc. for components.

---

## Colour

The palette is warm and earthy. Greens carry the brand; clay and ochre are the
accents; sand/cream/parchment are the calm surfaces.

| Token | Hex | Role |
|---|---|---|
| `forest` | `#1E4D3E` | Primary brand green — primary buttons, headings, dark sections |
| `forest-deep` | `#14342A` | Deepest green — hovers, the Tools section, deep bands |
| `sage` | `#909E86` | Muted green — secondary surfaces, the in-person section |
| `sage-light` | `#B7C0A9` | Sage hover / accents on dark |
| `sage-dark` | `#6F7D63` | Quiet text links |
| `clay` | `#B36A5E` | **Primary accent / main CTA colour**, eyebrows, underline links |
| `clay-dark` | `#8F4F45` | Clay button hover |
| `ochre` | `#C2843E` | Secondary accent, text selection highlight |
| `sand` / `sand-light` | `#E7D9C2` / `#F1E8D8` | Warm neutral backgrounds |
| `cream` | `#F7F1E6` | **Default page background** and light text on dark |
| `parchment` | `#F2E9D8` | Alternate section background (subtle contrast to cream) |
| `bark` | `#3A2E26` | Image overlays / scrims |
| `ink` | `#2B241E` | **Default body text** |

**Rhythm:** alternate section backgrounds between `cream`, `parchment`, and
`sand` for gentle separation; use `forest`/`forest-deep` for high-impact bands
(hero overlay, Tools, newsletter uses `clay`). Body text is always `ink`;
headings are `forest`.

## Typography

Two families only.

- **Cormorant** (serif) — display: headings, the wordmark, pull-quotes. Often
  italic for accents (e.g. taglines). Weight 400–600.
- **Montserrat** (sans) — everything else: body, UI, eyebrows, buttons. Weight 300–600.

**Type scale** (size / line-height): `xs` .75/1 · `sm` .875/1.4 · `base` 1/1.65 ·
`lg` 1.125/1.8 · `xl` 1.25/1.8 · `2xl` 1.6/1.3 · `3xl` 2/1.2 · `4xl` 2.6/1.12 ·
`5xl` 3.4/1.05 · `6xl` 4.4/1.0 · `7xl` 5.4/0.98 (rem).

**Eyebrow:** small uppercase Montserrat label, letter-spacing `0.25em`, colour
`clay`, sitting above a serif heading. This pairing is the signature section header.

## Shape, depth, motion

| Token | Value | Use |
|---|---|---|
| Radius — pill | `9999px` | Buttons, badges, inputs |
| Radius — card | `1.75rem` (`xl2`) | Feature cards, image frames |
| Radius — tile | `0.75rem` (`xl`) | Gallery tiles, small cards |
| Shadow — soft | `0 18px 50px -20px rgba(43,36,30,.35)` | Buttons, floating elements |
| Shadow — card | `0 12px 40px -22px rgba(43,36,30,.45)` | Cards |
| Container | `max-width: 72rem`, padding `1.25→2→2.5rem` | Page width |
| Motion | `fade-up` 0.9s ease-out | Hero / entrance reveals; keep motion gentle |

## Components

- **Buttons** are always pills. Primary = `forest` on `cream`; main CTA = `clay`
  on `cream`; soft = `sage`; outline for low emphasis. (`.mm-btn--*` or
  `btn-primary`/`btn-clay`/`btn-sage`/`btn-outline`.)
- **Cards** = `cream` surface, `card` shadow, `xl2` radius, content padded ~1.75rem.
- **Underline link** = `clay` text with an underline that wipes in on hover
  (`.mm-link` / `link-underline`).

## Voice & writing

Calm, warm, honest, grounded. Short sentences. No hype, no pressure, no jargon.
Speak to one person ("you"). Mindful, not preachy or strict.

**Brand-name rules (non-negotiable):**
- **mindfulmarkus** — always one word, all lowercase. Never capitalised, never
  with "markus" italicised or styled differently.
- **stillness in motion** — always lowercase.
- The *person* "Markus" stays capitalised (e.g. "Hi, I'm Markus") — that's him,
  not the brand.

---

*Generated from mindfulmarkus.com. When the website's tokens change, update these
files so they stay the single source of truth.*

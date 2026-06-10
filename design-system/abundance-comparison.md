# Design comparison — website vs Abundance

How the **Abundance app** (`abundance.mindfulmarkus.com`) currently compares to the
canonical **mindfulmarkus design system**, and what to reconcile so the whole
ecosystem shares one look. *Analysis only — no code changed yet.*

## How Abundance is built

- **React + Vite**, single-file UI in `src/App.jsx`. No Tailwind.
- Styling is inline via a JS palette object `const C = {…}` plus inline `style`s.
- Loads **Cormorant Garamond** only (no body sans font → falls back to system UI).
- `theme-color` is `#125442`.

This means adopting the kit later = use `tokens.css` + `components.css` (the
non-Tailwind path), and map `C` to the shared variables.

## Side-by-side

| Token | Website (canonical) | Abundance (`C`) | Status |
|---|---|---|---|
| sage | `#909E86` | `#909E86` | ✅ identical |
| clay | `#B36A5E` | `#B36A5E` | ✅ identical |
| cream | `#F7F1E6` | `#F6F2E8` | ≈ 1 digit off |
| sage-dark | `#6F7D63` | `#6B7A62` | ≈ nearly same |
| mid / muted text | `ink/70` | `#6B6860` (mid) | ≈ same intent |
| **primary green** | `#1E4D3E` | `#125442` | ❌ different → unifying (see below) |
| forest light | `#14342A` (deep) | `#1A6E57` (forestLt) | ❌ opposite direction (Abundance lightens, site deepens) |
| accent | `#C2843E` (ochre) | `#86570E` (gold) | ❌ different |
| ink (text) | `#2B241E` (warm) | `#1C1C1A` (neutral) | ❌ different |
| card surface | cream | `#FFFFFF` white | ⚠️ choice |
| serif | **Cormorant** | **Cormorant Garamond** | ❌ different cut |
| sans | **Montserrat** | none (system) | ❌ missing |
| category accents | — | purples `#3C3489` / `#534AB7`, gold | ⚠️ functional, not branded |

**Verdict:** the foundations already rhyme — same sage, same clay, near-identical
cream, same Cormorant family, same calm/warm intent. The gaps are specific and
small in number.

## Decision 1 — one unified green (changes in BOTH projects)

You chose to replace `#125442` *and* `#1E4D3E` with a single new canonical green.
See `green-options.png` for the three in real brand context:

| Option | Hex | Character |
|---|---|---|
| Website | `#1E4D3E` | Deeper, more olive/earthy |
| **Blend (recommended)** | `#18503F` | Balanced midpoint — earthy but a touch richer |
| Abundance | `#125442` | Brighter, cooler/emerald |

Once you pick one, it becomes `forest` in the kit, and we update it in the website
(`tailwind.config.ts` + `globals.css` + `tokens.css` + `tailwind-preset.js`) and in
Abundance (`C.forest`). `forest-deep` would shift to a darker shade of the chosen
green for consistency.

## Decision 2 — the rest of the reconciliation (when you're ready to apply)

**Website → kit (cheap, already 95% there):** only the chosen green changes.

**Abundance → kit:**
1. **Green** → chosen canonical value (`C.forest`, `theme-color`, `og` image accent).
2. **Serif** → swap Cormorant **Garamond** for **Cormorant** (one `<link>` change).
3. **Sans** → add **Montserrat** for body/UI (currently system font).
4. **Accent** → gold `#86570E` → ochre `#C2843E` (or keep gold as an Abundance-only
   "value/positive" colour — your call).
5. **ink** `#1C1C1A` → `#2B241E` (warmer, matches site).
6. **cream** `#F6F2E8` → `#F7F1E6` (trivial).
7. **Cards** — decide one rule: pure white (current Abundance) vs cream (site). For a
   finance app, white cards aid legibility — a reasonable documented exception.

**Functional colours (charts, category tags, the purples):** these aren't brand
colours and shouldn't be forced to green/clay. Recommend adding a small **"data"
palette** to the kit (e.g. 4–6 muted, earthy-compatible hues) so every tool styles
charts and tags consistently without polluting the brand set.

## Suggested order when we execute

1. Lock the unified green.
2. Update the kit tokens → push website (low risk, near-instant).
3. Apply tokens + fonts to Abundance (no layout changes).
4. Optional later: align Abundance's buttons/cards to the shared component styles.

---

*Source of truth: mindfulmarkus.com. This doc reflects Abundance `src/App.jsx` as of
the comparison date.*

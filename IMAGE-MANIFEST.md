# Image manifest — mindfulmarkus.com

A complete map of every photo slot on the site: where it appears, the ideal
dimensions to deliver, and the filename to give the file so it drops straight in.

**How to read "ideal size":** the site uses retina (2×) displays, so deliver at
the larger size shown. Export as **JPG** (photos) at ~80% quality, aiming for
**under ~350 KB each**. Keep the subject roughly centred — every slot is
`object-cover`, so edges may be cropped depending on screen size.

---

## ⚠️ Two things to know first

**1. Photos are currently reused across multiple slots.** Right now the same
file appears in several places (e.g. `ARV08902.jpg` is the Private-Classes card
*and* the video section *and* a gallery tile *and* a /links thumbnail). If you
want a distinct image in each spot, deliver a separate file per row below using
the proposed name. I recommend we rename to the semantic names so each slot is
independent and future swaps are trivial — just say the word and I'll do the
rename across the code.

**2. Heavy unused files are bloating the repo** (this is the 619 MB problem):

| File | Size | Status |
|---|---|---|
| `public/images/ARV08895.JPG` | **32 MB** | Not used anywhere — safe to delete |
| `public/images/hero-landing02.png` | 2.7 MB | Not used (only `01` is live) — safe to delete |
| `public/logos/logo-dark.svg` / `logo-light.svg` | ~35 KB each | Full square lockups, unused (header/footer use the mark) — keep or remove |

Deleting the first two alone removes ~35 MB of working-tree weight.

---

## Homepage (`/`)

| # | Slot | Current file | Aspect | Ideal size (deliver) | Proposed name |
|---|---|---|---|---|---|
| 1 | **Hero background** (full-screen) | `hero-landing01.png` | landscape ~3:2 | **2400 × 1600** | `hero-home.jpg` |
| 2 | Offering card — *stillness in motion* (community) | `ARV08911.jpg` | 4:3 landscape | **1200 × 900** | `offering-community.jpg` |
| 3 | Offering card — *Live Classes · Chiemsee* | `ARV9445.jpg` | 4:3 landscape | **1200 × 900** | `offering-live-classes.jpg` |
| 4 | Offering card — *Digital Products* | `ARV9422.jpg` | 4:3 landscape | **1200 × 900** | `offering-digital.jpg` |
| 5 | Offering card — *Private Classes* | `ARV08902.jpg` | 4:3 landscape | **1200 × 900** | `offering-private.jpg` |
| 6 | **Video / "real flexibility"** section | `ARV08902.jpg` | 4:3 | **1400 × 1050** | `section-flexibility.jpg` |
| 7 | **In-person / Chiemsee** section | `ARV9445.jpg` | 1:1 square | **1200 × 1200** | `section-inperson.jpg` |
| 8 | **About — portrait of Markus** | `ARV9433.jpg` | 4:5 portrait | **1100 × 1375** | `about-markus.jpg` |
| 9 | Gallery tile 1 (tall) | `ARV08911.jpg` | 3:4 portrait | **900 × 1200** | `gallery-01.jpg` |
| 10 | Gallery tile 2 | `ARV08918.jpg` | 1:1 square | **1000 × 1000** | `gallery-02.jpg` |
| 11 | Gallery tile 3 | `ARV9422.jpg` | 1:1 square | **1000 × 1000** | `gallery-03.jpg` |
| 12 | Gallery tile 4 | `ARV08902.jpg` | 1:1 square | **1000 × 1000** | `gallery-04.jpg` |
| 13 | Gallery tile 5 | `ARV9448.jpg` | 1:1 square | **1000 × 1000** | `gallery-05.jpg` |
| 14 | Gallery tile 6 | `ARV08906.jpg` | 1:1 square | **1000 × 1000** | `gallery-06.jpg` |

The gallery is a 2–3 column grid; tile 1 is taller (portrait), the rest are
square. Best to choose 6 photos that look good as a set.

---

## Chiemsee class page (`/classes/uebersee`)

| # | Slot | Current file | Aspect | Ideal size | Proposed name |
|---|---|---|---|---|---|
| 15 | Page hero (full-width, ~70% screen) | `ARV9448.jpg` | landscape ~16:9 | **2400 × 1400** | `class-uebersee-hero.jpg` |

(This page is built but not yet publicly linked — "coming soon".)

---

## Links hub (`/links`)

| # | Slot | Current file | Aspect | Ideal size | Proposed name |
|---|---|---|---|---|---|
| 16 | Background wash (faint, behind everything) | `ARV9448.jpg` | landscape | **1600 × 2000** (portrait phone) | `links-bg.jpg` |
| 17 | **Featured card** — *stillness in motion* | `ARV08906.jpg` | 16:10 | **1000 × 625** | `links-featured.jpg` |
| 18 | Thumbnail — Spotify playlist | `ARV9448.jpg` | 1:1 small | **300 × 300** | `links-thumb-playlist.jpg` |
| 19 | Thumbnail — podcast episode | `ARV08902.jpg` | 1:1 small | **300 × 300** | `links-thumb-podcast.jpg` |

For 18 & 19 you'd ideally use the **actual Spotify cover art** (playlist /
episode artwork), not a personal photo.

---

## Logos & icons (already final — no action needed)

| File | Use |
|---|---|
| `logos/logo-mark-dark.svg` | sage mark on light backgrounds (header when scrolled, /links, favicon) |
| `logos/logo-mark-light.svg` | cream mark on dark backgrounds (header at top, footer) |
| `icons/instagram.png` | footer Instagram icon |

---

## Quick summary of what to send

If you just want to refresh everything with distinct photos, send me **19 files**
named exactly as the "Proposed name" column. If some slots should share a photo,
send fewer and tell me which slot reuses which. Either way, once you drop them in
`public/images/` (and `public/images/gallery/`) I'll wire the code to the new
names and we delete the old camera-named originals.

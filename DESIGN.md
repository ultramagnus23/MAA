# Design

<!-- impeccable:design-schema 1 -->

## Direction

**Mode:** Read (comprehension and wayfinding win over expression, a student
scanning for a department email or a policy figure must never be slowed
down by the interface).

**Color strategy:** Restrained, a warm paper neutral carries the surface,
ink-black carries text, one accent (a muted academic red, close to
Ashoka's own institutional red) is reserved for links, active states, and
the small number of primary actions. No second or third accent color; no
region of the page is "drenched."

**Why this world, not a generic template:** The user's own brief was
explicit and detailed enough to function as a pinned aesthetic, neutral
palette, no gradients/glassmorphism/neon, "designed, not decorated," never
looking AI-generated, never a scrapbook. That brief is treated as binding.
Within it, the site takes its structural and typographic character  - 
hairline rules, small monospace metadata tags, numbered/tabbed sections,
plain bordered "index card" components instead of glossy shadowed cards  - 
from the real, physical register of academic paperwork MAA itself produces
(policy circulars, handbook covers, catalog-style directories), rather than
from SaaS dashboard conventions. This is a deliberate scaled-back
application of a bolder "campus archive" concept, chosen because the
brief's constraints (restraint, no gimmicks, information-first) outrank a
fuller expression of that concept, see PRODUCT.md's Product Principles.

**Explicitly rejected:** an AI-generated cinematic scroll/video hero
(`scroll-world`), by the user's own decision on 2026-09-29, the homepage
stays static-first and text-led.

## Palette

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#faf7f1` | Page background |
| `--color-paper-dim` | `#f2ede4` | Section background (alternating bands) |
| `--color-ink` | `#211d1a` | Primary text, headings |
| `--color-ink-soft` | `#55504a` | Body copy, secondary text |
| `--color-ink-faint` | `#8a837a` | Meta text, captions, disabled |
| `--color-line` | `#ddd5c8` | Hairline borders |
| `--color-line-strong` | `#c9beac` | Emphasized borders, button outlines |
| `--color-accent` | `#8a2c1d` | Links, tags, active nav, primary CTAs on hover |
| `--color-accent-soft` | `#f4e2dc` | Text selection background |
| `--color-accent-dim` | `#6f2317` | Selection text, pressed states |

No dark mode: this is a single-purpose informational site read primarily by
Ashoka students on university networks/devices, and the brief's brief did
not call for one; the light palette already carries strong contrast
(ink-on-paper exceeds WCAG AA at all text sizes used).

## Typography

- **Headings:** Newsreader (serif, italic available), an editorial,
  reading-oriented face that echoes the register of a real academic
  document without becoming a costume-y "old book" pastiche.
- **Body/UI:** Inter, workhorse sans, used for all body copy, nav, buttons,
  and form elements per Read-mode guidance (expression stays in headings and
  structure, not in every label).
- **Metadata/tags:** IBM Plex Mono, small caps-style uppercase with wide
  tracking, used for category tags (`MAA`, `DOCX`), eyebrows, and email
  addresses, evoking a catalog reference number without literal skeuomorphism.

## Components

- **Card:** `rounded` (small radius only), 1px `--color-line` border, no
  drop shadow, reads as an index card/paper note, not a SaaS panel. Hover
  darkens the border to `--color-line-strong` or `--color-accent`, never
  adds elevation.
- **Tag:** monospace, uppercase, bordered rectangle, used for event/resource
  categories and file-type notes.
- **Section rhythm:** alternating `--color-paper` / `--color-paper-dim`
  full-width bands, separated by a single hairline rule, gives scannable
  structure on a long page without needing shadows or heavy dividers.
- **Nav:** minimal, six items max, collapses to a single "Menu" toggle under
  `md`. Active route indicated by accent-colored text, never color alone  - 
  it's also the only bold/medium-weight item in the list.
- **Tables:** used plainly (department contacts, archived rosters), zebra
  striping via `--color-paper-dim`, no borders beyond row hairlines.

## Motion

Deliberately minimal: color/border transitions on hover/focus only
(`transition-colors`), smooth in-page anchor scrolling, and the mobile nav's
open/close. Nothing auto-plays, nothing parallaxes. `prefers-reduced-motion`
is honored globally in `globals.css`.

## Content rule this system exists to serve

Every card, tag, and table on the site is a wrapper around a real, sourced
fact (see PRODUCT.md → Evidence on Hand). The visual system was chosen partly
*because* its plainness doesn't need to disguise thin content, there's a
real 46MB archive of actual MAA documents behind it.

## Process note

This project's DESIGN.md was written without the full Impeccable concept-seed
sketch/decision-page flow, the user's own 22-point brief was specific enough
to serve as a pinned aesthetic direction, and the session prioritized full
IA/content coverage over running a compositional tournament against a brief
that had already ruled out most of the bolder candidate directions. The
inspection pass was a solo desktop+mobile screenshot review in this session
rather than a fresh dedicated finish-reviewer subagent pass, disclosed here
per the skill's finish-review substitution rule.

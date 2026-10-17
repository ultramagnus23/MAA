# Design system

How the website looks, and the rules to keep it consistent.

## Principles

- Plain and readable. Formal, friendly wording without jargon.
- One typeface (Georgia), always upright. No italics and no emojis anywhere, including the Marketing page.
- A small set of colours taken from the Ministry logo.
- Calm everywhere, except the Marketing page, which is the one deliberately loud page.

## Typography

- Font: Georgia, falling back to Times New Roman. This is enforced in `src/app/globals.css`.
- Sizes adjust to the screen width:

| Element | Phone | Wide screen |
| --- | --- | --- |
| Page title (h1) | about 32px | 56px |
| Section title (h2) | about 24px | 36px |
| Item title (h3) | about 18px | 24px |
| Body text | about 16px | 17px |

- Small text is never smaller than 12px (`text-xs`).

## Colours

Defined as variables in `src/app/globals.css`.

| Name | Value | Use |
| --- | --- | --- |
| Paper | `#fffdf2` | Page background |
| Paper dim | `#f7f2da` | Alternate sections |
| Ink | `#1d1423` | Text, hero overlay, Marketing hero |
| Ink soft | `#4a4052` | Secondary text |
| Accent | `#4b1a6b` | Buttons, links, active menu item |
| Line | `#e6dfc4` | Thin borders |
| Gold | `#e0b33b` | Marketing page only, plus small touches |
| Rose, Rose soft | `#d98a96`, `#f6dfe1` | Marketing page only |

Rule: gold and rose are for the Marketing page. Other pages use paper, ink and accent.

## Spacing and layout

- Content width: up to `max-w-6xl` (72rem). Reading text: `max-w-3xl`.
- Side padding: 20px on phones, 32px from 640px up.
- Sections are separated by 56 to 64px of vertical space (`py-14` to `py-16`).
- Sections alternate between paper and paper dim, divided by a thin line.

## Breakpoints

Tailwind defaults: 640px (`sm`), 768px (`md`), 1024px (`lg`), 1280px (`xl`). The full menu appears at `xl`. Below that, a Menu button opens a list.

## Components

- **Card:** white, thin border, rounded corners. Border turns accent on hover.
- **Primary button:** accent background, white text. **Secondary button:** accent outline.
- **Filter button:** outline; the selected one is filled accent and has `aria-pressed="true"`.
- **Tag:** small outlined label.
- **Status:** shown as words (Ongoing, Planned, Published), never colour alone.
- **Page header:** cream band with a small label, the title and one line of description.
- **Empty state:** a bordered box with one plain sentence saying what is missing and why.

## Focus and hover

- Every link and button has a visible focus ring (accent, 2px).
- Hover changes border or colour only. Nothing jumps around on ordinary pages.

## Animation rules

- Use only transforms and opacity.
- Everything that moves is switched off by `prefers-reduced-motion`.
- No animation library.

## Home page hero

A full-width block under the menu. Media is set in `src/data/hero.ts`.

Layers, back to front: still poster image (always present), background video (only when set, motion is allowed and data saver is off; it fades in once it can play), a dark gradient (about 85% ink at the bottom to 40% at the top) so white text stays readable, then the content. Content: logo and "Ashoka University", the title, a tagline, a description and two buttons. A "Pause video" button appears while a video plays.

Height: at least 28rem on phones, 34rem on tablets, and the full screen height (up to 52rem) on large screens. The media is cropped to fill the block, centred.

The media is decorative and hidden from screen readers. A missing or broken video file stays hidden and the poster remains. The menu sits above the hero on a solid background so it stays readable.

## Marketing page: its own visual language

The Marketing page (`/marketing`) is the creative exception. It still uses Georgia, with no italics and no emojis, but it looks different:

- A dark hero with a hand-drawn squiggle underline, star-burst stickers and paint dots.
- Cards with thick ink borders and hard offset shadows, slightly rotated, with a strip of tape on Tarun's card and a "Say hi" sticker on Niharika's.
- Gold and rose colours, which are not used elsewhere.
- Content fades and lifts in as it scrolls into view, and the decorative shapes move slightly with scrolling.

Interaction rules for this page:

- **Reveal and parallax** use only transforms and opacity. Both are off for reduced motion. Parallax is also off on touch screens.
- **Niharika Ghosh's card** swaps the mouse pointer for an Instagram-style icon, only while a mouse is over that card. It is off for touch, for pen, for reduced motion, and everywhere outside the card. The icon is decorative and never takes clicks.
- On touch screens and for keyboard users, the same Instagram-style icon and label are always visible inside the card, and the card is a normal button or link with a focus ring.
- If no Instagram link is set, the card says so and a click shows a short message. There is no fake link.
- **Sharing:** "Share" uses the phone's share menu when available, and otherwise copies the link. "Copy link" always copies, and a message confirms it.
- On phones the layout is a single column, and no pointer effects run.

## Accessibility standards

- Main text and button colour pairs were calculated at 5.6:1 or higher (AA needs 4.5:1). White text on the hero sits on a dark overlay.
- Every control works with a keyboard. Skip link at the top of every page.
- Form fields and search boxes have labels (`aria-label`).
- Live regions announce calendar day selection, filter counts and copy confirmations.
- No content depends on hover.

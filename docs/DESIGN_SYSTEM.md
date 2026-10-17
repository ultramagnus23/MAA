# Design system

A short reference for how the website looks.

## Principles

- Plain and readable. Formal, friendly wording, without jargon.
- One typeface (Georgia), always upright. No italics, no emojis.
- A small set of colours taken from the Ministry logo.

## Typography

- Font: Georgia, falling back to Times New Roman.
- Sizes adjust automatically to the screen width (set in `src/app/globals.css`):
  - Page title (h1): about 32px on a phone to 56px on a wide screen
  - Section title (h2): about 24px to 36px
  - Item title (h3): about 18px to 24px
  - Body text: about 16 to 17px, with relaxed line spacing

## Colours

Set in `src/app/globals.css`.

| Name | Use |
| --- | --- |
| Paper (`#fffdf2`) | Page background |
| Paper dim (`#f7f2da`) | Alternate section background |
| Ink (`#1d1423`) | Main text, and the overlay on the hero |
| Ink soft | Secondary text |
| Accent (`#4b1a6b`) | Buttons, links, the active menu item |
| Line | Thin borders |

## Home page hero

The hero is a full-width block under the menu bar. Its media is set in `src/data/hero.ts` (see `docs/ADMIN_GUIDE.md`).

**Layers, back to front**

1. Still poster image, always present (`next/image`, loaded first).
2. Background video, added on top only when files are set, motion is allowed and data saver is off. It fades in once it can play.
3. Dark gradient overlay, from about 85% ink at the bottom to 40% at the top. It keeps white text readable over any footage.
4. Content: logo and "Ashoka University", the title, one line of tagline, a short description, and two buttons.

**Content**

- Text is white. The title uses the h1 size above.
- Primary button: white with accent text. Secondary button: white outline with white text.
- A "Pause video" button sits in the bottom corner while a video is playing, so motion can always be stopped.

**Size and cropping**

- Height: at least 28rem on phones, 34rem on tablets, and the full screen height (up to 52rem) on large screens.
- Media fills the block using "cover" cropping, centred. Keep important detail away from the edges.
- On phones the text stacks and the buttons fill the width.

**Accessibility and performance**

- The media is decorative and hidden from screen readers. The title and text are real page text.
- The video is muted, looping and plays inline. It is not shown when the visitor prefers reduced motion or has data saver on.
- The video does not block the page. The poster loads first and the video is added afterwards.
- The menu bar sits above the hero on a solid background, so it stays readable and clickable.
- A missing or broken video file stays hidden, and the poster remains.

## Components

- **Card:** white, thin border, rounded corners. Border turns accent on hover.
- **Button (primary):** accent background, white text. **Button (secondary):** accent outline.
- **Page header:** a cream band with the page title, used on every page except the home page.
- **Help finder (home page):** topic buttons that show one answer and one link.

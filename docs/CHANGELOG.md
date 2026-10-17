# Changelog

## This round (October 2026)

### Added
- **Projects page** with ongoing, planned and published projects, each citing its source, and a monthly transparency archive. Replaces Transparency in the menu.
- **About page:** the full team directory by department (11 people, once each), how things are verified, and where each query goes.
- **Events page:** a month calendar, category and date filters, an events list, and a page for each event (`/events/[slug]`). It is now the only calendar.
- **Office Hours page** (`/office-hours`) showing name, designation, department and booking for the three people who have office hours, plus email and WhatsApp contact.
- **Representatives page:** 21 department emails with the department's WhatsApp invite link, and two QR-code groups.
- **Marketing page** (`/marketing`): graffiti-style hero, cards for Tarun Shetty and Niharika Ghosh, Instagram-style pointer on Niharika's card, share and copy-link buttons, scroll reveal and light parallax.
- **Footer** with an SG report slot that appears once a link is set.
- **Hero video support** with a poster fallback, a pause button, and respect for reduced motion and data saver.
- **Data checks** (`npm test`, Vitest) and the `docs/` folder.
- Data files: `team-members.ts`, `office-hours.ts`, `whatsapp.ts`, `projects.ts`, `reports.ts`, `marketing.ts`, `footer-links.ts`, `hero.ts`.

### Changed
- Menu: Projects and Office Hours added; Calendar removed. Marketing is not in the menu; it is opened by clicking Tarun Shetty or Niharika Ghosh on About, with a confetti effect. The full menu now shows from 1280px wide.
- Home page rebuilt around the new structure. It no longer carries the team gallery. The gallery moved to About.
- Team photos on About: invented names, roles and settings removed, replaced with short neutral captions.
- Office hours now show the Minister and Deputy Minister designations.
- Resources page has a short legend explaining the categories.
- Reduced-motion and save-data checks use a shared hook (`src/lib/useMediaQuery.ts`).

### Designations
- The eight people other than the Minister and Deputy Ministers are now shown as Head of Department (About page and Marketing cards), as stated by the Ministry.

### Removed
- `/calendar` page (redirects to `/events`).
- The older `currentReps` data (replaced by `office-hours.ts`).

### Earlier work in this period
- One-font (Georgia) design, logo-based colours, emoji and italics removed, formal wording.
- Handbooks on their own page. All resources and handbooks now link to Google Drive. Hosted copies were removed from the repository.
- A Google sign-in restricted to `ashoka.edu.in` was built, and then removed on the Ministry's decision. Nothing from it remains.

### Migrations
None.

### Environment variables
No change. `EVENTS_SHEET_CSV_URL` is still the only optional variable.

### Still open
- Projector tracker: not built, requirements unknown.
- SG report link, monthly reports, Instagram links, marketing work, designations, photographs, events: not supplied.
- Many document links ask visitors to sign in.
- Not deployed. The live site has not been changed by this work.

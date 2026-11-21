# Changelog

## 21 November 2026: wording, captions and redundancy

### Changed
- Sports accommodation policy: removed the "appears to be a proposal template" note.
- Pass/Fail guide: removed "Informal, not an official policy".
- Team photo captions replaced with the captions supplied by the Ministry (for example "Behind the scenes at the Academic Societies Awards", "MAA trip to Murthal", "Meet the BOR").
- Sreejit is shown as Executive Director. Yash Singh and Chaitanya Tripathi are confirmed as the Tech Heads of Department.

### Removed (repeated content)
- Home page: the strip of four quick links (the menu and the "What do you need help with?" helper already cover them).
- Office Hours: the bottom card about department questions (the page introduction already says it).
- Representatives: the two-card guide at the top (the page heading already says it). The heading now also points to Office Hours.

### Left in place for your decision
- The Resources page still lists "Department WhatsApp Groups and BOR Email IDs" and "MAA Open Q&A Group (UG2025)", which the Representatives and Office Hours pages also cover. They were supplied in your link list, so they were not removed.

## 18 November 2026: team change

- Tech department is now Yash Singh and Chaitanya Tripathi.
- New "Core Team" group, listed first on About: Minal Priya (Minister), Ananya Makkar and Anushka Sinha (Deputy Ministers), and Sreejit.
- Roster is now 14 people. Data tests updated.
- To confirm: Sreejit's full name and designation, and the designation shown for Yash Singh and Chaitanya Tripathi (Head of Department).

## 18 November 2026: wrap-up

### Changed
- The Resources page no longer says resources are "verified by the Office of Academic Affairs".
- "Anuskha Sinha" is now spelled "Anushka Sinha" (About, Office Hours, tests, docs), matching the Calendly link and the Ministry's latest status list.

### Fixed
- Marketing page: duplicate element ids on the Instagram-style icons (each icon now has its own id).

### Checked
- Pages: one h1, image text, button and link names, form labels, safe external links, no emoji, no sideways scrolling at 375px on 11 pages.
- Reduce-motion: opening Marketing from About skips the confetti and just opens the page.
- Live site (maa-silk.vercel.app) shows the latest menu (no Handbooks, no Marketing) and the footer Instagram link.
- Links: about 55 Google document and Drive links still ask for a sign-in. All 21 WhatsApp and 3 Calendly links open.
- Types, lint, 13 data tests and the production build all passed.

### Repository
- Six automated security and dependency workflow commits from the repository owner were merged in (`.github/`). No site code changed.

## 28 October 2026: confirmed changes

### Removed
- About: the "Verified by the OAA" section and its cards. The grievance form sentence in the Academic societies text.
- Representatives: the "Copy email" button and its code.
- Postgraduate Q&A Group (Representatives page, Resources, WhatsApp data).
- Projects: "Open office hours with the Board of Representatives".

### Changed
- Department names no longer end in "(UG)" (Biology, Physics in the contact and WhatsApp data; Economics and English in the handbook list). Individual programme labels in the 2024–25 archive (for example "Hiyaa Atreya (UG)") were kept because they describe the person, not the department.
- Handbooks archived: removed from the menu, footer, Resources page and home page helper. Page marked "Archived handbooks" and linked from the 2024–25 archive page. Data and links kept.
- Footer: added the Ministry's Instagram link (opens in a new tab, with an accessible label).
- 2024–25 archive page: clearer layout (programme labels, summary line, notice that it is a historical record). Title and year unchanged.

### Not changed
- No mail icon existed in the footer, so none was replaced. The email address is still shown as a link.
- Grievance form kept in the footer.
- Excluded items (new hero and About descriptions, project updates, FAQs, faculty discovery, volunteer and thesis forms) were not touched.

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

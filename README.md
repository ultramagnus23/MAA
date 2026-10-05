# MAA, Ministry of Academic Affairs website

Website for Ashoka University's Ministry of Academic Affairs (MAA). Built as
a Next.js site so it's free to host, fast, and easy to hand over from one
MAA team to the next.

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## How content is organised

Almost everything on the site is a plain TypeScript data file under
`src/data/`, no database, no CMS login required for most content:

- `src/data/representatives.ts`, current office-hours reps, department
  contact emails, and the archived 2024–25 roster.
- `src/data/resources.ts`, every resource card, grouped by category, plus
  the department/student handbook lists.
- `src/data/site.ts`, site name, nav links, contact email.

To update any of these, edit the file directly (it's a list of objects  - 
copy an existing entry and change the text) and redeploy. No build tooling
knowledge is needed beyond "edit text between quotes."

**Do not add a person, event, date, or link that isn't independently
verifiable.** This site's whole value is that everything on it traces back
to something real MAA actually produced or maintains, see `PRODUCT.md` and
`DESIGN.md` for the reasoning behind that constraint.

## Resource files

Actual documents (policy PDFs, handbooks, guides) live in
`public/resources/`. They're plain static files, to update one, replace the
file at the same path (same filename) and it goes live on next deploy. To
add a new one, drop it in `public/resources/` and add a matching entry to
`src/data/resources.ts` with its path (e.g. `/resources/My New Guide.docx`).

Large handbooks (50MB+) are intentionally **not** hosted here, they're
listed in `largeHandbooksNotMirrored` in `src/data/resources.ts` and pointed
at MAA's Drive instead, to keep the site light and fast.

## Events, the one part built for non-technical editing

Events are the one thing the brief specifically called out as needing to be
addable by an Academic Representative with no code access. The site solves
this with a **published Google Sheet**, not a custom admin panel:

1. Create a Google Sheet with one tab, one row per event, and these exact
   column headers in row 1: `title`, `date`, `time`, `location`, `category`,
   `description`, `link`, `organizer`. (`date` must be `YYYY-MM-DD`;
   `category` must be exactly `MAA`, `Academic Society`, or `University`.)
2. In Google Sheets: **File → Share → Publish to web** → select that sheet
   tab → format **Comma-separated values (.csv)** → Publish. Copy the URL it
   gives you.
3. Set that URL as the `EVENTS_SHEET_CSV_URL` environment variable wherever
   the site is deployed (e.g. in Vercel's Project Settings → Environment
   Variables).
4. Redeploy once. From then on, anyone with edit access to the sheet can add,
   edit, or remove events, the site picks up changes automatically (checked
   every 5 minutes), with zero code changes or redeploys.

Until `EVENTS_SHEET_CSV_URL` is set, the events/calendar pages show an empty
state rather than fabricated events, see `src/data/events.ts`.

A plain-language walkthrough of steps 1–2 for a rep (not a developer) is
published at `/events/add` on the live site.

**On the "MAA-only vs. MAA + other academic events" question** the original
brief left open: the `category` field already distinguishes these
(`MAA` / `Academic Society` / `University`), so that policy decision can be
made later, e.g. by filtering what shows on the homepage, without any
schema change.

## Deploying

The site is a standard Next.js app, deploys cleanly to
[Vercel](https://vercel.com) (recommended: free tier, zero server
maintenance) by connecting this repository and setting the
`EVENTS_SHEET_CSV_URL` environment variable described above.

```bash
npm run build
```

## Design system

See `DESIGN.md` for the visual system (palette, type, component patterns)
once documented, and `PRODUCT.md` for product context, what's real vs.
placeholder, and open decisions that were deliberately left for MAA to make
rather than guessed at.

# Data model

There is no database. Data is stored in TypeScript files in the repository (`src/data/`), in a Google Sheet (events), and on Calendly (bookings). Changes to the files go live when pushed to `main`.

## Persistence strategy

| Data | Stored in | Who can change it |
| --- | --- | --- |
| Team, projects, reports, resources, handbooks, WhatsApp, office-hour people, hero, marketing, footer link | `src/data/*.ts` in the repository | Anyone who can push to `main` |
| Events | A published Google Sheet | Anyone with edit access to the sheet |
| Bookings | Calendly | The person who owns each Calendly page |

Nothing is stored about visitors. There are no cookies, accounts or form submissions.

## Files and shapes

| File | Shape | Notes |
| --- | --- | --- |
| `team-members.ts` | `TeamMember { name, department, designation? }` | `department` is one of five fixed values. `designation` left out means "Team member". Currently everyone has one: Minister, Deputy Minister or Head of Department. |
| `office-hours.ts` | `OfficeHourHolder { name, designation, department?, bookingUrl, bookingLabel, timings? }` | Must also be on the roster with the same designation. `department` is optional and currently left out. |
| `projects.ts` | `Project { name, summary, status, department?, period?, links?, source }` | `status` is Ongoing, Planned or Published. `source` is required. |
| `reports.ts` | `MonthlyReport { period, published, summary, url }` | Empty. One entry per report. |
| `resources.ts` | `Resource { title, description, category, url, fileNote? }` | Titles must be unique. |
| `handbooks.ts` | `Handbook { title, group, url, year? }` | `group` is Department, Student or Batch. |
| `whatsapp.ts` | `WhatsAppGroup { department, groupName, url }` and `qrWhatsAppGroups` | `department` must match `departmentContacts`. |
| `representatives.ts` | `departmentContacts { department, email }`, plus the archived 2024–25 roster | Emails are role addresses. |
| `marketing.ts` | `marketingProfiles { name, instagramUrl }`, `campaigns` | Empty strings and an empty list until real items exist. |
| `hero.ts` | `heroConfig { video[], poster }` | See the admin guide. |
| `footer-links.ts` | `footerLinks { sgReportUrl }` | Empty until the SG report address is set. |
| `team.ts` | `TeamPhoto { id, src, caption, alt }` | The 12 group photos on About. |
| `site.ts` | name, email, links, `nav` | |

Events (Google Sheet columns): `title`, `date`, `time`, `location`, `category`, `description`, `link`, `organizer`. Parsed in `src/lib/events.ts` into `MaaEvent`.

## Relationships

- Office-hour holder to team member: by exact name. Designation is copied from the roster and checked by a test.
- WhatsApp group to department: by exact department name.
- Project links to other pages: a link starting with `/` is an internal page, anything else opens in a new tab.
- Event page address: `<date>-<title as lowercase words joined by hyphens>`, made by `eventSlug`.

## Validation

- **Data files:** `npm test` checks the roster (11 people, once each, valid departments, only three designations, correct designations), that office-hour people are on the roster with matching details and are fewer than the whole team, that every WhatsApp link is a `chat.whatsapp.com` invite and matches a real department, that resource and handbook links point to Google or this site, that resource titles are unique, that every project has a source, that the menu has Projects and no Transparency or Calendar, and that event addresses are made correctly. TypeScript also checks the shapes.
- **Events sheet:** rows without a title or date are skipped. An unknown category becomes `MAA`.

## Migrations

None. There is no database.

## Seed data: genuine or placeholder

| Data | Status |
| --- | --- |
| Team roster | Genuine (supplied) |
| Office-hour people and Calendly links | Genuine (existing on the live site) |
| WhatsApp invite links and department emails | Genuine (from the Ministry's document) |
| Resource and handbook links | Genuine (supplied by the Ministry) |
| Projects | Genuine content from named documents. Statuses should be confirmed. |
| Department descriptions | Draft, needs confirming |
| Team photo captions | Written from what is visible in each photo. Need checking. |
| Monthly reports, SG report link, campaigns, Instagram links, events | Empty. Nothing was invented. |

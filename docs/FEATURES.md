# Features

For each feature: what a student does, which files make it, what data it reads, who can change it, and what it cannot do yet.

## Home page

- **Workflow:** a student lands on the hero, picks a topic in "What do you need help with?", and gets one answer and one link. Below are quick links, current projects, office hours, upcoming events, featured resources, and links to the team and department contacts.
- **Files:** `src/app/page.tsx`, `src/components/HeroVideo.tsx`, `src/components/HelpFinder.tsx`.
- **Data:** `hero.ts`, `projects.ts`, `office-hours.ts`, `resources.ts`, events (Google Sheet).
- **Permissions:** none; read only.
- **Limits:** the hero shows a still photo until a video is supplied. The home page shows only previews. It has no full calendar and no team directory.

## Projects and monthly reports

- **Workflow:** projects are grouped as Ongoing, Planned and Completed. Each card shows status, period, a summary, links, and the document it came from. Below them is the monthly transparency archive.
- **Files:** `src/app/projects/page.tsx`, `src/data/projects.ts`, `src/data/reports.ts`.
- **Data:** ten projects taken from the BOR Annual Report 2024-25, the Course Caps Report and the Mandate for Academic Societies. No dates are shown unless a source gave one.
- **Permissions:** edit the data files in the repository.
- **Limits:** no monthly report has been supplied, so the archive shows an empty state. The three "Ongoing" and "Planned" statuses come from the wording of the source documents. The Ministry should confirm them. Project details beyond what those documents say have not been added.

## About and team directory

- **Workflow:** the page explains the Ministry, how things are verified, and where each kind of query goes. Then it lists the five departments with their members. Community Outreach and Marketing links to its page. People with office hours have a "Book office hours" link.
- **Files:** `src/app/about/page.tsx`, `src/data/team-members.ts`, `src/components/Avatar.tsx`, `src/components/TeamGallery.tsx`.
- **Data:** the 11-person roster. A data check confirms each person appears once and is in a valid department.
- **Limits:** no photographs yet (initials are shown). Only three designations were supplied. Department descriptions are drafts. The team photo gallery shows 12 group photos with neutral captions that describe only what is visible.

## Events and calendar

- **Workflow:** a month calendar with a count on each day that has events, a list of events, and filters for category and for upcoming, past or all. Selecting a day lists its events. Each event opens its own page with date, time, location, organiser, type and a registration link when there is one.
- **Files:** `src/app/events/`, `src/components/EventsExplorer.tsx`, `src/lib/events.ts`.
- **Data:** the Google Sheet named in `EVENTS_SHEET_CSV_URL`.
- **Permissions:** anyone with edit access to the sheet can add events. The site itself has no login.
- **Limits:** the sheet is not connected yet, so there are no events and the page shows an empty state. There is no filter by department because the sheet has no department column. MAA events and promoted events are told apart by the category (MAA, Academic Society, University).

## Office hours

- **Workflow:** each person card shows name, designation, timings and a booking button (a department line appears only if one is set; it is currently not set). The three people with office hours are listed. The page also explains how to email or WhatsApp the Ministry.
- **Files:** `src/app/office-hours/page.tsx`, `src/data/office-hours.ts`.
- **Data:** three people with Calendly links.
- **Limits:** booking happens on Calendly. The site cannot show available, booked, cancelled or completed sessions, and it cannot prevent double bookings, because it does not hold bookings. Calendly does that. Timings are not listed because none were supplied, so the card says they are shown when booking. If nobody is listed, the page shows an empty state.

## Policies and resources

- **Workflow:** search, and filter by category (Policy, Guides, Directories and Tools, Advocacy and Reports, Communication). A short legend explains the categories.
- **Files:** `src/app/resources/page.tsx`, `src/components/ResourcesArchive.tsx`, `src/data/resources.ts`.
- **Data:** 36 resources, each linking to its Google document.
- **Limits:** the site does not label anything "official policy" beyond the category name. No applicable dates are shown except those in the titles (such as 2025–26). Many links currently ask visitors to sign in. See [CONTENT_REGISTER.md](CONTENT_REGISTER.md).

## Handbooks

- **Workflow:** filter by Department, Student or Batch, or search by name.
- **Files:** `src/app/handbooks/page.tsx`, `src/components/HandbooksDirectory.tsx`, `src/data/handbooks.ts`.
- **Data:** 29 handbooks with Google Drive links.

## WhatsApp groups and representatives

- **Workflow:** search departments, then email the representative, copy the email, or join the department's WhatsApp group. Two QR-code groups are listed below.
- **Files:** `src/app/representatives/page.tsx`, `src/components/DepartmentDirectory.tsx`, `src/data/whatsapp.ts`, `src/data/representatives.ts`.
- **Data:** 21 department emails and 21 invite links taken from the Ministry's document "Department Whatsapp Groups + BOR Email IDs". All 21 invite links answered when checked.
- **Limits:** the source document does not give a purpose or audience per group, so every group is described only as a department WhatsApp group. Sanskrit Studies has no representative or group. Past representatives are on the archive page.

## Projector tracker

Not implemented. No file in the project describes it. See [CONTENT_REGISTER.md](CONTENT_REGISTER.md).

## Marketing page

- **How to reach it:** it is not in the main menu. Open About, go to the Community Outreach and Marketing department, and click Tarun Shetty or Niharika Ghosh. Confetti falls from the top of the screen and the Marketing page opens. With "reduce motion" on, or when opened in a new tab, the page opens with no confetti.
- **Workflow:** a loud hero, then Tarun Shetty and Niharika Ghosh as two differently styled cards, a "The work" section, and a share section.
- **Files:** `src/app/marketing/page.tsx`, `src/components/MarketingFx.tsx`, `src/data/marketing.ts`.
- **Niharika's card:** over her card the mouse pointer becomes an Instagram-style icon. On touch screens and for keyboard users the icon and label are always visible in the card. Without a configured link, a click shows "Niharika's Instagram link has not been configured yet." With a link, the card opens it in a new tab.
- **Sharing:** Share (phone share menu, or copy), Copy link (with a confirmation message), per-campaign sharing once campaigns exist.
- **Limits:** no Instagram link, social handle, photograph or campaign has been supplied, so none are shown. Tarun's card says no social link has been supplied.

## Footer and SG report

- **Workflow:** every page has a footer with the Ministry identity, the main pages, key policies and handbooks, contact links, the grievance form, and the address.
- **Files:** `src/components/Footer.tsx`, `src/data/footer-links.ts`.
- **Limits:** the SG report link appears only after `sgReportUrl` is set. No address has been supplied, so it is not shown.

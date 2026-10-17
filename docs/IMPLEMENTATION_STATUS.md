# Implementation status

Status key: **Complete and tested**, **Implemented, not fully tested**, **Partial**, **Blocked** (missing information), **Not implemented**.

| Item | Status | Notes | Where |
| --- | --- | --- | --- |
| Landing page | Implemented, not fully tested | Built, type-checked, viewed on desktop and phone width. Hero shows a photo until a video exists. Real touch and other browsers untested. | `src/app/page.tsx` |
| Projects page replaces Transparency in the menu | Complete and tested | Menu test and redirect checked. | `src/app/projects/`, `src/data/site.ts` |
| Projects content | Partial | Ten projects from three source documents. Statuses need confirming. | `src/data/projects.ts` |
| Monthly transparency archive | Partial | Page and data file work and show an empty state. No reports supplied. | `src/data/reports.ts` |
| SG report in the footer | Blocked | Footer slot built. No link supplied. | `src/data/footer-links.ts` |
| About page and team directory | Complete and tested | 11 people, once each, correct departments, only three designations. Checked by data tests. Photos not supplied. | `src/app/about/`, `src/data/team-members.ts` |
| Events page with calendar | Implemented, not fully tested | Tested with temporary events in the browser. The real sheet is not connected. | `src/app/events/`, `src/components/EventsExplorer.tsx` |
| Calendar only on Events | Complete and tested | `/calendar` redirects. No calendar elsewhere. | `next.config.ts` |
| Event detail pages | Complete and tested | Works, and unknown addresses give 404. | `src/app/events/[slug]/` |
| Filters by date and category | Complete and tested | No department filter, because the sheet has no department column. | |
| Event submission | Partial | Done through the shared Google Sheet. There is no in-site form or login. | `/events/add`, docs |
| Office hours | Implemented, not fully tested | Name, designation, department, timings text, booking link, empty state. No session statuses or double-booking control, because Calendly holds the bookings. | `src/app/office-hours/`, `src/data/office-hours.ts` |
| Only scheduled people shown | Complete and tested | Checked by a data test. | |
| Policies and resources | Implemented, not fully tested | Search and category filter, 36 links. Many links ask for sign-in. | `src/app/resources/` |
| Handbooks | Implemented, not fully tested | 29 handbooks, filter and search. | `src/app/handbooks/` |
| WhatsApp groups and representatives | Complete and tested | 21 real invite links, all answered when checked. Purposes not in the source. | `src/app/representatives/`, `src/data/whatsapp.ts` |
| Projector tracker | Blocked | Requirements are not documented anywhere. Not built. See the content register. | n/a |
| Marketing page | Implemented, not fully tested | Built and viewed. Reduced motion and screen readers were not run. | `src/app/marketing/` |
| Niharika's Instagram-style pointer | Implemented, not fully tested | Logic checked with simulated pointer events (mouse, touch, leave, click). Not checked on real devices. | `src/components/MarketingFx.tsx` |
| Instagram link for Niharika | Blocked | No link supplied. The card shows "awaiting configuration". | `src/data/marketing.ts` |
| Sharing (Web Share, copy link) | Implemented, not fully tested | Not run in a browser. Neither the copy action nor the phone share menu was tested. | `src/components/MarketingFx.tsx` |
| Footer | Implemented, not fully tested | Links to main pages, key documents, contact. | `src/components/Footer.tsx` |
| Hero video | Implemented, not fully tested | Missing-file case checked. A real video was never played. | `src/components/HeroVideo.tsx` |
| Mobile layouts | Implemented, not fully tested | No sideways scrolling at 375px on eight pages. | |
| Keyboard and reduced motion | Implemented, not fully tested | Controls are real buttons and links. Reduced motion handled in code, not run. | |
| Data persistence | Partial | Data is stored in files and a Google Sheet. There is no database or login. | docs |
| Secrets and environment | Complete and tested | No secrets in the repository. One optional variable. | |
| Documentation | Complete | 13 documents plus README, written from the actual code. Checked against the code by reading, not by an automated test. | `docs/` |
| Build, lint, types, data tests | Complete and tested | All passed. See [TESTING.md](TESTING.md). | |
| Deployment | Not implemented | Nothing was deployed. The live site is unchanged. | |

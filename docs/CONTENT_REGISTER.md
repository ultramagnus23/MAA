# Content register

Everything on the site that was supplied, what is still missing, and what is a temporary placeholder.

## Confirmed (supplied or taken from the Ministry's own documents)

| Content | Source |
| --- | --- |
| Team roster, departments, three designations | Supplied roster |
| Office-hour people and Calendly links | Existing site |
| 21 department WhatsApp invite links and 21 representative emails | "Department Whatsapp Groups + BOR Email IDs" |
| Links for 36 resources and 29 handbooks | Link list supplied by the Ministry |
| Ten projects | BOR Annual Report 2024-25, Course Caps Report, Mandate for Academic Societies |
| Grievance form link | Existing site |

## Missing: needs input

| Item | What is needed | Where it goes |
| --- | --- | --- |
| **SG report** | The link to the report | `src/data/footer-links.ts` (`sgReportUrl`) |
| **Monthly transparency reports** | Each report's link, period, publication date and a one or two line summary | `src/data/reports.ts` |
| **Projector tracker** | What it should track. Nothing in the project describes it. See below. | Not built |
| **Instagram links** | Niharika Ghosh's profile address (needed for her pointer effect to open it), and Tarun Shetty's if there is one | `src/data/marketing.ts` |
| **Marketing work** | Real campaigns, event promotions or creative work, with links | `src/data/marketing.ts` |
| **Office-hour timings** | Weekly timings if they should be shown on the site (currently shown on Calendly only) | `src/data/office-hours.ts` |
| **Designations** | For Tarun Shetty, Niharika Ghosh, Saanve Shalini Singh, Devyani Rai, Poorvi Sanath Kumar, Nia Motha, Endri Agarwal, Arjeeta Chakraborty | `src/data/team-members.ts` |
| **Team photographs** | A photo for each person | Needs a small code change to show them |
| **Events** | The published Google Sheet link, and the events | `EVENTS_SHEET_CSV_URL` |
| **WhatsApp group purposes** | The source gives only group names. Add a purpose per group if wanted. | `src/data/whatsapp.ts` |
| **Hero video** | The Ministry's own footage | `public/hero/` and `src/data/hero.ts` |

## To confirm

- The spelling "Anuskha Sinha" (roster) or "Anushka Sinha" (older sources).
- The status of each project. "Ongoing" for the fest calendar and fest guidelines, and "Planned" for the research network, come from the wording of their source documents. "Published" means a finished document exists.
- The department descriptions on About (drafts).
- The captions on the 12 team photos. They describe only what is visible.
- The sentence on About that says the Ministry and the Ministry's resources are verified by the Office of Academic Affairs. It was written from instructions given in conversation, not from a document.

## Links that ask for a sign-in

When checked without an account (17 October 2026), about 56 of the Google document links answered "sign-in required". The rest of the Google links, all WhatsApp links, all Calendly links and Linktree opened normally. The grievance form also asked for sign-in. If these files are meant to be open to anyone with the link, change their sharing in Google Drive. If they are meant for Ashoka accounts only, no change is needed.

## Placeholders in the site

- The hero shows a team photo until a video is supplied.
- Empty states stand in for events, monthly reports, marketing work, and an unset SG report, Instagram link or social link.
- No fake content, links, numbers or people were added.

## Projector tracker: what we know

- Nothing in the repository, in the Ministry's resource folder, or on the live site mentions a projector tracker. The folder contains an Assignment Tracker spreadsheet, which is a different thing.
- Possible meanings: projector inventory, availability, bookings, locations, maintenance or equipment requests. We cannot choose between them.
- It would need a place to store records that several people can edit (a database or a shared sheet) and a decision on who may edit. The site has neither.
- To build it, supply: what is being tracked, who uses it, which fields it needs, who may add or change records, and any starting data.

## Social, sharing and WhatsApp

- WhatsApp: real invite links for 21 departments, plus two QR images on Drive.
- Instagram and other social links: none supplied.
- Sharing buttons use the page address, which is real.

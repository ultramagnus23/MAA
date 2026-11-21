# Team and departments

## Roster

File: `src/data/team-members.ts`. The About page lists the core team first, then the five departments. Everyone appears once.

| Name | Designation shown | Group |
| --- | --- | --- |
| Minal Priya | Minister | Core Team |
| Ananya Makkar | Deputy Minister | Core Team |
| Anushka Sinha | Deputy Minister | Core Team |
| Sreejit | Executive Director | Core Team |
| Yash Singh | Head of Department | Tech |
| Chaitanya Tripathi | Head of Department | Tech |
| Tarun Shetty | Head of Department | Community Outreach and Marketing |
| Niharika Ghosh | Head of Department | Community Outreach and Marketing |
| Saanve Shalini Singh | Head of Department | Strategy and Collaborations |
| Devyani Rai | Head of Department | Strategy and Collaborations |
| Poorvi Sanath Kumar | Head of Department | Policy and Resources |
| Nia Motha | Head of Department | Policy and Resources |
| Endri Agarwal | Head of Department | Support and Research |
| Arjeeta Chakraborty | Head of Department | Support and Research |

On 18 November 2026 the Ministry changed the roster: the Tech department is now Yash Singh and Chaitanya Tripathi, and the previous Tech members (the Minister and Deputy Ministers) together with Sreejit (Executive Director) form the core team.

## Groups

The core team, then the five departments:

1. Core Team
2. Tech
3. Strategy and Collaborations
4. Community Outreach and Marketing
5. Policy and Resources
6. Support and Research

The short description of each department on the About page is a draft and needs confirming.

## Verified designations

- Minal Priya: Minister. Ananya Makkar and Anushka Sinha: Deputy Minister. (Supplied in the original roster.)
- Sreejit: Executive Director. (Confirmed by the Ministry on 21 November 2026.)
- Everyone in the departments is a Head of Department, including Yash Singh and Chaitanya Tripathi, who the Ministry confirmed are the Tech Heads of Department.

A data check (`npm test`) fails if the roster changes from these 14 people, if the core team or Tech team differ from the list above, or if a designation differs from the rules above.

## Missing or to confirm

- **Sreejit's surname.** Only a first name was given.
- **Spelling.** The original roster said "Anuskha Sinha". The site uses "Anushka Sinha", as in the Calendly link and the Ministry's latest status list.
- **"Head of Department" wording**, and whether each department has two heads.
- **Photographs** for everyone. Initials are shown instead.
- **Department descriptions** (drafts, including the one for the core team).
- "Tech" is not shown on the Minister and Deputy Minister cards.

## Office hours versus team membership

- The team directory (About) lists everyone on the roster.
- The Office Hours page lists only people in `src/data/office-hours.ts`: currently Minal Priya, Anushka Sinha and Ananya Makkar, each with a Calendly link.
- Being on the roster does not put someone on the Office Hours page, and nobody else is shown as having office hours.
- The designation shown on a person's office-hours card comes from their roster entry. A data check confirms the two agree. The department is not shown for the Minister and Deputy Ministers.

## Department Representatives are separate

Department Representatives (the Board of Representatives) are not part of the Ministry team and are not in this roster. They are listed on the Representatives page with department email addresses. Students contact them directly for department matters. They are not part of the office-hours system.

The Foundation Course representatives were removed from the site's pages. They remain only in the 2024–25 archive data.

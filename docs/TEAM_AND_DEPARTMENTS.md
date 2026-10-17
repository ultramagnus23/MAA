# Team and departments

## Official roster

Names and departments are exactly as supplied. Designations: the Minister and two Deputy Ministers were supplied in the roster, and the Ministry later confirmed that the other eight people are Heads of Department (HODs). File: `src/data/team-members.ts`.

| Name | Designation shown | Department |
| --- | --- | --- |
| Minal Priya | Minister | Tech |
| Ananya Makkar | Deputy Minister | Tech |
| Anuskha Sinha | Deputy Minister | Tech |
| Tarun Shetty | Head of Department | Community Outreach and Marketing |
| Niharika Ghosh | Head of Department | Community Outreach and Marketing |
| Saanve Shalini Singh | Head of Department | Strategy and Collaborations |
| Devyani Rai | Head of Department | Strategy and Collaborations |
| Poorvi Sanath Kumar | Head of Department | Policy and Resources |
| Nia Motha | Head of Department | Policy and Resources |
| Endri Agarwal | Head of Department | Support and Research |
| Arjeeta Chakraborty | Head of Department | Support and Research |

## Departments

1. Tech
2. Strategy and Collaborations
3. Community Outreach and Marketing
4. Policy and Resources
5. Support and Research

The short description of each department on the About page is a draft and needs confirming.

## Verified designations

- Minal Priya: Minister. Ananya Makkar and Anuskha Sinha: Deputy Minister. (Supplied in the roster.)
- The other eight people are Heads of Department. The Ministry stated this directly, so the site shows "Head of Department" on the About page and on their Marketing cards. No other title has been added.

A data check (`npm test`) fails if anyone other than the three Ministers is not a Head of Department, or if the roster changes from the 11 supplied names.

## Missing or to confirm

- **Spelling of "Anuskha Sinha".** The roster spells it "Anuskha". The Calendly link and earlier versions of the site use "Anushka". The site now uses the roster spelling. Please confirm which is correct.
- **"Head of Department" wording.** Please confirm the full title (it is shown in full, not as "HOD"), and whether each department has two heads as the roster suggests.
- **Photographs** for everyone. Initials are shown instead.
- **Department descriptions** (drafts).
- **Tech and the Minister and Deputy Ministers.** The roster places all three in Tech, so the About page still lists them in the Tech section. By request, "Tech" is not shown on their cards (About, Office Hours or the home page). Their designation is shown instead. If they should not be in the Tech section at all, say so.

## Office hours versus team membership

- The team directory (About) lists everyone on the roster.
- The Office Hours page lists only people in `src/data/office-hours.ts`: currently Minal Priya, Anuskha Sinha and Ananya Makkar, each with a Calendly link.
- Being on the roster does not put someone on the Office Hours page, and the other eight people are not shown as having office hours.
- The designation shown on a person's office-hours card comes from their roster entry. A data check confirms the two agree. The department is not shown for the Minister and Deputy Ministers.

## Department Representatives are separate

Department Representatives (the Board of Representatives) are not part of the Ministry team and are not in this roster. They are listed on the Representatives page with department email addresses. Students contact them directly for department matters. They are not part of the office-hours system.

The Foundation Course representatives were removed from the site's pages. They remain only in the 2024–25 archive data.

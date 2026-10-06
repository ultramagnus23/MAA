# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Next.js (App Router, TypeScript) + Tailwind CSS, content authored as structured data files in-repo (`src/data/*.ts`), deployed as a static/ISR site on Vercel. Chosen over WordPress for a from-scratch, easy-to-hand-over codebase with no server/database to maintain, and over a headless CMS to avoid a third-party account dependency for a student org with high year-to-year turnover. Events specifically need non-technical editing (see Capabilities), resolved with a scoped Google Sheet → published CSV pipeline read at build/revalidate time, not a custom admin backend, since MAA already lives in Google Sheets/Forms day to day.

## Users

Ashoka University undergraduates (primarily), landing on the site to answer one of: "what is MAA," "who is my representative," "when are their office hours," "what's happening this week," "where's the academic calendar/policy doc/handbook I need." Secondary users: MAA's own student members (Academic/Policy/Support/FC representatives), who need to add events and eventually hand the whole site to next year's team without touching code.

## Product Purpose

MAA (Ministry of Academic Affairs) is Ashoka University's student-government body for academic affairs, it supports academic societies, represents student academic interests to the Office of Academic Affairs (OAA), and produces/maintains academic resources (policy explainers, handbooks, thesis and academic-integrity guides, faculty/office finders, etc). The site exists so a student can get oriented and find the right resource or person in seconds, without digging through Drive folders, WhatsApp groups, or Instagram. Success = a first-year can answer "who do I talk to about X" and "where's the thing I need" within the site's first two clicks.

## Positioning

Not a marketing site and not a generic "student government" template, it's the front door to MAA's actual working archive (a large, real Drive of policy docs, handbooks, and reports built up by real students since 2024) plus its two live, bookable office-hours channels. The mechanism a template can't fake: every resource, policy figure, and contact on the site traces to a specific document MAA actually produced or a link MAA actually maintains (Calendly, WhatsApp, Drive), nothing is placeholder marketing copy.

## Operating Context

- MAA's real working documents live in a Google Drive folder (mandate docs, general academic policy doc, department handbooks, citation guides, thesis/academic-integrity how-tos, faculty finder & office-locator spreadsheets, historical BOR/FC representative reports, event/fest lists). Extracted locally at `../drive-source/MAA Resources Drive/` for authoring reference, do not commit the raw archive to the web repo; large PDFs stay linked to Drive, not mirrored.
- MAA's current public presence is a Linktree (`linktr.ee/acadaffairs.ministry`) exposing exactly three live Calendly office-hours booking links (Minal Priya, Anushka Sinha, Ananya Makkar), these are the only confirmed-current "who's active right now" signal.
- Department-level academic representation runs through named @ashoka.edu.in role-inbox emails (one per department, e.g. `cs.rep@ashoka.edu.in`) and per-department WhatsApp groups, documented in MAA's "Department WhatsApp Groups + BOR Email IDs" doc.
- MAA's general contact is `academicaffairs.ministry@ashoka.edu.in`.
- A 2024-25 BOR/FC Annual Report names specific past representatives per department, real, but dated; the user decided (2026-09-29) this goes on a clearly-labeled archived/historical page, not presented as the current roster.
- The user rejected using an AI-generated cinematic "scroll-world" video hero (2026-09-29): the homepage must stay calm, static-first, no generated video/flythrough.
- Reference for interaction/section patterns (not visual style): `placecom.ashoka.edu.in`, another Ashoka student-body site (hero + stats strip + numbered "what we do" + about + contact).

## Capabilities and Constraints

- Must not fabricate names, positions, events, dates, links, office hours, policies, contact details, or statistics. Where source material is missing or dated, the site says so structurally (e.g. "archived 2024-25") rather than inventing a current version.
- Events: Academic Representatives need to add events without editing code. Architecture must not hard-code a final answer on "MAA-only events" vs "MAA + other academic events", keep the event schema/category field flexible so that permission boundary can change later without a rebuild.
- Calendar: display as simple scannable cards, not an embedded full calendar app; must link to MAA/university's real calendar if/when the user supplies that link (not yet supplied, do not fabricate one).
- Representatives/office-hours: only the 3 verified current Calendly-linked reps are presented as "current"; the historical department roster is a separate, dated archive page.
- Some source spreadsheets contain PII (alumni emails in the Thesis Repository list) or are explicit work-in-progress stubs (RA-with-PhDs sheet, several Course-Trajectory sheets), these must not be republished verbatim/live on a public page; treat as internal-only or omit.
- Large handbook PDFs (tens to hundreds of MB) stay as links out, never bundled into the deployed site.

## Brand Commitments

- Name: "Ministry of Academic Affairs (MAA)," Ashoka University. No existing logo/visual identity supplied.
- Voice: professional + approachable + student-run, per the user's explicit brief, never corporate-SaaS, never AI-generated-template-feeling, never informal scrapbook/blog either.

## Evidence on Hand

Real content extracted and available for authoring (paths relative to `../drive-source/MAA Resources Drive/`):
- Mandate & governance: `MAA_s Mandate for Academic Socs at AU.docx`, `FC Representatives Mandate.docx`.
- Policy: `MAA General Academic Policy Document 2025-26_.docx` (current), `Old General Policy Docs/2024-25_...docx` (archived), `Official Sports Accom Policy.pdf` (appears to be an unsigned proposal template, do not present as finalized policy without confirmation).
- Guides: `MAA P_F Crisis Guide.docx`, `Academic Integrity How-To Guide_.docx`, `Undergraduate Thesis How-To Guide.docx`, `Citation Resources/` (APA/MLA/Chicago + UWP workshop slides).
- Directories/tools: `MAA's Faculty Finder (updated).xlsx`, `MAA_s Locate@Ashoka 2.0.xlsx`, `Communication Channels/Department Whatsapp Groups + BOR Email IDs.docx`.
- Reports/advocacy: `Reports and Projects/BOR Annual Report 2024-25.docx`, `The Course Caps Report by MAA 24-25.docx`, `MAA_Inclusivity Report.docx`, `Academic Accommodations for Athletes.docx`, `MAA × ACWB Coping with Acads Resources Doc.docx`, `CASH_CADI Guidelines for Academic Societies.docx`.
- Department Handbooks (19 files) and Student Handbooks (3-4 usable-sized files; several 50-460MB PDFs excluded from local mirror, link to Drive originals only).
- Live links: 3 Calendly office-hours URLs (from Linktree), MAA general email, per-department role-inbox emails.

Explicitly absent, do not fabricate: a current MAA leadership/Minister roster; a current department-by-department rep directory; a live MAA/university calendar link; a logo or existing brand palette; any events beyond what MAA supplies going forward (event list ships empty/seeded via the Sheet, not invented).

## Product Principles

1. Traceable over generic: every fact on the site must map to a real source document or link; when the source is dated or incomplete, say so in the UI rather than smoothing it over.
2. Two clicks to the answer: information architecture is judged by whether "who/when/where" questions resolve in two clicks from the homepage.
3. Handover over cleverness: content structures (data files, the events sheet) must be editable by a non-technical rising sophomore next year, not just by whoever built v1.
4. Calm, not decorated: restraint is a feature, no generated hero video, no effects that don't aid comprehension, per explicit user direction.

## Accessibility & Inclusion

No user-specific accessibility requirement was stated beyond the general brief's insistence on strong contrast, readable type, keyboard navigation, and never encoding meaning by color alone, treated as a standard requirement, not optional polish.

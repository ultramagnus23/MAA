# API and integrations

The site has no API routes of its own and no login. Every page is built on the server from data files and, for events, from a Google Sheet.

## Routes

All routes are pages. There are no `/api` endpoints.

| Route | Type |
| --- | --- |
| `/`, `/about`, `/projects`, `/office-hours`, `/resources`, `/handbooks`, `/representatives`, `/representatives/archive`, `/marketing`, `/events/add` | Static |
| `/events` | Static, with events refreshed about every five minutes |
| `/events/[slug]` | Built on request. An unknown address returns a 404 page. |

Redirects (`next.config.ts`): `/calendar` to `/events`, `/transparency` to `/projects`. Both are permanent.

## Authentication

None. Events can be added by anyone with edit access to the Google Sheet. The data files can be changed by anyone who can push to the repository.

## External integrations

| Service | Used for | Details |
| --- | --- | --- |
| Google Sheets (published CSV) | Events | Read with a plain request in `src/lib/events.ts`, cached for 300 seconds. If the request fails or the variable is missing, the site shows no events. |
| Google Docs, Sheets, Slides and Drive | Every resource and handbook | Links only. The site does not call Google. |
| Calendly | Office-hour booking | Links only. |
| WhatsApp | Department groups | Invite links only (`chat.whatsapp.com`). |
| Google Forms | Grievance form | Link only. |
| Linktree | Ministry link page | Link only (footer). |
| Web Share API | Marketing share button | Used in the browser when available, otherwise the link is copied. |

## Events sheet format

CSV with these headings in row one: `title`, `date`, `time`, `location`, `category`, `description`, `link`, `organizer`. Output type in code:

```ts
type MaaEvent = {
  title: string;
  date: string;      // yyyy-mm-dd
  time?: string;
  location?: string;
  category: "MAA" | "Academic Society" | "University";
  description?: string;
  link?: string;
  organizer?: string;
};
```

## Error handling

- Events: a failed request falls back to an empty list and the page shows an empty state.
- Unknown event address: 404 page.
- Search and filter with no matches: a plain message on the page.
- Copying or sharing on the Marketing page: a message says whether it worked.
- Missing links (SG report, Instagram, hero video): the related element is hidden or shows a clear "awaiting" message. No dead links.

## Social and WhatsApp links

- WhatsApp: 21 department invite links and two QR images (see `src/data/whatsapp.ts`).
- Instagram: none supplied. `src/data/marketing.ts` holds empty values.

## New endpoints

None.

## Link status

When links were checked on 17 October 2026, most Google document links answered "sign-in required" to an anonymous request. See [CONTENT_REGISTER.md](CONTENT_REGISTER.md).

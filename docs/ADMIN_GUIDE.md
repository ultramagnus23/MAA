# Admin guide

For the Ministry team members who maintain the website.

There is no admin screen and no login. Content lives in two places:

- Plain files in `src/data/`. You edit a file, commit and push to `main`, and Vercel updates the site.
- A published Google Sheet for events. Anyone with edit access to the sheet can change events with no code.

If you are not comfortable editing code, ask a Tech team member to make the change. Each entry is a small block of text in quotes, so copying an existing block and changing the words is usually enough.

**Rule:** only add things that are real and checked. If you do not have a link, leave it out.

## Projects

File: `src/data/projects.ts`.

Copy an existing block and change: `name`, `summary`, `status` (`"Ongoing"`, `"Planned"` or `"Published"`), `period` (only if the source gives one), `links`, and `source` (the document the information comes from). Do not add a project without a source.

## Monthly transparency reports

File: `src/data/reports.ts`. Add one block per published report, with `period` (for example "September 2026"), `published` (a date such as `"2026-10-05"`), `summary` and `url` (the link to the report). They appear on `/projects#reports`, newest first. A month with no entry is shown as missing. Never add an entry for a report that does not exist.

## SG report in the footer

File: `src/data/footer-links.ts`. Set `sgReportUrl` to the report's link. Until it is set, the footer shows no SG report link.

## Events

Events come from a Google Sheet.

1. Open the Ministry's events sheet. If you do not have it, ask a current member.
2. Add a row. The first row must have these headings: `title`, `date`, `time`, `location`, `category`, `description`, `link`, `organizer`.
3. `date` must look like `2026-10-14`. `category` must be exactly `MAA`, `Academic Society` or `University`. Only `title` and `date` are required.
4. The site checks the sheet about every five minutes. Nothing else needs to be done.

Setting up for the first time: in Google Sheets choose File, Share, Publish to web, pick the events tab, choose CSV, and publish. Copy the link and add it in Vercel (Project Settings, Environment Variables) as `EVENTS_SHEET_CSV_URL`, then redeploy once.

Who can add events: anyone with edit access to the Google Sheet. Share the sheet only with the people who should be allowed to add events, such as the Ministry team and the academic representatives. There is no other permission system.

Each event gets its own page at `/events/<date>-<title>`. Changing the title or date of an event changes its address.

## Office hours

File: `src/data/office-hours.ts`. Only people in this list appear on the Office Hours page and the home page. Being on the team roster does not add someone.

For each person set `name`, `designation`, `department`, `bookingUrl` and `bookingLabel`. The designation must match the team roster. `timings` is optional: add a short line such as "Wednesdays, 4 to 6 pm" only if it is true. If it is left out, the page says the times are shown on the booking page.

To remove someone, delete their block. If the list is empty the pages show "Nobody has scheduled office hours at the moment."

## Team and designations

File: `src/data/team-members.ts`. Each person has a `name`, a `department` (one of the five) and an optional `designation`. Leave `designation` out until it is confirmed. The site then shows "Team member". The About page and the data checks (`npm test`) both read this file.

Team photographs: none have been added yet. When a photo is supplied, ask a Tech member to add an image field for that person. Until then the site shows initials.

## Policies and resources

File: `src/data/resources.ts`. Copy a block and set `title`, `description` (one or two sentences), `category` (`Policy`, `Guides`, `Directories & Tools`, `Advocacy & Reports` or `Communication`), `url` (the Google Drive link) and `fileNote` (for example `Google Doc`). Use the exact title when other pages look the resource up (the home page helper looks up the policy and thesis guide by title).

Google links must be shared so the people who need them can open them. See [CONTENT_REGISTER.md](CONTENT_REGISTER.md) for links that currently ask for a sign-in.

## Handbooks

File: `src/data/handbooks.ts`. Each handbook has a `title`, a `group` (`Department`, `Student` or `Batch`), an optional `year` and a `url`.

## WhatsApp groups and department contacts

- Department emails: `src/data/representatives.ts` (`departmentContacts`).
- Department WhatsApp groups: `src/data/whatsapp.ts` (`departmentWhatsAppGroups`). The `department` must match a name in `departmentContacts` exactly.
- QR-code groups: `qrWhatsAppGroups` in the same file.

Only use invite links that the group admin has confirmed. If a group has no link, leave it out. The page then says "No WhatsApp group listed".

## Marketing page: social links and work

File: `src/data/marketing.ts`.

- `marketingProfiles.niharika.instagramUrl` and `marketingProfiles.tarun.instagramUrl`: paste the full profile address once it is verified. When Niharika's link is set, her whole card becomes a link to it and the Instagram-style pointer opens that profile. While it is empty, the card says the link is awaiting configuration.
- `campaigns`: add real campaigns, event promotions or creative work with `title`, `description`, and optional `url` and `date`. Each one gets Share and Copy link buttons.

## Projector tracker

Not built. No document says what it should track. See [CONTENT_REGISTER.md](CONTENT_REGISTER.md).

## Home page hero video

All hero media is set in `src/data/hero.ts`.

```ts
export const heroConfig = {
  video: [
    { src: "/hero/hero.webm", type: "video/webm" },
    { src: "/hero/hero.mp4", type: "video/mp4" },
  ],
  poster: "/hero/hero-poster.jpg",
};
```

- `video`: the files, best format first. Leave it as `[]` to show only the still image.
- `poster`: the still image. It shows while the video loads and whenever the video does not play. The default is a Ministry team photo.

To add or replace the video: export it in the formats below, put the files in `public/hero/`, update `src/data/hero.ts`, check the home page on a computer and a phone, then commit and push. To go back to the still image, set `video: []`. A new file name is the quickest way to make visitors see a replaced video.

| Item | Recommendation |
| --- | --- |
| Length | 10 to 20 seconds, made to loop smoothly |
| Size | 1920 x 1080 at most (1280 x 720 is fine) |
| File size | Under 4 MB each, 8 MB at the very most |
| Formats | WebM (VP9) and MP4 (H.264) |
| Audio | None. The video always plays muted |
| Poster | JPEG, 1920 x 1080, under 200 KB, a clear frame from the video |
| Content | Footage the Ministry owns or has permission to use. Calm shots. Nothing that flashes. Keep key detail away from the edges |

Example commands with ffmpeg, for a file called `input.mp4`:

```bash
ffmpeg -i input.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libx264 -crf 28 -preset slow -movflags +faststart public/hero/hero.mp4
ffmpeg -i input.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libvpx-vp9 -crf 36 -b:v 0 public/hero/hero.webm
ffmpeg -i input.mp4 -ss 00:00:02 -vframes 1 -vf "scale=1920:-2" -q:v 4 public/hero/hero-poster.jpg
```

Visitors see the still image when no video is set, when the file cannot load, when "reduce motion" or data saver is on, and while the video is loading.

## After any change

Run these before pushing: `npm test`, `npm run lint`, `npm run build`.

# Testing

## Automated checks

Run on 28 October 2026 on the latest code (earlier run: 17 October 2026).

| Check | Command | Result |
| --- | --- | --- |
| Types | `npx tsc --noEmit` | Passed |
| Lint | `npx eslint .` | Passed, no warnings |
| Data tests | `npm test` (Vitest) | 13 tests passed, 1 file |
| Production build | `npm run build` | Passed, 14 pages generated |

The data tests are in `tests/data.test.ts`. They check: the roster has exactly the 11 supplied people once each; every person is in one of the five departments; the Minister and Deputy Ministers have those titles and everyone else is a Head of Department; office-hour people are on the roster with matching details and are fewer than the whole team; every WhatsApp link is an invite link and matches a real department with no duplicates; resource and handbook links point to Google or this site; resource titles are unique; every project names a source; the menu has Projects and no Transparency or Calendar; event addresses are made correctly.

There are no automated tests for page appearance or browser behaviour.

## Checks done by hand in the built-in browser

| Check | Result |
| --- | --- |
| Home page at desktop and phone width | Looked correct |
| Events calendar: events appear on their days, selecting a day lists them, each event opens its own page, an unknown address gives 404 | Passed, using three temporary test events that were removed afterwards |
| `/calendar` and `/transparency` redirects | Redirect (308) to `/events` and `/projects` |
| No sideways scrolling at 375px on Home, About, Projects, Events, Office Hours, Representatives, Resources, Handbooks | Passed |
| Marketing page at phone width | Looked correct, Instagram label visible on the card |
| Niharika's pointer effect, using simulated pointer events | Icon shows for a mouse, hides when the pointer leaves, does not show for touch, never receives clicks, native pointer hidden only inside the card. Click without a link shows the "not configured" message |
| Hero with a missing video file | Poster stays, nothing broken shows, no pause button |
| Link check | See below |

## Link check (17 October 2026)

93 web addresses from the data files and pages were requested without signing in.

- All 21 WhatsApp invite links and all 3 Calendly links answered normally.
- Linktree answered normally.
- About 56 Google Docs, Sheets and Drive links answered "sign-in required". These are probably restricted to Ashoka accounts. If they are meant to be open to anyone with the link, change the sharing. See [CONTENT_REGISTER.md](CONTENT_REGISTER.md).
- The grievance form also asked for sign-in.
- A few other addresses in the list were partial strings found in the code, not real links.

The check cannot tell whether a restricted document opens for a signed-in Ashoka student.

## Manual QA checklist

Use before each release.

Responsive:
- [ ] Every page at 375px, 768px and a wide screen: no sideways scrolling, nothing cut off
- [ ] Menu button works below 1280px and the full menu shows above it

Accessibility:
- [ ] Tab through each page: every control is reachable and has a visible focus ring
- [ ] Skip link works
- [ ] Turn on "reduce motion" in the device settings: no animation, no pointer effect, no video
- [ ] Screen reader read of the home page helper, the calendar and the Marketing cards

Office hours and events:
- [ ] Only the people in `office-hours.ts` are listed, with the right designation
- [ ] Each booking button opens the right Calendly page
- [ ] Add a row to the events sheet and see it appear within about five minutes, on the calendar and as a page
- [ ] Filters change the list and the calendar

Content:
- [ ] Re-run the link check and note any link that does not open for a signed-in Ashoka account
- [ ] About lists all 11 people once
- [ ] No full team directory or calendar on any other page

Marketing:
- [ ] Mouse over Niharika's card: icon follows the pointer, normal pointer elsewhere
- [ ] On a phone: icon and label visible, no pointer effect
- [ ] Share and Copy link give a message

## Not tested

- Real touch devices, Safari and Firefox, and low-powered phones
- Screen readers
- The "reduce motion" setting in a real browser (the code was written to respect it, but it was only reviewed, not run)
- The phone share menu (Web Share API)
- A real hero video: none exists yet
- The live Vercel deployment and the connected events sheet
- Whether restricted Google documents open for signed-in Ashoka students

## Known issues

- Many document links ask for a sign-in when opened without an account.
- `Anuskha` and `Anushka` spellings differ between the roster and older sources.

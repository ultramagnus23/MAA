# Setup and deployment

## Prerequisites

- Node.js 20 or newer (the project was built and tested with Node 22)
- npm
- Git

## Install and run

```bash
git clone https://github.com/ultramagnus23/MAA.git
cd MAA
npm install
npm run dev
```

Open http://localhost:3000.

## Environment setup

The site runs with no environment variables. To show real events, create a file called `.env.local` in the project folder:

```
EVENTS_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/e/.../pub?output=csv
```

`.env.local` is ignored by Git. Never commit it. There are no secrets in the project.

## Database and migrations

None. There is no database.

## Checks before pushing

```bash
npx tsc --noEmit   # types
npm run lint       # code style
npm test           # data checks
npm run build      # production build
```

## Production deployment

The live site is https://maa-silk.vercel.app/. It is hosted on Vercel and appears to deploy from the `main` branch of the repository, so pushing to `main` updates it. This was not confirmed in the Vercel dashboard.

Vercel settings:

- Framework: Next.js (detected automatically). No `vercel.json` is needed.
- Build command: `npm run build`. Output: default.
- Environment variable: `EVENTS_SHEET_CSV_URL` (optional) under Project Settings, Environment Variables, for Production and Preview.
- After changing an environment variable, redeploy once.

No deployment was done as part of this round. The live site has not been changed by this work.

## Troubleshooting

| Problem | Likely cause and fix |
| --- | --- |
| No events on the site | `EVENTS_SHEET_CSV_URL` is missing, wrong, or the sheet is not published as CSV. Check the link opens a CSV file. |
| An event is missing | The row has no `title` or no `date`, or the date is not `yyyy-mm-dd`. The site refreshes every five minutes. |
| Changed a data file but the site looks the same | The change is not pushed to `main`, or the deployment has not finished. |
| `npm run dev` shows odd errors after moving files | Stop the server, delete the `.next` folder, start again. |
| A document link asks visitors to sign in | The Google file's sharing is restricted. See the content register. |
| Video does not play | See the admin guide. The still image shows by design when the file is missing, motion is reduced, or data saver is on. |

## Rollback

In Vercel, open Deployments, find the last good deployment, and choose "Promote to Production" (or "Redeploy"). To undo in the repository, use `git revert <commit>` and push. Do not rewrite history on `main`.

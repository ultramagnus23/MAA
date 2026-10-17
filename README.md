# MAA website

The website of the Ministry of Academic Affairs (MAA) at Ashoka University.

- Live website: https://maa-silk.vercel.app/
- Repository: https://github.com/ultramagnus23/MAA

## What is on the site

| Page | Address | What it does |
| --- | --- | --- |
| Home | `/` | Hero with optional background video, a topic helper, current projects, office hours, upcoming events, resources |
| About | `/about` | What the Ministry is, how things are verified, the five departments and the full team (11 people) |
| Projects | `/projects` | Ongoing, planned and completed projects, and the monthly transparency reports |
| Events | `/events` | The only events calendar, with filters and a page for each event |
| Office Hours | `/office-hours` | Who has bookable office hours, and how to email or WhatsApp the Ministry |
| Resources | `/resources` | Searchable, filterable list of policies, guides, directories and reports |
| Handbooks | `/handbooks` | Department, student and batch handbooks |
| Representatives | `/representatives` | Department Representative emails and WhatsApp groups for 21 departments |
| Marketing | `/marketing` | The Community Outreach and Marketing department (the one expressive page) |

`/calendar` redirects to `/events`, and `/transparency` redirects to `/projects`.

## Technology

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Vitest for data checks
- Hosted on Vercel. There is no database and no login.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the site for development |
| `npm run build` | Make the production build |
| `npm run start` | Run the production build |
| `npm run lint` | Check the code style |
| `npm test` | Run the data checks |
| `npx tsc --noEmit` | Check the types |

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `EVENTS_SHEET_CSV_URL` | No | Link to the published Google Sheet that holds the events. Without it the Events page shows an empty state. |

No other variables are needed, and no secrets are stored in the repository.

## Where content lives

Almost all content is in plain files under `src/data/`. See [docs/ADMIN_GUIDE.md](docs/ADMIN_GUIDE.md) for how to update each one.

## Documentation

- [Project overview](docs/PROJECT_OVERVIEW.md)
- [Information architecture](docs/INFORMATION_ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Features](docs/FEATURES.md)
- [Team and departments](docs/TEAM_AND_DEPARTMENTS.md)
- [Data model](docs/DATA_MODEL.md)
- [API and integrations](docs/API_AND_INTEGRATIONS.md)
- [Admin guide](docs/ADMIN_GUIDE.md)
- [Setup and deployment](docs/SETUP_AND_DEPLOYMENT.md)
- [Testing](docs/TESTING.md)
- [Content register: what still needs to be supplied](docs/CONTENT_REGISTER.md)
- [Changelog](docs/CHANGELOG.md)
- [Implementation status](docs/IMPLEMENTATION_STATUS.md)

`DESIGN.md` and `PRODUCT.md` in the project root are older notes from the first version of the site. The `docs/` folder is the current reference.

## Rule for content

Do not add a person, event, date, project or link that cannot be checked. Every item on the site should trace back to something the Ministry actually produced or confirmed.

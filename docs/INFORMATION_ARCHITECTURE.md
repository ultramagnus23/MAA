# Information architecture

## Sitemap

```
/                          Home
/about                     About, departments and the full team
/projects                  Projects and monthly transparency reports
/events                    Events calendar (the only calendar)
  /events/[slug]           One event
  /events/add              How representatives add an event
/office-hours              Office hours and contacting the Ministry
/resources                 Policies and resources
/handbooks                 Handbooks
/representatives           Department Representatives and WhatsApp groups
  /representatives/archive 2024-25 archive
/marketing                 Community Outreach and Marketing (not in the menu; linked from About)
```

Redirects: `/calendar` to `/events`, `/transparency` to `/projects`.

## Navigation

Main menu, in order: Home, About, Projects, Events, Office Hours, Resources, Handbooks, Representatives.

The Marketing page is not in the menu. It is reached by a link in the Community Outreach and Marketing section of the team directory on About.

- Projects replaces Transparency. The monthly reports are on the Projects page (`/projects#reports`).
- There is no Calendar item. The calendar is on Events.
- The full menu shows on screens 1280px wide and up. Below that, a Menu button opens a list.

## Where things belong

| Content | Lives on | Appears elsewhere as |
| --- | --- | --- |
| Full team directory | About | A link on the home page and a short link on Marketing |
| Events calendar | Events | Up to three upcoming events on the home page, each linking to its page |
| Projects | Projects | Up to three ongoing or planned projects on the home page |
| Monthly reports | Projects | Nothing else |
| SG report | Footer, when its link is set | Nothing else |
| Office hours | Office Hours | The same people shown on the home page, and a link beside their name on About |
| Policies and guides | Resources | Six featured items on the home page, and some in the footer |
| Handbooks | Handbooks | A link on Resources, the footer and the home page helper |
| Department emails and WhatsApp groups | Representatives | A link on About and Office Hours |
| Marketing team profiles | Marketing (linked from About) | Their names also appear in the About directory |

## Two kinds of question

- **General Ministry matters** go to the Ministry: Office Hours (book, email or WhatsApp).
- **Department matters** go to the Department Representative: Representatives.

This split is repeated on Office Hours, Representatives, About and the home page helper, so students see it wherever they land.

## Shared components

`src/components/`: `Header`, `Footer`, `ui` (page header, section heading, card, tag), `Avatar`, `HelpFinder`, `HeroVideo`, `EventsExplorer`, `DepartmentDirectory`, `ResourcesArchive`, `HandbooksDirectory`, `TeamGallery`, `MarketingFx` (marketing only).

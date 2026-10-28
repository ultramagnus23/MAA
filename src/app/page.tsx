import Image from "next/image";
import Link from "next/link";
import { SectionHeading, Tag } from "@/components/ui";
import HeroVideo from "@/components/HeroVideo";
import HelpFinder, { type HelpTopic } from "@/components/HelpFinder";
import { officeHourHolders } from "@/data/office-hours";
import { projects } from "@/data/projects";
import { resources } from "@/data/resources";
import { site } from "@/data/site";
import { getEvents, splitUpcomingPast, eventSlug } from "@/lib/events";

export default async function Home() {
  const { events } = await getEvents();
  const { upcoming } = splitUpcomingPast(events);
  const featuredResources = resources.slice(0, 6);
  const currentProjects = projects.filter((p) => p.status !== "Published").slice(0, 3);

  const link = (title: string) => resources.find((r) => r.title === title)?.url ?? "/resources";
  const helpTopics: HelpTopic[] = [
    {
      id: "department",
      label: "A department matter",
      answer: "Questions about your own department go straight to your Department Representative, not through the Ministry.",
      action: "Find your Department Representative",
      href: "/representatives",
    },
    {
      id: "policy",
      label: "Academic policy",
      answer: "The Academic Policy Document covers add/drop, pass/fail, audit, incompletes, retakes and more.",
      action: "Open the policy document",
      href: link("MAA General Academic Policy Document (2025–26)"),
      external: true,
    },
    {
      id: "thesis",
      label: "My thesis",
      answer: "The Undergraduate Thesis How-To Guide explains the thesis process step by step.",
      action: "Open the thesis guide",
      href: link("Undergraduate Thesis How-To Guide"),
      external: true,
    },
    {
      id: "else",
      label: "Something else",
      answer: "For any other matter, speak to the Ministry through an office hour, by email or on WhatsApp.",
      action: "See how to reach the Ministry",
      href: "/office-hours",
    },
  ];

  const quickLinks = [
    { q: "Who do I contact for my department?", href: "/representatives" },
    { q: "When are office hours held?", href: "/office-hours" },
    { q: "What is happening this week?", href: "/events" },
    { q: "Where can I find the policy document?", href: "/resources" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate flex min-h-[28rem] items-center overflow-hidden border-b border-line sm:min-h-[34rem] lg:min-h-[calc(100vh-5.5rem)] lg:max-h-[52rem]">
        <HeroVideo />
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="" width={72} height={72} priority className="h-16 w-16 sm:h-[72px] sm:w-[72px]" />
            <p className="text-sm font-medium text-white/90 sm:text-base">{site.university}</p>
          </div>
          <h1 className="mt-6 max-w-3xl font-bold leading-[1.08] text-white">
            Ministry of Academic Affairs
          </h1>
          <p className="mt-5 text-xl font-medium text-white sm:text-2xl">Your academic voice at Ashoka.</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            We are the student body that represents every academic discipline
            at Ashoka. We take student concerns to the Office of Academic
            Affairs, work with academic societies, and keep the
            university&apos;s academic policies, handbooks and guides in one
            place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/office-hours"
              className="rounded bg-white px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-paper-dim"
            >
              Reach the Ministry →
            </Link>
            <Link
              href="/projects"
              className="rounded border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              See our projects
            </Link>
          </div>
        </div>
      </section>

      {/* Help finder */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
          <HelpFinder topics={helpTopics} />
        </div>
      </section>

      {/* Quick links */}
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.q}
                href={item.href}
                className="group flex items-center justify-between rounded border border-line bg-white px-4 py-4 text-sm transition-colors hover:border-accent"
              >
                <span className="font-medium text-ink">{item.q}</span>
                <span aria-hidden className="text-accent transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current projects */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="What we are working on" title="Current projects" />
          <Link href="/projects" className="text-sm font-medium text-accent hover:underline">
            All projects and reports →
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {currentProjects.map((p) => (
            <li key={p.name} className="rounded-lg border border-line bg-white p-5">
              <p className="text-sm font-medium text-accent">{p.status}</p>
              <h3 className="mt-1 text-ink">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Office hours */}
      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Talk to someone"
              title="Current office hours"
              description="These members of the Ministry have office hours that can be booked online."
            />
            <Link href="/office-hours" className="text-sm font-medium text-accent hover:underline">
              Office hours and contact →
            </Link>
          </div>
          {officeHourHolders.length === 0 ? (
            <p className="mt-8 rounded-lg border border-line-strong bg-white p-5 text-sm text-ink-soft">
              Nobody has scheduled office hours at the moment.
            </p>
          ) : (
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {officeHourHolders.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-col justify-between rounded-lg border border-line border-t-4 border-t-accent bg-white p-5"
                >
                  <div>
                    <p className="text-lg font-semibold text-ink">{p.name}</p>
                    <p className="text-sm font-semibold text-accent">{p.designation}</p>
                    {p.department && <p className="mt-1 text-sm text-ink-soft">{p.department}</p>}
                  </div>
                  <a
                    href={p.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium text-accent hover:underline"
                  >
                    {p.bookingLabel} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Events preview */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="What is on" title="Upcoming events" />
          <Link href="/events" className="text-sm font-medium text-accent hover:underline">
            Events calendar →
          </Link>
        </div>
        <div className="mt-8">
          {upcoming.length === 0 ? (
            <div className="rounded-lg border border-line-strong bg-white p-5 text-sm text-ink-soft">
              There are no upcoming events at present. Please check the{" "}
              <Link href="/events" className="font-medium text-accent hover:underline">
                events page
              </Link>{" "}
              for updates.
            </div>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.slice(0, 3).map((event) => (
                <li key={eventSlug(event)}>
                  <Link
                    href={`/events/${eventSlug(event)}`}
                    className="block h-full rounded-lg border border-line bg-white p-5 transition-colors hover:border-accent"
                  >
                    <Tag>{event.category}</Tag>
                    <p className="mt-3 text-lg font-semibold text-ink">{event.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                      {event.time ? ` · ${event.time}` : ""}
                      {event.location ? ` · ${event.location}` : ""}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Everything in one place"
              title="Policies and resources"
              description="Policy documents, guides and directories maintained by the Ministry."
            />
            <Link href="/resources" className="text-sm font-medium text-accent hover:underline">
              All resources →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-line bg-white p-5 transition-colors hover:border-accent"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-semibold text-ink">{resource.title}</p>
                  {resource.fileNote && <Tag>{resource.fileNote}</Tag>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team route */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/about#team"
            className="group rounded-lg border border-line bg-white p-6 transition-colors hover:border-accent"
          >
            <p className="text-sm font-medium text-accent">The team</p>
            <h3 className="mt-1 text-ink">Meet the Ministry</h3>
            <p className="mt-2 text-sm text-ink-soft">Our five departments and everyone on the team.</p>
            <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
              See the team →
            </span>
          </Link>
          <Link
            href="/representatives"
            className="group rounded-lg border border-line bg-white p-6 transition-colors hover:border-accent"
          >
            <p className="text-sm font-medium text-accent">Departments</p>
            <h3 className="mt-1 text-ink">Department Representatives</h3>
            <p className="mt-2 text-sm text-ink-soft">Contact details and a WhatsApp group for every department.</p>
            <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
              Find your department →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

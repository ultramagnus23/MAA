import Link from "next/link";
import { Card, Eyebrow, SectionHeading, Tag } from "@/components/ui";
import { currentReps } from "@/data/representatives";
import { resources } from "@/data/resources";
import { site } from "@/data/site";
import { getEvents, splitUpcomingPast } from "@/lib/events";

export default async function Home() {
  const { events } = await getEvents();
  const { upcoming } = splitUpcomingPast(events);
  const featuredResources = resources.slice(0, 6);

  const quickQuestions = [
    { q: "Who's my representative?", href: "/representatives" },
    { q: "When are office hours?", href: "/representatives#office-hours" },
    { q: "What's happening this week?", href: "/events" },
    { q: "Where's the policy document?", href: "/resources" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Eyebrow>{site.university}</Eyebrow>
          <h1 className="font-serif-heading mt-3 max-w-3xl text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            Ministry of Academic Affairs
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            MAA is Ashoka&apos;s student body for everything academic — your
            department&apos;s voice with the university, and the place to find
            policies, handbooks, and help when coursework gets complicated.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/representatives"
              className="rounded bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Find your representative
            </Link>
            <Link
              href="/resources"
              className="rounded border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Browse resources
            </Link>
          </div>
        </div>
      </section>

      {/* Quick questions */}
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickQuestions.map((item) => (
              <Link
                key={item.q}
                href={item.href}
                className="group flex items-center justify-between rounded border border-line bg-paper px-4 py-4 text-sm transition-colors hover:border-accent"
              >
                <span className="text-ink">{item.q}</span>
                <span
                  aria-hidden
                  className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Office hours */}
      <section id="office-hours" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Talk to someone"
          title="Current office hours"
          description="Three MAA representatives currently hold bookable office hours. Pick a slot directly — no email back-and-forth."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {currentReps.map((rep) => (
            <Card key={rep.name} className="flex flex-col justify-between">
              <div>
                <p className="font-serif-heading text-lg text-ink">{rep.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{rep.role}</p>
              </div>
              <a
                href={rep.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {rep.bookingLabel} →
              </a>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-faint">
          Looking for your department&apos;s representative instead?{" "}
          <Link href="/representatives" className="underline hover:text-accent">
            See department contacts
          </Link>
          .
        </p>
      </section>

      {/* Events */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="What's on" title="Upcoming events" />
            <Link href="/events" className="text-sm font-medium text-accent hover:underline">
              View all events →
            </Link>
          </div>
          <div className="mt-8">
            {upcoming.length === 0 ? (
              <Card className="text-sm text-ink-soft">
                Nothing on the calendar right now.{" "}
                <Link href="/events" className="text-accent hover:underline">
                  Check the events page
                </Link>{" "}
                for updates, or reach out if you&apos;re running something MAA
                should list.
              </Card>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.slice(0, 3).map((event) => (
                  <Card key={`${event.title}-${event.date}`}>
                    <Tag>{event.category}</Tag>
                    <p className="font-serif-heading mt-3 text-lg text-ink">{event.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {new Date(event.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })}
                      {event.time ? ` · ${event.time}` : ""}
                      {event.location ? ` · ${event.location}` : ""}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Everything in one place"
            title="Resources & quick links"
            description="Policy documents, guides, and directories MAA actually maintains."
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
              className="group block rounded border border-line bg-paper p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-serif-heading text-base text-ink">{resource.title}</p>
                {resource.fileNote && <Tag>{resource.fileNote}</Tag>}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeading
            eyebrow="Still stuck?"
            title="I have an academic issue — who do I talk to?"
            description="Start with your department's representative for course-level questions. For anything MAA handles directly — policy, thesis, academic integrity, general advocacy — write to us."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/representatives"
              className="rounded border border-line-strong px-5 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            >
              Find your department contact
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent"
            >
              Email {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

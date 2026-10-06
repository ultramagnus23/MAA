import Image from "next/image";
import Link from "next/link";
import { Card, Eyebrow, SectionHeading, Tag } from "@/components/ui";
import { currentReps, departmentContacts } from "@/data/representatives";
import { resources } from "@/data/resources";
import { site } from "@/data/site";
import { getEvents, splitUpcomingPast } from "@/lib/events";

export default async function Home() {
  const { events } = await getEvents();
  const { upcoming } = splitUpcomingPast(events);
  const featuredResources = resources.slice(0, 6);

  const quickQuestions = [
    { q: "Who is my representative?", href: "/representatives" },
    { q: "When are office hours held?", href: "/representatives#office-hours" },
    { q: "What is happening this week?", href: "/events" },
    { q: "Where can I find the policy document?", href: "/resources" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow>{site.university}</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.1] text-ink sm:text-6xl">
              Ministry of Academic Affairs
            </h1>
            <p className="mt-6 text-xl text-ink">Your academic voice at Ashoka.</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              The Ministry of Academic Affairs is the student body that
              represents every academic discipline at Ashoka. We bring student
              concerns to the Office of Academic Affairs, work with academic
              societies, and keep the university&apos;s academic policies,
              handbooks and guides in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/representatives"
                className="rounded bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
              >
                Find your representative →
              </Link>
              <Link
                href="/resources"
                className="rounded border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Browse resources
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-paper-dim p-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={44} height={44} className="h-11 w-11" />
              <p className="text-base font-semibold text-ink">Meet a representative</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Representatives hold regular office hours. Choose a time that
              suits you and book it directly.
            </p>
            <div className="mt-5 space-y-3">
              {currentReps.map((rep) => (
                <a
                  key={rep.name}
                  href={rep.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded border border-line bg-white px-4 py-3 transition-colors hover:border-accent"
                >
                  <span>
                    <span className="block font-medium text-ink">{rep.name}</span>
                    <span className="block text-sm text-ink-soft">{rep.role}</span>
                  </span>
                  <span className="text-sm font-medium text-accent">Book a time →</span>
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
              <span className="text-ink-soft">Department contacts</span>
              <Link href="/representatives" className="font-medium text-accent hover:underline">
                View all {departmentContacts.length} →
              </Link>
            </div>
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
      <section
        id="office-hours"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8"
      >
        <SectionHeading
          eyebrow="Talk to someone"
          title="Current office hours"
          description="Three representatives currently hold office hours that can be booked online."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {currentReps.map((rep) => (
            <Card key={rep.name} className="flex flex-col justify-between">
              <div>
                <p className="text-lg text-ink">{rep.name}</p>
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
          Looking for your department&apos;s representative?{" "}
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
            <Link
              href="/events"
              className="text-sm font-medium text-accent hover:underline"
            >
              View all events →
            </Link>
          </div>
          <div className="mt-8">
            {upcoming.length === 0 ? (
              <Card className="text-sm text-ink-soft">
                There are no upcoming events at present.{" "}
                <Link href="/events" className="text-accent hover:underline">
                  Check the events page
                </Link>{" "}
                for updates, or write to us if you are organising an event that should be listed.
              </Card>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.slice(0, 3).map((event) => (
                  <Card key={`${event.title}-${event.date}`}>
                    <Tag>{event.category}</Tag>
                    <p className="mt-3 text-lg text-ink">{event.title}</p>
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
            description="Policy documents, guides and directories maintained by the Ministry."
          />
          <Link
            href="/resources"
            className="text-sm font-medium text-accent hover:underline"
          >
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
                <p className="text-base text-ink">{resource.title}</p>
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
            eyebrow="Need assistance?"
            title="Whom should I approach with an academic concern?"
            description="For questions about a particular course, please begin with your department's representative. For matters handled by the Ministry directly, such as policy, thesis guidance and academic integrity, write to us."
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
              className="rounded bg-accent px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent-dim"
            >
              Email {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

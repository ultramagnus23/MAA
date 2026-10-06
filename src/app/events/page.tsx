import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Tag } from "@/components/ui";
import { getEvents, splitUpcomingPast } from "@/lib/events";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past academic events, council meetings, society mixers, and open advising sessions at Ashoka University.",
};

function EventRow({
  event,
}: {
  event: Awaited<ReturnType<typeof getEvents>>["events"][number];
}) {
  const d = new Date(event.date);
  const day = d.getDate();
  const month = d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase();
  const weekday = d.toLocaleDateString("en-IN", { weekday: "short" });

  return (
    <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between transition-all hover:border-accent">
      <div className="flex items-start gap-5">
        {/* Large Date Visual Anchor */}
        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xs border border-line bg-paper-dim/60 text-center">
          <span className="font-mono-tag text-[10px] font-medium text-accent uppercase">
            {month}
          </span>
          <span className="font-serif-heading text-2xl font-light text-ink">
            {day}
          </span>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Tag variant="accent">{event.category}</Tag>
            {event.organizer && (
              <span className="font-mono-tag text-xs text-ink-faint">
                by {event.organizer}
              </span>
            )}
            <span className="font-mono-tag text-xs text-ink-faint">
              {weekday}
            </span>
          </div>

          <h3 className="font-serif-heading mt-2 text-xl font-medium text-ink">
            {event.title}
          </h3>

          {event.description && (
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-soft">
              {event.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono-tag text-ink-faint">
            {event.time && <span>TIME: {event.time}</span>}
            {event.location && <span>LOCATION: {event.location}</span>}
          </div>
        </div>
      </div>

      {event.link && (
        <div className="shrink-0 pt-2 sm:pt-0 sm:text-right">
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-xs border border-line-strong bg-paper px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <span>Details / Form</span>
            <span>↗</span>
          </a>
        </div>
      )}
    </Card>
  );
}

export default async function EventsPage() {
  const { events } = await getEvents();
  const { upcoming, past } = splitUpcomingPast(events);

  return (
    <div className="overflow-hidden">
      <PageHeader
        number="04"
        eyebrow="Campus Calendar & Agenda"
        title="Academic Events"
        italicTitle="Townhalls, mixers & forums."
        description="Official MAA events, society collaborations, and university-wide academic discussions kept current by student representatives."
      />

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            number="01"
            eyebrow="Upcoming"
            title="Scheduled Sessions"
          />
          <Link
            href="/events/add"
            className="font-mono-tag text-xs text-accent hover:underline"
          >
            + Rep Guide: Add Event via Google Sheet →
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          {upcoming.length === 0 ? (
            <div className="rounded-xs border border-line bg-paper-dim/40 p-8 sm:p-10">
              <span className="font-mono-tag text-xs text-accent uppercase tracking-wider">
                Current Cycle
              </span>
              <h3 className="font-serif-heading mt-2 text-2xl font-normal text-ink">
                No public events scheduled this week
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft max-w-xl">
                Events are synchronized directly from MAA&apos;s active Google
                Sheet. Running an academic event, study session, or society panel?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-accent underline"
                >
                  Send us the details
                </a>{" "}
                or contact your department representative to feature it here.
              </p>
            </div>
          ) : (
            upcoming.map((event) => (
              <EventRow key={`${event.title}-${event.date}`} event={event} />
            ))
          )}
        </div>

        {past.length > 0 && (
          <div className="mt-16 border-t border-line pt-12">
            <SectionHeading
              number="02"
              eyebrow="Historical Archive"
              title="Concluded Events"
            />
            <div className="mt-6 space-y-4 opacity-75">
              {past.map((event) => (
                <EventRow key={`${event.title}-${event.date}`} event={event} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

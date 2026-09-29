import type { Metadata } from "next";
import { PageHeader, Card, SectionHeading, Tag } from "@/components/ui";
import { getEvents, splitUpcomingPast } from "@/lib/events";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Events" };

function EventRow({
  event,
}: {
  event: Awaited<ReturnType<typeof getEvents>>["events"][number];
}) {
  const d = new Date(event.date);
  return (
    <Card className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{event.category}</Tag>
          {event.organizer && (
            <span className="text-xs text-ink-faint">by {event.organizer}</span>
          )}
        </div>
        <p className="font-serif-heading mt-2 text-lg text-ink">{event.title}</p>
        {event.description && (
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft">
            {event.description}
          </p>
        )}
      </div>
      <div className="shrink-0 text-sm text-ink-soft sm:text-right">
        <p className="font-medium text-ink">
          {d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}
        </p>
        {event.time && <p>{event.time}</p>}
        {event.location && <p>{event.location}</p>}
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-accent hover:underline"
          >
            Details →
          </a>
        )}
      </div>
    </Card>
  );
}

export default async function EventsPage() {
  const { events } = await getEvents();
  const { upcoming, past } = splitUpcomingPast(events);

  return (
    <div>
      <PageHeader
        eyebrow="What's on"
        title="Events"
        description="MAA events and other academic events MAA is actively promoting — kept current by MAA's Academic Representatives."
      />

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <SectionHeading eyebrow="Coming up" title="Upcoming" />
        <div className="mt-6 space-y-3">
          {upcoming.length === 0 ? (
            <Card className="text-sm text-ink-soft">
              Nothing scheduled right now. Running something MAA should list
              here?{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                Send us the details
              </a>
              .
            </Card>
          ) : (
            upcoming.map((event) => (
              <EventRow key={`${event.title}-${event.date}`} event={event} />
            ))
          )}
        </div>

        {past.length > 0 && (
          <div className="mt-14">
            <SectionHeading eyebrow="Already happened" title="Past events" />
            <div className="mt-6 space-y-3 opacity-80">
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

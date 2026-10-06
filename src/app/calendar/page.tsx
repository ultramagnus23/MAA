import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Tag } from "@/components/ui";
import { getEvents, splitUpcomingPast } from "@/lib/events";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Calendar" };

export default async function CalendarPage() {
  const { events } = await getEvents();
  const { upcoming } = splitUpcomingPast(events);

  return (
    <div>
      <PageHeader
        eyebrow="Plan ahead"
        title="Calendar"
        description="A university-wide academic calendar has not yet been shared with us. In the meantime, all upcoming events known to the Ministry are listed below."
       
      />

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <SectionHeading eyebrow="Upcoming" title="Upcoming events" />
        <div className="mt-6 space-y-3">
          {upcoming.length === 0 ? (
            <Card className="text-sm text-ink-soft">
              No events are scheduled at present. Please see{" "}
              <Link href="/events" className="text-accent hover:underline">
                Events
              </Link>{" "}
              for updates.
            </Card>
          ) : (
            upcoming.map((event) => (
              <Card key={`${event.title}-${event.date}`} className="flex items-center justify-between gap-4">
                <div>
                  <Tag >{event.category}</Tag>
                  <p className="mt-2 text-base text-ink">{event.title}</p>
                </div>
                <div className="shrink-0 text-right text-sm text-ink-soft">
                  <p className="font-medium text-ink">
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                  {event.location && <p>{event.location}</p>}
                </div>
              </Card>
            ))
          )}
        </div>

        <Card className="mt-10">
          <p className="text-sm text-ink-soft">
            If you have the official Ashoka academic calendar, please send it to{" "}
            <a href={`mailto:${site.email}`} className="text-accent hover:underline">
              {site.email}
            </a>{" "}
            and we will add it to this page.
          </p>
        </Card>
      </section>
    </div>
  );
}

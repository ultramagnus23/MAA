import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Tag, Eyebrow } from "@/components/ui";
import { getEvents, splitUpcomingPast } from "@/lib/events";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Ashoka University academic calendar milestones, events, and scheduling dates.",
};

export default async function CalendarPage() {
  const { events } = await getEvents();
  const { upcoming } = splitUpcomingPast(events);

  return (
    <div className="overflow-hidden">
      <PageHeader
        number="05"
        eyebrow="Chronological View"
        title="Academic Calendar"
        italicTitle="Semester schedule."
        description="A clear, chronological index of all scheduled academic townhalls, add/drop milestones, and council meetings."
      />

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeading
          number="01"
          eyebrow="Schedule"
          title="Upcoming Calendar Entries"
        />

        <div className="mt-8 space-y-3.5">
          {upcoming.length === 0 ? (
            <div className="rounded-xs border border-line bg-paper p-8 sm:p-10">
              <span className="font-mono-tag text-xs text-accent uppercase tracking-wider">
                Status
              </span>
              <h3 className="font-serif-heading mt-2 text-xl text-ink font-normal">
                Calendar Entries Synchronizing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                All scheduled events from the MAA events sheet will populate
                here automatically. For general event updates and details, visit{" "}
                <Link href="/events" className="text-accent underline font-medium">
                  Events
                </Link>
                .
              </p>
            </div>
          ) : (
            upcoming.map((event) => {
              const d = new Date(event.date);
              const day = d.getDate();
              const month = d.toLocaleDateString("en-IN", {
                month: "short",
              }).toUpperCase();

              return (
                <Card
                  key={`${event.title}-${event.date}`}
                  className="flex items-center justify-between gap-4 p-5 hover:border-accent"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xs border border-line bg-paper-dim/60 text-center">
                      <span className="font-mono-tag text-[9px] font-medium text-accent">
                        {month}
                      </span>
                      <span className="font-serif-heading text-lg font-light text-ink">
                        {day}
                      </span>
                    </div>

                    <div>
                      <Tag variant="accent">{event.category}</Tag>
                      <h4 className="font-serif-heading mt-1 text-base text-ink font-medium">
                        {event.title}
                      </h4>
                    </div>
                  </div>

                  <div className="shrink-0 text-right text-xs font-mono-tag text-ink-faint">
                    {event.location && <p>{event.location}</p>}
                    {event.time && <p>{event.time}</p>}
                  </div>
                </Card>
              );
            })
          )}
        </div>

        <Card className="mt-12 bg-paper-dim/40 border-line">
          <Eyebrow number="NOTE">Official University Calendar</Eyebrow>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Looking for Ashoka University&apos;s overarching academic calendar
            (mid-semesters, end-semester examination dates, convocation)? If you
            have the verified institutional calendar link from the Registrar&apos;s
            office, send it to{" "}
            <a href={`mailto:${site.email}`} className="text-accent underline font-medium">
              {site.email}
            </a>{" "}
            to index it here.
          </p>
        </Card>
      </section>
    </div>
  );
}

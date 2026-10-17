import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import EventsExplorer from "@/components/EventsExplorer";
import { getEvents, eventSlug } from "@/lib/events";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description: "The Ministry's events calendar: events run by the Ministry and events it promotes.",
};

export default async function EventsPage() {
  const { events } = await getEvents();
  const today = new Date().toISOString().slice(0, 10);
  const items = events.map((e) => ({ ...e, slug: eventSlug(e) }));

  return (
    <div>
      <PageHeader
        eyebrow="Events"
        title="Events calendar"
        description="Events run by the Ministry, and events by academic societies and the university that the Ministry promotes. Choose a day on the calendar or open an event for details."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <EventsExplorer events={items} today={today} />
        <p className="mt-10 text-sm text-ink-soft">
          Organising an event that should be listed? Representatives can add it
          by following the{" "}
          <Link href="/events/add" className="font-medium text-accent underline">
            steps for adding an event
          </Link>
          , or write to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-accent underline">
            {site.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}

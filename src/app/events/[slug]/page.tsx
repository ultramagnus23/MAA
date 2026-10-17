import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEvents, eventSlug, formatEventDate } from "@/lib/events";

type Props = { params: Promise<{ slug: string }> };

async function find(slug: string) {
  const { events } = await getEvents();
  return events.find((e) => eventSlug(e) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await find(slug);
  return { title: event ? event.title : "Event not found" };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await find(slug);
  if (!event) notFound();

  const today = new Date().toISOString().slice(0, 10);
  const status = event.date >= today ? "Upcoming" : "Past event";
  const kind =
    event.category === "MAA"
      ? "Run by the Ministry"
      : event.category === "Academic Society"
        ? "Run by an academic society, promoted by the Ministry"
        : "A university event, promoted by the Ministry";

  const rows: [string, string | undefined][] = [
    ["Date", formatEventDate(event.date)],
    ["Time", event.time],
    ["Location", event.location],
    ["Organiser", event.organizer],
    ["Type", `${event.category}. ${kind}`],
  ];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <p className="text-sm">
        <Link href="/events" className="font-medium text-accent hover:underline">
          ← Back to events
        </Link>
      </p>
      <p className="mt-6 text-sm font-medium text-accent">{status}</p>
      <h1 className="mt-2 text-ink">{event.title}</h1>
      {event.description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{event.description}</p>
      )}
      <dl className="mt-8 divide-y divide-line rounded-lg border border-line bg-white">
        {rows
          .filter(([, v]) => v)
          .map(([k, v]) => (
            <div key={k} className="flex gap-4 px-4 py-3 text-sm">
              <dt className="w-24 shrink-0 text-ink-faint">{k}</dt>
              <dd className="text-ink">{v}</dd>
            </div>
          ))}
      </dl>
      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
        >
          Register or learn more ↗
        </a>
      )}
    </div>
  );
}

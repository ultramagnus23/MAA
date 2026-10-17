"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type ExplorerEvent = {
  slug: string;
  title: string;
  date: string; // yyyy-mm-dd
  time?: string;
  location?: string;
  category: string;
  organizer?: string;
  description?: string;
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const pad = (n: number) => String(n).padStart(2, "0");
const iso = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`;

const CATEGORY_NOTE: Record<string, string> = {
  MAA: "Run by the Ministry",
  "Academic Society": "Run by an academic society and promoted by the Ministry",
  University: "A university event promoted by the Ministry",
};

function EventRow({ e }: { e: ExplorerEvent }) {
  return (
    <li>
      <Link
        href={`/events/${e.slug}`}
        className="block rounded-lg border border-line bg-white p-4 transition-colors hover:border-accent"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm text-ink-faint">
              <span className="font-medium text-accent">{e.category}</span>
              {e.organizer ? ` · ${e.organizer}` : ""}
            </p>
            <h3 className="mt-1 text-ink">{e.title}</h3>
            {e.description && <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{e.description}</p>}
          </div>
          <div className="shrink-0 text-sm text-ink-soft sm:text-right">
            <p className="font-medium text-ink">
              {new Date(e.date + "T00:00:00").toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </p>
            {e.time && <p>{e.time}</p>}
            {e.location && <p>{e.location}</p>}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function EventsExplorer({
  events,
  today,
}: {
  events: ExplorerEvent[];
  today: string;
}) {
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState<"upcoming" | "past" | "all">("upcoming");
  const start = new Date(today + "T00:00:00");
  const [year, setYear] = useState(start.getFullYear());
  const [month, setMonth] = useState(start.getMonth());
  const [selected, setSelected] = useState<string | null>(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(events.map((e) => e.category)))], [events]);

  const filtered = events.filter(
    (e) =>
      (category === "All" || e.category === category) &&
      (status === "all" || (status === "upcoming" ? e.date >= today : e.date < today))
  );
  const listed = status === "past" ? [...filtered].reverse() : filtered;

  const byDate = useMemo(() => {
    const m = new Map<string, ExplorerEvent[]>();
    for (const e of events.filter((e) => category === "All" || e.category === category)) {
      m.set(e.date, [...(m.get(e.date) ?? []), e]);
    }
    return m;
  }, [events, category]);

  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7; // Monday first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: offset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const shift = (delta: number) => {
    const d = new Date(year, month + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
    setSelected(null);
  };

  const selectedEvents = selected ? byDate.get(selected) ?? [] : [];

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-lg border border-line bg-white p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by category">
          <span className="mr-1 text-sm text-ink-faint">Category</span>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded border px-3 py-1.5 text-sm transition-colors ${
                category === c
                  ? "border-accent bg-accent text-white"
                  : "border-line-strong text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by date">
          <span className="mr-1 text-sm text-ink-faint">Show</span>
          {(["upcoming", "past", "all"] as const).map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={status === s}
              onClick={() => setStatus(s)}
              className={`rounded border px-3 py-1.5 text-sm capitalize transition-colors ${
                status === s
                  ? "border-accent bg-accent text-white"
                  : "border-line-strong text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,26rem)_1fr]">
        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-ink">
              {MONTHS[month]} {year}
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => shift(-1)}
                aria-label="Previous month"
                className="rounded border border-line-strong px-3 py-1.5 text-sm text-ink-soft hover:border-accent hover:text-accent"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => shift(1)}
                aria-label="Next month"
                className="rounded border border-line-strong px-3 py-1.5 text-sm text-ink-soft hover:border-accent hover:text-accent"
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-ink-faint">
            {DAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              if (d === null) return <span key={`b${i}`} />;
              const key = iso(year, month, d);
              const count = byDate.get(key)?.length ?? 0;
              const isToday = key === today;
              const isSel = key === selected;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelected(isSel ? null : key)}
                  aria-pressed={isSel}
                  aria-label={`${d} ${MONTHS[month]}${count ? `, ${count} event${count > 1 ? "s" : ""}` : ", no events"}`}
                  className={`flex aspect-square flex-col items-center justify-center rounded border text-sm transition-colors ${
                    isSel
                      ? "border-accent bg-accent text-white"
                      : count
                        ? "border-accent/40 bg-accent-soft text-ink hover:border-accent"
                        : "border-line bg-white text-ink-soft hover:border-line-strong"
                  } ${isToday && !isSel ? "ring-2 ring-accent/50" : ""}`}
                >
                  <span>{d}</span>
                  {count > 0 && (
                    <span className={`text-[0.65rem] leading-none ${isSel ? "text-white" : "text-accent"}`}>
                      {count} {count > 1 ? "events" : "event"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div aria-live="polite" className="mt-4 min-h-12 text-sm">
            {selected && (
              <>
                <p className="font-medium text-ink">
                  {new Date(selected + "T00:00:00").toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </p>
                {selectedEvents.length === 0 ? (
                  <p className="mt-1 text-ink-soft">No events on this day.</p>
                ) : (
                  <ul className="mt-2 space-y-1">
                    {selectedEvents.map((e) => (
                      <li key={e.slug}>
                        <Link href={`/events/${e.slug}`} className="text-accent hover:underline">
                          {e.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>

        {/* List */}
        <div>
          <h2 className="text-ink capitalize">{status === "all" ? "All events" : `${status} events`}</h2>
          {listed.length === 0 ? (
            <div className="mt-4 rounded-lg border border-line-strong bg-white p-6 text-sm text-ink-soft">
              {events.length === 0
                ? "No events have been added yet. They will appear here, and on the calendar, as soon as the Ministry adds them."
                : "No events match these filters."}
            </div>
          ) : (
            <ul className="mt-4 space-y-3">
              {listed.map((e) => (
                <EventRow key={e.slug} e={e} />
              ))}
            </ul>
          )}
          <dl className="mt-8 space-y-1 text-sm text-ink-soft">
            {Object.entries(CATEGORY_NOTE).map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <dt className="font-medium text-ink">{k}:</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

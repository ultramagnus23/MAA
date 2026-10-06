import { seedEvents, type MaaEvent, type EventCategory } from "@/data/events";

/**
 * Events come from a Google Sheet that any Academic Representative can edit
 * directly with no code changes or deploys needed. Set EVENTS_SHEET_CSV_URL to
 * that sheet's "publish to web -> CSV" link (File -> Share -> Publish to web,
 * choose the Events tab, format CSV). See README.md for the exact column
 * headers expected. Until that env var is configured, the site falls back to
 * the empty local seed in src/data/events.ts rather than showing fake events.
 */

const CSV_URL = process.env.EVENTS_SHEET_CSV_URL;

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && next === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

const VALID_CATEGORIES: EventCategory[] = ["MAA", "Academic Society", "University"];

function normalizeCategory(raw: string | undefined): EventCategory {
  const found = VALID_CATEGORIES.find(
    (c) => c.toLowerCase() === (raw ?? "").trim().toLowerCase()
  );
  return found ?? "MAA";
}

function rowsToEvents(rows: string[][]): MaaEvent[] {
  if (rows.length === 0) return [];
  const [header, ...body] = rows;
  const col = (name: string) =>
    header.findIndex((h) => h.trim().toLowerCase() === name.toLowerCase());

  const idx = {
    title: col("title"),
    date: col("date"),
    time: col("time"),
    location: col("location"),
    category: col("category"),
    description: col("description"),
    link: col("link"),
    organizer: col("organizer"),
  };

  return body
    .map((r): MaaEvent | null => {
      const title = idx.title >= 0 ? r[idx.title]?.trim() : "";
      const date = idx.date >= 0 ? r[idx.date]?.trim() : "";
      if (!title || !date) return null;
      return {
        title,
        date,
        time: idx.time >= 0 ? r[idx.time]?.trim() || undefined : undefined,
        location: idx.location >= 0 ? r[idx.location]?.trim() || undefined : undefined,
        category: normalizeCategory(idx.category >= 0 ? r[idx.category] : undefined),
        description: idx.description >= 0 ? r[idx.description]?.trim() || undefined : undefined,
        link: idx.link >= 0 ? r[idx.link]?.trim() || undefined : undefined,
        organizer: idx.organizer >= 0 ? r[idx.organizer]?.trim() || undefined : undefined,
      };
    })
    .filter((e): e is MaaEvent => e !== null);
}

export async function getEvents(): Promise<{ events: MaaEvent[]; source: "sheet" | "seed" }> {
  if (CSV_URL) {
    try {
      const res = await fetch(CSV_URL, { next: { revalidate: 300 } });
      if (res.ok) {
        const text = await res.text();
        const events = rowsToEvents(parseCsv(text));
        return { events: sortEvents(events), source: "sheet" };
      }
    } catch {
      // fall through to seed
    }
  }
  return { events: sortEvents(seedEvents), source: "seed" };
}

function sortEvents(events: MaaEvent[]): MaaEvent[] {
  return [...events].sort((a, b) => a.date.localeCompare(b.date));
}

export function categoryTone(category: EventCategory): "accent" | "gold" | "teal" {
  switch (category) {
    case "MAA":
      return "accent";
    case "Academic Society":
      return "gold";
    case "University":
      return "teal";
  }
}

export function splitUpcomingPast(events: MaaEvent[]) {
  const today = new Date().toISOString().slice(0, 10);
  return {
    upcoming: events.filter((e) => e.date >= today),
    past: events.filter((e) => e.date < today).reverse(),
  };
}

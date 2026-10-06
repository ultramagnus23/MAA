export type EventCategory = "MAA" | "Academic Society" | "University";

export type MaaEvent = {
  title: string;
  date: string; // ISO yyyy-mm-dd
  time?: string;
  location?: string;
  category: EventCategory;
  description?: string;
  link?: string;
  organizer?: string;
};

// No live events were supplied in MAA's source material at build time;
// this seed intentionally ships empty rather than inventing events.
// Real events are meant to come from the Google Sheet described in
// src/lib/events.ts / README.md once MAA connects one.
export const seedEvents: MaaEvent[] = [];

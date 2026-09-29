import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Tag } from "@/components/ui";
import {
  archivedBorRoster2024_25,
  archivedFcReps2024_25,
} from "@/data/representatives";

export const metadata: Metadata = { title: "2024–25 Representative Archive" };

export default function ArchivePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Archive · 2024–25 academic year"
        title="Board of Representatives, 2024–25"
        description="Sourced from MAA's own 2024–25 Annual Report. Kept for reference — these are not current representatives. For today's contacts, use the department emails on the main Representatives page."
      />

      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <Link href="/representatives" className="text-sm text-accent hover:underline">
          ← Back to current representatives
        </Link>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <SectionHeading eyebrow="Department Representatives" title="By department" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {archivedBorRoster2024_25.map((entry) => (
            <Card key={entry.department}>
              <p className="font-serif-heading text-base text-ink">{entry.department}</p>
              {entry.vacant ? (
                <p className="mt-2 text-sm italic text-ink-faint">No representative that year</p>
              ) : (
                <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                  {entry.names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <SectionHeading
            eyebrow="Foundation Course Representatives"
            title="2024–25 FC representatives"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {archivedFcReps2024_25.map((fc) => (
              <Card key={fc.fc}>
                <Tag>FC</Tag>
                <p className="font-serif-heading mt-3 text-base text-ink">{fc.fc}</p>
                <p className="mt-1 text-sm text-ink-soft">{fc.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink-faint">{fc.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

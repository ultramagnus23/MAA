import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Tag } from "@/components/ui";
import {
  archivedBorRoster2024_25,
  archivedFcReps2024_25,
} from "@/data/representatives";

export const metadata: Metadata = { title: "Board of Representatives, 2024–25" };

// Names in the source are written like "Hiyaa Atreya (UG)". Show the
// programme as a small label next to the name. Nothing else is changed.
function splitProgramme(entry: string) {
  const m = entry.match(/^(.*) \(([A-Z]{2,4})\)$/);
  return m ? { name: m[1], programme: m[2] } : { name: entry, programme: null };
}

export default function ArchivePage() {
  const withReps = archivedBorRoster2024_25.filter((e) => !e.vacant).length;

  return (
    <div>
      <PageHeader
        eyebrow="Archive · 2024–25 academic year"
        title="Board of Representatives, 2024–25"
        description="Compiled from the Ministry's 2024–25 Annual Report and kept for reference only. These are not current representatives. For current contacts, please use the department emails on the Representatives page."
      />

      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <Link href="/representatives" className="text-sm font-medium text-accent hover:underline">
          ← Back to current representatives
        </Link>
        <p className="mt-5 rounded-lg border border-line-strong bg-white p-4 text-sm text-ink-soft">
          <span className="font-semibold text-ink">Historical record.</span>{" "}
          This list shows who held each role in 2024–25. {withReps} of{" "}
          {archivedBorRoster2024_25.length} departments had a representative that year.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <SectionHeading eyebrow="Department Representatives, 2024–25" title="By department" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archivedBorRoster2024_25.map((entry) => (
            <li key={entry.department}>
              <Card className="h-full">
                <h3 className="text-ink">{entry.department}</h3>
                {entry.vacant ? (
                  <p className="mt-3 text-sm text-ink-faint">No representative that year</p>
                ) : (
                  <ul className="mt-3 divide-y divide-line text-sm">
                    {entry.names.map((raw) => {
                      const { name, programme } = splitProgramme(raw);
                      return (
                        <li key={raw} className="flex items-center justify-between gap-3 py-1.5 text-ink">
                          <span>{name}</span>
                          {programme && <Tag>{programme}</Tag>}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <SectionHeading
            eyebrow="Foundation Course Representatives, 2024–25"
            title="2024–25 FC representatives"
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {archivedFcReps2024_25.map((fc) => (
              <li key={fc.fc}>
                <Card className="h-full">
                  <Tag>FC</Tag>
                  <h3 className="mt-3 text-ink">{fc.fc}</h3>
                  <p className="mt-1 text-sm font-medium text-ink">{fc.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{fc.note}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-ink">Other archived material</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Department, student and batch handbooks are kept in the archive for reference.
            </p>
          </div>
          <Link
            href="/handbooks"
            className="shrink-0 rounded border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Archived handbooks →
          </Link>
        </Card>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Tag } from "@/components/ui";
import {
  archivedBorRoster2024_25,
  archivedFcReps2024_25,
} from "@/data/representatives";

export const metadata: Metadata = {
  title: "2024–25 Representative Archive",
  description:
    "Archival roster of the 2024–25 Board of Representatives (BOR) and Foundation Course (FC) representatives at Ashoka University.",
};

export default function ArchivePage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        number="ARCHIVE"
        eyebrow="Dated Records · Academic Year 2024–25"
        title="Board of Representatives Roster"
        italicTitle="2024–25."
        description="Sourced directly from MAA's official 2024–25 Annual Report. These names represent past student officeholders. For current department contacts, use the standing email addresses on the main Representatives page."
      />

      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 border-b border-line bg-paper-dim/30">
        <Link
          href="/representatives"
          className="inline-flex items-center gap-1.5 text-xs font-mono-tag text-accent hover:underline"
        >
          <span>←</span>
          <span>RETURN TO CURRENT REPRESENTATIVES &amp; OFFICE HOURS</span>
        </Link>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <SectionHeading
            number="01"
            eyebrow="Disciplinary Representation"
            title="Department Representatives (2024–25)"
            description="Student delegates elected or appointed across major disciplines in the preceding academic year."
          />
          <span className="font-mono-tag text-xs text-ink-faint">
            {archivedBorRoster2024_25.length} DISCIPLINES RECORDED
          </span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archivedBorRoster2024_25.map((entry) => (
            <Card
              key={entry.department}
              className={`p-5 transition-all ${
                entry.vacant ? "border-dashed opacity-75" : "hover:border-line-strong"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-[10px] text-ink-faint uppercase">
                  DEPARTMENT
                </span>
                {entry.vacant && <Tag variant="dim">Vacant AY24-25</Tag>}
              </div>

              <h4 className="font-serif-heading mt-2 text-lg font-medium text-ink">
                {entry.department}
              </h4>

              {entry.vacant ? (
                <p className="mt-3 text-xs italic text-ink-faint border-t border-line/60 pt-2">
                  No representative appointed during that academic year.
                </p>
              ) : (
                <ul className="mt-3 space-y-1.5 border-t border-line/60 pt-2.5 text-sm text-ink-soft">
                  {entry.names.map((name) => (
                    <li key={name} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="Core Foundation Curriculum"
            title="Foundation Course Representatives"
            description="Student representatives assigned to cross-disciplinary foundation courses and advising hours."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {archivedFcReps2024_25.map((fc) => (
              <Card key={fc.fc} className="flex flex-col justify-between p-6">
                <div>
                  <Tag variant="accent">FC REPRESENTATIVE</Tag>
                  <h4 className="font-serif-heading mt-3 text-lg font-medium text-ink">
                    {fc.fc}
                  </h4>
                  <p className="mt-1.5 font-medium text-sm text-ink-soft">
                    {fc.name}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-ink-faint border-t border-line/60 pt-3">
                    {fc.note}
                  </p>
                </div>
                <div className="mt-4 pt-2">
                  <span className="font-mono-tag text-[10px] text-ink-faint uppercase">
                    AY 2024–25 ARCHIVE
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

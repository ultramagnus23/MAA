import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Eyebrow, StatusDot } from "@/components/ui";
import { currentReps } from "@/data/representatives";
import { site } from "@/data/site";
import DepartmentDirectory from "@/components/DepartmentDirectory";

export const metadata: Metadata = {
  title: "Representatives",
  description:
    "Direct contact channels for all 21 academic departments and bookable office hours with active student representatives at Ashoka University.",
};

export default function RepresentativesPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        number="01"
        eyebrow="Student Representation & Contact"
        title="Representatives & Office Hours"
        italicTitle="AY 2025–26."
        description="Two official avenues to reach the Ministry: book direct time with an active representative for course advising and grievances, or email your department's standing role inbox."
      />

      {/* Bookable Office Hours Section */}
      <section id="office-hours" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            number="01"
            eyebrow="One-on-One Advising"
            title="Active Office Hours"
            italicTitle="Book directly via Calendly."
            description="These three representatives currently hold confirmed, live office hours. Slots are bookable immediately without scheduling delay."
          />
          <span className="font-mono-tag text-xs text-accent">
            ● 3 Live Channels Synced
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {currentReps.map((rep) => (
            <Card
              key={rep.name}
              className="flex flex-col justify-between transition-all hover:border-accent hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <StatusDot active={true} />
                  <span className="font-mono-tag text-[10px] uppercase tracking-wider text-ink-faint">
                    Ashoka UG&apos;24
                  </span>
                </div>
                <h3 className="font-serif-heading mt-4 text-xl font-medium text-ink">
                  {rep.name}
                </h3>
                <p className="mt-1 text-xs text-ink-soft">{rep.role}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-faint border-t border-line/70 pt-3">
                  Consultation available for course planning, add/drop questions,
                  grade dispute mediation, and academic accommodations.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line">
                <a
                  href={rep.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between rounded-xs border border-line-strong bg-paper px-4 py-2.5 text-xs font-medium text-ink transition-all hover:border-accent hover:bg-accent hover:text-paper"
                >
                  <span>{rep.bookingLabel}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 21 Department Representative Directory */}
      <section className="border-t border-line bg-paper-dim/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="Standing Role Inboxes"
            title="Department Representatives"
            italicTitle="All 21 Disciplines."
            description="Each department maintains a dedicated standing representative inbox. Messages are received directly by current student delegates and faculty student committees."
          />

          <div className="mt-10">
            <DepartmentDirectory />
          </div>
        </div>
      </section>

      {/* Archive Callout & Disclaimer */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Card className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between bg-paper border-line">
          <div className="max-w-xl">
            <Eyebrow number="03">Historical Records</Eyebrow>
            <h3 className="font-serif-heading mt-2 text-xl font-normal text-ink">
              Looking for past representatives?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              The full 2024–25 Board of Representatives (BOR) and Foundation
              Course (FC) roster is preserved in our dated archive for institutional transparency.
            </p>
          </div>
          <Link
            href="/representatives/archive"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xs border border-line-strong bg-paper px-5 py-3 text-xs font-medium tracking-wide text-ink transition-all hover:border-accent hover:bg-paper-dim hover:text-accent"
          >
            <span>View 2024–25 Archive</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </Card>

        <div className="mt-10 border-t border-line pt-6 text-xs text-ink-faint">
          <p>
            Are you a department representative seeking to update office hour schedules or contact info? Write to{" "}
            <a href={`mailto:${site.email}`} className="text-accent underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

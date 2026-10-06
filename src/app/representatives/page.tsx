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
        eyebrow="Your representatives"
        title="Representatives and Office Hours"
        description="There are two ways to reach the Ministry: book a meeting with a current representative, or write to your department's representative."
      />

      {/* Bookable Office Hours Section */}
      <section id="office-hours" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Book a meeting"
            title="Current Office Hours"
            description="These three representatives currently hold office hours that can be booked online."
          />
          <span className="text-xs text-accent">
            3 representatives available
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
                  <span className="text-[10px] text-ink-faint">
                    Ashoka UG&apos;24
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium text-ink">
                  {rep.name}
                </h3>
                <p className="mt-1 text-xs text-ink-soft">{rep.role}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-faint border-t border-line/70 pt-3">
                  Available to help with course planning, add/drop questions, grade concerns and academic accommodations.
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
            eyebrow="By department"
            title="Department Representatives"
            description="Each department has a permanent representative email address. The same address remains valid regardless of who holds the role in a given year."
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
            <Eyebrow>Past representatives</Eyebrow>
            <h3 className="mt-2 text-xl font-normal text-ink">
              Looking for past representatives?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              The full 2024–25 list of department and Foundation Course representatives is kept as a dated archive.
            </p>
          </div>
          <Link
            href="/representatives/archive"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xs border border-line-strong bg-paper px-5 py-3 text-xs font-medium text-ink transition-all hover:border-accent hover:bg-paper-dim hover:text-accent"
          >
            <span>View the 2024–25 archive</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </Card>

        <div className="mt-10 border-t border-line pt-6 text-xs text-ink-faint">
          <p>
            To update office hours or contact details, please write to{" "}
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

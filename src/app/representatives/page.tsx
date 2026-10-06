import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Eyebrow } from "@/components/ui";
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
        eyebrow="Representatives"
        title="Reach the Ministry"
        description="Not sure who to contact? Use the guide below. General matters go to the Core Team. Matters about your own department go to your Department Representative."
      />

      {/* Quick guide */}
      <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="#core-team" className="block rounded-lg border border-line bg-white p-5 transition-colors hover:border-accent">
            <p className="text-sm font-medium text-accent">General Ministry matters</p>
            <p className="mt-2 text-lg font-semibold text-ink">Contact the Core Team</p>
            <p className="mt-1 text-sm text-ink-soft">Through office hours, email or WhatsApp →</p>
          </a>
          <a href="#departments" className="block rounded-lg border border-line bg-white p-5 transition-colors hover:border-accent">
            <p className="text-sm font-medium text-accent">Department-specific matters</p>
            <p className="mt-2 text-lg font-semibold text-ink">Contact your Department Representative</p>
            <p className="mt-1 text-sm text-ink-soft">Directly, using the email for your department →</p>
          </a>
        </div>
      </section>

      {/* Core Team */}
      <section id="core-team" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="General matters"
          title="Contact the Core Team"
          description="For concerns, suggestions, feedback or issues about academics at Ashoka, reach the Ministry's Core Team in either of two ways."
        />

        <div id="office-hours" className="mt-10 scroll-mt-24">
          <h3 className="text-ink">1. Book an office hour</h3>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            Choose a time and speak to a member of the Core Team in person.
            Pick any of the members below.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {currentReps.map((rep) => (
              <Card key={rep.name} className="flex flex-col justify-between">
                <div>
                  <h3 className="text-ink">{rep.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">Core Team</p>
                </div>
                <a
                  href={rep.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between rounded border border-accent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  <span>Book an office hour</span>
                  <span aria-hidden>↗</span>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-ink">2. Contact us remotely</h3>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">
            Prefer not to meet? Write to us by email or message the official WhatsApp group.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Card className="flex flex-col justify-between">
              <div>
                <h3 className="text-ink">Email</h3>
                <p className="mt-1 break-all text-sm text-ink-soft">{site.email}</p>
              </div>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 flex items-center justify-between rounded border border-accent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
              >
                <span>Send an email</span>
                <span aria-hidden>→</span>
              </a>
            </Card>
            <Card className="flex flex-col justify-between">
              <div>
                <h3 className="text-ink">WhatsApp</h3>
                <p className="mt-1 text-sm text-ink-soft">The official Ministry WhatsApp group. Scan the QR code to join.</p>
              </div>
              <a
                href="/resources/MAA Open Q_A Group (UG2025).jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between rounded border border-accent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
              >
                <span>Join the WhatsApp group</span>
                <span aria-hidden>↗</span>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Representatives: kept separate from the Core Team */}
      <section id="departments" className="scroll-mt-24 border-y-4 border-y-accent/20 bg-paper-dim py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Department-specific matters"
            title="Contact your Department Representative"
            description="If your query, issue or request is only about your department, write directly to your Department Representative."
          />
          <p className="mt-4 max-w-2xl rounded-lg border border-line bg-white p-4 text-sm text-ink-soft">
            Department Representatives handle department matters on their own.
            They are separate from the Core Team and its office hours, email
            and WhatsApp, so you do not need to go through those channels for
            a department issue.
          </p>

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

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, SectionHeading, Eyebrow } from "@/components/ui";
import { currentReps, departmentContacts } from "@/data/representatives";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Representatives" };

export default function RepresentativesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Your representatives"
        title="Representatives and office hours"
        description="There are two ways to reach the Ministry: book a meeting with a current representative, or write to your department's representative."
      />

      <section id="office-hours" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="Book a meeting"
          title="Current office hours"
          description="The following representatives currently hold office hours that can be booked online."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {currentReps.map((rep) => (
            <Card key={rep.name} className="flex flex-col justify-between">
              <div>
                <p className="text-lg text-ink">{rep.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{rep.role}</p>
              </div>
              <a
                href={rep.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {rep.bookingLabel} →
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="Departments"
            title="Department representative contacts"
            description="Each department has a permanent representative email address. The same address remains valid regardless of who holds the role in a given year."
          />
          <div className="mt-8 overflow-hidden rounded border border-line">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-line bg-paper text-left">
                  <th className="px-4 py-3 font-medium text-ink-soft">Department</th>
                  <th className="px-4 py-3 font-medium text-ink-soft">Email</th>
                </tr>
              </thead>
              <tbody>
                {departmentContacts.map((dept, i) => (
                  <tr
                    key={dept.department}
                    className={`border-b border-line last:border-0 ${
                      i % 2 === 1 ? "bg-paper-dim" : "bg-paper"
                    }`}
                  >
                    <td className="px-4 py-3 text-ink">{dept.department}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-[13px] text-accent hover:underline"
                      >
                        {dept.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>Looking for last year&apos;s representatives?</Eyebrow>
            <p className="mt-1 text-sm text-ink-soft">
              The full 2024–25 department and Foundation Course representative
              roster is kept as a dated archive and is not current.
            </p>
          </div>
          <Link
            href="/representatives/archive"
            className="whitespace-nowrap rounded border border-line-strong px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent"
          >
            View 2024–25 archive →
          </Link>
        </Card>

        <p className="mt-8 text-sm text-ink-faint">
          To request a correction to this page, please{" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:underline">
            write to the Ministry
          </a>
          .
        </p>
      </section>
    </div>
  );
}

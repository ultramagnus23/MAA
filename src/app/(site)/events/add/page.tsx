import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card } from "@/components/ui";

export const metadata: Metadata = { title: "Add an Event (for MAA Reps)" };

export default function AddEventPage() {
  return (
    <div>
      <PageHeader
        eyebrow="For Ministry representatives"
        title="How to add an event"
        description="Events on this site are read from a shared Google Sheet. No technical knowledge is required to update them."
      />

      <section className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <ol className="space-y-6 text-[15px] leading-relaxed text-ink-soft">
          <li>
            <p className="font-medium text-ink">1. Open the Events sheet</p>
            <p className="mt-1">
              Request the link to the &quot;MAA Events&quot; Google Sheet from a current member of the Ministry. The sheet contains one row for each event.
            </p>
          </li>
          <li>
            <p className="font-medium text-ink">2. Add a row with the following columns</p>
            <div className="mt-2 overflow-x-auto rounded border border-line">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line bg-paper-dim text-left">
                    <th className="px-3 py-2 font-medium text-ink">Column</th>
                    <th className="px-3 py-2 font-medium text-ink">Example</th>
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  {[
                    ["title", "Academic Societies Mixer"],
                    ["date", "2026-10-14"],
                    ["time", "5:00 PM"],
                    ["location", "AC-04, Amphitheatre"],
                    ["category", "MAA / Academic Society / University"],
                    ["description", "One line on what it is"],
                    ["link", "https://forms.gle/... (optional)"],
                    ["organizer", "MAA Collaborations & Events (optional)"],
                  ].map(([col, ex]) => (
                    <tr key={col} className="border-b border-line last:border-0">
                      <td className="px-3 py-2 text-ink">{col}</td>
                      <td className="px-3 py-2 text-ink-soft">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">
              Enter the date in YYYY-MM-DD format so that events are sorted
              correctly. The category field must contain exactly one of the
              three values shown above.
            </p>
          </li>
          <li>
            <p className="font-medium text-ink">3. Completion</p>
            <p className="mt-1">
              The website reads the sheet automatically every few minutes, so the event will appear without any further action.
            </p>
          </li>
        </ol>

        <Card className="mt-10">
          <p className="text-sm font-medium text-ink">Setting up for the first time?</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            Please refer to the README file in the project repository for
            instructions on connecting a new Google Sheet as the source of events.
          </p>
        </Card>

        <p className="mt-8 text-sm">
          <Link href="/events" className="text-accent hover:underline">
            ← Back to events
          </Link>
        </p>
      </section>
    </div>
  );
}

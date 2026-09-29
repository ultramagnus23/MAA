import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card } from "@/components/ui";

export const metadata: Metadata = { title: "Add an Event (for MAA Reps)" };

export default function AddEventPage() {
  return (
    <div>
      <PageHeader
        eyebrow="For MAA Academic Representatives"
        title="Adding an event to this site"
        description="Events on this site are pulled from a Google Sheet — no code, no deploys, no developer needed."
      />

      <section className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <ol className="space-y-6 text-[15px] leading-relaxed text-ink-soft">
          <li>
            <p className="font-medium text-ink">1. Open the MAA Events sheet</p>
            <p className="mt-1">
              Ask a current MAA member for the &quot;MAA Events&quot; Google
              Sheet link if you don&apos;t already have it. It has one row
              per event.
            </p>
          </li>
          <li>
            <p className="font-medium text-ink">2. Add a row with these columns</p>
            <div className="mt-2 overflow-x-auto rounded border border-line">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-line bg-paper-dim text-left">
                    <th className="px-3 py-2 font-medium text-ink">Column</th>
                    <th className="px-3 py-2 font-medium text-ink">Example</th>
                  </tr>
                </thead>
                <tbody className="font-mono-tag text-[13px]">
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
              Use <code className="font-mono-tag">date</code> in
              YYYY-MM-DD format so events sort correctly. The{" "}
              <code className="font-mono-tag">category</code> field controls
              which badge shows — use exactly one of the three values above.
            </p>
          </li>
          <li>
            <p className="font-medium text-ink">3. That&apos;s it</p>
            <p className="mt-1">
              The site checks the sheet automatically every few minutes.
              Nobody needs to touch code or redeploy anything.
            </p>
          </li>
        </ol>

        <Card className="mt-10">
          <p className="text-sm font-medium text-ink">Setting this up for the first time?</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            See <code className="font-mono-tag">README.md</code> in the
            project repository for how to connect a new Google Sheet as the
            events source (it&apos;s a five-minute, one-time setup).
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

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Add an Event (Rep Guide)",
  description:
    "How MAA Academic Representatives publish events to the site via Google Sheets without code changes.",
};

export default function AddEventPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        number="GUIDE"
        eyebrow="For Academic Representatives"
        title="Publishing Events to the Archive"
        italicTitle="Google Sheets pipeline."
        description="Events on this site synchronize directly from a shared Google Sheet. No code edits, Git commits, or developer deployments required."
      />

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <ol className="space-y-8 text-[15px] leading-relaxed text-ink-soft">
          <li className="rounded-xs border border-line bg-paper p-6">
            <div className="flex items-center gap-2">
              <span className="font-mono-tag text-xs font-semibold text-accent">
                STEP 01
              </span>
              <h3 className="font-serif-heading text-lg text-ink font-medium">
                Open the MAA Events Master Sheet
              </h3>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Access the collaborative &ldquo;MAA Events&rdquo; Google Sheet via
              your Ashoka student account. If you do not have edit permissions,
              request access from the Collaborations &amp; Events team.
            </p>
          </li>

          <li className="rounded-xs border border-line bg-paper p-6">
            <div className="flex items-center gap-2">
              <span className="font-mono-tag text-xs font-semibold text-accent">
                STEP 02
              </span>
              <h3 className="font-serif-heading text-lg text-ink font-medium">
                Insert a New Row with Standard Headers
              </h3>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Ensure column names strictly match the following schema:
            </p>

            <div className="mt-4 overflow-x-auto rounded-xs border border-line">
              <table className="w-full min-w-[500px] border-collapse text-xs">
                <thead>
                  <tr className="border-b border-line bg-paper-dim text-left font-mono-tag uppercase text-ink-faint">
                    <th className="px-3.5 py-2.5 font-medium">Column Key</th>
                    <th className="px-3.5 py-2.5 font-medium">Required Format</th>
                    <th className="px-3.5 py-2.5 font-medium">Sample Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line font-mono-tag">
                  <tr>
                    <td className="px-3.5 py-2 text-accent font-medium">title</td>
                    <td className="px-3.5 py-2 text-ink-faint">Plain text</td>
                    <td className="px-3.5 py-2 text-ink">Academic Societies Mixer</td>
                  </tr>
                  <tr>
                    <td className="px-3.5 py-2 text-accent font-medium">date</td>
                    <td className="px-3.5 py-2 text-ink-faint">YYYY-MM-DD</td>
                    <td className="px-3.5 py-2 text-ink">2026-10-14</td>
                  </tr>
                  <tr>
                    <td className="px-3.5 py-2 text-accent font-medium">time</td>
                    <td className="px-3.5 py-2 text-ink-faint">Optional string</td>
                    <td className="px-3.5 py-2 text-ink">5:00 PM IST</td>
                  </tr>
                  <tr>
                    <td className="px-3.5 py-2 text-accent font-medium">location</td>
                    <td className="px-3.5 py-2 text-ink-faint">Optional string</td>
                    <td className="px-3.5 py-2 text-ink">AC-04 Amphitheatre</td>
                  </tr>
                  <tr>
                    <td className="px-3.5 py-2 text-accent font-medium">category</td>
                    <td className="px-3.5 py-2 text-ink-faint">MAA / Academic Society / University</td>
                    <td className="px-3.5 py-2 text-ink">MAA</td>
                  </tr>
                  <tr>
                    <td className="px-3.5 py-2 text-accent font-medium">description</td>
                    <td className="px-3.5 py-2 text-ink-faint">1-2 sentences</td>
                    <td className="px-3.5 py-2 text-ink">Inter-departmental networking mixer</td>
                  </tr>
                  <tr>
                    <td className="px-3.5 py-2 text-accent font-medium">link</td>
                    <td className="px-3.5 py-2 text-ink-faint">Valid URL (Optional)</td>
                    <td className="px-3.5 py-2 text-ink">https://forms.gle/...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li className="rounded-xs border border-line bg-paper p-6">
            <div className="flex items-center gap-2">
              <span className="font-mono-tag text-xs font-semibold text-accent">
                STEP 03
              </span>
              <h3 className="font-serif-heading text-lg text-ink font-medium">
                Automatic Cache Invalidation &amp; Sync
              </h3>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              The Next.js website polls and caches the Google Sheet CSV export.
              Updates appear automatically within five minutes across the
              homepage and events directory.
            </p>
          </li>
        </ol>

        <Card className="mt-12 bg-paper-dim/40 border-line">
          <Eyebrow number="CONFIG">Sheet Connection Note</Eyebrow>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">
            To point the site to a new Google Sheet URL, update the{" "}
            <code className="font-mono-tag font-semibold text-ink">
              EVENTS_SHEET_CSV_URL
            </code>{" "}
            environment variable in the deployment settings. Instructions are
            detailed in the repository <code className="font-mono-tag font-semibold text-ink">README.md</code>.
          </p>
        </Card>

        <div className="mt-10 border-t border-line pt-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-mono-tag text-accent hover:underline"
          >
            <span>←</span>
            <span>BACK TO EVENTS INDEX</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

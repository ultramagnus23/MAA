import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading, Card } from "@/components/ui";
import Avatar from "@/components/Avatar";
import { officeHourHolders } from "@/data/office-hours";
import { qrWhatsAppGroups } from "@/data/whatsapp";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Office Hours",
  description:
    "Book an office hour with the Ministry of Academic Affairs, or contact the Ministry by email or WhatsApp.",
};

export default function OfficeHoursPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Office hours"
        title="Talk to the Ministry"
        description="Book an office hour with a member of the Ministry, or contact us by email or WhatsApp. For a question about your own department, write to your Department Representative instead."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="General matters"
          title="Book an office hour"
          description="Choose a person below. Their available times are shown on the booking page."
        />

        {officeHourHolders.length === 0 ? (
          <div className="mt-8 rounded-lg border border-line-strong bg-white p-6 text-sm text-ink-soft">
            Nobody has scheduled office hours at the moment. Please contact the
            Ministry by email or WhatsApp below.
          </div>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {officeHourHolders.map((person) => (
              <li key={person.name}>
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <Avatar name={person.name} />
                      <div>
                        <h3 className="text-ink">{person.name}</h3>
                        <p className="text-sm font-semibold text-accent">{person.designation}</p>
                      </div>
                    </div>
                    <dl className="mt-5 space-y-2 text-sm">
                      <div className="flex gap-2">
                        <dt className="w-24 shrink-0 text-ink-faint">Department</dt>
                        <dd className="text-ink">{person.department}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="w-24 shrink-0 text-ink-faint">Timings</dt>
                        <dd className="text-ink">
                          {person.timings ?? "Shown when you book"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <a
                    href={person.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-between rounded border border-accent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    <span>{person.bookingLabel}</span>
                    <span aria-hidden>↗</span>
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-sm text-ink-soft">
          Only people with scheduled office hours are listed here. See the{" "}
          <Link href="/about" className="font-medium text-accent underline">
            About page
          </Link>{" "}
          for the whole team.
        </p>
      </section>

      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="Without a meeting"
            title="Contact the Ministry remotely"
            description="Write to us by email, or message the Ministry's WhatsApp group."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
                <p className="mt-1 text-sm text-ink-soft">
                  {qrWhatsAppGroups[0].name}. {qrWhatsAppGroups[0].purpose} Scan the QR code to join.
                </p>
              </div>
              <a
                href={qrWhatsAppGroups[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between rounded border border-accent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
              >
                <span>Open the QR code</span>
                <span aria-hidden>↗</span>
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-ink">Question about your own department?</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Department Representatives handle department matters. They are
              separate from the Ministry&apos;s office hours, email and WhatsApp.
            </p>
          </div>
          <Link
            href="/representatives"
            className="shrink-0 rounded border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Find your representative →
          </Link>
        </Card>
      </section>
    </div>
  );
}

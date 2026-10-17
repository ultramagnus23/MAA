import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading, Card } from "@/components/ui";
import DepartmentDirectory from "@/components/DepartmentDirectory";
import { qrWhatsAppGroups } from "@/data/whatsapp";

export const metadata: Metadata = {
  title: "Representatives",
  description:
    "Contact your Department Representative and join your department's WhatsApp group at Ashoka University.",
};

export default function RepresentativesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Department Representatives"
        title="Representatives and WhatsApp groups"
        description="For a question, issue or request about your own department, contact your Department Representative directly. Each department also has a WhatsApp group."
      />

      <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-l-4 border-l-accent">
            <p className="text-sm font-medium text-accent">Department matters</p>
            <p className="mt-2 text-lg font-semibold text-ink">Your Department Representative</p>
            <p className="mt-1 text-sm text-ink-soft">
              Write to the email for your department below. You do not need to go through the Ministry.
            </p>
          </Card>
          <Card>
            <p className="text-sm font-medium text-accent">General Ministry matters</p>
            <p className="mt-2 text-lg font-semibold text-ink">The Ministry</p>
            <p className="mt-1 text-sm text-ink-soft">
              Use office hours, email or WhatsApp on the{" "}
              <Link href="/office-hours" className="font-medium text-accent underline">
                Office Hours page
              </Link>
              .
            </p>
          </Card>
        </div>
      </section>

      <section id="whatsapp" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="By department"
          title="Find your department"
          description="Each department has a permanent representative email address and a subject WhatsApp group, shared by the Ministry and the Board of Representatives."
        />
        <div className="mt-8">
          <DepartmentDirectory />
        </div>
      </section>

      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="Other groups"
            title="Q&A groups"
            description="These groups are joined by scanning a QR code."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {qrWhatsAppGroups.map((g) => (
              <li key={g.name}>
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-ink">{g.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{g.purpose}</p>
                  </div>
                  <a
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-between rounded border border-accent px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    <span>Open the QR code</span>
                    <span aria-hidden>↗</span>
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-ink">Past representatives</h3>
            <p className="mt-1 text-sm text-ink-soft">
              The 2024–25 list of representatives is kept as a dated archive.
            </p>
          </div>
          <Link
            href="/representatives/archive"
            className="shrink-0 rounded border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            View the 2024–25 archive →
          </Link>
        </Card>
      </section>
    </div>
  );
}

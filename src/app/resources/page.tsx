import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import ResourcesArchive from "@/components/ResourcesArchive";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Academic policies, guides, directories and reports shared by the Ministry of Academic Affairs and verified by the Office of Academic Affairs.",
};

export default function ResourcesPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        eyebrow="Everything in one place"
        title="Resources"
        description="Policy documents, how-to guides, directories and reports for Ashoka students. Every resource here is verified by the Office of Academic Affairs (OAA). Handbooks are on their own page."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <dl className="mb-10 grid gap-x-8 gap-y-2 text-sm text-ink-soft sm:grid-cols-2">
          <div><dt className="inline font-semibold text-ink">Policy: </dt><dd className="inline">policy documents and the Ministry&apos;s mandates.</dd></div>
          <div><dt className="inline font-semibold text-ink">Guides: </dt><dd className="inline">step-by-step guidance, not policy.</dd></div>
          <div><dt className="inline font-semibold text-ink">Directories and Tools: </dt><dd className="inline">lists and tools such as the Faculty Finder.</dd></div>
          <div><dt className="inline font-semibold text-ink">Advocacy and Reports: </dt><dd className="inline">reports and proposals prepared by the Ministry.</dd></div>
        </dl>
        <ResourcesArchive />
      </section>
    </div>
  );
}

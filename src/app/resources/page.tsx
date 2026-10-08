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
        <ResourcesArchive />
      </section>
    </div>
  );
}

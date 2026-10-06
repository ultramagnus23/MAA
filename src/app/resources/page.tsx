import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import ResourcesArchive from "@/components/ResourcesArchive";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Official academic policies, thesis guides, pass/fail advisories, departmental handbooks, and directories maintained by the Ministry of Academic Affairs.",
};

export default function ResourcesPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        eyebrow="Everything in one place"
        title="Resources"
        description="Policy documents, handbooks, thesis guides and directories for Ashoka students, all maintained by the Ministry of Academic Affairs."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <ResourcesArchive />
      </section>
    </div>
  );
}

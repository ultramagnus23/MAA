import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import ResourcesArchive from "@/components/ResourcesArchive";

export const metadata: Metadata = {
  title: "Resources Archive",
  description:
    "Official academic policies, thesis guides, pass/fail advisories, departmental handbooks, and directories maintained by the Ministry of Academic Affairs.",
};

export default function ResourcesPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        number="02"
        eyebrow="Institutional Repository"
        title="The Academic Archive"
        italicTitle="Policies, handbooks & guides."
        description="The central working archive for Ashoka University students. Every policy document, handbook, thesis advisory, and departmental spreadsheet here traces directly to an official source."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <ResourcesArchive />
      </section>
    </div>
  );
}

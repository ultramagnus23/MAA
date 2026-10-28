import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import HandbooksDirectory from "@/components/HandbooksDirectory";

export const metadata: Metadata = { title: "Archived handbooks" };

export default function HandbooksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Archive"
        title="Archived handbooks"
        description="Department, student and batch handbooks, kept here for reference. They are archived and may be out of date. Choose a type below or search by name."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <HandbooksDirectory />
      </section>
    </div>
  );
}

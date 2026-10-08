import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import HandbooksDirectory from "@/components/HandbooksDirectory";

export const metadata: Metadata = { title: "Handbooks" };

export default function HandbooksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Handbooks"
        title="Department, student and batch handbooks"
        description="Official handbooks, shared by the Office of Academic Affairs and the departments. Choose a type below or search by name."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <HandbooksDirectory />
      </section>
    </div>
  );
}

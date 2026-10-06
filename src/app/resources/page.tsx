import type { Metadata } from "next";
import { PageHeader, SectionHeading, Tag } from "@/components/ui";
import {
  resources,
  resourceCategories,
  departmentHandbooks,
  studentHandbooks,
  largeHandbooksNotMirrored,
} from "@/data/resources";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Everything in one place"
        title="Resources"
        description="Policy documents, guides and directories maintained by the Ministry of Academic Affairs."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        {resourceCategories.map((category) => {
          const items = resources.filter((r) => r.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category} className="mb-14 last:mb-0">
              <SectionHeading title={category} />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded border border-line bg-paper p-5 transition-colors hover:border-accent"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-base text-ink">{resource.title}</p>
                      {resource.fileNote && <Tag>{resource.fileNote}</Tag>}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mb-14">
          <SectionHeading
            title="Department Handbooks"
            description="The official handbook of each department, archived by the Ministry."
          />
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {departmentHandbooks.map((h) => (
              <a
                key={h.url}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-line bg-paper px-4 py-3 text-sm text-ink hover:border-accent hover:text-accent"
              >
                {h.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            title="Student Handbooks"
            description="Handbooks that apply across programmes. A few very large batch-specific handbooks are not hosted on this site."
          />
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {studentHandbooks.map((h) => (
              <a
                key={h.url}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-line bg-paper px-4 py-3 text-sm text-ink hover:border-accent hover:text-accent"
              >
                {h.title}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-faint">
            Not hosted here due to file size:{" "}
            {largeHandbooksNotMirrored.join(", ")}. Email{" "}
            <a href={`mailto:${site.email}`} className="text-accent hover:underline">
              {site.email}
            </a>{" "}
            for a current link.
          </p>
        </div>
      </section>
    </div>
  );
}

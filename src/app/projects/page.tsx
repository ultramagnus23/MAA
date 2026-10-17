import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading, Card } from "@/components/ui";
import { projects, type ProjectStatus } from "@/data/projects";
import { monthlyReports } from "@/data/reports";

export const metadata: Metadata = {
  title: "Projects",
  description: "What the Ministry of Academic Affairs has done, is doing and plans to do, and its monthly transparency reports.",
};

const groups: { status: ProjectStatus; title: string; blurb: string }[] = [
  { status: "Ongoing", title: "Ongoing", blurb: "Work that is continuing." },
  { status: "Planned", title: "Planned", blurb: "Work that has not launched yet." },
  { status: "Published", title: "Completed and published", blurb: "Finished documents and tools you can open now." },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="What the Ministry is working on"
        description="Our projects, grouped by status, and our monthly transparency reports. Every project names the document it comes from."
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <nav aria-label="On this page" className="flex flex-wrap gap-2 text-sm">
          {groups.map((g) => (
            <a
              key={g.status}
              href={`#${g.status.toLowerCase()}`}
              className="rounded border border-line-strong px-3.5 py-1.5 text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              {g.title}
            </a>
          ))}
          <a
            href="#reports"
            className="rounded border border-line-strong px-3.5 py-1.5 text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            Monthly transparency reports
          </a>
        </nav>

        {groups.map((g) => {
          const items = projects.filter((p) => p.status === g.status);
          return (
            <div key={g.status} id={g.status.toLowerCase()} className="mt-14 scroll-mt-24">
              <SectionHeading title={g.title} description={g.blurb} />
              {items.length === 0 ? (
                <p className="mt-6 rounded-lg border border-line bg-white p-5 text-sm text-ink-soft">
                  No projects in this group at the moment.
                </p>
              ) : (
                <ul className="mt-6 grid gap-4 md:grid-cols-2">
                  {items.map((p) => (
                    <li key={p.name}>
                      <Card className="flex h-full flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-faint">
                            <span className="font-medium text-accent">{p.status}</span>
                            {p.period && <span>{p.period}</span>}
                            {p.department && <span>{p.department}</span>}
                          </div>
                          <h3 className="mt-2 text-ink">{p.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                        </div>
                        <div className="mt-5">
                          {p.links && (
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
                              {p.links.map((l) =>
                                l.url.startsWith("/") ? (
                                  <Link key={l.url} href={l.url} className="text-accent hover:underline">
                                    {l.label} →
                                  </Link>
                                ) : (
                                  <a
                                    key={l.url}
                                    href={l.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline"
                                  >
                                    {l.label} ↗
                                  </a>
                                )
                              )}
                            </div>
                          )}
                          <p className="mt-3 text-xs text-ink-faint">Source: {p.source}</p>
                        </div>
                      </Card>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </section>

      <section id="reports" className="scroll-mt-24 border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="Transparency"
            title="Monthly transparency reports"
            description="A report for each month, newest first. If a month is missing, no report has been published for it."
          />
          {monthlyReports.length === 0 ? (
            <p className="mt-6 rounded-lg border border-line-strong bg-white p-5 text-sm text-ink-soft">
              No monthly transparency reports have been published yet. They
              will appear here as soon as the first one is released.
            </p>
          ) : (
            <ul className="mt-6 space-y-3">
              {[...monthlyReports]
                .sort((a, b) => b.published.localeCompare(a.published))
                .map((r) => (
                  <li key={r.period}>
                    <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-ink">{r.period}</h3>
                        <p className="text-sm text-ink-faint">Published {formatDate(r.published)}</p>
                        <p className="mt-1 text-sm text-ink-soft">{r.summary}</p>
                      </div>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                      >
                        Read the report ↗
                      </a>
                    </Card>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

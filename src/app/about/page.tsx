import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading, Card } from "@/components/ui";
import Avatar from "@/components/Avatar";
import TeamGallery from "@/components/TeamGallery";
import {
  departments,
  departmentDescriptions,
  teamMembers,
  DEFAULT_DESIGNATION,
} from "@/data/team-members";
import { officeHourHolders } from "@/data/office-hours";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "What the Ministry of Academic Affairs is, what it does, and who is on the team.",
};

export default function AboutPage() {
  const hasOfficeHours = (name: string) => officeHourHolders.some((p) => p.name === name);

  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title="About the Ministry of Academic Affairs"
        description="We are the student body at Ashoka University that works to improve the academic experience of students."
      />

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <p className="max-w-3xl text-base leading-relaxed text-ink-soft">
          The Ministry supports students and academic societies across Ashoka.
          In our own words, our role &quot;is not to interfere but to
          facilitate&quot;. We help departments and societies get the
          resources they need, and we give students a direct line to the
          Office of Academic Affairs (OAA) when something in their academic
          experience is not working.
        </p>

        <div className="mt-12">
          <SectionHeading eyebrow="How things are verified" title="Verified by the OAA" />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Card>
              <p className="text-sm font-medium text-accent">Resources</p>
              <p className="mt-2 text-sm text-ink-soft">
                Every resource on this site is verified by the Office of Academic Affairs.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-accent">The Ministry</p>
              <p className="mt-2 text-sm text-ink-soft">
                The Ministry of Academic Affairs is itself recognised and verified by the Office of Academic Affairs.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-accent">Department matters</p>
              <p className="mt-2 text-sm text-ink-soft">
                Department Representatives sit on the Board of Representatives (BOR) and handle matters for their own department.
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Who to contact" title="Where should my query go?" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <p className="text-sm font-medium text-accent">General queries</p>
              <p className="mt-2 text-lg font-semibold text-ink">The Ministry</p>
              <p className="mt-1 text-sm text-ink-soft">Book an office hour, email us or message the WhatsApp group.</p>
              <Link href="/office-hours" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
                Office hours and contact →
              </Link>
            </Card>
            <Card>
              <p className="text-sm font-medium text-accent">Department queries</p>
              <p className="mt-2 text-lg font-semibold text-ink">Board of Representatives</p>
              <p className="mt-1 text-sm text-ink-soft">Write to your Department Representative directly.</p>
              <Link href="/representatives" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
                Find your representative →
              </Link>
            </Card>
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-ink">Academic societies</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            We keep an open channel and monthly meetings with the heads of
            academic societies, and we are often their first contact when
            they face scheduling clashes or need guidance on CASH and CADI
            processes. Societies with a concern about the Ministry itself
            can use the{" "}
            <a
              href="https://forms.gle/iUivfL9iovp1kJvo6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              grievance form
            </a>
            .
          </p>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="The team"
            title="Our departments and team"
            description="The Ministry has five departments. Everyone on the team is listed once, under their department."
          />

          <div className="mt-10 space-y-12">
            {departments.map((dept) => {
              const members = teamMembers.filter((m) => m.department === dept);
              return (
                <div key={dept}>
                  <h3 className="text-ink">
                    {dept === "Community Outreach and Marketing" ? (
                      <Link href="/marketing" className="hover:text-accent hover:underline">
                        {dept}
                      </Link>
                    ) : (
                      dept
                    )}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-ink-soft">{departmentDescriptions[dept]}</p>
                  {dept === "Community Outreach and Marketing" && (
                    <p className="mt-2 text-sm">
                      <Link href="/marketing" className="font-medium text-accent underline">
                        Explore the Marketing team&apos;s page →
                      </Link>
                    </p>
                  )}
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((m) => (
                      <li key={m.name}>
                        <Card className="flex h-full items-center gap-4">
                          <Avatar name={m.name} size={52} />
                          <div className="min-w-0">
                            <p className="font-semibold text-ink">{m.name}</p>
                            <p className="text-sm text-accent">{m.designation ?? DEFAULT_DESIGNATION}</p>
                            <p className="text-xs text-ink-faint">{m.department}</p>
                            {hasOfficeHours(m.name) && (
                              <Link
                                href="/office-hours"
                                className="mt-1 inline-block text-sm font-medium text-accent hover:underline"
                              >
                                Book office hours →
                              </Link>
                            )}
                          </div>
                        </Card>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <SectionHeading eyebrow="Photos" title="The Ministry together" />
        <div className="mt-8">
          <TeamGallery />
        </div>
        <p className="mt-10 text-sm text-ink-soft">
          Questions about the Ministry? Write to{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline">
            {site.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}

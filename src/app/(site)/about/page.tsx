import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading, Card } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About" };

const verticals = [
  {
    name: "Policy and Resources",
    text: "Writes and updates the academic policy document, how-to guides and handbooks, and keeps every resource on this site current.",
  },
  {
    name: "Support and Research",
    text: "Helps students with academic concerns and researches issues such as course caps, accommodations and the thesis process.",
  },
  {
    name: "Collaborations and Events",
    text: "Works with academic societies, organises the yearly Academic Societies Fair and Mixer, and keeps the events list up to date.",
  },
  {
    name: "Tech",
    text: "Builds and maintains this website and the Ministry's digital tools, including the Faculty Finder and the Assignment Tracker.",
  },
];

export default function AboutPage() {
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

        {/* Verification */}
        <div className="mt-12">
          <SectionHeading
            eyebrow="How things are verified"
            title="Verified by the OAA"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Card>
              <p className="text-sm font-medium text-accent">Resources</p>
              <p className="mt-2 text-sm text-ink-soft">
                Every resource on this site is verified by the Office of
                Academic Affairs.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-accent">The Ministry</p>
              <p className="mt-2 text-sm text-ink-soft">
                The Ministry of Academic Affairs is itself recognised and
                verified by the Office of Academic Affairs.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-accent">Department matters</p>
              <p className="mt-2 text-sm text-ink-soft">
                Department Representatives sit on the Board of
                Representatives (BOR) and handle matters for their own
                department.
              </p>
            </Card>
          </div>
        </div>

        {/* Who to contact */}
        <div className="mt-14">
          <SectionHeading eyebrow="Who to contact" title="Where should my query go?" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <p className="text-sm font-medium text-accent">General queries</p>
              <p className="mt-2 text-lg font-semibold text-ink">The Ministry</p>
              <p className="mt-1 text-sm text-ink-soft">
                Book an office hour, email us or message the WhatsApp group.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-accent">Department queries</p>
              <p className="mt-2 text-lg font-semibold text-ink">Board of Representatives</p>
              <p className="mt-1 text-sm text-ink-soft">
                Write to your Department Representative directly.
              </p>
            </Card>
          </div>
          <p className="mt-4 text-sm">
            <Link href="/representatives" className="font-medium text-accent hover:underline">
              See all contact options →
            </Link>
          </p>
        </div>

        {/* Verticals */}
        <div className="mt-14">
          <SectionHeading
            eyebrow="Our work"
            title="The Ministry's teams"
            description="The Ministry's work is divided into four verticals."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {verticals.map((v) => (
              <Card key={v.name}>
                <h3 className="text-ink">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Societies */}
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

          <h2 className="mt-10 text-ink">Records and resources</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            Our policy explainers, guides and reports are on the{" "}
            <Link href="/resources" className="text-accent underline">Resources</Link>{" "}
            page, and the department, student and batch handbooks are on the{" "}
            <Link href="/handbooks" className="text-accent underline">Handbooks</Link>{" "}
            page. If anything looks outdated or incorrect, please let us know.
          </p>

          <p className="mt-10 text-sm text-ink-soft">
            Questions about the Ministry? Write to{" "}
            <a href={`mailto:${site.email}`} className="text-accent underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

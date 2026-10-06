import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, Eyebrow } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About MAA"
        title="The work of the Ministry of Academic Affairs"
        description="The Ministry of Academic Affairs is a student-run body at Ashoka University dedicated to improving the academic experience of students."
       
      />

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div className="prose-content space-y-6 text-[15px] leading-relaxed text-ink-soft">
          <p>
            MAA is dedicated to supporting and empowering students and
            academic societies across Ashoka. In its own words, its role
            &quot;is not to interfere but to facilitate&quot; — helping
            departments and societies get the resources and institutional
            backing they need, and giving students a direct line to the
            Office of Academic Affairs (OAA) when something in the academic
            experience isn&apos;t working.
          </p>

          <h2 className="text-xl text-ink">Structure of the Ministry</h2>
          <p>
            MAA&apos;s work is organised across a few functional areas —
            policy and resources, support and research, and collaborations
            and events — which together produce the guides, policy
            documents, and directories on this site, run engagement with
            academic societies, and follow up on issues raised by students.
          </p>

          <h2 className="text-xl text-ink">Representation</h2>
          <p>
            Every department has a representative — reachable at a standing
            department email address regardless of who holds the role in a
            given year — who acts as the bridge between students and
            faculty on department-specific issues. Foundation Course (FC)
            representatives play the same role for Foundation Courses, and
            are expected to hold office hours at the start and end of each
            semester.
          </p>
          <p>
            A small number of MAA representatives also hold their own
            regular, bookable office hours for broader academic questions —
            see the{" "}
            <Link href="/representatives" className="text-accent hover:underline">
              Representatives page
            </Link>{" "}
            for who&apos;s currently holding them.
          </p>

          <h2 className="text-xl text-ink">Academic societies</h2>
          <p>
            MAA keeps an open channel and monthly touchpoints with academic
            society heads, runs the yearly Academic Societies Fair and
            Mixer, and is often the first point of contact when societies
            run into scheduling conflicts or need guidance on CASH/CADI
            processes. Societies with concerns about MAA itself can use the{" "}
            <a
              href="https://forms.gle/iUivfL9iovp1kJvo6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              grievance redressal form
            </a>
            .
          </p>

          <h2 className="text-xl text-ink">Records and resources</h2>
          <p>
            MAA has produced a real, growing archive of policy explainers,
            department handbooks, thesis and academic-integrity guides, and
            advocacy reports — all linked from{" "}
            <Link href="/resources" className="text-accent hover:underline">
              Resources
            </Link>
            . If any document on this site appears outdated or incorrect, please
            inform us so that it can be corrected.
          </p>
        </div>

        <Card className="mt-10">
          <Eyebrow>A note on accuracy</Eyebrow>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            This site only lists representatives, office hours, and events
            MAA can currently verify. Where our records are dated, such as the 2024–25 department representative roster, we state so clearly rather than presenting them as current. See the{" "}
            <Link href="/representatives/archive" className="text-accent hover:underline">
              archived roster
            </Link>{" "}
            for that history.
          </p>
        </Card>

        <p className="mt-10 text-sm text-ink-faint">
          For questions about the Ministry, or to report missing information, please write to{" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:underline">
            {site.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}

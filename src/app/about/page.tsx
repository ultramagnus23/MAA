import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, Eyebrow } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About MAA",
  description:
    "Mandate, structure, governance, and operating principles of the Ministry of Academic Affairs (MAA) at Ashoka University.",
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        number="03"
        eyebrow="Mandate & Governance"
        title="What the Ministry actually does"
        italicTitle="And how it works."
        description="MAA is the autonomous student-run body at Ashoka University focused on one mandate: ensuring academic governance, policy, and departmental representation reflect student needs."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Lead Quote */}
        <div className="border-l-2 border-accent pl-6 sm:pl-8">
          <blockquote className="font-serif-heading text-2xl sm:text-3xl font-light text-ink leading-snug">
            &ldquo;Our role is not to interfere, but to facilitate.&rdquo;
          </blockquote>
          <p className="font-mono-tag mt-3 text-xs uppercase tracking-wider text-ink-faint">
            Foundational Mandate of the Ministry of Academic Affairs
          </p>
        </div>

        {/* 4 Pillars of Operation */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Card className="flex flex-col justify-between p-7">
            <div>
              <Eyebrow number="01">Advocacy</Eyebrow>
              <h3 className="font-serif-heading mt-3 text-xl font-medium text-ink">
                Liaison with OAA &amp; Faculty
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                Giving students a direct channel to the Office of Academic
                Affairs (OAA) when coursework complications, grading disputes,
                or accommodation bottlenecks arise.
              </p>
            </div>
            <div className="mt-6 border-t border-line/60 pt-3">
              <span className="font-mono-tag text-[10px] text-ink-faint uppercase">
                INSTITUTIONAL MEDIATION
              </span>
            </div>
          </Card>

          <Card className="flex flex-col justify-between p-7">
            <div>
              <Eyebrow number="02">Representation</Eyebrow>
              <h3 className="font-serif-heading mt-3 text-xl font-medium text-ink">
                Two-Tier Departmental Model
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                Every department maintains a standing student representative
                inbox for departmental faculty matters. Foundation Course (FC)
                representatives hold dedicated office hours across core requirements.
              </p>
            </div>
            <div className="mt-6 border-t border-line/60 pt-3">
              <span className="font-mono-tag text-[10px] text-ink-faint uppercase">
                21 STANDING INBOXES
              </span>
            </div>
          </Card>

          <Card className="flex flex-col justify-between p-7">
            <div>
              <Eyebrow number="03">Societies</Eyebrow>
              <h3 className="font-serif-heading mt-3 text-xl font-medium text-ink">
                Academic Society Support
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                Monthly touchpoints with academic society heads, organizing the
                annual Academic Societies Fair and Mixer, and providing guidance
                on CASH/CADI administrative processes.
              </p>
            </div>
            <div className="mt-6 border-t border-line/60 pt-3">
              <span className="font-mono-tag text-[10px] text-ink-faint uppercase">
                SOCIETY FAIR &amp; MIXER
              </span>
            </div>
          </Card>

          <Card className="flex flex-col justify-between p-7">
            <div>
              <Eyebrow number="04">Archive</Eyebrow>
              <h3 className="font-serif-heading mt-3 text-xl font-medium text-ink">
                The Working Paper Trail
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                Authoring and archiving real academic resources: the master
                academic policy explainer, thesis how-to manuals, faculty
                directories, and peer-to-peer survival guides.
              </p>
            </div>
            <div className="mt-6 border-t border-line/60 pt-3">
              <span className="font-mono-tag text-[10px] text-ink-faint uppercase">
                46MB LIVING ARCHIVE
              </span>
            </div>
          </Card>
        </div>

        {/* Detailed Narrative */}
        <div className="mt-20 space-y-12 border-t border-line pt-16">
          <div>
            <span className="font-mono-tag text-xs text-accent uppercase tracking-wider">
              Governance Structure
            </span>
            <h2 className="font-serif-heading mt-2 text-2xl font-normal text-ink sm:text-3xl">
              How MAA is Organized
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
              MAA&apos;s working machinery is structured across three core functional
              portfolios: Policy &amp; Resources (authoring guides and maintaining
              regulations), Student Support &amp; Research (handling individual student
              cases and analyzing course caps data), and Collaborations &amp; Events
              (interfacing with academic societies and university bodies).
            </p>
          </div>

          <div>
            <span className="font-mono-tag text-xs text-accent uppercase tracking-wider">
              Student Grievances
            </span>
            <h2 className="font-serif-heading mt-2 text-2xl font-normal text-ink sm:text-3xl">
              Redressal &amp; Accountability
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
              Students facing discrepancies in TA grading, course allocation
              barriers, or procedural errors in Academic Integrity (AIV)
              hearings can contact representatives directly or use the{" "}
              <a
                href="https://forms.gle/iUivfL9iovp1kJvo6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline font-medium"
              >
                confidential grievance redressal form
              </a>
              . Cases are mediated directly with course instructors or escalated
              to the Dean of Academic Affairs.
            </p>
          </div>

          {/* Verification Pledge */}
          <div className="rounded-xs border border-line bg-paper-dim/60 p-8">
            <Eyebrow number="NOTE">Institutional Accuracy</Eyebrow>
            <h3 className="font-serif-heading mt-2 text-xl text-ink">
              Strict Verification Standard
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              This site strictly reflects verified records. Representatives,
              office hours, and links are only published if confirmed live
              within the current academic cycle. Where documents represent
              historical reference (such as the 2024–25 Board roster), they are
              transparently marked as archived.
            </p>
            <div className="mt-4">
              <Link
                href="/representatives/archive"
                className="text-xs font-medium text-accent hover:underline"
              >
                Explore the 2024–25 Historical Roster Archive →
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-ink-faint">
          <p>
            Questions regarding MAA governance or policies? Email{" "}
            <a href={`mailto:${site.email}`} className="text-accent underline">
              {site.email}
            </a>
          </p>
          <span className="font-mono-tag">SONIPAT, HARYANA</span>
        </div>
      </section>
    </div>
  );
}

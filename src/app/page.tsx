import Link from "next/link";
import {
  Eyebrow,
  SectionHeading,
  Tag,
  StatusDot,
} from "@/components/ui";
import { currentReps } from "@/data/representatives";
import { resources } from "@/data/resources";
import { site } from "@/data/site";
import { getEvents, splitUpcomingPast } from "@/lib/events";
import TeamGallery from "@/components/TeamGallery";

export default async function Home() {
  const { events } = await getEvents();
  const { upcoming } = splitUpcomingPast(events);

  // Key academic archive documents from real sources
  const featuredResources = [
    resources.find((r) => r.title.includes("2025–26")) || resources[0],
    resources.find((r) => r.title.includes("Pass/Fail")) || resources[3],
    resources.find((r) => r.title.includes("Academic Integrity")) || resources[4],
    resources.find((r) => r.title.includes("Undergraduate Thesis")) || resources[5],
    resources.find((r) => r.title.includes("Faculty Finder")) || resources[7],
    resources.find((r) => r.title.includes("BOR Annual Report")) || resources[11],
  ];

  const quickActions = [
    {
      code: "01",
      tag: "REPRESENTATION",
      title: "Who's my representative?",
      desc: "Find standing department emails and student liaisons across all 21 disciplines.",
      href: "/representatives",
      action: "Find representative",
    },
    {
      code: "02",
      tag: "OFFICE HOURS",
      title: "When are office hours?",
      desc: "Three active MAA representatives hold direct bookable Calendly slots this week.",
      href: "#office-hours",
      action: "Book a slot",
    },
    {
      code: "03",
      tag: "EVENTS",
      title: "What's happening this week?",
      desc: "Academic council meetings, society mixers, townhalls, and policy sessions.",
      href: "/events",
      action: "View schedule",
    },
    {
      code: "04",
      tag: "ARCHIVE",
      title: "Where's the policy document?",
      desc: "Official 2025–26 academic regulations, grading rubrics, thesis rules, and handbooks.",
      href: "/resources",
      action: "Open archive",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* =========================================================================
          01. HERO SECTION: Monumental Typographic Centerpiece & Asymmetric Grid
      ========================================================================= */}
      <section className="relative border-b border-line bg-paper">
        {/* Subtle institutional micro-strip */}
        <div className="border-b border-line/70 bg-paper-dim/40 px-5 py-2.5 sm:px-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between text-[11px] font-mono-tag">
            <span className="text-ink-faint">
              [ ASHOKA UNIVERSITY · STUDENT GOVERNMENT BODY ]
            </span>
            <span className="hidden sm:inline text-accent font-medium">
              ACADEMIC YEAR 2025–26 · WORKING ARCHIVE
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            {/* Left Monumental Column (Cols 1-7) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <Eyebrow number="01">{site.university}</Eyebrow>
              </div>

              {/* Mammoth visual centerpiece */}
              <h1 className="font-serif-heading mt-4 text-4xl font-normal leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[68px]">
                <span className="block uppercase tracking-tight font-medium text-ink">
                  Ministry of
                </span>
                <span className="block italic font-light text-accent">
                  Academic Affairs
                </span>
              </h1>

              {/* Refined statement */}
              <p className="font-serif-heading mt-6 text-xl sm:text-2xl font-light leading-snug text-ink sm:leading-relaxed">
                &ldquo;Your academic voice at Ashoka.&rdquo;
              </p>

              {/* Subordinated descriptive copy */}
              <p className="mt-4 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink-soft">
                MAA is the autonomous student-run body representing all academic
                disciplines at Ashoka, providing direct advocacy with the
                Office of Academic Affairs (OAA), coordinating 21 departmental
                societies, and maintaining the university&apos;s verified
                academic archive.
              </p>

              {/* Highly polished CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/representatives"
                  className="group inline-flex items-center gap-2 rounded-xs bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-paper transition-all duration-200 hover:bg-accent"
                >
                  <span>Find your representative</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/resources"
                  className="group inline-flex items-center gap-2 rounded-xs border border-line-strong bg-paper px-6 py-3.5 text-sm font-medium tracking-wide text-ink transition-all duration-200 hover:border-accent hover:bg-paper-dim hover:text-accent"
                >
                  <span>Browse academic archive</span>
                  <span className="font-mono-tag text-[10px] text-ink-faint group-hover:text-accent">
                    [46+ DOCS]
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual Tension & Live Dispatch Column (Cols 8-12) */}
            <div className="lg:col-span-5">
              <div className="rounded-xs border border-line bg-paper-dim/60 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-2">
                    <StatusDot active={true} />
                    <span className="font-mono-tag text-xs uppercase tracking-wider text-ink font-medium">
                      Live Student Dispatch
                    </span>
                  </div>
                  <span className="font-mono-tag text-[10px] text-accent uppercase font-medium">
                    Confirmed Active
                  </span>
                </div>

                <div className="mt-5 space-y-3.5">
                  <p className="text-xs leading-relaxed text-ink-soft">
                    Book one-on-one advising directly with current
                    representatives without email latency:
                  </p>

                  <div className="space-y-2.5">
                    {currentReps.map((rep) => (
                      <a
                        key={rep.name}
                        href={rep.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xs border border-line bg-paper p-3 transition-all hover:border-accent hover:bg-paper-dim"
                      >
                        <div>
                          <p className="font-serif-heading text-sm font-medium text-ink group-hover:text-accent">
                            {rep.name}
                          </p>
                          <p className="text-[11px] text-ink-faint">
                            {rep.role} · UG&apos;24
                          </p>
                        </div>
                        <span className="font-mono-tag text-[11px] text-accent transition-transform group-hover:translate-x-0.5">
                          Book slot ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-line pt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-ink-soft">
                      Departmental inboxes:
                    </span>
                    <span className="font-mono-tag font-medium text-ink">
                      21 standing emails
                    </span>
                  </div>
                  <Link
                    href="/representatives"
                    className="mt-2 block text-xs font-medium text-accent hover:underline"
                  >
                    View all 21 department contacts →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. QUICK ACTIONS: Student Command Center (01 - 04)
      ========================================================================= */}
      <section className="border-b border-line bg-paper-dim/40">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono-tag text-xs uppercase tracking-widest text-ink-faint">
              Student Command Center · Immediate Wayfinding
            </span>
            <span className="font-mono-tag text-[11px] text-ink-faint">
              0.5s Scannability
            </span>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((item) => (
              <Link
                key={item.code}
                href={item.href}
                className="group relative flex flex-col justify-between border-r border-b border-line bg-paper p-6 transition-all duration-300 hover:bg-aubergine hover:text-aubergine-text"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tag text-xs font-medium text-accent group-hover:text-accent-soft">
                      [{item.code}]
                    </span>
                    <span className="font-mono-tag text-[10px] tracking-wider text-ink-faint uppercase group-hover:text-aubergine-muted">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif-heading mt-3 text-lg font-medium leading-snug text-ink group-hover:text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft group-hover:text-aubergine-muted">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-3 group-hover:border-aubergine-border">
                  <span className="font-mono-tag text-[11px] text-ink-faint group-hover:text-aubergine-muted">
                    {item.action}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-sm font-semibold text-accent transition-transform duration-200 group-hover:translate-x-1 group-hover:text-paper"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. THE PEOPLE BEHIND MAA: Major Team Photography Composition
      ========================================================================= */}
      <section className="border-b border-line bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              number="03"
              eyebrow="The People Behind MAA"
              title="Academic representation is ultimately about people."
              italicTitle="Meet the student team."
              description="Connecting coursework, department faculties, and student aspirations across Ashoka University's undergraduate and post-graduate cohorts."
            />
            <div className="shrink-0 text-left md:text-right">
              <span className="font-mono-tag text-xs text-ink-faint">
                12 Archival Photographs
              </span>
              <p className="font-mono-tag text-[11px] text-accent">
                Campus Working Sessions
              </p>
            </div>
          </div>

          <div className="mt-12">
            <TeamGallery />
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. OFFICE HOURS: Premium Editorial Schedule & Functional Interface
      ========================================================================= */}
      <section id="office-hours" className="border-b border-line bg-paper-dim/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left information lockup (Cols 1-4) */}
            <div className="lg:col-span-4">
              <SectionHeading
                number="04"
                eyebrow="Direct Consultation"
                title="Current Office Hours"
                italicTitle="Speak with a rep."
                description="Skip back-and-forth email scheduling. Three representatives hold confirmed, active office hours on Calendly for course advising, general grievances, and policy guidance."
              />

              <div className="mt-8 space-y-4 rounded-xs border border-line bg-paper p-5">
                <div className="flex items-center gap-2">
                  <StatusDot active={true} />
                  <span className="font-mono-tag text-xs uppercase tracking-wider text-ink font-medium">
                    Live Booking System
                  </span>
                </div>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Sessions are held online via Google Meet or in-person on campus.
                  All discussions remain confidential within the Ministry.
                </p>
                <div className="border-t border-line pt-3">
                  <p className="text-xs text-ink-faint">
                    Looking for a specific department instead?
                  </p>
                  <Link
                    href="/representatives"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    <span>Browse 21 Department Inboxes</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right schedule interface (Cols 5-12) */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-xs border border-line bg-paper">
                <div className="hidden border-b border-line bg-paper-dim px-6 py-3 sm:grid sm:grid-cols-12 text-xs font-mono-tag text-ink-faint uppercase tracking-wider">
                  <span className="sm:col-span-5">Representative</span>
                  <span className="sm:col-span-4">Focus & Format</span>
                  <span className="sm:col-span-3 text-right">Direct Action</span>
                </div>

                <div className="divide-y divide-line">
                  {currentReps.map((rep) => (
                    <div
                      key={rep.name}
                      className="group flex flex-col justify-between gap-4 p-6 sm:grid sm:grid-cols-12 sm:items-center sm:gap-2 transition-colors hover:bg-paper-dim/40"
                    >
                      <div className="sm:col-span-5">
                        <div className="flex items-center gap-2">
                          <StatusDot active={true} />
                          <h4 className="font-serif-heading text-lg font-medium text-ink group-hover:text-accent">
                            {rep.name}
                          </h4>
                        </div>
                        <p className="mt-0.5 text-xs text-ink-soft">
                          {rep.role} · Ashoka UG&apos;24
                        </p>
                      </div>

                      <div className="sm:col-span-4 text-xs text-ink-soft">
                        <p className="font-medium text-ink">
                          Online &amp; In-Person
                        </p>
                        <p className="text-ink-faint">
                          Coursework, policy &amp; student advising
                        </p>
                      </div>

                      <div className="sm:col-span-3 sm:text-right">
                        <a
                          href={rep.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xs border border-line-strong bg-paper px-4 py-2 text-xs font-medium text-ink transition-all hover:border-accent hover:bg-accent hover:text-paper"
                        >
                          <span>{rep.bookingLabel}</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-line bg-paper-dim/40 px-6 py-4">
                  <p className="text-xs text-ink-faint">
                    Note: Department representatives also hold semester office
                    hours announced through departmental WhatsApp channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. WHAT'S HAPPENING: Editorial Event Index
      ========================================================================= */}
      <section className="border-b border-line bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              number="05"
              eyebrow="Academic Agenda"
              title="What's Happening"
              italicTitle="Events & Sessions."
              description="Official academic council townhalls, inter-departmental society mixers, and policy forums."
            />
            <Link
              href="/events"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              <span>View full events calendar</span>
              <span>→</span>
            </Link>
          </div>

          <div className="mt-12">
            {upcoming.length > 0 ? (
              <div className="divide-y divide-line border-t border-b border-line">
                {upcoming.slice(0, 3).map((event) => {
                  const d = new Date(event.date);
                  const day = d.getDate();
                  const month = d.toLocaleDateString("en-IN", {
                    month: "short",
                  }).toUpperCase();

                  return (
                    <div
                      key={`${event.title}-${event.date}`}
                      className="group flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center transition-colors hover:bg-paper-dim/30"
                    >
                      <div className="flex items-start gap-6 sm:items-center">
                        {/* Large Date Visual Anchor */}
                        <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xs border border-line bg-paper text-center">
                          <span className="font-mono-tag text-[10px] font-medium text-accent uppercase">
                            {month}
                          </span>
                          <span className="font-serif-heading text-2xl font-light text-ink">
                            {day}
                          </span>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Tag variant="accent">{event.category}</Tag>
                            {event.time && (
                              <span className="font-mono-tag text-xs text-ink-faint">
                                {event.time}
                              </span>
                            )}
                            {event.location && (
                              <span className="font-mono-tag text-xs text-ink-faint">
                                · {event.location}
                              </span>
                            )}
                          </div>
                          <h4 className="font-serif-heading mt-1.5 text-lg font-medium text-ink group-hover:text-accent">
                            {event.title}
                          </h4>
                          {event.description && (
                            <p className="mt-1 text-xs text-ink-soft max-w-xl">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 sm:text-right">
                        <Link
                          href={event.link || "/events"}
                          className="inline-flex items-center gap-1 text-xs font-medium text-ink hover:text-accent"
                        >
                          <span>Event details</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* High-End Editorial Bulletin when event seed is awaiting live sheet sync */
              <div className="rounded-xs border border-line bg-paper-dim/30 p-8 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-8">
                    <span className="font-mono-tag text-xs text-accent uppercase tracking-widest">
                      Notice · Academic Session in Progress
                    </span>
                    <h3 className="font-serif-heading mt-2 text-2xl font-normal text-ink">
                      Active Cycle &amp; Society Programming
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft max-w-xl">
                      Events for the current academic cycle are coordinated
                      directly with Department Representatives and published
                      live. Upcoming touchpoints include the Academic
                      Societies Mixer, Pre-Registration Townhall, and Thesis
                      Milestone Reviews.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs">
                      <Link
                        href="/events"
                        className="font-medium text-accent hover:underline"
                      >
                        Check complete schedule archive →
                      </Link>
                      <span className="text-line-strong">•</span>
                      <Link
                        href="/events/add"
                        className="text-ink-soft hover:text-ink"
                      >
                        Rep guide to posting events →
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-line pt-6 lg:pt-0 lg:pl-8">
                    <p className="font-mono-tag text-[11px] uppercase tracking-wider text-ink-faint">
                      Semester Milestones
                    </p>
                    <ul className="mt-3 space-y-2.5 text-xs text-ink-soft">
                      <li className="flex items-center justify-between">
                        <span>Course Add/Drop Deadline</span>
                        <span className="font-mono-tag text-ink font-medium">Verified OAA</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Academic Societies Mixer</span>
                        <span className="font-mono-tag text-ink font-medium">MAA Annual</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Thesis Progress Submissions</span>
                        <span className="font-mono-tag text-ink font-medium">UG&apos;25 / ASP</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          06. ACADEMIC RESOURCES: Institutional Archive Interface
      ========================================================================= */}
      <section className="border-b border-line bg-paper-dim/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              number="06"
              eyebrow="Institutional Repository"
              title="The Academic Archive"
              italicTitle="Verified documents & guides."
              description="Policy circulars, student-authored survival guides, and departmental directories MAA maintains for the Ashoka community."
            />
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              <span>Explore all resources &amp; handbooks</span>
              <span>→</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource, i) => {
              const refCode = `REF-0${i + 1}`;
              return (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xs border border-line bg-paper p-6 transition-all duration-300 hover:border-accent hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tag text-[10px] text-accent uppercase font-medium">
                        {refCode} · {resource.category}
                      </span>
                      {resource.fileNote && (
                        <Tag variant="dim">{resource.fileNote}</Tag>
                      )}
                    </div>
                    <h3 className="font-serif-heading mt-3 text-lg font-medium leading-snug text-ink group-hover:text-accent">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft line-clamp-3">
                      {resource.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-3">
                    <span className="font-mono-tag text-[11px] text-ink-faint">
                      Verified Document
                    </span>
                    <span className="font-mono-tag text-[11px] font-medium text-accent transition-transform duration-200 group-hover:translate-x-0.5">
                      Open Document ↗
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          07. ABOUT MAA: Mandate, Identity, and Verified Statistics Strip
      ========================================================================= */}
      <section className="border-b border-line bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow number="07">Identity &amp; Governance</Eyebrow>
            <blockquote className="font-serif-heading mt-4 text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-ink">
              &ldquo;Academic representation should be accessible, transparent,
              and grounded in student reality.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-ink-soft">
              In its foundational mandate, MAA&apos;s role is &ldquo;not to
              interfere but to facilitate&rdquo;, bridging communication
              between students, department heads, and university leadership,
              safeguarding rights under the academic integrity code, and
              ensuring every discipline has an advocate.
            </p>
          </div>

          {/* Real Statistics Strip from Verified Repository Data */}
          <div className="mt-16 border-t border-b border-line py-10">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6 text-center">
              <div>
                <p className="font-serif-heading text-4xl sm:text-5xl font-light text-ink">
                  21
                </p>
                <p className="font-mono-tag mt-2 text-[11px] uppercase tracking-wider text-ink-faint">
                  Departments Represented
                </p>
              </div>
              <div>
                <p className="font-serif-heading text-4xl sm:text-5xl font-light text-accent">
                  03
                </p>
                <p className="font-mono-tag mt-2 text-[11px] uppercase tracking-wider text-ink-faint">
                  Active Office Hour Slots
                </p>
              </div>
              <div>
                <p className="font-serif-heading text-4xl sm:text-5xl font-light text-ink">
                  20+
                </p>
                <p className="font-mono-tag mt-2 text-[11px] uppercase tracking-wider text-ink-faint">
                  Official Handbooks &amp; Guides
                </p>
              </div>
              <div>
                <p className="font-serif-heading text-4xl sm:text-5xl font-light text-ink">
                  100%
                </p>
                <p className="font-mono-tag mt-2 text-[11px] uppercase tracking-wider text-ink-faint">
                  Student-Run Autonomous Body
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08. DARK PURPLE FEATURE SECTION: Signature Aubergine Visual Signature
      ========================================================================= */}
      <section className="bg-aubergine text-aubergine-text py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono-tag text-xs uppercase tracking-widest text-aubergine-muted">
                  [ 08 ] Student Advocacy Desk
                </span>
              </div>

              <h2 className="font-serif-heading mt-4 text-3xl font-light sm:text-5xl lg:text-6xl text-paper tracking-tight leading-[1.1]">
                Have a question about academics?
              </h2>

              <p className="font-serif-heading mt-4 text-xl sm:text-2xl text-aubergine-muted font-light italic">
                &ldquo;Your academic voice matters.&rdquo;
              </p>

              <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-aubergine-muted/90">
                Whether you need clarification on add/drop deadlines, want to
                appeal a grading decision, require advice on thesis registration,
                or need mediation with your department head, MAA is here to
                support you every step of the way.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/representatives"
                  className="group inline-flex items-center gap-2 rounded-xs bg-paper px-6 py-3.5 text-sm font-medium tracking-wide text-ink transition-all hover:bg-paper-dim"
                >
                  <span>Find your representative</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 rounded-xs border border-aubergine-border bg-aubergine-surface px-6 py-3.5 text-sm font-medium tracking-wide text-aubergine-text transition-all hover:border-accent hover:text-paper"
                >
                  <span>Email the Ministry</span>
                  <span className="font-mono-tag text-[10px] text-aubergine-muted">
                    academicaffairs.ministry@ashoka.edu.in
                  </span>
                </a>
              </div>
            </div>

            {/* Right quick escalation box */}
            <div className="lg:col-span-4">
              <div className="rounded-xs border border-aubergine-border bg-aubergine-surface/90 p-6 sm:p-7">
                <p className="font-mono-tag text-xs uppercase tracking-wider text-accent font-medium">
                  Confidential Escalation
                </p>
                <h4 className="font-serif-heading mt-2 text-lg text-paper font-normal">
                  Grievance Redressal
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-aubergine-muted">
                  Encountering an issue with coursework, TA allocation, or
                  academic accommodations? Submit directly to MAA&apos;s
                  standing grievance channel.
                </p>
                <a
                  href="https://forms.gle/iUivfL9iovp1kJvo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-between rounded-xs border border-aubergine-border bg-aubergine px-4 py-2.5 text-xs text-paper transition-colors hover:border-accent"
                >
                  <span>Open Grievance Form</span>
                  <span>↗</span>
                </a>

                <div className="mt-5 border-t border-aubergine-border pt-4">
                  <div className="flex items-center justify-between text-[11px] font-mono-tag text-aubergine-muted">
                    <span>Active Office Hours</span>
                    <span className="text-paper">3 Representatives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


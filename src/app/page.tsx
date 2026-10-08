import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SectionHeading, Tag } from "@/components/ui";
import TeamGallery from "@/components/TeamGallery";
import HelpFinder, { type HelpTopic } from "@/components/HelpFinder";
import { currentReps } from "@/data/representatives";
import { resources } from "@/data/resources";
import { site } from "@/data/site";
import { getEvents, splitUpcomingPast } from "@/lib/events";

export default async function Home() {
  const { events } = await getEvents();
  const { upcoming } = splitUpcomingPast(events);
  const featuredResources = resources.slice(0, 6);

  const link = (title: string) => resources.find((r) => r.title === title)?.url ?? "/resources";
  const helpTopics: HelpTopic[] = [
    {
      id: "department",
      label: "A department matter",
      answer: "Questions about your own department go straight to your Department Representative, not through the Ministry.",
      action: "Find your Department Representative",
      href: "/representatives#departments",
    },
    {
      id: "policy",
      label: "Academic policy",
      answer: "The Academic Policy Document covers add/drop, pass/fail, audit, incompletes, retakes and more.",
      action: "Open the policy document",
      href: link("MAA General Academic Policy Document (2025–26)"),
      external: true,
    },
    {
      id: "thesis",
      label: "My thesis",
      answer: "The Undergraduate Thesis How-To Guide explains the thesis process step by step.",
      action: "Open the thesis guide",
      href: link("Undergraduate Thesis How-To Guide"),
      external: true,
    },
    {
      id: "handbook",
      label: "A handbook",
      answer: "Department, student and batch handbooks are all on one page.",
      action: "Go to handbooks",
      href: "/handbooks",
    },
    {
      id: "else",
      label: "Something else",
      answer: "For any other matter, speak to the Ministry through an office hour, by email or on WhatsApp.",
      action: "See how to reach the Ministry",
      href: "/representatives#core-team",
    },
  ];

  const quickQuestions = [
    { q: "Who do I contact for my department?", href: "/representatives#departments" },
    { q: "When are office hours held?", href: "#office-hours" },
    { q: "What is happening this week?", href: "/events" },
    { q: "Where can I find the policy document?", href: "/resources" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow>{site.university}</Eyebrow>
            <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-ink sm:text-6xl">
              Ministry of Academic Affairs
            </h1>
            <p className="mt-6 text-xl font-medium text-ink">Your academic voice at Ashoka.</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              We are the student body that represents every academic discipline
              at Ashoka. We take student concerns to the Office of Academic
              Affairs, work with academic societies, and keep the
              university&apos;s academic policies, handbooks and guides in one
              place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/representatives"
                className="rounded bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
              >
                Reach the Ministry →
              </Link>
              <Link
                href="/resources"
                className="rounded border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
              >
                Browse resources
              </Link>
            </div>
          </div>

          <HelpFinder topics={helpTopics} />
        </div>
      </section>

      {/* Quick questions */}
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickQuestions.map((item) => (
              <Link
                key={item.q}
                href={item.href}
                className="group flex items-center justify-between rounded border border-line bg-white px-4 py-4 text-sm transition-colors hover:border-accent"
              >
                <span className="font-medium text-ink">{item.q}</span>
                <span
                  aria-hidden
                  className="text-accent transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Office hours */}
      <section id="office-hours" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Talk to someone"
          title="Current office hours"
          description="Three representatives currently hold office hours that can be booked online."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {currentReps.map((rep) => (
            <div
              key={rep.name}
              className="flex flex-col justify-between rounded-lg border border-line border-t-4 border-t-accent bg-white p-5"
            >
              <div>
                <p className="text-lg font-semibold text-ink">{rep.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{rep.role}</p>
              </div>
              <a
                href={rep.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {rep.bookingLabel} →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Looking for your department&apos;s representative?{" "}
          <Link href="/representatives" className="font-medium text-accent underline">
            See department contacts
          </Link>
          .
        </p>
      </section>

      {/* Events */}
      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="What is on" title="Upcoming events" />
            <Link href="/events" className="text-sm font-medium text-accent hover:underline">
              View all events →
            </Link>
          </div>
          <div className="mt-8">
            {upcoming.length === 0 ? (
              <div className="rounded-lg border border-line-strong bg-white p-5 text-sm text-ink-soft">
                There are no upcoming events at present. Please check the{" "}
                <Link href="/events" className="font-medium text-accent hover:underline">
                  events page
                </Link>{" "}
                for updates, or write to us if you are organising an event that should be listed.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.slice(0, 3).map((event) => (
                  <div key={`${event.title}-${event.date}`} className="rounded-lg border border-line-strong bg-white p-5">
                    <Tag>{event.category}</Tag>
                    <p className="mt-3 text-lg font-semibold text-ink">{event.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {new Date(event.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })}
                      {event.time ? ` · ${event.time}` : ""}
                      {event.location ? ` · ${event.location}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Everything in one place"
            title="Resources and quick links"
            description="Policy documents, guides and directories maintained by the Ministry."
          />
          <Link href="/resources" className="text-sm font-medium text-accent hover:underline">
            All resources →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-line bg-white p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-base font-semibold text-ink">{resource.title}</p>
                {resource.fileNote && <Tag>{resource.fileNote}</Tag>}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{resource.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeading
            eyebrow="The team"
            title="Meet the Ministry"
            description="The students who run the Ministry of Academic Affairs."
          />
          <div className="mt-10">
            <TeamGallery />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">
            Whom should I approach with an academic concern?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
            For questions about a particular course, please begin with your
            department&apos;s representative. For matters handled by the
            Ministry directly, such as policy, thesis guidance and academic
            integrity, write to us.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/representatives"
              className="rounded border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
            >
              Find your department contact
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
            >
              Email {site.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

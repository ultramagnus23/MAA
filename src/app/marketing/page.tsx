import type { Metadata } from "next";
import Link from "next/link";
import MarketingProfiles, { Parallax, Reveal, ShareBar } from "@/components/MarketingFx";
import { campaigns } from "@/data/marketing";

export const metadata: Metadata = {
  title: "Community Outreach and Marketing",
  description: "Meet the Community Outreach and Marketing department of the Ministry of Academic Affairs.",
};

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 22" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M3 13 C 34 2, 54 23, 86 11 S 148 2, 180 13 S 246 23, 317 8"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Burst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon
        points="50,2 61,32 92,24 71,49 98,67 66,70 64,98 46,73 20,92 28,62 3,45 34,38"
        fill="currentColor"
        stroke="#1d1423"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none" aria-hidden="true">
      <path d="M6 12 C 40 6, 80 20, 100 58" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M78 54 L102 62 L104 36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MarketingPage() {
  return (
    <div className="overflow-x-clip">
      {/* Hero: the one loud page on the site */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Parallax speed={0.1} className="pointer-events-none absolute inset-0 -z-10">
          <Burst className="absolute -right-4 top-8 h-24 w-24 rotate-12 text-gold sm:right-[26%] sm:h-28 sm:w-28" />
          <Burst className="absolute bottom-6 right-6 hidden h-20 w-20 -rotate-12 text-rose sm:block" />
          <span className="absolute right-[12%] top-12 h-5 w-5 rounded-full bg-rose" />
          <span className="absolute right-[18%] top-24 h-3 w-3 rounded-full bg-gold" />
          <span className="absolute left-[45%] top-8 h-2.5 w-2.5 rounded-full bg-white/70" />
          <span className="absolute bottom-16 left-[8%] h-4 w-4 rounded-full bg-rose" />
        </Parallax>

        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="inline-block -rotate-2 rounded border-2 border-white px-3 py-1 text-sm font-semibold">
            Ministry of Academic Affairs
          </p>
          <h1 className="mt-6 max-w-3xl font-bold text-white">Community Outreach and Marketing</h1>
          <Squiggle className="mt-2 h-4 w-64 text-gold sm:w-96" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            This department shares the Ministry&apos;s work with students
            through social media, campaigns and event promotion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#team"
              className="rounded border-2 border-white bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--color-gold)] transition-transform hover:-translate-y-0.5"
            >
              Meet the team
            </a>
            <a
              href="#work"
              className="rounded border-2 border-white px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              See the work
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="flex items-end gap-4">
            <div>
              <p className="text-sm font-semibold text-accent">The team</p>
              <h2 className="mt-1 text-ink">Two people, one department</h2>
            </div>
            <Arrow className="hidden h-12 w-20 -rotate-12 text-accent sm:block" />
          </div>
        </Reveal>
        <div className="mt-10">
          <Reveal>
            <MarketingProfiles />
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24 border-y-2 border-ink bg-gold/25">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-accent">Campaigns and creative work</p>
            <h2 className="mt-1 text-ink">The work</h2>
          </Reveal>
          {campaigns.length === 0 ? (
            <Reveal className="mt-8">
              <div className="max-w-xl -rotate-1 rounded border-2 border-dashed border-ink bg-white p-6 text-sm text-ink-soft">
                Campaigns, event promotions and creative work will be shown
                here. None have been added yet.
              </div>
            </Reveal>
          ) : (
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {campaigns.map((c, i) => (
                <li key={c.title}>
                  <Reveal>
                    <article
                      className={`rounded border-2 border-ink bg-white p-5 shadow-[5px_5px_0_0_var(--color-ink)] ${
                        i % 2 ? "rotate-1" : "-rotate-1"
                      }`}
                    >
                      <h3 className="text-ink">{c.title}</h3>
                      {c.date && <p className="text-sm text-ink-faint">{c.date}</p>}
                      <p className="mt-2 text-sm text-ink-soft">{c.description}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        {c.url && (
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-accent hover:underline"
                          >
                            Open ↗
                          </a>
                        )}
                        <ShareBar title={c.title} anchor="work" />
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Share */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-ink">Pass it on</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-soft">
            Share this page with a friend. On phones this opens your share
            menu. On computers it copies the link.
          </p>
          <div className="mt-5">
            <ShareBar title="Community Outreach and Marketing, Ministry of Academic Affairs" />
          </div>
          <p className="mt-10 text-sm">
            <Link href="/about#team" className="font-medium text-accent hover:underline">
              See the full Ministry team →
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  );
}

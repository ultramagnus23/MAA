import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim/80 text-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Masthead column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={56} height={56} className="h-14 w-14" />
              <div className="leading-tight">
                <p className="text-lg font-semibold text-ink">{site.name}</p>
                <p className="text-sm text-ink-soft">{site.university}</p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              The student body for academic affairs at Ashoka University. We
              represent departments, support students with academic concerns,
              and maintain the university&apos;s academic resources.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <p className="text-xs text-ink-faint">
              Pages
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
                  >
                    <span className="text-ink-faint transition-transform group-hover:translate-x-0.5">
                      ↳
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/representatives/archive"
                  className="group inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
                >
                  <span className="text-ink-faint transition-transform group-hover:translate-x-0.5">
                    ↳
                  </span>
                  <span>2024–25 Roster Archive</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Resources */}
          <div className="lg:col-span-3">
            <p className="text-xs text-ink-faint">
              Core Documents
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>
                <a
                  href="/resources/MAA General Academic Policy Document 2025-26_.docx"
                  className="hover:text-accent"
                >
                  Academic Policy 2025–26 <span className="text-[10px] text-ink-faint">[DOCX]</span>
                </a>
              </li>
              <li>
                <a
                  href="/resources/Academic Integrity How-To Guide_.docx"
                  className="hover:text-accent"
                >
                  Academic Integrity Guide <span className="text-[10px] text-ink-faint">[DOCX]</span>
                </a>
              </li>
              <li>
                <a
                  href="/resources/Undergraduate Thesis How-To Guide.docx"
                  className="hover:text-accent"
                >
                  Thesis How-To Guide <span className="text-[10px] text-ink-faint">[DOCX]</span>
                </a>
              </li>
              <li>
                <a
                  href="/resources/MAA P_F Crisis Guide.docx"
                  className="hover:text-accent"
                >
                  Pass/Fail Crisis Guide <span className="text-[10px] text-ink-faint">[DOCX]</span>
                </a>
              </li>
              <li>
                <a
                  href="/resources/MAA's Faculty Finder (updated).xlsx"
                  className="hover:text-accent"
                >
                  Faculty Directory <span className="text-[10px] text-ink-faint">[XLSX]</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-2">
            <p className="text-xs text-ink-faint">
              Direct Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-xs text-accent hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent"
                >
                  Linktree Portal ↗
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/iUivfL9iovp1kJvo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent"
                >
                  Grievance Form ↗
                </a>
              </li>
              <li>
                <Link
                  href="/representatives#office-hours"
                  className="inline-flex items-center gap-1 text-ink font-medium hover:text-accent"
                >
                  Book Office Hours →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-line pt-8">
          <div className="flex flex-col gap-4 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
            <p>
              Maintained by and for Ashoka University students. Not an official
              administrative organ of the Office of Academic Affairs (OAA).
            </p>
            <p className="text-[11px]">
              Plot 2, Rajiv Gandhi Education City, Sonipat, Haryana 131029
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


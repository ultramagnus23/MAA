import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-serif-heading text-base font-medium text-ink">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{site.university}</p>
            <p className="mt-3 text-sm text-ink-soft">{site.tagline}</p>
          </div>

          <div>
            <p className="font-mono-tag text-xs uppercase text-ink-faint">Find your way</p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-tag text-xs uppercase text-ink-faint">Reach us</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  linktr.ee/acadaffairs.ministry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs text-ink-faint">
          Built by and for Ashoka students. If something here is out of date, tell us at{" "}
          <a href={`mailto:${site.email}`} className="underline hover:text-accent">
            {site.email}
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

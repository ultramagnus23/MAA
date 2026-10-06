import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-10" />
              <p className="text-base font-semibold text-ink">{site.name}</p>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{site.university}</p>
            <p className="mt-3 text-sm text-ink-soft">{site.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Pages</p>
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
            <p className="text-sm font-medium text-ink">Contact</p>
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
          Maintained by Ashoka students. If any information here is out of date, please write to{" "}
          <a href={`mailto:${site.email}`} className="underline hover:text-accent">
            {site.email}
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

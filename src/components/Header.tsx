"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ministry of Academic Affairs, home"
        >
          <Image src="/logo.png" alt="" width={52} height={52} priority className="h-[52px] w-[52px]" />
          <span className="leading-tight">
            <span className="block text-base font-semibold text-ink">{site.name}</span>
            <span className="block text-xs text-ink-soft">{site.university}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b-2 px-3 py-2 text-sm transition-colors ${
                isActive(item.href)
                  ? "border-accent font-semibold text-ink"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/representatives#office-hours"
          className="hidden rounded border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent lg:inline-block"
        >
          Office Hours →
        </Link>

        <button
          type="button"
          className="rounded border border-line-strong px-3 py-1.5 text-sm text-ink-soft lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-line bg-paper px-5 pb-4 lg:hidden">
          <ul className="flex flex-col divide-y divide-line">
            {[...nav, { href: "/representatives#office-hours", label: "Office Hours" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-3 text-base ${isActive(item.href) ? "font-semibold text-accent" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

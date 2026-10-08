"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/95 py-3 shadow-xs backdrop-blur-md"
          : "border-b border-line/60 bg-paper/80 py-4.5 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 transition-opacity hover:opacity-90"
        >
          <Image src="/logo.png" alt="" width={54} height={54} priority className="h-[54px] w-[54px]" />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-ink">{site.name}</span>
            <span className="text-xs text-ink-soft">{site.university}</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 md:flex lg:gap-2"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-1.5 text-sm transition-all ${
                  active
                    ? "font-medium text-ink"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <span
                    className="absolute inset-x-3 -bottom-1.5 h-[1.5px] bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-sm border border-line bg-paper px-3 py-1.5 text-xs text-ink md:hidden hover:border-line-strong"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-xs ">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="border-t border-line bg-paper px-5 py-6 md:hidden shadow-lg"
        >
          <ul className="flex flex-col divide-y divide-line">
            {nav.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const numStr = String(index + 1).padStart(2, "0");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-base transition-colors"
                  >
                    <span
                      className={`flex items-baseline gap-3 ${
                        active
                          ? "font-medium text-accent"
                          : "text-ink"
                      }`}
                    >
                      <span className="text-xs text-ink-faint">
                        {numStr}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span
                      className={`text-sm ${
                        active ? "text-accent font-semibold" : "text-ink-faint"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

        </nav>
      )}
    </header>
  );
}


"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Avatar from "@/components/Avatar";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";
import { marketingProfiles } from "@/data/marketing";

/* ---------- helpers ---------- */

/** Fades and lifts content in as it scrolls into view. Content stays visible without JavaScript. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/** Moves decoration slightly as the page scrolls. Off for reduced motion and touch screens. */
export function Parallax({
  children,
  speed = 0.06,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.transform = `translate3d(0, ${Math.round(window.scrollY * speed)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}

/* ---------- sharing ---------- */

export function ShareBar({ title, anchor = "" }: { title: string; anchor?: string }) {
  const [message, setMessage] = useState("");

  const url = useCallback(() => {
    const u = new URL(window.location.href);
    u.hash = anchor;
    return u.toString();
  }, [anchor]);

  const flash = (m: string) => {
    setMessage(m);
    window.setTimeout(() => setMessage(""), 2500);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      flash("Link copied");
    } catch {
      flash("Could not copy. Please copy the address from your browser.");
    }
  };

  const share = async () => {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url: url() });
      } catch {
        /* the person closed the share sheet */
      }
    } else {
      await copy();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={share}
        className="rounded border-2 border-ink bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
      >
        Share
      </button>
      <button
        type="button"
        onClick={copy}
        className="rounded border-2 border-ink bg-white px-4 py-2 text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
      >
        Copy link
      </button>
      <span role="status" aria-live="polite" className="text-sm font-medium text-ink">
        {message}
      </span>
    </div>
  );
}

/* ---------- Instagram-inspired glyph ---------- */

function InstagramGlyph({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#e0b33b" />
          <stop offset="0.5" stopColor="#d98a96" />
          <stop offset="1" stopColor="#4b1a6b" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="12" fill="#fffdf2" stroke="url(#ig-grad)" strokeWidth="4" />
      <circle cx="24" cy="24" r="9" fill="none" stroke="url(#ig-grad)" strokeWidth="4" />
      <circle cx="35" cy="13" r="2.6" fill="url(#ig-grad)" />
    </svg>
  );
}

/* ---------- profile cards ---------- */

function InstagramNote({ url, name }: { url: string; name: string }) {
  if (url) {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
        <InstagramGlyph size={22} />
        Open {name}&apos;s Instagram
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
      <InstagramGlyph size={22} />
      Instagram link awaiting configuration
    </span>
  );
}

export default function MarketingProfiles() {
  const reduced = usePrefersReducedMotion();
  const nih = marketingProfiles.niharika;
  const tar = marketingProfiles.tarun;

  const zoneRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [inside, setInside] = useState(false);
  const [notice, setNotice] = useState("");

  // Instagram cursor: only inside Niharika's card, only for a mouse, never for reduced motion.
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || reduced) return;
    const c = cursorRef.current;
    if (c) c.style.transform = `translate3d(${e.clientX - 22}px, ${e.clientY - 22}px, 0)`;
    if (!inside) setInside(true);
  };
  const onLeave = () => setInside(false);

  const noLink = () => {
    setNotice("Niharika's Instagram link has not been configured yet.");
    window.setTimeout(() => setNotice(""), 3500);
  };

  useEffect(() => {
    if (!inside) return;
    const off = () => setInside(false);
    window.addEventListener("blur", off);
    return () => window.removeEventListener("blur", off);
  }, [inside]);

  const nihBody = (
    <>
      <div className="flex items-center gap-4">
        <Avatar name={nih.name} size={72} />
        <div>
          <h3 className="text-ink">{nih.name}</h3>
          <p className="text-sm font-semibold text-accent">Head of Department</p>
          <p className="text-sm text-ink-soft">Community Outreach and Marketing</p>
        </div>
      </div>
      <div className="mt-6 rounded border-2 border-dashed border-ink/60 bg-white/80 px-3 py-2.5">
        <InstagramNote url={nih.instagramUrl} name="Niharika" />
      </div>
    </>
  );

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* Tarun: taped sticker */}
      <div className="relative -rotate-1 md:mt-6">
        <span
          aria-hidden="true"
          className="absolute -top-3 left-8 z-10 h-6 w-24 -rotate-6 bg-gold/80"
          style={{ clipPath: "polygon(4% 0, 100% 8%, 96% 100%, 0 90%)" }}
        />
        <div className="rounded border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_var(--color-ink)]">
          <div className="flex items-center gap-4">
            <Avatar name={tar.name} size={72} />
            <div>
              <h3 className="text-ink">{tar.name}</h3>
              <p className="text-sm font-semibold text-accent">Head of Department</p>
              <p className="text-sm text-ink-soft">Community Outreach and Marketing</p>
            </div>
          </div>
          <p className="mt-6 rounded border-2 border-dashed border-ink/40 px-3 py-2.5 text-sm text-ink-soft">
            No social link has been supplied for Tarun yet.
          </p>
        </div>
      </div>

      {/* Niharika: spray frame with the Instagram cursor */}
      <div
        ref={zoneRef}
        onPointerMove={onMove}
        onPointerEnter={onMove}
        onPointerLeave={onLeave}
        className="relative rotate-1"
      >
        <span
          aria-hidden="true"
          className="absolute -right-3 -top-4 z-10 rotate-12 rounded-full border-2 border-ink bg-rose px-3 py-1 text-xs font-bold text-ink"
        >
          Say hi
        </span>
        {nih.instagramUrl ? (
          <a
            href={nih.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${nih.name}, Community Outreach and Marketing. Open Instagram profile in a new tab`}
            className={`wiggle block rounded border-2 border-ink bg-rose-soft p-6 shadow-[6px_6px_0_0_var(--color-accent)] transition-transform hover:-translate-y-1 ${
              inside ? "cursor-none" : ""
            }`}
          >
            {nihBody}
          </a>
        ) : (
          <button
            type="button"
            onClick={noLink}
            aria-label={`${nih.name}, Community Outreach and Marketing. Instagram link is awaiting configuration`}
            className={`wiggle block w-full rounded border-2 border-ink bg-rose-soft p-6 text-left shadow-[6px_6px_0_0_var(--color-accent)] transition-transform hover:-translate-y-1 ${
              inside ? "cursor-none" : ""
            }`}
          >
            {nihBody}
          </button>
        )}
        <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm font-medium text-ink">
          {notice}
        </p>

        {/* The pointer replacement. Decorative, never receives clicks. */}
        <div
          ref={cursorRef}
          aria-hidden="true"
          className={`pointer-events-none fixed left-0 top-0 z-[60] transition-opacity duration-150 ${
            inside ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translate3d(-100px,-100px,0)" }}
        >
          <InstagramGlyph size={44} />
        </div>
      </div>
    </div>
  );
}

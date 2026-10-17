"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

const COLOURS = ["#4b1a6b", "#e0b33b", "#d98a96", "#fffdf2", "#1d1423", "#f6dfe1"];
const PIECES = 110;

// Drops confetti from the top of the screen. The layer is added to the page
// itself, so it keeps falling while the next page opens, then removes itself.
function launchConfetti() {
  const layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.className = "confetti-layer";
  for (let i = 0; i < PIECES; i++) {
    const piece = document.createElement("span");
    const size = 6 + Math.random() * 8;
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * (Math.random() > 0.5 ? 1 : 2.2)}px`;
    piece.style.background = COLOURS[Math.floor(Math.random() * COLOURS.length)];
    piece.style.borderRadius = Math.random() > 0.7 ? "50%" : "1px";
    piece.style.setProperty("--dur", `${1.8 + Math.random() * 1.6}s`);
    piece.style.setProperty("--delay", `${Math.random() * 0.7}s`);
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
    piece.style.setProperty("--rot", `${(Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 720)}deg`);
    layer.appendChild(piece);
  }
  document.body.appendChild(layer);
  window.setTimeout(() => layer.remove(), 4200);
}

/**
 * A normal link to another page. On a plain click it first drops confetti
 * from the top, then opens the page. With "reduce motion" on, or for
 * new-tab clicks, it just opens the page.
 */
export default function ConfettiLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const plain = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
    if (!plain) return; // let the browser handle new-tab clicks
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // normal navigation
    e.preventDefault();
    const el = e.currentTarget;
    el.classList.add("confetti-pop");
    launchConfetti();
    window.setTimeout(() => router.push(href), 900);
  };

  return (
    <a href={href} onClick={onClick} className={`confetti-link ${className}`}>
      {children}
    </a>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export type HelpTopic = {
  id: string;
  label: string;
  answer: string;
  action: string;
  href: string;
  external?: boolean;
};

export default function HelpFinder({ topics }: { topics: HelpTopic[] }) {
  const [activeId, setActiveId] = useState(topics[0].id);
  const active = topics.find((t) => t.id === activeId) ?? topics[0];

  return (
    <div className="rounded-lg border border-line bg-white p-6">
      <h2 className="text-ink">What do you need help with?</h2>
      <p className="mt-2 text-sm text-ink-soft">Choose a topic to see where to go.</p>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Choose a topic">
        {topics.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveId(t.id)}
            aria-pressed={t.id === activeId}
            className={`rounded border px-3.5 py-2 text-sm transition-colors ${
              t.id === activeId
                ? "border-accent bg-accent text-white"
                : "border-line-strong text-ink-soft hover:border-accent hover:text-accent"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-6 rounded-lg bg-paper-dim p-5">
        <p className="text-base leading-relaxed text-ink">{active.answer}</p>
        {active.external ? (
          <a
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
          >
            {active.action} ↗
          </a>
        ) : (
          <Link
            href={active.href}
            className="mt-4 inline-block rounded bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
          >
            {active.action} →
          </Link>
        )}
      </div>
    </div>
  );
}

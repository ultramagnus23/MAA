"use client";

import { useState } from "react";
import { handbooks, handbookGroups, type HandbookGroup } from "@/data/handbooks";
import { site } from "@/data/site";

export default function HandbooksDirectory() {
  const [group, setGroup] = useState<"All" | HandbookGroup>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = handbooks.filter(
    (h) => (group === "All" || h.group === group) && (q === "" || h.title.toLowerCase().includes(q))
  );

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-lg border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter handbooks">
          {["All", ...handbookGroups.map((g) => g.id)].map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setGroup(id as "All" | HandbookGroup)}
              aria-pressed={group === id}
              className={`rounded border px-3.5 py-1.5 text-sm transition-colors ${
                group === id
                  ? "border-accent bg-accent text-white"
                  : "border-line-strong text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {id === "All" ? "All handbooks" : handbookGroups.find((g) => g.id === id)!.label}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search handbooks"
          aria-label="Search handbooks"
          className="w-full rounded border border-line-strong bg-paper px-4 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none sm:w-64"
        />
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-soft">No handbooks match your search.</p>
      )}

      {handbookGroups.map((g) => {
        const items = visible.filter((h) => h.group === g.id);
        if (items.length === 0) return null;
        return (
          <section key={g.id} className="mt-12">
            <h2 className="text-ink">{g.label}</h2>
            <p className="mt-1 text-sm text-ink-soft">{g.blurb}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((h) =>
                h.url ? (
                  <a
                    key={h.title}
                    href={h.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition-colors hover:border-accent"
                  >
                    <span>
                      <span className="block font-medium text-ink group-hover:text-accent">{h.title}</span>
                      {h.year && <span className="block text-xs text-ink-faint">{h.year}</span>}
                    </span>
                    <span className="text-sm font-medium text-accent">Open ↗</span>
                  </a>
                ) : (
                  <a
                    key={h.title}
                    href={`mailto:${site.email}?subject=${encodeURIComponent("Link request: " + h.title)}`}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-dashed border-line-strong bg-white px-4 py-3 transition-colors hover:border-accent"
                  >
                    <span className="font-medium text-ink">{h.title}</span>
                    <span className="text-sm text-accent">Request link →</span>
                  </a>
                )
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

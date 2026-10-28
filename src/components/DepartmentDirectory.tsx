"use client";

import { useState } from "react";
import { departmentContacts } from "@/data/representatives";
import { departmentWhatsAppGroups } from "@/data/whatsapp";

export default function DepartmentDirectory() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const rows = departmentContacts
    .map((d) => ({
      ...d,
      whatsapp: departmentWhatsAppGroups.find((g) => g.department === d.department),
    }))
    .filter((d) => q === "" || d.department.toLowerCase().includes(q) || d.email.toLowerCase().includes(q));

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search departments, for example Economics"
            aria-label="Search departments"
            className="w-full rounded border border-line-strong bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
        </div>
        <p className="text-sm text-ink-soft" aria-live="polite">
          Showing {rows.length} of {departmentContacts.length} departments
        </p>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-lg border border-line bg-white p-8 text-center text-sm text-ink-soft">
          No department matches &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <ul className="grid gap-3 md:grid-cols-2">
          {rows.map((d) => (
            <li
              key={d.department}
              className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4"
            >
              <h3 className="text-ink">{d.department}</h3>
              <p className="break-all text-sm">
                <a href={`mailto:${d.email}`} className="text-accent hover:underline">
                  {d.email}
                </a>
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <a
                  href={`mailto:${d.email}`}
                  className="rounded border border-accent px-3 py-1.5 font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Email
                </a>
                {d.whatsapp ? (
                  <a
                    href={d.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-line-strong px-3 py-1.5 text-ink-soft transition-colors hover:border-accent hover:text-accent"
                  >
                    Join WhatsApp group ↗
                  </a>
                ) : (
                  <span className="px-1 py-1.5 text-ink-faint">No WhatsApp group listed</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { departmentContacts } from "@/data/representatives";

export default function DepartmentDirectory() {
  const [query, setQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const filtered = departmentContacts.filter(
    (dept) =>
      dept.department.toLowerCase().includes(query.toLowerCase()) ||
      dept.email.toLowerCase().includes(query.toLowerCase())
  );

  const handleCopy = (email: string) => {
    navigator.clipboard?.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search departments, for example Economics"
            className="w-full rounded-xs border border-line bg-paper px-4 py-2.5 pl-10 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
            aria-label="Filter departments"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-2.5 text-ink-faint"
          >
            🔍
          </span>
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-2.5 text-xs text-ink-faint hover:text-ink"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs text-ink-faint">
          <span>SHOWING {filtered.length} OF {departmentContacts.length} DISCIPLINES</span>
        </div>
      </div>

      {/* Directory Table */}
      <div className="overflow-hidden rounded-xs border border-line bg-paper shadow-xs">
        <div className="grid grid-cols-12 border-b border-line bg-paper-dim px-6 py-3.5 text-xs text-ink-faint">
          <span className="col-span-5 sm:col-span-4">Department</span>
          <span className="col-span-7 sm:col-span-5">Email</span>
          <span className="hidden sm:col-span-3 sm:block text-right">Contact</span>
        </div>

        <div className="divide-y divide-line">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-ink-soft">
              No departments found matching &ldquo;{query}&rdquo;. Check spelling or view all disciplines.
            </div>
          ) : (
            filtered.map((dept, i) => (
              <div
                key={dept.department}
                className={`grid grid-cols-12 items-center px-6 py-4 text-sm transition-colors hover:bg-paper-dim/40 ${
                  i % 2 === 1 ? "bg-paper-dim/20" : "bg-paper"
                }`}
              >
                <div className="col-span-5 sm:col-span-4 pr-2">
                  <p className="font-medium text-ink">
                    {dept.department}
                  </p>
                  <span className="text-xs text-ink-faint sm:hidden">
                    Undergraduate / ASP
                  </span>
                </div>

                <div className="col-span-7 sm:col-span-5">
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-xs sm:text-sm text-accent hover:underline break-all"
                  >
                    {dept.email}
                  </a>
                </div>

                <div className="hidden sm:col-span-3 sm:flex sm:items-center sm:justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(dept.email)}
                    className="rounded-xs border border-line px-2.5 py-1 text-xs text-ink-soft transition-colors hover:border-line-strong hover:bg-paper-dim"
                  >
                    {copiedEmail === dept.email ? "COPIED ✓" : "COPY"}
                  </button>
                  <a
                    href={`mailto:${dept.email}`}
                    className="rounded-xs border border-accent/40 bg-accent-soft/30 px-2.5 py-1 text-xs text-accent transition-colors hover:bg-accent hover:text-paper"
                  >
                    EMAIL ↗
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

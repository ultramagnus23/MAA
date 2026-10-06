"use client";

import { useState } from "react";
import {
  resources,
  resourceCategories,
  departmentHandbooks,
  studentHandbooks,
  largeHandbooksNotMirrored,
} from "@/data/resources";
import { Tag } from "@/components/ui";

export default function ResourcesArchive() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...resourceCategories];

  const filteredResources = resources.filter((res) => {
    const matchesCategory =
      selectedCategory === "All" || res.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (res.fileNote && res.fileNote.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredDeptHandbooks = departmentHandbooks.filter((h) =>
    searchQuery === "" ? true : h.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStudentHandbooks = studentHandbooks.filter((h) =>
    searchQuery === "" ? true : h.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Controls */}
      <div className="space-y-4 rounded-xs border border-line bg-paper p-5 sm:p-6 shadow-xs">
        {/* Search input */}
        <div className="relative">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search policies, guides and handbooks"
            className="w-full rounded-xs border border-line bg-paper-dim/40 px-4 py-3 pl-11 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:bg-paper focus:outline-none"
            aria-label="Search resources"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-3.5 text-ink-faint"
          >
            🔍
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-3 text-xs text-ink-faint hover:text-ink"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-line/60">
          <span className="mr-2 text-[10px] text-ink-faint ">
            FILTER:
          </span>
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xs px-3 py-1.5 text-[11px] transition-all cursor-pointer ${
                  active
                    ? "bg-accent text-white font-medium"
                    : "border border-line bg-paper text-ink-soft hover:border-line-strong hover:text-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Filtered Document Grid */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl text-ink font-normal">
            {selectedCategory === "All" ? "All resources" : selectedCategory}
          </h3>
          <span className="text-xs text-ink-faint">
            {filteredResources.length} {filteredResources.length === 1 ? "DOCUMENT" : "DOCUMENTS"}
          </span>
        </div>

        {filteredResources.length === 0 ? (
          <div className="rounded-xs border border-line bg-paper p-10 text-center text-sm text-ink-soft">
            No documents matched your criteria. Try adjusting your search or category filter.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((res) => (
              <a
                key={res.title}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xs border border-line bg-paper p-6 transition-all duration-200 hover:border-accent hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-accent font-medium">
                      {res.category}
                    </span>
                    {res.fileNote && <Tag variant="dim">{res.fileNote}</Tag>}
                  </div>

                  <h4 className="mt-3 text-lg font-medium text-ink group-hover:text-accent">
                    {res.title}
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-ink-soft line-clamp-3">
                    {res.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-3">
                  <span className="text-[11px] text-ink-faint">
                    Verified Link
                  </span>
                  <span className="text-[11px] font-medium text-accent transition-transform group-hover:translate-x-0.5">
                    Open File ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Department Handbooks Directory */}
      {(selectedCategory === "All" || selectedCategory === "Handbooks") && (
        <div className="border-t border-line pt-12">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs text-accent">
                Department curricula
              </span>
              <h3 className="mt-1 text-2xl font-normal text-ink">
                Department Handbooks
              </h3>
              <p className="mt-1 text-xs text-ink-soft">
                Official course requirements, prerequisites, and faculty guidelines by department.
              </p>
            </div>
            <span className="text-xs text-ink-faint">
              {filteredDeptHandbooks.length} DEPARTMENTS
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDeptHandbooks.map((h) => (
              <a
                key={h.url}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xs border border-line bg-paper px-4 py-3 text-sm transition-all hover:border-accent hover:bg-paper-dim"
              >
                <div className="pr-2">
                  <p className="text-sm font-medium text-ink group-hover:text-accent">
                    {h.title}
                  </p>
                  <span className="text-[10px] text-ink-faint">
                    Official Handbook
                  </span>
                </div>
                <span className="text-xs text-accent transition-transform group-hover:translate-x-0.5">
                  PDF ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Student Programme Handbooks */}
      {(selectedCategory === "All" || selectedCategory === "Handbooks") && (
        <div className="border-t border-line pt-12">
          <div className="mb-6">
            <span className="text-xs text-accent">
              University Programme Manuals
            </span>
            <h3 className="mt-1 text-2xl font-normal text-ink">
              Student Handbooks
            </h3>
            <p className="mt-1 text-xs text-ink-soft">
              Cohort-wide academic regulations for Undergraduate, MLS, and ASP cohorts.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {filteredStudentHandbooks.map((h) => (
              <a
                key={h.url}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xs border border-line bg-paper p-4 transition-all hover:border-accent hover:bg-paper-dim"
              >
                <div>
                  <p className="text-base text-ink group-hover:text-accent">
                    {h.title}
                  </p>
                  <span className="text-[10px] text-ink-faint">
                    Complete Guide · PDF
                  </span>
                </div>
                <span className="text-accent text-sm transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xs border border-line bg-paper-dim/60 p-5 text-xs text-ink-soft">
            <p className="text-ink font-medium">
              Large Batch Handbooks Note:
            </p>
            <p className="mt-1">
              Due to substantial file size (50MB–400MB), the following handbooks are hosted directly on MAA&apos;s institutional Google Drive:{" "}
              <span className="font-medium text-ink">
                {largeHandbooksNotMirrored.join(", ")}
              </span>
              . Request access at{" "}
              <a
                href="mailto:academicaffairs.ministry@ashoka.edu.in"
                className="text-accent underline"
              >
                academicaffairs.ministry@ashoka.edu.in
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

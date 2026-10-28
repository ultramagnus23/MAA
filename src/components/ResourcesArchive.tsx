"use client";

import { useState } from "react";
import { resources, resourceCategories } from "@/data/resources";
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
            placeholder="Search policies and guides"
            className="w-full rounded-xs border border-line bg-paper-dim/40 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:bg-paper focus:outline-none"
            aria-label="Search resources"
          />
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
          <span className="mr-2 text-xs text-ink-faint ">
            FILTER:
          </span>
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xs px-3 py-1.5 text-xs transition-all cursor-pointer ${
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
                    <span className="text-xs text-accent font-medium">
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
                  <span className="text-xs text-ink-faint">
                    Verified Link
                  </span>
                  <span className="text-xs font-medium text-accent transition-transform group-hover:translate-x-0.5">
                    Open File ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

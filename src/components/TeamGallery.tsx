"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { teamPhotos, type TeamPhoto } from "@/data/team";

export default function TeamGallery() {
  const [active, setActive] = useState<TeamPhoto | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamPhotos.map((photo) => (
          <li key={photo.id}>
            <button
              type="button"
              onClick={() => setActive(photo)}
              className="group block w-full overflow-hidden rounded-lg border border-line bg-white text-left transition-colors hover:border-accent"
            >
              <span className="relative block aspect-[4/3] w-full overflow-hidden bg-paper-dim">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>
              <span className="block px-3 py-2.5 text-sm text-ink-soft">{photo.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-paper-dim">
              <Image src={active.src} alt={active.alt} fill sizes="768px" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3">
              <p className="text-sm text-ink">{active.caption}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded border border-line-strong px-3 py-1 text-sm text-ink-soft hover:border-accent hover:text-accent"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

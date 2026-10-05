"use client";

import Image from "next/image";
import { useState } from "react";
import { teamPhotos, type TeamPhoto } from "@/data/team";
import { Tag } from "@/components/ui";

export default function TeamGallery() {
  const [activePhoto, setActivePhoto] = useState<TeamPhoto | null>(null);

  // Group photos for editorial layout:
  const heroPhoto = teamPhotos.find((p) => p.featured) || teamPhotos[0];
  const gridPhotos = teamPhotos.filter((p) => p.id !== heroPhoto.id);

  return (
    <div className="space-y-6">
      {/* Top Editorial Montage: Asymmetric Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 lg:gap-6">
        {/* Lead Hero Frame (Spans 7 cols on desktop) */}
        <div
          className="group relative overflow-hidden rounded-xs border border-line bg-paper-dim sm:col-span-12 lg:col-span-7"
          onClick={() => setActivePhoto(heroPhoto)}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="editorial-image object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
            {/* Subtle paper-tone gradient overlay at bottom for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-paper">
              <div className="flex flex-wrap items-center gap-2">
                <Tag variant="aubergine">Ashoka Campus</Tag>
                <span className="font-mono-tag text-[10px] tracking-widest text-aubergine-muted uppercase">
                  AY 2025–26
                </span>
              </div>
              <h3 className="font-serif-heading mt-2 text-xl font-normal sm:text-2xl text-paper">
                {heroPhoto.name}
              </h3>
              <p className="mt-1 max-w-lg text-xs sm:text-sm text-paper/85 leading-relaxed">
                {heroPhoto.context}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Editorial Column: Two stacked portraits / scenes (Spans 5 cols) */}
        <div className="grid grid-cols-2 gap-4 sm:col-span-12 lg:col-span-5 sm:grid-cols-2 lg:grid-cols-1">
          {gridPhotos.slice(0, 2).map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xs border border-line bg-paper-dim transition-all duration-300 hover:border-line-strong"
              onClick={() => setActivePhoto(photo)}
            >
              <div className="relative aspect-[16/9] lg:aspect-[16/7.5] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="editorial-image object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-paper">
                  <p className="font-mono-tag text-[10px] uppercase tracking-wider text-paper/75">
                    {photo.role}
                  </p>
                  <p className="font-serif-heading text-sm sm:text-base font-normal text-paper">
                    {photo.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Photographic Filmstrip: 5 multi-ratio portraits and captures */}
      <div className="border-t border-b border-line py-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono-tag text-[11px] uppercase tracking-widest text-ink-faint">
            Campus Working Roster · 12 Archival Captures
          </span>
          <span className="font-mono-tag text-[11px] text-accent">
            Hover to explore role
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {gridPhotos.slice(2, 8).map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xs border border-line bg-paper transition-all duration-200 hover:border-accent cursor-pointer"
              onClick={() => setActivePhoto(photo)}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="editorial-image object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay card on hover */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-aubergine via-aubergine/40 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-mono-tag text-[9px] uppercase tracking-wider text-aubergine-muted">
                    {photo.role}
                  </span>
                  <p className="font-serif-heading text-xs font-normal text-paper leading-tight mt-0.5">
                    {photo.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Asymmetric Secondary Trio */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {gridPhotos.slice(8, 11).map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-xs border border-line bg-paper p-3 transition-all duration-200 hover:border-line-strong hover:bg-paper-dim/30"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="editorial-image object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-[10px] uppercase tracking-wider text-ink-faint">
                  {photo.role}
                </span>
                <span className="font-mono-tag text-[10px] text-accent">
                  Ashoka AU
                </span>
              </div>
              <p className="font-serif-heading mt-1 text-sm font-normal text-ink">
                {photo.name}
              </p>
              <p className="mt-1 text-xs text-ink-soft line-clamp-2">
                {photo.context}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Expanded View Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-aubergine/80 p-4 backdrop-blur-xs transition-opacity"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-3xl overflow-hidden rounded-xs border border-aubergine-border bg-paper shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-3 top-3 z-10 rounded-full border border-line bg-paper/90 px-2.5 py-1 text-xs text-ink hover:bg-paper"
              aria-label="Close image modal"
            >
              ✕
            </button>
            <div className="relative aspect-[16/10] max-h-[70vh] w-full">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain bg-ink"
              />
            </div>
            <div className="border-t border-line bg-paper p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono-tag text-xs uppercase tracking-wider text-accent">
                  {activePhoto.role}
                </span>
                <span className="font-mono-tag text-[11px] text-ink-faint">
                  Ashoka University
                </span>
              </div>
              <h4 className="font-serif-heading mt-1 text-lg text-ink">
                {activePhoto.name}
              </h4>
              <p className="mt-1 text-sm text-ink-soft">
                {activePhoto.context}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

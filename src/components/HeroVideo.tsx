"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroConfig } from "@/data/hero";

// Full-bleed background for the hero. Always renders the poster image first;
// the video is added on top only when files are configured, the visitor has
// not asked for reduced motion, and data saver is off.
export default function HeroVideo() {
  const { video, poster } = heroConfig;
  const ref = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (video.length === 0) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    setAllowed(!reduce && !conn?.saveData);
  }, [video.length]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
        <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        {allowed && (
          <video
            ref={ref}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            onCanPlay={() => setReady(true)}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          >
            {video.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
          </video>
        )}
        {/* Dark overlay keeps the text readable on any footage */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/60 to-ink/40" />
      </div>

      {allowed && ready && (
        <button
          type="button"
          onClick={toggle}
          className="absolute bottom-4 right-4 rounded border border-white/60 bg-ink/50 px-3 py-1.5 text-xs text-white transition-colors hover:bg-ink/80 sm:bottom-6 sm:right-8"
        >
          {playing ? "Pause video" : "Play video"}
        </button>
      )}
    </>
  );
}

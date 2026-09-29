import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono-tag inline-block rounded-sm border border-line-strong bg-paper px-2 py-0.5 text-[11px] uppercase text-ink-soft">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-tag text-xs uppercase tracking-wider text-accent">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-serif-heading mt-2 text-2xl font-medium text-ink sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded border border-line bg-paper p-5 transition-colors hover:border-line-strong ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-serif-heading mt-3 text-3xl font-medium text-ink sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

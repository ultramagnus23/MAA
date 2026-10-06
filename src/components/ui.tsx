import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-line-strong px-2 py-0.5 text-xs text-ink-soft">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-sm font-medium text-accent">{children}</p>;
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
      <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-ink-soft">{description}</p>
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
      className={`rounded-lg border border-line bg-white p-5 transition-colors hover:border-accent/40 ${className}`}
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
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold text-ink sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

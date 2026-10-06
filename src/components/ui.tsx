import type { ReactNode } from "react";

export function Tag({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "aubergine" | "dim";
}) {
  const styles = {
    default: "border-line-strong bg-white text-ink-soft",
    accent: "border-accent/30 bg-accent-soft text-accent font-medium",
    aubergine: "border-aubergine-border bg-aubergine-tag text-aubergine-muted font-medium",
    dim: "border-line/70 bg-paper-dim text-ink-faint",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs transition-colors ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function StatusDot({
  active = true,
  label,
  variant = "default",
}: {
  active?: boolean;
  label?: string;
  variant?: "default" | "aubergine";
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs">
      <span className="relative flex h-2 w-2">
        {active && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
              variant === "aubergine" ? "bg-accent" : "bg-emerald-600"
            }`}
          />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            active
              ? variant === "aubergine"
                ? "bg-accent"
                : "bg-emerald-600"
              : "bg-ink-faint"
          }`}
        />
      </span>
      {label && (
        <span
          className={
            variant === "aubergine" ? "text-aubergine-muted" : "text-ink-soft"
          }
        >
          {label}
        </span>
      )}
    </span>
  );
}

export function Eyebrow({
  children,
  number,
  variant = "accent",
}: {
  children: ReactNode;
  number?: string;
  variant?: "accent" | "aubergine" | "ink" | "gold";
}) {
  const color = {
    accent: "text-accent",
    aubergine: "text-aubergine-muted",
    ink: "text-ink-faint",
    gold: "text-gold",
  }[variant];

  return (
    <div className={`flex items-center gap-2 text-sm font-medium ${color}`}>
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  italicTitle,
  description,
  variant = "default",
  align = "left",
}: {
  number?: string;
  eyebrow?: string;
  title: string;
  italicTitle?: string;
  description?: string;
  variant?: "default" | "aubergine";
  align?: "left" | "center";
}) {
  const isDark = variant === "aubergine";

  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Eyebrow number={number} variant={isDark ? "aubergine" : "accent"}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`mt-2 text-2xl font-semibold sm:text-3xl ${
          isDark ? "text-aubergine-text" : "text-ink"
        }`}
      >
        {title}
        {italicTitle && (
          <span className="text-accent ml-2">
            {italicTitle}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-3 text-[15px] sm:text-base leading-relaxed ${
            isDark ? "text-aubergine-muted" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dim" | "aubergine";
}) {
  const styles = {
    default:
      "border-line bg-white text-ink hover:border-accent/50",
    dim: "border-line bg-paper-dim text-ink hover:border-line-strong",
    aubergine:
      "border-aubergine-border bg-aubergine-surface text-aubergine-text hover:border-aubergine-border/80",
  };

  return (
    <div
      className={`relative rounded-lg border p-5 sm:p-6 transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  number,
  eyebrow,
  title,
  italicTitle,
  description,
}: {
  number?: string;
  eyebrow: string;
  title: string;
  italicTitle?: string;
  description?: string;
}) {
  return (
    <header className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
          {title}
          {italicTitle && (
            <span className="text-gold ml-2">
              {italicTitle}
            </span>
          )}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}


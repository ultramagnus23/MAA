// Initials in a circle. Used until a real photograph is supplied for a person.
export default function Avatar({ name, size = 48 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="inline-flex shrink-0 items-center justify-center rounded-full border border-line-strong bg-accent-soft text-sm font-semibold text-accent"
    >
      {initials}
    </span>
  );
}

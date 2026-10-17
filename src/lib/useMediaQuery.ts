import { useSyncExternalStore } from "react";

/** Reads a CSS media query on the client. Returns `fallback` during server rendering. */
export function useMediaQuery(query: string, fallback = false) {
  return useSyncExternalStore(
    (notify) => {
      const q = window.matchMedia(query);
      q.addEventListener("change", notify);
      return () => q.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => fallback
  );
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

type Conn = { saveData?: boolean };

/** True when the visitor has turned on data saver. */
export function useSaveData() {
  return useSyncExternalStore(
    () => () => {},
    () => Boolean((navigator as Navigator & { connection?: Conn }).connection?.saveData),
    () => false
  );
}

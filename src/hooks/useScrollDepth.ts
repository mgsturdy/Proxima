"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const;

/**
 * Fires a `scroll_depth` analytics event once per threshold (25/50/75/100%)
 * for the current pageview. Pass a `page` label to distinguish pages in analytics.
 */
export function useScrollDepth(page: string) {
  useEffect(() => {
    const fired = new Set<number>();

    const handler = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;

      for (const t of THRESHOLDS) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          track("scroll_depth", { page, depth: t });
        }
      }
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [page]);
}

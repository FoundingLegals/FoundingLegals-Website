"use client";

import { useEffect } from "react";

/**
 * ScrollToTop
 * Disables the browser's native scroll-restoration and forces
 * every page load / hard-refresh to begin at the very top.
 */
export default function ScrollToTop() {
  useEffect(() => {
    // Tell the browser NOT to restore the previous scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Jump to top immediately on mount
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null; // renders nothing
}

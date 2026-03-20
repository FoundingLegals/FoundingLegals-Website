"use client";

import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    // observe all animatable children
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const children = el.querySelectorAll(selectors);
    children.forEach((child) => observer.observe(child));

    // also observe the container itself
    if (
      el.classList.contains("reveal") ||
      el.classList.contains("reveal-left") ||
      el.classList.contains("reveal-right") ||
      el.classList.contains("reveal-scale")
    ) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

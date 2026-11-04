"use client";

import { useEffect, useRef } from "react";

/** Depth marker. Plays a single entrance, then stays. */
export function OnceNode({ tone }: { tone: "project" | "photo" }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let played = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || played) return;
        played = true;
        node.classList.add("is-in");
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref} className={`depth-node depth-node-${tone}`} aria-hidden="true" />;
}

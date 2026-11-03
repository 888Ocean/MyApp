"use client";

import { useEffect, useState } from "react";

export function SilhouettePass() {
  const [passing, setPassing] = useState(false);

  useEffect(() => {
    const node = document.getElementById("portrait");
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setPassing(true);
        observer.disconnect();
      },
      { threshold: 0.22 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      className={passing ? "silhouette is-go" : "silhouette"}
      viewBox="0 0 240 320"
      aria-hidden="true"
    >
      <path
        fill="#1A2B2E"
        d="M156 34c-26 1-44 26-42 54 1 20 12 36 18 46l-30 58c-24 16-50 34-64 86h156c-8-30-20-54-36-74l-4-66c12-8 24-26 26-48 3-28-10-58-24-56z"
      />
    </svg>
  );
}

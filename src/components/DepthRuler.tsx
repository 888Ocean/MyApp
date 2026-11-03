"use client";

import { stations, type StationId } from "@/lib/archive";
import { useEffect, useState } from "react";

export function DepthRuler() {
  const [active, setActive] = useState<StationId>("surface");

  useEffect(() => {
    const nodes = stations
      .map((station) => document.getElementById(station.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        visible.sort(
          (a, b) => b.intersectionRect.height - a.intersectionRect.height,
        );
        const id = visible[0]?.target.id;
        if (!stations.some((station) => station.id === id)) return;
        setActive((current) => (current === id ? current : (id as StationId)));
      },
      {
        rootMargin: "-32% 0px -62% 0px",
        threshold: 0,
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="depth-ruler" aria-label="深度">
      <ol>
        {stations.map((station) => {
          const current = active === station.id;
          return (
            <li key={station.id}>
              <a
                href={`#${station.id}`}
                aria-current={current ? "location" : undefined}
              >
                <span className="depth-num">
                  {station.meters}
                  <span className="depth-unit">m</span>
                </span>
                <span className="depth-label" lang="en">
                  {station.en}
                </span>
                <span className="sr-only">{station.zh}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

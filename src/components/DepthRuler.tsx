"use client";

import { stations, type StationId } from "@/lib/archive";
import { useEffect, useRef, useState } from "react";

const markedLayers = new Set<StationId>(["work", "photos"]);

export function DepthRuler() {
  const [active, setActive] = useState<StationId>("surface");
  const [played, setPlayed] = useState<StationId[]>([]);
  const playedRef = useRef(new Set<StationId>());

  function markOnce(id: StationId) {
    if (!markedLayers.has(id)) return;
    if (playedRef.current.has(id)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    playedRef.current.add(id);
    setPlayed((current) => [...current, id]);
  }

  useEffect(() => {
    const nodes = stations
      .map((station) => document.getElementById(station.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => b.intersectionRect.height - a.intersectionRect.height);
        const id = visible[0]?.target.id;
        if (!stations.some((station) => station.id === id)) return;
        const stationId = id as StationId;
        setActive((current) => (current === stationId ? current : stationId));
        markOnce(stationId);
      },
      {
        rootMargin: "-32% 0px -48% 0px",
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
          const arrived = played.includes(station.id);
          return (
            <li key={station.id}>
              <a
                href={`#${station.id}`}
                data-marker={station.marker}
                className={arrived ? "has-marked" : undefined}
                aria-current={current ? "location" : undefined}
                onClick={() => markOnce(station.id)}
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

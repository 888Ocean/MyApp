import { characterSlots, type CharacterSlotName } from "@/lib/archive";
import Image from "next/image";

/**
 * Swappable character slot.
 * Placeholder art until real photos are dropped in (not this cut).
 * Replace the file, keep the path:
 *   /public/character/main.svg
 *   /public/character/coding.svg
 *   /public/character/camera.svg
 * The surface uses the neutral main figure. coding and camera stay unused.
 */
export function CharacterSlot({ slot = "main" }: { slot?: CharacterSlotName }) {
  return (
    <div className="character-slot" data-character-slot={slot}>
      <svg className="crops" viewBox="0 0 280 340" aria-hidden="true">
        <path d="M22 36 H40 M22 36 V54" />
        <path d="M258 36 H240 M258 36 V54" />
        <path d="M22 308 H40 M22 308 V290" />
        <path d="M258 308 H240 M258 308 V290" />
      </svg>
      {/* Placeholder neutral figure. Swap /public/character/main.svg later. */}
      <Image
        className="character-figure"
        src={characterSlots[slot]}
        alt=""
        width={280}
        height={340}
        unoptimized
        priority={slot === "main"}
      />
    </div>
  );
}

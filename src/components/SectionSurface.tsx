import { CharacterSlot } from "@/components/CharacterSlot";
import { IllustrativeMark } from "@/components/IllustrativeMark";
import { Waves } from "@/components/marks";
import { identity } from "@/lib/archive";

export function SectionSurface() {
  return (
    <section id="surface" className="layer layer-surface" aria-labelledby="surface-title">
      <div className="cold-open">
        <Waves />
        <div className="hero">
          <div className="hero-copy">
            <p className="folio">0 m · 海面</p>
            <p className="kicker">潮汐档案</p>
            <h1 id="surface-title" className="hero-name">
              {identity.name}
            </h1>
            <p className="line">{identity.line}</p>
            <a className="resume" href="#resume">
              简历
              <IllustrativeMark />
            </a>
          </div>
          <CharacterSlot />
        </div>
        <p className="scroll-hint">
          <span className="scroll-stem" aria-hidden="true" />
          Scroll
        </p>
      </div>
    </section>
  );
}

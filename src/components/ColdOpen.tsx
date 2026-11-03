import { StillMark, Waves } from "@/components/marks";

export function ColdOpen() {
  return (
    <div className="cold-open">
      <Waves />
      <div className="mark-wrap">
        <StillMark />
      </div>
      <div className="cold-copy">
        <p className="folio">0 m · 海面</p>
        <h1 id="surface-title" className="cold-title">
          <span className="zh">潮汐档案</span>
          <span className="en" lang="en">
            Tidal Archive
          </span>
        </h1>
        <p className="scroll-hint">
          <span className="scroll-stem" aria-hidden="true" />
          Scroll
        </p>
      </div>
    </div>
  );
}

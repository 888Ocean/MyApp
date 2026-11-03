import type { PlateId } from "@/lib/archive";

export function Waves() {
  return (
    <div className="waves" aria-hidden="true">
      <svg viewBox="0 0 1200 180" preserveAspectRatio="none">
        <g className="wave-far">
          <path
            d="M0 62 Q 100 46 200 62 T 400 62 T 600 62 T 800 62 T 1000 62 T 1200 62"
            fill="none"
            stroke="#1A2B2E"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
          <path
            d="M0 92 Q 130 76 260 92 T 520 92 T 780 92 T 1040 92 T 1200 92"
            fill="none"
            stroke="#1A2B2E"
            strokeOpacity="0.14"
            strokeWidth="1"
          />
        </g>
        <g className="wave-mid">
          <path
            d="M0 124 Q 150 108 300 124 T 600 124 T 900 124 T 1200 124"
            fill="none"
            stroke="#8FBCB0"
            strokeWidth="1.25"
          />
          <path
            d="M470 124 C 530 124 548 102 610 102 C 672 102 690 124 750 124"
            fill="none"
            stroke="#E07A5F"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

export function StillMark() {
  return (
    <svg
      className="still-mark"
      viewBox="0 0 280 340"
      role="img"
      aria-label="半身静帧标"
    >
      <g className="crops" fill="none" strokeWidth="1.1">
        <path d="M22 36 H40 M22 36 V54" stroke="#1A2B2E" />
        <path d="M258 36 H240 M258 36 V54" stroke="#1A2B2E" />
        <path d="M22 308 H40 M22 308 V290" stroke="#1A2B2E" />
        <path d="M258 308 H240 M258 308 V290" stroke="#E07A5F" />
      </g>
      <ellipse cx="118" cy="128" rx="72" ry="80" fill="#8FBCB0" opacity="0.55" />
      <path
        d="M48 300 C 74 228 106 206 140 206 C 176 206 210 232 236 300"
        fill="none"
        stroke="#1A2B2E"
        strokeWidth="1.45"
      />
      <path d="M108 300 V 232" stroke="#1A2B2E" strokeWidth="0.7" opacity="0.4" />
      <path d="M174 300 V 236" stroke="#1A2B2E" strokeWidth="0.7" opacity="0.4" />
      <path d="M122 206 V 168" stroke="#1A2B2E" strokeWidth="1.05" />
      <path d="M158 206 V 170" stroke="#1A2B2E" strokeWidth="1.05" />
      <ellipse
        cx="140"
        cy="122"
        rx="42"
        ry="50"
        fill="#F7F5F0"
        stroke="#1A2B2E"
        strokeWidth="1.4"
      />
      <path d="M140 84 V 164" stroke="#1A2B2E" strokeWidth="0.6" opacity="0.35" />
      <path
        d="M110 196 Q 140 184 174 198"
        fill="none"
        stroke="#E07A5F"
        strokeWidth="1.55"
      />
    </svg>
  );
}

export function PlateArt({ variant }: { variant: PlateId }) {
  if (variant === "01") {
    return (
      <svg viewBox="0 0 220 280" aria-hidden="true">
        <ellipse cx="96" cy="108" rx="62" ry="70" fill="#8FBCB0" opacity="0.45" />
        <path
          d="M28 250 C 52 186 78 168 110 168 C 146 168 172 190 196 250"
          fill="none"
          stroke="#1A2B2E"
          strokeWidth="1.3"
        />
        <path d="M96 168 V 138" stroke="#1A2B2E" strokeWidth="1" />
        <path d="M128 168 V 140" stroke="#1A2B2E" strokeWidth="1" />
        <ellipse
          cx="112"
          cy="104"
          rx="36"
          ry="44"
          fill="#F7F5F0"
          stroke="#1A2B2E"
          strokeWidth="1.3"
        />
        <path d="M86 158 Q 114 148 146 160" fill="none" stroke="#E07A5F" strokeWidth="1.3" />
      </svg>
    );
  }

  if (variant === "02") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <ellipse cx="128" cy="96" rx="58" ry="64" fill="#8FBCB0" opacity="0.4" />
        <path
          d="M46 188 C 78 150 104 138 128 138"
          fill="none"
          stroke="#1A2B2E"
          strokeWidth="1.3"
        />
        <path d="M118 138 V 112" stroke="#1A2B2E" strokeWidth="1" />
        <path d="M146 138 V 114" stroke="#1A2B2E" strokeWidth="1" />
        <ellipse
          cx="132"
          cy="86"
          rx="28"
          ry="34"
          fill="#F7F5F0"
          stroke="#1A2B2E"
          strokeWidth="1.3"
        />
        <path
          d="M146 138 C 168 146 184 166 192 188"
          fill="none"
          stroke="#1A2B2E"
          strokeWidth="1.3"
        />
        <path d="M112 128 Q 132 120 154 130" fill="none" stroke="#E07A5F" strokeWidth="1.3" />
      </svg>
    );
  }

  if (variant === "03") {
    return (
      <svg viewBox="0 0 220 240" aria-hidden="true">
        <ellipse cx="110" cy="78" rx="46" ry="36" fill="#8FBCB0" opacity="0.35" />
        <ellipse
          cx="110"
          cy="62"
          rx="18"
          ry="22"
          fill="#F7F5F0"
          stroke="#1A2B2E"
          strokeWidth="1.2"
        />
        <path d="M102 84 V 118" stroke="#1A2B2E" strokeWidth="1" />
        <path d="M118 84 V 118" stroke="#1A2B2E" strokeWidth="1" />
        <path
          d="M36 196 C 64 148 84 132 110 132 C 138 132 158 150 186 196"
          fill="none"
          stroke="#1A2B2E"
          strokeWidth="1.3"
        />
        <path d="M92 124 Q 110 118 128 124" fill="none" stroke="#E07A5F" strokeWidth="1.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 220" aria-hidden="true">
      <ellipse cx="96" cy="108" rx="48" ry="58" fill="#8FBCB0" opacity="0.4" />
      <ellipse
        cx="124"
        cy="112"
        rx="46"
        ry="56"
        fill="none"
        stroke="#1A2B2E"
        strokeWidth="1.25"
      />
      <path
        d="M40 186 C 70 162 150 162 184 186"
        fill="none"
        stroke="#1A2B2E"
        strokeWidth="1.15"
      />
      <path d="M70 156 H 108" stroke="#E07A5F" strokeWidth="1.3" />
    </svg>
  );
}

export function ArchiveMark() {
  return (
    <svg className="archive-mark" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="14.5" fill="none" stroke="#1A2B2E" strokeWidth="1.15" />
      <path
        d="M11 26 Q 17.5 19 24 26 T 37 26"
        fill="none"
        stroke="#E07A5F"
        strokeWidth="1.35"
      />
    </svg>
  );
}

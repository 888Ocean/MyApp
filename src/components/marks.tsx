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

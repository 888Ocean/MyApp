export function TideDivider() {
  return (
    <div className="tide" role="separator" aria-hidden="true">
      <svg viewBox="0 0 1200 48" preserveAspectRatio="none">
        <path
          d="M0 28 H1200"
          fill="none"
          stroke="#1A2B2E"
          strokeOpacity="0.18"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M500 28 C 545 28 560 14 610 14 C 660 14 675 28 720 28"
          fill="none"
          stroke="#E07A5F"
          strokeWidth="1.35"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

/**
 * Dashed arc that visually bridges three nodes: home -> K (center) -> arrive.
 * Rendered as an SVG so the dashes scale precisely with the section width.
 */
export function BridgeArc() {
  return (
    <svg
      viewBox="0 0 1000 110"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 167 100 Q 500 -90 833 100"
        fill="none"
        stroke="#1B2A4E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 7"
        strokeOpacity="0.35"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
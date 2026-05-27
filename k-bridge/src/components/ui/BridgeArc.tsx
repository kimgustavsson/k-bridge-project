/**
 * Dashed arc that visually bridges three nodes: home -> K (center) -> arrive.
 * Rendered as an SVG so the dashes scale precisely with the section width.
 */
export function BridgeArc() {
  return (
    <svg
      viewBox="0 0 1000 220"
      className="absolute inset-x-0 top-0 hidden h-full w-full md:block"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Left arc: from left node up to center K */}
      <path
        d="M 130 165 Q 315 -15 500 65"
        fill="none"
        stroke="#F5C518"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="bridge-arc-path"
      />
      {/* Right arc: from center K down to right node */}
      <path
        d="M 500 65 Q 685 -15 870 165"
        fill="none"
        stroke="#F5C518"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="bridge-arc-path"
      />
    </svg>
  );
}

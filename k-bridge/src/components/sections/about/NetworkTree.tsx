import { NETWORK_REGIONS } from "@/constants/network";

/**
 * Visual organization tree of K-BRIDGE's network reach.
 *
 * All nodes (root, regions, sub-items) share the same visual language:
 *   - White card, rounded, soft border
 *   - Hierarchy expressed through size and emphasis, not different colors
 *
 * Layout:
 *   Desktop : horizontal tree
 *   Mobile  : horizontal scroll + swipe hint
 */
export function NetworkTree() {
  return (
    <div className="relative">
      {/* Mobile scroll hint */}
      <div className="mb-3 flex items-center justify-center gap-2 text-xs text-neutral-muted md:hidden">
        <span aria-hidden="true">←</span>
        <span>Swipe to see all regions</span>
        <span aria-hidden="true">→</span>
      </div>

      {/* Scroll container */}
      <div className="overflow-x-auto pb-4 md:overflow-visible md:pb-0">
        <div className="min-w-[900px] md:min-w-0">
          {/* Root: K-BRIDGE HQ */}
          <div className="flex flex-col items-center">
            <RootNode />

            {/* Vertical line down from root */}
            <div className="h-10 w-px bg-brand-navy/20" />

            {/* Horizontal connector spanning all regions */}
            <HorizontalConnector regionCount={NETWORK_REGIONS.length} />

            {/* Region columns */}
            <div className="flex w-full items-start justify-around gap-2 md:gap-4">
              {NETWORK_REGIONS.map((region) => (
                <RegionColumn key={region.id} region={region} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- subcomponents --------------------------- */

function RootNode() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-brand-navy px-6 py-4 shadow-card">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow">
        <span className="font-display text-sm font-bold text-brand-navy">
          K
        </span>
      </div>
      <div>
        <p className="font-display text-base font-bold text-white md:text-lg">
          K-BRIDGE
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-yellow">
          Headquarters
        </p>
      </div>
    </div>
  );
}

interface HorizontalConnectorProps {
  regionCount: number;
}

function HorizontalConnector({ regionCount }: HorizontalConnectorProps) {
  const widthPercent = ((regionCount - 1) / regionCount) * 100;

  return (
    <div className="relative w-full" style={{ height: "1px" }}>
      <div
        className="absolute left-1/2 h-px -translate-x-1/2 bg-brand-navy/20"
        style={{ width: `${widthPercent}%` }}
      />
    </div>
  );
}

interface RegionColumnProps {
  region: (typeof NETWORK_REGIONS)[number];
}

function RegionColumn({ region }: RegionColumnProps) {
  return (
    <div className="flex flex-1 flex-col items-center">
      {/* Vertical line from horizontal connector down to region card */}
      <div className="h-10 w-px bg-brand-navy/20" />

      {/* Region node (larger, more prominent) */}
      <TreeNode label={region.name} variant="region" />

      {/* Connector + branches */}
      <div className="mt-2 flex flex-col items-center">
        {region.branches.map((branch, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Vertical connector above each branch */}
            <div className="h-6 w-px bg-brand-navy/15" />
            <TreeNode label={branch.cities} variant="branch" />
          </div>
        ))}
      </div>
    </div>
  );
}

interface TreeNodeProps {
  label: string;
  variant: "region" | "branch";
}

/**
 * Unified card design for both region and branch nodes.
 * Hierarchy is expressed via size (padding, font), not color/border style.
 */
function TreeNode({ label, variant }: TreeNodeProps) {
  const isRegion = variant === "region";

  return (
    <div
      className={
        isRegion
          ? "rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-center shadow-sm"
          : "rounded-xl border border-brand-navy/10 bg-white px-3 py-2 text-center shadow-sm"
      }
    >
      <p
        className={
          isRegion
            ? "font-display text-sm font-bold text-brand-navy md:text-base"
            : "text-xs text-brand-navy md:text-sm"
        }
      >
        {label}
      </p>
    </div>
  );
}

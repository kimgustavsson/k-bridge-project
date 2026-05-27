import { Button } from "@/components/ui/Button";
import { BridgeArc } from "@/components/ui/BridgeArc";
import { JOURNEY_STEPS } from "@/constants/journey";
import { cn } from "@/lib/cn";

export function AboutBridge() {
  const leftStep = JOURNEY_STEPS[0];
  const middleStep = JOURNEY_STEPS[1];
  const rightStep = JOURNEY_STEPS[2];

  return (
    <section className="relative bg-brand-navy py-20 text-white md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-yellow" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            About K-Bridge
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight md:text-5xl lg:text-[3.4rem]">
          The bridge between where
          <br className="hidden md:block" /> you are and where you&apos;re
          going.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
          K-Bridge bridges the gap between your home country and Korean
          academia, allowing you to simply cross over without the effort of
          building it yourself.
        </p>

        {/* Bridge visualization */}
        <div className="mx-auto mt-20 max-w-5xl md:mt-32">
          {/* Top band: dashed arc + K node centered above it */}
          <div className="relative mx-auto h-28 md:h-32">
            <BridgeArc />

            {/* K node position */}
            <div className="absolute left-1/2 -top-10 -translate-x-1/2 -translate-y-1/2">
              <KNode />
            </div>
          </div>

          {/* Bottom row: left + middle-text + right */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <JourneyNode step={leftStep} showDot />
            <JourneyNode step={middleStep} showDot={false} />
            <JourneyNode step={rightStep} showDot />
          </div>
        </div>

        {/* Read our story button */}
        <div className="mt-14 flex justify-center md:mt-16">
          <Button href="/about" variant="primary" withArrow>
            Read our story
          </Button>
        </div>
      </div>
    </section>
  );
}

function KNode() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-yellow bg-brand-yellow text-brand-navy shadow-[0_0_0_8px_rgba(245,197,24,0.15)]">
      <span className="font-display text-xl font-bold">K</span>
    </div>
  );
}

interface JourneyNodeProps {
  step: (typeof JOURNEY_STEPS)[number];
  showDot: boolean;
}

function JourneyNode({ step, showDot }: JourneyNodeProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Always reserve dot space so all columns align; hide it when showDot is false */}
      <span
        className={cn(
          "mb-5 h-3 w-3 rounded-full bg-brand-yellow",
          !showDot && "invisible",
        )}
        aria-hidden="true"
      />

      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.18em]",
          step.highlight ? "text-brand-yellow" : "text-white/55",
        )}
      >
        {step.label}
      </p>

      <h3 className="mt-1.5 font-display text-xl font-semibold md:text-2xl">
        {step.title}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
        {step.description}
      </p>
    </div>
  );
}

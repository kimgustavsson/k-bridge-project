import { Button } from '@/components/ui/Button';
import { BridgeArc } from '@/components/ui/BridgeArc';
import { JOURNEY_STEPS } from '@/constants/journey';
import { cn } from '@/lib/cn';

export function AboutBridge() {
  return (
    <section className="relative bg-brand-navy py-20 text-white md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-3">
          <span className="h-0.5 w-8 bg-brand-yellow" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            About K-Bridge
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight md:text-5xl lg:text-[3.4rem]">
          The bridge between where
          <br className="hidden md:block" /> you are and where you&apos;re going.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/75 md:text-base">
          K-Bridge spans two sides — your home country and Korean academia — so you
          only have to walk across, not build it yourself.
        </p>

        {/* Bridge visualization */}
        <div className="relative mx-auto mt-16 max-w-5xl md:mt-20">
          <BridgeArc />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {JOURNEY_STEPS.map((step, idx) => (
              <JourneyNode key={step.id} step={step} index={idx} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center md:mt-16">
          <Button href="/about" variant="primary" withArrow>
            Read our story
          </Button>
        </div>
      </div>
    </section>
  );
}

interface JourneyNodeProps {
  step: (typeof JOURNEY_STEPS)[number];
  index: number;
}

function JourneyNode({ step, index }: JourneyNodeProps) {
  // Middle node sits higher (it's the "K" peak of the arc)
  const isMiddle = index === 1;

  return (
    <div
      className={cn(
        'flex flex-col items-center text-center',
        isMiddle && 'md:-mt-24',
      )}
    >
      {/* Node circle */}
      <div
        className={cn(
          'flex items-center justify-center rounded-full border-2 transition-transform',
          isMiddle
            ? 'h-14 w-14 border-brand-yellow bg-brand-yellow text-brand-navy shadow-[0_0_0_8px_rgba(245,197,24,0.15)]'
            : 'h-7 w-7 border-brand-yellow bg-brand-yellow',
        )}
      >
        {isMiddle && <span className="font-display text-xl font-bold">K</span>}
      </div>

      {/* Label */}
      <p
        className={cn(
          'mt-5 text-[11px] font-bold uppercase tracking-[0.18em]',
          step.highlight ? 'text-brand-yellow' : 'text-white/55',
        )}
      >
        {step.label}
      </p>

      {/* Title */}
      <h3 className="mt-1.5 font-display text-xl font-semibold md:text-2xl">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
        {step.description}
      </p>
    </div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { BridgeArc } from "@/components/ui/BridgeArc";
import { JOURNEY_STEPS, type JourneyStep } from "@/constants/journey";
import { cn } from "@/lib/cn";

export function AboutBridge() {
  const t = useTranslations("aboutBridge");

  const leftStep = JOURNEY_STEPS[0];
  const middleStep = JOURNEY_STEPS[1];
  const rightStep = JOURNEY_STEPS[2];

  return (
    <section className="bg-orange-50 py-20 md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-navy" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
            {t("eyebrow")}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-5xl lg:text-[3.4rem] break-keep">
          {t("title")}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-neutral-800 md:text-base break-keep">
          {t("subtitle")}
        </p>

        {/* Bridge visualization */}
        <div className="mx-auto mt-16 max-w-5xl md:mt-32">
          {/* DESKTOP: horizontal bridge arc + 3 columns */}
          <div className="hidden md:block">
            <div className="relative mx-auto h-28 md:h-32">
              <BridgeArc />
              <div className="absolute left-1/2 -top-10 -translate-x-1/2 -translate-y-1/2">
                <KNode />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <JourneyNode step={leftStep} showDot variant="desktop" />
              <JourneyNode
                step={middleStep}
                showDot={false}
                variant="desktop"
              />
              <JourneyNode step={rightStep} showDot variant="desktop" />
            </div>
          </div>

          {/* MOBILE: vertical timeline */}
          <div className="md:hidden">
            <MobileTimeline steps={[leftStep, middleStep, rightStep]} />
          </div>
        </div>

        {/* Read our story button */}
        <div className="mt-14 flex justify-center md:mt-16">
          <Button href="/about" variant="primary" withArrow>
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- DESKTOP K-Node --------------------------- */

function KNode() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_0_0_8px_rgba(27,42,78,0.12)]">
      <span className="font-display text-xl font-bold">K</span>
    </div>
  );
}

/* --------------------------- DESKTOP node --------------------------- */

interface JourneyNodeProps {
  step: JourneyStep;
  showDot: boolean;
  variant?: "desktop" | "mobile";
}

function JourneyNode({ step, showDot }: JourneyNodeProps) {
  const t = useTranslations("journey");

  return (
    <div className="flex flex-col items-center text-center">
      <span
        className={cn(
          "mb-5 h-3 w-3 rounded-full bg-brand-navy",
          !showDot && "invisible",
        )}
        aria-hidden="true"
      />

      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.18em]",
          step.highlight ? "text-brand-yellow-dark" : "text-brand-navy/55",
        )}
      >
        {t(`${step.translationKey}.label`)}
      </p>

      <h3 className="mt-1.5 font-display text-xl font-semibold text-brand-navy md:text-2xl break-keep">
        {t(`${step.translationKey}.title`)}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-800 break-keep">
        {t(`${step.translationKey}.description`)}
      </p>
    </div>
  );
}

/* --------------------------- MOBILE Timeline --------------------------- */

interface MobileTimelineProps {
  steps: JourneyStep[];
}

function MobileTimeline({ steps }: MobileTimelineProps) {
  const t = useTranslations("journey");

  return (
    <div className="relative mx-auto max-w-md">
      {/* Vertical dashed line — runs behind the nodes */}
      <div
        className="absolute left-7 top-7 bottom-7 w-px border-l-2 border-dashed border-brand-navy/30"
        aria-hidden="true"
      />

      {/* Steps */}
      <ol className="relative space-y-8">
        {steps.map((step) => (
          <MobileTimelineStep key={step.translationKey} step={step} />
        ))}
      </ol>
    </div>
  );
}

interface MobileTimelineStepProps {
  step: JourneyStep;
}

function MobileTimelineStep({ step }: MobileTimelineStepProps) {
  const t = useTranslations("journey");
  const isHighlight = step.highlight;

  return (
    <li className="relative flex gap-5">
      {/* Node — large yellow for K-BRIDGE, small for others */}
      <div className="relative z-10 flex-shrink-0">
        {isHighlight ? (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_0_0_6px_rgba(27,42,78,0.12)]">
            <span className="font-display text-lg font-bold">K</span>
          </div>
        ) : (
          <div className="ml-[18px] mt-[18px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-navy bg-orange-50">
            <span className="h-2 w-2 rounded-full bg-brand-navy" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <p
          className={cn(
            "text-[11px] font-bold uppercase tracking-[0.18em]",
            isHighlight ? "text-brand-yellow-dark" : "text-brand-navy/55",
          )}
        >
          {t(`${step.translationKey}.label`)}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-brand-navy break-keep">
          {t(`${step.translationKey}.title`)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-800 break-keep">
          {t(`${step.translationKey}.description`)}
        </p>
      </div>
    </li>
  );
}

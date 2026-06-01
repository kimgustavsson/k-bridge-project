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
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-5xl lg:text-[3.4rem]">
          {t("title")}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-brand-navy/70 md:text-base">
          {t("subtitle")}
        </p>

        {/* Bridge visualization */}
        <div className="mx-auto mt-20 max-w-5xl md:mt-32">
          <div className="relative mx-auto h-28 md:h-32">
            <BridgeArc />
            <div className="absolute left-1/2 -top-10 -translate-x-1/2 -translate-y-1/2">
              <KNode />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <JourneyNode step={leftStep} showDot />
            <JourneyNode step={middleStep} showDot={false} />
            <JourneyNode step={rightStep} showDot />
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

function KNode() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_0_0_8px_rgba(27,42,78,0.12)]">
      <span className="font-display text-xl font-bold">K</span>
    </div>
  );
}

interface JourneyNodeProps {
  step: JourneyStep;
  showDot: boolean;
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

      <h3 className="mt-1.5 font-display text-xl font-semibold text-brand-navy md:text-2xl">
        {t(`${step.translationKey}.title`)}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-navy/65">
        {t(`${step.translationKey}.description`)}
      </p>
    </div>
  );
}

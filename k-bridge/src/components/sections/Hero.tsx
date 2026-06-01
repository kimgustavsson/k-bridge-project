import Image from "next/image";
import { useTranslations } from "next-intl"; // Added useTranslations hook
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HERO_FEATURES } from "@/constants/features";

export function Hero() {
  // Initialize translation function for the "Hero" namespace
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-neutral-bg pb-16 md:pb-24">
      {/* Hero image with overlay text */}
      <div className="relative h-[420px] w-full overflow-hidden md:h-[520px] lg:h-[560px]">
        <Image
          src="/images/hero-image.jpg"
          // Replaced hardcoded text with translation key
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Subtle darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-brand-navy/20 to-brand-navy/45" />

        {/* Title block */}
        <div className="container-padded relative flex h-full items-center justify-center">
          <div className="max-w-3xl text-center text-white">
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              {t.rich("title", {
                br: () => <br />,
              })}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
              {/* Replaced hardcoded description with translation key */}
              {t("description")}
            </p>
          </div>
        </div>
      </div>

      {/* Feature cards - overlapping hero bottom */}
      <div className="container-padded relative z-10 -mt-20 md:-mt-24">
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {HERO_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

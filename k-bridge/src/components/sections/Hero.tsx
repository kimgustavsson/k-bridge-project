"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HERO_FEATURES } from "@/constants/features";
import { cn } from "@/lib/cn";

// Slideshow images — easy to add/remove later
const HERO_IMAGES = [
  "/images/main-hero1.jpg",
  "/images/main-hero2.jpg",
  "/images/main-hero3.jpg",
] as const;

const SLIDE_DURATION_MS = 3000; // Each image stays visible for 3 seconds

export function Hero() {
  const t = useTranslations("hero");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-neutral-bg pb-16 md:pb-24">
      {/* Hero image with overlay text */}
      <div className="relative h-[420px] w-full overflow-hidden md:h-[520px] lg:h-[560px]">
        {/* Slideshow images — all stacked, only current is visible */}
        {HERO_IMAGES.map((src, idx) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-800 ease-in-out",
              idx === currentIndex ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={idx !== currentIndex}
          >
            <Image
              src={src}
              alt={t("imageAlt")}
              fill
              sizes="100vw"
              priority={idx === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Subtle darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-brand-navy/20 to-brand-navy/45" />

        {/* Title block */}
        <div className="container-padded relative flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl break-keep">
              {t.rich("title", {
                br: () => <br />,
              })}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base break-keep">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Slide indicators (dots) — right side, vertical */}
        <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 md:right-6">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Show image ${idx + 1}`}
              aria-current={idx === currentIndex ? "true" : "false"}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                idx === currentIndex
                  ? "h-8 w-2 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75",
              )}
            />
          ))}
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

import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function AboutHero() {
  const t = useTranslations("aboutHero");

  return (
    <section className="bg-white">
      <div className="container-padded grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-20 lg:py-28">
        {/* Left: text content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-10 bg-brand-yellow" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
              {t("eyebrow")}
            </span>
          </div>

          {/* Title — keep navy for identity */}
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-brand-navy md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>

          {/* Quote-style history — softer body color */}
          <blockquote className="relative mt-8 border-brand-yellow pl-6">
            <Quote
              className="absolute -left-3 -top-3 h-6 w-6 text-brand-yellow"
              strokeWidth={1.5}
              fill="currentColor"
            />
            <p className="font-display text-base italic leading-relaxed text-neutral-800 md:text-base">
              {t("history.paragraph1")}
            </p>
            <p className="mt-3 font-display text-base italic leading-relaxed text-neutral-800 md:text-base">
              {t("history.paragraph2")}
            </p>
          </blockquote>

          {/* Quick stats */}
          <div className="mt-10 border-t border-brand-navy/10 pt-8">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <Stat
                number={t("stats.founded.number")}
                label={t("stats.founded.label")}
              />
              <Stat
                number={t("stats.offices.number")}
                label={t("stats.offices.label")}
              />
              <Stat
                number={t("stats.associations.number")}
                label={t("stats.associations.label")}
              />
            </div>

            {/* Trust credentials */}
            <div className="mt-6 border-t border-brand-navy/5 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
                {t("credentials.label")}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-muted md:text-sm">
                {t.rich("credentials.text", {
                  one: () => (
                    <span className="font-semibold text-brand-navy">
                      {t("credentials.associationOne")}
                    </span>
                  ),
                  two: () => (
                    <span className="font-semibold text-brand-navy">
                      {t("credentials.associationTwo")}
                    </span>
                  ),
                })}
              </p>
            </div>
          </div>

          {/* CTA — body weight, navy on hover gives identity feel */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-base font-semibold text-neutral-800 transition-colors hover:text-brand-yellow-dark"
            >
              <span>{t("cta")}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-auto md:min-h-[500px]">
          <Image
            src="/images/student-graduation.jpg"
            alt={t("imageAlt")}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />

          {/* Floating quote — neutral body text */}
          <div className="absolute bottom-6 left-6 right-6 max-w-sm rounded-xl bg-white/95 p-5 shadow-card backdrop-blur-sm md:bottom-8 md:left-8">
            <p className="text-sm leading-relaxed text-neutral-800 md:text-base">
              &ldquo;{t("principle.quote")}&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-yellow-dark">
              {t("principle.attribution")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface StatProps {
  number: string;
  label: string;
}

function Stat({ number, label }: StatProps) {
  return (
    <div>
      {/* Number stays navy — these are key data points */}
      <p className="font-display text-xl font-bold text-brand-navy md:text-2xl">
        {number}
      </p>
      {/* Label is supporting, so muted */}
      <p className="mt-1 text-xs leading-tight text-neutral-muted md:text-sm">
        {label}
      </p>
    </div>
  );
}

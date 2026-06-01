import { useTranslations } from "next-intl";
import { SUPPORT_ITEMS, type SupportItem } from "@/constants/support";

export function HowWeSupport() {
  const t = useTranslations("howWeSupport");

  return (
    <section className="bg-neutral-bg py-20 md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-yellow" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
            {t("eyebrow")}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-5xl">
          {t("title")}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-neutral-muted md:text-lg">
          {t("subtitle")}
        </p>

        {/* Support cards */}
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {SUPPORT_ITEMS.map((item) => (
            <SupportCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface SupportCardProps {
  item: SupportItem;
}

function SupportCard({ item }: SupportCardProps) {
  const t = useTranslations("howWeSupport.items");
  const Icon = item.icon;

  return (
    <article className="group relative flex gap-5 rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover md:gap-6 md:p-8">
      {/* Left: number block */}
      <div className="flex-shrink-0">
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-brand-navy text-white md:h-20 md:w-20">
          <span className="font-display text-2xl font-bold leading-none md:text-3xl">
            {item.number}
          </span>
        </div>

        <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-yellow/15 text-brand-navy md:h-20 md:w-20">
          <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.75} />
        </div>
      </div>

      {/* Right: text */}
      <div className="flex-1 pt-1">
        <h3 className="font-display text-lg font-bold leading-snug text-brand-navy md:text-xl">
          {t(`${item.translationKey}.title`)}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-muted md:text-[15px]">
          {t(`${item.translationKey}.description`)}
        </p>
      </div>
    </article>
  );
}

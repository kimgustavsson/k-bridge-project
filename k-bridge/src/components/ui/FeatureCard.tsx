import { useTranslations } from "next-intl";
import type { FeatureItem } from "@/types";

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;
  const t = useTranslations("heroFeatures");

  return (
    <article className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:p-7">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand-yellow group-hover:text-brand-navy">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>

      <h3 className="mb-3 text-lg font-bold leading-snug text-brand-navy">
        {t(feature.titleKey)}
      </h3>

      <p className="text-sm leading-relaxed text-neutral-muted">
        {t(feature.descriptionKey)}
      </p>
    </article>
  );
}

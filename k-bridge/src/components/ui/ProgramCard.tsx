import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ProgramItem } from "@/types";

interface ProgramCardProps {
  program: ProgramItem;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const t = useTranslations("landingPrograms.cards");

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Image with overlay */}
      <div className="relative h-72 overflow-hidden md:h-80">
        <Image
          src={program.image}
          alt={t(program.titleKey)}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/85 via-brand-navy/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
          <h3 className="mb-2 text-2xl font-bold leading-tight md:text-3xl">
            {t(program.titleKey)}
          </h3>
          <p className="text-sm text-white/85 md:text-base">
            {t(program.descriptionKey)}
          </p>
        </div>
      </div>

      {/* CTA strip */}
      <Link
        href={program.href}
        className="flex items-center justify-between bg-brand-yellow px-6 py-4 font-semibold text-brand-navy transition-colors hover:bg-brand-yellow-dark md:px-8"
      >
        <span>{t(program.ctaLabelKey)}</span>
        <ArrowRight
          className="h-5 w-5 transition-transform group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      </Link>
    </article>
  );
}

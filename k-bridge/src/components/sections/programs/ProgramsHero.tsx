import Image from "next/image";
import { useTranslations } from "next-intl";

export function ProgramsHero() {
  const t = useTranslations("programsHero");

  return (
    <section className="relative bg-brand-navy text-white">
      <div className="relative h-[360px] w-full overflow-hidden md:h-[440px]">
        <Image
          src="/images/student-graduation.jpg"
          alt={t("imageAlt")}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/60 to-brand-navy/80" />

        <div className="container-padded relative flex h-full items-center">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-0.5 w-10 bg-brand-yellow" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                {t("eyebrow")}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl break-keep">
              {" "}
              {t.rich("title", {
                br: () => <br />,
              })}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg break-keep">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

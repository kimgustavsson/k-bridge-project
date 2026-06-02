import { useTranslations } from "next-intl";

export function ContactHero() {
  const t = useTranslations("contactHero");

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Big soft background blobs */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl md:-right-20 md:-top-20" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-brand-emerald/15 blur-3xl" />

        {/* Floating circles — top area */}
        <div className="absolute left-[8%] top-[15%] h-12 w-12 rounded-full bg-brand-yellow/60 shadow-card animate-float-slow" />
        <div className="absolute right-[12%] top-[20%] h-8 w-8 rounded-full bg-brand-emerald/70 shadow-card animate-float-medium" />
        <div className="absolute left-[18%] top-[35%] h-6 w-6 rounded-full bg-brand-navy/50 shadow-card animate-float-fast" />

        {/* Floating circles — middle */}
        <div className="absolute right-[8%] top-[50%] h-10 w-10 rounded-full bg-brand-emerald/50 shadow-card animate-float-slow" />
        <div className="absolute left-[5%] top-[60%] h-7 w-7 rounded-full bg-brand-yellow/70 shadow-card animate-float-medium" />

        {/* Floating circles — bottom */}
        <div className="absolute right-[20%] bottom-[15%] h-9 w-9 rounded-full bg-brand-yellow/60 shadow-card animate-float-fast" />
        <div className="absolute left-[14%] bottom-[20%] h-6 w-6 rounded-full bg-brand-emerald/60 shadow-card animate-float-slow" />
        <div className="absolute right-[35%] bottom-[8%] h-5 w-5 rounded-full bg-brand-navy/40 shadow-card animate-float-medium" />
      </div>

      {/* Content */}
      <div className="container-padded relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-10 bg-brand-yellow" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
              {t("eyebrow")}
            </span>
            <span className="h-0.5 w-10 bg-brand-yellow" />
          </div>

          {/* Title — navy for hierarchy */}
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-brand-navy md:text-5xl lg:text-6xl">
            {t("title.line1")}
            <br />
            {t("title.line2")}
          </h1>

          {/* Subtitle — body color */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg break-keep">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

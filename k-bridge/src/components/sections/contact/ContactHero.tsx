export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Decorative shapes — large, soft, off to one side */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Big yellow circle, top right */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-yellow/30 blur-3xl md:-right-20 md:-top-20" />
        {/* Smaller emerald blob, bottom left */}
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-brand-emerald/20 blur-3xl" />
        {/* Tiny accent shape */}
        <div className="absolute right-1/4 top-1/3 h-24 w-24 rotate-12 rounded-3xl bg-brand-yellow/40 md:h-32 md:w-32" />
      </div>

      {/* Content */}
      <div className="container-padded relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-10 bg-brand-yellow" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
              Get in Touch
            </span>
            <span className="h-0.5 w-10 bg-brand-yellow" />
          </div>

          {/* Title */}
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-brand-navy md:text-5xl lg:text-6xl">
            Got a question?
            <br />
            We&apos;d love to hear from you.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-muted md:text-lg">
            Whether you&apos;re a student exploring options, a parent
            researching paths, or a university interested in partnering with us
            — we&apos;re a message away.
          </p>
        </div>
      </div>
    </section>
  );
}

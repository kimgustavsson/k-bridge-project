import { Quote } from "lucide-react";

export function OurStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-padded">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-10 bg-brand-yellow" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
              Our Story
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl lg:text-5xl">
            We were international students first.
          </h2>

          {/* Lead paragraph */}
          <p className="mt-8 text-lg leading-relaxed text-neutral-muted md:text-xl">
            K-BRIDGE began with a simple realization: the people best equipped
            to guide international students through Korean academia are the ones
            who&apos;ve done it themselves.
          </p>

          {/* Two-column story */}
          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                The problem we kept seeing
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-muted">
                Every year, thousands of students arrive in Korea full of
                excitement — and then run into the same walls. Language
                barriers. Confusing visa rules. Universities that feel
                impossible to reach from abroad. Many quietly give up before
                they even apply.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                The bridge we&apos;re building
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-muted">
                We started K-BRIDGE to remove those walls. Our advisors
                aren&apos;t just consultants — they&apos;re alumni from Vietnam,
                China, and beyond who learned Korean, studied here, and now help
                the next generation do the same with less struggle.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <figure className="mt-16 rounded-2xl bg-neutral-bg p-8 md:mt-20 md:p-12">
            <Quote className="h-8 w-8 text-brand-yellow" strokeWidth={1.5} />
            <blockquote className="mt-4 font-display text-xl leading-relaxed text-brand-navy md:text-2xl lg:text-3xl">
              The hardest part of studying abroad isn&apos;t the studying.
              It&apos;s everything around it. That&apos;s what we&apos;re here
              for.
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-yellow-dark">
              — K-BRIDGE founding principle
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

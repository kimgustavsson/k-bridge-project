import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function AboutHero() {
  return (
    <section className="bg-neutral-bg">
      <div className="container-padded grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:gap-20 lg:py-28">
        {/* Left: text content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-10 bg-brand-yellow" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
              About K-BRIDGE
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 font-display text-3xl font-bold leading-[1.1] text-brand-navy md:text-5xl lg:text-6xl">
            Empowering International Students education.
          </h1>

          {/* Quote-style company history */}
          <blockquote className="relative mt-8 border-brand-yellow pl-6">
            <Quote
              className="absolute -left-3 -top-3 h-6 w-6 text-brand-yellow"
              strokeWidth={1.5}
              fill="currentColor"
            />
            <p className="font-display text-base italic leading-relaxed text-brand-navy md:text-md">
              Founded in 2014, K-BRIDGE opened its first language institute in
              Hanoi in 2016 and expanded to a larger campus in 2019. We&apos;ve
              been growing steadily ever since.
            </p>
            <p className="mt-3 font-display text-base italic leading-relaxed text-brand-navy md:text-lg">
              Today, we use our local network and recruitment experience to
              support international students bound for Korea, collaborating with
              universities to strengthen Korean higher education&apos;s global
              reach.
            </p>
          </blockquote>

          {/* Quick stats */}
          <div className="mt-10 border-t border-brand-navy/10 pt-8">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <Stat number="Since 2014" label="Building bridges" />
              <Stat number="4" label="Offices abroad" />
              <Stat number="2" label="Member associations" />
            </div>

            {/* Trust credentials */}
            <div className="mt-6 border-t border-brand-navy/5 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
                Officially recognized by
              </p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-muted md:text-sm">
                Member of the{" "}
                <span className="font-semibold text-brand-navy">
                  Bareun International Student Recruitment Support Association
                </span>{" "}
                and partner of the{" "}
                <span className="font-semibold text-brand-navy">
                  Korean Language Education Council
                </span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-base font-semibold text-brand-navy transition-colors hover:text-brand-yellow-dark"
            >
              <span>Talk to our team</span>
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
            alt="K-BRIDGE team and alumni"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />

          {/* Floating quote card on the image */}
          <div className="absolute bottom-6 left-6 right-6 max-w-sm rounded-xl bg-white/95 p-5 shadow-card backdrop-blur-sm md:bottom-8 md:left-8">
            <p className="text-sm leading-relaxed text-brand-navy md:text-base">
              &ldquo;The hardest part of studying abroad isn&apos;t the
              studying. It&apos;s everything around it. That&apos;s what
              we&apos;re here for.&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-yellow-dark">
              — K-BRIDGE founding principle
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
      <p className="font-display text-xl font-bold text-brand-navy md:text-2xl">
        {number}
      </p>
      <p className="mt-1 text-xs leading-tight text-neutral-muted md:text-sm">
        {label}
      </p>
    </div>
  );
}

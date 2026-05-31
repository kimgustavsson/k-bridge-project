import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-brand-navy md:text-5xl lg:text-6xl">
            Built by alumni who&apos;ve
            <br className="hidden md:block" /> walked this path.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-muted md:text-lg">
            K-BRIDGE was started by international students who once stood
            exactly where you do now — confused by admissions, unsure about
            scholarships, and a long way from home. Today, we run the agency we
            wish we&apos;d had.
          </p>

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brand-navy/10 pt-8">
            <Stat number="3" label="Offices abroad" />
            <Stat number="2" label="Member associations" />
            <Stat number="100%" label="Alumni-led" />
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-navy transition-colors hover:text-brand-yellow-dark"
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
          {/* Subtle navy tint for cohesion with brand */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />

          {/* Floating quote card on the image */}
          <div className="absolute bottom-6 left-6 right-6 max-w-sm rounded-xl bg-white/95 p-5 shadow-card backdrop-blur-sm md:bottom-8 md:left-8">
            <p className="text-sm leading-relaxed text-brand-navy md:text-base">
              &ldquo;We&apos;re not here to sell you a program. We&apos;re here
              to help you find your way.&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-yellow-dark">
              — The K-BRIDGE Team
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
      <p className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
        {number}
      </p>
      <p className="mt-1 text-xs leading-tight text-neutral-muted md:text-sm">
        {label}
      </p>
    </div>
  );
}

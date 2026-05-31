import { Quote } from "lucide-react";
import { NetworkTree } from "./NetworkTree";
import { OFFICES } from "@/constants/offices";
import { cn } from "@/lib/cn";

export function GlobalPresence() {
  const hq = OFFICES.find((o) => o.isHeadquarters)!;
  const branches = OFFICES.filter((o) => !o.isHeadquarters);

  return (
    <section className="bg-orange-50 py-20 md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-yellow" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
            Global Presence
          </span>
        </div>

        {/* --- Section A: Offices --- */}
        <div className="mt-12 md:mt-16">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-brand-navy md:text-3xl lg:text-4xl">
              Our Global Headquarters & Branches
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-muted md:text-base">
              Four locations across three countries, with one shared goal: to
              make Korean education accessible from wherever you call home.
            </p>
          </div>

          {/* Featured layout: HQ wide on top, branches in 3-column row below */}
          <div className="mt-10 md:mt-14">
            <HQCard office={hq} />

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-6 md:gap-6 lg:grid-cols-3">
              {branches.map((office) => (
                <BranchCard key={office.id} office={office} />
              ))}
            </div>
          </div>
        </div>

        {/* --- Section B: Network Tree --- */}
        <div className="mt-20 md:mt-28">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-brand-navy md:text-3xl lg:text-4xl">
              Our Network Reach
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-muted md:text-base">
              Beyond our four physical offices, we recruit and partner with
              students and institutions across Asia. Here&apos;s where our
              network reaches today.
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <NetworkTree />
          </div>
        </div>

        {/* --- Pull quote --- */}
        <figure className="mx-auto mt-20 max-w-3xl text-center md:mt-28">
          <Quote
            className="mx-auto h-10 w-10 text-orange-500"
            strokeWidth={1.5}
          />
          <blockquote className="mt-6 font-display text-xl leading-relaxed text-brand-navy md:text-2xl lg:text-3xl">
            The hardest part of studying abroad isn&apos;t the studying.
            It&apos;s everything around it. That&apos;s what we&apos;re here
            for.
          </blockquote>
          <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
            — K-BRIDGE founding principle
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface OfficeCardProps {
  office: (typeof OFFICES)[number];
}

function HQCard({ office }: OfficeCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border-2 border-brand-yellow bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left: HQ badge + city */}
        <div className="flex-shrink-0 md:w-64">
          <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
            ★ Headquarters
          </span>

          <h4 className="mt-4 font-display text-3xl font-bold text-brand-navy md:text-4xl">
            {office.city}
          </h4>
          <p className="text-base text-neutral-muted">{office.country}</p>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-brand-yellow-dark">
            {office.role}
          </p>
        </div>

        {/* Right: description + services */}
        <div className="flex-1">
          <p className="text-base leading-relaxed text-neutral-muted md:text-lg">
            {office.description}
          </p>

          {office.services.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {office.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-brand-navy/15 bg-brand-navy/5 px-3 py-1.5 text-xs font-semibold text-brand-navy"
                >
                  {service}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function BranchCard({ office }: OfficeCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-orange-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover",
      )}
    >
      {/* City + Country */}
      <h4 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
        {office.city}
      </h4>
      <p className="text-sm text-neutral-muted">{office.country}</p>

      {/* Role */}
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-orange-700">
        {office.role}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-neutral-muted">
        {office.description}
      </p>

      {/* Service chips */}
      {office.services.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {office.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700"
            >
              {service}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

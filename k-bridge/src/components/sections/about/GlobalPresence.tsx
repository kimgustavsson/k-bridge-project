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

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl lg:text-5xl">
          Our Headquarters & Branches
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-neutral-muted md:text-lg">
          Four locations across three countries, with one shared goal: to make
          Korean education accessible from wherever you call home.
        </p>

        {/* Offices */}
        <div className="mt-12 md:mt-16">
          <HQCard office={hq} />

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-6 md:gap-6 lg:grid-cols-3">
            {branches.map((office) => (
              <BranchCard key={office.id} office={office} />
            ))}
          </div>
        </div>

        {/* Network note — small, centered, restrained */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-brand-navy/10 pt-10 text-center md:mt-20 md:pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow-dark">
            Beyond our offices
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-muted md:text-base">
            We also recruit and welcome students from{" "}
            <span className="font-semibold text-brand-navy">Mongolia</span>,{" "}
            <span className="font-semibold text-brand-navy">Indonesia</span>,{" "}
            <span className="font-semibold text-brand-navy">Myanmar</span>,{" "}
            <span className="font-semibold text-brand-navy">Uzbekistan</span>,{" "}
            <span className="font-semibold text-brand-navy">Nepal</span>, and
            partner with universities across China and Vietnam beyond our office
            cities.
          </p>
        </div>
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

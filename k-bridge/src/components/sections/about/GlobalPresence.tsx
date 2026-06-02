import { useTranslations } from "next-intl";
import { OFFICES, type Office } from "@/constants/offices";
import { cn } from "@/lib/cn";

export function GlobalPresence() {
  const t = useTranslations("globalPresence");
  const hq = OFFICES.find((o) => o.isHeadquarters)!;
  const branches = OFFICES.filter((o) => !o.isHeadquarters);

  return (
    <section className="bg-orange-50 py-20 md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-yellow" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
            {t("eyebrow")}
          </span>
        </div>

        {/* Title — navy for hierarchy */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>

        {/* Subtitle — body color */}
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-neutral-900 md:text-lg break-keep">
          {t("subtitle")}
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

        {/* Network note */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-brand-navy/10 pt-10 text-center md:mt-20 md:pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow-dark">
            {t("beyondOffices.label")}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base break-keep">
            {t("beyondOffices.prefix")}{" "}
            <span className="font-semibold text-brand-navy">
              {t("beyondOffices.countries.mongolia")}
            </span>
            ,{" "}
            <span className="font-semibold text-brand-navy">
              {t("beyondOffices.countries.indonesia")}
            </span>
            ,{" "}
            <span className="font-semibold text-brand-navy">
              {t("beyondOffices.countries.myanmar")}
            </span>
            ,{" "}
            <span className="font-semibold text-brand-navy">
              {t("beyondOffices.countries.uzbekistan")}
            </span>
            ,{" "}
            <span className="font-semibold text-brand-navy">
              {t("beyondOffices.countries.nepal")}
            </span>
            {t("beyondOffices.suffix")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface OfficeCardProps {
  office: Office;
}

function HQCard({ office }: OfficeCardProps) {
  const t = useTranslations("globalPresence");
  const ot = useTranslations(`globalPresence.offices.${office.translationKey}`);
  const services = ot.raw("services") as string[];

  return (
    <article className="group relative overflow-hidden rounded-2xl border-2 border-brand-yellow bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        {/* Left: HQ badge + city */}
        <div className="flex-shrink-0 md:w-64">
          <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
            {t("hqBadge")}
          </span>

          {/* City + flag — navy for identity */}
          <h4 className="mt-4 flex items-center gap-2 font-display text-3xl font-bold text-brand-navy md:text-4xl">
            <span aria-hidden="true">{office.flag}</span>
            <span>{ot("city")}</span>
          </h4>
          <p className="text-base text-neutral-muted">{ot("country")}</p>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-brand-yellow-dark">
            {ot("role")}
          </p>
        </div>

        {/* Right: description + services */}
        <div className="flex-1">
          {/* Description — body color */}
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
            {ot("description")}
          </p>

          {services.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {services.map((service) => (
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
  const ot = useTranslations(`globalPresence.offices.${office.translationKey}`);
  const services = ot.raw("services") as string[];

  return (
    <article
      className={cn(
        "group rounded-2xl border border-orange-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover",
      )}
    >
      {/* City + flag — navy for hierarchy */}
      <h4 className="flex items-center gap-2 font-display text-xl font-bold text-brand-navy md:text-2xl">
        <span aria-hidden="true">{office.flag}</span>
        <span>{ot("city")}</span>
      </h4>
      <p className="text-sm text-neutral-muted">{ot("country")}</p>

      {/* Role */}
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-orange-700">
        {ot("role")}
      </p>

      {/* Description — body color */}
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">
        {ot("description")}
      </p>

      {services.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {services.map((service) => (
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

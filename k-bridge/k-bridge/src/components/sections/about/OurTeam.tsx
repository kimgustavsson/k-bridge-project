import { useTranslations } from "next-intl";
import { TEAM_MEMBERS, type TeamMember } from "@/constants/team";

export function OurTeam() {
  const t = useTranslations("ourTeam");
  const lead = TEAM_MEMBERS.find((m) => m.isLead)!;
  const others = TEAM_MEMBERS.filter((m) => !m.isLead);

  return (
    <section className="bg-white py-20 md:py-28">
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
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-neutral-700 md:text-lg break-keep">
          {t("subtitle")}
        </p>

        {/* Lead card */}
        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <LeadCard member={lead} />
        </div>

        {/* Other members grid */}
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 md:gap-5 lg:grid-cols-3">
          {others.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Support team note */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-700 md:mt-12 md:text-base break-keep">
          {t("supportNote")}
        </p>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface MemberCardProps {
  member: TeamMember;
}

function LeadCard({ member }: MemberCardProps) {
  const t = useTranslations("ourTeam");
  const mt = useTranslations(`ourTeam.members.${member.translationKey}`);
  const name = mt("name");

  // Bio is optional — `mt.has()` checks if the key exists
  const hasBio = mt.has("bio");

  return (
    <article className="relative overflow-hidden rounded-2xl border-2 border-brand-yellow bg-white p-8 shadow-card md:p-10">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
        {/* Avatar — large initials circle */}
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-white md:h-28 md:w-28">
          <span className="font-display text-2xl font-bold md:text-3xl">
            {getInitials(name)}
          </span>
        </div>

        <div className="flex-1">
          <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
            {t("leadershipBadge")}
          </span>

          {/* Name — navy for hierarchy */}
          <h3 className="mt-3 font-display text-2xl font-bold text-brand-navy md:text-3xl">
            {name}
          </h3>

          {/* Role — yellow accent */}
          <p className="mt-1 text-base font-semibold text-brand-yellow-dark">
            {mt("role")}
          </p>

          {/* Location — muted */}
          <p className="mt-1 text-sm text-neutral-muted">{mt("location")}</p>

          {/* Bio — body color */}
          {hasBio && (
            <p className="mt-4 text-sm leading-relaxed text-neutral-700 md:text-base">
              {mt("bio")}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function MemberCard({ member }: MemberCardProps) {
  const mt = useTranslations(`ourTeam.members.${member.translationKey}`);
  const name = mt("name");

  return (
    <article className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-6">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-white md:h-14 md:w-14">
          <span className="font-display text-sm font-bold md:text-base">
            {getInitials(name)}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          {/* Name — navy for hierarchy */}
          <h3 className="font-display text-base font-bold text-brand-navy md:text-lg">
            {name}
          </h3>
          {/* Role — orange accent */}
          <p className="mt-0.5 text-sm font-semibold text-orange-700">
            {mt("role")}
          </p>
          {/* Location — muted */}
          <p className="mt-0.5 text-xs text-neutral-muted">{mt("location")}</p>
        </div>
      </div>
    </article>
  );
}

/* --------------------------- helpers --------------------------- */

/**
 * Generate avatar initials from a person's name.
 * Handles Western order (First Last), East Asian order (Family Given-Given),
 * and Korean names in Hangul (returns the first character).
 */
function getInitials(name: string): string {
  // Korean characters (Hangul) — return the first character (family name)
  const koreanRegex = /[\u3131-\uD79D]/;
  if (koreanRegex.test(name)) {
    return name.charAt(0);
  }

  // Latin alphabet names
  const parts = name.split(/[\s-]+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (
    parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)
  ).toUpperCase();
}

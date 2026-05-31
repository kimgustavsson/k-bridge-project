import { TEAM_MEMBERS, TEAM_SUPPORT } from "@/constants/team";

export function OurTeam() {
  const lead = TEAM_MEMBERS.find((m) => m.isLead)!;
  const others = TEAM_MEMBERS.filter((m) => !m.isLead);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-yellow" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
            Our Team
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl lg:text-5xl">
          Meet the people behind your journey.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-neutral-muted md:text-lg">
          A small, focused team across Korea, Vietnam, and China — committed to
          walking with each student from first inquiry to graduation.
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
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-muted md:mt-12 md:text-base">
          {TEAM_SUPPORT.description}
        </p>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface MemberCardProps {
  member: (typeof TEAM_MEMBERS)[number];
}

function LeadCard({ member }: MemberCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border-2 border-brand-yellow bg-white p-8 shadow-card md:p-10">
      {/* Avatar placeholder + role chip layout */}
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
        {/* Avatar placeholder — large initials circle */}
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-white md:h-28 md:w-28">
          <span className="font-display text-2xl font-bold md:text-3xl">
            {getInitials(member.name)}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1">
          <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
            ★ Leadership
          </span>

          <h3 className="mt-3 font-display text-2xl font-bold text-brand-navy md:text-3xl">
            {member.name}
          </h3>

          <p className="mt-1 text-base font-semibold text-brand-yellow-dark">
            {member.role}
          </p>

          <p className="mt-1 text-sm text-neutral-muted">{member.location}</p>

          {member.bio && (
            <p className="mt-4 text-sm leading-relaxed text-neutral-muted md:text-base">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover md:p-6">
      <div className="flex items-start gap-4">
        {/* Avatar placeholder */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-white md:h-14 md:w-14">
          <span className="font-display text-sm font-bold md:text-base">
            {getInitials(member.name)}
          </span>
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-bold text-brand-navy md:text-lg">
            {member.name}
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-orange-700">
            {member.role}
          </p>
          <p className="mt-0.5 text-xs text-neutral-muted">{member.location}</p>
        </div>
      </div>
    </article>
  );
}

/* --------------------------- helpers --------------------------- */

/**
 * Generate avatar initials from a person's name.
 * Handles Western order (First Last) and East Asian order (Family Given-Given).
 */
function getInitials(name: string): string {
  const parts = name.split(/[\s-]+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();
  return (
    parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)
  ).toUpperCase();
}

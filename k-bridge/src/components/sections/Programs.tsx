import { ProgramCard } from "@/components/ui/ProgramCard";
import { PROGRAMS } from "@/constants/programs";

export function Programs() {
  return (
    <section className="bg-neutral-bg py-20 md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-yellow" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
            Programs & Courses
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-5xl">
          Find Your Path to Korea
        </h2>

        {/* Intro */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-neutral-muted md:text-lg">
          End-to-end support designed to ensure your success throughout your
          educational journey in Korea
        </p>

        {/* Program cards grid */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

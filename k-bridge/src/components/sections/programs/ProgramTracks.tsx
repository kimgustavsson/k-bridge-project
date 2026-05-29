import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PROGRAM_TRACKS, type ProgramTrack } from "@/constants/program-tracks";

export function ProgramTracks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-padded">
        {/* Eyebrow */}
        <div className="mx-auto flex items-center justify-center gap-4">
          <span className="h-0.5 w-10 bg-brand-yellow" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
            Programs
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-5xl">
          Four tracks. One bridge.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-neutral-muted md:text-lg">
          From a few months of Korean to a full graduate degree — pick the path
          that fits your goals.
        </p>

        {/* Track rows */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-5 md:mt-20 md:gap-6">
          {PROGRAM_TRACKS.map((track) => (
            <TrackRow key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface TrackRowProps {
  track: ProgramTrack;
}

function TrackRow({ track }: TrackRowProps) {
  const Icon = track.icon;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-card-hover sm:flex-row">
      {/* Left: icon block */}
      <div className="flex flex-shrink-0 items-center justify-center bg-orange-50 px-6 py-8 transition-colors duration-300 group-hover:bg-orange-200 sm:w-44 sm:py-0">
        <div className="flex flex-col items-center gap-3 text-center">
          <Icon
            className="h-10 w-10 text-brand-navy transition-colors md:h-12 md:w-12"
            strokeWidth={1.5}
          />
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/70">
            {track.index}
          </span>
        </div>
      </div>

      {/* Right: content */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* Top row: category + visa badge */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark transition-colors group-hover:text-brand-navy">
              {track.category}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold text-brand-navy md:text-2xl">
              {track.title}
            </h3>
          </div>

          {/* Visa code badge */}
          <span className="flex-shrink-0 rounded-full border border-brand-navy/15 bg-brand-navy/5 px-3 py-1 text-xs font-bold tracking-wide text-brand-navy transition-colors group-hover:border-brand-navy/30 group-hover:bg-brand-navy group-hover:text-white">
            {track.visa}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-neutral-muted transition-colors group-hover:text-brand-navy/80 md:text-[15px]">
          {track.description}
        </p>

        {/* Bottom: duration + highlights + CTA */}
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-muted transition-colors group-hover:text-brand-navy/60">
                Duration
              </span>
              <span className="font-semibold text-brand-navy">
                {track.duration}
              </span>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {track.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-1.5 text-xs text-neutral-muted transition-colors group-hover:text-brand-navy/80 md:text-sm"
                >
                  <Check
                    className="h-3.5 w-3.5 text-brand-yellow-dark transition-colors group-hover:text-brand-navy"
                    strokeWidth={3}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-navy transition-colors hover:text-brand-yellow-dark group-hover:text-brand-navy sm:self-end"
          >
            <span>Talk to an advisor</span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

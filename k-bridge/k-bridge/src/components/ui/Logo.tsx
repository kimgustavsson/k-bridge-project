import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  /** Show slogan beneath the logo (default: true on desktop, hidden on mobile) */
  showSlogan?: boolean;
}

export function Logo({
  variant = "dark",
  className,
  showSlogan = true,
}: LogoProps) {
  const t = useTranslations("logo");
  const isDark = variant === "dark";

  const wordmarkColor = isDark ? "text-brand-navy" : "text-white";
  const sloganColor = isDark ? "text-neutral-700" : "text-white/70";

  return (
    <Link
      href="/"
      className={cn("inline-flex flex-col", className)}
      aria-label="K-BRIDGE — Korea Study Abroad Consultants"
    >
      {/* Wordmark */}
      <span
        className={cn(
          "inline-flex items-baseline gap-0.5 font-display text-xl font-semibold tracking-tight",
          wordmarkColor,
        )}
      >
        <span>K</span>
        <span className="text-brand-yellow">-</span>
        <span>BRIDGE</span>
      </span>

      {/* Slogan — hidden on mobile, visible on desktop */}
      {showSlogan && (
        <span
          className={cn(
            "hidden text-[10px] font-light uppercase tracking-[0.15em] md:block",
            sloganColor,
          )}
        >
          {t("slogan")}
        </span>
      )}
    </Link>
  );
}

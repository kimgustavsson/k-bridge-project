"use client";

import { useState, useTransition } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navigation");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/95 backdrop-blur-md">
      <div className="container-padded flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => {
            // pathname here is locale-stripped (e.g. "/about" not "/en/about")
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-brand-navy transition-colors hover:text-brand-yellow-dark",
                )}
              >
                {t(item.labelKey)}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-brand-yellow" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LocaleSwitcher />

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-neutral-200/60 bg-white md:hidden"
          aria-label="Mobile"
        >
          <ul className="container-padded flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-brand-navy hover:text-brand-yellow-dark"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* --------------------------- subcomponents --------------------------- */

function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("language");
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === currentLocale) return;

    startTransition(() => {
      // next-intl router handles locale prefix automatically
      router.replace(pathname, { locale: nextLocale as "ko" | "en" });
    });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-brand-navy md:px-4 md:py-2 md:text-sm",
        isPending && "cursor-not-allowed opacity-50",
      )}
    >
      <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
      <span className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => switchLocale("ko")}
          disabled={isPending || currentLocale === "ko"}
          className={cn(
            "transition-colors hover:text-brand-yellow-dark",
            currentLocale === "ko"
              ? "text-brand-navy"
              : "text-neutral-muted hover:text-brand-navy",
          )}
          aria-label={t("switchTo", { lang: t("korean") })}
          aria-current={currentLocale === "ko" ? "true" : undefined}
        >
          {t("korean")}
        </button>
        <span className="text-neutral-300">/</span>
        <button
          type="button"
          onClick={() => switchLocale("en")}
          disabled={isPending || currentLocale === "en"}
          className={cn(
            "transition-colors hover:text-brand-yellow-dark",
            currentLocale === "en"
              ? "text-brand-navy"
              : "text-neutral-muted hover:text-brand-navy",
          )}
          aria-label={t("switchTo", { lang: t("english") })}
          aria-current={currentLocale === "en" ? "true" : undefined}
        >
          {t("english")}
        </button>
      </span>
    </div>
  );
}

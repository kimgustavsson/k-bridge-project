"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS, LOCALES, type Locale } from "@/constants/navigation";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("EN");
  const pathname = usePathname();

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
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-brand-navy transition-colors hover:text-brand-yellow-dark",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-brand-yellow" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side - locale switcher + mobile toggle */}
        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} onChange={setLocale} />

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
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

interface LocaleSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

function LocaleSwitcher({ locale, onChange }: LocaleSwitcherProps) {
  const toggle = () => {
    const next = LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length];
    onChange(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:border-brand-navy md:px-4 md:py-2 md:text-sm"
      aria-label={`Switch language. Current: ${locale}`}
    >
      <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
      <span>
        {LOCALES.map((l, i) => (
          <span key={l}>
            <span
              className={
                l === locale ? "text-brand-navy" : "text-neutral-muted"
              }
            >
              {l}
            </span>
            {i < LOCALES.length - 1 && (
              <span className="mx-1 text-neutral-300">/</span>
            )}
          </span>
        ))}
      </span>
    </button>
  );
}

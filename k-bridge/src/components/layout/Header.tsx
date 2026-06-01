"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS, LOCALES, type Locale } from "@/constants/navigation";
import { cn } from "@/lib/cn";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();

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
            // 💡 중요: 만약 item.href가 '/about' 형태라면 현재 언어를 앞에 붙여주어야 합니다. (예: /ko/about)
            const localizedHref = `/${currentLocale}${item.href === "/" ? "" : item.href}`;
            const isActive =
              pathname === localizedHref ||
              pathname.startsWith(`${localizedHref}/`);

            return (
              <Link
                key={item.href}
                href={localizedHref}
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
            {NAV_ITEMS.map((item) => {
              const localizedHref = `/${currentLocale}${item.href === "/" ? "" : item.href}`;

              return (
                <li key={item.href}>
                  <Link
                    href={localizedHref}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium text-brand-navy hover:text-brand-yellow-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

// -------------------------------------------------------------------
// LocaleSwitcher components
// -------------------------------------------------------------------

function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    // 1. 다음 언어 결정 (en -> ko, ko -> en)
    // 참고: 폴더명이 소문자(en, ko)라면 반드시 소문자를 사용해야 합니다.
    const nextLocale = currentLocale === "en" ? "ko" : "en";

    startTransition(() => {
      // 2. 현재 URL 경로를 배열로 쪼갭니다. (예: "/en/about" -> ["", "en", "about"])
      const segments = pathname.split("/");

      // 3. 언어 부분(인덱스 1)을 새로운 언어로 교체합니다.
      segments[1] = nextLocale;

      // 4. 다시 문자열로 합쳐서 페이지를 이동시킵니다. (예: "/ko/about")
      router.replace(segments.join("/"));
    });
  };

  // UI에 보여줄 때는 대문자로 변환 (예: en -> EN)
  const displayLocale = currentLocale.toUpperCase();

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={isPending}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:border-brand-navy md:px-4 md:py-2 md:text-sm",
        isPending && "opacity-50 cursor-not-allowed", // 로딩 중일 때 시각적 피드백
      )}
      aria-label={`Switch language. Current: ${displayLocale}`}
    >
      <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
      <span>
        {/* EN / KO 텍스트 표시 */}
        <span
          className={
            currentLocale === "en" ? "text-brand-navy" : "text-neutral-muted"
          }
        >
          EN
        </span>
        <span className="mx-1 text-neutral-300">/</span>
        <span
          className={
            currentLocale === "ko" ? "text-brand-navy" : "text-neutral-muted"
          }
        >
          KO
        </span>
      </span>
    </button>
  );
}

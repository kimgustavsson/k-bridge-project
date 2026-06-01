"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FLOATING_ACTIONS } from "@/constants/floating-actions";
import { cn } from "@/lib/cn";

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = useTranslations("floatingActions");

  // Show "scroll to top" action once user has scrolled past 600px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-floating-actions]")) {
        setIsOpen(false);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleActionClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      data-floating-actions
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8"
    >
      {/* Action items */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 transition-all duration-300",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        {showScrollTop && (
          <ActionItem
            label={t("backToTop")}
            icon={ArrowUp}
            onClick={scrollToTop}
            isOpen={isOpen}
            delay={0}
          />
        )}

        {FLOATING_ACTIONS.map((action, idx) => (
          <ActionItem
            key={action.id}
            label={t(action.labelKey)}
            icon={action.icon}
            href={action.href}
            external={action.external}
            isOpen={isOpen}
            delay={(showScrollTop ? idx + 1 : idx) * 50}
            onClick={handleActionClick}
          />
        ))}
      </div>

      {/* Main button with tooltip */}
      <div className="relative flex items-center gap-3">
        <span
          className={cn(
            "rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy shadow-card transition-all duration-300 md:text-sm",
            isOpen
              ? "pointer-events-none translate-x-2 opacity-0"
              : "translate-x-0 opacity-100",
          )}
        >
          {t("needHelp")}
        </span>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full shadow-card transition-all duration-300 hover:shadow-card-hover",
            isOpen
              ? "rotate-90 bg-brand-navy text-white"
              : "bg-brand-yellow text-brand-navy hover:bg-brand-yellow-dark",
          )}
        >
          {isOpen ? (
            <X className="h-6 w-6" strokeWidth={2.5} />
          ) : (
            <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
          )}
        </button>
      </div>
    </div>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface ActionItemProps {
  label: string;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  isOpen: boolean;
  delay: number;
}

function ActionItem({
  label,
  icon: Icon,
  href,
  external,
  onClick,
  isOpen,
  delay,
}: ActionItemProps) {
  const wrapperClasses = cn(
    "flex items-center gap-3 transition-all duration-300",
    isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
  );

  const wrapperStyle = {
    transitionDelay: isOpen ? `${delay}ms` : "0ms",
  };

  const content = (
    <>
      <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-card whitespace-nowrap">
        {label}
      </span>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy shadow-card transition-colors hover:bg-brand-yellow">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={wrapperClasses}
        style={wrapperStyle}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={wrapperClasses}
      style={wrapperStyle}
    >
      {content}
    </button>
  );
}

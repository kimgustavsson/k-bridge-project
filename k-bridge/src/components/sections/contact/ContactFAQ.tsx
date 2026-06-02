"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";
import { FAQ_ITEMS, type FAQItem } from "@/constants/contact";
import { cn } from "@/lib/cn";

export function ContactFAQ() {
  const t = useTranslations("contactFaq");
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-padded">
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-10 bg-brand-yellow" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-navy">
              {t("eyebrow")}
            </span>
            <span className="h-0.5 w-10 bg-brand-yellow" />
          </div>

          {/* Title — navy for hierarchy */}
          <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
            {t("title")}
          </h2>

          {/* FAQ list */}
          <div className="mt-12 space-y-3 md:mt-16">
            {FAQ_ITEMS.map((item) => (
              <FAQAccordion
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>

          {/* Bottom note — JSX direct composition to avoid t.rich issues */}
          <p className="mt-12 text-center text-sm text-neutral-700 md:text-base break-keep">
            {t("bottomNote.prefix")}{" "}
            <a
              href="#contact-form"
              className="font-semibold text-brand-emerald-dark hover:underline"
            >
              {t("bottomNote.linkText")}
            </a>
            {t("bottomNote.suffix")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordion({ item, isOpen, onToggle }: FAQAccordionProps) {
  const t = useTranslations(`contactFaq.items.${item.translationKey}`);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
        isOpen
          ? "border-brand-emerald/50 shadow-card"
          : "border-brand-navy/10 hover:border-brand-navy/20",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        aria-expanded={isOpen}
      >
        {/* Question — navy for strong emphasis */}
        <span className="font-display text-base font-bold text-brand-navy md:text-lg break-keep">
          {t("question")}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors",
            isOpen
              ? "bg-brand-emerald text-white"
              : "bg-brand-navy/5 text-brand-navy",
          )}
        >
          {isOpen ? (
            <Minus className="h-4 w-4" strokeWidth={2.5} />
          ) : (
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* Answer panel */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          {/* Answer — body color */}
          <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-700 md:px-6 md:pb-6 md:text-base break-keep">
            {t("answer")}
          </p>
        </div>
      </div>
    </div>
  );
}

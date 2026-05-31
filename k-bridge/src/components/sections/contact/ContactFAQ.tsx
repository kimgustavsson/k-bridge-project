"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/constants/contact";
import { cn } from "@/lib/cn";

export function ContactFAQ() {
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
              Frequently Asked
            </span>
            <span className="h-0.5 w-10 bg-brand-yellow" />
          </div>

          {/* Title */}
          <h2 className="mt-6 text-center font-display text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
            Quick answers
          </h2>

          {/* FAQ list */}
          <div className="mt-12 space-y-3 md:mt-16">
            {FAQ_ITEMS.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>

          {/* Bottom note */}
          <p className="mt-12 text-center text-sm text-neutral-muted md:text-base">
            Have a question that&apos;s not here?{" "}
            <a
              href="#contact-form"
              className="font-semibold text-brand-emerald-dark hover:underline"
            >
              Send us a message
            </a>
            {" "}— we&apos;re happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

interface FAQItemProps {
  item: (typeof FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
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
        <span className="font-display text-base font-bold text-brand-navy md:text-lg">
          {item.question}
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
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-muted md:px-6 md:pb-6 md:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
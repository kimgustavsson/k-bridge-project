"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

interface NewsletterFormProps {
  /** Horizontal layout for wide containers, vertical for narrow sidebars. */
  layout?: "vertical" | "horizontal";
}

export function NewsletterForm({ layout = "vertical" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook into backend / email service here.
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isHorizontal = layout === "horizontal";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex gap-2",
        isHorizontal ? "flex-col sm:flex-row" : "flex-col",
      )}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className={cn(
          "w-full rounded-md border border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow focus:outline-none",
          isHorizontal ? "px-4 py-3 text-sm md:text-base" : "px-3 py-2 text-sm",
        )}
      />
      <button
        type="submit"
        className={cn(
          "rounded-md bg-brand-yellow font-semibold text-brand-navy transition-colors hover:bg-brand-yellow-dark",
          isHorizontal
            ? "px-6 py-3 text-sm md:text-base whitespace-nowrap"
            : "px-3 py-2 text-sm",
        )}
      >
        {submitted ? "Subscribed!" : "Subscribe"}
      </button>
    </form>
  );
}

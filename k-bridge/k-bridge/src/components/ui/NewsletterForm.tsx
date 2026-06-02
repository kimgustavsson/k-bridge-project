"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { subscribeToNewsletter } from "@/app/actions/send-newsletter";
import { cn } from "@/lib/cn";

interface NewsletterFormProps {
  layout?: "vertical" | "horizontal";
}

export function NewsletterForm({ layout = "vertical" }: NewsletterFormProps) {
  const t = useTranslations("footer.newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formStartTime] = useState(() => Date.now());
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await subscribeToNewsletter({
      email,
      website: honeypot,
      formStartTime,
    });

    if (result.success) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isHorizontal = layout === "horizontal";
  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex gap-2",
          isHorizontal ? "flex-col sm:flex-row" : "flex-col",
        )}
      >
        {/* Honeypot */}
        <div
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor="newsletter-website">Website (leave empty)</label>
          <input
            id="newsletter-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          aria-label="Email address"
          disabled={isSubmitting}
          className={cn(
            "w-full rounded-md border border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow focus:outline-none",
            isHorizontal
              ? "px-4 py-3 text-sm md:text-base"
              : "px-3 py-2 text-sm",
            isSubmitting && "cursor-not-allowed opacity-50",
          )}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "rounded-md font-semibold text-brand-navy transition-colors",
            isHorizontal
              ? "whitespace-nowrap px-6 py-3 text-sm md:text-base"
              : "px-3 py-2 text-sm",
            isSubmitting
              ? "cursor-not-allowed bg-brand-yellow/50"
              : isSuccess
                ? "bg-brand-emerald text-white"
                : "bg-brand-yellow hover:bg-brand-yellow-dark",
          )}
        >
          {isSubmitting
            ? t("subscribing")
            : isSuccess
              ? t("subscribed")
              : t("subscribe")}
        </button>
      </form>

      {isError && <p className="mt-2 text-xs text-red-300">{errorMessage}</p>}
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { sendContactMessage } from "@/app/actions/send-contact";
import {
  CONTACT_METHODS,
  MESSAGING_CHANNELS,
  type ContactMethod,
  type MessagingChannel,
} from "@/constants/contact";
import { cn } from "@/lib/cn";

type ContactRole = "student" | "university" | "other";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [role, setRole] = useState<ContactRole>("student");
  const [formStartTime] = useState(() => Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    website: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await sendContactMessage({
      ...formData,
      role,
      formStartTime,
    });

    if (result.success) {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        website: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setErrorMessage(result.error || t("submit.genericError"));
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <section className="bg-neutral-bg py-20 md:py-28">
      <div className="container-padded">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <FormHeader />

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-2xl bg-white p-6 shadow-card md:p-8"
            >
              {/* Honeypot */}
              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                aria-hidden="true"
              >
                <label htmlFor="contact-website">
                  Website (leave this empty)
                </label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                />
              </div>

              {/* Role selector */}
              <fieldset>
                <legend className="text-sm font-semibold text-brand-navy">
                  {t("roleSelector.legend")}
                </legend>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <RoleOption
                    value="student"
                    label={t("roleSelector.options.student")}
                    checked={role === "student"}
                    onChange={setRole}
                  />
                  <RoleOption
                    value="university"
                    label={t("roleSelector.options.university")}
                    checked={role === "university"}
                    onChange={setRole}
                  />
                  <RoleOption
                    value="other"
                    label={t("roleSelector.options.other")}
                    checked={role === "other"}
                    onChange={setRole}
                  />
                </div>
              </fieldset>

              {/* Name + Email */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field
                  label={t("fields.name")}
                  type="text"
                  value={formData.name}
                  onChange={(v) => handleChange("name", v)}
                  required
                />
                <Field
                  label={t("fields.email")}
                  type="email"
                  value={formData.email}
                  onChange={(v) => handleChange("email", v)}
                  required
                />
              </div>

              {/* Phone + Country */}
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field
                  label={t("fields.phone")}
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => handleChange("phone", v)}
                  optional
                  optionalLabel={t("fields.optional")}
                />
                <Field
                  label={t("fields.country")}
                  type="text"
                  value={formData.country}
                  onChange={(v) => handleChange("country", v)}
                  optional
                  optionalLabel={t("fields.optional")}
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <FieldLabel htmlFor="contact-message">
                  {t("fields.message")}
                </FieldLabel>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder={t("fields.messagePlaceholder")}
                  className="mt-1.5 w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-muted/60 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20"
                />
              </div>

              {/* Error message */}
              {isError && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition-all md:text-base",
                    isSubmitting
                      ? "cursor-not-allowed bg-brand-navy/40"
                      : isSuccess
                        ? "bg-brand-emerald-dark"
                        : "bg-brand-emerald hover:bg-brand-emerald-dark hover:shadow-card-hover",
                  )}
                >
                  {isSubmitting
                    ? t("submit.submitting")
                    : isSuccess
                      ? t("submit.success")
                      : t("submit.idle")}
                </button>

                <p className="text-xs text-neutral-muted">
                  {t("submit.responseTime")}
                </p>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2">
            <OtherWaysColumn />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- subcomponents --------------------------- */

function FormHeader() {
  const t = useTranslations("contactForm.formHeader");
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
        {t("title")}
      </h2>
      <p className="mt-2 text-sm text-neutral-700 md:text-base break-keep">
        {t("subtitle")}
      </p>
    </div>
  );
}

function OtherWaysColumn() {
  const t = useTranslations("contactForm");
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
        {t("otherWays.title")}
      </h2>
      <p className="mt-2 text-sm text-neutral-700 md:text-base break-keep">
        {t("otherWays.subtitle")}
      </p>

      {/* Direct contact methods */}
      <div className="mt-6 space-y-3">
        {CONTACT_METHODS.map((method) => (
          <ContactMethodCard key={method.id} method={method} />
        ))}
      </div>

      {/* Messaging channels */}
      <div className="mt-6 rounded-2xl border border-brand-emerald/30 bg-brand-emerald-light/40 p-5">
        <div className="flex items-center gap-2">
          <MessageCircle
            className="h-5 w-5 text-brand-emerald-dark"
            strokeWidth={2}
          />
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-emerald-dark">
            {t("messaging.title")}
          </h3>
        </div>
        <p className="mt-2 text-xs text-neutral-700 md:text-sm break-keep">
          {t("messaging.subtitle")}
        </p>

        <ul className="mt-4 space-y-2">
          {MESSAGING_CHANNELS.map((channel) => (
            <MessagingChannelItem key={channel.id} channel={channel} />
          ))}
        </ul>
      </div>
    </div>
  );
}

interface MessagingChannelItemProps {
  channel: MessagingChannel;
}

function MessagingChannelItem({ channel }: MessagingChannelItemProps) {
  const t = useTranslations("contactForm.messaging");
  const region = t(`channels.${channel.translationKey}.region`);

  return (
    <li className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5">
      <div>
        <p className="text-sm font-bold text-brand-navy">{channel.name}</p>
        <p className="text-[11px] text-neutral-muted">
          {t("bestFor", { region })}
        </p>
      </div>
      <p className="font-mono text-xs text-brand-navy">{channel.handle}</p>
    </li>
  );
}

interface ContactMethodCardProps {
  method: ContactMethod;
}

function ContactMethodCard({ method }: ContactMethodCardProps) {
  const t = useTranslations(`contactForm.methods.${method.translationKey}`);
  const Icon = method.icon;
  const hasHint = t.has("hint");

  const content = (
    <>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow/20">
        <Icon className="h-4 w-4 text-brand-yellow-dark" strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-muted">
          {t("label")}
        </p>
        <p className="truncate text-sm font-semibold text-brand-navy md:text-base">
          {method.value}
        </p>
        {hasHint && (
          <p className="mt-0.5 text-[11px] text-neutral-muted">{t("hint")}</p>
        )}
      </div>
    </>
  );

  if (method.href) {
    return (
      <a
        href={method.href}
        className="flex items-start gap-3 rounded-xl border border-brand-navy/10 bg-white p-4 transition-all hover:border-brand-emerald/40 hover:shadow-card"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-xl border border-brand-navy/10 bg-white p-4">
      {content}
    </div>
  );
}

interface RoleOptionProps {
  value: ContactRole;
  label: string;
  checked: boolean;
  onChange: (value: ContactRole) => void;
}

function RoleOption({ value, label, checked, onChange }: RoleOptionProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-center text-xs font-semibold transition-all md:text-sm",
        checked
          ? "border-brand-emerald bg-brand-emerald-light/50 text-brand-emerald-dark"
          : "border-brand-navy/15 bg-white text-brand-navy hover:border-brand-navy/30",
      )}
    >
      <input
        type="radio"
        name="role"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      {label}
    </label>
  );
}

interface FieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  optional?: boolean;
  optionalLabel?: string;
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
  optional,
  optionalLabel,
}: FieldProps) {
  // Use a stable id — strip non-alphanumerics
  const id = `contact-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div>
      <FieldLabel
        htmlFor={id}
        optional={optional}
        optionalLabel={optionalLabel}
      >
        {label}
      </FieldLabel>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-muted/60 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20"
      />
    </div>
  );
}

interface FieldLabelProps {
  htmlFor: string;
  optional?: boolean;
  optionalLabel?: string;
  children: React.ReactNode;
}

function FieldLabel({
  htmlFor,
  optional,
  optionalLabel,
  children,
}: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="flex items-center gap-2">
      <span className="text-sm font-semibold text-brand-navy">{children}</span>
      {optional && optionalLabel && (
        <span className="text-xs font-normal text-neutral-muted">
          {optionalLabel}
        </span>
      )}
    </label>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT_METHODS, MESSAGING_CHANNELS } from "@/constants/contact";
import { cn } from "@/lib/cn";

type ContactRole = "student" | "university" | "other";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [role, setRole] = useState<ContactRole>("student");
  const [formStartTime] = useState(() => Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    // Honeypot field — never touched by real users
    website: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Bot detection: honeypot
    if (formData.website) {
      // Silently pretend success — don't tell bots they failed
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      return;
    }

    // Bot detection: submitted too fast (under 3 seconds = likely bot)
    const elapsed = Date.now() - formStartTime;
    if (elapsed < 3000) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      return;
    }

    setSubmitting(true);

    // TODO: Hook into backend / email service here.
    // For now, simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitted(true);
    setSubmitting(false);
    setTimeout(() => setSubmitted(false), 4000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
      website: "",
    });
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-neutral-bg py-20 md:py-28">
      <div className="container-padded">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Form column */}
          <div className="lg:col-span-3">
            <FormHeader />

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-2xl bg-white p-6 shadow-card md:p-8"
            >
              {/* Honeypot — hidden from real users, only bots fill this */}
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
                  I&apos;m reaching out as a...
                </legend>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <RoleOption
                    value="student"
                    label="Student or Family"
                    checked={role === "student"}
                    onChange={setRole}
                  />
                  <RoleOption
                    value="university"
                    label="University / Institution"
                    checked={role === "university"}
                    onChange={setRole}
                  />
                  <RoleOption
                    value="other"
                    label="Other Partner"
                    checked={role === "other"}
                    onChange={setRole}
                  />
                </div>
              </fieldset>

              {/* Name + Email */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field
                  label="Name"
                  type="text"
                  value={formData.name}
                  onChange={(v) => handleChange("name", v)}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(v) => handleChange("email", v)}
                  required
                />
              </div>

              {/* Phone + Country */}
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => handleChange("phone", v)}
                  optional
                />
                <Field
                  label="Country"
                  type="text"
                  value={formData.country}
                  onChange={(v) => handleChange("country", v)}
                  optional
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us a little about your situation or question..."
                  className="mt-1.5 w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-neutral-muted/60 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20"
                />
              </div>

              {/* Submit */}
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition-all md:text-base",
                    submitting
                      ? "bg-brand-navy/40 cursor-not-allowed"
                      : "bg-brand-emerald hover:bg-brand-emerald-dark hover:shadow-card-hover",
                  )}
                >
                  {submitting
                    ? "Sending..."
                    : submitted
                      ? "Message sent ✓"
                      : "Send message"}
                </button>

                <p className="text-xs text-neutral-muted">
                  We&apos;ll get back to you within 1–2 business days.
                </p>
              </div>
            </form>
          </div>

          {/* Other ways column */}
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
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
        Send us a message
      </h2>
      <p className="mt-2 text-sm text-neutral-muted md:text-base">
        Fill out the form and we&apos;ll route your message to the right person
        on our team.
      </p>
    </div>
  );
}

function OtherWaysColumn() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
        Or reach us another way
      </h2>
      <p className="mt-2 text-sm text-neutral-muted md:text-base">
        Prefer email or messaging? Pick whichever works best for you.
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
            Chat with us
          </h3>
        </div>
        <p className="mt-2 text-xs text-neutral-muted md:text-sm">
          Find us on your favorite messaging app — we respond fastest here.
        </p>

        <ul className="mt-4 space-y-2">
          {MESSAGING_CHANNELS.map((channel) => (
            <li
              key={channel.id}
              className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5"
            >
              <div>
                <p className="text-sm font-bold text-brand-navy">
                  {channel.name}
                </p>
                <p className="text-[11px] text-neutral-muted">
                  Best for {channel.region}
                </p>
              </div>
              <p className="font-mono text-xs text-brand-navy">
                {channel.handle}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ContactMethodCardProps {
  method: (typeof CONTACT_METHODS)[number];
}

function ContactMethodCard({ method }: ContactMethodCardProps) {
  const Icon = method.icon;
  const content = (
    <>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow/20">
        <Icon className="h-4 w-4 text-brand-yellow-dark" strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-muted">
          {method.label}
        </p>
        <p className="truncate text-sm font-semibold text-brand-navy md:text-base">
          {method.value}
        </p>
        {method.hint && (
          <p className="mt-0.5 text-[11px] text-neutral-muted">{method.hint}</p>
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
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
  optional,
}: FieldProps) {
  const id = `contact-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div>
      <FieldLabel htmlFor={id} optional={optional}>
        {label}
      </FieldLabel>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-neutral-muted/60 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20"
      />
    </div>
  );
}

interface FieldLabelProps {
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}

function FieldLabel({ htmlFor, optional, children }: FieldLabelProps) {
  return (
    <label htmlFor={htmlFor} className="flex items-center gap-2">
      <span className="text-sm font-semibold text-brand-navy">{children}</span>
      {optional && (
        <span className="text-xs font-normal text-neutral-muted">
          (optional)
        </span>
      )}
    </label>
  );
}

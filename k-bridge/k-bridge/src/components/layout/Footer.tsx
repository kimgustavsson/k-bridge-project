import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { FOOTER_GROUPS, SOCIAL_LINKS, CONTACT_INFO } from "@/constants/footer";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep text-white">
      {/* Top strip: headline + newsletter signup */}
      <div className="border-b border-white/10">
        <div className="container-padded grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:items-center md:gap-12 md:py-16">
          <div>
            <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              {t("newsletter.headline")}
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
              {t("newsletter.subheadline")}
            </p>
          </div>

          <div className="md:w-full md:max-w-md md:justify-self-end">
            <NewsletterForm layout="horizontal" />
            <p className="mt-3 text-xs text-white/50">
              {t("newsletter.noSpam")}
            </p>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-padded grid grid-cols-2 gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-6">
          <Logo variant="light" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            {t("tagline")}
          </p>

          {/* Contact info */}
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-brand-yellow" />
              <a
                href={`mailto:${CONTACT_INFO.fax}`}
                className="hover:text-white"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-brand-yellow" />
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hover:text-white"
              >
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 flex-shrink-0 text-brand-yellow" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>

        {/* Link groups */}
        {FOOTER_GROUPS.map((group) => (
          <div key={group.id} className="md:col-span-2">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              {t(`groups.${group.id}.title`)}
            </h3>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {t(`groups.${group.id}.${link.labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-padded flex flex-col items-start justify-between gap-4 py-6 text-sm text-white/55 md:flex-row md:items-center">
          <p>{t("bottom.copyright", { year: currentYear })}</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              {t("bottom.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-white">
              {t("bottom.terms")}
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition-all hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-navy"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

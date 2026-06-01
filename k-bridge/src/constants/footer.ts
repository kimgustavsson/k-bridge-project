import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FooterLink {
  /** Translation key under "footer.groups.{group}.{linkKey}" */
  labelKey: string;
  href: string;
}

export interface FooterLinkGroup {
  id: "programs" | "resources" | "company";
  links: FooterLink[];
}

export const FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    id: "programs",
    links: [
      { labelKey: "language", href: "/programs" },
      { labelKey: "undergraduate", href: "/programs" },
      { labelKey: "graduate", href: "/programs" },
      { labelKey: "exchange", href: "/programs" },
    ],
  },
  {
    id: "resources",
    links: [
      { labelKey: "application", href: "/resources/application" },
      { labelKey: "scholarships", href: "/resources/scholarships" },
      { labelKey: "visa", href: "/resources/visa" },
      { labelKey: "studentLife", href: "/resources/student-life" },
    ],
  },
  {
    id: "company",
    links: [
      { labelKey: "about", href: "/about" },
      { labelKey: "alumni", href: "/about" },
      { labelKey: "partners", href: "/about" },
      { labelKey: "contact", href: "/contact" },
    ],
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export const CONTACT_INFO = {
  email: "hello@k-bridge.com",
  phone: "+82 2 1234 5678",
  address: "Seoul, South Korea",
} as const;

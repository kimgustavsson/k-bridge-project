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
      { labelKey: "application", href: "/contact" },
      { labelKey: "scholarships", href: "/contact" },
      { labelKey: "visa", href: "/contact" },
      { labelKey: "studentLife", href: "/contact" },
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
  phone: "+82 010-2265-5600",
  office: "+82 031-374-9790",
  address:
    "313–314, Cine Outlet, 198 Gyeonggi-daero, Osan-si, Gyeonggi-do, South Korea",
} as const;

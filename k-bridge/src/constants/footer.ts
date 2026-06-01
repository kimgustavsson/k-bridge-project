import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import type { FooterLinkGroup, SocialLink } from "@/types";

export const FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: "Programs",
    links: [
      { label: "Korean Language", href: "/programs" },
      { label: "Undergraduate", href: "/programs" },
      { label: "Graduate", href: "/programs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Programs & Pathways", href: "/programs" },
      { label: "Scholarships", href: "/contact" },
      { label: "Visa Information", href: "/contact" },
      { label: "Student Life", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Partner Universities", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export const CONTACT_INFO = {
  phone: "+82 31-374-9790",
  address:
    "313–314, Cine Outlet, 198 Gyeonggi-daero, Osan-si, Gyeonggi-do, South Korea",
} as const;

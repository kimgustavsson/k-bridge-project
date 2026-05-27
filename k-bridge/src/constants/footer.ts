import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import type { FooterLinkGroup, SocialLink } from "@/types";

export const FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: "Programs",
    links: [
      { label: "Korean Language", href: "/programs/language" },
      { label: "Undergraduate", href: "/programs/undergraduate" },
      { label: "Graduate", href: "/programs/graduate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Programs & Courses", href: "/resources/application" },
      { label: "Scholarships", href: "/resources/scholarships" },
      { label: "Visa Information", href: "/resources/visa" },
      { label: "Student Life", href: "/resources/student-life" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/alumni" },
      { label: "Partner Universities", href: "/partners" },
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
  email: "lyj979082@daum.net",
  phone: "+82 31-374-9790",
  address:
    "313–314, Cine Outlet, 198 Gyeonggi-daero, Osan-si, Gyeonggi-do, South Korea",
} as const;

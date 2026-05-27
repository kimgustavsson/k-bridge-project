import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs & Pathways", href: "/pathways" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const LOCALES = ["EN", "KR"] as const;
export type Locale = (typeof LOCALES)[number];

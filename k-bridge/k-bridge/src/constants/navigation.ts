export interface NavItem {
  /** Translation key in messages/*.json under "navigation" */
  labelKey: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: "home", href: "/" },
  { labelKey: "programs", href: "/programs" },
  { labelKey: "about", href: "/about" },
  { labelKey: "contact", href: "/contact" },
];

import { Phone, GraduationCap, type LucideIcon } from "lucide-react";

export interface FloatingAction {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  /** External link opens in new tab */
  external?: boolean;
}

export const FLOATING_ACTIONS: FloatingAction[] = [
  {
    id: "contact",
    label: "Contact Us",
    icon: Phone,
    href: "/contact",
  },
  {
    id: "programs",
    label: "Programs & Pathways",
    icon: GraduationCap,
    href: "/programs",
  },
];

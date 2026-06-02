import { Phone, GraduationCap, type LucideIcon } from "lucide-react";

export interface FloatingAction {
  id: string;
  /** Translation key under "floatingActions.{labelKey}" */
  labelKey: string;
  icon: LucideIcon;
  href: string;
  external?: boolean;
}

export const FLOATING_ACTIONS: FloatingAction[] = [
  {
    id: "contact",
    labelKey: "contact",
    icon: Phone,
    href: "/contact",
  },
  {
    id: "programs",
    labelKey: "programs",
    icon: GraduationCap,
    href: "/programs",
  },
];
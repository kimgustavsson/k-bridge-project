import { Languages, Heart, Users, Shield, type LucideIcon } from "lucide-react";

export interface SupportItem {
  id: string;
  number: string;
  /** Translation key under "howWeSupport.items.{translationKey}" */
  translationKey: string;
  icon: LucideIcon;
}

export const SUPPORT_ITEMS: SupportItem[] = [
  {
    id: "settling",
    number: "01",
    translationKey: "settling",
    icon: Languages,
  },
  {
    id: "beyond-classroom",
    number: "02",
    translationKey: "beyondClassroom",
    icon: Heart,
  },
  {
    id: "one-team",
    number: "03",
    translationKey: "oneTeam",
    icon: Users,
  },
  {
    id: "health-safety",
    number: "04",
    translationKey: "healthSafety",
    icon: Shield,
  },
];

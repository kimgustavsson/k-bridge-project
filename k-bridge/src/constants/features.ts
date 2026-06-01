import { Award, Users, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: string;
  /** Key under "heroFeatures.{id}" in messages/*.json */
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
}

export const HERO_FEATURES: FeatureItem[] = [
  {
    id: "experience",
    titleKey: "experience.title",
    descriptionKey: "experience.description",
    icon: Award,
  },
  {
    id: "alumni",
    titleKey: "alumni.title",
    descriptionKey: "alumni.description",
    icon: Users,
  },
  {
    id: "cultural",
    titleKey: "cultural.title",
    descriptionKey: "cultural.description",
    icon: Globe2,
  },
];

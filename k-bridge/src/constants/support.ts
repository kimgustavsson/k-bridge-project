import { Languages, Heart, Users, Shield, type LucideIcon } from "lucide-react";

export interface SupportItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SUPPORT_ITEMS: SupportItem[] = [
  {
    id: "settling",
    number: "01",
    title: "Settling In Without the Stress",
    description:
      "Moving to a new country isn't easy — language barriers, paperwork, and unfamiliar systems can feel overwhelming. We help you handle the practical hurdles so you can focus on what you came here for.",
    icon: Languages,
  },
  {
    id: "beyond-classroom",
    number: "02",
    title: "Beyond the Classroom",
    description:
      "Studying abroad is more than coursework. From daily life to mental well-being, our alumni advisors share what they wish they had known — and stay close through the ups and downs.",
    icon: Heart,
  },
  {
    id: "one-team",
    number: "03",
    title: "One Team, One Plan",
    description:
      "You shouldn’t have to chase information across schools, government offices, and agencies. We coordinate the moving parts — admissions, visa, housing, and career steps — so your plan stays in one place.",
    icon: Users,
  },
  {
    id: "health-safety",
    number: "04",
    title: "Health & Safety, Covered",
    description:
      "Korea's national health insurance is required for international students, and it's also genuinely good. We help you enroll the right way so a hospital visit never becomes a financial worry.",
    icon: Shield,
  },
];

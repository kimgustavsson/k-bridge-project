import {
  Languages,
  GraduationCap,
  BookOpen,
  Plane,
  type LucideIcon,
} from "lucide-react";

export interface ProgramTrack {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  visa: string;
  duration: string;
  highlights: string[];
  icon: LucideIcon;
}

export const PROGRAM_TRACKS: ProgramTrack[] = [
  {
    id: "language",
    index: "01",
    category: "Korean Language",
    title: "Start with the language",
    description:
      "Whether you're beginning from zero or polishing what you already know, our partner language institutes meet you at your level.",
    visa: "D-4",
    duration: "6 months – 1 year",
    highlights: ["Beginner to advanced levels", "Major university affiliated"],
    icon: Languages,
  },
  {
    id: "undergraduate",
    index: "02",
    category: "Undergraduate",
    title: "Earn your bachelor’s in Korea",
    description:
      "Study at one of Korea’s top universities and earn an internationally recognized degree. We help you choose a major, prepare your application, and navigate scholarships.",
    visa: "D-2",
    duration: "4 years",
    highlights: [
      "English-taught options available",
      "Scholarship guidance included",
    ],
    icon: GraduationCap,
  },
  {
    id: "graduate",
    index: "03",
    category: "Graduate",
    title: "Take your career further",
    description:
      "Master's and PhD programs across engineering, business, the arts, and more. Many programs offer substantial scholarships and English-taught tracks.",
    visa: "D-2",
    duration: "Master's 2 yrs · PhD 3–5 yrs",
    highlights: ["Research and lab placements", "Scholarship support"],
    icon: BookOpen,
  },
  {
    id: "exchange",
    index: "04",
    category: "Exchange & Short-term",
    title: "Experience Korea, briefly",
    description:
      "Not ready for a full degree? Exchange and short-term programs let you live, study, and explore Korea for a semester or summer.",
    visa: "D-2-6",
    duration: "1 semester – 1 year",
    highlights: ["Partner university programs", "Great for CV / resume"],
    icon: Plane,
  },
];

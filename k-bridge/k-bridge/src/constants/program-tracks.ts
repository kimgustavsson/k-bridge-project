import {
  Languages,
  GraduationCap,
  BookOpen,
  Plane,
  type LucideIcon,
} from "lucide-react";

export interface ProgramTrack {
  id: string;
  /** Translation key under "programTracks.tracks.{translationKey}" */
  translationKey: string;
  index: string;
  visa: string;
  icon: LucideIcon;
}

export const PROGRAM_TRACKS: ProgramTrack[] = [
  {
    id: "language",
    translationKey: "language",
    index: "01",
    visa: "D-4",
    icon: Languages,
  },
  {
    id: "undergraduate",
    translationKey: "undergraduate",
    index: "02",
    visa: "D-2",
    icon: GraduationCap,
  },
  {
    id: "graduate",
    translationKey: "graduate",
    index: "03",
    visa: "D-2",
    icon: BookOpen,
  },
  {
    id: "exchange",
    translationKey: "exchange",
    index: "04",
    visa: "D-2-6",
    icon: Plane,
  },
];

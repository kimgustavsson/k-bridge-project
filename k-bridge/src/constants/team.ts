export interface TeamMember {
  id: string;
  translationKey: string;
  isLead?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "kim-seo-hu",
    translationKey: "kimSeoHu",
    isLead: true,
  },
  {
    id: "lee-yong-joo",
    translationKey: "leeYongJoo",
  },
  {
    id: "kim-kyung-tae",
    translationKey: "kimKyungTae",
  },
  {
    id: "kim-han-Na",
    translationKey: "kimHanNa",
  },
  {
    id: "pham-quang-hung",
    translationKey: "phamQuangHung",
  },
  {
    id: "kim-guk-il",
    translationKey: "kimGukIl",
  },
];

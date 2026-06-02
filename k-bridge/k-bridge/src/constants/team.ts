export interface TeamMember {
  id: string;
  /** Translation key under "ourTeam.members.{translationKey}" */
  translationKey: string;
  /** Whether this member is the featured leader (CEO) */
  isLead?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "lee-yong-joo",
    translationKey: "leeYongJoo",
    isLead: true,
  },
  {
    id: "kim-kyung-tae",
    translationKey: "kimKyungTae",
  },
  {
    id: "kim-sung-won",
    translationKey: "kimSungWon",
  },
  {
    id: "kim-seo-hu",
    translationKey: "kimSeoHu",
  },
  {
    id: "pham-quang-hung",
    translationKey: "phamQuangHung",
  },
  {
    id: "kim-guk-il",
    translationKey: "kimGukIl",
  },
  {
    id: "kim-hana",
    translationKey: "kimHana",
  },
];

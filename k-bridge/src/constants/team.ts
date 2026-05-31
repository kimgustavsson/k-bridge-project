export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  bio?: string;
  /** Whether this member is the featured leader (CEO) */
  isLead?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "lee-yong-joo",
    name: "Lee Yong-Joo",
    role: "Chief Executive Officer",
    location: "Korea Headquarters",
    bio: "Leading K-BRIDGE's vision to make Korean education accessible to students across Asia and beyond.",
    isLead: true,
  },
  {
    id: "kim-kyung-tae",
    name: "Kim Kyung-Tae",
    role: "General Director",
    location: "Korea Headquarters",
  },
  {
    id: "kim-sung-won",
    name: "Kim Sung-Won",
    role: "Director of Retention Strategy",
    location: "Korea Headquarters",
  },
  {
    id: "kim-seo-hu",
    name: "Kim Seo-Hu",
    role: "Dean",
    location: "Vietnam Region",
  },
  {
    id: "pham-quang-hung",
    name: "Pham Quang Hung",
    role: "Director",
    location: "Vietnam Region",
  },
  {
    id: "kim-guk-il",
    name: "Kim Guk-il",
    role: "Branch Manager",
    location: "China Region",
  },
  {
    id: "kim-hana",
    name: "Kim Hana",
    role: "Manager",
    location: "Korea Headquarters",
  },
];

/** Additional team members not individually featured */
export const TEAM_SUPPORT = {
  description:
    "Plus a dedicated team of Korean language instructors, English instructors, and student support staff across our Vietnam and China offices.",
};

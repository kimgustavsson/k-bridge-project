export interface Office {
  id: string;
  city: string;
  country: string;
  flag: string;
  role: string;
  description: string;
  /** Short list of services/highlights for this location */
  services: string[];
  isHeadquarters?: boolean;
}

export const OFFICES: Office[] = [
  {
    id: "osan",
    city: "Osan",
    country: "South Korea",
    flag: "🇰🇷",
    role: "Headquarters",
    description:
      "Where every student journey lands. Our Korean team coordinates university admissions, visa support, housing arrangements, and ongoing student care from arrival to graduation.",
    services: [
      "University Admissions",
      "Visa & Immigration",
      "Housing Support",
      "Student Care",
    ],
    isHeadquarters: true,
  },
  {
    id: "hanoi",
    city: "Hanoi",
    country: "Vietnam",
    flag: "🇻🇳",
    role: "Branch & Language Institute",
    description:
      "Our flagship Vietnam office runs a direct Korean language program — students prepare for Korean academic life before they ever leave home.",
    services: ["Korean Language", "Cultural Prep", "Recruitment"],
  },
  {
    id: "hai-duong",
    city: "Hai Duong",
    country: "Vietnam",
    flag: "🇻🇳",
    role: "Branch & Language Institute",
    description:
      "A second Vietnamese hub focused on language training and cultural adaptation, ensuring students arrive in Korea ready to thrive.",
    services: ["Korean Language", "Cultural Prep", "Recruitment"],
  },
  {
    id: "qingdao",
    city: "Qingdao",
    country: "China",
    flag: "🇨🇳",
    role: "Branch Office",
    description:
      "Our Qingdao team works directly with Chinese students and partners with local education institutions to expand our network across China.",
    services: ["Recruitment", "Partnership", "Student Support"],
  },
];

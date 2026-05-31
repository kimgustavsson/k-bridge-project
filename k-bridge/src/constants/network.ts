export interface NetworkBranch {
  cities: string;
}

export interface NetworkRegion {
  id: string;
  name: string;
  flag?: string;
  branches: NetworkBranch[];
}

export const NETWORK_REGIONS: NetworkRegion[] = [
  {
    id: "china",
    name: "China Region",
    flag: "🇨🇳",
    branches: [
      { cities: "Harbin · Shanghai" },
      { cities: "Jilin" },
      { cities: "Qingdao · Yunnan" },
    ],
  },
  {
    id: "vietnam",
    name: "Vietnam Region",
    flag: "🇻🇳",
    branches: [
      { cities: "Hanoi · Ho Chi Minh" },
      { cities: "Hai Duong · Hai Phong" },
      { cities: "Bac Ninh · Bac Giang" },
    ],
  },
  {
    id: "east-asia",
    name: "East Asia",
    branches: [{ cities: "Mongolia 🇲🇳" }],
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    branches: [{ cities: "Indonesia 🇮🇩" }, { cities: "Myanmar 🇲🇲" }],
  },
  {
    id: "central-asia",
    name: "Central Asia",
    branches: [{ cities: "Uzbekistan 🇺🇿" }],
  },
  {
    id: "south-asia",
    name: "South Asia",
    branches: [{ cities: "Nepal 🇳🇵" }],
  },
];

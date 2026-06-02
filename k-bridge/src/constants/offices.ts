export interface Office {
  id: string;
  /** Translation key under "globalPresence.offices.{translationKey}" */
  translationKey: string;
  flag: string;
  isHeadquarters?: boolean;
}

export const OFFICES: Office[] = [
  {
    id: "osan",
    translationKey: "osan",
    flag: "🇰🇷",
    isHeadquarters: true,
  },
  {
    id: "hanoi",
    translationKey: "hanoi",
    flag: "🇻🇳",
  },
  {
    id: "hai-duong",
    translationKey: "haiDuong",
    flag: "🇻🇳",
  },
  {
    id: "qingdao",
    translationKey: "qingdao",
    flag: "🇨🇳",
  },
];

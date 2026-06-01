export interface JourneyStep {
  id: string;
  /** Key under "journey.{id}" in messages/*.json */
  translationKey: string;
  highlight?: boolean;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "home",
    translationKey: "home",
  },
  {
    id: "connector",
    translationKey: "connector",
    highlight: true,
  },
  {
    id: "arrive",
    translationKey: "arrive",
  },
];

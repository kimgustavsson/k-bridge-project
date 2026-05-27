import type { JourneyStep } from '@/types';

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'home',
    label: 'YOU ARE HERE',
    title: 'Home Country',
    description: 'Confused by Korean admissions, scholarships, and visa rules.',
  },
  {
    id: 'connector',
    label: 'K-BRIDGE',
    title: 'The Connector',
    description: 'Alumni advisors translate the system into a plan built for you.',
    highlight: true,
  },
  {
    id: 'arrive',
    label: 'YOU ARRIVE HERE',
    title: 'Studying in Korea',
    description: 'Enrolled, supported, and ready to thrive from day one.',
  },
];

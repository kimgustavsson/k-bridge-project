import type { ProgramItem } from '@/types';

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'language',
    title: 'Korean Language Programs',
    description: 'Start your journey with comprehensive Korean language programs',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    ctaLabel: 'Explore Language Programs',
    href: '/programs/language',
  },
  {
    id: 'degree',
    title: 'Find Your Perfect Program',
    description: 'Explore degree programs and courses at top Korean universities',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    ctaLabel: 'Browse Degree Programs',
    href: '/programs/degree',
  },
];

import { Award, Users, Globe2 } from 'lucide-react';
import type { FeatureItem } from '@/types';

export const HERO_FEATURES: FeatureItem[] = [
  {
    id: 'experience',
    title: 'Guided by Experience, Driven by Your Success',
    description:
      "Navigating a new academic journey in a foreign country can be challenging. That's why K-BRIDGE's programs are guided by a network of global alumni who understand exactly what it takes to succeed in Korea.",
    icon: Award,
  },
  {
    id: 'alumni',
    title: 'Our Team of Global Alumni Experts',
    description:
      'Our team comprises international alumni who have successfully navigated the Korean higher education system. Their firsthand experience translates into authentic, practical guidance for students taking their first steps in Korea.',
    icon: Users,
  },
  {
    id: 'cultural',
    title: 'Cultural & Educational Exchange',
    description:
      'Beyond the classroom, we connect you to a wider world. K-BRIDGE leverages sustainable partnerships to drive meaningful cultural exchanges, making your study abroad experience global.',
    icon: Globe2,
  },
];

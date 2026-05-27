import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import type { FooterLinkGroup, SocialLink } from '@/types';

export const FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Programs',
    links: [
      { label: 'Korean Language', href: '/programs/language' },
      { label: 'Undergraduate', href: '/programs/undergraduate' },
      { label: 'Graduate Programs', href: '/programs/graduate' },
      { label: 'Exchange Programs', href: '/programs/exchange' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Application Guide', href: '/resources/application' },
      { label: 'Scholarships', href: '/resources/scholarships' },
      { label: 'Visa Information', href: '/resources/visa' },
      { label: 'Student Life', href: '/resources/student-life' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Alumni', href: '/alumni' },
      { label: 'Partner Universities', href: '/partners' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
];

export const CONTACT_INFO = {
  email: 'hello@k-bridge.com',
  phone: '+82 2 1234 5678',
  address: 'Seoul, South Korea',
} as const;

import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
}

export interface JourneyStep {
  id: string;
  label: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface ProgramItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  ctaLabelKey: string;
  image: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

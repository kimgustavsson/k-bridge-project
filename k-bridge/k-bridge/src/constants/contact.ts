import { Mail, Phone, type LucideIcon } from "lucide-react";

export interface ContactMethod {
  id: string;
  icon: LucideIcon;
  /** Translation key under "contactForm.methods.{translationKey}" */
  translationKey: string;
  value: string;
  href?: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "email",
    icon: Mail,
    translationKey: "email",
    value: "temporary@email.com",
    href: "mailto:temporary@email.com",
  },
  {
    id: "phone",
    icon: Phone,
    translationKey: "phone",
    value: "+82 31-XXX-XXXX",
    href: "tel:+8231XXXXXXX",
  },
];

export interface MessagingChannel {
  id: string;
  /** Translation key under "contactForm.messaging.channels.{translationKey}" */
  translationKey: string;
  /** Name and handle stay language-agnostic */
  name: string;
  handle: string;
}

export const MESSAGING_CHANNELS: MessagingChannel[] = [
  {
    id: "KakaoTalk",
    translationKey: "kakaoTalk",
    name: "KakaoTalk",
    handle: "@kbridge",
  },
  {
    id: "WhatsApp",
    translationKey: "whatsApp",
    name: "WhatsApp",
    handle: "+84 XXX XXX XXX",
  },
  {
    id: "WeChat",
    translationKey: "weChat",
    name: "WeChat",
    handle: "kbridge_official",
  },
];

export interface FAQItem {
  id: string;
  /** Translation key under "contactFaq.items.{translationKey}" */
  translationKey: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "consultation-cost",
    translationKey: "consultationCost",
  },
  {
    id: "languages",
    translationKey: "languages",
  },
  {
    id: "university-partnerships",
    translationKey: "universityPartnerships",
  },
];

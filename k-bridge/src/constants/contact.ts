import { Mail, Phone, MessageCircle, type LucideIcon } from "lucide-react";

export interface ContactMethod {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  hint?: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "hello@k-bridge.com",
    href: "mailto:hello@k-bridge.com",
    hint: "We reply within 1–2 business days.",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+82 31-XXX-XXXX",
    href: "tel:+8231XXXXXXX",
    hint: "Mon–Fri, 9:00–18:00 KST",
  },
];

export interface MessagingChannel {
  id: string;
  name: string;
  region: string;
  handle: string;
}

export const MESSAGING_CHANNELS: MessagingChannel[] = [
  { id: "kakao", name: "KakaoTalk", region: "Korea", handle: "@kbridge" },
  { id: "zalo", name: "Zalo", region: "Vietnam", handle: "+84 XXX XXX XXX" },
  { id: "wechat", name: "WeChat", region: "China", handle: "kbridge_official" },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "consultation-cost",
    question: "Is the initial consultation free?",
    answer:
      "Yes — the first consultation with one of our advisors is completely free. We'll talk through your background, goals, and timeline, then help you understand which programs and pathways might fit you best. No payment, no commitment.",
  },
  {
    id: "languages",
    question: "What languages can I communicate in?",
    answer:
      "Our team can support you in English, Korean, Vietnamese, and Chinese. When you submit the form, just let us know your preferred language and we'll match you with the right advisor.",
  },
  {
    id: "university-partnerships",
    question: "I represent a university — how do we partner with K-BRIDGE?",
    answer:
      "We're always open to new institutional partnerships. Use the form on this page and select 'University or institution' to tell us a bit about your institution and the kind of collaboration you have in mind. Our partnerships team will respond directly.",
  },
];

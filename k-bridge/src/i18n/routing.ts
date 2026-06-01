import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // List of supported locales
  locales: ["ko", "en"],

  // Default locale — Korean is the main language
  defaultLocale: "ko",

  // URL prefix strategy
  // "as-needed": Default locale has no prefix (`/about`), others get prefix (`/en/about`)
  // "always": All locales get prefix (`/ko/about`, `/en/about`)
  localePrefix: "as-needed",
});

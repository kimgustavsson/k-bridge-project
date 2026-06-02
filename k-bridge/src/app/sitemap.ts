import type { MetadataRoute } from "next";

const BASE_URL = "https://www.kbridgeedu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/programs", "/contact"];

  // Generate sitemap entries for both Korean (default) and English
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    // Korean version (default locale, no prefix)
    sitemapEntries.push({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: {
          ko: `${BASE_URL}${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });

    // English version
    sitemapEntries.push({
      url: `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 0.9 : 0.7,
      alternates: {
        languages: {
          ko: `${BASE_URL}${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });
  }

  return sitemapEntries;
}

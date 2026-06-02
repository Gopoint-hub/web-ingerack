import type { MetadataRoute } from "next";
import { allSeoPages, siteUrl } from "@/lib/seo-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  const seoRoutes = Object.values(allSeoPages)
    .filter((page) => !page.noindex)
    .map((page) => ({
      url: `${siteUrl}${page.canonicalPath}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.intent === "comercial" ? 0.9 : 0.8,
    }));

  return [...staticRoutes, ...seoRoutes];
}

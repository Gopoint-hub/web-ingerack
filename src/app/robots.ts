import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo-content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/blog/como-elegir-racks-para-bodegas/",
        "/blog/rack-selectivo-vs-rack-dinamico/",
        "/blog/racks-para-pallets-medidas-capacidad-seguridad/",
        "/blog/mantenimiento-inspeccion-racks-industriales/",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

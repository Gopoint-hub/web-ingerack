import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { absoluteUrl, blogPages } from "@/lib/seo-content";

const page = blogPages["como-elegir-racks-para-bodegas"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: absoluteUrl(page.canonicalPath),
  },
  robots: page.noindex
    ? { index: false, follow: true }
    : { index: true, follow: true },
  openGraph: {
    title: page.title,
    description: page.description,
    url: absoluteUrl(page.canonicalPath),
    siteName: "Ingerack",
    locale: "es_CL",
    type: page.noindex ? "article" : "website",
  },
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}

import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ingerack.cl"),
  title: {
    default: "Racks para bodegas en Chile | Ingerack",
    template: "%s | Ingerack",
  },
  description:
    "Diseño, fabricación y montaje de racks para bodegas en Chile. Cotiza rack industrial, rack selectivo y servicios de mantenimiento con Ingerack.",
  keywords: [
    "racks para bodegas",
    "rack industrial",
    "rack selectivo",
    "racks industriales",
    "mantenimiento de racks",
  ],
  alternates: {
    canonical: "https://ingerack.cl/",
  },
  openGraph: {
    title: "Racks para bodegas en Chile | Ingerack",
    description:
      "Soluciones de rack industrial, rack selectivo, layout de bodega y mantenimiento para empresas en Chile.",
    url: "https://ingerack.cl/",
    siteName: "Ingerack",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: "/images/ingerack-ico.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jost.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

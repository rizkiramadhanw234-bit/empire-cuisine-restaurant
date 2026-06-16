import Menu from "@/components/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu | Premium Chinese Restaurant in Klang",
  description:
    "A Feast for Every Gathering Every dish is crafted to celebrate family, friendship, and meaningful moments together.",

  keywords: [
    "Chinese restaurant Klang",
    "Empire Cuisine Klang",
    "御膳楼",
    "VIP room restaurant Klang",
    "banquet hall Klang",
    "dim sum Klang",
    "wedding dinner Klang",
    "halal Chinese food Klang",
  ],
  metadataBase: new URL("https://www.empirecuisine.my"),

  // Open Graph
  openGraph: {
    title: "Our Menu | Premium Chinese Restaurant in Klang",
    description:
      "Savour authentic Chinese cuisine crafted with premium ingredients and timeless culinary tradition.",
    url: "https://www.empirecuisine.my",
    siteName: "Empire Cuisine",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Empire Cuisine Restaurant Klang",
      },
    ],
    locale: "en_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Menu | Premium Chinese Restaurant in Klang",
    description:
      "Savour authentic Chinese cuisine crafted with premium ingredients and timeless culinary tradition.",
    images: ["/assets/logo/logo.png"],
  },

  // Robot crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function MenuPage() {
  return (
    <>
      <Menu />
    </>
  );
}

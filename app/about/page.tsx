import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "About | Premium Chinese Restaurant in Klang",
  description:
    "Empire Cuisine is a refined Chinese dining destination in Klang, dedicated to delivering exceptional cuisine and warm hospitality. We are the perfect choice for family dining, private gatherings,VIP room dining, and grand banquet celebrations.",

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
    title: "About | Premium Chinese Restaurant in Klang",
    description:
      "Empire Cuisine is a refined Chinese dining destination in Klang, dedicated to delivering exceptional cuisine and warm hospitality. We are the perfect choice for family dining, private gatherings,VIP room dining, and grand banquet celebrations.",
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
    title: "About | Premium Chinese Restaurant in Klang",
    description:
      "Empire Cuisine is a refined Chinese dining destination in Klang, dedicated to delivering exceptional cuisine and warm hospitality. We are the perfect choice for family dining, private gatherings,VIP room dining, and grand banquet celebrations.",
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

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}

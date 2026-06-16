import { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "Booking | Empire Cuisine Restaurant 御膳楼大酒家 | Klang",
  description: "Reserve your dining experience at 御膳楼 Empire Cuisine.",

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
    title: "Booking | Empire Cuisine Restaurant 御膳楼大酒家 | Klang",
    description: "Reserve your dining experience at 御膳楼 Empire Cuisine.",
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
    title: "Booking | Premium Chinese Restaurant in Klang",
    description: "Reserve your dining experience at 御膳楼 Empire Cuisine.",
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

export default function BookingPage() {
  return (
    <>
      <About />
    </>
  );
}

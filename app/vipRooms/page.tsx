import VipRooms from "@/components/vipRooms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Rooms | Premium Chinese Restaurant in Klang",
  description:
    "Private Spaces. Exclusive Experiences. Elegantly appointed rooms for every special occasion.",

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
    title: "VIP Rooms | Premium Chinese Restaurant in Klang",
    description:
      "Private Spaces. Exclusive Experiences. Elegantly appointed rooms for every special occasion.",
    url: "https://www.empirecuisine.com.my",
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
    title: "VIP Rooms | Premium Chinese Restaurant in Klang",
    description:
      "Private Spaces. Exclusive Experiences. Elegantly appointed rooms for every special occasion.",
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

export default function VipRoomsPage() {
  return (
    <>
      <VipRooms />
    </>
  );
}

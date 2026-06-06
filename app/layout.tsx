import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AosProvider";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-noto-sc",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Empire Cuisine | Premium Chinese Restaurant in Klang",
  description:
    "Empire Cuisine (御膳楼) – Premium Chinese dining in Klang. Private VIP rooms, two-storey banquet hall, dim sum, seafood & signature dishes. Book now!",

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
    title: "Empire Cuisine | Premium Chinese Restaurant in Klang",
    description:
      "Elegant Chinese dining with private VIP rooms & banquet halls. Perfect for family dinners, weddings, and corporate events.",
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
    title: "Empire Cuisine | Premium Chinese Restaurant in Klang",
    description:
      "Premium Chinese dining in Klang — VIP rooms, banquet halls, dim sum & signature dishes.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Empire Cuisine",
              alternateName: "御膳楼",
              url: "https://www.empirecuisine.com.my",
              telephone: "012-224 8811",
              address: {
                "@type": "PostalAddress",
                streetAddress: "157, Jalan Limau Gedong, Kawasan 18",
                addressLocality: "Klang",
                addressRegion: "Selangor",
                postalCode: "41300",
                addressCountry: "MY",
              },
              servesCuisine: "Chinese",
              openingHours: [
                "Mo-Fr 10:30-14:30",
                "Mo-Fr 17:30-22:30",
                "Sa-Su 08:00-14:30",
                "Sa-Su 17:30-22:30",
              ],
              image: "https://www.empirecuisine.com.my/assets/og-image.jpg",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
      </body>
    </html>
  );
}

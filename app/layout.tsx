import type { Metadata } from "next";
import { Lora, Geist } from "next/font/google";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AosProvider";
import { cn } from "@/lib/utils";
import Script from "next/script";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
  title: "Empire Cuisine Restaurant 御膳楼大酒家 | Klang",
  description:
    "Empire Cuisine Restaurant 御膳楼大酒家 | Klang – Premium Chinese dining in Klang. Private VIP rooms, two-storey banquet hall, dim sum, seafood & signature dishes. Book now!",
  icons: {
    icon: [{ url: "/logo.png", sizes: "512x512", type: "image/png" }],
  },

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
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    title: "Empire Cuisine | Empire Cuisine Restaurant 御膳楼大酒家 | Klang",
    description:
      "Elegant Chinese dining with private VIP rooms & banquet halls. Perfect for family dinners, weddings, and corporate events.",
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
      className={cn(
        "h-full",
        "antialiased",
        lora.variable,
        notoSerifSC.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Empire Cuisine Restaurant",
              alternateName: "御膳楼",
              url: "https://www.empirecuisine.my",
              telephone: "+60122248811",
              priceRange: "RM50 - RM200",
              acceptsReservations: "True",
              address: {
                "@type": "PostalAddress",
                streetAddress: "157, Jalan Limau Gedong, Kawasan 18",
                addressLocality: "Klang",
                addressRegion: "Selangor",
                postalCode: "41300",
                addressCountry: "MY",
              },
              servesCuisine: ["Chinese", "Dim Sum", "Cantonese"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "10:30",
                  closes: "14:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "17:30",
                  closes: "22:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "08:00",
                  closes: "14:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "17:30",
                  closes: "22:30",
                },
              ],
              image: "https://www.empirecuisine.my/assets/logo/logo.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61555584206586&sk=about",
                "https://www.instagram.com/empirecuisine/",
                "https://www.youtube.com/@EmpireCuisineRestaurant",
              ],
              hasMap:
                "https://www.google.com/maps/search/?api=1&query=157+Jalan+Limau+Gedong+Kawasan+18+41300+Klang+Selangor",
              menu: "https://www.empirecuisine.my/menu",
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://wa.me/601222488811",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
                result: {
                  "@type": "Reservation",
                  name: "Table Reservation",
                },
              },
            }),
          }}
        />
        <Script
          src="https://aeo.dck-consulting.com/cdn/agent.js?v=3"
          data-key="C-5EUUbs0E7CC1tXCRUa6ihYjAl8PsZr8v98BFGufR8"
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

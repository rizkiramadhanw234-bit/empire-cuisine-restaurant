import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "Applebot-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.empirecuisine.my/sitemap.xml",
  };
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pramodjoshi.com.np/sitemap.xml",
    host: "https://pramodjoshi.com.np",
  };
}

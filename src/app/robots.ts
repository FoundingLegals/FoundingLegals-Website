import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/start"],
      },
    ],
    sitemap: "https://www.foundinglegals.com/sitemap.xml",
  };
}

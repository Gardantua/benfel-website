import type { MetadataRoute } from "next";
import { siteData } from "@/lib/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.benfel.com.tr";

  const productUrls = siteData.products.map((product) => ({
    url: `${baseUrl}/urunler/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...productUrls,
  ];
}

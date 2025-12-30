import type { MetadataRoute } from "next";

import products from "@/content/products.json";
import { blogPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lumiere-atelier.com";

  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/sustainability",
    "/blog",
    "/contact",
    "/cart",
    "/legal/privacy",
    "/legal/terms",
    "/legal/accessibility",
    "/legal/shipping",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}

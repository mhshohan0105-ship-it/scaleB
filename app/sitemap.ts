import type { MetadataRoute } from "next";
import { blogPosts } from "./blog-data";
import { siteUrl } from "./site-data";

// Static export writes this to /sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/work/", priority: 0.8 },
    { path: "/about/", priority: 0.8 },
    { path: "/contact/", priority: 0.8 },
    { path: "/blog/", priority: 0.7 },
  ];

  return [
    ...pages.map(({ path, priority }) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority })),
    ...blogPosts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}/`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}

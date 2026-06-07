import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://loopwar.dev";
  const routes = ["", "/portfolio", "/contact", "/terms", "/privacy", "/refund"];
  return routes.map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

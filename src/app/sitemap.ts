import type { MetadataRoute } from "next";
import { mainNav, policyNav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...mainNav.map((n) => n.href), ...policyNav.map((n) => n.href)].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: "2026-10-10",
  }));
}

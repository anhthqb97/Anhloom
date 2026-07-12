import type { MetadataRoute } from "next";

import { getAllBlogPostSlugs } from "@/lib/blog-posts";
import { getAllCaseStudySlugs } from "@/lib/case-study-details";
import { getAllProjectSlugs } from "@/lib/project-details";
import { getAllServiceSlugs } from "@/lib/resolve-service";
import { getAllSolutionSlugs } from "@/lib/resolve-solution";
import { siteConfig } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/privacy",
  "/services",
  "/solutions",
  "/portfolio",
  "/case-studies",
  "/blog",
  "/technologies",
  "/pricing",
  "/careers",
  "/estimate",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  for (const slug of getAllServiceSlugs()) {
    routes.push({
      url: `${siteConfig.url}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of getAllSolutionSlugs()) {
    routes.push({
      url: `${siteConfig.url}/solutions/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of getAllProjectSlugs()) {
    routes.push({
      url: `${siteConfig.url}/portfolio/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of getAllCaseStudySlugs()) {
    routes.push({
      url: `${siteConfig.url}/case-studies/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of getAllBlogPostSlugs()) {
    routes.push({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return routes;
}

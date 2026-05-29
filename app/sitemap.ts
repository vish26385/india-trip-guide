import { blogs } from "@/data/blogs";
import { destinations } from "@/data/destinations";
import { itineraries } from "@/data/itineraries";

const baseUrl = "https://www.indiatripguide.com";

export default function sitemap() {
  const staticPages = [
    "",
    "/destinations",
    "/itineraries",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
    })),

    ...destinations.map((destination) => ({
      url: `${baseUrl}/destinations/${destination.slug}`,
      lastModified: new Date(),
    })),

    ...itineraries.map((itinerary) => ({
      url: `${baseUrl}/itineraries/${itinerary.slug}`,
      lastModified: new Date(),
    })),

    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(),
    })),
  ];
}
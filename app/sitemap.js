import { services } from "@/data/siteData";
import { siteUrl } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = ["/", "/ueber-uns", "/leistungen", "/kontakt", "/cookie-richtlinie"];
  const servicePages = services.map((service) => `/leistungen/${service.id}`);

  return [...pages, ...servicePages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/leistungen/") ? 0.8 : 0.6
  }));
}

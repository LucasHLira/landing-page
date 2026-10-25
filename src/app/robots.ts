import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Site público: libera tudo, inclusive os robôs de busca das IAs (padrão SEO/GEO do Jarvis).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

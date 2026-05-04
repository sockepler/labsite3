import type { MetadataRoute } from "next";
import { VALID_LANGS } from "./[lang]/dictionaries";

const BASE = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://labsite.example.com"
).replace(/\/$/, "");

const PATHS = [
  "",
  "about",
  "research",
  "members",
  "publications",
  "access",
  "contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PATHS.flatMap((path) => {
    const seg = path ? `/${path}` : "";
    const languages = Object.fromEntries(
      VALID_LANGS.map((l) => [l, `${BASE}/${l}${seg}`]),
    );

    return VALID_LANGS.map((lang) => ({
      url: `${BASE}/${lang}${seg}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.7,
      alternates: { languages },
    }));
  });
}

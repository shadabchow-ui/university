import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const publicDir = path.join(repoRoot, "public");
const csvPath = path.join(repoRoot, "md", "udemy cat urls - Sheet1.csv");
const outputPath = path.join(publicDir, "sitemap.xml");
const siteUrl = "https://university.pages.dev";

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function normalizeTopicSlug(rawSlug) {
  return rawSlug.replace(/-p$/, "");
}

function readTopicSlugs(csv) {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(1);
  const seen = new Set();

  for (const line of lines) {
    try {
      const url = new URL(line);
      const slug = url.pathname.split("/").filter(Boolean)[1];

      if (slug) {
        seen.add(normalizeTopicSlug(slug));
      }
    } catch {
      continue;
    }
  }

  return [...seen];
}

function buildUrlSet(paths) {
  const lastmod = new Date().toISOString();
  const items = paths
    .map((routePath) => {
      const absoluteUrl =
        routePath === "/" ? `${siteUrl}/` : `${siteUrl}${routePath}/`;

      return [
        "  <url>",
        `    <loc>${escapeXml(absoluteUrl)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    items,
    "</urlset>",
    "",
  ].join("\n");
}

const csv = await fs.readFile(csvPath, "utf8");
const topicSlugs = readTopicSlugs(csv);
const routes = [
  "/",
  "/courses",
  "/search",
  ...topicSlugs.map((slug) => `/topic/${slug}`),
];

await fs.mkdir(publicDir, { recursive: true });
await fs.writeFile(outputPath, buildUrlSet(routes), "utf8");

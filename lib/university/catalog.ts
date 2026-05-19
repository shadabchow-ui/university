import "server-only";

import { readFile } from "fs/promises";
import path from "path";

export type UniversityTopic = {
  href: string;
  label: string;
  slug: string;
};

type HomepageSectionConfig = {
  key:
    | "recommended"
    | "development"
    | "data-ai"
    | "business"
    | "it-software"
    | "design"
    | "marketing";
  title: string;
  headline: string;
  description: string;
  topicSlugs: string[];
};

const TOPIC_LABELS: Record<string, string> = {
  "ai-agents": "AI Agents",
  angular: "Angular",
  "artificial-intelligence": "Artificial Intelligence",
  "aws-certified-cloud-practitioner-clf-c02": "AWS Cloud Practitioner",
  "business-analysis": "Business Analysis",
  "business-fundamentals": "Business Fundamentals",
  "business-strategy": "Business Strategy",
  "cloud-computing": "Cloud Computing",
  "data-analysis": "Data Analysis",
  "data-science": "Data Science",
  "database-design": "Database Design",
  "deep-learning": "Deep Learning",
  "design-thinking": "Design Thinking",
  "digital-marketing": "Digital Marketing",
  "email-marketing": "Email Marketing",
  figma: "Figma",
  "generative-ai": "Generative AI",
  "graphic-design": "Graphic Design",
  "instagram-marketing": "Instagram Marketing",
  "it-support": "IT Support",
  javascript: "JavaScript",
  "large-language-models": "Large Language Models",
  "machine-learning": "Machine Learning",
  "marketing-strategy": "Marketing Strategy",
  "microsoft-excel": "Microsoft Excel",
  "microsoft-power-bi": "Microsoft Power BI",
  "nextjs-p": "Next.js",
  nodejs: "Node.js",
  "power-bi": "Power BI",
  "project-management": "Project Management",
  react: "React",
  "search-engine-optimization": "SEO",
  "software-architecture": "Software Architecture",
  "software-testing": "Software Testing",
  "social-media-marketing": "Social Media Marketing",
  typescript: "TypeScript",
  "ui-ux-design": "UI / UX Design",
  "web-design": "Web Design",
  "web-development": "Web Development",
};

const HOMEPAGE_SECTION_CONFIG: HomepageSectionConfig[] = [
  {
    key: "recommended",
    title: "Recommended for you",
    headline: "Shortlist the most practical tracks across the marketplace.",
    description:
      "A mixed rail spanning AI, product, programming, and operator skills for first-session discovery.",
    topicSlugs: [
      "artificial-intelligence",
      "web-development",
      "project-management",
      "figma",
      "digital-marketing",
      "cloud-computing",
    ],
  },
  {
    key: "development",
    title: "Development",
    headline: "Browse code-first courses from frontend to systems thinking.",
    description:
      "Modern frameworks, programming languages, and architectural depth for shipping production products.",
    topicSlugs: [
      "web-development",
      "javascript",
      "react",
      "typescript",
      "nodejs",
      "nextjs-p",
    ],
  },
  {
    key: "data-ai",
    title: "Data & AI",
    headline: "Applied intelligence, analytics, and data workflows.",
    description:
      "From generative AI to machine learning pipelines, this rail keeps the catalog heavy on current operator tooling.",
    topicSlugs: [
      "artificial-intelligence",
      "generative-ai",
      "large-language-models",
      "machine-learning",
      "data-science",
      "data-analysis",
    ],
  },
  {
    key: "business",
    title: "Business",
    headline: "Leadership, planning, and decision-making programs.",
    description:
      "Operator-focused business tracks grounded in strategy, analysis, communication, and execution.",
    topicSlugs: [
      "business-fundamentals",
      "business-strategy",
      "business-analysis",
      "project-management",
      "finance",
      "excel",
    ],
  },
  {
    key: "it-software",
    title: "IT & Software",
    headline:
      "Infrastructure, reliability, and software delivery fundamentals.",
    description:
      "A curated layer for cloud, QA, architecture, and support-adjacent technical skills.",
    topicSlugs: [
      "cloud-computing",
      "aws-certified-cloud-practitioner-clf-c02",
      "software-testing",
      "software-architecture",
      "it-support",
      "cyber-security",
    ],
  },
  {
    key: "design",
    title: "Design",
    headline:
      "Visual craft for interfaces, product thinking, and brand systems.",
    description:
      "Design topics stay practical: interface systems, motion, composition, and creative tooling.",
    topicSlugs: [
      "graphic-design",
      "figma",
      "web-design",
      "ui-ux-design",
      "design-thinking",
      "photoshop",
    ],
  },
  {
    key: "marketing",
    title: "Marketing",
    headline: "Demand generation, content systems, and growth loops.",
    description:
      "Upcube-style marketing coverage across digital growth, SEO, social strategy, and lifecycle channels.",
    topicSlugs: [
      "digital-marketing",
      "marketing-strategy",
      "social-media-marketing",
      "email-marketing",
      "instagram-marketing",
      "search-engine-optimization",
    ],
  },
];

const POPULAR_SKILL_SLUGS = [
  "artificial-intelligence",
  "react",
  "figma",
  "project-management",
  "digital-marketing",
  "cloud-computing",
  "typescript",
  "data-analysis",
];

const TRENDING_TOPIC_SLUGS = [
  "ai-agents",
  "generative-ai",
  "web-development",
  "machine-learning",
  "business-strategy",
  "graphic-design",
  "software-architecture",
  "social-media-marketing",
];

function toLabel(slug: string) {
  return (
    TOPIC_LABELS[slug] ??
    slug
      .split("-")
      .map((part) =>
        part.length <= 3
          ? part.toUpperCase()
          : part[0]!.toUpperCase() + part.slice(1),
      )
      .join(" ")
  );
}

function toTopic(slug: string): UniversityTopic {
  return {
    slug,
    label: toLabel(slug),
    href: `/topic/${slug}`,
  };
}

async function loadAvailableTopicSlugs() {
  const csvPath = path.join(process.cwd(), "md", "udemy cat urls - Sheet1.csv");
  const csv = await readFile(csvPath, "utf8");
  const matches = csv.matchAll(/\/topic\/([^/?]+)/g);
  const available = new Set<string>();

  for (const match of matches) {
    if (match[1]) {
      available.add(match[1]);
    }
  }

  return available;
}

function pickTopics(available: Set<string>, topicSlugs: string[]) {
  return topicSlugs.filter((slug) => available.has(slug)).map(toTopic);
}

export async function getHomepageTopicSections() {
  const available = await loadAvailableTopicSlugs();

  return HOMEPAGE_SECTION_CONFIG.map((section) => ({
    ...section,
    topics: pickTopics(available, section.topicSlugs),
  }));
}

export async function getPopularSkills() {
  const available = await loadAvailableTopicSlugs();
  return pickTopics(available, POPULAR_SKILL_SLUGS);
}

export async function getTrendingTopics() {
  const available = await loadAvailableTopicSlugs();
  return pickTopics(available, TRENDING_TOPIC_SLUGS);
}

export async function getAllHomepageTopicSlugs() {
  const available = await loadAvailableTopicSlugs();
  const everySlug = new Set<string>();

  for (const slug of POPULAR_SKILL_SLUGS) {
    if (available.has(slug)) {
      everySlug.add(slug);
    }
  }

  for (const slug of TRENDING_TOPIC_SLUGS) {
    if (available.has(slug)) {
      everySlug.add(slug);
    }
  }

  for (const section of HOMEPAGE_SECTION_CONFIG) {
    for (const slug of section.topicSlugs) {
      if (available.has(slug)) {
        everySlug.add(slug);
      }
    }
  }

  return [...everySlug];
}

export async function getTopicBySlug(slug: string) {
  const available = await loadAvailableTopicSlugs();
  if (!available.has(slug)) {
    return null;
  }

  return toTopic(slug);
}

import { readFileSync } from "fs";
import path from "path";

export type UniversityTopic = {
  slug: string;
  title: string;
  description: string;
  track: string;
  difficulty: "Beginner friendly" | "Intermediate path" | "Advanced track";
  courseCount: number;
  learnerCount: number;
  weeklyHours: number;
  relatedSlugs: string[];
};

export type UniversityCourse = {
  id: string;
  slug: string;
  topicSlug: string;
  topicTitle: string;
  title: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationBucket: "Quick hit" | "Deep dive" | "Career track";
  durationHours: number;
  lessonCount: number;
  rating: number;
  reviewCount: number;
  updatedAt: string;
  tags: string[];
  priceLabel: "Free" | "Included" | "Premium";
  description: string;
};

type TopicSeed = {
  slug: string;
  title: string;
  track: string;
  keywords: string[];
};

const csvPath = path.join(process.cwd(), "md", "udemy cat urls - Sheet1.csv");

const TITLE_OVERRIDES: Record<string, string> = {
  ai: "AI",
  api: "API",
  aws: "AWS",
  css: "CSS",
  dbt: "dbt",
  gcp: "GCP",
  html: "HTML",
  ios: "iOS",
  javascript: "JavaScript",
  llm: "LLM",
  llms: "LLMs",
  mlops: "MLOps",
  nlp: "NLP",
  nodejs: "Node.js",
  nextjs: "Next.js",
  nextjsp: "Next.js",
  openai: "OpenAI",
  php: "PHP",
  pytorch: "PyTorch",
  qa: "QA",
  rag: "RAG",
  react: "React",
  sql: "SQL",
  typescript: "TypeScript",
  ui: "UI",
  ux: "UX",
};

const TRACK_KEYWORDS = [
  {
    track: "AI and data systems",
    keywords: [
      "ai",
      "artificial",
      "machine",
      "data",
      "learning",
      "language",
      "llm",
      "deep",
      "rag",
      "pytorch",
      "mlops",
      "analytics",
      "claude",
    ],
  },
  {
    track: "Web and app engineering",
    keywords: [
      "web",
      "javascript",
      "typescript",
      "react",
      "angular",
      "css",
      "html",
      "nodejs",
      "nextjs",
      "frontend",
      "backend",
      "api",
      "django",
      "spring",
      "php",
      "wordpress",
      "full",
    ],
  },
  {
    track: "Cloud and platform operations",
    keywords: [
      "aws",
      "azure",
      "gcp",
      "kubernetes",
      "docker",
      "microservices",
      "devops",
      "terraform",
      "linux",
      "cloud",
    ],
  },
  {
    track: "Design and product workflow",
    keywords: ["design", "ux", "ui", "product", "figma", "marketing", "seo"],
  },
];

const INSTRUCTOR_PREFIX = [
  "Avery",
  "Jordan",
  "Morgan",
  "Taylor",
  "Riley",
  "Cameron",
  "Skyler",
  "Quinn",
];

const INSTRUCTOR_SUFFIX = [
  "Labs",
  "Studio",
  "Collective",
  "Workshop",
  "Guild",
  "Practice",
  "Institute",
  "Foundry",
];

const COURSE_PATTERNS = [
  "{topic} Foundations",
  "Shipping with {topic}",
  "{topic} in Real Projects",
  "Advanced {topic} Systems",
];

const COURSE_DESCRIPTORS = [
  "Build practical skill with guided projects, review drills, and production-style examples.",
  "Work through modern patterns, debugging tactics, and deployment-ready habits without relying on external APIs.",
  "A dark-mode friendly study path with focused lessons, labs, and realistic milestone pacing.",
  "Designed for repeatable practice with deterministic outputs and clear progression checkpoints.",
];

function hashString(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function capitalizeWord(word: string) {
  const normalized = word.replace(/[^a-z0-9]+/gi, "");
  const override = TITLE_OVERRIDES[normalized.toLowerCase()];

  if (override) {
    return override;
  }

  return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
}

function slugToTitle(slug: string) {
  return slug
    .replace(/-p$/, "")
    .split("-")
    .filter(Boolean)
    .map(capitalizeWord)
    .join(" ");
}

function getTrack(keywords: string[]) {
  const lowerKeywords = keywords.map((keyword) => keyword.toLowerCase());
  const matched = TRACK_KEYWORDS.find(({ keywords: trackKeywords }) =>
    trackKeywords.some((keyword) => lowerKeywords.includes(keyword)),
  );

  return matched?.track ?? "Modern professional skills";
}

function getDifficulty(hash: number): UniversityTopic["difficulty"] {
  const options: UniversityTopic["difficulty"][] = [
    "Beginner friendly",
    "Intermediate path",
    "Advanced track",
  ];

  return options[hash % options.length]!;
}

function parseTopicSeeds(): TopicSeed[] {
  const file = readFileSync(csvPath, "utf8");
  const lines = file
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(1);
  const seen = new Set<string>();
  const seeds: TopicSeed[] = [];

  for (const line of lines) {
    try {
      const url = new URL(line);
      const slug = url.pathname.split("/").filter(Boolean)[1];

      if (!slug || seen.has(slug)) {
        continue;
      }

      seen.add(slug);

      const normalizedSlug = slug.replace(/-p$/, "");
      const keywords = normalizedSlug.split("-").filter(Boolean);
      seeds.push({
        slug: normalizedSlug,
        title: slugToTitle(normalizedSlug),
        track: getTrack(keywords),
        keywords,
      });
    } catch {
      continue;
    }
  }

  return seeds;
}

const topicSeeds = parseTopicSeeds();

function findRelatedSlugs(topic: TopicSeed) {
  const exactTrackMatches = topicSeeds.filter(
    (candidate) =>
      candidate.slug !== topic.slug && candidate.track === topic.track,
  );
  const keywordMatches = exactTrackMatches.filter((candidate) =>
    candidate.keywords.some((keyword) => topic.keywords.includes(keyword)),
  );
  const pool = keywordMatches.length >= 4 ? keywordMatches : exactTrackMatches;

  return pool.slice(0, 4).map((candidate) => candidate.slug);
}

export function getAllTopics(): UniversityTopic[] {
  return topicSeeds.map((topic) => {
    const topicHash = hashString(topic.slug);

    return {
      slug: topic.slug,
      title: topic.title,
      description: `${topic.title} sits inside the ${topic.track.toLowerCase()} lane at Upcube University, with curated project paths, compact study loops, and deterministic practice sets for teams that need repeatable progress.`,
      track: topic.track,
      difficulty: getDifficulty(topicHash),
      courseCount: 12 + (topicHash % 28),
      learnerCount: 2400 + (topicHash % 6200),
      weeklyHours: 3 + (topicHash % 6),
      relatedSlugs: findRelatedSlugs(topic),
    };
  });
}

export function getTopicBySlug(slug: string) {
  return getAllTopics().find((topic) => topic.slug === slug);
}

function createCourse(topic: UniversityTopic, index: number): UniversityCourse {
  const seed = hashString(`${topic.slug}:${index}`);
  const levelOptions: UniversityCourse["level"][] = [
    "Beginner",
    "Intermediate",
    "Advanced",
  ];
  const durationOptions: UniversityCourse["durationBucket"][] = [
    "Quick hit",
    "Deep dive",
    "Career track",
  ];
  const priceOptions: UniversityCourse["priceLabel"][] = [
    "Free",
    "Included",
    "Premium",
  ];
  const first = INSTRUCTOR_PREFIX[seed % INSTRUCTOR_PREFIX.length]!;
  const last = INSTRUCTOR_SUFFIX[seed % INSTRUCTOR_SUFFIX.length]!;
  const pattern = COURSE_PATTERNS[index % COURSE_PATTERNS.length]!;

  return {
    id: `${topic.slug}-${index + 1}`,
    slug: `${topic.slug}-${index + 1}`,
    topicSlug: topic.slug,
    topicTitle: topic.title,
    title: pattern.replace("{topic}", topic.title),
    instructor: `${first} ${last}`,
    level: levelOptions[seed % levelOptions.length]!,
    durationBucket: durationOptions[(seed >> 2) % durationOptions.length]!,
    durationHours: 2 + (seed % 18),
    lessonCount: 12 + (seed % 48),
    rating: 4 + (seed % 10) / 10,
    reviewCount: 140 + (seed % 4200),
    updatedAt: new Date(
      Date.UTC(2025, seed % 12, 1 + (seed % 28)),
    ).toISOString(),
    tags: [topic.track, topic.title, topic.difficulty],
    priceLabel: priceOptions[(seed >> 4) % priceOptions.length]!,
    description: COURSE_DESCRIPTORS[index % COURSE_DESCRIPTORS.length]!,
  };
}

export function getCoursesForTopic(topicSlug: string) {
  const topic = getTopicBySlug(topicSlug);

  if (!topic) {
    return [];
  }

  return Array.from({ length: 4 }, (_, index) => createCourse(topic, index));
}

export function getAllCourses() {
  return getAllTopics().flatMap((topic) => getCoursesForTopic(topic.slug));
}

export function getFeaturedTopics(limit = 10) {
  return getAllTopics()
    .slice()
    .sort((left, right) => right.learnerCount - left.learnerCount)
    .slice(0, limit);
}

export function getFeaturedCourses(limit = 12) {
  return getAllCourses()
    .slice()
    .sort((left, right) => {
      if (right.rating !== left.rating) {
        return right.rating - left.rating;
      }

      return right.reviewCount - left.reviewCount;
    })
    .slice(0, limit);
}

export function getRelatedTopics(topic: UniversityTopic) {
  return topic.relatedSlugs
    .map((slug) => getTopicBySlug(slug))
    .filter((candidate): candidate is UniversityTopic => Boolean(candidate));
}

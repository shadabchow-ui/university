import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const inputPath = path.join(repoRoot, "md", "udemy cat urls - Sheet1.csv");
const outputPath = path.join(repoRoot, "lib", "university", "categories.ts");

const CATEGORY_GROUPS = [
  "Business",
  "Design",
  "Development",
  "Finance & Accounting",
  "Health & Fitness",
  "IT & Software",
  "Lifestyle",
  "Marketing",
  "Music",
  "Office Productivity",
  "Personal Development",
  "Photography & Video",
  "Teaching & Academics",
  "General",
];

const TITLE_OVERRIDES = new Map([
  ["ai-agents", "AI Agents"],
  ["aspnet-core", "ASP.NET Core"],
  ["autocad-civil-3d", "AutoCAD Civil 3D"],
  ["c-plus-plus", "C++"],
  ["c-sharp", "C#"],
  ["eplan-electric-p8", "EPLAN Electric P8"],
  ["fusion-360", "Fusion 360"],
  ["iso-13485", "ISO 13485"],
  ["iso-9001", "ISO 9001"],
  ["isoiec-27001", "ISO/IEC 27001"],
  ["k6", "k6"],
  ["lpic-1-linux-administrator", "LPIC-1 Linux Administrator"],
  ["microsoft-az-104", "Microsoft AZ-104"],
  ["microsoft-az-900", "Microsoft AZ-900"],
  ["microsoft-office-365", "Microsoft Office 365"],
  ["microsoft-pl-300", "Microsoft PL-300"],
  ["n8n", "n8n"],
  ["nextjs-p", "Next.js"],
  ["nodejs", "Node.js"],
  ["oracle-1z0-149", "Oracle 1Z0-149"],
  ["prince2", "PRINCE2"],
  ["rhino-3d", "Rhino 3D"],
  ["sap-s4hana", "SAP S/4HANA"],
  ["stm32", "STM32"],
  ["windows-11", "Windows 11"],
  ["3d-animation", "3D Animation"],
  ["3d-fashion", "3D Fashion"],
  ["3d-game-development", "3D Game Development"],
  ["3d-modeling", "3D Modeling"],
  ["3d-printing", "3D Printing"],
  ["3d-rendering", "3D Rendering"],
  ["3d-rigging", "3D Rigging"],
  ["3d-sculpting", "3D Sculpting"],
  ["3ds-max", "3ds Max"],
  ["360-video", "360 Video"],
  ["2d-animation", "2D Animation"],
  ["2d-game-development", "2D Game Development"],
]);

const TOKEN_OVERRIDES = new Map([
  ["abrsm", "ABRSM"],
  ["acca", "ACCA"],
  ["2d", "2D"],
  ["3d", "3D"],
  ["360", "360"],
  ["adhd", "ADHD"],
  ["ae", "AE"],
  ["ai", "AI"],
  ["anbima", "ANBIMA"],
  ["api", "API"],
  ["apis", "APIs"],
  ["atls", "ATLS"],
  ["aws", "AWS"],
  ["b2b", "B2B"],
  ["bim", "BIM"],
  ["bpmn", "BPMN"],
  ["ceh", "CEH"],
  ["cfa", "CFA"],
  ["cia", "CIA"],
  ["cips", "CIPS"],
  ["cisa", "CISA"],
  ["cism", "CISM"],
  ["cissp", "CISSP"],
  ["cma", "CMA"],
  ["crm", "CRM"],
  ["css", "CSS"],
  ["cto", "CTO"],
  ["cqe", "CQE"],
  ["cysa", "CySA+"],
  ["dax", "DAX"],
  ["dcf", "DCF"],
  ["devops", "DevOps"],
  ["django", "Django"],
  ["eplan", "EPLAN"],
  ["erp", "ERP"],
  ["esg", "ESG"],
  ["excel", "Excel"],
  ["figma", "Figma"],
  ["gcp", "GCP"],
  ["gcse", "GCSE"],
  ["gdpr", "GDPR"],
  ["gis", "GIS"],
  ["gmat", "GMAT"],
  ["go", "Go"],
  ["gmp", "GMP"],
  ["gre", "GRE"],
  ["gpt", "GPT"],
  ["hr", "HR"],
  ["html", "HTML"],
  ["ibm", "IBM"],
  ["it", "IT"],
  ["java", "Java"],
  ["javascript", "JavaScript"],
  ["jira", "Jira"],
  ["kotlin", "Kotlin"],
  ["kubernetes", "Kubernetes"],
  ["linux", "Linux"],
  ["mba", "MBA"],
  ["ml", "ML"],
  ["mysql", "MySQL"],
  ["nosql", "NoSQL"],
  ["oracle", "Oracle"],
  ["p8", "P8"],
  ["php", "PHP"],
  ["pl", "PL"],
  ["plc", "PLC"],
  ["powerbi", "Power BI"],
  ["powerpoint", "PowerPoint"],
  ["procreate", "Procreate"],
  ["qa", "QA"],
  ["react", "React"],
  ["reactjs", "React"],
  ["rest", "REST"],
  ["rhino", "Rhino"],
  ["sap", "SAP"],
  ["seo", "SEO"],
  ["smm", "SMM"],
  ["seo", "SEO"],
  ["sql", "SQL"],
  ["sre", "SRE"],
  ["swift", "Swift"],
  ["uat", "UAT"],
  ["typescript", "TypeScript"],
  ["ui", "UI"],
  ["uiux", "UI/UX"],
  ["ux", "UX"],
  ["vr", "VR"],
  ["vuejs", "Vue.js"],
  ["web3", "Web3"],
  ["wordpress", "WordPress"],
  ["xero", "Xero"],
]);

const GROUP_RULES = [
  {
    group: "Development",
    keywords: [
      "web-development",
      "app-development",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "angular",
      "vue",
      "node",
      "frontend",
      "backend",
      "full-stack",
      "fullstack",
      "programming",
      "coding",
      "python",
      "java",
      "c-sharp",
      "c-plus-plus",
      "php",
      "ruby",
      "swift",
      "kotlin",
      "golang",
      "rust",
      "flutter",
      "react-native",
      "android-development",
      "ios-development",
      "game-development",
      "software-development",
      "sql",
      "database",
      "data-science",
      "data-analysis",
      "data-analytics",
      "data-engineering",
      "data-warehouse",
      "data-modeling",
      "data-visualization",
      "big-data",
      "databricks",
      "data-structures",
      "algorithms",
      "api",
      "graphql",
      "android",
      "ios",
      "mobile-development",
      "android-studio",
      "android-jetpack",
      "jetpack-compose",
      "bash-shell",
      "css",
      "express-framework",
      "git",
      "github",
      "github-copilot",
      "google-script",
      "embedded-c",
      "embedded-systems",
      "godot",
      "apache-kafka",
      "ansible",
      "appium",
      "automation-testing",
      "cicd",
      "cypress",
      "qa",
      "testing",
      "machine-learning",
      "deep-learning",
      "artificial-intelligence",
      "ai-content-generation",
      "ai-art",
      "claude-ai",
      "claude-code",
      "cursor",
      "ai-agents",
      "chatgpt",
      "prompt-engineering",
      "web3",
      "blockchain",
    ],
  },
  {
    group: "IT & Software",
    keywords: [
      "aws",
      "azure",
      "gcp",
      "linux",
      "windows",
      "network",
      "cyber",
      "security",
      "ethical-hacking",
      "penetration-testing",
      "comptia",
      "cisco",
      "ccna",
      "devops",
      "docker",
      "kubernetes",
      "terraform",
      "cloud",
      "server",
      "system-admin",
      "active-directory",
      "vmware",
      "help-desk",
      "it-support",
      "mongodb",
      "mysql",
      "postgresql",
      "oracle",
      "sap",
      "powershell",
      "excel-vba",
      "sharepoint",
      "computer-hardware",
      "computer-repair",
      "computer-basics",
      "computer-skills",
      "data-protection",
      "compliance-it",
    ],
  },
  {
    group: "Business",
    keywords: [
      "business",
      "management",
      "leadership",
      "project-management",
      "product-management",
      "operations",
      "e-commerce",
      "dropshipping",
      "etsy",
      "ebay-selling",
      "agile",
      "scrum",
      "sales",
      "procurement",
      "supply",
      "negotiation",
      "entrepreneurship",
      "startup",
      "consulting",
      "real-estate",
      "human-resources",
      "hr",
      "customer-service",
      "service-management",
      "quality-management",
      "six-sigma",
      "pmp",
      "prince2",
      "airbnb-hosting",
      "administrative-support",
      "change-management",
      "customer-success",
      "compliance",
      "corporate-governance",
      "bpmn",
      "process",
      "business-analysis",
      "b2b-sales",
      "cold-calling",
      "cold-email",
      "service-now",
      "data-entry",
    ],
  },
  {
    group: "Finance & Accounting",
    keywords: [
      "accounting",
      "bookkeeping",
      "finance",
      "financial",
      "investing",
      "trading",
      "forex",
      "stock",
      "cryptocurrency",
      "crypto",
      "tax",
      "quickbooks",
      "excel-finance",
      "banking",
      "valuation",
      "economics",
      "anti-money-laundering",
      "credit",
      "cfa",
      "acca",
      "cma",
      "anbima",
      "securities",
      "binance",
      "bitcoin",
    ],
  },
  {
    group: "Office Productivity",
    keywords: [
      "excel",
      "word",
      "powerpoint",
      "office-365",
      "microsoft-office",
      "google-sheets",
      "google-workspace",
      "google-calendar",
      "google-docs",
      "google-drive",
      "google-forms",
      "google-office",
      "google-slides",
      "notion",
      "productivity-software",
      "outlook",
      "sharepoint",
      "teams",
      "apple-keynote",
      "airtable",
      "confluence",
      "microsoft-project",
    ],
  },
  {
    group: "Marketing",
    keywords: [
      "marketing",
      "seo",
      "social-media",
      "branding",
      "copywriting",
      "content-marketing",
      "advertising",
      "email-marketing",
      "affiliate-marketing",
      "instagram",
      "facebook-ads",
      "google-ads",
      "digital-marketing",
      "market-research",
      "ab-testing",
      "adobe-analytics",
      "app-store-optimization",
      "bing-ads",
      "blogging",
      "clickbank",
      "google-analytics",
      "google-data-studio",
      "google-looker",
      "google-search-console",
      "google-tag-manager",
      "growth-hacking",
      "gohighlevel",
      "content-creation",
      "content-writing",
      "conversion-rate-optimization",
      "copywriting",
      "amazon-fba",
      "amazon-kindle",
      "alibaba-importing",
    ],
  },
  {
    group: "Design",
    keywords: [
      "design",
      "graphic",
      "photoshop",
      "illustrator",
      "figma",
      "ui",
      "ux",
      "drawing",
      "animation",
      "3d",
      "autocad",
      "blender",
      "interior-design",
      "fashion",
      "procreate",
      "indesign",
      "canva",
      "after-effects",
      "motion-graphics",
      "cad",
      "adobe-xd",
      "affinity-photo",
      "art-composition",
      "art-history",
      "comic-book-creation",
      "color-theory",
      "clipstudiopaint",
      "darktable",
      "character-modeling",
      "solidworks",
      "inventor",
      "catia",
      "ansys",
      "bim",
      "autodesk",
    ],
  },
  {
    group: "Photography & Video",
    keywords: [
      "photography",
      "video",
      "videography",
      "filmmaking",
      "davinci-resolve",
      "premiere",
      "lightroom",
      "photo-editing",
      "cinematography",
      "youtube",
      "adobe-audition",
      "audio-production",
      "audacity",
      "cameras",
      "capcut",
      "color-grading",
    ],
  },
  {
    group: "Health & Fitness",
    keywords: [
      "health",
      "fitness",
      "nutrition",
      "yoga",
      "pilates",
      "workout",
      "mental-health",
      "meditation",
      "wellness",
      "massage",
      "sports",
      "basketball",
      "boxing",
      "brazilian-jiu-jitsu",
      "calisthenics",
      "drug-regulatory-affairs",
      "drug-safety",
      "first-aid",
      "acceptance-and-commitment-therapy",
      "acupressure",
      "acupuncture",
      "addiction-recovery",
      "advanced-trauma-life-support",
      "anatomy",
      "anti-aging",
      "applied-behavior-analysis",
      "art-therapy",
      "autism",
      "ayurvedic-medicine",
      "breathing-techniques",
      "cardiology",
      "cbt",
      "child-psychology",
      "counseling",
      "couples-counseling",
      "cupping-therapy",
      "dieting",
    ],
  },
  {
    group: "Music",
    keywords: [
      "music",
      "guitar",
      "piano",
      "singing",
      "songwriting",
      "music-production",
      "dj",
      "logic-pro",
      "ableton",
      "fl-studio",
      "violin",
      "drums",
      "accordion",
      "audacity-software",
      "bachata",
      "ballet",
      "beat",
      "cello",
      "choreography",
      "cubase",
      "dance",
    ],
  },
  {
    group: "Personal Development",
    keywords: [
      "personal-development",
      "communication",
      "public-speaking",
      "career",
      "resume",
      "interview",
      "mindfulness",
      "time-management",
      "confidence",
      "coaching",
      "productivity",
      "happiness",
      "emotional-intelligence",
      "relationships",
      "accent-reduction",
      "acting",
      "assertiveness",
      "charisma",
      "conversation-skills",
      "creative-writing",
      "critical-thinking",
      "decision-making",
      "difficult-conversations",
      "dating",
      "brain-training",
    ],
  },
  {
    group: "Lifestyle",
    keywords: [
      "cooking",
      "baking",
      "gardening",
      "travel",
      "beauty",
      "fashion-design",
      "pet",
      "dog",
      "craft",
      "arts",
      "home-improvement",
      "interior-decoration",
      "acrylic-painting",
      "akashic-records",
      "angel",
      "astral-projection",
      "astrology",
      "baby-care",
      "bartending",
      "beekeeping",
      "belly-dancing",
      "cake-decorating",
      "canada-immigration",
      "candle-making",
      "car-repair",
      "cat-behavior",
      "cigar-appreciation",
      "coffee",
      "cosmetics",
      "crochet",
      "crystal-energy",
      "decluttering",
      "dessert",
    ],
  },
  {
    group: "Teaching & Academics",
    keywords: [
      "teaching",
      "education",
      "mathematics",
      "math",
      "statistics",
      "physics",
      "chemistry",
      "biology",
      "engineering",
      "architecture",
      "language",
      "english",
      "spanish",
      "french",
      "german",
      "arabic",
      "japanese",
      "korean",
      "ielts",
      "toefl",
      "exam",
      "test-prep",
      "research",
      "academic",
      "abrsm",
      "algebra",
      "astronomy",
      "aviation",
      "econometrics",
      "bioinformatics",
      "biomechanics",
      "calculus",
      "chemistry",
      "construction",
      "control-systems",
      "contract-law",
      "criminology",
      "differential-equations",
      "engineering-math",
      "law",
      "medical",
      "physics",
    ],
  },
];

function parseSingleColumnCsv(input) {
  return input
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^"|"$/g, ""))
    .slice(1);
}

function toTitle(slug) {
  const direct = TITLE_OVERRIDES.get(slug);
  if (direct) {
    return direct;
  }

  return slug
    .split("-")
    .filter(Boolean)
    .map((token) => {
      const override = TOKEN_OVERRIDES.get(token);
      if (override) {
        return override;
      }

      if (/^\d+$/.test(token)) {
        return token;
      }

      return token.charAt(0).toUpperCase() + token.slice(1);
    })
    .join(" ");
}

function inferGroup(slug) {
  for (const rule of GROUP_RULES) {
    if (rule.keywords.some((keyword) => slug.includes(keyword))) {
      return rule.group;
    }
  }

  return "General";
}

function normalizeCategoryRecord(rawUrl, sortIndex) {
  const parsed = new URL(rawUrl);
  const segments = parsed.pathname.split("/").filter(Boolean);

  if (segments[0] !== "topic" || !segments[1]) {
    throw new Error(`Unsupported category URL: ${rawUrl}`);
  }

  const slug = segments[1].toLowerCase();
  const sort = parsed.searchParams.get("sort") ?? "";
  const title = toTitle(slug);
  const sourceUrl = `https://www.udemy.com/topic/${slug}/?lang=${parsed.searchParams.get("lang") ?? "en"}&sort=${sort}`;

  return {
    title,
    slug,
    href: `/topic/${slug}`,
    sourceUrl,
    group: inferGroup(slug),
    sort,
    sortIndex,
  };
}

function buildModule(categories, sourceRowCount) {
  const groupsUsed = CATEGORY_GROUPS.filter((group) => categories.some((category) => category.group === group));

  const categoryItems = categories
    .map(
      (category) =>
        `  {\n    title: ${JSON.stringify(category.title)},\n    slug: ${JSON.stringify(category.slug)},\n    href: ${JSON.stringify(category.href)},\n    sourceUrl: ${JSON.stringify(category.sourceUrl)},\n    group: ${JSON.stringify(category.group)},\n    sort: ${JSON.stringify(category.sort)},\n  },`,
    )
    .join("\n");

  const groupItems = groupsUsed.map((group) => `  ${JSON.stringify(group)},`).join("\n");

  return `export const UNIVERSITY_CATEGORY_SOURCE_PATH = "md/udemy cat urls - Sheet1.csv" as const;
export const UNIVERSITY_CATEGORY_SOURCE_ROW_COUNT = ${sourceRowCount} as const;
export const UNIVERSITY_CATEGORY_UNIQUE_COUNT = ${categories.length} as const;

export const universityCategoryGroups = [
${groupItems}
] as const;

export type UniversityCategoryGroup = (typeof universityCategoryGroups)[number];

export type UniversityCategory = {
  title: string;
  slug: string;
  href: \`/topic/\${string}\`;
  sourceUrl: string;
  group: UniversityCategoryGroup;
  sort: string;
};

export const universityCategories: UniversityCategory[] = [
${categoryItems}
];

export const universityCategoriesBySlug = Object.fromEntries(
  universityCategories.map((category) => [category.slug, category]),
) as Record<string, UniversityCategory>;
`;
}

async function main() {
  const csv = await readFile(inputPath, "utf8");
  const urls = parseSingleColumnCsv(csv);
  const dedupedUrls = [...new Set(urls)];

  const categories = dedupedUrls
    .map((url, index) => normalizeCategoryRecord(url, index))
    .sort((left, right) => left.title.localeCompare(right.title) || left.slug.localeCompare(right.slug));

  const moduleSource = buildModule(categories, urls.length);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    `// Generated by scripts/build-university-categories.mjs. Do not edit by hand.\n${moduleSource}`,
    "utf8",
  );

  console.log(
    JSON.stringify(
      {
        inputPath: path.relative(repoRoot, inputPath),
        outputPath: path.relative(repoRoot, outputPath),
        sourceRowCount: urls.length,
        uniqueCategoryCount: categories.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

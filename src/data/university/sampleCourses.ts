export type SampleCourse = {
  badge: string;
  category: string;
  coverGradient: string;
  duration: string;
  instructor: string;
  learners: string;
  lessons: number;
  level: string;
  price: string;
  rating: string;
  section:
    | "recommended"
    | "development"
    | "data-ai"
    | "business"
    | "it-software"
    | "design"
    | "marketing";
  slug: string;
  summary: string;
  title: string;
  topicSlug: string;
};

export const sampleCourses: SampleCourse[] = [
  {
    slug: "agent-systems-for-ops-teams",
    title: "Agent Systems for Ops Teams",
    instructor: "Mina Carter",
    summary:
      "Design resilient AI assistants, escalation flows, and operator dashboards for real production teams.",
    section: "recommended",
    topicSlug: "artificial-intelligence",
    category: "AI Systems",
    level: "Intermediate",
    badge: "Best seller",
    rating: "4.9",
    learners: "18.4k",
    duration: "9.5 hrs",
    lessons: 46,
    price: "$74",
    coverGradient:
      "linear-gradient(135deg, rgba(56,189,248,0.95), rgba(15,23,42,0.88))",
  },
  {
    slug: "full-stack-velocity-with-next",
    title: "Full-Stack Velocity with Next.js",
    instructor: "Rae Holloway",
    summary:
      "Ship dense product surfaces with App Router, static rendering, and credible UX states.",
    section: "recommended",
    topicSlug: "web-development",
    category: "Product Build",
    level: "Intermediate",
    badge: "Launch fast",
    rating: "4.8",
    learners: "12.1k",
    duration: "8 hrs",
    lessons: 38,
    price: "$69",
    coverGradient:
      "linear-gradient(135deg, rgba(192,132,252,0.95), rgba(17,24,39,0.92))",
  },
  {
    slug: "project-rhythm-for-product-leads",
    title: "Project Rhythm for Product Leads",
    instructor: "Jonah Mercer",
    summary:
      "Plan complex launches, reduce coordination drag, and keep stakeholder communication crisp.",
    section: "recommended",
    topicSlug: "project-management",
    category: "Leadership",
    level: "All levels",
    badge: "Popular",
    rating: "4.7",
    learners: "9.7k",
    duration: "6.5 hrs",
    lessons: 29,
    price: "$54",
    coverGradient:
      "linear-gradient(135deg, rgba(16,185,129,0.95), rgba(6,78,59,0.92))",
  },
  {
    slug: "figma-systems-for-fast-teams",
    title: "Figma Systems for Fast Teams",
    instructor: "Leila Stone",
    summary:
      "Turn early product ideas into reusable systems, dark themes, and review-ready design specs.",
    section: "recommended",
    topicSlug: "figma",
    category: "Design Systems",
    level: "Beginner",
    badge: "Staff pick",
    rating: "4.8",
    learners: "15.3k",
    duration: "7 hrs",
    lessons: 35,
    price: "$59",
    coverGradient:
      "linear-gradient(135deg, rgba(244,114,182,0.94), rgba(80,7,36,0.9))",
  },
  {
    slug: "react-state-machines-and-ux",
    title: "React State Machines and UX",
    instructor: "Dax Monroe",
    summary:
      "Build complex UI flows that stay fast, legible, and testable under pressure.",
    section: "development",
    topicSlug: "react",
    category: "Frontend",
    level: "Intermediate",
    badge: "Hot",
    rating: "4.9",
    learners: "21.2k",
    duration: "10 hrs",
    lessons: 52,
    price: "$79",
    coverGradient:
      "linear-gradient(135deg, rgba(34,211,238,0.95), rgba(8,47,73,0.9))",
  },
  {
    slug: "typescript-for-large-codebases",
    title: "TypeScript for Large Codebases",
    instructor: "Helena Park",
    summary:
      "Model safer APIs, tighten compiler signals, and make refactors survivable in growing repos.",
    section: "development",
    topicSlug: "typescript",
    category: "Engineering",
    level: "Advanced",
    badge: "New",
    rating: "4.8",
    learners: "11.5k",
    duration: "8.5 hrs",
    lessons: 41,
    price: "$72",
    coverGradient:
      "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(15,23,42,0.92))",
  },
  {
    slug: "node-backends-that-fail-closed",
    title: "Node Backends That Fail Closed",
    instructor: "Amir Vance",
    summary:
      "Create typed APIs, defensive validation, and operational boundaries that tell the truth.",
    section: "development",
    topicSlug: "nodejs",
    category: "Backend",
    level: "Intermediate",
    badge: "Editor choice",
    rating: "4.7",
    learners: "8.9k",
    duration: "7.5 hrs",
    lessons: 33,
    price: "$64",
    coverGradient:
      "linear-gradient(135deg, rgba(74,222,128,0.92), rgba(20,83,45,0.94))",
  },
  {
    slug: "next-router-static-commerce",
    title: "Static Commerce Surfaces with Next.js",
    instructor: "Nora Kline",
    summary:
      "Blend catalog density, app router patterns, and premium visual hierarchy without fake backend behavior.",
    section: "development",
    topicSlug: "nextjs-p",
    category: "App Router",
    level: "Intermediate",
    badge: "Featured",
    rating: "4.9",
    learners: "14.8k",
    duration: "9 hrs",
    lessons: 44,
    price: "$77",
    coverGradient:
      "linear-gradient(135deg, rgba(148,163,184,0.9), rgba(15,23,42,0.96))",
  },
  {
    slug: "applied-llm-product-strategy",
    title: "Applied LLM Product Strategy",
    instructor: "Eden Walsh",
    summary:
      "Choose the right model patterns, shape real user value, and avoid shallow AI feature theater.",
    section: "data-ai",
    topicSlug: "large-language-models",
    category: "LLMs",
    level: "Intermediate",
    badge: "Trending",
    rating: "4.9",
    learners: "17.9k",
    duration: "8 hrs",
    lessons: 36,
    price: "$82",
    coverGradient:
      "linear-gradient(135deg, rgba(129,140,248,0.95), rgba(49,46,129,0.92))",
  },
  {
    slug: "generative-ai-workflows",
    title: "Generative AI Workflows for Teams",
    instructor: "Kian Abbott",
    summary:
      "Map prompting, retrieval, evaluation, and review loops into grounded shipping workflows.",
    section: "data-ai",
    topicSlug: "generative-ai",
    category: "GenAI",
    level: "All levels",
    badge: "Popular",
    rating: "4.8",
    learners: "24.6k",
    duration: "7 hrs",
    lessons: 31,
    price: "$68",
    coverGradient:
      "linear-gradient(135deg, rgba(232,121,249,0.92), rgba(88,28,135,0.94))",
  },
  {
    slug: "machine-learning-for-operators",
    title: "Machine Learning for Operators",
    instructor: "Priya Donnelly",
    summary:
      "Focus on the pieces product and ops teams actually need: evaluation, thresholding, and rollout logic.",
    section: "data-ai",
    topicSlug: "machine-learning",
    category: "Machine Learning",
    level: "Intermediate",
    badge: "High demand",
    rating: "4.7",
    learners: "10.3k",
    duration: "8.5 hrs",
    lessons: 39,
    price: "$73",
    coverGradient:
      "linear-gradient(135deg, rgba(96,165,250,0.94), rgba(30,41,59,0.94))",
  },
  {
    slug: "data-analysis-for-product-decisions",
    title: "Data Analysis for Product Decisions",
    instructor: "Soren Diaz",
    summary:
      "Interrogate funnels, usage shifts, and experiment results with analysis that drives decisions instead of dashboards.",
    section: "data-ai",
    topicSlug: "data-analysis",
    category: "Analytics",
    level: "Beginner",
    badge: "Fast start",
    rating: "4.6",
    learners: "7.8k",
    duration: "5.5 hrs",
    lessons: 27,
    price: "$49",
    coverGradient:
      "linear-gradient(135deg, rgba(45,212,191,0.92), rgba(17,94,89,0.94))",
  },
  {
    slug: "strategy-sprints-for-growth-teams",
    title: "Strategy Sprints for Growth Teams",
    instructor: "Camille Hart",
    summary:
      "Run fast planning cycles, sharpen priorities, and translate broad goals into weekly execution.",
    section: "business",
    topicSlug: "business-strategy",
    category: "Strategy",
    level: "All levels",
    badge: "Leadership",
    rating: "4.8",
    learners: "13.4k",
    duration: "6 hrs",
    lessons: 28,
    price: "$58",
    coverGradient:
      "linear-gradient(135deg, rgba(251,191,36,0.95), rgba(120,53,15,0.92))",
  },
  {
    slug: "finance-fluency-for-founders",
    title: "Finance Fluency for Founders",
    instructor: "Miles Rowan",
    summary:
      "Read margins, runway, and growth efficiency clearly enough to make better operational calls.",
    section: "business",
    topicSlug: "finance",
    category: "Finance",
    level: "Beginner",
    badge: "Core skill",
    rating: "4.7",
    learners: "8.2k",
    duration: "5 hrs",
    lessons: 24,
    price: "$44",
    coverGradient:
      "linear-gradient(135deg, rgba(250,204,21,0.94), rgba(63,98,18,0.94))",
  },
  {
    slug: "project-management-for-shipping-work",
    title: "Project Management for Shipping Work",
    instructor: "Avery Sloan",
    summary:
      "Reduce execution drag with better planning, cleaner updates, and tighter launch rituals.",
    section: "business",
    topicSlug: "project-management",
    category: "Execution",
    level: "Intermediate",
    badge: "Manager favorite",
    rating: "4.8",
    learners: "16.1k",
    duration: "6.5 hrs",
    lessons: 30,
    price: "$61",
    coverGradient:
      "linear-gradient(135deg, rgba(52,211,153,0.95), rgba(6,78,59,0.94))",
  },
  {
    slug: "business-analysis-for-modern-ops",
    title: "Business Analysis for Modern Ops",
    instructor: "Talia Baird",
    summary:
      "Frame process gaps, define requirements, and turn operational ambiguity into usable specs.",
    section: "business",
    topicSlug: "business-analysis",
    category: "Operations",
    level: "Intermediate",
    badge: "Practical",
    rating: "4.6",
    learners: "6.9k",
    duration: "5.5 hrs",
    lessons: 26,
    price: "$47",
    coverGradient:
      "linear-gradient(135deg, rgba(244,114,182,0.92), rgba(131,24,67,0.94))",
  },
  {
    slug: "cloud-systems-for-product-engineers",
    title: "Cloud Systems for Product Engineers",
    instructor: "Luca Neves",
    summary:
      "Understand the infrastructure underneath modern apps well enough to debug, scale, and cost-control them.",
    section: "it-software",
    topicSlug: "cloud-computing",
    category: "Cloud",
    level: "Intermediate",
    badge: "Reliable",
    rating: "4.8",
    learners: "9.9k",
    duration: "8 hrs",
    lessons: 37,
    price: "$70",
    coverGradient:
      "linear-gradient(135deg, rgba(125,211,252,0.96), rgba(14,116,144,0.94))",
  },
  {
    slug: "aws-practitioner-with-context",
    title: "AWS Practitioner with Context",
    instructor: "Jamie Forde",
    summary:
      "Move past memorization and learn how cloud primitives show up inside real product stacks.",
    section: "it-software",
    topicSlug: "aws-certified-cloud-practitioner-clf-c02",
    category: "AWS",
    level: "Beginner",
    badge: "Certification",
    rating: "4.7",
    learners: "19.2k",
    duration: "7 hrs",
    lessons: 34,
    price: "$57",
    coverGradient:
      "linear-gradient(135deg, rgba(251,191,36,0.95), rgba(146,64,14,0.94))",
  },
  {
    slug: "software-architecture-decisions",
    title: "Software Architecture Decisions",
    instructor: "Noel Bishop",
    summary:
      "Evaluate boundaries, resilience, and service shape with enough rigor to avoid expensive rewrites.",
    section: "it-software",
    topicSlug: "software-architecture",
    category: "Architecture",
    level: "Advanced",
    badge: "Deep dive",
    rating: "4.9",
    learners: "11.1k",
    duration: "9 hrs",
    lessons: 40,
    price: "$83",
    coverGradient:
      "linear-gradient(135deg, rgba(163,230,53,0.92), rgba(54,83,20,0.96))",
  },
  {
    slug: "qa-systems-and-software-testing",
    title: "QA Systems and Software Testing",
    instructor: "Ivy Chen",
    summary:
      "Design testing layers that find regressions early and keep engineering confidence high.",
    section: "it-software",
    topicSlug: "software-testing",
    category: "Quality",
    level: "All levels",
    badge: "Trusted",
    rating: "4.6",
    learners: "7.2k",
    duration: "6 hrs",
    lessons: 29,
    price: "$52",
    coverGradient:
      "linear-gradient(135deg, rgba(248,113,113,0.92), rgba(127,29,29,0.96))",
  },
  {
    slug: "figma-dark-ui-systems",
    title: "Figma Dark UI Systems",
    instructor: "Mara Lewis",
    summary:
      "Craft polished dark interfaces with intentional type, spacing, and reusable product primitives.",
    section: "design",
    topicSlug: "figma",
    category: "Figma",
    level: "Intermediate",
    badge: "Studio pick",
    rating: "4.9",
    learners: "20.4k",
    duration: "8 hrs",
    lessons: 37,
    price: "$71",
    coverGradient:
      "linear-gradient(135deg, rgba(217,70,239,0.92), rgba(112,26,117,0.96))",
  },
  {
    slug: "web-design-that-converts",
    title: "Web Design That Converts",
    instructor: "Opal Santos",
    summary:
      "Structure homepage density, hierarchy, and interaction cues for product discovery instead of decorative clutter.",
    section: "design",
    topicSlug: "web-design",
    category: "Web Design",
    level: "Beginner",
    badge: "Fresh",
    rating: "4.7",
    learners: "9.1k",
    duration: "6.5 hrs",
    lessons: 28,
    price: "$55",
    coverGradient:
      "linear-gradient(135deg, rgba(96,165,250,0.92), rgba(49,46,129,0.96))",
  },
  {
    slug: "design-thinking-for-builders",
    title: "Design Thinking for Builders",
    instructor: "Jules Mercer",
    summary:
      "Use design thinking to clarify user problems, improve product bets, and sharpen execution.",
    section: "design",
    topicSlug: "design-thinking",
    category: "Design Thinking",
    level: "All levels",
    badge: "Workshop",
    rating: "4.6",
    learners: "6.4k",
    duration: "5 hrs",
    lessons: 22,
    price: "$43",
    coverGradient:
      "linear-gradient(135deg, rgba(34,197,94,0.92), rgba(20,83,45,0.96))",
  },
  {
    slug: "photoshop-speed-for-creatives",
    title: "Photoshop Speed for Creatives",
    instructor: "Rina Brooks",
    summary:
      "Get sharper with retouching, composition, and brand-support asset work without slowing the production flow.",
    section: "design",
    topicSlug: "photoshop",
    category: "Creative Tools",
    level: "Beginner",
    badge: "Popular",
    rating: "4.5",
    learners: "14.2k",
    duration: "4.5 hrs",
    lessons: 20,
    price: "$39",
    coverGradient:
      "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(30,58,138,0.96))",
  },
  {
    slug: "digital-marketing-for-modern-launches",
    title: "Digital Marketing for Modern Launches",
    instructor: "Elliot Price",
    summary:
      "Shape campaigns, landing pages, and audience loops that support real product launches.",
    section: "marketing",
    topicSlug: "digital-marketing",
    category: "Growth",
    level: "All levels",
    badge: "Launch ready",
    rating: "4.8",
    learners: "13.7k",
    duration: "7 hrs",
    lessons: 31,
    price: "$60",
    coverGradient:
      "linear-gradient(135deg, rgba(251,113,133,0.94), rgba(131,24,67,0.96))",
  },
  {
    slug: "social-strategy-that-sticks",
    title: "Social Strategy That Sticks",
    instructor: "Milo Grant",
    summary:
      "Build channel-specific social plans that are measurable, repeatable, and grounded in audience behavior.",
    section: "marketing",
    topicSlug: "social-media-marketing",
    category: "Social",
    level: "Beginner",
    badge: "Fast mover",
    rating: "4.6",
    learners: "8.8k",
    duration: "5.5 hrs",
    lessons: 26,
    price: "$46",
    coverGradient:
      "linear-gradient(135deg, rgba(244,114,182,0.92), rgba(159,18,57,0.96))",
  },
  {
    slug: "email-campaign-systems",
    title: "Email Campaign Systems",
    instructor: "Sasha Quinn",
    summary:
      "Create lifecycle email programs that drive retention without bloated tooling or vague metrics.",
    section: "marketing",
    topicSlug: "email-marketing",
    category: "Lifecycle",
    level: "Intermediate",
    badge: "Retention",
    rating: "4.7",
    learners: "7.4k",
    duration: "5 hrs",
    lessons: 23,
    price: "$45",
    coverGradient:
      "linear-gradient(135deg, rgba(251,191,36,0.92), rgba(120,53,15,0.96))",
  },
  {
    slug: "marketing-strategy-for-operators",
    title: "Marketing Strategy for Operators",
    instructor: "Wren Calloway",
    summary:
      "Translate positioning, channel priorities, and launch timing into a workable marketing system.",
    section: "marketing",
    topicSlug: "marketing-strategy",
    category: "Strategy",
    level: "Intermediate",
    badge: "Playbook",
    rating: "4.8",
    learners: "10.6k",
    duration: "6 hrs",
    lessons: 28,
    price: "$53",
    coverGradient:
      "linear-gradient(135deg, rgba(16,185,129,0.92), rgba(6,95,70,0.96))",
  },
];

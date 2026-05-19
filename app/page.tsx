import HomeHero from "components/university/HomeHero";
import PopularSkills from "components/university/PopularSkills";
import CourseRail from "components/university/CourseRail";
import TopicGrid from "components/university/TopicGrid";
import {
  getHomepageTopicSections,
  getPopularSkills,
  getTrendingTopics,
} from "lib/university/catalog";
import { sampleCourses } from "src/data/university/sampleCourses";

export const metadata = {
  description:
    "Upcube University is a dark course marketplace for practical AI, product, business, and technical learning.",
  openGraph: {
    type: "website",
  },
};

const sectionCourseMap = {
  recommended: sampleCourses.filter(
    (course) => course.section === "recommended",
  ),
  development: sampleCourses.filter(
    (course) => course.section === "development",
  ),
  "data-ai": sampleCourses.filter((course) => course.section === "data-ai"),
  business: sampleCourses.filter((course) => course.section === "business"),
  "it-software": sampleCourses.filter(
    (course) => course.section === "it-software",
  ),
  design: sampleCourses.filter((course) => course.section === "design"),
  marketing: sampleCourses.filter((course) => course.section === "marketing"),
};

export default async function HomePage() {
  const [homepageSections, popularSkills, trendingTopics] = await Promise.all([
    getHomepageTopicSections(),
    getPopularSkills(),
    getTrendingTopics(),
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-xs font-medium uppercase tracking-[0.26em] text-white/72 sm:px-6 lg:px-8">
          <span>New releases weekly</span>
          <span className="hidden text-white/50 sm:inline">
            AI, product, code, design, and operator skills in one marketplace
          </span>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-200">
            Cohort access open
          </span>
        </div>
      </div>

      <HomeHero
        featuredTopics={
          homepageSections.find((section) => section.key === "development")
            ?.topics ?? []
        }
        popularSkills={popularSkills.slice(0, 6)}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 pb-20 sm:px-6 lg:px-8">
        <CourseRail
          eyebrow="Recommended for you"
          title="Applied learning paths for builders shipping modern work."
          description="Deterministic sample inventory for the marketplace shell while course catalog integrations are still local-only."
          courses={sectionCourseMap.recommended}
        />

        <PopularSkills
          title="Popular skills"
          description="Fast-entry topics pulled from the provided category source and adapted into the Upcube topic system."
          skills={popularSkills}
        />

        <TopicGrid
          eyebrow="Trending topics"
          title="Browse what teams are learning right now."
          description="Topic discovery stays homepage-first: broad categories, dense cards, and direct paths into `/topic/[slug]`."
          topics={trendingTopics}
        />

        {homepageSections
          .filter((section) => section.key !== "recommended")
          .map((section) => (
            <CourseRail
              key={section.key}
              eyebrow={section.title}
              title={section.headline}
              description={section.description}
              topics={section.topics}
              courses={sectionCourseMap[section.key]}
            />
          ))}

        <section className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_transparent_45%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))] px-6 py-10 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200/80">
                Marketplace shell
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for dark-mode browsing, dense discovery, and static
                export-safe content.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">
                Search, filtering, payments, auth, and backend fulfillment are
                intentionally out of scope for this pass. The homepage uses
                deterministic local course data and topic links grounded in the
                provided category CSV.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/72 sm:min-w-[320px]">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-2xl font-semibold text-white">7</div>
                <div className="mt-1">Reusable marketplace sections</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-2xl font-semibold text-white">30+</div>
                <div className="mt-1">Linked topic destinations</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

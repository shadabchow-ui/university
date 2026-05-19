import { CourseCatalog } from "components/university/CourseCatalog";
import { getAllCourses, getFeaturedTopics } from "lib/university/topic";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Courses",
  description:
    "Browse the Upcube University catalog by topic, level, duration, and access tier.",
};

export default function CoursesPage() {
  const courses = getAllCourses();
  const featuredTopics = getFeaturedTopics(8);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-14 pt-6 md:px-6">
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] px-6 py-8 md:px-8 md:py-10">
        <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
          Catalog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Explore all courses
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400 md:text-base">
          Browse the local course catalog across featured lanes first, then
          refine by level, duration, access tier, or sort order.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {featuredTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/topic/${topic.slug}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition hover:border-cyan-300/30 hover:text-white"
            >
              {topic.title}
            </Link>
          ))}
        </div>
      </section>
      <Suspense
        fallback={
          <div className="h-24 rounded-[2rem] border border-white/10 bg-neutral-950/60" />
        }
      >
        <CourseCatalog
          courses={courses}
          emptyMessage="No courses are currently available in the local catalog."
        />
      </Suspense>
    </section>
  );
}

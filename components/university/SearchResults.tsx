"use client";

import { CourseFilters } from "components/university/CourseFilters";
import { CourseGrid } from "components/university/CourseGrid";
import { filterCourses, getTopicMatches } from "lib/university/search";
import { UniversityCourse, UniversityTopic } from "lib/university/topic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SearchResults({
  courses,
  topics,
}: {
  courses: UniversityCourse[];
  topics: UniversityTopic[];
}) {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const level = searchParams?.get("level") ?? "all";
  const duration = searchParams?.get("duration") ?? "all";
  const price = searchParams?.get("price") ?? "all";
  const sort = searchParams?.get("sort") ?? "featured";

  const filteredCourses = filterCourses(courses, {
    query,
    level,
    duration,
    price,
    sort: sort as
      | "featured"
      | "highest-rated"
      | "most-reviewed"
      | "newest"
      | "shortest",
  });
  const matchingTopics = getTopicMatches(topics, query);

  return (
    <div className="grid gap-6 md:grid-cols-[280px_minmax(0,1fr)]">
      <CourseFilters resultCount={filteredCourses.length} searchEnabled />
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] px-6 py-7">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            Search
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            {query ? `Results for "${query}"` : "Search all courses"}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">
            Local results are generated from the repository category data and
            sample course catalog, with no external search backend required.
          </p>
        </section>
        {matchingTopics.length ? (
          <section className="rounded-[2rem] border border-white/10 bg-neutral-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Matching topics
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              Browse directly into the closest topic lanes.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {matchingTopics.map((topic) => (
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
        ) : null}
        <CourseGrid
          courses={filteredCourses}
          emptyMessage="No courses matched the current search and filter combination."
        />
      </div>
    </div>
  );
}

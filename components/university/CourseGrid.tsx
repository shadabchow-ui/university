"use client";

import { UniversityCourse } from "lib/university/topic";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function CourseCard({ course }: { course: UniversityCourse }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            {course.topicTitle}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {course.title}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
          {course.priceLabel}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-neutral-400">
        {course.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {course.tags.slice(0, 3).map((tag) => (
          <span
            key={`${course.id}-${tag}`}
            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-400">
        <div>
          <dt>Level</dt>
          <dd className="mt-1 text-white">{course.level}</dd>
        </div>
        <div>
          <dt>Duration</dt>
          <dd className="mt-1 text-white">{course.durationHours} hours</dd>
        </div>
        <div>
          <dt>Instructor</dt>
          <dd className="mt-1 text-white">{course.instructor}</dd>
        </div>
        <div>
          <dt>Rating</dt>
          <dd className="mt-1 text-white">
            {course.rating.toFixed(1)} / {course.reviewCount.toLocaleString()}
          </dd>
        </div>
      </dl>
      <div className="mt-auto pt-6">
        <Link
          href={`/topic/${course.topicSlug}`}
          className="inline-flex items-center text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100"
        >
          Explore topic
        </Link>
      </div>
    </article>
  );
}

export function CourseGrid({
  courses,
  emptyMessage,
}: {
  courses: UniversityCourse[];
  emptyMessage: string;
}) {
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setVisibleCount(12);
  }, [courses.length]);

  const visibleCourses = useMemo(
    () => courses.slice(0, visibleCount),
    [courses, visibleCount],
  );

  if (!courses.length) {
    return (
      <div className="rounded-[2rem] border border-dashed border-white/10 bg-neutral-950/60 p-10 text-center text-neutral-400">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visibleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {visibleCount < courses.length ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + 12)}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Show 12 more
          </button>
        </div>
      ) : null}
    </div>
  );
}

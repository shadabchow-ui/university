import clsx from "clsx";
import Link from "next/link";
import type { SampleCourse } from "src/data/university/sampleCourses";

export default function CourseCard({
  course,
  compact = false,
}: {
  course: SampleCourse;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/topic/${course.topicSlug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#101010] transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#151515]"
    >
      <div
        className={clsx(
          "relative overflow-hidden border-b border-white/8 px-5",
          compact ? "py-5" : "py-6",
        )}
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: course.coverGradient,
          }}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <span className="rounded-full border border-white/18 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/80">
              {course.category}
            </span>
            <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-white/72">
              {course.level}
            </p>
          </div>
          <span className="rounded-full border border-white/18 bg-black/30 px-3 py-1 text-xs font-medium text-white">
            {course.badge}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-white/66">{course.instructor}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/58">
          {course.summary}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm">
          <span className="font-semibold text-amber-300">{course.rating}</span>
          <span className="text-white/60">({course.learners})</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/56">
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            {course.duration}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            {course.lessons} lessons
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
          <span className="text-sm text-white/54">Preview route</span>
          <span className="text-base font-semibold text-white">
            {course.price}
          </span>
        </div>
      </div>
    </Link>
  );
}

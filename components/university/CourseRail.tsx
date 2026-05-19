import Link from "next/link";
import CourseCard from "components/university/CourseCard";
import type { UniversityTopic } from "lib/university/catalog";
import type { SampleCourse } from "src/data/university/sampleCourses";

export default function CourseRail({
  eyebrow,
  title,
  description,
  courses,
  topics = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  courses: SampleCourse[];
  topics?: UniversityTopic[];
}) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/42">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/64 sm:text-base">
            {description}
          </p>
        </div>
        {topics.length ? (
          <div className="flex flex-wrap gap-2 lg:max-w-[32rem] lg:justify-end">
            {topics.slice(0, 6).map((topic) => (
              <Link
                key={topic.slug}
                href={topic.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-white/74 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex min-w-full gap-4">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="min-w-[280px] max-w-[320px] flex-1 snap-start sm:min-w-[300px]"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

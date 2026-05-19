"use client";

import { CourseFilters } from "components/university/CourseFilters";
import { CourseGrid } from "components/university/CourseGrid";
import { filterCourses } from "lib/university/search";
import { UniversityCourse } from "lib/university/topic";
import { useSearchParams } from "next/navigation";

export function CourseCatalog({
  courses,
  emptyMessage,
}: {
  courses: UniversityCourse[];
  emptyMessage: string;
}) {
  const searchParams = useSearchParams();
  const filteredCourses = filterCourses(courses, {
    level: searchParams?.get("level") ?? "all",
    duration: searchParams?.get("duration") ?? "all",
    price: searchParams?.get("price") ?? "all",
    sort: (searchParams?.get("sort") ?? "featured") as
      | "featured"
      | "highest-rated"
      | "most-reviewed"
      | "newest"
      | "shortest",
  });

  return (
    <div className="grid gap-6 md:grid-cols-[280px_minmax(0,1fr)]">
      <CourseFilters resultCount={filteredCourses.length} />
      <CourseGrid courses={filteredCourses} emptyMessage={emptyMessage} />
    </div>
  );
}

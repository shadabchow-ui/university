import { UniversityCourse, UniversityTopic } from "./topic";

export type CourseSort =
  | "featured"
  | "highest-rated"
  | "most-reviewed"
  | "newest"
  | "shortest";

export const courseSortOptions: { value: CourseSort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "highest-rated", label: "Highest rated" },
  { value: "most-reviewed", label: "Most reviewed" },
  { value: "newest", label: "Newest" },
  { value: "shortest", label: "Shortest" },
];

export type CourseFilters = {
  query?: string;
  level?: string;
  duration?: string;
  price?: string;
  sort?: CourseSort;
  topicSlug?: string;
};

export function getTopicMatches(topics: UniversityTopic[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return topics
    .filter((topic) =>
      [topic.title, topic.track, topic.description].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    )
    .slice(0, 8);
}

export function filterCourses(
  courses: UniversityCourse[],
  filters: CourseFilters,
) {
  const normalizedQuery = filters.query?.trim().toLowerCase() ?? "";
  const sort = filters.sort ?? "featured";

  const filtered = courses.filter((course) => {
    if (filters.topicSlug && course.topicSlug !== filters.topicSlug) {
      return false;
    }

    if (
      filters.level &&
      filters.level !== "all" &&
      course.level !== filters.level
    ) {
      return false;
    }

    if (
      filters.duration &&
      filters.duration !== "all" &&
      course.durationBucket !== filters.duration
    ) {
      return false;
    }

    if (
      filters.price &&
      filters.price !== "all" &&
      course.priceLabel !== filters.price
    ) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return [
      course.title,
      course.topicTitle,
      course.instructor,
      course.description,
      ...course.tags,
    ].some((value) => value.toLowerCase().includes(normalizedQuery));
  });

  return filtered.sort((left, right) => {
    switch (sort) {
      case "highest-rated":
        return right.rating - left.rating;
      case "most-reviewed":
        return right.reviewCount - left.reviewCount;
      case "newest":
        return right.updatedAt.localeCompare(left.updatedAt);
      case "shortest":
        return left.durationHours - right.durationHours;
      case "featured":
      default:
        if (right.rating !== left.rating) {
          return right.rating - left.rating;
        }

        return right.reviewCount - left.reviewCount;
    }
  });
}

import { SearchResults } from "components/university/SearchResults";
import { getAllCourses, getAllTopics } from "lib/university/topic";
import { Suspense } from "react";

export const metadata = {
  title: "Search",
  description: "Search local Upcube University topics and course samples.",
};

export default function SearchPage() {
  const topics = getAllTopics();
  const courses = getAllCourses();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-6 md:px-6">
      <Suspense
        fallback={
          <div className="h-24 rounded-[2rem] border border-white/10 bg-neutral-950/60" />
        }
      >
        <SearchResults topics={topics} courses={courses} />
      </Suspense>
    </section>
  );
}

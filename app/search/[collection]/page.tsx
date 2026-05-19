import { CourseCatalog } from "components/university/CourseCatalog";
import { TopicPageHeader } from "components/university/TopicPageHeader";
import {
  getAllTopics,
  getCoursesForTopic,
  getTopicBySlug,
} from "lib/university/topic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTopics().map((topic) => ({ collection: topic.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const topic = getTopicBySlug(params.collection);

  if (!topic) return notFound();

  return {
    title: `${topic.title} Search Collection`,
    description: topic.description,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
}) {
  const params = await props.params;
  const topic = getTopicBySlug(params.collection);

  if (!topic) {
    notFound();
  }

  const courses = getCoursesForTopic(topic.slug);

  return (
    <section className="space-y-8 px-4 pb-14 pt-6 md:px-6">
      <TopicPageHeader topic={topic} />
      <Suspense
        fallback={
          <div className="h-24 rounded-[2rem] border border-white/10 bg-neutral-950/60" />
        }
      >
        <CourseCatalog
          courses={courses}
          emptyMessage="No courses are available for this collection yet."
        />
      </Suspense>
    </section>
  );
}

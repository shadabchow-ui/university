import { CourseCatalog } from "components/university/CourseCatalog";
import { TopicPageHeader } from "components/university/TopicPageHeader";
import {
  getAllTopics,
  getCoursesForTopic,
  getRelatedTopics,
  getTopicBySlug,
} from "lib/university/topic";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTopics().map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return {};
  }

  return {
    title: `${topic.title} Courses`,
    description: topic.description,
  };
}

export default async function TopicPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const courses = getCoursesForTopic(topic.slug);
  const relatedTopics = getRelatedTopics(topic);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-14 pt-6 md:px-6">
      <TopicPageHeader topic={topic} />
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-neutral-950/60 p-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            Topic overview
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            A deterministic path through {topic.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400">
            This lane stays local to the repo data: category metadata comes from
            the CSV source index, while course cards are generated sample
            content meant to stand in until real catalog imports are wired in.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            Related topics
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedTopics.map((relatedTopic) => (
              <Link
                key={relatedTopic.slug}
                href={`/topic/${relatedTopic.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 transition hover:border-cyan-300/30 hover:text-white"
              >
                {relatedTopic.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="h-24 rounded-[2rem] border border-white/10 bg-neutral-950/60" />
        }
      >
        <CourseCatalog
          courses={courses}
          emptyMessage="No sample courses are available for this topic yet."
        />
      </Suspense>
    </section>
  );
}

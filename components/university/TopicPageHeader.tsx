import { UniversityTopic } from "lib/university/topic";
import Link from "next/link";

export function TopicPageHeader({ topic }: { topic: UniversityTopic }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_42%),linear-gradient(135deg,_rgba(12,12,12,0.96),_rgba(20,20,20,0.88))] px-6 py-8 shadow-[0_32px_100px_rgba(0,0,0,0.32)] md:px-8 md:py-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-neutral-400">
          <Link href="/" className="transition hover:text-white">
            Upcube University
          </Link>
          <span>/</span>
          <Link href="/courses" className="transition hover:text-white">
            Courses
          </Link>
          <span>/</span>
          <span className="text-neutral-200">{topic.title}</span>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              {topic.track}
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {topic.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 md:text-base">
              {topic.description}
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-3 text-left md:min-w-[360px]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                Courses
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {topic.courseCount}
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                Weekly pace
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {topic.weeklyHours}h
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                Learners
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {topic.learnerCount.toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

import type { UniversityTopic } from "lib/university/catalog";
import Link from "next/link";

export default function TopicGrid({
  eyebrow,
  title,
  description,
  topics,
}: {
  eyebrow: string;
  title: string;
  description: string;
  topics: UniversityTopic[];
}) {
  return (
    <section className="space-y-6">
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

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {topics.map((topic, index) => (
          <Link
            key={topic.slug}
            href={topic.href}
            className="group rounded-[1.6rem] border border-white/10 bg-[#101010] p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#151515]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                Topic {String(index + 1).padStart(2, "0")}
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/48">
                Browse
              </div>
            </div>
            <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
              {topic.label}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Open the topic preview route and keep discovery moving without
              leaving the marketplace shell.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

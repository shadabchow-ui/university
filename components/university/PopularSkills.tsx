import type { UniversityTopic } from "lib/university/catalog";
import Link from "next/link";

export default function PopularSkills({
  title,
  description,
  skills,
}: {
  title: string;
  description: string;
  skills: UniversityTopic[];
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/42">
        {title}
      </p>
      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-2xl text-base leading-7 text-white/66">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {skills.map((skill) => (
            <Link
              key={skill.slug}
              href={skill.href}
              className="rounded-full border border-white/10 bg-black/25 px-4 py-2.5 text-sm font-medium text-white/76 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              {skill.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

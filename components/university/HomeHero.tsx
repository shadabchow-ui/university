import logoMark from "md/logo-mark.png";
import type { UniversityTopic } from "lib/university/catalog";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero({
  featuredTopics,
  popularSkills,
}: {
  featuredTopics: UniversityTopic[];
  popularSkills: UniversityTopic[];
}) {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_34%),linear-gradient(180deg,_#050505,_#0a0a0a)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/74">
            <SparklesIcon className="h-4 w-4" />
            Upcube University
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The dark marketplace for modern builders, operators, and AI teams.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Discover applied courses across development, data, business, design,
            marketing, and IT. The layout is optimized for dense browsing while
            keeping Upcube branding, local sample data, and static export
            compatibility intact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/topic/artificial-intelligence"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Explore AI tracks
            </Link>
            <Link
              href="/topic/web-development"
              className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              Browse development
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {popularSkills.map((skill) => (
              <Link
                key={skill.slug}
                href={skill.href}
                className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/72 transition hover:border-white/20 hover:text-white"
              >
                {skill.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-5 shadow-2xl shadow-black/30">
          <div className="rounded-[1.6rem] border border-white/10 bg-[#0f0f0f] p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white px-3 py-3">
                  <Image
                    src={logoMark}
                    alt="Upcube University logo"
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Upcube University
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/46">
                    Live preview shell
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200">
                Marketplace
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-black/30 p-4">
                <BoltIcon className="h-5 w-5 text-amber-300" />
                <div className="mt-3 text-2xl font-semibold text-white">
                  180+
                </div>
                <p className="mt-1 text-sm text-white/58">
                  Hands-on lessons mapped into dark rails and cards.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/30 p-4">
                <ArrowTrendingUpIcon className="h-5 w-5 text-sky-300" />
                <div className="mt-3 text-2xl font-semibold text-white">9</div>
                <p className="mt-1 text-sm text-white/58">
                  Homepage sections spanning discovery, skills, and category
                  depth.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-black/30 p-4">
                <SparklesIcon className="h-5 w-5 text-fuchsia-300" />
                <div className="mt-3 text-2xl font-semibold text-white">
                  100%
                </div>
                <p className="mt-1 text-sm text-white/58">
                  Local sample state with no backend, auth, or checkout claims.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-white/8 bg-[#090909] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/44">
                    Featured topics
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Start with the highest-signal categories
                  </p>
                </div>
                <span className="text-xs text-white/44">
                  Direct topic links
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {featuredTopics.slice(0, 4).map((topic) => (
                  <Link
                    key={topic.slug}
                    href={topic.href}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/78 transition hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                  >
                    {topic.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

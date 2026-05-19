import clsx from "clsx";
import type { UniversityCategoryGroup } from "lib/university/categories";
import Link from "next/link";

type MegaMenuProps = {
  activeGroup: UniversityCategoryGroup | null;
  groups: UniversityCategoryGroup[];
  onSelectGroup: (groupId: string) => void;
};

export function MegaMenu({
  activeGroup,
  groups,
  onSelectGroup,
}: MegaMenuProps) {
  if (!activeGroup) {
    return null;
  }

  const spotlightTopics = activeGroup.topics.slice(0, 8);
  const marketplaceTopics = activeGroup.topics.slice(8);

  return (
    <div className="absolute inset-x-0 top-full z-40 border-t border-white/10 bg-[#050505]/98 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[240px_minmax(0,260px)_minmax(0,1fr)] lg:px-6">
        <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-3">
          <p className="px-3 pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Category Groups
          </p>
          <div className="space-y-1">
            {groups.map((group) => (
              <button
                key={group.id}
                type="button"
                onMouseEnter={() => onSelectGroup(group.id)}
                onFocus={() => onSelectGroup(group.id)}
                onClick={() => onSelectGroup(group.id)}
                className={clsx(
                  "flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition",
                  activeGroup.id === group.id
                    ? "bg-white text-black"
                    : "text-neutral-300 hover:bg-white/6 hover:text-white",
                )}
              >
                <span>{group.title}</span>
                <span
                  className={clsx(
                    "text-xs",
                    activeGroup.id === group.id
                      ? "text-neutral-700"
                      : "text-neutral-500",
                  )}
                >
                  {group.topics.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
            {activeGroup.title}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            Explore the busiest paths
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-400">
            {activeGroup.description}
          </p>
          <div className="mt-5 space-y-2">
            {spotlightTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={topic.href}
                className="block rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-neutral-200 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Marketplace
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Dense navigation for fast browsing
              </h3>
            </div>
            <Link
              href={activeGroup.topics[0]?.href ?? "/search"}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-neutral-300 transition hover:border-white/30 hover:text-white"
            >
              View all
            </Link>
          </div>
          <div className="mt-5 grid gap-x-5 gap-y-2 sm:grid-cols-2 xl:grid-cols-3">
            {marketplaceTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={topic.href}
                className="rounded-xl px-3 py-2 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                {topic.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

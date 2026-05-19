import type { UniversityMarketplaceData } from "lib/university/categories";
import Link from "next/link";
import { UniversityBrand } from "./UniversityBrand";

type UniversityFooterProps = {
  marketplace: UniversityMarketplaceData;
};

const footerColumns = [
  {
    title: "For Teams",
    links: [
      { label: "Teach on Upcube", href: "/search?q=Teach on Upcube" },
      { label: "Business Learning", href: "/search?q=Business Learning" },
      {
        label: "Instructor Guidelines",
        href: "/search?q=Instructor Guidelines",
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/search?q=Help Center" },
      { label: "Learning Paths", href: "/search?q=Learning Paths" },
      { label: "Accessibility", href: "/search?q=Accessibility" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/search?q=Privacy" },
      { label: "Terms", href: "/search?q=Terms" },
      { label: "Cookie Settings", href: "/search?q=Cookie Settings" },
    ],
  },
];

export function UniversityFooter({ marketplace }: UniversityFooterProps) {
  const topCategories = marketplace.groups.slice(0, 6);

  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:px-6">
        <div className="space-y-5">
          <UniversityBrand />
          <p className="max-w-sm text-sm leading-6 text-neutral-400">
            A dark, marketplace-style shell for discovering courses, skill
            tracks, and dense category browsing across Upcube University.
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Top Categories
          </p>
          <div className="mt-4 space-y-3">
            {topCategories.map((group) => (
              <Link
                key={group.id}
                href={group.topics[0]?.href ?? "/search"}
                className="block text-sm text-neutral-300 transition hover:text-white"
              >
                {group.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Popular Skills
          </p>
          <div className="mt-4 space-y-3">
            {marketplace.popularSkills.map((skill) => (
              <Link
                key={skill.slug}
                href={skill.href}
                className="block text-sm text-neutral-300 transition hover:text-white"
              >
                {skill.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                {column.title}
              </p>
              <div className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-neutral-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <p>© 2026 Upcube University. All rights reserved.</p>
          <p>
            Static-export-friendly shell with black branded navigation and
            footer.
          </p>
        </div>
      </div>
    </footer>
  );
}

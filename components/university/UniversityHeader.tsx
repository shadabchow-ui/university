import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import CartModal from "components/cart/modal";
import type { UniversityMarketplaceData } from "lib/university/categories";
import Form from "next/form";
import Link from "next/link";
import { CategoryNav } from "./CategoryNav";
import { MobileUniversityMenu } from "./MobileUniversityMenu";
import { UniversityBrand } from "./UniversityBrand";

type UniversityHeaderProps = {
  marketplace: UniversityMarketplaceData;
};

export function UniversityHeader({ marketplace }: UniversityHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#030303]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 lg:px-6">
        <MobileUniversityMenu groups={marketplace.groups} />
        <UniversityBrand className="min-w-0" />

        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-white/20 hover:text-white"
          >
            Find Courses
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <Link
            href="/search?q=Instructor"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            Instructor
          </Link>
          <Link
            href="/search?q=My Learning"
            className="text-sm text-neutral-400 transition hover:text-white"
          >
            My Learning
          </Link>
        </div>

        <Form
          action="/search"
          className="relative ml-auto hidden flex-1 lg:block"
        >
          <input
            type="text"
            name="q"
            autoComplete="off"
            placeholder="Search for courses, certifications, skills, or learning paths"
            className="h-12 w-full rounded-full border border-white/10 bg-white/[0.05] px-6 pr-14 text-sm text-white placeholder:text-neutral-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition focus:border-white/20"
          />
          <MagnifyingGlassIcon className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
        </Form>

        <div className="flex items-center gap-2 text-neutral-300">
          <div className="hidden lg:block">
            <CartModal />
          </div>
          <Link
            href="/search?q=Profile"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.08] lg:inline-flex"
            aria-label="Profile placeholder"
          >
            <UserCircleIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <CategoryNav groups={marketplace.groups} />
    </header>
  );
}

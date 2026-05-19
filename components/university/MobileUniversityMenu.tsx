"use client";

import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { UniversityCategoryGroup } from "lib/university/categories";
import Form from "next/form";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { UniversityBrand } from "./UniversityBrand";

type MobileUniversityMenuProps = {
  groups: UniversityCategoryGroup[];
};

export function MobileUniversityMenu({ groups }: MobileUniversityMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Open university menu"
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
      >
        <Bars3Icon className="h-5 w-5" />
      </button>
      <Transition show={isOpen}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="relative z-50 lg:hidden"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-200 ease-in"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 flex w-full max-w-sm flex-col overflow-y-auto border-r border-white/10 bg-[#050505] p-5">
              <div className="flex items-center justify-between">
                <UniversityBrand compact />
                <button
                  type="button"
                  aria-label="Close university menu"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <Form action="/search" className="relative mt-6">
                <input
                  type="text"
                  name="q"
                  autoComplete="off"
                  placeholder="Search courses, skills, or paths"
                  className="h-12 w-full rounded-full border border-white/10 bg-white/[0.05] px-5 pr-12 text-sm text-white placeholder:text-neutral-500"
                />
                <MagnifyingGlassIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
              </Form>

              <div className="mt-6 grid gap-2 text-sm">
                <Link
                  href="/search"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-neutral-200"
                >
                  Find Courses
                </Link>
                <Link
                  href="/search?q=Instructor"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-neutral-400"
                >
                  Instructor
                </Link>
                <Link
                  href="/search?q=My Learning"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-neutral-400"
                >
                  My Learning
                </Link>
                <Link
                  href="/search?q=Profile"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-neutral-400"
                >
                  <UserCircleIcon className="h-5 w-5" />
                  Profile
                </Link>
              </div>

              <div className="mt-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                  Categories
                </p>
                <div className="mt-3 space-y-2">
                  {groups.map((group) => (
                    <Disclosure
                      key={group.id}
                      as="div"
                      className="rounded-3xl border border-white/8 bg-white/[0.03]"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-white">
                            <span>{group.title}</span>
                            <ChevronDownIcon
                              className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="grid gap-1 px-3 pb-3">
                            {group.topics.slice(0, 8).map((topic) => (
                              <Link
                                key={topic.slug}
                                href={topic.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-2xl px-3 py-2 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-white"
                              >
                                {topic.label}
                              </Link>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

"use client";

import clsx from "clsx";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { UniversityCategoryGroup } from "lib/university/categories";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MegaMenu } from "./MegaMenu";

type CategoryNavProps = {
  groups: UniversityCategoryGroup[];
};

export function CategoryNav({ groups }: CategoryNavProps) {
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? null);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const activeGroup =
    groups.find((group) => group.id === activeGroupId) ?? groups[0] ?? null;

  const selectGroup = (groupId: string) => {
    setActiveGroupId(groupId);
    setIsOpen(true);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative border-y border-white/8 bg-black/80 backdrop-blur-xl"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="mx-auto hidden max-w-7xl items-center gap-2 px-4 lg:flex lg:px-6">
        {groups.slice(0, 8).map((group) => {
          const isActive = activeGroup?.id === group.id && isOpen;

          return (
            <button
              key={group.id}
              type="button"
              onMouseEnter={() => selectGroup(group.id)}
              onFocus={() => selectGroup(group.id)}
              onClick={() => {
                setActiveGroupId(group.id);
                setIsOpen((value) =>
                  activeGroup?.id === group.id ? !value : true,
                );
              }}
              className={clsx(
                "group inline-flex items-center gap-2 border-b-2 px-1 py-4 text-sm font-medium transition",
                isActive
                  ? "border-white text-white"
                  : "border-transparent text-neutral-400 hover:text-white",
              )}
            >
              <span>{group.title}</span>
              <ChevronDownIcon
                className={clsx("h-3.5 w-3.5 transition", {
                  "rotate-180": isActive,
                })}
              />
            </button>
          );
        })}
        <Link
          href="/search"
          className="ml-auto inline-flex items-center gap-2 py-4 text-sm font-medium text-neutral-400 transition hover:text-white"
        >
          Browse all topics
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
      {isOpen ? (
        <MegaMenu
          activeGroup={activeGroup}
          groups={groups}
          onSelectGroup={selectGroup}
        />
      ) : null}
    </div>
  );
}

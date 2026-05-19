"use client";

import { courseSortOptions, CourseSort } from "lib/university/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const levelOptions = ["all", "Beginner", "Intermediate", "Advanced"] as const;
const durationOptions = [
  "all",
  "Quick hit",
  "Deep dive",
  "Career track",
] as const;
const priceOptions = ["all", "Free", "Included", "Premium"] as const;

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.24em] text-neutral-500">
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white"
    >
      {children}
    </select>
  );
}

export function CourseFilters({
  resultCount,
  searchEnabled = false,
}: {
  resultCount: number;
  searchEnabled?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (!value || value === "all" || value === "featured") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.replace(params.toString() ? `${pathname}?${params}` : pathname, {
      scroll: false,
    });
  };

  const query = searchParams?.get("q") ?? "";
  const level = searchParams?.get("level") ?? "all";
  const duration = searchParams?.get("duration") ?? "all";
  const price = searchParams?.get("price") ?? "all";
  const sort = (searchParams?.get("sort") as CourseSort | null) ?? "featured";

  return (
    <>
      <div className="md:hidden">
        <details className="rounded-3xl border border-white/10 bg-neutral-950/90">
          <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-white">
            Filters and sort
          </summary>
          <div className="grid gap-4 border-t border-white/10 px-5 py-5">
            {searchEnabled ? (
              <Label>
                Search
                <input
                  value={query}
                  onChange={(event) => setParam("q", event.target.value)}
                  placeholder="Search topics or courses"
                  className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm tracking-normal text-white placeholder:text-neutral-500"
                />
              </Label>
            ) : null}
            <Label>
              Level
              <Select
                value={level}
                onChange={(value) => setParam("level", value)}
              >
                {levelOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === "all" ? "All levels" : option}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              Duration
              <Select
                value={duration}
                onChange={(value) => setParam("duration", value)}
              >
                {durationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === "all" ? "Any duration" : option}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              Access
              <Select
                value={price}
                onChange={(value) => setParam("price", value)}
              >
                {priceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option === "all" ? "Any access" : option}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              Sort
              <Select
                value={sort}
                onChange={(value) => setParam("sort", value)}
              >
                {courseSortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Label>
          </div>
        </details>
      </div>
      <aside className="hidden rounded-[2rem] border border-white/10 bg-neutral-950/90 p-5 md:sticky md:top-6 md:block">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.26em] text-neutral-500">
            Browse
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {resultCount.toLocaleString()}
          </p>
          <p className="text-sm text-neutral-400">results after filters</p>
        </div>
        <div className="grid gap-4">
          {searchEnabled ? (
            <Label>
              Search
              <input
                value={query}
                onChange={(event) => setParam("q", event.target.value)}
                placeholder="Search topics or courses"
                className="rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm tracking-normal text-white placeholder:text-neutral-500"
              />
            </Label>
          ) : null}
          <Label>
            Level
            <Select
              value={level}
              onChange={(value) => setParam("level", value)}
            >
              {levelOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "all" ? "All levels" : option}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Duration
            <Select
              value={duration}
              onChange={(value) => setParam("duration", value)}
            >
              {durationOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "all" ? "Any duration" : option}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Access
            <Select
              value={price}
              onChange={(value) => setParam("price", value)}
            >
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "all" ? "Any access" : option}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            Sort
            <Select value={sort} onChange={(value) => setParam("sort", value)}>
              {courseSortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </Label>
        </div>
      </aside>
    </>
  );
}

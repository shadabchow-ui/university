import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type UniversityBrandProps = {
  className?: string;
  compact?: boolean;
};

export function UniversityBrand({
  className,
  compact = false,
}: UniversityBrandProps) {
  return (
    <Link
      href="/"
      className={clsx("flex items-center gap-3 text-white", className)}
      prefetch={true}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <Image
          src="/logo-mark.png"
          alt="Upcube University logo mark"
          width={28}
          height={28}
          className="h-7 w-7"
          priority
        />
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="text-[0.64rem] font-medium uppercase tracking-[0.34em] text-neutral-400">
          Upcube
        </span>
        <span
          className={clsx("font-semibold tracking-tight text-white", {
            "text-sm": compact,
            "text-base sm:text-lg": !compact,
          })}
        >
          University
        </span>
      </div>
    </Link>
  );
}

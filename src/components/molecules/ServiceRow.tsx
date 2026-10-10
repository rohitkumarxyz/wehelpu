import Link from "next/link";
import { Arrow } from "@/components/atoms/Arrow";

type ServiceRowProps = {
  index: number;
  title: string;
  summary: string;
  href: string;
};

export function ServiceRow({ index, title, summary, href }: ServiceRowProps) {
  return (
    <Link
      href={href}
      className="group relative isolate grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 overflow-hidden border-t border-line py-8 sm:grid-cols-[5rem_1fr_1fr_auto] sm:gap-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-paper-deep transition-transform duration-500 ease-out group-hover:scale-y-100"
      />
      <span className="font-mono text-sm text-ink-soft">{String(index).padStart(2, "0")}</span>
      <h3 className="font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
        {title}
      </h3>
      <p className="col-span-3 col-start-2 text-ink-soft sm:col-span-1 sm:col-start-3">{summary}</p>
      <span className="row-start-1 col-start-3 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink sm:col-start-4">
        <Arrow />
      </span>
    </Link>
  );
}

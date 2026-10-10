import Link from "next/link";

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted }: LogoProps) {
  return (
    <Link href="/" aria-label="WeHelpU home" className="inline-flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="8" className={inverted ? "fill-paper" : "fill-ink"} />
        <path
          d="M7 9.5 L10 19 L14 12 L18 19 L21 9.5"
          fill="none"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={inverted ? "stroke-ink" : "stroke-paper"}
        />
        <circle cx="21.5" cy="20.5" r="2.2" className="fill-accent" />
      </svg>
      <span className={`font-display text-xl tracking-tight ${inverted ? "text-paper" : "text-ink"}`}>
        WeHelp<span className="italic text-accent">U</span>
      </span>
    </Link>
  );
}

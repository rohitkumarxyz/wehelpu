import Link from "next/link";

type Variant = "primary" | "dark" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-ink",
  dark: "bg-ink text-paper hover:bg-accent",
  ghost: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
};

export function Button({ href, children, variant = "primary", external, className = "" }: ButtonProps) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300 ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

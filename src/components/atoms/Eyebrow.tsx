type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.18em] text-ink-soft ${className}`}>
      {children}
    </p>
  );
}

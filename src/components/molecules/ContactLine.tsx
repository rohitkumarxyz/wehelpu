type ContactLineProps = {
  label: string;
  value: string;
  href?: string;
};

export function ContactLine({ label, value, href }: ContactLineProps) {
  return (
    <div className="border-t border-line py-5">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">{label}</p>
      {href ? (
        <a href={href} className="mt-1 block font-display text-2xl transition-colors hover:text-accent">
          {value}
        </a>
      ) : (
        <p className="mt-1 font-display text-2xl">{value}</p>
      )}
    </div>
  );
}

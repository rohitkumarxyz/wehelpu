type StepCardProps = {
  step: number;
  title: string;
  body: string;
  meta: string;
};

export function StepCard({ step, title, body, meta }: StepCardProps) {
  return (
    <div className="relative h-full border-l border-paper/15 pl-6">
      <span className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-accent" />
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50">
        Step {step} · {meta}
      </p>
      <h3 className="mt-3 font-display text-2xl text-paper">{title}</h3>
      <p className="mt-3 leading-relaxed text-paper/70">{body}</p>
    </div>
  );
}

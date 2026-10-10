import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, intro, inverted }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <Eyebrow className={inverted ? "text-paper/60" : ""}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl ${
          inverted ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${inverted ? "text-paper/70" : "text-ink-soft"}`}>{intro}</p>
      )}
    </Reveal>
  );
}

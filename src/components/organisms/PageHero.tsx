import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-line">
      <Container className="pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
        </Reveal>
      </Container>
    </section>
  );
}

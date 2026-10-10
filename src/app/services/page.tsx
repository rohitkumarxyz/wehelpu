import type { Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { PageHero } from "@/components/organisms/PageHero";
import { CtaBand } from "@/components/organisms/CtaBand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "AI assistants, business automation, websites and AI integrations for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            What we build, and <span className="italic text-accent">what you get.</span>
          </>
        }
        intro="Every project starts with a free call and a fixed written quote. All services are delivered online. You receive working software, access and documentation. Nothing is shipped physically."
      />

      <Container className="py-8">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-24 border-b border-line py-16 last:border-b-0">
            <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <p className="font-mono text-sm text-ink-soft">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.description}</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <Eyebrow>For example</Eyebrow>
                  <ul className="mt-4 space-y-3">
                    {s.examples.map((ex) => (
                      <li key={ex} className="flex gap-3 leading-snug">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-paper-deep p-6">
                  <Eyebrow>You receive</Eyebrow>
                  <ul className="mt-4 space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 leading-snug">
                        <svg width="16" height="16" viewBox="0 0 14 14" className="mt-0.5 shrink-0 text-moss" aria-hidden="true">
                          <path d="M2.5 7.5 5.5 10.5 11.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>
        ))}
      </Container>

      <CtaBand />
    </>
  );
}

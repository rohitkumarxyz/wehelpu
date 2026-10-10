import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { StepCard } from "@/components/molecules/StepCard";

const steps = [
  {
    title: "A short call",
    meta: "30 min",
    body: "You walk us through a normal day. We listen for the tasks that repeat, and the ones that keep slipping.",
  },
  {
    title: "A written plan",
    meta: "2–3 days",
    body: "You get a one-page scope: what we'll build, what it won't do, timeline and cost. Nothing starts until you agree.",
  },
  {
    title: "Build, show, adjust",
    meta: "1–4 weeks",
    body: "We share progress every week on a call or a screen recording, so there are no surprises at the end.",
  },
  {
    title: "Handover & support",
    meta: "30 days",
    body: "Your team gets a walkthrough and docs. We fix anything that breaks in the first month at no extra charge.",
  },
];

export function Process() {
  return (
    <section className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <SectionHeading
          inverted
          eyebrow="How we work"
          title={
            <>
              No jargon. No 40-page proposals. <span className="italic text-accent">Just the work.</span>
            </>
          }
        />
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <StepCard step={i + 1} {...s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

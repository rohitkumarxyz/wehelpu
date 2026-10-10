import type { Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { PageHero } from "@/components/organisms/PageHero";
import { Process } from "@/components/organisms/Process";
import { CtaBand } from "@/components/organisms/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "WeHelpU is a small technology studio helping small businesses use AI and automation.",
};

const beliefs = [
  {
    title: "Start with one problem",
    body: "We'd rather fix one annoying task really well than sell you a big platform you'll use 10% of.",
  },
  {
    title: "Use what you already have",
    body: "Your team already knows WhatsApp and Sheets. We build around them instead of forcing new software on everyone.",
  },
  {
    title: "Plain language, fixed quotes",
    body: "You'll always know what's being built, what it costs and when it'll be ready, in writing, before we start.",
  },
  {
    title: "You own it",
    body: "Accounts, data and code are set up in your name. If we part ways, everything keeps running.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A small studio for <span className="italic text-accent">small businesses.</span>
          </>
        }
        intro="WeHelpU is a technology studio based in India. We build AI assistants, automations and websites for small and growing businesses: shops, clinics, coaching centres, D2C brands and service firms."
      />

      <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr] lg:py-28">
        <Reveal>
          <Eyebrow>Why we exist</Eyebrow>
          <p className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            Big companies have whole teams to automate their busywork. Most small businesses have the owner, at 11 PM, on WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            The tools to fix this exist now, and they&apos;re affordable. AI that understands customer messages,
            automations that link your apps, websites that load in a second. What&apos;s missing is someone to set them
            up properly for a business your size, and explain them in plain words.
          </p>
          <p>
            That&apos;s what we do. We work with a small number of clients at a time, so each one gets direct attention
            from the people actually building the system.
          </p>
        </Reveal>
      </Container>

      <Container className="pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.08} className="h-full">
              <div className="h-full bg-paper p-8">
                <h2 className="font-display text-2xl">{b.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Process />
      <div className="pt-24 sm:pt-32">
        <CtaBand />
      </div>
    </>
  );
}

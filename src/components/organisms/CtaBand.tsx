import { Arrow } from "@/components/atoms/Arrow";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { site, whatsappLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-accent px-7 py-14 text-accent-ink sm:px-14 sm:py-20">
            <svg
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-72 w-72 opacity-20"
              viewBox="0 0 200 200"
            >
              <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="42" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <h2 className="relative max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Tell us the one task you&apos;d happily never do again.
            </h2>
            <p className="relative mt-5 max-w-xl text-lg text-accent-ink/80">
              We&apos;ll tell you honestly if it can be automated, and roughly what it would take. The first call is free.
            </p>
            <div className="relative mt-9 flex flex-wrap gap-3">
              <Button href={whatsappLink()} external variant="dark">
                WhatsApp {site.phone} <Arrow />
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-full border border-accent-ink/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-accent-ink hover:text-accent"
              >
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ServiceRow } from "@/components/molecules/ServiceRow";
import { services } from "@/lib/services";

export function ServicesList() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Four things, done <span className="italic text-accent">properly.</span>
            </>
          }
          intro="We keep the list short on purpose. Each of these is something a small team feels the moment it's working."
        />
        <div className="mt-14 border-b border-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <ServiceRow index={i + 1} title={s.title} summary={s.short} href={`/services#${s.slug}`} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

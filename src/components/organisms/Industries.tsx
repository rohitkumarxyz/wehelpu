import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";

const industries = [
  { name: "Retail & D2C brands", need: "Order updates, catalogue bots, abandoned-cart nudges" },
  { name: "Clinics & salons", need: "Bookings, reminders, follow-ups after a visit" },
  { name: "Coaching & education", need: "Enquiry handling, fee reminders, batch updates" },
  { name: "Real estate", need: "Lead routing, site-visit scheduling, brochure sharing" },
  { name: "Restaurants & cloud kitchens", need: "Menu on WhatsApp, order tracking, reviews" },
  { name: "Agencies & services", need: "Client onboarding, reporting, invoice chasing" },
];

export function Industries() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for businesses where the owner still answers the phone."
          intro="Usually a team of 2 to 50 people, running on WhatsApp, a few spreadsheets and a lot of goodwill."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.08} className="h-full">
              <div className="group h-full bg-paper p-7 transition-colors duration-300 hover:bg-paper-deep">
                <p className="font-mono text-xs text-ink-soft">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-2xl">{ind.name}</h3>
                <p className="mt-2 text-ink-soft">{ind.need}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

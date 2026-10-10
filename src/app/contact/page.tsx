import type { Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/atoms/Button";
import { Arrow } from "@/components/atoms/Arrow";
import { ContactLine } from "@/components/molecules/ContactLine";
import { PageHero } from "@/components/organisms/PageHero";
import { ContactForm } from "@/components/organisms/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with WeHelpU by phone, WhatsApp or email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say hello. <span className="italic text-accent">We reply within a working day.</span>
          </>
        }
        intro="For project enquiries, billing questions, refunds or anything else, use any of the options below."
      />

      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_1.4fr] lg:py-24">
        <div>
          <ContactLine label="Phone / WhatsApp" value={site.phone} href={`tel:+${site.phoneRaw}`} />
          <ContactLine label="Email" value={site.email} href={`mailto:${site.email}`} />
          <ContactLine label="Location" value={site.location} />
          <ContactLine label="Working hours" value={site.hours} />
          <div className="border-t border-line pt-6">
            <Button href={whatsappLink()} external variant="dark">
              Open WhatsApp chat <Arrow />
            </Button>
          </div>
        </div>
        <ContactForm />
      </Container>
    </>
  );
}

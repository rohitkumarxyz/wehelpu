"use client";

import { useState } from "react";
import { Container } from "@/components/atoms/Container";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { FaqItem } from "@/components/molecules/FaqItem";

const faqs = [
  {
    q: "We're a small team. Is this overkill for us?",
    a: "Small teams usually benefit the most, because every hour saved is an hour the owner gets back. We start with one problem, not a big transformation project.",
  },
  {
    q: "Do we need to change the tools we already use?",
    a: "Usually not. We connect what you already have, whether that's WhatsApp Business, Google Sheets, Zoho, Tally exports or Shopify. We only suggest a new tool if the current one genuinely can't do the job.",
  },
  {
    q: "Will the AI say something wrong to my customers?",
    a: "We set clear limits on what the assistant can answer. Anything outside them, like refunds or complaints, goes straight to a person on your team. You can read every conversation.",
  },
  {
    q: "How is a project priced?",
    a: "Every project gets a fixed written quote after the first call, based on scope. You'll know the full cost and payment schedule before any work begins.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "You get 30 days of free fixes. After that you can take an optional monthly support plan, or run things yourselves using the handover docs.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading eyebrow="Questions" title="Things owners usually ask first." />
        <div className="border-b border-line">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              question={f.q}
              answer={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

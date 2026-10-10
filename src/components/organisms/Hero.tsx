"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Arrow } from "@/components/atoms/Arrow";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { NotificationStack } from "@/components/organisms/NotificationStack";
import { whatsappLink } from "@/lib/site";

const chores = ["answering FAQs", "making invoices", "chasing payments", "updating sheets"];

export function Hero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % chores.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-14 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-accent align-middle" />
              Taking on new projects
            </Eyebrow>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-[2.5rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Stop spending your evenings{" "}
            <span className="relative block h-[1.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={chores[i]}
                  className="absolute inset-x-0 block whitespace-nowrap italic text-accent"
                  initial={reduce ? false : { y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {chores[i]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            WeHelpU builds AI assistants, automations and websites for small businesses. We take the repetitive
            work off your team&apos;s plate so they can get back to customers.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <Button href={whatsappLink()} external>
              Talk to us on WhatsApp <Arrow />
            </Button>
            <Button href="/services" variant="ghost">
              See what we build
            </Button>
          </motion.div>
        </div>

        <NotificationStack />
      </Container>
    </section>
  );
}

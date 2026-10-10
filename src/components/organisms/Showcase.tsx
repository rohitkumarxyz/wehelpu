"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/atoms/Container";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ChatScene } from "@/components/organisms/scenes/ChatScene";
import { WorkflowScene } from "@/components/organisms/scenes/WorkflowScene";
import { DashboardScene } from "@/components/organisms/scenes/DashboardScene";

const CLIP_MS = 12000;

const clips = [
  {
    label: "WhatsApp assistant",
    caption: "A sweet shop's assistant takes an order at 2 AM, in Hinglish, without anyone waking up.",
    Scene: ChatScene,
  },
  {
    label: "Order automation",
    caption: "One order on the website sets off five steps that used to take someone 15 minutes.",
    Scene: WorkflowScene,
  },
  {
    label: "Daily dashboard",
    caption: "The numbers an owner checks every evening, in one place, updated on their own.",
    Scene: DashboardScene,
  },
];

function timecode(ms: number) {
  const s = Math.floor(ms / 1000);
  return `00:${String(s).padStart(2, "0")}`;
}

export function Showcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const [active, setActive] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const playing = inView && !reduce;

  useEffect(() => {
    if (!playing) return;
    const started = Date.now() - elapsed;
    const id = setInterval(() => {
      const e = Date.now() - started;
      if (e >= CLIP_MS) {
        setActive((a) => (a + 1) % clips.length);
        setElapsed(0);
      } else {
        setElapsed(e);
      }
    }, 100);
    return () => clearInterval(id);
    // elapsed is read once per clip start; restarting on every tick would reset the timer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, active]);

  const select = (i: number) => {
    setActive(i);
    setElapsed(0);
  };

  const { Scene, caption } = clips[active];

  return (
    <section id="demo" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="See it work"
            title={
              <>
                Three small systems, <span className="italic">running quietly</span> in the background.
              </>
            }
          />
          <p className="max-w-sm text-ink-soft lg:text-right">
            Example scenarios, recreated as live demos. Names and numbers are illustrative.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-2" role="tablist" aria-label="Demo clips">
            {clips.map((clip, i) => (
              <button
                key={clip.label}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => select(i)}
                className={`relative overflow-hidden rounded-2xl border p-5 text-left transition-colors ${
                  active === i ? "border-ink bg-ink text-paper" : "border-line hover:border-ink/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs opacity-60">CLIP {String(i + 1).padStart(2, "0")}</span>
                  {active === i && (
                    <span className="font-mono text-xs text-accent">
                      {timecode(elapsed)} / {timecode(CLIP_MS)}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-display text-2xl">{clip.label}</p>
                {active === i && (
                  <>
                    <p className="mt-2 text-sm leading-relaxed text-paper/70">{clip.caption}</p>
                    <span className="absolute bottom-0 left-0 h-[3px] bg-accent" style={{ width: `${(elapsed / CLIP_MS) * 100}%` }} />
                  </>
                )}
              </button>
            ))}
          </div>

          <div className="relative min-h-[32rem] overflow-hidden rounded-[1.75rem] border border-line bg-paper-deep p-5 sm:p-8">
            <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              <span className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${playing ? "animate-pulse bg-accent" : "bg-ink-soft"}`} />
                {playing ? "Playing" : "Paused"}
              </span>
              <span>{clips[active].label}</span>
            </div>
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <Scene active={playing} />
            </motion.div>
            <p className="sr-only" aria-live="polite">
              {caption}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

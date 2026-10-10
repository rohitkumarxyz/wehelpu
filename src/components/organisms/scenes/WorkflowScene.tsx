"use client";

import { motion } from "framer-motion";
import { useLoopStep } from "@/lib/useLoopStep";

const nodes = [
  { app: "Website", title: "New order received", detail: "#2481 · ₹2,200 · Priya M." },
  { app: "Billing", title: "GST invoice created", detail: "INV-0932.pdf" },
  { app: "WhatsApp", title: "Confirmation sent", detail: "Invoice + delivery slot" },
  { app: "Sheets", title: "Orders sheet updated", detail: "Row 418 added" },
  { app: "Team", title: "Dispatch notified", detail: "Ravi · packing list" },
];

export function WorkflowScene({ active = true }: { active?: boolean }) {
  const step = useLoopStep(nodes.length + 1, 1100, 2800, active);

  return (
    <div className="flex h-full flex-col justify-center gap-0 p-2">
      {nodes.map((node, i) => {
        const done = step > i;
        const running = step === i;
        return (
          <div key={node.title} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <motion.div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-[11px]"
                animate={{
                  backgroundColor: done ? "var(--moss)" : running ? "var(--accent)" : "rgba(0,0,0,0)",
                  borderColor: done ? "var(--moss)" : running ? "var(--accent)" : "var(--line)",
                  color: done || running ? "var(--paper)" : "var(--ink-soft)",
                  scale: running ? 1.08 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {done ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2.5 7.5 5.5 10.5 11.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  String(i + 1).padStart(2, "0")
                )}
              </motion.div>
              {i < nodes.length - 1 && (
                <div className="relative h-8 w-px bg-line">
                  <motion.div
                    className="absolute left-0 top-0 w-px bg-moss"
                    animate={{ height: done ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
            <motion.div
              className="flex flex-1 items-start justify-between gap-3 pt-1.5"
              animate={{ opacity: done || running ? 1 : 0.4 }}
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">{node.app}</p>
                <p className="font-medium leading-tight">{node.title}</p>
                <p className="text-sm text-ink-soft">{node.detail}</p>
              </div>
              <span className="pt-1 font-mono text-[11px] text-ink-soft">
                {done ? `0.${i + 2}s` : running ? "running" : "waiting"}
              </span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

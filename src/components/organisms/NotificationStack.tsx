"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Note = { app: string; title: string; body: string; tone: "accent" | "moss" | "ink" };

const notes: Note[] = [
  { app: "WhatsApp", title: "Replied to Ankit", body: "Shared price list and delivery slots", tone: "moss" },
  { app: "Billing", title: "Invoice INV-0932 sent", body: "₹2,200 · paid via UPI", tone: "ink" },
  { app: "CRM", title: "New lead from Instagram", body: "Priya M. · assigned to Neha", tone: "accent" },
  { app: "Reminders", title: "14 payment reminders sent", body: "Polite nudge, 3 days overdue", tone: "ink" },
  { app: "Calendar", title: "Appointment booked", body: "Saturday, 4:30 PM", tone: "moss" },
  { app: "Sheets", title: "Daily sales updated", body: "128 orders · ₹1.9L", tone: "accent" },
];

const toneClass: Record<Note["tone"], string> = {
  accent: "bg-accent",
  moss: "bg-moss",
  ink: "bg-ink",
};

const VISIBLE = 4;

export function NotificationStack() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? VISIBLE : 1);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCount((c) => c + 1), 1800);
    return () => clearInterval(id);
  }, [reduce]);

  const visible = Array.from({ length: Math.min(count, VISIBLE) }, (_, k) => {
    const n = count - 1 - k;
    return { id: n, note: notes[n % notes.length] };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative h-[27rem] overflow-hidden rounded-[2rem] bg-paper-deep p-5 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:18px_18px]">
        <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          <span>While you were busy</span>
          <span>Today</span>
        </div>
        <ul className="flex flex-col gap-3">
          <AnimatePresence initial={false}>
            {visible.map(({ id, note }, k) => (
              <motion.li
                key={id}
                layout
                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                animate={{ opacity: 1 - k * 0.18, y: 0, scale: 1 - k * 0.02 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="flex gap-3 rounded-2xl border border-line bg-paper p-4 shadow-[0_8px_24px_-16px_rgba(22,21,15,0.4)]"
              >
                <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${toneClass[note.tone]}`} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">{note.app}</p>
                    <p className="font-mono text-[10px] text-ink-soft">{k === 0 ? "now" : `${k * 2}m ago`}</p>
                  </div>
                  <p className="mt-0.5 font-medium">{note.title}</p>
                  <p className="truncate text-sm text-ink-soft">{note.body}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <motion.div
        className="absolute -bottom-6 -left-4 rotate-[-4deg] rounded-2xl bg-ink px-5 py-4 text-paper shadow-xl sm:-left-10"
        initial={reduce ? false : { opacity: 0, y: 20, rotate: -12 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 180, damping: 16 }}
      >
        <p className="font-display text-3xl leading-none">
          31<span className="text-accent"> hrs</span>
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-paper/60">saved a week, example setup</p>
      </motion.div>
    </div>
  );
}

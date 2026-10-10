"use client";

import { AnimatePresence, motion } from "framer-motion";

type FaqItemProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export function FaqItem({ question, answer, open, onToggle }: FaqItemProps) {
  return (
    <div className="border-t border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-xl sm:text-2xl">{question}</span>
        <span
          className={`relative h-8 w-8 shrink-0 rounded-full border border-ink/20 transition-colors ${
            open ? "border-accent bg-accent" : ""
          }`}
          aria-hidden="true"
        >
          <span className={`absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 ${open ? "bg-accent-ink" : "bg-ink"}`} />
          <span
            className={`absolute left-1/2 top-1/2 h-3 w-px -translate-y-1/2 transition-transform duration-300 ${
              open ? "scale-y-0 bg-accent-ink" : "bg-ink"
            }`}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

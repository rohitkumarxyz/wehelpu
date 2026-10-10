"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLoopStep } from "@/lib/useLoopStep";

type Message = { from: "customer" | "bot"; text: string; time: string };

const script: Message[] = [
  { from: "customer", text: "Hi, kaju katli 1kg ka price kya hai?", time: "2:14 AM" },
  {
    from: "bot",
    text: "Namaste! Kaju katli is ₹1,100/kg. We can deliver today. Which area are you in?",
    time: "2:14 AM",
  },
  { from: "customer", text: "Sector 46. 2kg chahiye", time: "2:15 AM" },
  {
    from: "bot",
    text: "Booked. Order #2481, 2kg Kaju Katli, ₹2,200. Delivery tomorrow before 11 AM. Payment link sent below.",
    time: "2:15 AM",
  },
];

// Each message takes two steps: a typing indicator, then the message.
const STEPS = script.length * 2 + 1;

export function ChatScene({ active = true }: { active?: boolean }) {
  const step = useLoopStep(STEPS, 1300, 3200, active);
  const shown = Math.floor(step / 2);
  const typing = step % 2 === 1 && shown < script.length ? script[shown].from : null;

  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden rounded-[2rem] border-[6px] border-ink bg-paper-deep shadow-[0_30px_60px_-30px_rgba(22,21,15,0.5)]">
      <div className="flex items-center gap-3 bg-moss px-4 py-3 text-paper">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/15 font-display text-lg">S</div>
        <div className="leading-tight">
          <p className="text-sm font-medium">Sharma Sweets</p>
          <p className="text-xs text-paper/70">{typing === "bot" ? "typing…" : "Assistant online"}</p>
        </div>
      </div>

      <div className="flex min-h-[23rem] flex-1 flex-col justify-end gap-2 p-4">
        <AnimatePresence initial={false}>
          {script.slice(0, shown).map((m, i) => (
            <motion.div
              key={`${i}-${m.text}`}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`max-w-[82%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ${
                m.from === "customer" ? "self-end rounded-br-sm bg-wa" : "self-start rounded-bl-sm bg-white"
              }`}
            >
              {m.text}
              <span className="ml-2 inline-block align-bottom text-[10px] text-ink-soft/70">{m.time}</span>
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`flex gap-1 rounded-2xl px-3 py-3 shadow-sm ${
                typing === "customer" ? "self-end bg-wa" : "self-start bg-white"
              }`}
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-ink-soft/60"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between border-t border-ink/10 bg-white/60 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
        <span>Answered by assistant</span>
        <span className="text-moss">avg reply 3s</span>
      </div>
    </div>
  );
}
